// =========================================================
// EDUPASS 10 - EXAM ENGINE
// Room Simulator, Timer, Real-time Palette, Scoring & Submission
// =========================================================

class ExamEngine {
  constructor() {
    this.activeExam = null;
    this.currentIdx = 0;
    this.userAnswers = {}; // { questionId: selectedIndex }
    this.flaggedQuestions = new Set();
    this.timeRemaining = 0; // in seconds
    this.timerInterval = null;
    this.startTime = null;
    this.mode = 'exam'; // 'exam' or 'practice'

    this.initDOMRefs();
    this.bindEvents();
  }

  initDOMRefs() {
    this.examContainer = document.getElementById('examSimulatorPane');
    this.examTitleBadge = document.getElementById('examTitleBadge');
    this.timerDisplay = document.getElementById('examTimerDisplay');
    this.timerWrapper = document.getElementById('examTimerWrapper');
    this.questionSeq = document.getElementById('currentQuestionSeq');
    this.totalQuestionsSeq = document.getElementById('totalQuestionsSeq');
    this.questionTopic = document.getElementById('currentQuestionTopic');
    this.questionDifficulty = document.getElementById('currentQuestionDifficulty');
    this.questionBody = document.getElementById('currentQuestionBody');
    this.optionsContainer = document.getElementById('currentOptionsContainer');
    this.paletteGrid = document.getElementById('examPaletteGrid');
    this.answeredCount = document.getElementById('paletteAnsweredCount');
    this.totalCount = document.getElementById('paletteTotalCount');
    this.prevBtn = document.getElementById('btnPrevQuestion');
    this.nextBtn = document.getElementById('btnNextQuestion');
    this.flagBtn = document.getElementById('btnFlagQuestion');
    this.submitBtn = document.getElementById('btnSubmitExam');
    this.confirmModal = document.getElementById('submitConfirmModal');
    this.confirmSubmitBtn = document.getElementById('btnConfirmSubmit');
    this.cancelSubmitBtn = document.getElementById('btnCancelSubmit');
  }

  bindEvents() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.navigateQuestion(-1));
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.navigateQuestion(1));
    }
    if (this.flagBtn) {
      this.flagBtn.addEventListener('click', () => this.toggleFlagCurrentQuestion());
    }
    if (this.submitBtn) {
      this.submitBtn.addEventListener('click', () => this.promptSubmitConfirmation());
    }
    if (this.confirmSubmitBtn) {
      this.confirmSubmitBtn.addEventListener('click', () => {
        this.closeConfirmModal();
        this.submitExam();
      });
    }
    if (this.cancelSubmitBtn) {
      this.cancelSubmitBtn.addEventListener('click', () => this.closeConfirmModal());
    }

    // Keyboard navigation (Arrow keys, 1-4 for options)
    document.addEventListener('keydown', (e) => {
      if (!this.activeExam || document.getElementById('examSimulatorPane').style.display === 'none') return;
      if (e.key === 'ArrowRight') this.navigateQuestion(1);
      if (e.key === 'ArrowLeft') this.navigateQuestion(-1);
    });
  }

  startExam(examData, mode = 'exam') {
    this.activeExam = JSON.parse(JSON.stringify(examData));
    this.mode = mode;
    this.currentIdx = 0;
    this.userAnswers = {};
    this.flaggedQuestions.clear();
    this.startTime = Date.now();
    this.timeRemaining = (examData.durationMinutes || 45) * 60;

    // Update Header
    if (this.examTitleBadge) {
      this.examTitleBadge.textContent = this.activeExam.title;
    }
    if (this.totalCount) {
      this.totalCount.textContent = this.activeExam.questions.length;
    }

    // Render palette
    this.renderPalette();

    // Render first question
    this.renderCurrentQuestion();

    // Start Timer
    this.startTimer();

    // Switch view to exam tab
    if (window.app) {
      window.app.switchTab('exam');
    }

    window.soundManager.playClick();
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);

    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.timeRemaining--;

      if (this.timeRemaining <= 300 && this.timeRemaining > 60) {
        this.timerWrapper?.classList.add('warning');
      } else if (this.timeRemaining <= 60 && this.timeRemaining > 0) {
        this.timerWrapper?.classList.add('danger');
        if (this.timeRemaining % 10 === 0) {
          window.soundManager.playWarning();
        }
      } else if (this.timeRemaining <= 0) {
        clearInterval(this.timerInterval);
        this.submitExam(true); // Forced submit
      }

      this.updateTimerDisplay();
    }, 1000);
  }

  updateTimerDisplay() {
    if (!this.timerDisplay) return;
    const minutes = Math.floor(Math.max(0, this.timeRemaining) / 60);
    const seconds = Math.max(0, this.timeRemaining) % 60;
    this.timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  renderCurrentQuestion() {
    if (!this.activeExam) return;
    const q = this.activeExam.questions[this.currentIdx];
    if (!q) return;

    if (this.questionSeq) this.questionSeq.textContent = `Câu ${this.currentIdx + 1}`;
    if (this.totalQuestionsSeq) this.totalQuestionsSeq.textContent = `/ ${this.activeExam.questions.length}`;
    if (this.questionTopic) this.questionTopic.textContent = q.topic || "Kiến thức chung";
    if (this.questionDifficulty) this.questionDifficulty.textContent = q.difficulty || "Thông hiểu";
    if (this.questionBody) this.questionBody.innerHTML = q.question;

    const mobileProgress = document.getElementById('mobileExamProgressText');
    if (mobileProgress) {
      mobileProgress.textContent = `Câu ${this.currentIdx + 1}/${this.activeExam.questions.length}`;
    }

    // Render options
    if (this.optionsContainer) {
      this.optionsContainer.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      const selectedAns = this.userAnswers[q.id];
      const isEnglish = this.activeExam.subject === 'english';

      q.options.forEach((optText, optIdx) => {
        const item = document.createElement('div');
        item.className = `option-item ${selectedAns === optIdx ? 'selected' : ''}`;
        item.id = `option_item_${optIdx}`;
        
        let audioBtnHtml = '';
        if (isEnglish) {
          audioBtnHtml = `
            <button class="btn-icon-circle btn-opt-speak" style="width: 28px; height: 28px; margin-left: auto; flex-shrink: 0;" title="Nghe phát âm đáp án">
              <i data-lucide="volume-2" style="width: 13px; height: 13px;"></i>
            </button>
          `;
        }

        item.innerHTML = `
          <div class="option-letter">${letters[optIdx]}</div>
          <div class="option-text">${optText}</div>
          ${audioBtnHtml}
        `;

        // Handle speak on option audio button
        const optSpeak = item.querySelector('.btn-opt-speak');
        if (optSpeak) {
          optSpeak.addEventListener('click', (e) => {
            e.stopPropagation();
            window.speakEnglish(optText);
          });
        }

        item.addEventListener('click', () => this.selectOption(q.id, optIdx));
        this.optionsContainer.appendChild(item);
      });
    }

    // Audio Speak Question button for English
    const speakBtn = document.getElementById('btnAudioSpeakQuestion');
    if (speakBtn) {
      if (this.activeExam.subject === 'english') {
        speakBtn.style.display = 'inline-flex';
        speakBtn.onclick = (e) => {
          e.stopPropagation();
          const cleanQ = q.question.replace(/<[^>]*>?/gm, '').replace(/[_*~`]/g, '');
          window.speakEnglish(cleanQ);
        };
      } else {
        speakBtn.style.display = 'none';
      }
    }

    // Flag button status
    if (this.flagBtn) {
      const isFlagged = this.flaggedQuestions.has(q.id);
      this.flagBtn.innerHTML = isFlagged ? 
        `<i data-lucide="flag-off"></i> Bỏ cờ` : 
        `<i data-lucide="flag"></i> Đánh dấu xem lại`;
      this.flagBtn.className = isFlagged ? 'btn btn-secondary text-warning' : 'btn btn-secondary';
      if (window.lucide) window.lucide.createIcons();
    }

    // Navigation buttons state
    if (this.prevBtn) this.prevBtn.disabled = this.currentIdx === 0;
    if (this.nextBtn) {
      if (this.currentIdx === this.activeExam.questions.length - 1) {
        this.nextBtn.innerHTML = `Hoàn thành <i data-lucide="check-circle"></i>`;
      } else {
        this.nextBtn.innerHTML = `Câu tiếp theo <i data-lucide="chevron-right"></i>`;
      }
      if (window.lucide) window.lucide.createIcons();
    }

    // Update Palette active node
    this.updatePaletteActiveNode();

    // Render KaTeX Math
    this.renderMathFormulas();
  }

  selectOption(qId, optIdx) {
    this.userAnswers[qId] = optIdx;
    window.soundManager.playSelect();

    // Re-render options to update selected state
    this.renderCurrentQuestion();
    this.renderPalette();
  }

  toggleFlagCurrentQuestion() {
    if (!this.activeExam) return;
    const q = this.activeExam.questions[this.currentIdx];
    if (this.flaggedQuestions.has(q.id)) {
      this.flaggedQuestions.delete(q.id);
    } else {
      this.flaggedQuestions.add(q.id);
    }
    window.soundManager.playClick();
    this.renderCurrentQuestion();
    this.renderPalette();
  }

  navigateQuestion(delta) {
    if (!this.activeExam) return;
    const target = this.currentIdx + delta;
    if (target >= 0 && target < this.activeExam.questions.length) {
      this.currentIdx = target;
      window.soundManager.playClick();
      this.renderCurrentQuestion();
    } else if (target >= this.activeExam.questions.length) {
      // Reached the end, suggest submit
      this.promptSubmitConfirmation();
    }
  }

  jumpToQuestion(idx) {
    if (!this.activeExam || idx < 0 || idx >= this.activeExam.questions.length) return;
    this.currentIdx = idx;
    window.soundManager.playClick();
    this.renderCurrentQuestion();
  }

  renderPalette() {
    if (!this.paletteGrid || !this.activeExam) return;
    this.paletteGrid.innerHTML = '';

    let answered = 0;
    this.activeExam.questions.forEach((q, idx) => {
      const isAns = this.userAnswers[q.id] !== undefined;
      const isCur = idx === this.currentIdx;
      const isFlg = this.flaggedQuestions.has(q.id);

      if (isAns) answered++;

      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      if (isCur) btn.classList.add('current');
      if (isAns) btn.classList.add('answered');
      if (isFlg) btn.classList.add('flagged');

      btn.textContent = idx + 1;
      btn.title = `Câu ${idx + 1}${isAns ? ' (Đã làm)' : ' (Chưa làm)'}${isFlg ? ' - Đã cắm cờ' : ''}`;
      btn.addEventListener('click', () => this.jumpToQuestion(idx));
      this.paletteGrid.appendChild(btn);
    });

    if (this.answeredCount) this.answeredCount.textContent = answered;
  }

  updatePaletteActiveNode() {
    const buttons = this.paletteGrid?.querySelectorAll('.palette-btn');
    if (!buttons) return;
    buttons.forEach((btn, idx) => {
      btn.classList.toggle('current', idx === this.currentIdx);
    });
  }

  renderMathFormulas() {
    // KaTeX auto-render if available
    if (window.renderMathInElement) {
      window.renderMathInElement(this.questionBody, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
      if (this.optionsContainer) {
        window.renderMathInElement(this.optionsContainer, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false
        });
      }
    }
  }

  promptSubmitConfirmation() {
    if (!this.activeExam) return;
    const answered = Object.keys(this.userAnswers).length;
    const total = this.activeExam.questions.length;
    const unAns = total - answered;

    const modalMsg = document.getElementById('submitModalMessage');
    if (modalMsg) {
      modalMsg.innerHTML = `
        Bạn đã làm được <strong>${answered}/${total}</strong> câu hỏi.
        ${unAns > 0 ? `<br><span style="color: var(--warning);">⚠️ Còn ${unAns} câu bạn chưa trả lời!</span>` : `<br><span style="color: var(--success);">🎉 Bạn đã hoàn thành tất cả các câu hỏi!</span>`}
      `;
    }

    if (this.confirmModal) {
      this.confirmModal.classList.add('active');
    }
  }

  closeConfirmModal() {
    if (this.confirmModal) {
      this.confirmModal.classList.remove('active');
    }
  }

  submitExam(isForced = false) {
    if (!this.activeExam) return;
    clearInterval(this.timerInterval);

    const timeSpentSeconds = Math.round((Date.now() - this.startTime) / 1000);
    const questions = this.activeExam.questions;
    let correctCount = 0;
    const wrongQuestions = [];
    const fullReviewData = [];

    // Analyze topic mastery
    const topicStats = {};

    questions.forEach((q, idx) => {
      const userChoice = this.userAnswers[q.id];
      const isCorrect = userChoice === q.correctIndex;
      const isSkipped = userChoice === undefined;

      if (isCorrect) {
        correctCount++;
      } else {
        wrongQuestions.push({
          ...q,
          userAnswer: userChoice,
          subject: this.activeExam.subject
        });
      }

      fullReviewData.push({
        ...q,
        userAnswer: userChoice,
        isCorrect,
        isSkipped,
        subject: this.activeExam.subject
      });

      // Topic stats
      const topName = q.topic || 'Chung';
      if (!topicStats[topName]) {
        topicStats[topName] = { total: 0, correct: 0 };
      }
      topicStats[topName].total++;
      if (isCorrect) topicStats[topName].correct++;
    });

    // Score on scale of 10
    const rawScore = (correctCount / questions.length) * 10;
    const score = Math.round(rawScore * 100) / 100;

    const resultPayload = {
      examId: this.activeExam.id,
      title: this.activeExam.title,
      subject: this.activeExam.subject,
      score,
      correctCount,
      totalQuestions: questions.length,
      wrongCount: questions.length - correctCount,
      timeSpentSeconds,
      topicStats,
      wrongQuestions,
      fullReviewData,
      isForced
    };

    // Save to storage
    window.storageManager.saveExamResult(resultPayload);

    // Audio & Confetti
    if (score >= 8.0) {
      window.soundManager.playFanfare();
      if (window.confetti) {
        window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      }
    } else {
      window.soundManager.playSuccess();
    }

    // Display Results View
    this.displayResults(resultPayload);
  }

  displayResults(result) {
    if (window.app) {
      window.app.switchTab('results');
    }

    const scoreNum = document.getElementById('resultScoreNumber');
    const verdict = document.getElementById('resultVerdictText');
    const feedback = document.getElementById('resultFeedbackText');
    const correctVal = document.getElementById('resultCorrectVal');
    const wrongVal = document.getElementById('resultWrongVal');
    const timeVal = document.getElementById('resultTimeVal');
    const accuracyVal = document.getElementById('resultAccuracyVal');
    const topicList = document.getElementById('resultTopicBreakdown');

    if (scoreNum) scoreNum.textContent = result.score.toFixed(1);

    const accuracy = Math.round((result.correctCount / result.totalQuestions) * 100);
    if (accuracyVal) accuracyVal.textContent = `${accuracy}%`;
    if (correctVal) correctVal.textContent = `${result.correctCount}/${result.totalQuestions}`;
    if (wrongVal) wrongVal.textContent = result.wrongCount;

    const mins = Math.floor(result.timeSpentSeconds / 60);
    const secs = result.timeSpentSeconds % 60;
    if (timeVal) timeVal.textContent = `${mins}m ${secs}s`;

    // Verdict calculation
    let verdictText = "";
    let feedbackText = "";
    if (result.score >= 9.0) {
      verdictText = "Xuất sắc! Cực kỳ tiềm năng vào trường Chuyên / Top 1";
      feedbackText = "Bạn nắm rất vững các chuyên đề trọng tâm và tránh được hầu hết các bẫy đề thi. Hãy duy trì tốc độ và sự tập trung này!";
    } else if (result.score >= 8.0) {
      verdictText = "Rất tốt! Cơ hội đỗ trường mục tiêu rất cao";
      feedbackText = "Kiến thức nền tảng rất chắc chắn. Hãy xem lại một vài câu sai sót nhỏ trong Sổ tay lỗi sai để bứt phá lên mốc 9.5 - 10!";
    } else if (result.score >= 6.5) {
      verdictText = "Khá! Đang trên đà bứt phá";
      feedbackText = "Bạn đã hoàn thành khá tốt các câu nhận biết và thông hiểu, nhưng còn vướng ở các dạng bài vận dụng và bẫy công thức. Hãy xem giải chi tiết ngay.";
    } else {
      verdictText = "Cần tăng tốc củng cố nền tảng!";
      feedbackText = "Đừng nản lòng! Hãy ôn lại các thẻ Flashcard và rà soát kỹ lại những câu đã làm sai trong bài thi này.";
    }

    if (verdict) verdict.textContent = verdictText;
    if (feedback) feedback.textContent = feedbackText;

    // Render topic breakdown
    if (topicList && result.topicStats) {
      topicList.innerHTML = '';
      Object.entries(result.topicStats).forEach(([top, stats]) => {
        const pct = Math.round((stats.correct / stats.total) * 100);
        const item = document.createElement('div');
        item.className = 'topic-stat-row';
        item.style.cssText = 'padding: 0.75rem 0; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;';
        item.innerHTML = `
          <div>
            <div style="font-weight: 600; font-size: 0.9rem;">${top}</div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${stats.correct}/${stats.total} câu chính xác</div>
          </div>
          <div style="text-align: right;">
            <span style="font-weight: 700; font-family: var(--font-mono); color: ${pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)'};">${pct}%</span>
          </div>
        `;
        topicList.appendChild(item);
      });
    }

    // Connect with review engine
    if (window.reviewEngine) {
      window.reviewEngine.setReviewData(result.fullReviewData, result.title);
    }

    // Trigger dashboard and roadmap re-render
    if (window.progressTracker) {
      window.progressTracker.renderAll();
    }
    if (window.app) {
      window.app.updateHeaderStats();
    }
  }
}

window.examEngine = new ExamEngine();
