// =========================================================
// EDUPASS 10 - REVIEW & MISTAKE NOTEBOOK ENGINE
// Detailed Explanations, Trap Warnings & Retake Capabilities
// =========================================================

class ReviewEngine {
  constructor() {
    this.currentReviewList = [];
    this.activeFilter = 'all'; // 'all', 'wrong', 'flagged'
    this.currentTitle = "";

    // Interactive Guided Remediation State
    this.currentRemediationItem = null;
    this.currentRemediationSource = null;
    this.remediationData = null;
    this.remediationState = {
      level1Passed: false,
      level2Passed: false,
      selectedOptL1: null,
      selectedOptL2: null
    };

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
    this.remediationModal = document.getElementById('remediationModal');
    this.remediationModalBody = document.getElementById('remediationModalBody');
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

        ${q.passage ? `
          <div class="exam-shared-stimulus-card" style="margin-bottom: 1rem;">
            <div class="stimulus-header">
              <i data-lucide="book-open" style="width: 15px; height: 15px;"></i>
              <span>${q.passageTitle || 'Đoạn văn / Ngữ liệu đọc hiểu:'}</span>
            </div>
            <div class="stimulus-body">
              ${q.passage}
            </div>
          </div>
        ` : ''}
        <div class="question-body question-main-text" style="margin-bottom: 1.25rem;">
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

        ${!q.isCorrect ? `
          <div style="margin-top: 1.25rem; padding: 1rem 1.25rem; border-radius: var(--radius-md); background: linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(99, 102, 241, 0.1)); border: 1px dashed rgba(99, 102, 241, 0.35); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
            <div>
              <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-main); display: flex; align-items: center; gap: 6px;">
                <i data-lucide="sparkles" style="color: var(--accent-cyan); width: 16px; height: 16px;"></i>
                Chưa làm đúng câu này? Hãy tự sửa lỗi ngay!
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">
                Xem phân tích đề bài, từng bước giải mẫu và thử sức với 2 câu hỏi vận dụng tăng dần độ khó.
              </div>
            </div>
            <button class="btn btn-primary btn-sm btn-remediate-question" data-idx="${idx}" style="background: linear-gradient(135deg, #06b6d4, #6366f1); border: none; font-weight: 700; white-space: nowrap;">
              <i data-lucide="target"></i> Hướng dẫn & Tự sửa lỗi
            </button>
          </div>
        ` : ''}
      `;

      const sBtn = card.querySelector('.btn-speak-rev');
      if (sBtn) {
        sBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const cleanQ = q.question.replace(/<[^>]*>?/gm, '').replace(/[*_~`]/g, '');
          window.speakEnglish(cleanQ);
        });
      }

      const remBtn = card.querySelector('.btn-remediate-question');
      if (remBtn) {
        remBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openRemediationModal(q, 'review');
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
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn btn-primary btn-sm" id="btn_rem_mistake_${m.id}" title="Phân tích đề & làm câu hỏi vận dụng để tự sửa" style="background: linear-gradient(135deg, #06b6d4, #6366f1); border: none; font-weight: 700;">
              <i data-lucide="target"></i> Hướng dẫn & Tự sửa
            </button>
            <button class="btn btn-secondary btn-sm" id="btn_remove_mistake_${m.id}" title="Đã hiểu rõ, xóa khỏi sổ tay">
              <i data-lucide="check"></i> Đã khắc phục
            </button>
          </div>
        </div>

        ${m.passage ? `
          <div class="exam-shared-stimulus-card" style="margin-bottom: 1rem;">
            <div class="stimulus-header">
              <i data-lucide="book-open" style="width: 15px; height: 15px;"></i>
              <span>${m.passageTitle || 'Đoạn văn / Ngữ liệu đọc hiểu:'}</span>
            </div>
            <div class="stimulus-body">
              ${m.passage}
            </div>
          </div>
        ` : ''}
        <div class="question-body question-main-text" style="margin-bottom: 1rem; font-size: 1.05rem;">
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

      // Handle remediation button
      const remBtn = item.querySelector(`#btn_rem_mistake_${m.id}`);
      if (remBtn) {
        remBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openRemediationModal(m, 'mistake');
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

  // =========================================================
  // INTERACTIVE GUIDED REMEDIATION & LADDER DRILLS
  // =========================================================
  getRemediationData(q) {
    if (q.analysisGuide && q.solutionSteps && q.ladderDrills && q.ladderDrills.length >= 2) {
      return {
        analysisGuide: q.analysisGuide,
        solutionSteps: q.solutionSteps,
        ladderDrills: q.ladderDrills
      };
    }
    return this.generateSmartRemediation(q);
  }

  generateSmartRemediation(q) {
    const subject = q.subject || (q.id && q.id.startsWith('e') ? 'english' : (q.id && q.id.startsWith('lit') ? 'literature' : 'math'));
    const topic = q.topic || 'Dạng bài trọng tâm';
    const explanation = q.explanation || '';
    const cleanQ = (q.question || '').replace(/<[^>]*>?/gm, '').trim();

    let analysisGuide = {
      given: "Đề bài cung cấp các biểu thức, thông số hoặc dữ kiện cơ sở của bài toán.",
      required: "Xác định chính xác đáp án hoặc giá trị cần tìm theo yêu cầu đề thi.",
      keyConcepts: ["Định nghĩa & Công thức trọng tâm", "Phương pháp giải chuẩn", "Kiểm tra điều kiện nghiệm"],
      trapWarning: q.trapTip || "Tránh nhầm lẫn dấu, chú ý đọc kỹ yêu cầu đề bài và kiểm tra lại điều kiện ràng buộc."
    };

    let solutionSteps = [
      {
        step: 1,
        title: "Phân tích đề & Xác định phương pháp",
        detail: `Đọc kỹ yêu cầu câu hỏi thuộc dạng bài <strong>${topic}</strong>. Nhận diện các giả thiết cốt lõi và gọi lại công thức/định lý nền tảng liên quan.`
      },
      {
        step: 2,
        title: "Thực hiện biến đổi & Tính toán chi tiết",
        detail: explanation ? explanation : "Áp dụng phương pháp giải từng bước: thay số, giải phương trình/biến đổi biểu thức cẩn thận."
      },
      {
        step: 3,
        title: "Đối chiếu điều kiện & Kết luận",
        detail: "Rà soát lại kết quả thu được với điều kiện ban đầu để loại bỏ nghiệm ngoại lai hoặc phương án bẫy, chọn phương án chính xác nhất."
      }
    ];

    let ladderDrills = [];

    if (subject === 'math') {
      if (topic.includes('Parabol') || cleanQ.includes('parabol') || cleanQ.includes('(P)')) {
        analysisGuide = {
          given: "Đồ thị Parabol $(P): y = ax^2$ ($a \\neq 0$) và đường thẳng $(d): y = mx + n$.",
          required: "Tìm hệ số, tọa độ giao điểm, tiếp điểm hoặc điều kiện tương giao.",
          keyConcepts: ["Hàm số bậc hai Parabol", "Phương trình hoành độ giao điểm", "Biệt thức $\\Delta$"],
          trapWarning: "Cần phân biệt rõ giữa hoành độ giao điểm $x$ và tọa độ đầy đủ $(x; y)$. Nhớ thay $x$ ngược lại vào $(P)$ hoặc $(d)$ để tìm $y$!"
        };
        ladderDrills = [
          {
            level: 1,
            title: "Cấp độ 1: Củng cố phương pháp tìm giao điểm cơ bản",
            question: "Cho parabol $(P): y = x^2$ và đường thẳng $(d): y = 4x - 3$. Hoành độ các giao điểm của $(P)$ và $(d)$ là:",
            options: [
              "$x = 1$ và $x = 3$",
              "$x = -1$ và $x = -3$",
              "$x = 1$ và $x = -3$",
              "$x = 2$ và $x = 3$"
            ],
            correctIndex: 0,
            explanation: "Phương trình hoành độ giao điểm: $x^2 = 4x - 3 \\Leftrightarrow x^2 - 4x + 3 = 0$. Có $a + b + c = 1 - 4 + 3 = 0$ nên phương trình có hai nghiệm $x = 1$ và $x = 3$."
          },
          {
            level: 2,
            title: "Cấp độ 2: Vận dụng mở rộng tương giao chứa tham số $m$",
            question: "Tìm tất cả các giá trị của tham số $m$ để đường thẳng $(d): y = 2x + m$ tiếp xúc với parabol $(P): y = -x^2$.",
            options: [
              "$m = 1$",
              "$m = -1$",
              "$m = 2$",
              "$m = -4$"
            ],
            correctIndex: 0,
            explanation: "Phương trình hoành độ giao điểm: $-x^2 = 2x + m \\Leftrightarrow x^2 + 2x + m = 0$. Đường thẳng $(d)$ tiếp xúc $(P) \\Leftrightarrow \\Delta' = 1^2 - m = 0 \\Leftrightarrow m = 1$."
          }
        ];
      } else if (topic.includes('Vi-ét') || cleanQ.includes('Vi-ét') || cleanQ.includes('nghiệm')) {
        analysisGuide = {
          given: "Phương trình bậc hai $ax^2 + bx + c = 0$ ($a \\neq 0$) có hai nghiệm $x_1, x_2$.",
          required: "Tính giá trị biểu thức đối xứng hoặc tìm tham số thỏa mãn hệ thức cho trước.",
          keyConcepts: ["Định lý Vi-ét: $S = x_1+x_2 = -b/a$", "Tích $P = x_1 x_2 = c/a$", "Biểu thức $x_1^2 + x_2^2 = S^2 - 2P$"],
          trapWarning: "Bắt buộc phải kiểm tra điều kiện phương trình có nghiệm ($\\Delta \\geq 0$) trước khi áp dụng định lý Vi-ét!"
        };
        ladderDrills = [
          {
            level: 1,
            title: "Cấp độ 1: Áp dụng trực tiếp định lý Vi-ét cơ bản",
            question: "Cho phương trình $x^2 - 7x + 10 = 0$. Tổng $S = x_1 + x_2$ và tích $P = x_1 x_2$ của hai nghiệm là:",
            options: [
              "$S = 7; P = 10$",
              "$S = -7; P = 10$",
              "$S = 7; P = -10$",
              "$S = -7; P = -10$"
            ],
            correctIndex: 0,
            explanation: "Theo định lý Vi-ét: $S = -b/a = -(-7)/1 = 7$ và $P = c/a = 10/1 = 10$."
          },
          {
            level: 2,
            title: "Cấp độ 2: Vận dụng hệ thức đối xứng và tham số",
            question: "Cho phương trình $x^2 - 6x + m = 0$. Tìm $m$ để phương trình có hai nghiệm $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 26$.",
            options: [
              "$m = 5$",
              "$m = -5$",
              "$m = 10$",
              "$m = 8$"
            ],
            correctIndex: 0,
            explanation: "Điều kiện có nghiệm: $\\Delta' = 9 - m \\geq 0 \\Leftrightarrow m \\leq 9$. Theo Vi-ét: $x_1 + x_2 = 6, x_1 x_2 = m$. Ta có $x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1 x_2 = 36 - 2m = 26 \\Leftrightarrow 2m = 10 \\Leftrightarrow m = 5$ (thỏa mãn $m \\leq 9$)."
          }
        ];
      } else if (topic.includes('thực tế') || topic.includes('Không gian') || cleanQ.includes('bán kính') || cleanQ.includes('thể tích')) {
        analysisGuide = {
          given: "Các kích thước hình học không gian (bán kính $r$, chiều cao $h$, đường sinh $l$, đường kính $d$).",
          required: "Tính thể tích, diện tích xung quanh hoặc khối lượng/chi phí thực tế.",
          keyConcepts: ["Hình trụ: $V = \\pi r^2 h$", "Hình nón: $V = \\frac{1}{3}\\pi r^2 h$", "Hình cầu: $V = \\frac{4}{3}\\pi r^3$"],
          trapWarning: "Cẩn thận nhầm lẫn giữa đường kính $d$ và bán kính $r$ ($r = d/2$), và đồng nhất đơn vị (cm, m, lít)!"
        };
        ladderDrills = [
          {
            level: 1,
            title: "Cấp độ 1: Tính thể tích hình học không gian cơ bản",
            question: "Một bồn nước hình trụ có bán kính đáy $r = 0.5\\text{ m}$ và chiều cao $h = 2\\text{ m}$. Thể tích của bồn nước là (lấy $\\pi \\approx 3.14$):",
            options: [
              "$1.57\\text{ m}^3$",
              "$3.14\\text{ m}^3$",
              "$0.785\\text{ m}^3$",
              "$6.28\\text{ m}^3$"
            ],
            correctIndex: 0,
            explanation: "$V = \\pi r^2 h \\approx 3.14 \\times (0.5)^2 \\times 2 = 3.14 \\times 0.25 \\times 2 = 1.57\\text{ m}^3$."
          },
          {
            level: 2,
            title: "Cấp độ 2: Vận dụng tính dung tích chứa nước thực tế",
            question: "Một thùng sơn hình trụ có đường kính đáy $20\\text{ cm}$ và chiều cao $30\\text{ cm}$. Hỏi thùng này có thể chứa được tối đa bao nhiêu lít sơn? (Lấy $\\pi \\approx 3.14$, biết $1\\text{ lít} = 1000\\text{ cm}^3$)",
            options: [
              "$9.42\\text{ lít}$",
              "$37.68\\text{ lít}$",
              "$18.84\\text{ lít}$",
              "$4.71\\text{ lít}$"
            ],
            correctIndex: 0,
            explanation: "Bán kính $r = 20 / 2 = 10\\text{ cm}$. Thể tích: $V = \\pi r^2 h = 3.14 \\times 10^2 \\times 30 = 9420\\text{ cm}^3 = 9.42\\text{ lít}$."
          }
        ];
      } else {
        analysisGuide = {
          given: "Đề bài cho biểu thức hoặc phương trình toán học cần giải quyết.",
          required: "Tìm nghiệm, giá trị biểu thức hoặc khẳng định tính đúng/sai của bài toán.",
          keyConcepts: ["Định nghĩa & Công thức toán học 9", "Quy tắc chuyển vế & rút gọn", "Điều kiện xác định"],
          trapWarning: "Lưu ý điều kiện xác định của căn thức ($A \\geq 0$) và mẫu thức khác 0."
        };
        ladderDrills = [
          {
            level: 1,
            title: "Cấp độ 1: Rút gọn & Tính toán tương tự",
            question: "Giá trị của biểu thức $A = \\sqrt{16} - \\sqrt{9} + \\sqrt{25}$ là:",
            options: [
              "$6$",
              "$4$",
              "$8$",
              "$2$"
            ],
            correctIndex: 0,
            explanation: "$A = 4 - 3 + 5 = 6$."
          },
          {
            level: 2,
            title: "Cấp độ 2: Vận dụng biến đổi căn thức và trục căn",
            question: "Rút gọn biểu thức $B = \\frac{1}{2 - \\sqrt{3}} - \\sqrt{3}$ ta được kết quả là:",
            options: [
              "$2$",
              "$-2$",
              "$2\\sqrt{3}$",
              "$0$"
            ],
            correctIndex: 0,
            explanation: "Ta có $\\frac{1}{2 - \\sqrt{3}} = \\frac{2 + \\sqrt{3}}{(2-\\sqrt{3})(2+\\sqrt{3})} = 2 + \\sqrt{3}$. Vậy $B = 2 + \\sqrt{3} - \\sqrt{3} = 2$."
          }
        ];
      }
    } else if (subject === 'english') {
      analysisGuide = {
        given: "Ngữ cảnh câu tiếng Anh, dấu hiệu nhận biết thời gian hoặc cấu trúc ngữ pháp trọng tâm.",
        required: "Chọn phương án đúng về từ vựng, ngữ pháp hoặc dạng thức từ phù hợp.",
        keyConcepts: ["Thì động từ & Cấu trúc câu", "Sự phối hợp thì (Sequence of tenses)", "Cụm cố định (Collocations)"],
        trapWarning: "Chú ý phân biệt chủ ngữ số ít/số nhiều, thể chủ động hay bị động, và các dấu hiệu thời gian đặc trưng!"
      };
      ladderDrills = [
        {
          level: 1,
          title: "Cấp độ 1: Nhận diện cấu trúc ngữ pháp chuẩn",
          question: "If it ______ tomorrow, we will cancel the camping trip.",
          options: [
            "rains",
            "rained",
            "will rain",
            "has rained"
          ],
          correctIndex: 0,
          explanation: "Câu điều kiện loại 1 (First Conditional): Mệnh đề If dùng thì Hiện tại đơn (Present Simple: rains), mệnh đề chính dùng will + V-inf."
        },
        {
          level: 2,
          title: "Cấp độ 2: Vận dụng phối hợp thì và mệnh đề nâng cao",
          question: "She wishes she ______ enough time to visit her grandparents yesterday.",
          options: [
            "had had",
            "had",
            "would have",
            "have had"
          ],
          correctIndex: 0,
          explanation: "Ước muốn cho một sự việc trong quá khứ (yesterday) dùng cấu trúc: S + wish(es) + S + had + V3/ed (Quá khứ hoàn thành: had had)."
        }
      ];
    } else {
      analysisGuide = {
        given: "Ngữ liệu tác phẩm văn học, văn bản nghị luận hoặc câu thơ/đoạn trích.",
        required: "Nhận biết thể loại, tác giả/tác phẩm, biện pháp nghệ thuật hoặc thông điệp ý nghĩa.",
        keyConcepts: ["Đặc trưng thể loại văn bản", "Biện pháp tu từ tiếng Việt", "Nội dung & Nghệ thuật trọng tâm"],
        trapWarning: "Không suy diễn chủ quan; căn cứ chính xác vào từ ngữ và hình ảnh xuất hiện trong ngữ liệu đề bài!"
      };
      ladderDrills = [
        {
          level: 1,
          title: "Cấp độ 1: Nhận diện biện pháp tu từ trong câu",
          question: "Câu thơ 'Mặt trời của bắp thì nằm trên đồi / Mặt trời của mẹ, em nằm trên lưng' sử dụng biện pháp tu từ nào?",
          options: [
            "Ẩn dụ",
            "Hoán dụ",
            "So sánh",
            "Nói quá"
          ],
          correctIndex: 0,
          explanation: "Từ 'mặt trời' thứ hai là hình ảnh ẩn dụ chỉ đứa con - nguồn sống, niềm tin yêu và tương lai ấm áp của người mẹ."
        },
        {
          level: 2,
          title: "Cấp độ 2: Vận dụng phân tích tác dụng biểu đạt",
          question: "Tác dụng nổi bật nhất của biện pháp điệp từ trong các bài thơ lớp 9 là gì?",
          options: [
            "Tạo nhịp điệu sinh động và nhấn mạnh cảm xúc, ý đồ tư tưởng của tác giả",
            "Làm cho câu thơ ngắn gọn và cô đọng hơn",
            "Giảm nhẹ mức độ đau thương của hoàn cảnh",
            "Tránh sự trùng lặp từ ngữ trong văn bản"
          ],
          correctIndex: 0,
          explanation: "Điệp từ có tác dụng tạo nhịp điệu tha thiết, âm vang và nhấn mạnh sâu sắc cảm xúc, tư tưởng cốt lõi mà tác giả muốn truyền tải."
        }
      ];
    }

    return {
      analysisGuide,
      solutionSteps,
      ladderDrills
    };
  }

  openRemediationModal(q, source = 'review') {
    const modal = document.getElementById('remediationModal');
    if (!modal) return;

    this.currentRemediationItem = q;
    this.currentRemediationSource = source;
    this.remediationData = this.getRemediationData(q);
    this.remediationState = {
      level1Passed: false,
      level2Passed: false,
      selectedOptL1: null,
      selectedOptL2: null
    };

    // Update subject badge
    const badgeEl = document.getElementById('remediationSubjectBadge');
    if (badgeEl) {
      const sub = q.subject || 'math';
      badgeEl.textContent = sub === 'math' ? '📐 Môn Toán' : sub === 'english' ? '🇬🇧 Môn Tiếng Anh' : '📖 Môn Ngữ Văn';
      badgeEl.className = `badge ${sub}`;
    }

    // Update topic title
    const topicEl = document.getElementById('remediationTopicTitle');
    if (topicEl) {
      topicEl.textContent = `Chuyên đề: ${q.topic || 'Ôn tập tuyển sinh vào 10'}`;
    }

    // Reset step indicators to step 1
    this.updateRemediationStepPills(1);

    // Render modal body
    const bodyEl = document.getElementById('remediationModalBody');
    if (bodyEl) {
      this.renderRemediationBody(bodyEl);
    }

    modal.classList.add('active');
    if (window.lucide) window.lucide.createIcons();

    if (window.renderMathInElement) {
      window.renderMathInElement(bodyEl, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  closeRemediationModal() {
    const modal = document.getElementById('remediationModal');
    if (modal) modal.classList.remove('active');
  }

  updateRemediationStepPills(activeStep) {
    for (let i = 1; i <= 4; i++) {
      const pill = document.getElementById(`remStepIndicator${i}`);
      if (pill) {
        pill.classList.remove('active', 'completed');
        if (i < activeStep) {
          pill.classList.add('completed');
          const numEl = pill.querySelector('.rem-step-num');
          if (numEl) numEl.textContent = '✓';
        } else if (i === activeStep) {
          pill.classList.add('active');
          const numEl = pill.querySelector('.rem-step-num');
          if (numEl) numEl.textContent = String(i);
        } else {
          const numEl = pill.querySelector('.rem-step-num');
          if (numEl) numEl.textContent = String(i);
        }
      }
    }
  }

  renderRemediationBody(container) {
    const q = this.currentRemediationItem;
    const data = this.remediationData;
    const letters = ['A', 'B', 'C', 'D'];
    const correctIdx = typeof q.correctIndex === 'number' ? q.correctIndex : (typeof q.correct === 'number' ? q.correct : 0);

    const drillL1 = data.ladderDrills[0];
    const drillL2 = data.ladderDrills[1];

    container.innerHTML = `
      <!-- 1. Original Question Recap -->
      <div class="rem-original-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem;">
          <span style="font-size: 0.8rem; font-weight: 700; color: #f87171; text-transform: uppercase; display: flex; align-items: center; gap: 4px;">
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i> Câu hỏi bạn cần khắc phục:
          </span>
          <span style="font-size: 0.78rem; color: var(--text-muted);">${q.topic || 'Chuyên đề'}</span>
        </div>
        <div style="font-size: 1rem; font-weight: 600; color: var(--text-main); line-height: 1.6; margin-bottom: 0.75rem;">
          ${q.question}
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
          ${typeof q.userAnswer === 'number' ? `<span>Lựa chọn của bạn: <strong style="color: var(--danger);">${letters[q.userAnswer] || ''}. ${q.options ? q.options[q.userAnswer] : ''}</strong></span>` : ''}
          <span>Đáp án chuẩn: <strong style="color: var(--success);">${letters[correctIdx]}. ${q.options ? q.options[correctIdx] : ''}</strong></span>
        </div>
      </div>

      <!-- 2. Section 1: Problem Deconstruction -->
      <div style="margin-bottom: 1.75rem;">
        <h4 style="font-size: 1rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="search" style="color: var(--accent-cyan);"></i> 1. Phân Tích Câu Hỏi & Dữ Kiện Trọng Tâm
        </h4>
        <div class="deconstruct-grid">
          <div class="deconstruct-card given">
            <div class="deconstruct-card-header">
              <i data-lucide="info" style="width: 15px; height: 15px;"></i> Đề bài cho gì (Giả thiết):
            </div>
            <div style="font-size: 0.9rem; line-height: 1.5; color: var(--text-main);">${data.analysisGuide.given}</div>
          </div>
          <div class="deconstruct-card target">
            <div class="deconstruct-card-header">
              <i data-lucide="help-circle" style="width: 15px; height: 15px;"></i> Yêu cầu cần tìm (Kết luận):
            </div>
            <div style="font-size: 0.9rem; line-height: 1.5; color: var(--text-main);">${data.analysisGuide.required}</div>
          </div>
          <div class="deconstruct-card key">
            <div class="deconstruct-card-header">
              <i data-lucide="key" style="width: 15px; height: 15px;"></i> Định lý & Từ khóa cốt lõi:
            </div>
            <div style="display: flex; gap: 0.35rem; flex-wrap: wrap; margin-top: 2px;">
              ${data.analysisGuide.keyConcepts.map(k => `<span class="badge" style="background: rgba(6, 182, 212, 0.12); color: #22d3ee; font-size: 0.76rem; padding: 2px 8px; border-radius: 99px;">${k}</span>`).join('')}
            </div>
          </div>
          <div class="deconstruct-card trap">
            <div class="deconstruct-card-header">
              <i data-lucide="alert-triangle" style="width: 15px; height: 15px;"></i> Bẫy đề thi hay gặp:
            </div>
            <div style="font-size: 0.9rem; line-height: 1.5; color: #fbbf24;">${data.analysisGuide.trapWarning}</div>
          </div>
        </div>
      </div>

      <!-- 3. Section 2: Step-by-Step Solution Blueprint -->
      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="workflow" style="color: var(--primary);"></i> 2. Các Bước Xử Lý Bài Toán (Quy Trình Chuẩn)
        </h4>
        <div class="solution-steps-wrapper">
          ${data.solutionSteps.map(s => `
            <div class="solution-step-item">
              <div class="solution-step-badge">${s.step}</div>
              <div class="solution-step-content">
                <div class="solution-step-title">Bước ${s.step}: ${s.title}</div>
                <div class="solution-step-detail">${s.detail}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 4. Section 3: Progressive Ladder Practice -->
      <div>
        <div class="ladder-section-header">
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
              <i data-lucide="zap" style="color: #f59e0b;"></i> 3. Thử Thách Vận Dụng Tự Sửa Lỗi
            </h4>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Vượt qua cả 2 cấp độ để làm chủ dạng bài này và xóa khỏi sổ tay câu sai</span>
          </div>
          <span class="badge" id="remLadderProgressBadge" style="background: rgba(16, 185, 129, 0.15); color: #34d399; font-weight: 700;">Tiến độ: 0/2 câu</span>
        </div>

        <!-- Level 1 Card -->
        <div class="ladder-card" id="ladderCardL1">
          <div class="ladder-card-tag lvl1">
            <i data-lucide="award" style="width: 14px; height: 14px;"></i> ${drillL1.title || 'Cấp độ 1: Củng cố phương pháp'}
          </div>
          <div style="font-size: 1rem; font-weight: 600; color: var(--text-main); line-height: 1.6; margin-bottom: 1rem;">
            ${drillL1.question}
          </div>
          <div class="ladder-options-grid" id="ladderOptionsGridL1">
            ${drillL1.options.map((opt, i) => `
              <div class="ladder-option-item" data-level="1" data-idx="${i}">
                <span class="ladder-option-circle">${letters[i]}</span>
                <span>${opt}</span>
              </div>
            `).join('')}
          </div>
          <div style="display: flex; justify-content: flex-end; margin-top: 0.75rem;">
            <button class="btn btn-primary btn-sm" id="btnCheckLadderL1" disabled style="min-width: 140px;">
              <i data-lucide="check"></i> Kiểm tra Cấp độ 1
            </button>
          </div>
          <div class="ladder-feedback" id="ladderFeedbackL1"></div>
        </div>

        <!-- Level 2 Card (Locked until Level 1 passed) -->
        <div class="ladder-card locked" id="ladderCardL2">
          <div id="ladderL2LockedNotice" style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem; padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); background: var(--bg-surface-elevated);">
            <i data-lucide="lock" style="width: 16px; height: 16px; color: #f59e0b;"></i>
            <span>Hoàn thành chính xác Cấp độ 1 để mở khóa thử thách Cấp độ 2.</span>
          </div>
          <div class="ladder-card-tag lvl2">
            <i data-lucide="flame" style="width: 14px; height: 14px;"></i> ${drillL2.title || 'Cấp độ 2: Vận dụng mở rộng'}
          </div>
          <div style="font-size: 1rem; font-weight: 600; color: var(--text-main); line-height: 1.6; margin-bottom: 1rem;">
            ${drillL2.question}
          </div>
          <div class="ladder-options-grid" id="ladderOptionsGridL2">
            ${drillL2.options.map((opt, i) => `
              <div class="ladder-option-item" data-level="2" data-idx="${i}">
                <span class="ladder-option-circle">${letters[i]}</span>
                <span>${opt}</span>
              </div>
            `).join('')}
          </div>
          <div style="display: flex; justify-content: flex-end; margin-top: 0.75rem;">
            <button class="btn btn-primary btn-sm" id="btnCheckLadderL2" disabled style="min-width: 140px;">
              <i data-lucide="check"></i> Kiểm tra Cấp độ 2
            </button>
          </div>
          <div class="ladder-feedback" id="ladderFeedbackL2"></div>
        </div>

        <!-- Mastery Celebration Banner -->
        <div class="rem-mastery-banner" id="remMasteryBanner" style="display: none;">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🏆</div>
          <h3 style="font-size: 1.3rem; font-weight: 800; color: #34d399; margin-bottom: 0.35rem;">
            XUẤT SẮC! BẠN ĐÃ LÀM CHỦ DẠNG BÀI NÀY!
          </h3>
          <p style="font-size: 0.95rem; color: var(--text-main); max-width: 520px; margin: 0 auto 1.25rem auto;">
            Bạn đã tự lực phân tích và giải đúng cả 2 cấp độ vận dụng. Câu hỏi đã được <strong>tự động xóa khỏi Sổ tay lỗi sai</strong> và cộng <strong>+20 XP</strong> vào hồ sơ!
          </p>
          <button class="btn btn-primary" onclick="window.reviewEngine.closeRemediationModal()" style="background: linear-gradient(135deg, #10b981, #06b6d4); font-weight: 700; padding: 0.6rem 1.5rem;">
            <i data-lucide="check-circle-2"></i> Hoàn tất & Tiếp tục ôn luyện
          </button>
        </div>
      </div>
    `;

    // Bind Level 1 options
    const optItemsL1 = container.querySelectorAll('.ladder-option-item[data-level="1"]');
    const btnCheckL1 = container.querySelector('#btnCheckLadderL1');
    optItemsL1.forEach(opt => {
      opt.addEventListener('click', (e) => {
        if (this.remediationState.level1Passed) return;
        optItemsL1.forEach(o => o.classList.remove('selected'));
        const target = e.currentTarget;
        target.classList.add('selected');
        this.remediationState.selectedOptL1 = parseInt(target.dataset.idx, 10);
        if (btnCheckL1) btnCheckL1.disabled = false;
        if (window.soundManager) window.soundManager.playSelect();
      });
    });

    if (btnCheckL1) {
      btnCheckL1.addEventListener('click', () => this.checkLadderAnswer(1));
    }

    // Bind Level 2 options
    const optItemsL2 = container.querySelectorAll('.ladder-option-item[data-level="2"]');
    const btnCheckL2 = container.querySelector('#btnCheckLadderL2');
    optItemsL2.forEach(opt => {
      opt.addEventListener('click', (e) => {
        if (!this.remediationState.level1Passed || this.remediationState.level2Passed) return;
        optItemsL2.forEach(o => o.classList.remove('selected'));
        const target = e.currentTarget;
        target.classList.add('selected');
        this.remediationState.selectedOptL2 = parseInt(target.dataset.idx, 10);
        if (btnCheckL2) btnCheckL2.disabled = false;
        if (window.soundManager) window.soundManager.playSelect();
      });
    });

    if (btnCheckL2) {
      btnCheckL2.addEventListener('click', () => this.checkLadderAnswer(2));
    }
  }

  checkLadderAnswer(level) {
    const data = this.remediationData;
    const bodyEl = document.getElementById('remediationModalBody');
    if (!bodyEl) return;

    if (level === 1) {
      const drill = data.ladderDrills[0];
      const selected = this.remediationState.selectedOptL1;
      const feedbackEl = bodyEl.querySelector('#ladderFeedbackL1');
      const btnCheck = bodyEl.querySelector('#btnCheckLadderL1');
      const optItems = bodyEl.querySelectorAll('.ladder-option-item[data-level="1"]');

      if (selected === drill.correctIndex) {
        this.remediationState.level1Passed = true;
        if (btnCheck) {
          btnCheck.disabled = true;
          btnCheck.innerHTML = '<i data-lucide="check-circle"></i> Đã hoàn thành Cấp độ 1';
        }
        optItems.forEach(o => {
          if (parseInt(o.dataset.idx, 10) === drill.correctIndex) {
            o.classList.add('correct');
          }
        });
        if (feedbackEl) {
          feedbackEl.className = 'ladder-feedback active success';
          feedbackEl.innerHTML = `<strong>✓ Chính xác!</strong> ${drill.explanation}`;
        }
        if (window.soundManager) window.soundManager.playSuccess();

        // Update progress badge
        const progBadge = bodyEl.querySelector('#remLadderProgressBadge');
        if (progBadge) progBadge.textContent = 'Tiến độ: 1/2 câu';

        // Unlock Level 2
        this.updateRemediationStepPills(4);
        const cardL2 = bodyEl.querySelector('#ladderCardL2');
        const lockNotice = bodyEl.querySelector('#ladderL2LockedNotice');
        if (cardL2) cardL2.classList.remove('locked');
        if (lockNotice) lockNotice.style.display = 'none';

        setTimeout(() => {
          if (cardL2) cardL2.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
      } else {
        optItems.forEach(o => {
          if (parseInt(o.dataset.idx, 10) === selected) {
            o.classList.add('wrong');
          }
        });
        if (feedbackEl) {
          feedbackEl.className = 'ladder-feedback active danger';
          feedbackEl.innerHTML = `<strong>Chưa chính xác!</strong> Hãy xem lại Bước 1 và Bước 2 ở trên để đối chiếu công thức rồi chọn lại nhé.`;
        }
        if (window.soundManager) window.soundManager.playWarning();
      }
    } else if (level === 2) {
      const drill = data.ladderDrills[1];
      const selected = this.remediationState.selectedOptL2;
      const feedbackEl = bodyEl.querySelector('#ladderFeedbackL2');
      const btnCheck = bodyEl.querySelector('#btnCheckLadderL2');
      const optItems = bodyEl.querySelectorAll('.ladder-option-item[data-level="2"]');

      if (selected === drill.correctIndex) {
        this.remediationState.level2Passed = true;
        if (btnCheck) {
          btnCheck.disabled = true;
          btnCheck.innerHTML = '<i data-lucide="check-circle"></i> Đã hoàn thành Cấp độ 2';
        }
        optItems.forEach(o => {
          if (parseInt(o.dataset.idx, 10) === drill.correctIndex) {
            o.classList.add('correct');
          }
        });
        if (feedbackEl) {
          feedbackEl.className = 'ladder-feedback active success';
          feedbackEl.innerHTML = `<strong>✓ Xuất sắc!</strong> ${drill.explanation}`;
        }

        const progBadge = bodyEl.querySelector('#remLadderProgressBadge');
        if (progBadge) {
          progBadge.textContent = 'Tiến độ: 2/2 câu (Hoàn thành)';
          progBadge.style.background = 'rgba(16, 185, 129, 0.25)';
        }

        this.onRemediationCompleted();
      } else {
        optItems.forEach(o => {
          if (parseInt(o.dataset.idx, 10) === selected) {
            o.classList.add('wrong');
          }
        });
        if (feedbackEl) {
          feedbackEl.className = 'ladder-feedback active danger';
          feedbackEl.innerHTML = `<strong>Chưa chính xác!</strong> Hãy chú ý bẫy điều kiện đề bài và tính toán lại cẩn thận nhé.`;
        }
        if (window.soundManager) window.soundManager.playWarning();
      }
    }

    if (window.lucide) window.lucide.createIcons();
    if (window.renderMathInElement) {
      window.renderMathInElement(bodyEl, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  onRemediationCompleted() {
    const q = this.currentRemediationItem;
    if (!q) return;

    // Sound & Confetti
    if (window.soundManager) window.soundManager.playFanfare();
    if (window.confetti) {
      window.confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }

    // Add +20 XP
    if (window.storageManager && window.storageManager.addXP) {
      window.storageManager.addXP(20);
    }

    // Remove from Mistake Bank
    if (window.storageManager && window.storageManager.removeMistake) {
      window.storageManager.removeMistake(q.id);
    }

    // If source is mistake notebook, re-render mistake notebook
    if (this.currentRemediationSource === 'mistake') {
      this.renderMistakeNotebook();
    }

    // Show mastery celebration banner
    const bodyEl = document.getElementById('remediationModalBody');
    if (bodyEl) {
      const banner = bodyEl.querySelector('#remMasteryBanner');
      if (banner) {
        banner.style.display = 'block';
        setTimeout(() => {
          banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 200);
      }
    }

    if (window.app && window.app.showToast) {
      window.app.showToast('🎉 Xuất sắc! Bạn đã làm chủ câu hỏi và nhận +20 XP!');
    }
  }
}

window.reviewEngine = new ReviewEngine();
