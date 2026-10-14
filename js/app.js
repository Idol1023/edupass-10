// =========================================================
// EDUPASS 10 - MAIN APPLICATION CONTROLLER
// Tab Router, Exam Catalog, Countdown, Theme & UI Handlers
// =========================================================

class EduPassApp {
  constructor() {
    this.activeTab = 'dashboard';
    this.theme = localStorage.getItem('edupass_theme') || 'dark';

    this.initTheme();
    this.bindNavigation();
    this.bindHeaderControls();
    this.initCountdown();
    this.renderExamCatalog();
    this.updateHeaderStats();
    this.initLucideIcons();

    // Default to dashboard
    this.switchTab('dashboard');
  }

  initTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    const themeIcon = document.getElementById('themeToggleBtn');
    if (themeIcon) {
      themeIcon.innerHTML = this.theme === 'dark' ? 
        `<i data-lucide="sun"></i>` : 
        `<i data-lucide="moon"></i>`;
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.theme);
    localStorage.setItem('edupass_theme', this.theme);
    const themeIcon = document.getElementById('themeToggleBtn');
    if (themeIcon) {
      themeIcon.innerHTML = this.theme === 'dark' ? 
        `<i data-lucide="sun"></i>` : 
        `<i data-lucide="moon"></i>`;
      this.initLucideIcons();
    }
    // Re-render charts for theme compatibility
    if (window.progressTracker) {
      window.progressTracker.renderCharts();
    }
  }

  bindNavigation() {
    // Desktop & Tablet Navigation
    const navButtons = document.querySelectorAll('.nav-tab-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetTab = e.currentTarget.dataset.tab;
        if (targetTab) {
          this.switchTab(targetTab);
          window.soundManager.playClick();
        }
      });
    });

    // Mobile Bottom Navigation
    const mobileNavButtons = document.querySelectorAll('.mobile-nav-item');
    mobileNavButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetTab = e.currentTarget.dataset.tab;
        if (targetTab) {
          this.switchTab(targetTab);
          window.soundManager.playClick();
        }
      });
    });

    // Mobile Exam Quick Actions Bar
    const btnMobPrev = document.getElementById('btnMobilePrevQ');
    if (btnMobPrev) {
      btnMobPrev.addEventListener('click', () => {
        if (window.examEngine) window.examEngine.prevQuestion();
      });
    }

    const btnMobNext = document.getElementById('btnMobileNextQ');
    if (btnMobNext) {
      btnMobNext.addEventListener('click', () => {
        if (window.examEngine) window.examEngine.nextQuestion();
      });
    }

    const btnMobSubmit = document.getElementById('btnMobileSubmitExam');
    if (btnMobSubmit) {
      btnMobSubmit.addEventListener('click', () => {
        if (window.examEngine) window.examEngine.confirmSubmit();
      });
    }

    const btnMobTogglePalette = document.getElementById('btnMobileTogglePalette');
    if (btnMobTogglePalette) {
      btnMobTogglePalette.addEventListener('click', () => {
        const palette = document.querySelector('.palette-card');
        if (palette) {
          palette.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }

    // Quick Action buttons on Hero / Dashboard
    const btnHeroStart = document.getElementById('btnHeroStartExam');
    if (btnHeroStart) {
      btnHeroStart.addEventListener('click', () => {
        const hcmcExam = window.ENGLISH_EXAMS ? window.ENGLISH_EXAMS.find(e => e.id === 'eng_exam_02') : null;
        if (hcmcExam && window.examEngine) {
          window.examEngine.startExam(hcmcExam, 'exam');
        } else {
          this.switchTab('exams-list');
        }
        window.soundManager.playClick();
      });
    }

    const btnBannerHcmc = document.getElementById('btnBannerStartHcmcEnglish');
    if (btnBannerHcmc) {
      btnBannerHcmc.addEventListener('click', () => {
        const hcmcExam = window.ENGLISH_EXAMS ? 
          (window.ENGLISH_EXAMS.find(e => e.id === 'eng_exam_hcmc_2024') || window.ENGLISH_EXAMS.find(e => e.id === 'eng_exam_02')) : null;
        if (hcmcExam && window.examEngine) {
          window.examEngine.startExam(hcmcExam, 'exam');
        }
        window.soundManager.playClick();
      });
    }

    const btnHeroRoadmap = document.getElementById('btnHeroRoadmap') || document.getElementById('btnHeroViewRoadmap');
    if (btnHeroRoadmap) {
      btnHeroRoadmap.addEventListener('click', () => {
        this.switchTab('roadmap');
        window.soundManager.playClick();
      });
    }

    const btnGoToReview = document.getElementById('btnViewExamReview');
    if (btnGoToReview) {
      btnGoToReview.addEventListener('click', () => {
        this.switchTab('review');
        window.soundManager.playClick();
      });
    }

    const btnGoToMistakes = document.getElementById('btnGoToMistakeNotebook');
    if (btnGoToMistakes) {
      btnGoToMistakes.addEventListener('click', () => {
        this.switchTab('mistakes');
        window.soundManager.playClick();
      });
    }

    const brandBtn = document.getElementById('brandLogoLink');
    if (brandBtn) {
      brandBtn.addEventListener('click', () => {
        this.switchTab('dashboard');
        window.soundManager.playClick();
      });
    }
  }

  bindHeaderControls() {
    // Theme toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Sound toggle
    const soundBtn = document.getElementById('soundToggleBtn');
    if (soundBtn) {
      soundBtn.innerHTML = window.soundManager.isMuted() ? 
        `<i data-lucide="volume-x"></i>` : 
        `<i data-lucide="volume-2"></i>`;

      soundBtn.addEventListener('click', () => {
        const isMuted = window.soundManager.toggleMute();
        soundBtn.innerHTML = isMuted ? 
          `<i data-lucide="volume-x"></i>` : 
          `<i data-lucide="volume-2"></i>`;
        this.initLucideIcons();
      });
    }

    // Target pill click
    const targetPill = document.getElementById('headerTargetPill');
    if (targetPill) {
      targetPill.addEventListener('click', () => {
        this.switchTab('roadmap');
      });
    }

    // Reset data
    const resetBtn = document.getElementById('btnResetData');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm("Bạn có chắc chắn muốn đặt lại toàn bộ dữ liệu về 0 (xóa lịch sử làm bài, điểm số, chuỗi streak và sổ tay lỗi sai) không?")) {
          window.storageManager.resetAllData();
          if (window.examEngine) {
            window.examEngine.activeExam = null;
            window.examEngine.userAnswers = {};
            if (window.examEngine.timerInterval) clearInterval(window.examEngine.timerInterval);
          }
          this.updateHeaderStats();
          if (window.progressTracker) window.progressTracker.renderAll();
          if (window.reviewEngine) {
            window.reviewEngine.setReviewData([], "Chưa có bài thi nào");
            window.reviewEngine.renderMistakeNotebook();
          }
          window.soundManager.playSuccess();
          alert("Toàn bộ dữ liệu học tập đã được đưa về 0 thành công!");
        }
      });
    }
  }

  switchTab(tabId) {
    this.activeTab = tabId;

    // Update nav tab highlights (both desktop top bar and mobile bottom bar)
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.mobile-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // Update tab view panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.remove('active');
    });

    const targetPane = document.getElementById(`tabPane_${tabId}`);
    if (targetPane) {
      targetPane.classList.add('active');
    }

    // Tab specific initializers
    if (tabId === 'knowledge' && window.flashcardTrainer) {
      window.flashcardTrainer.init();
    } else if (tabId === 'mistakes' && window.reviewEngine) {
      window.reviewEngine.renderMistakeNotebook();
    } else if (tabId === 'review' && window.reviewEngine) {
      window.reviewEngine.renderReviewList();
    } else if (tabId === 'roadmap' && window.progressTracker) {
      window.progressTracker.renderAll();
    } else if (tabId === 'dashboard') {
      this.updateHeaderStats();
      this.renderRecentHistory();
    }

    this.initLucideIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  initCountdown() {
    const countdownPill = document.getElementById('headerCountdownText');
    const now = new Date();
    let targetYear = now.getFullYear();
    if (now.getMonth() > 5 || (now.getMonth() === 5 && now.getDate() >= 6)) {
      targetYear++;
    }
    const examTargetDate = new Date(`${targetYear}-06-06T07:30:00+07:00`).getTime();

    const updateTimer = () => {
      const current = new Date().getTime();
      const diff = examTargetDate - current;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        if (countdownPill) {
          countdownPill.textContent = `Còn ${days} ngày thi vào 10`;
        }
      } else {
        if (countdownPill) {
          countdownPill.textContent = `Kỳ thi đang diễn ra!`;
        }
      }
    };

    updateTimer();
    setInterval(updateTimer, 60000);
  }

  updateHeaderStats() {
    const profile = window.storageManager.getProfile();
    const history = window.storageManager.getExamHistory();
    const mistakes = window.storageManager.getMistakes();

    const streakVal = document.getElementById('headerStreakVal');
    const targetSchoolVal = document.getElementById('headerTargetSchoolVal');
    const mistakeBadgeCount = document.getElementById('navMistakeBadgeCount');
    const mobileMistakeBadge = document.getElementById('mobileMistakeBadge');

    const streak = typeof profile.streakDays === 'number' ? profile.streakDays : 0;
    if (streakVal) streakVal.textContent = `${streak} ngày`;
    if (targetSchoolVal) targetSchoolVal.textContent = profile.targetSchool || "THPT Nguyễn Thượng Hiền (TP.HCM)";
    if (mistakeBadgeCount) mistakeBadgeCount.textContent = mistakes.length;
    if (mobileMistakeBadge) mobileMistakeBadge.textContent = mistakes.length;

    // Dashboard quick stats
    const dashAvg = document.getElementById('dashAverageScore');
    const dashTotalExams = document.getElementById('dashTotalExams');
    const dashAccuracy = document.getElementById('dashAccuracyRate');
    const dashMistakes = document.getElementById('dashMistakesCount');

    if (dashTotalExams) dashTotalExams.textContent = history.length;
    if (dashMistakes) dashMistakes.textContent = mistakes.length;

    if (history.length > 0) {
      const sum = history.reduce((a, b) => a + b.score, 0);
      const avg = Math.round((sum / history.length) * 10) / 10;
      if (dashAvg) dashAvg.textContent = `${avg.toFixed(1)}/10`;

      const totalQ = history.reduce((a, b) => a + (b.totalQuestions || 10), 0);
      const totalC = history.reduce((a, b) => a + (b.correctCount || 0), 0);
      const acc = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;
      if (dashAccuracy) dashAccuracy.textContent = `${acc}%`;
    } else {
      if (dashAvg) dashAvg.textContent = "0.0/10";
      if (dashAccuracy) dashAccuracy.textContent = "0%";
    }
  }

  renderExamCatalog() {
    const catalogContainer = document.getElementById('examCatalogGrid');
    if (!catalogContainer) return;

    catalogContainer.innerHTML = '';

    // Collect all available exams from all 3 subjects
    const englishExams = window.ENGLISH_EXAMS || [];
    const mathExams = window.MATH_EXAMS || [];
    const literatureExams = window.LITERATURE_EXAMS || [];

    const allExams = [
      ...englishExams,
      ...mathExams,
      ...literatureExams
    ];

    // Sort order:
    // 1. Year descending: 2024 -> 2023 -> 2022
    // 2. Location: TP.HCM first, then Hà Nội, then others
    // 3. Subject: English first, then Math, then Literature
    allExams.sort((a, b) => {
      const yA = a.year || 2020;
      const yB = b.year || 2020;
      if (yA !== yB) return yB - yA;

      const locScore = (loc) => loc === 'TP.HCM' ? 1 : loc === 'Hà Nội' ? 2 : 3;
      const lA = locScore(a.location);
      const lB = locScore(b.location);
      if (lA !== lB) return lA - lB;

      const subScore = (sub) => sub === 'english' ? 1 : sub === 'math' ? 2 : 3;
      return subScore(a.subject) - subScore(b.subject);
    });

    // Create cards for all exams
    allExams.forEach(exam => {
      const card = document.createElement('div');
      const isHcmc = exam.location === 'TP.HCM' || exam.id.includes('hcmc');
      card.className = `subject-card ${isHcmc ? 'hcmc-featured-card' : ''}`;
      card.dataset.examId = exam.id;
      card.dataset.subject = exam.subject;
      card.dataset.year = String(exam.year || '2023');
      card.dataset.location = exam.location || 'Toàn quốc';

      if (isHcmc) {
        card.style.border = '2px solid rgba(245, 158, 11, 0.6)';
        card.style.boxShadow = '0 8px 24px rgba(245, 158, 11, 0.12)';
      }

      const subLabel = exam.subject === 'math' ? 'Toán Học' : exam.subject === 'english' ? 'Tiếng Anh' : 'Ngữ Văn';

      // Year badge
      let yearClass = 'year-2023';
      if (exam.year === 2025) yearClass = 'year-2025';
      else if (exam.year === 2024) yearClass = 'year-2024';
      else if (exam.year === 2022) yearClass = 'year-2022';
      const yearBadge = exam.year ? `<span class="exam-tag-badge ${yearClass}">Năm ${exam.year}</span>` : '';

      // Location badge
      let locClass = 'loc-national';
      if (exam.location === 'TP.HCM') locClass = 'loc-hcmc';
      else if (exam.location === 'Hà Nội') locClass = 'loc-hanoi';
      else if (exam.location === 'Bộ GD&ĐT') locClass = 'loc-moet';
      const locBadge = `<span class="exam-tag-badge ${locClass}"><i data-lucide="map-pin" style="width: 11px; height: 11px;"></i> ${exam.location || 'Toàn quốc'}</span>`;

      // Official or special badge
      const badgeContent = exam.badgeText || (exam.isOfficial ? '⭐ Đề Chính Thức' : '');
      const officialBadge = badgeContent ? `
        <span class="exam-tag-badge year-2024" style="background: linear-gradient(135deg, #f59e0b, #ef4444); color: #fff;">
          ${badgeContent}
        </span>
      ` : '';

      card.innerHTML = `
        <div class="subject-card-top" style="flex-wrap: wrap; gap: 0.35rem;">
          <div style="display: flex; align-items: center; gap: 0.35rem; flex-wrap: wrap;">
            <span class="subject-badge ${exam.subject}">${subLabel}</span>
            ${yearBadge}
            ${locBadge}
            ${officialBadge}
          </div>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); font-family: var(--font-mono); margin-left: auto;">
            <i data-lucide="clock" style="width: 14px; height: 14px; vertical-align: middle;"></i> ${exam.durationMinutes} phút
          </span>
        </div>
        <h3 class="subject-title">${exam.title}</h3>
        <p class="subject-desc">${exam.description}</p>
        <div class="subject-meta">
          <div class="subject-meta-item">
            <i data-lucide="help-circle" style="width: 14px; height: 14px;"></i> ${exam.questions.length} câu hỏi chuẩn hóa
          </div>
          <div class="subject-meta-item">
            <i data-lucide="award" style="width: 14px; height: 14px;"></i> Thang điểm 10.0
          </div>
        </div>
        <div style="display: flex; gap: 0.75rem; margin-top: auto;">
          <button class="btn btn-primary" style="flex: 1;" id="btn_start_exam_${exam.id}">
            <i data-lucide="play"></i> Vào thi ngay
          </button>
          <button class="btn btn-secondary btn-sm" id="btn_practice_exam_${exam.id}" title="Luyện tập không tính giờ">
            Luyện tập
          </button>
        </div>
      `;

      // Start Real Exam
      card.querySelector(`#btn_start_exam_${exam.id}`).addEventListener('click', () => {
        window.examEngine.startExam(exam, 'exam');
      });

      // Practice Mode
      card.querySelector(`#btn_practice_exam_${exam.id}`).addEventListener('click', () => {
        window.examEngine.startExam(exam, 'practice');
      });

      catalogContainer.appendChild(card);
    });

    // Empty state element
    const emptyState = document.createElement('div');
    emptyState.className = 'exam-empty-state';
    emptyState.id = 'examCatalogEmptyState';
    emptyState.style.display = 'none';
    emptyState.innerHTML = `
      <i data-lucide="search-x"></i>
      <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.5rem;">Không tìm thấy đề thi phù hợp</h3>
      <p style="font-size: 0.88rem; max-width: 460px; margin: 0 auto 1.25rem;">
        Không có bộ đề nào thỏa mãn tất cả tiêu chí lọc hiện tại. Bạn hãy thử bỏ bớt bộ lọc hoặc xóa từ khóa tìm kiếm.
      </p>
      <button class="btn btn-secondary btn-sm" id="btnResetAllExamFilters">
        <i data-lucide="rotate-ccw"></i> Đặt lại tất cả bộ lọc
      </button>
    `;
    catalogContainer.appendChild(emptyState);

    // Multi-filtering State
    const activeFilters = {
      subject: 'all',
      year: 'all',
      location: 'all',
      search: ''
    };

    const countShown = document.getElementById('examShownCount');
    const countTotal = document.getElementById('examTotalCount');
    if (countTotal) countTotal.textContent = allExams.length;

    const applyFilters = () => {
      const cards = catalogContainer.querySelectorAll('.subject-card');
      let visibleCount = 0;
      const searchKw = activeFilters.search.toLowerCase().trim();

      cards.forEach((c, idx) => {
        const exam = allExams[idx];
        if (!exam) return;

        // Subject check
        const matchSub = activeFilters.subject === 'all' || exam.subject === activeFilters.subject;

        // Year check
        const matchYear = activeFilters.year === 'all' || String(exam.year) === activeFilters.year;

        // Location check
        let matchLoc = true;
        if (activeFilters.location !== 'all') {
          if (activeFilters.location === 'Bộ GD&ĐT') {
            matchLoc = exam.location === 'Bộ GD&ĐT';
          } else if (activeFilters.location === 'TP.HCM') {
            matchLoc = exam.location === 'TP.HCM';
          } else if (activeFilters.location === 'Hà Nội') {
            matchLoc = exam.location === 'Hà Nội';
          } else if (activeFilters.location === 'Toàn quốc') {
            matchLoc = !exam.location || exam.location === 'Toàn quốc' || exam.location === 'Chuyên Top 1';
          } else {
            matchLoc = exam.location === activeFilters.location;
          }
        }

        // Search check
        let matchSearch = true;
        if (searchKw.length > 0) {
          const searchableText = `${exam.title} ${exam.description} ${exam.location} ${exam.year} ${exam.subject} ${exam.questions.map(q => q.topic || '').join(' ')}`.toLowerCase();
          matchSearch = searchableText.includes(searchKw);
        }

        if (matchSub && matchYear && matchLoc && matchSearch) {
          c.style.display = 'flex';
          visibleCount++;
        } else {
          c.style.display = 'none';
        }
      });

      if (countShown) countShown.textContent = visibleCount;
      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    };

    // Filter Chips Event Binding
    const filterChips = document.querySelectorAll('.exam-filter-chip');
    filterChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        const fType = e.currentTarget.dataset.filterType;
        const fVal = e.currentTarget.dataset.val;

        // Deselect other chips in same group
        const groupChips = document.querySelectorAll(`.exam-filter-chip[data-filter-type="${fType}"]`);
        groupChips.forEach(c => c.classList.remove('active'));
        e.currentTarget.classList.add('active');

        activeFilters[fType] = fVal;
        applyFilters();
        window.soundManager.playClick();
      });
    });

    // Search Input Event Binding
    const searchInput = document.getElementById('examSearchInput');
    const clearSearchBtn = document.getElementById('btnClearExamSearch');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        activeFilters.search = e.target.value;
        if (clearSearchBtn) {
          clearSearchBtn.style.display = e.target.value.length > 0 ? 'block' : 'none';
        }
        applyFilters();
      });
    }

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        activeFilters.search = '';
        clearSearchBtn.style.display = 'none';
        applyFilters();
      });
    }

    // Reset All Filters Button
    const btnReset = document.getElementById('btnResetAllExamFilters');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        activeFilters.subject = 'all';
        activeFilters.year = 'all';
        activeFilters.location = 'all';
        activeFilters.search = '';
        if (searchInput) searchInput.value = '';
        if (clearSearchBtn) clearSearchBtn.style.display = 'none';

        filterChips.forEach(c => {
          if (c.dataset.val === 'all') c.classList.add('active');
          else c.classList.remove('active');
        });

        applyFilters();
        window.soundManager.playClick();
      });
    }

    // Initial filter run
    applyFilters();
    this.initLucideIcons();
  }

  renderRecentHistory() {
    const list = document.getElementById('recentExamHistoryList');
    if (!list) return;

    const history = window.storageManager.getExamHistory();
    list.innerHTML = '';

    if (history.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.9rem;">
          Bạn chưa làm bài thi nào. Hãy nhấn <strong>"Vào thi ngay"</strong> để bắt đầu thử sức!
        </div>
      `;
      return;
    }

    history.slice(0, 4).forEach(h => {
      const item = document.createElement('div');
      item.className = 'stat-card';
      item.style.marginBottom = '0.75rem';
      item.style.padding = '1rem 1.25rem';

      const dateStr = new Date(h.timestamp).toLocaleDateString('vi-VN');
      const scoreColor = h.score >= 8.5 ? 'var(--success)' : h.score >= 6.5 ? 'var(--primary)' : 'var(--danger)';

      item.innerHTML = `
        <div class="stat-icon ${h.subject === 'math' ? 'indigo' : h.subject === 'english' ? 'cyan' : 'rose'}" style="width: 44px; height: 44px;">
          <i data-lucide="${h.subject === 'math' ? 'calculator' : h.subject === 'english' ? 'languages' : 'book'}"></i>
        </div>
        <div class="stat-content" style="flex: 1;">
          <div style="font-weight: 700; font-size: 0.95rem;">${h.title}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted);">Hoàn thành ngày ${dateStr} • ${h.correctCount}/${h.totalQuestions} câu đúng</div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 1.4rem; font-weight: 900; font-family: var(--font-mono); color: ${scoreColor};">${h.score.toFixed(1)}</div>
          <div style="font-size: 0.7rem; color: var(--text-dim);">Điểm số</div>
        </div>
      `;

      list.appendChild(item);
    });

    this.initLucideIcons();
  }

  initLucideIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }
}

// Bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new EduPassApp();
});
