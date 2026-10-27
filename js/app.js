// =========================================================
// KaTeX Math Formula Safe Renderer with Automatic Polling
// =========================================================
window.renderMathSafely = function(container = document.body) {
  if (!container) return;
  const doRender = () => {
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(container, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\[", right: "\\]", display: true },
            { left: "\\(", right: "\\)", display: false }
          ],
          throwOnError: false,
          ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option']
        });
      } catch (err) {
        console.warn('KaTeX render warning:', err);
      }
    }
  };

  if (window.renderMathInElement) {
    doRender();
  } else {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (window.renderMathInElement) {
        clearInterval(interval);
        doRender();
      } else if (count > 30) {
        clearInterval(interval);
      }
    }, 120);
  }
};

window.addEventListener('load', () => {
  if (window.renderMathSafely) {
    window.renderMathSafely(document.body);
  }
});

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
    this.renderRecentHistory();
    this.initLucideIcons();
    this.initHashRouter();

    if (window.adminController) {
      window.adminController.init();
    }

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

    // Target pill click (Guarded for privacy)
    const targetPill = document.getElementById('headerTargetPill');
    if (targetPill) {
      targetPill.addEventListener('click', () => {
        const isAuth = window.userManager && window.userManager.isAuthenticated();
        if (!isAuth) {
          if (window.adminController) window.adminController.openLoginModal('student');
          this.showToast('Vui lòng đăng nhập tài khoản Học sinh để xem và quản lý trường mục tiêu!');
          return;
        }
        this.switchTab('roadmap');
      });
    }


    // Reset data modal controls
    const resetBtn = document.getElementById('btnResetData');
    const footerResetBtn = document.getElementById('btnFooterResetData');
    const resetModal = document.getElementById('resetConfirmModal');
    const cancelResetBtn = document.getElementById('btnCancelResetData');
    const confirmResetBtn = document.getElementById('btnConfirmResetData');

    const openResetModal = () => {
      if (resetModal) resetModal.classList.add('active');
      window.soundManager.playClick();
      this.initLucideIcons();
    };

    if (resetBtn) resetBtn.addEventListener('click', openResetModal);
    if (footerResetBtn) footerResetBtn.addEventListener('click', openResetModal);

    if (cancelResetBtn) {
      cancelResetBtn.addEventListener('click', () => {
        if (resetModal) resetModal.classList.remove('active');
        window.soundManager.playClick();
      });
    }

    if (confirmResetBtn) {
      confirmResetBtn.addEventListener('click', () => {
        window.storageManager.resetAllData();
        if (window.examEngine) {
          window.examEngine.resetResults();
        }
        this.updateHeaderStats();
        this.renderRecentHistory();
        if (window.progressTracker) {
          window.progressTracker.renderAll();
        }
        if (window.reviewEngine) {
          window.reviewEngine.setReviewData([], "Chưa có bài thi nào");
          window.reviewEngine.renderMistakeNotebook();
        }
        if (window.flashcardTrainer) {
          window.flashcardTrainer.init();
        }
        if (resetModal) resetModal.classList.remove('active');
        this.initLucideIcons();
        window.soundManager.playSuccess();
        this.showToast("Đã xóa sạch toàn bộ dữ liệu, cookies và đưa về mốc 0 thành công!");
      });
    }
  }

  switchTab(tabId) {
    this.activeTab = tabId;

    // Update nav tab highlights (both desktop top bar and mobile bottom bar)
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      const isActive = btn.dataset.tab === tabId;
      btn.classList.toggle('active', isActive);
      if (isActive) {
        try {
          btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } catch (e) {}
      }
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
      if (window.progressTracker) {
        try { window.progressTracker.renderDashboardPreview(); } catch (e) { console.error(e); }
      }
    } else if (tabId === 'results' && window.examEngine) {
      if (window.storageManager.getExamHistory().length === 0) {
        window.examEngine.resetResults();
      }
    } else if (tabId === 'admin-portal') {
      if (window.userManager && !window.userManager.isAdmin()) {
        if (!window.userManager.isAuthenticated()) {
          this.showToast('Vui lòng đăng nhập tài khoản Quản trị viên (Admin) để truy cập!');
          if (window.adminController) window.adminController.openLoginModal('admin');
        } else {
          this.showToast('Từ chối truy cập: Tài khoản Học sinh không có quyền quản trị lớp!');
        }
        this.switchTab('dashboard');
        return;
      }
      if (window.adminController) window.adminController.renderAdminPortal();
    } else if (tabId === 'student-portal' && window.adminController) {
      window.adminController.renderStudentPortal();
    }

    // Trigger KaTeX math rendering for the newly opened tab
    setTimeout(() => {
      if (targetPane && window.renderMathSafely) {
        window.renderMathSafely(targetPane);
      }
    }, 60);

    this.initLucideIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  initHashRouter() {
    const handleHash = () => {
      const hash = (window.location.hash || '').replace('#', '').trim().toLowerCase();
      if (!hash) return;

      if (hash === 'admin' || hash === 'admin-portal') {
        if (window.userManager && window.userManager.isAdmin()) {
          this.switchTab('admin-portal');
        } else {
          this.showToast('Đường dẫn riêng cho Admin: Vui lòng đăng nhập tài khoản Giáo viên!');
          if (window.adminController) {
            window.adminController.openLoginModal('admin');
          }
        }
      } else if (hash === 'student-portal') {
        this.switchTab('student-portal');
      } else if (document.getElementById(`tabPane_${hash}`)) {
        this.switchTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHash);
    // Delayed check on initial load to allow session restore
    setTimeout(handleHash, 250);
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
    const isAuth = window.userManager && typeof window.userManager.isAuthenticated === 'function' && window.userManager.isAuthenticated();
    const isStudent = isAuth && typeof window.userManager.isStudent === 'function' && window.userManager.isStudent();
    const profile = window.storageManager.getProfile();
    const history = window.storageManager.getExamHistory();
    const mistakes = window.storageManager.getMistakes();

    const streakVal = document.getElementById('headerStreakVal');
    const targetPill = document.getElementById('headerTargetPill');
    const targetSchoolVal = document.getElementById('headerTargetSchoolVal');
    const mistakeBadgeCount = document.getElementById('navMistakeBadgeCount');
    const mobileMistakeBadge = document.getElementById('mobileMistakeBadge');

    const streak = typeof profile.streakDays === 'number' ? profile.streakDays : 0;
    if (streakVal) streakVal.textContent = `${streak} ngày`;

    // PRIVACY POLICY: Never show personal target school for unauthenticated guests!
    if (targetPill) {
      if (isStudent && profile.targetSchool) {
        targetPill.style.display = 'inline-flex';
        if (targetSchoolVal) targetSchoolVal.textContent = profile.targetSchool;
      } else {
        targetPill.style.display = 'none';
        if (targetSchoolVal) targetSchoolVal.textContent = '';
      }
    }

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
    // 1. Comprehensive exams first, then single-topic drill exams
    // 2. Year descending: 2025 -> 2024 -> 2023 -> 2022
    // 3. Location: TP.HCM first, then Hà Nội, then others
    // 4. Subject: English first, then Math, then Literature
    allExams.sort((a, b) => {
      const typeScore = (ex) => ex.isSingleTopic ? 2 : 1;
      const tA = typeScore(a);
      const tB = typeScore(b);
      if (tA !== tB) return tA - tB;

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
      const isTopic = !!exam.isSingleTopic;
      card.className = `subject-card ${isHcmc ? 'hcmc-featured-card' : ''} ${isTopic ? 'topic-featured-card' : ''}`;
      card.dataset.examId = exam.id;
      card.dataset.subject = exam.subject;
      card.dataset.year = String(exam.year || '2023');
      card.dataset.location = exam.location || 'Toàn quốc';
      card.dataset.examType = isTopic ? 'single_topic' : 'comprehensive';

      if (isTopic) {
        card.style.border = '2px solid rgba(99, 102, 241, 0.45)';
        card.style.background = 'radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.08), transparent 70%), var(--bg-card)';
        card.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.12)';
      } else if (isHcmc) {
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

      // Location / Category badge
      let locBadge = '';
      if (isTopic) {
        locBadge = `<span class="exam-tag-badge" style="background: linear-gradient(135deg, #0ea5e9, #6366f1); color: #fff; font-weight: 700;"><i data-lucide="target" style="width: 11px; height: 11px;"></i> Luyện 1 Dạng Câu</span>`;
      } else {
        let locClass = 'loc-national';
        if (exam.location === 'TP.HCM') locClass = 'loc-hcmc';
        else if (exam.location === 'Hà Nội') locClass = 'loc-hanoi';
        else if (exam.location === 'Bộ GD&ĐT') locClass = 'loc-moet';
        locBadge = `<span class="exam-tag-badge ${locClass}"><i data-lucide="map-pin" style="width: 11px; height: 11px;"></i> ${exam.location || 'Toàn quốc'}</span>`;
      }

      // Official or special badge
      const badgeContent = exam.badgeText || (exam.isOfficial ? '⭐ Đề Chính Thức' : '');
      const officialBadge = badgeContent ? `
        <span class="exam-tag-badge year-2024" style="background: ${isTopic ? 'linear-gradient(135deg, #6366f1, #a855f7)' : 'linear-gradient(135deg, #f59e0b, #ef4444)'}; color: #fff;">
          ${badgeContent}
        </span>
      ` : '';

      card.innerHTML = `
        <div class="subject-card-top" style="flex-wrap: wrap; gap: 0.35rem;">
          <div style="display: flex; align-items: center; gap: 0.35rem; flex-wrap: wrap;">
            <span class="subject-badge ${exam.subject}">${subLabel}</span>
            ${locBadge}
            ${yearBadge}
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
            <i data-lucide="help-circle" style="width: 14px; height: 14px;"></i> ${exam.questions.length} câu hỏi ${isTopic ? 'thuần dạng này' : 'chuẩn hóa'}
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
      examType: 'all',
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

        // Exam Type check (Single topic vs Comprehensive)
        let matchExamType = true;
        if (activeFilters.examType === 'single_topic') {
          matchExamType = exam.isSingleTopic === true;
        } else if (activeFilters.examType === 'comprehensive') {
          matchExamType = !exam.isSingleTopic;
        }

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
            matchLoc = !exam.location || exam.location === 'Toàn quốc' || exam.location === 'Chuyên Top 1' || exam.location === 'Chuyên đề';
          } else {
            matchLoc = exam.location === activeFilters.location;
          }
        }

        // Search check
        let matchSearch = true;
        if (searchKw.length > 0) {
          const searchableText = `${exam.title} ${exam.description} ${exam.location} ${exam.year} ${exam.subject} ${exam.badgeText || ''} ${exam.questions.map(q => q.topic || '').join(' ')}`.toLowerCase();
          matchSearch = searchableText.includes(searchKw);
        }

        if (matchSub && matchExamType && matchYear && matchLoc && matchSearch) {
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
        activeFilters.examType = 'all';
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

  showToast(message, type = 'success') {
    const existing = document.querySelector('.edupass-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'edupass-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 85px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99999;
      background: rgba(17, 24, 39, 0.95);
      border: 1.5px solid ${type === 'success' ? 'var(--success)' : 'var(--danger)'};
      color: #fff;
      padding: 12px 24px;
      border-radius: 999px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      font-size: 0.92rem;
      backdrop-filter: blur(12px);
      transition: all 0.3s ease;
    `;
    const icon = type === 'success' ? 'check-circle' : 'alert-circle';
    toast.innerHTML = `<i data-lucide="${icon}" style="color: ${type === 'success' ? 'var(--success)' : 'var(--danger)'}; width: 18px; height: 18px;"></i> <span>${message}</span>`;
    document.body.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(10px)';
      setTimeout(() => toast.remove(), 400);
    }, 3200);
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
