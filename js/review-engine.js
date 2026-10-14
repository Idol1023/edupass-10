// =========================================================
// EDUPASS 10 - REVIEW & MISTAKE NOTEBOOK ENGINE
// Detailed Explanations, Trap Warnings & Retake Capabilities
// =========================================================

class ReviewEngine {
  constructor() {
    this.currentReviewList = [];
    this.activeFilter = 'all'; // 'all', 'wrong', 'flagged'
    this.currentTitle = "";

    this.initDOMRefs();
    this.bindEvents();
  }

  initDOMRefs() {
    this.reviewContainer = document.getElementById('reviewQuestionsList');
    this.reviewHeaderTitle = document.getElementById('reviewExamTitle');
    this.filterAllBtn = document.getElementById('btnReviewFilterAll');
    this.filterWrongBtn = document.getElementById('btnReviewFilterWrong');
    this.mistakeNotebookList = document.getElementById('mistakeNotebookList');
    this.mistakeSubjectFilter = document.getElementById('mistakeSubjectFilter');
    this.retakeMistakesBtn = document.getElementById('btnRetakeMistakes');
    this.clearMistakesBtn = document.getElementById('btnClearMistakes');
  }

  bindEvents() {
    if (this.filterAllBtn) {
      this.filterAllBtn.addEventListener('click', () => this.setFilter('all'));
    }
    if (this.filterWrongBtn) {
      this.filterWrongBtn.addEventListener('click', () => this.setFilter('wrong'));
    }
    if (this.mistakeSubjectFilter) {
      this.mistakeSubjectFilter.addEventListener('change', () => this.renderMistakeNotebook());
    }
    if (this.retakeMistakesBtn) {
      this.retakeMistakesBtn.addEventListener('click', () => this.retakeMistakesExam());
    }
    if (this.clearMistakesBtn) {
      this.clearMistakesBtn.addEventListener('click', () => {
        if (confirm("Bạn có chắc chắn muốn làm sạch toàn bộ sổ tay câu sai không?")) {
          localStorage.removeItem('edupass_mistakes');
          this.renderMistakeNotebook();
          window.soundManager.playClick();
        }
      });
    }
  }

  setReviewData(questionsList, title = "Bài thi vừa làm") {
    this.currentReviewList = questionsList || [];
    this.currentTitle = title;
    this.setFilter('all');
  }

  setFilter(filterMode) {
    this.activeFilter = filterMode;

    if (this.filterAllBtn) {
      this.filterAllBtn.classList.toggle('active', filterMode === 'all');
    }
    if (this.filterWrongBtn) {
      this.filterWrongBtn.classList.toggle('active', filterMode === 'wrong');
    }

    this.renderReviewList();
  }

  renderReviewList() {
    if (!this.reviewContainer) return;
    this.reviewContainer.innerHTML = '';

    // If review list is empty, try loading the most recent exam with review data from history
    if (this.currentReviewList.length === 0) {
      const history = window.storageManager.getExamHistory();
      const recentWithReview = history.find(h => h.fullReviewData && h.fullReviewData.length > 0);
      if (recentWithReview) {
        this.currentReviewList = recentWithReview.fullReviewData;
        this.currentTitle = recentWithReview.title;
      }
    }

    if (this.reviewHeaderTitle) {
      this.reviewHeaderTitle.textContent = this.currentTitle || "Xem lại chi tiết bài làm";
    }

    if (this.currentReviewList.length === 0) {
      this.reviewContainer.innerHTML = `
        <div style="text-align: center; padding: 3.5rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📝</div>
          <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">Chưa có dữ liệu bài thi để xem lại</div>
          <p style="font-size: 0.9rem; margin-top: 0.35rem; max-width: 440px; margin-left: auto; margin-right: auto;">
            Bạn chưa hoàn thành bài thi nào. Hãy vào kho đề để chọn một bộ đề và thử sức ngay nhé!
          </p>
          <div style="margin-top: 1.25rem;">
            <button class="btn btn-primary" onclick="window.app.switchTab('exams-list')">Vào làm bài thi ngay</button>
          </div>
        </div>
      `;
      return;
    }

    const filtered = this.currentReviewList.filter(item => {
      if (this.activeFilter === 'wrong') return !item.isCorrect;
      return true;
    });

    if (filtered.length === 0) {
      this.reviewContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🎉</div>
          <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">Không có câu hỏi nào cần hiển thị!</div>
          <p style="font-size: 0.9rem; margin-top: 0.25rem;">${this.activeFilter === 'wrong' ? 'Chúc mừng bạn không làm sai câu nào ở bộ lọc này!' : 'Chưa có dữ liệu bài làm để xem lại.'}</p>
          <div style="margin-top: 1rem;">
            <button class="btn btn-primary" onclick="window.app.switchTab('exams-list')">Vào làm bài thi mới ngay</button>
          </div>
        </div>
      `;
      return;
    }

    const letters = ['A', 'B', 'C', 'D'];

    filtered.forEach((q, idx) => {
      const card = document.createElement('div');
      card.className = `review-item ${q.isCorrect ? 'is-correct' : 'is-wrong'}`;

      const statusBadge = q.isCorrect ? 
        `<span class="review-status-pill correct"><i data-lucide="check-circle-2"></i> Chính xác</span>` : 
        q.isSkipped ?
        `<span class="review-status-pill skipped" style="background: rgba(234, 179, 8, 0.15); color: #eab308; border: 1px solid rgba(234, 179, 8, 0.3); padding: 4px 10px; border-radius: 999px; font-size: 0.8rem; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;"><i data-lucide="help-circle" style="width: 14px; height: 14px;"></i> Chưa trả lời</span>` :
        `<span class="review-status-pill wrong"><i data-lucide="x-circle"></i> Chưa chính xác</span>`;

      // Build options html
      let optionsHtml = '';
      const correctIdx = typeof q.correctIndex === 'number' ? q.correctIndex : (typeof q.correct === 'number' ? q.correct : 0);
      q.options.forEach((optText, optIdx) => {
        const isUserPick = q.userAnswer === optIdx;
        const isCorrectOpt = correctIdx === optIdx;

        let optClass = 'review-option';
        let labelIcon = '';

        if (isCorrectOpt) {
          optClass += ' correct-answer';
          labelIcon = `<span style="color: var(--success); font-weight: 700; font-size: 0.8rem;">[Đáp án đúng]</span>`;
        } else if (isUserPick && !q.isCorrect) {
          optClass += ' user-wrong';
          labelIcon = `<span style="color: var(--danger); font-weight: 700; font-size: 0.8rem;">[Lựa chọn của bạn]</span>`;
        }

        optionsHtml += `
          <div class="${optClass}">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span class="option-letter" style="${isCorrectOpt ? 'background: var(--success); color: #fff;' : isUserPick ? 'background: var(--danger); color: #fff;' : ''}">${letters[optIdx]}</span>
              <span>${optText}</span>
            </div>
            ${labelIcon}
          </div>
        `;
      });

      const isEnglish = q.subject === 'english';
      const speakBtnHtml = isEnglish ? `
        <button class="btn btn-secondary btn-sm btn-speak-rev" style="padding: 2px 8px; font-size: 0.75rem;" title="Nghe phát âm tiếng Anh chuẩn">
          <i data-lucide="volume-2" style="width: 13px; height: 13px;"></i> Nghe đọc
        </button>
      ` : '';

      card.innerHTML = `
        <div class="review-meta">
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <span class="question-seq-badge">Câu ${idx + 1}</span>
            <span class="question-topic-pill">${q.topic || 'Chuyên đề'}</span>
            ${speakBtnHtml}
          </div>
          <div>${statusBadge}</div>
        </div>

        <div class="question-body" style="margin-bottom: 1.25rem;">
          ${q.question}
        </div>

        <div class="options-list">
          ${optionsHtml}
        </div>

        <div class="explanation-box">
          <div class="explanation-title">
            <i data-lucide="book-open"></i> Lời giải chi tiết & Phương pháp giải:
          </div>
          <div style="font-size: 0.95rem; white-space: pre-line;">${q.explanation || 'Đang cập nhật lời giải...'}</div>

          ${q.trapTip ? `
            <div class="trap-box">
              <i data-lucide="alert-triangle" style="flex-shrink: 0; margin-top: 2px;"></i>
              <div>
                <strong>Bẫy đề thi hay gặp:</strong> ${q.trapTip}
              </div>
            </div>
          ` : ''}
        </div>
      `;

      const sBtn = card.querySelector('.btn-speak-rev');
      if (sBtn) {
        sBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const cleanQ = q.question.replace(/<[^>]*>?/gm, '').replace(/[*_~`]/g, '');
          window.speakEnglish(cleanQ);
        });
      }

      this.reviewContainer.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();

    // Render KaTeX in review container
    if (window.renderMathInElement) {
      window.renderMathInElement(this.reviewContainer, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  renderMistakeNotebook() {
    if (!this.mistakeNotebookList) return;
    this.mistakeNotebookList.innerHTML = '';

    const allMistakes = window.storageManager.getMistakes();
    const filterSub = this.mistakeSubjectFilter ? this.mistakeSubjectFilter.value : 'all';

    const filtered = allMistakes.filter(m => {
      if (filterSub === 'all') return true;
      return m.subject === filterSub;
    });

    const mistakeCounter = document.getElementById('mistakeNotebookTotalBadge');
    if (mistakeCounter) mistakeCounter.textContent = `${filtered.length} câu`;

    if (filtered.length === 0) {
      this.mistakeNotebookList.innerHTML = `
        <div style="text-align: center; padding: 3rem 1.5rem; background: var(--bg-surface); border: 1px dashed var(--border-subtle); border-radius: var(--radius-lg);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🌟</div>
          <div style="font-size: 1.15rem; font-weight: 700;">Tuyệt vời! Sổ tay lỗi sai đang trống.</div>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.4rem;">Bạn đã giải quyết sạch sẽ các câu hỏi làm sai hoặc chưa làm bài thi nào bị lỗi. Hãy làm thêm đề thi mới để thử thách bản thân!</p>
        </div>
      `;
      if (this.retakeMistakesBtn) this.retakeMistakesBtn.disabled = true;
      return;
    }

    if (this.retakeMistakesBtn) this.retakeMistakesBtn.disabled = false;

    filtered.forEach((m, idx) => {
      const item = document.createElement('div');
      item.className = 'review-item is-wrong';
      item.style.marginBottom = '1.25rem';

      item.innerHTML = `
        <div class="review-meta">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span class="subject-badge ${m.subject}">${m.subject === 'math' ? 'Toán' : m.subject === 'english' ? 'Tiếng Anh' : 'Ngữ Văn'}</span>
            <span class="question-topic-pill">${m.topic || 'Chuyên đề'}</span>
          </div>
          <button class="btn btn-secondary btn-sm" id="btn_remove_mistake_${m.id}" title="Đã hiểu rõ, xóa khỏi sổ tay">
            <i data-lucide="check"></i> Đã khắc phục
          </button>
        </div>

        <div class="question-body" style="margin-bottom: 1rem; font-size: 1.05rem;">
          ${m.question}
        </div>

        <div class="explanation-box" style="margin-top: 0.75rem;">
          <div class="explanation-title">
            <i data-lucide="help-circle"></i> Đáp án đúng: <strong>${m.options && m.options[typeof m.correctIndex === 'number' ? m.correctIndex : (typeof m.correct === 'number' ? m.correct : 0)] || ''}</strong>
          </div>
          <div style="font-size: 0.92rem; white-space: pre-line;">${m.explanation || ''}</div>
          ${m.trapTip ? `
            <div class="trap-box" style="margin-top: 0.75rem;">
              <i data-lucide="alert-triangle" style="flex-shrink: 0;"></i>
              <div><strong>Lưu ý:</strong> ${m.trapTip}</div>
            </div>
          ` : ''}
        </div>
      `;

      // Handle remove button
      const removeBtn = item.querySelector(`#btn_remove_mistake_${m.id}`);
      if (removeBtn) {
        removeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          window.storageManager.removeMistake(m.id);
          window.soundManager.playSuccess();
          this.renderMistakeNotebook();
        });
      }

      this.mistakeNotebookList.appendChild(item);
    });

    if (window.lucide) window.lucide.createIcons();

    if (window.renderMathInElement) {
      window.renderMathInElement(this.mistakeNotebookList, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  retakeMistakesExam() {
    const allMistakes = window.storageManager.getMistakes();
    const filterSub = this.mistakeSubjectFilter ? this.mistakeSubjectFilter.value : 'all';

    const mistakesToRetake = allMistakes.filter(m => {
      if (filterSub === 'all') return true;
      return m.subject === filterSub;
    });

    if (mistakesToRetake.length === 0) {
      alert("Không có câu hỏi sai nào trong chuyên mục đã chọn!");
      return;
    }

    // Build a custom exam
    const customExam = {
      id: 'custom_mistakes_' + Date.now(),
      title: `Luyện tập phục hồi: ${mistakesToRetake.length} câu đã từng sai`,
      subject: filterSub === 'all' ? 'mixed' : filterSub,
      durationMinutes: Math.max(10, Math.ceil(mistakesToRetake.length * 2.5)),
      totalQuestions: mistakesToRetake.length,
      questions: mistakesToRetake
    };

    window.examEngine.startExam(customExam, 'practice');
  }
}

window.reviewEngine = new ReviewEngine();
