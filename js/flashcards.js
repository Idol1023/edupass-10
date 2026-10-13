// =========================================================
// EDUPASS 10 - FLASHCARDS & KNOWLEDGE TRAINER
// 3D Interactive Flip, Subject Switching, Mastery Tracking
// =========================================================

class FlashcardTrainer {
  constructor() {
    this.currentSubject = 'math';
    this.currentTopicIndex = 0;
    this.currentCardIndex = 0;
    this.isFlipped = false;

    this.initDOMRefs();
    this.bindEvents();
  }

  initDOMRefs() {
    this.subjectTabs = document.querySelectorAll('.fc-sub-tab');
    this.topicSelect = document.getElementById('flashcardTopicSelect');
    this.cardStage = document.getElementById('interactiveFlashcard');
    this.cardQuestion = document.getElementById('fcCardQuestion');
    this.cardAnswer = document.getElementById('fcCardAnswer');
    this.cardSubjectBadge = document.getElementById('fcSubjectBadge');
    this.cardCounter = document.getElementById('fcCardCounter');
    this.btnPrev = document.getElementById('btnFcPrev');
    this.btnNext = document.getElementById('btnFcNext');
    this.btnFlip = document.getElementById('btnFcFlip');
    this.btnMaster = document.getElementById('btnFcMaster');
    this.btnShuffle = document.getElementById('btnFcShuffle');
    this.masteryCounter = document.getElementById('fcMasteryCountBadge');
  }

  bindEvents() {
    this.subjectTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const sub = e.currentTarget.dataset.subject;
        this.setSubject(sub);
      });
    });

    if (this.topicSelect) {
      this.topicSelect.addEventListener('change', (e) => {
        this.currentTopicIndex = parseInt(e.target.value) || 0;
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.renderCard();
      });
    }

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

    this.subjectTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.subject === sub);
    });

    this.populateTopicSelect();
    this.renderCard();
    this.renderTopicSummary();
  }

  populateTopicSelect() {
    if (!this.topicSelect) return;
    const subData = window.KNOWLEDGE_BASE[this.currentSubject];
    if (!subData) return;

    this.topicSelect.innerHTML = '';
    subData.topics.forEach((t, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `${idx + 1}. ${t.title}`;
      this.topicSelect.appendChild(opt);
    });
    this.topicSelect.value = this.currentTopicIndex;
  }

  getCurrentTopicCards() {
    const subData = window.KNOWLEDGE_BASE[this.currentSubject];
    if (!subData || !subData.topics[this.currentTopicIndex]) return [];
    return subData.topics[this.currentTopicIndex].flashcards || [];
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    if (this.cardStage) {
      this.cardStage.classList.toggle('flipped', this.isFlipped);
    }
    window.soundManager.playTone(500, 'sine', 0.05, 0.04);
  }

  navigate(delta) {
    const cards = this.getCurrentTopicCards();
    if (cards.length === 0) return;

    this.isFlipped = false;
    if (this.cardStage) this.cardStage.classList.remove('flipped');

    this.currentCardIndex = (this.currentCardIndex + delta + cards.length) % cards.length;
    window.soundManager.playClick();
    this.renderCard();
  }

  toggleMasterCurrent() {
    const cards = this.getCurrentTopicCards();
    if (cards.length === 0) return;
    const card = cards[this.currentCardIndex];

    const isNowMastered = window.storageManager.toggleMasteredFlashcard(card.front);
    window.soundManager.playSuccess();
    this.renderCard();

    // Auto next after 350ms
    setTimeout(() => {
      this.navigate(1);
    }, 350);
  }

  shuffleCards() {
    const subData = window.KNOWLEDGE_BASE[this.currentSubject];
    if (!subData || !subData.topics[this.currentTopicIndex]) return;
    const cards = subData.topics[this.currentTopicIndex].flashcards;
    
    // Fisher-Yates shuffle
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    this.currentCardIndex = 0;
    this.isFlipped = false;
    if (this.cardStage) this.cardStage.classList.remove('flipped');
    this.renderCard();
    window.soundManager.playClick();
  }

  renderCard() {
    const cards = this.getCurrentTopicCards();
    if (cards.length === 0) return;

    const card = cards[this.currentCardIndex];
    if (this.cardStage) this.cardStage.classList.toggle('flipped', this.isFlipped);

    if (this.currentSubject === 'english') {
      const cleanFront = card.front.replace(/<[^>]*>?/gm, '').replace(/[*_~`']/g, '');
      const speakBtnHtml = `
        <div style="margin-top: 0.65rem;">
          <button class="btn btn-secondary btn-sm fc-speak-btn" style="border-radius: 999px; padding: 3px 12px; font-size: 0.75rem;">
            <i data-lucide="volume-2" style="width: 13px; height: 13px;"></i> Nghe phát âm
          </button>
        </div>
      `;
      if (this.cardQuestion) {
        this.cardQuestion.innerHTML = `<div>${card.front}</div>${speakBtnHtml}`;
        const sBtn = this.cardQuestion.querySelector('.fc-speak-btn');
        if (sBtn) {
          sBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.speakEnglish(cleanFront);
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
      const subName = this.currentSubject === 'math' ? 'Toán' : this.currentSubject === 'english' ? 'Tiếng Anh' : 'Ngữ Văn';
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

    // KaTeX
    if (window.renderMathInElement && this.cardStage) {
      window.renderMathInElement(this.cardStage, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  renderTopicSummary() {
    const summaryContainer = document.getElementById('knowledgeCheatSheetArea');
    if (!summaryContainer) return;

    const subData = window.KNOWLEDGE_BASE[this.currentSubject];
    if (!subData) return;

    summaryContainer.innerHTML = '';

    subData.topics.forEach(topic => {
      const card = document.createElement('div');
      card.className = 'subject-card';
      card.style.marginBottom = '1.25rem';

      let formulasHtml = '';
      if (topic.formulas) {
        topic.formulas.forEach(f => {
          formulasHtml += `
            <div style="background: var(--bg-surface-elevated); padding: 0.75rem 1rem; border-radius: var(--radius-sm); margin-bottom: 0.5rem; border: 1px solid var(--border-subtle);">
              <div style="font-weight: 700; font-size: 0.82rem; color: var(--primary); margin-bottom: 0.25rem;">${f.name}</div>
              <div style="font-size: 0.95rem;">${f.formula}</div>
            </div>
          `;
        });
      }

      let trapsHtml = '';
      if (topic.traps) {
        topic.traps.forEach(trap => {
          trapsHtml += `
            <div class="trap-box" style="margin-top: 0.5rem;">
              <i data-lucide="alert-circle" style="flex-shrink: 0; margin-top: 2px;"></i>
              <div>${trap}</div>
            </div>
          `;
        });
      }

      card.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
          <h3 style="font-size: 1.15rem; font-weight: 800;">${topic.title}</h3>
          <span class="subject-badge ${this.currentSubject}">${topic.flashcards.length} thẻ ghi nhớ</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1rem;">${topic.summary}</p>
        <div>
          ${formulasHtml}
          ${trapsHtml}
        </div>
      `;

      summaryContainer.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();

    if (window.renderMathInElement) {
      window.renderMathInElement(summaryContainer, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  init() {
    this.populateTopicSelect();
    this.renderCard();
    this.renderTopicSummary();
  }
}

window.flashcardTrainer = new FlashcardTrainer();
