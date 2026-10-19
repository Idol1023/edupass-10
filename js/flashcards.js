// =========================================================
// EDUPASS 10 - TRUNG TÂM KIẾN THỨC & CẨM NANG DẠNG ĐỀ THI
// Bộ công cụ ôn tập kiến thức phân tách độc lập 3 môn: Toán, Anh, Văn
// Tổ chức 100% chuẩn theo các Dạng câu hỏi trong đề thi tuyển sinh vào 10
// =========================================================

class FlashcardTrainer {
  constructor() {
    this.currentSubject = 'math';
    this.currentTopicIndex = 0; // Index of questionType (0 = first question type, -1 = all)
    this.currentCardIndex = 0;
    this.isFlipped = false;
    this.viewMode = 'guide'; // 'guide' (Cẩm nang dạng đề) or 'flashcard' (Luyện thẻ 3D)
    this.filterLevel = 'all'; // 'all', 'basic', 'intermediate', 'advanced'
    this.searchQuery = '';

    this.initDOMRefs();
    this.bindEvents();
  }

  initDOMRefs() {
    this.subjectTabs = document.querySelectorAll('.knowledge-sub-btn, .fc-sub-tab');
    this.matrixArea = document.getElementById('knowledgeSubjectMatrixArea');
    this.topicSelect = document.getElementById('flashcardTopicSelect');
    this.flashcardSection = document.getElementById('knowledgeFlashcardSection');
    this.cheatSheetArea = document.getElementById('knowledgeCheatSheetArea');
    this.btnModeGuide = document.getElementById('btnKnowledgeModeGuide');
    this.btnModeFlashcard = document.getElementById('btnKnowledgeModeFlashcard');
    this.filterChips = document.querySelectorAll('.kn-filter-chip');
    this.searchInput = document.getElementById('knowledgeSearchInput');

    // Flashcard DOM
    this.cardStage = document.getElementById('interactiveFlashcard');
    this.cardQuestion = document.getElementById('fcCardQuestion');
    this.cardAnswer = document.getElementById('fcCardAnswer');
    this.cardSubjectBadge = document.getElementById('fcSubjectBadge');
    this.cardTypeTag = document.getElementById('fcCurrentTypeTag');
    this.cardTopicSubtitle = document.getElementById('fcTopicSubtitle');
    this.cardCounter = document.getElementById('fcCardCounter');
    this.btnPrev = document.getElementById('btnFcPrev');
    this.btnNext = document.getElementById('btnFcNext');
    this.btnFlip = document.getElementById('btnFcFlip');
    this.btnMaster = document.getElementById('btnFcMaster');
    this.btnShuffle = document.getElementById('btnFcShuffle');
    this.masteryCounter = document.getElementById('fcMasteryCountBadge');
  }

  bindEvents() {
    // Subject Switching
    this.subjectTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const sub = e.currentTarget.dataset.subject;
        if (sub) this.setSubject(sub);
      });
    });

    // View Mode Toggle
    if (this.btnModeGuide) {
      this.btnModeGuide.addEventListener('click', () => this.setViewMode('guide'));
    }
    if (this.btnModeFlashcard) {
      this.btnModeFlashcard.addEventListener('click', () => this.setViewMode('flashcard'));
    }

    // Difficulty Filter Chips
    if (this.filterChips) {
      this.filterChips.forEach(chip => {
        chip.addEventListener('click', (e) => {
          this.filterChips.forEach(c => c.classList.remove('active'));
          e.currentTarget.classList.add('active');
          this.filterLevel = e.currentTarget.dataset.level || 'all';
          this.renderQuestionTypesGuide();
        });
      });
    }

    // Search Input
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = (e.target.value || '').trim().toLowerCase();
        this.renderQuestionTypesGuide();
      });
    }

    // Question Type Selector
    if (this.topicSelect) {
      this.topicSelect.addEventListener('change', (e) => {
        const val = parseInt(e.target.value);
        this.currentTopicIndex = isNaN(val) ? 0 : val;
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.renderCard();

        // Scroll to that question type in guide view
        if (this.viewMode === 'guide') {
          const targetCard = document.getElementById(`qtype_card_${this.currentTopicIndex}`);
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetCard.style.outline = '2px solid var(--primary)';
            setTimeout(() => { targetCard.style.outline = 'none'; }, 2000);
          }
        }
      });
    }

    // Flashcard Flip & Nav
    if (this.cardStage) {
      this.cardStage.addEventListener('click', () => this.toggleFlip());
    }

    if (this.btnFlip) {
      this.btnFlip.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleFlip();
      });
    }

    if (this.btnPrev) {
      this.btnPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        this.navigate(-1);
      });
    }

    if (this.btnNext) {
      this.btnNext.addEventListener('click', (e) => {
        e.stopPropagation();
        this.navigate(1);
      });
    }

    if (this.btnMaster) {
      this.btnMaster.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleMasterCurrent();
      });
    }

    if (this.btnShuffle) {
      this.btnShuffle.addEventListener('click', (e) => {
        e.stopPropagation();
        this.shuffleCards();
      });
    }
  }

  setSubject(sub) {
    this.currentSubject = sub;
    this.currentTopicIndex = 0;
    this.currentCardIndex = 0;
    this.isFlipped = false;
    this.searchQuery = '';
    this.filterLevel = 'all';

    if (this.searchInput) this.searchInput.value = '';
    if (this.filterChips) {
      this.filterChips.forEach(c => c.classList.toggle('active', c.dataset.level === 'all'));
    }

    // Update active class on subject buttons
    this.subjectTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.subject === sub);
    });

    this.renderSubjectMatrix();
    this.populateTopicSelect();
    this.renderQuestionTypesGuide();
    this.renderCard();

    if (window.soundManager) window.soundManager.playClick();
  }

  setViewMode(mode) {
    this.viewMode = mode;
    if (this.btnModeGuide) this.btnModeGuide.classList.toggle('active', mode === 'guide');
    if (this.btnModeFlashcard) this.btnModeFlashcard.classList.toggle('active', mode === 'flashcard');

    if (this.flashcardSection) {
      this.flashcardSection.style.display = mode === 'flashcard' ? 'block' : 'none';
      if (mode === 'flashcard') {
        this.renderCard();
        this.flashcardSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    if (window.soundManager) window.soundManager.playClick();
  }

  renderSubjectMatrix() {
    if (!this.matrixArea) return;
    const subData = window.KNOWLEDGE_BASE[this.currentSubject];
    if (!subData) return;

    const struct = subData.examStructure || {};
    const matrixList = struct.matrix || [];

    let matrixItemsHtml = '';
    matrixList.forEach((m, idx) => {
      const colors = ['#6366f1', '#0ea5e9', '#10b981', '#f59e0b', '#ec4899'];
      const itemColor = colors[idx % colors.length];

      matrixItemsHtml += `
        <div class="matrix-item-box">
          <span class="matrix-weight-badge" style="background: ${itemColor}22; color: ${itemColor}; border: 1px solid ${itemColor}44;">
            ${m.weight}
          </span>
          <div style="font-weight: 800; font-size: 0.95rem; margin-bottom: 0.35rem; color: var(--text-main);">
            ${m.name}
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.45;">
            ${m.desc}
          </div>
        </div>
      `;
    });

    this.matrixArea.innerHTML = `
      <div class="knowledge-matrix-card">
        <div class="matrix-header">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span class="subject-badge ${this.currentSubject}">${subData.name}</span>
              <span style="font-weight: 800; font-size: 1.15rem; color: var(--text-main);">Ma Trận & Cấu Trúc Đề Thi Tuyển Sinh Vào 10</span>
            </div>
            <div style="font-size: 0.86rem; color: var(--text-muted);">
              ${subData.targetExam} • Thang điểm: <strong>${struct.totalScore || '10.0 điểm'}</strong> • Thời gian: <strong>${struct.duration || '120 phút'}</strong>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span class="stat-pill" style="font-size: 0.8rem; font-weight: 700; background: var(--bg-surface-elevated);">
              <i data-lucide="check-circle" style="width: 14px; height: 14px; color: var(--success); margin-right: 4px;"></i>
              ${subData.questionTypes ? subData.questionTypes.length : 0} Dạng Đề Cốt Lõi
            </span>
          </div>
        </div>
        <div class="matrix-grid">
          ${matrixItemsHtml}
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  populateTopicSelect() {
    if (!this.topicSelect) return;
    const subData = window.KNOWLEDGE_BASE[this.currentSubject];
    if (!subData || !subData.questionTypes) return;

    this.topicSelect.innerHTML = '';
    subData.questionTypes.forEach((t, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `${t.typeCode}: ${t.title}`;
      this.topicSelect.appendChild(opt);
    });
    this.topicSelect.value = this.currentTopicIndex;
  }

  getFilteredQuestionTypes() {
    const subData = window.KNOWLEDGE_BASE[this.currentSubject];
    if (!subData || !subData.questionTypes) return [];

    return subData.questionTypes.filter(q => {
      // Filter by level
      if (this.filterLevel === 'basic') {
        const lvl = (q.level || '').toLowerCase();
        if (!lvl.includes('nhận biết') && !lvl.includes('thông hiểu') && !lvl.includes('cơ bản')) return false;
      } else if (this.filterLevel === 'intermediate') {
        const lvl = (q.level || '').toLowerCase();
        if (!lvl.includes('vận dụng') || lvl.includes('vận dụng cao') || lvl.includes('phân loại')) return false;
      } else if (this.filterLevel === 'advanced') {
        const lvl = (q.level || '').toLowerCase();
        if (!lvl.includes('cao') && !lvl.includes('phân loại') && !lvl.includes('10')) return false;
      }

      // Filter by search query
      if (this.searchQuery) {
        const text = `${q.typeCode} ${q.title} ${q.summary} ${q.examPosition} ${q.category}`.toLowerCase();
        if (!text.includes(this.searchQuery)) return false;
      }

      return true;
    });
  }

  renderQuestionTypesGuide() {
    if (!this.cheatSheetArea) return;
    const subData = window.KNOWLEDGE_BASE[this.currentSubject];
    if (!subData) return;

    const filteredTypes = this.getFilteredQuestionTypes();
    this.cheatSheetArea.innerHTML = '';

    if (filteredTypes.length === 0) {
      this.cheatSheetArea.innerHTML = `
        <div class="exam-empty-state">
          <i data-lucide="search-x"></i>
          <h4 style="font-weight: 700; margin-bottom: 0.5rem;">Không tìm thấy dạng bài phù hợp</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted);">
            Thử thay đổi từ khóa tìm kiếm hoặc chọn bộ lọc mức độ khác.
          </p>
          <button class="btn btn-secondary btn-sm" onclick="window.flashcardTrainer.resetFilters()" style="margin-top: 1rem;">
            <i data-lucide="rotate-ccw"></i> Xem tất cả dạng bài
          </button>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    filteredTypes.forEach((qt) => {
      const realIndex = subData.questionTypes.findIndex(item => item.id === qt.id);
      const card = document.createElement('div');
      card.className = 'knowledge-type-card';
      card.id = `qtype_card_${realIndex}`;

      // Method steps HTML
      let methodsHtml = '';
      if (qt.methods && qt.methods.length > 0) {
        let stepsItems = '';
        qt.methods.forEach((step, sIdx) => {
          stepsItems += `
            <div class="method-step-item">
              <span class="method-step-number">${sIdx + 1}</span>
              <div>${step}</div>
            </div>
          `;
        });
        methodsHtml = `
          <div style="margin: 1.25rem 0;">
            <div style="font-size: 0.88rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.45rem;">
              <i data-lucide="compass" style="width: 16px; height: 16px; color: var(--primary);"></i>
              Chiến lược & Phương pháp giải chuẩn:
            </div>
            <div class="method-step-list">
              ${stepsItems}
            </div>
          </div>
        `;
      }

      // Formulas Grid HTML
      let formulasHtml = '';
      if (qt.formulas && qt.formulas.length > 0) {
        let formulaCards = '';
        qt.formulas.forEach(f => {
          let formulaBody = f.formula;
          if (formulaBody.includes('\\') && !formulaBody.includes('$')) {
            formulaBody = `$$${formulaBody}$$`;
          }
          formulaCards += `
            <div class="type-formula-card">
              <div class="type-formula-title">${f.name}</div>
              <div class="type-formula-body">${formulaBody}</div>
            </div>
          `;
        });
        formulasHtml = `
          <div style="margin: 1.25rem 0;">
            <div style="font-size: 0.88rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.45rem;">
              <i data-lucide="bookmark" style="width: 16px; height: 16px; color: var(--primary);"></i>
              Công thức & Quy tắc cốt lõi:
            </div>
            <div class="type-formula-grid">
              ${formulaCards}
            </div>
          </div>
        `;
      }

      // Exam Example HTML
      let exampleHtml = '';
      if (qt.examExample) {
        exampleHtml = `
          <div class="type-example-box">
            <span class="example-badge">
              <i data-lucide="sparkles" style="width: 13px; height: 13px;"></i> Ví dụ mẫu trích xuất từ đề thi thật & Lời giải chuẩn barem
            </span>
            <div class="example-question">
              ${qt.examExample.question}
            </div>
            <div class="example-solution">
              <strong>Lời giải chi tiết:</strong>\n${qt.examExample.solution}
            </div>
            ${qt.examExample.note ? `
              <div class="example-note">
                <i data-lucide="info" style="width: 14px; height: 14px;"></i> ${qt.examExample.note}
              </div>
            ` : ''}
          </div>
        `;
      }

      // Traps & Common mistakes HTML
      let trapsHtml = '';
      if (qt.traps && qt.traps.length > 0) {
        let trapItems = '';
        qt.traps.forEach(trap => {
          trapItems += `<li>${trap}</li>`;
        });
        trapsHtml = `
          <div class="type-traps-box">
            <div class="type-traps-title">
              <i data-lucide="alert-triangle" style="width: 16px; height: 16px;"></i>
              Bẫy đề thi & Lỗi sai kinh điển (Cảnh báo mất điểm):
            </div>
            <ul class="type-traps-list">
              ${trapItems}
            </ul>
          </div>
        `;
      }

      // Flashcards count badge
      const fcCount = (qt.flashcards || []).length;

      card.innerHTML = `
        <div class="type-header-row">
          <div class="type-badges-group">
            <span class="type-code-pill" style="background: ${subData.color}22; color: ${subData.color}; border: 1px solid ${subData.color}44;">
              ${qt.typeCode}
            </span>
            <span class="type-exam-pos-pill">
              <i data-lucide="target" style="width: 13px; height: 13px; display: inline-block; vertical-align: middle; margin-right: 3px;"></i>
              ${qt.examPosition}
            </span>
            <span class="type-level-pill">${qt.level}</span>
            <span class="type-level-pill" style="color: var(--primary);">${qt.category}</span>
          </div>
          <div>
            <span class="stat-pill" style="font-size: 0.8rem; font-weight: 700; color: #10b981; border-color: rgba(16, 185, 129, 0.3);">
              Mục tiêu: ${qt.targetScore}
            </span>
          </div>
        </div>

        <h3 class="type-card-title">${qt.title}</h3>
        <p class="type-card-summary">${qt.summary}</p>

        <div>
          ${methodsHtml}
          ${formulasHtml}
          ${exampleHtml}
          ${trapsHtml}
        </div>

        <div class="type-card-actions">
          <button class="btn btn-secondary btn-sm" onclick="window.flashcardTrainer.openFlashcardsForType(${realIndex})">
            <i data-lucide="layers"></i> Luyện ${fcCount} thẻ Flashcard dạng này
          </button>
          <button class="btn btn-primary btn-sm" onclick="window.flashcardTrainer.practiceQuestionTypeInExam('${qt.id}', '${this.currentSubject}')">
            <i data-lucide="play-circle"></i> Đề luyện đúng 1 dạng này (${qt.typeCode})
          </button>
        </div>
      `;

      this.cheatSheetArea.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();

    // KaTeX Math Rendering
    if (window.renderMathInElement) {
      window.renderMathInElement(this.cheatSheetArea, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  resetFilters() {
    this.searchQuery = '';
    this.filterLevel = 'all';
    if (this.searchInput) this.searchInput.value = '';
    if (this.filterChips) {
      this.filterChips.forEach(c => c.classList.toggle('active', c.dataset.level === 'all'));
    }
    this.renderQuestionTypesGuide();
  }

  openFlashcardsForType(typeIndex) {
    this.currentTopicIndex = typeIndex;
    if (this.topicSelect) this.topicSelect.value = typeIndex;
    this.currentCardIndex = 0;
    this.isFlipped = false;
    this.setViewMode('flashcard');
  }

  getCurrentTopicCards() {
    const subData = window.KNOWLEDGE_BASE[this.currentSubject];
    if (!subData || !subData.questionTypes || !subData.questionTypes[this.currentTopicIndex]) return [];
    return subData.questionTypes[this.currentTopicIndex].flashcards || [];
  }

  getCurrentTopicInfo() {
    const subData = window.KNOWLEDGE_BASE[this.currentSubject];
    if (!subData || !subData.questionTypes || !subData.questionTypes[this.currentTopicIndex]) return null;
    return subData.questionTypes[this.currentTopicIndex];
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    if (this.cardStage) {
      this.cardStage.classList.toggle('flipped', this.isFlipped);
    }
    if (window.soundManager) window.soundManager.playTone(500, 'sine', 0.05, 0.04);
  }

  navigate(delta) {
    const cards = this.getCurrentTopicCards();
    if (cards.length === 0) return;

    this.isFlipped = false;
    if (this.cardStage) this.cardStage.classList.remove('flipped');

    this.currentCardIndex = (this.currentCardIndex + delta + cards.length) % cards.length;
    if (window.soundManager) window.soundManager.playClick();
    this.renderCard();
  }

  toggleMasterCurrent() {
    const cards = this.getCurrentTopicCards();
    if (cards.length === 0) return;
    const card = cards[this.currentCardIndex];

    const isNowMastered = window.storageManager.toggleMasteredFlashcard(card.front);
    if (window.soundManager) window.soundManager.playSuccess();
    this.renderCard();

    // Auto next after 350ms
    setTimeout(() => {
      this.navigate(1);
    }, 350);
  }

  shuffleCards() {
    const subData = window.KNOWLEDGE_BASE[this.currentSubject];
    if (!subData || !subData.questionTypes || !subData.questionTypes[this.currentTopicIndex]) return;
    const cards = subData.questionTypes[this.currentTopicIndex].flashcards;
    if (!cards || cards.length === 0) return;

    // Fisher-Yates shuffle
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    this.currentCardIndex = 0;
    this.isFlipped = false;
    if (this.cardStage) this.cardStage.classList.remove('flipped');
    this.renderCard();
    if (window.soundManager) window.soundManager.playClick();
  }

  renderCard() {
    const cards = this.getCurrentTopicCards();
    const topicInfo = this.getCurrentTopicInfo();

    if (this.cardTypeTag && topicInfo) {
      this.cardTypeTag.textContent = `${topicInfo.typeCode}: ${topicInfo.title}`;
      this.cardTypeTag.className = `subject-badge ${this.currentSubject}`;
    }

    if (this.cardTopicSubtitle && topicInfo) {
      this.cardTopicSubtitle.textContent = topicInfo.examPosition;
    }

    if (cards.length === 0) {
      if (this.cardQuestion) this.cardQuestion.innerHTML = "Chưa có thẻ ghi nhớ cho dạng này";
      if (this.cardAnswer) this.cardAnswer.innerHTML = "Vui lòng chọn dạng bài khác.";
      if (this.cardCounter) this.cardCounter.textContent = "0 / 0";
      return;
    }

    const card = cards[this.currentCardIndex];
    if (this.cardStage) this.cardStage.classList.toggle('flipped', this.isFlipped);

    // If English, offer Text-to-speech
    if (this.currentSubject === 'english') {
      const cleanFront = card.front.replace(/<[^>]*>?/gm, '').replace(/[*_~`'$]/g, '');
      const speakBtnHtml = `
        <div style="margin-top: 0.65rem;">
          <button class="btn btn-secondary btn-sm fc-speak-btn" style="border-radius: 999px; padding: 4px 14px; font-size: 0.78rem;">
            <i data-lucide="volume-2" style="width: 14px; height: 14px;"></i> Nghe phát âm chuẩn
          </button>
        </div>
      `;
      if (this.cardQuestion) {
        this.cardQuestion.innerHTML = `<div>${card.front}</div>${speakBtnHtml}`;
        const sBtn = this.cardQuestion.querySelector('.fc-speak-btn');
        if (sBtn) {
          sBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.speakEnglish) window.speakEnglish(cleanFront);
          });
        }
      }
    } else {
      if (this.cardQuestion) this.cardQuestion.innerHTML = card.front;
    }

    if (this.cardAnswer) this.cardAnswer.innerHTML = card.back;
    if (this.cardCounter) this.cardCounter.textContent = `${this.currentCardIndex + 1} / ${cards.length}`;

    // Subject badge
    if (this.cardSubjectBadge) {
      const subName = this.currentSubject === 'math' ? 'Toán Học' : this.currentSubject === 'english' ? 'Tiếng Anh' : 'Ngữ Văn';
      this.cardSubjectBadge.textContent = subName;
      this.cardSubjectBadge.className = `subject-badge ${this.currentSubject}`;
    }

    // Check mastery status
    const masteredList = window.storageManager.getMasteredFlashcards();
    const isMastered = masteredList.includes(card.front);

    if (this.btnMaster) {
      this.btnMaster.className = isMastered ? 'btn btn-success' : 'btn btn-secondary';
      this.btnMaster.innerHTML = isMastered ?
        `<i data-lucide="check-check"></i> Đã thuộc bài` :
        `<i data-lucide="bookmark-plus"></i> Đánh dấu đã thuộc`;
      if (window.lucide) window.lucide.createIcons();
    }

    if (this.masteryCounter) {
      this.masteryCounter.textContent = `${masteredList.length} thẻ đã thuộc`;
    }

    // KaTeX auto render on card
    if (window.renderMathInElement && this.cardStage) {
      window.renderMathInElement(this.cardStage, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  practiceQuestionTypeInExam(typeId, subject) {
    let exams = [];
    if (subject === 'math') {
      exams = window.MATH_EXAMS || [];
    } else if (subject === 'english') {
      exams = window.ENGLISH_EXAMS || [];
    } else if (subject === 'literature') {
      exams = window.LITERATURE_EXAMS || [];
    }

    // Look up dedicated single-topic exam matching this exact question type
    let examToStart = exams.find(e => e.topicId === typeId) ||
                      exams.find(e => e.id && (e.id.includes(typeId) || typeId.includes(e.id))) ||
                      exams.find(e => e.isSingleTopic) ||
                      exams[0];

    if (examToStart && window.examEngine) {
      if (window.app) window.app.switchTab('exam');
      window.examEngine.startExam(examToStart, 'practice');
    } else {
      if (window.app) window.app.switchTab('exams-list');
    }
  }

  init() {
    this.renderSubjectMatrix();
    this.populateTopicSelect();
    this.renderQuestionTypesGuide();
    this.renderCard();
  }
}

// Global initialization
window.flashcardTrainer = new FlashcardTrainer();
