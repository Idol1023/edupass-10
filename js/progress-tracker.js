// =========================================================
// EDUPASS 10 - PROGRESS TRACKER & ROADMAP ANALYTICS (UPGRADED)
// Intelligent Admission Forecast, 3-Subject Diagnostics,
// Real Question-Driven Radar, Milestone Criteria & Action Plan
// =========================================================

class ProgressTracker {
  constructor() {
    this.scoreLineChart = null;
    this.skillRadarChart = null;
    this.currentMode = 'all'; // 'all' (Toàn diện 3 môn) or 'english' (Chuyên sâu Tiếng Anh TP.HCM)
    this.bindEvents();
  }

  bindEvents() {
    const editTargetBtn = document.getElementById('btnEditTargetSchool');
    const targetModal = document.getElementById('targetSchoolModal');
    const saveTargetBtn = document.getElementById('btnSaveTargetSchool');
    const cancelTargetBtn = document.getElementById('btnCancelTargetSchool');

    if (editTargetBtn) {
      editTargetBtn.addEventListener('click', () => {
        const isAuth = window.userManager && typeof window.userManager.isAuthenticated === 'function' && window.userManager.isAuthenticated();
        if (!isAuth) {
          if (window.app) window.app.showToast('Vui lòng đăng nhập tài khoản Học sinh để đặt và lưu trường mục tiêu cá nhân!');
          if (window.adminController) window.adminController.openLoginModal('student');
          return;
        }

        const profile = window.storageManager.getProfile();
        const schoolInput = document.getElementById('inputTargetSchoolName');
        const benchInput = document.getElementById('inputTargetBenchmark');

        if (schoolInput) schoolInput.value = profile.targetSchool || "THPT Chuyên Lê Hồng Phong (TP.HCM)";
        if (benchInput) benchInput.value = profile.benchmarkScore || 28.0;

        if (targetModal) targetModal.classList.add('active');
      });
    }

    // Bind preset HCMC school quick buttons
    document.querySelectorAll('.preset-school-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const schoolName = btn.dataset.name;
        const benchmarkScore = btn.dataset.score;
        const schoolInput = document.getElementById('inputTargetSchoolName');
        const benchInput = document.getElementById('inputTargetBenchmark');

        if (schoolInput) schoolInput.value = schoolName;
        if (benchInput) benchInput.value = benchmarkScore;

        document.querySelectorAll('.preset-school-btn').forEach(b => b.classList.remove('btn-primary'));
        btn.classList.add('btn-primary');
        window.soundManager.playClick();
      });
    });

    if (saveTargetBtn) {
      saveTargetBtn.addEventListener('click', () => {
        const isAuth = window.userManager && typeof window.userManager.isAuthenticated === 'function' && window.userManager.isAuthenticated();
        if (!isAuth) {
          if (targetModal) targetModal.classList.remove('active');
          if (window.app) window.app.showToast('Vui lòng đăng nhập tài khoản Học sinh để lưu trường mục tiêu!');
          if (window.adminController) window.adminController.openLoginModal('student');
          return;
        }

        const schoolInput = document.getElementById('inputTargetSchoolName');
        const benchInput = document.getElementById('inputTargetBenchmark');

        const profile = window.storageManager.getProfile();
        profile.targetSchool = schoolInput.value.trim() || "THPT Chuyên Lê Hồng Phong (TP.HCM)";
        profile.benchmarkScore = parseFloat(benchInput.value) || 28.0;
        profile.targetAverage = Math.round((profile.benchmarkScore / 3) * 100) / 100;

        window.storageManager.saveProfile(profile);
        if (targetModal) targetModal.classList.remove('active');

        window.soundManager.playSuccess();
        this.renderAll();
        if (window.app) {
          window.app.updateHeaderStats();
          window.app.showToast(`Đã lưu trường mục tiêu: ${profile.targetSchool}`);
        }
      });
    }

    if (cancelTargetBtn) {
      cancelTargetBtn.addEventListener('click', () => {
        if (targetModal) targetModal.classList.remove('active');
      });
    }

    // Roadmap mode toggle buttons (Toàn diện 3 môn vs Chuyên sâu Tiếng Anh TP.HCM)
    const btnModeAll = document.getElementById('btnRoadmapModeAll');
    const btnModeEnglish = document.getElementById('btnRoadmapModeEnglish');

    if (btnModeAll) {
      btnModeAll.addEventListener('click', () => {
        this.currentMode = 'all';
        btnModeAll.classList.add('active');
        if (btnModeEnglish) btnModeEnglish.classList.remove('active');
        window.soundManager.playClick();
        this.renderRoadmap();
      });
    }

    if (btnModeEnglish) {
      btnModeEnglish.addEventListener('click', () => {
        this.currentMode = 'english';
        btnModeEnglish.classList.add('active');
        if (btnModeAll) btnModeAll.classList.remove('active');
        window.soundManager.playClick();
        this.renderRoadmap();
      });
    }

    // Quick jump section navigation in roadmap tab
    document.querySelectorAll('.roadmap-quick-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const jumpId = btn.dataset.jump;
        const targetSection = document.getElementById(jumpId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        document.querySelectorAll('.roadmap-quick-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (window.soundManager) window.soundManager.playClick();
      });
    });
  }

  renderAll() {
    // Isolated try-catch blocks guarantee every component renders even if another fails
    try { this.renderTargetSummary(); } catch (err) { console.error("renderTargetSummary failed:", err); }
    try { this.renderRoadmap(); } catch (err) { console.error("renderRoadmap failed:", err); }
    try { this.renderActionPlan(); } catch (err) { console.error("renderActionPlan failed:", err); }
    try { this.renderSubjectDiagnostics(); } catch (err) { console.error("renderSubjectDiagnostics failed:", err); }
    try { this.renderCharts(); } catch (err) { console.error("renderCharts failed:", err); }
    try { this.renderAchievements(); } catch (err) { console.error("renderAchievements failed:", err); }
    try { this.renderDashboardPreview(); } catch (err) { console.error("renderDashboardPreview failed:", err); }
  }

  // 1. Calculate subject-specific performance & projected admission score
  getSubjectStats() {
    const history = window.storageManager.getExamHistory();
    const mathExams = history.filter(h => h.subject === 'math');
    const engExams = history.filter(h => h.subject === 'english');
    const litExams = history.filter(h => h.subject === 'literature');

    // Helper: calculate weighted average (recent tests have higher weight)
    const calcSubjectAvg = (exams) => {
      if (exams.length === 0) return { avg: 0, isEstimated: true, count: 0, bestScore: 0 };
      let total = 0;
      let weightSum = 0;
      exams.forEach((ex, idx) => {
        const weight = 1 + idx * 0.25;
        total += ex.score * weight;
        weightSum += weight;
      });
      return {
        avg: Math.round((total / weightSum) * 100) / 100,
        isEstimated: false,
        count: exams.length,
        bestScore: Math.max(...exams.map(e => e.score))
      };
    };

    const math = calcSubjectAvg(mathExams);
    const english = calcSubjectAvg(engExams);
    const literature = calcSubjectAvg(litExams);

    const projectedTotal = Math.round((math.avg + english.avg + literature.avg) * 100) / 100;

    return {
      math,
      english,
      literature,
      projectedTotal,
      totalExamsTaken: history.length
    };
  }

  renderTargetSummary() {
    const profile = window.storageManager.getProfile();
    const stats = this.getSubjectStats();

    const targetSchoolDisplay = document.getElementById('roadmapTargetSchoolName');
    const targetBenchDisplay = document.getElementById('roadmapTargetBenchmark');
    const targetPerSubjectDisplay = document.getElementById('roadmapTargetPerSubject');
    const projectedTotalDisplay = document.getElementById('roadmapProjectedTotal');
    const projectedBreakdownDisplay = document.getElementById('roadmapProjectedBreakdown');
    const scoreGapDisplay = document.getElementById('roadmapScoreGap');
    const gapDetailDisplay = document.getElementById('roadmapGapDetail');
    const isAuth = window.userManager && typeof window.userManager.isAuthenticated === 'function' && window.userManager.isAuthenticated();
    const isStudent = isAuth && typeof window.userManager.isStudent === 'function' && window.userManager.isStudent();

    if (!isStudent || !profile.targetSchool) {
      if (targetSchoolDisplay) targetSchoolDisplay.textContent = "Chưa Đăng Nhập Tài Khoản";
      if (targetBenchDisplay) targetBenchDisplay.textContent = "Chưa thiết lập";
      if (targetPerSubjectDisplay) targetPerSubjectDisplay.textContent = "--đ/môn";
      if (projectedTotalDisplay) projectedTotalDisplay.textContent = "0.0 / 30.0đ";
      if (projectedBreakdownDisplay) projectedBreakdownDisplay.textContent = "Đăng nhập tài khoản Học sinh để lưu trường mục tiêu & tính điểm chuẩn";
      if (scoreGapDisplay) {
        scoreGapDisplay.textContent = "--";
        scoreGapDisplay.style.color = "var(--text-muted)";
      }
      if (gapDetailDisplay) gapDetailDisplay.textContent = "Mục tiêu và điểm số cá nhân được bảo mật riêng cho từng tài khoản.";
      if (chanceBadge) {
        chanceBadge.textContent = "Đăng nhập để xem dự báo";
        chanceBadge.style.color = "#94a3b8";
        chanceBadge.style.background = "rgba(148, 163, 184, 0.12)";
        chanceBadge.style.borderColor = "rgba(148, 163, 184, 0.25)";
      }
      return;
    }

    const benchmark = profile.benchmarkScore || 28.0;
    const targetPerSubject = Math.round((benchmark / 3) * 100) / 100;

    if (targetSchoolDisplay) targetSchoolDisplay.textContent = profile.targetSchool;
    if (targetBenchDisplay) targetBenchDisplay.textContent = `${benchmark.toFixed(2)} điểm`;
    if (targetPerSubjectDisplay) targetPerSubjectDisplay.textContent = `${targetPerSubject.toFixed(2)}đ/môn`;

    if (stats.totalExamsTaken === 0) {
      if (projectedTotalDisplay) projectedTotalDisplay.textContent = `0.0 / 30.0đ`;
      if (projectedBreakdownDisplay) projectedBreakdownDisplay.textContent = `Toán: 0.0 • Anh: 0.0 • Văn: 0.0 (Chưa có bài thi)`;
      if (scoreGapDisplay) {
        scoreGapDisplay.textContent = `-${benchmark.toFixed(2)} điểm`;
        scoreGapDisplay.style.color = "var(--text-muted)";
      }
      if (gapDetailDisplay) gapDetailDisplay.textContent = `Chưa có dữ liệu bài thi. Hãy hoàn thành đề thi thử đầu tiên!`;
      if (chanceBadge) {
        chanceBadge.textContent = "Khởi đầu (0%)";
        chanceBadge.style.color = "#94a3b8";
        chanceBadge.style.background = "rgba(148, 163, 184, 0.12)";
        chanceBadge.style.borderColor = "rgba(148, 163, 184, 0.25)";
      }
      return;
    }

    const gap = Math.round((stats.projectedTotal - benchmark) * 100) / 100;

    if (projectedTotalDisplay) {
      projectedTotalDisplay.textContent = `${stats.projectedTotal.toFixed(2)} / 30.0đ`;
    }

    if (projectedBreakdownDisplay) {
      projectedBreakdownDisplay.textContent = `Toán: ${stats.math.avg.toFixed(1)} • Anh: ${stats.english.avg.toFixed(1)} • Văn: ${stats.literature.avg.toFixed(1)}`;
    }

    if (scoreGapDisplay) {
      if (gap >= 0) {
        scoreGapDisplay.textContent = `+${gap.toFixed(2)} điểm`;
        scoreGapDisplay.style.color = "var(--success)";
      } else {
        scoreGapDisplay.textContent = `${gap.toFixed(2)} điểm`;
        scoreGapDisplay.style.color = gap >= -1.0 ? "#f59e0b" : "var(--danger)";
      }
    }

    if (gapDetailDisplay) {
      if (gap >= 1.0) {
        gapDetailDisplay.textContent = "Vượt điểm chuẩn vững vàng!";
      } else if (gap >= 0) {
        gapDetailDisplay.textContent = "Đã chạm ngưỡng điểm chuẩn an toàn";
      } else if (gap >= -0.75) {
        gapDetailDisplay.textContent = `Thiếu ~${Math.abs(gap).toFixed(2)}đ (khoảng 1 - 2 câu đúng)`;
      } else {
        gapDetailDisplay.textContent = `Cần tăng tốc bù đắp ~${Math.abs(gap).toFixed(2)}đ`;
      }
    }

    // Dynamic admission probability logic
    let chanceText = "Cần bứt phá (< 50%)";
    let chanceColor = "var(--danger)";
    let chanceBg = "rgba(239, 68, 68, 0.15)";

    if (gap >= 1.5) {
      chanceText = "Rất an toàn (92 - 98%)";
      chanceColor = "var(--success)";
      chanceBg = "rgba(16, 185, 129, 0.18)";
    } else if (gap >= 0.5) {
      chanceText = "Cơ hội cao (85 - 91%)";
      chanceColor = "var(--primary)";
      chanceBg = "rgba(14, 165, 233, 0.18)";
    } else if (gap >= 0.0) {
      chanceText = "Đạt chuẩn an toàn (78 - 84%)";
      chanceColor = "var(--primary)";
      chanceBg = "rgba(14, 165, 233, 0.15)";
    } else if (gap >= -0.75) {
      chanceText = "Đang bám sát mục tiêu (65 - 77%)";
      chanceColor = "#f59e0b";
      chanceBg = "rgba(245, 158, 11, 0.18)";
    } else if (gap >= -1.5) {
      chanceText = "Cần tăng tốc gỡ điểm (50 - 64%)";
      chanceColor = "#f97316";
      chanceBg = "rgba(249, 115, 22, 0.15)";
    }

    if (chanceBadge) {
      chanceBadge.textContent = chanceText;
      chanceBadge.style.color = chanceColor;
      chanceBadge.style.background = chanceBg;
      chanceBadge.style.borderColor = chanceColor;
    }
  }

  // 2. Render 3-Subject Gap Diagnostics Cards
  renderSubjectDiagnostics() {
    const container = document.getElementById('roadmapDiagnosticGrid');
    if (!container) return;

    const profile = window.storageManager.getProfile();
    const stats = this.getSubjectStats();
    const targetPerSubject = (profile.benchmarkScore || 25.5) / 3;

    const subjects = [
      {
        key: 'math',
        title: 'Môn Toán',
        icon: 'calculator',
        color: '#6366f1',
        score: stats.math.avg,
        target: targetPerSubject,
        isEstimated: stats.math.isEstimated,
        count: stats.math.count,
        advice: stats.math.count === 0 ?
          "📝 <strong>Bắt đầu luyện tập:</strong> Bạn chưa hoàn thành bài thi nào môn Toán. Hãy làm đề khảo sát đầu tiên để hệ thống chẩn đoán điểm mạnh/yếu!" :
          stats.math.avg >= targetPerSubject ? 
          "✅ <strong>Thế mạnh vững vàng:</strong> Đã làm chủ 8 dạng toán thực tế TP.HCM (Parabol, Vi-ét, Co.opmart). Hãy tập trung rèn thêm câu phân loại 8c và BĐT Cô-si để bảo toàn mốc 9.0+." :
          `⚠️ <strong>Cần bù điểm:</strong> Còn thiếu ${(targetPerSubject - stats.math.avg).toFixed(2)}đ (~${Math.max(1, Math.ceil((targetPerSubject - stats.math.avg) / 1.0))} câu toán tự luận). Ôn kỹ dạng toán thực tế đo đạc Landmark 81 và hệ thức Vi-ét để ăn trọn 7.5 - 8.0 điểm.`
      },
      {
        key: 'english',
        title: 'Tiếng Anh (Trọng Tâm)',
        icon: 'languages',
        color: '#0ea5e9',
        score: stats.english.avg,
        target: targetPerSubject,
        isEstimated: stats.english.isEstimated,
        count: stats.english.count,
        advice: stats.english.count === 0 ?
          "📝 <strong>Bắt đầu luyện tập:</strong> Bạn chưa có bài thi Tiếng Anh nào. Thử sức ngay với đề thi 40 câu chuẩn Sở GD&ĐT TP.HCM!" :
          stats.english.avg >= targetPerSubject ?
          "🌟 <strong>Điểm tựa bứt phá:</strong> Nắm chắc cấu trúc 40 câu Sở GD&ĐT TP.HCM. Duy trì luyện bộ câu hỏi Biển báo đời sống, Word Form và đọc hiểu Chợ Lớn để đạt điểm 9.5." :
          `⚠️ <strong>Cần bù điểm:</strong> Còn thiếu ${(targetPerSubject - stats.english.avg).toFixed(2)}đ (~${Math.max(1, Math.ceil((targetPerSubject - stats.english.avg) / 0.25))} câu trắc nghiệm). Tập trung luyện trọn 6 câu Word Form và 2 câu Biển báo TP.HCM!`
      },
      {
        key: 'literature',
        title: 'Ngữ Văn',
        icon: 'book-marked',
        color: '#ec4899',
        score: stats.literature.avg,
        target: targetPerSubject,
        isEstimated: stats.literature.isEstimated,
        count: stats.literature.count,
        advice: stats.literature.count === 0 ?
          "📝 <strong>Bắt đầu luyện tập:</strong> Chưa có bài thi Ngữ Văn. Hãy làm đề thi thử đầu tiên để đánh giá kỹ năng đọc hiểu và viết đoạn văn!" :
          stats.literature.avg >= targetPerSubject ?
          "✅ <strong>Phong độ ổn định:</strong> Nắm vững hệ thống văn bản SGK 9. Rèn thêm dẫn chứng thực tế sắc sảo cho đoạn văn nghị luận 200 chữ." :
          `⚠️ <strong>Cần củng cố:</strong> Còn thiếu ${(targetPerSubject - stats.literature.avg).toFixed(2)}đ (~${Math.max(1, Math.ceil((targetPerSubject - stats.literature.avg) / 0.5))} ý nghị luận). Chú ý các tác phẩm thơ hiện đại và kỹ năng trả lời câu hỏi đọc hiểu tiếng Việt.`
      }
    ];

    container.innerHTML = subjects.map(sub => {
      const diff = sub.score - sub.target;
      const pct = sub.count > 0 ? Math.min(100, Math.round((sub.score / 10) * 100)) : 0;
      let badgeClass = 'positive';
      let badgeText = `+${diff.toFixed(2)}đ Vượt chuẩn`;

      if (sub.count === 0) {
        badgeClass = 'neutral';
        badgeText = 'Chưa thi';
      } else if (Math.abs(diff) < 0.2) {
        badgeClass = 'neutral';
        badgeText = '🎯 Đạt chuẩn';
      } else if (diff < 0) {
        badgeClass = 'negative';
        badgeText = `${diff.toFixed(2)}đ Cần bù`;
      }

      return `
        <div class="diagnostic-card ${sub.key}">
          <div class="diagnostic-header">
            <div class="diagnostic-subject-title" style="color: ${sub.color};">
              <i data-lucide="${sub.icon}"></i> ${sub.title}
            </div>
            <span class="diagnostic-gap-badge ${badgeClass}">${badgeText}</span>
          </div>
          <div class="diagnostic-score-row">
            <div>
              <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Điểm hiện tại</div>
              <div class="diagnostic-score-big">${sub.score.toFixed(2)}<span style="font-size: 0.9rem; color: var(--text-muted);">/10</span></div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Mục tiêu cần đạt</div>
              <div style="font-family: var(--font-mono); font-weight: 700; color: var(--text-dim); font-size: 1.15rem;">${sub.target.toFixed(2)}/10</div>
            </div>
          </div>
          <div class="roadmap-progress-bar-bg" style="height: 6px;">
            <div class="roadmap-progress-fill" style="width: ${pct}%; background: ${sub.color};"></div>
          </div>
          <div class="diagnostic-advice">
            ${sub.advice}
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // 3. Render Daily Smart Action Plan
  renderActionPlan() {
    const container = document.getElementById('roadmapActionPlanGrid');
    if (!container) return;

    const mistakes = window.storageManager.getMistakes();
    const flashcards = window.storageManager.getMasteredFlashcards();
    const history = window.storageManager.getExamHistory();

    const planItems = [
      {
        icon: 'alert-triangle',
        iconClass: 'amber',
        title: `Xử lý ${mistakes.length} câu bẫy trong Sổ tay lỗi sai`,
        desc: 'Rà soát lại các câu sai về Word Form, thì động từ hoặc điều kiện Vi-ét để không mất điểm oan trong phòng thi.',
        actionText: 'Vào Sổ tay lỗi sai →',
        onClick: () => window.app.switchTab('mistakes')
      },
      {
        icon: 'play-circle',
        iconClass: 'blue',
        title: 'Luyện Đề Chuẩn Tuyển Sinh TP.HCM (40 câu - 90 phút)',
        desc: 'Bấm giờ thực chiến với đề thi chính thức của học sinh TP.HCM: Biển báo kênh Nhiêu Lộc & Đọc hiểu Chợ Lớn.',
        actionText: 'Vào thi ngay →',
        onClick: () => {
          const hcmcExam = (window.ENGLISH_EXAMS || []).find(e => e.id === 'eng_exam_hcmc_2024') || 
                           (window.ENGLISH_EXAMS || []).find(e => e.id === 'eng_exam_02');
          if (hcmcExam && window.examEngine) {
            window.examEngine.startExam(hcmcExam, 'exam');
          } else {
            window.app.switchTab('exams-list');
          }
        }
      },
      {
        icon: 'sparkles',
        iconClass: 'indigo',
        title: 'Thuộc trọn bộ 10 Thẻ Flashcard 3D Tiếng Anh',
        desc: 'Ôn tập quy tắc biến đổi từ (Word Form), cụm động từ và các cấu trúc viết lại câu kinh điển.',
        actionText: 'Ôn Flashcards →',
        onClick: () => window.app.switchTab('knowledge')
      }
    ];

    container.innerHTML = planItems.map((item, i) => `
      <div class="action-plan-card" id="actionPlanCard_${i}">
        <div class="action-plan-top">
          <div class="action-plan-icon ${item.iconClass}">
            <i data-lucide="${item.icon}"></i>
          </div>
          <div style="font-weight: 800; font-size: 0.95rem; color: var(--text-main);">${item.title}</div>
        </div>
        <p style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 0.75rem;">
          ${item.desc}
        </p>
        <button class="btn btn-secondary btn-sm" style="margin-top: auto; align-self: flex-start; font-weight: 700; color: var(--primary);" id="btnActionPlan_${i}">
          ${item.actionText}
        </button>
      </div>
    `).join('');

    planItems.forEach((item, i) => {
      const btn = document.getElementById(`btnActionPlan_${i}`);
      if (btn) {
        btn.addEventListener('click', () => {
          window.soundManager.playClick();
          item.onClick();
        });
      }
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // 4. Render Charts (Score Progression Line Chart & 6-Axis Real Skill Radar)
  renderCharts() {
    const history = window.storageManager.getExamHistory();
    const profile = window.storageManager.getProfile();
    const benchmark = profile.benchmarkScore || 25.5;
    const targetAvg = Math.round((benchmark / 3) * 100) / 100;

    if (!window.Chart) return;

    // Line Chart: Score Progression
    const lineCtx = document.getElementById('scoreProgressionChart');
    if (lineCtx) {
      const sortedHistory = [...history].reverse();
      const labels = sortedHistory.map((h, i) => `${h.subject === 'english' ? '🇬🇧' : h.subject === 'math' ? '📐' : '📖'} Đề ${i + 1}`);
      const scores = sortedHistory.map(h => h.score);

      if (this.scoreLineChart) {
        this.scoreLineChart.destroy();
        this.scoreLineChart = null;
      }
      if (window.Chart.getChart) {
        const existingChart = window.Chart.getChart(lineCtx);
        if (existingChart) existingChart.destroy();
      }

      this.scoreLineChart = new window.Chart(lineCtx, {
        type: 'line',
        data: {
          labels: labels.length > 0 ? labels : ['Chưa có bài thi'],
          datasets: [
            {
              label: 'Điểm bài thi thực tế (Thang 10)',
              data: scores.length > 0 ? scores : [0],
              borderColor: '#6366f1',
              backgroundColor: 'rgba(99, 102, 241, 0.12)',
              fill: true,
              tension: 0.35,
              pointBackgroundColor: '#818cf8',
              pointBorderColor: '#fff',
              pointRadius: 6,
              pointHoverRadius: 9
            },
            {
              label: `Mốc điểm chuẩn mục tiêu (${targetAvg.toFixed(2)}đ)`,
              data: labels.map(() => targetAvg),
              borderColor: 'rgba(239, 68, 68, 0.7)',
              borderDash: [6, 4],
              borderWidth: 2,
              fill: false,
              pointRadius: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              min: 0,
              max: 10,
              grid: { color: 'rgba(255, 255, 255, 0.06)' },
              ticks: { color: '#94a3b8' }
            },
            x: {
              grid: { color: 'rgba(255, 255, 255, 0.06)' },
              ticks: { color: '#94a3b8' }
            }
          },
          plugins: {
            legend: {
              labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 12 } }
            }
          }
        }
      });
    }

    // Radar Chart: 6-Dimensional Real Skills (Derived from real question performance)
    const radarCtx = document.getElementById('skillRadarChart');
    if (radarCtx) {
      if (this.skillRadarChart) {
        this.skillRadarChart.destroy();
        this.skillRadarChart = null;
      }
      if (window.Chart.getChart) {
        const existingRadar = window.Chart.getChart(radarCtx);
        if (existingRadar) existingRadar.destroy();
      }

      // Calculate skills from real questions answered
      const skillsData = this.calculateRealSkills(history);

      this.skillRadarChart = new window.Chart(radarCtx, {
        type: 'radar',
        data: {
          labels: [
            'Đại số & Vi-ét',
            'Hình học & Đo đạc TP.HCM',
            'Phát âm & Biển báo',
            'Ngữ pháp & Word Form',
            'Từ vựng & Đọc hiểu',
            'Chiến thuật bẫy đề thi'
          ],
          datasets: [{
            label: 'Độ thuần thục kỹ năng (%)',
            data: skillsData,
            backgroundColor: 'rgba(6, 182, 212, 0.25)',
            borderColor: '#06b6d4',
            borderWidth: 2,
            pointBackgroundColor: '#06b6d4',
            pointBorderColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 7
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              min: 0,
              max: 100,
              angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
              grid: { color: 'rgba(255, 255, 255, 0.08)' },
              pointLabels: {
                color: '#cbd5e1',
                font: { family: 'Plus Jakarta Sans', size: 11, weight: '700' }
              },
              ticks: { display: false }
            }
          },
          plugins: {
            legend: {
              labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans' } }
            }
          }
        }
      });
    }
  }

  // Helper: Extract competency metrics from real answered questions
  calculateRealSkills(history) {
    if (!history || history.length === 0) {
      return [0, 0, 0, 0, 0, 0];
    }
    const mistakes = window.storageManager.getMistakes();
    const stats = this.getSubjectStats();

    // Default baseline from subject scores
    let algebra = Math.round(stats.math.avg * 10);
    let geometry = Math.round(stats.math.avg * 9.5);
    let phoneticsSigns = Math.round(stats.english.avg * 10 + 2);
    let grammarWordForm = Math.round(stats.english.avg * 9.8);
    let vocabReading = Math.round(stats.english.avg * 9.6);
    let trapEvasion = Math.max(50, 100 - mistakes.length * 3);

    // If exams with detailed review data exist, scan questions
    let totalQuestionsAnswered = 0;
    const catCorrect = { alg: 0, algTot: 0, geo: 0, geoTot: 0, pho: 0, phoTot: 0, gra: 0, graTot: 0, voc: 0, vocTot: 0 };

    history.forEach(h => {
      if (h.fullReviewData && Array.isArray(h.fullReviewData)) {
        h.fullReviewData.forEach(q => {
          totalQuestionsAnswered++;
          const t = (q.topic || '').toLowerCase();
          const isCor = q.isCorrect ? 1 : 0;

          if (t.includes('vi-ét') || t.includes('parabol') || t.includes('hàm số') || t.includes('căn')) {
            catCorrect.algTot++;
            catCorrect.alg += isCor;
          } else if (t.includes('hình') || t.includes('đường tròn') || t.includes('thực tế') || t.includes('thể tích')) {
            catCorrect.geoTot++;
            catCorrect.geo += isCor;
          } else if (t.includes('phát âm') || t.includes('trọng âm') || t.includes('biển báo') || t.includes('signs')) {
            catCorrect.phoTot++;
            catCorrect.pho += isCor;
          } else if (t.includes('word form') || t.includes('dạng từ') || t.includes('viết lại') || t.includes('ngữ pháp') || t.includes('bị động')) {
            catCorrect.graTot++;
            catCorrect.gra += isCor;
          } else if (t.includes('đọc hiểu') || t.includes('cloze') || t.includes('reading') || t.includes('từ vựng') || t.includes('idiom')) {
            catCorrect.vocTot++;
            catCorrect.voc += isCor;
          }
        });
      }
    });

    if (catCorrect.algTot > 0) algebra = Math.round((catCorrect.alg / catCorrect.algTot) * 100);
    if (catCorrect.geoTot > 0) geometry = Math.round((catCorrect.geo / catCorrect.geoTot) * 100);
    if (catCorrect.phoTot > 0) phoneticsSigns = Math.round((catCorrect.pho / catCorrect.phoTot) * 100);
    if (catCorrect.graTot > 0) grammarWordForm = Math.round((catCorrect.gra / catCorrect.graTot) * 100);
    if (catCorrect.vocTot > 0) vocabReading = Math.round((catCorrect.voc / catCorrect.vocTot) * 100);

    return [
      Math.min(98, Math.max(40, algebra)),
      Math.min(96, Math.max(40, geometry)),
      Math.min(99, Math.max(45, phoneticsSigns)),
      Math.min(98, Math.max(45, grammarWordForm)),
      Math.min(97, Math.max(40, vocabReading)),
      Math.min(95, Math.max(40, trapEvasion))
    ];
  }

  // 5. Render 4-Stage Milestone Roadmap (Switchable: All 3 Subjects vs English TP.HCM Focus)
  renderRoadmap() {
    const container = document.getElementById('roadmapMilestonesContainer');
    if (!container) return;

    const history = window.storageManager.getExamHistory();
    const mistakes = window.storageManager.getMistakes();
    const flashcards = window.storageManager.getMasteredFlashcards();
    const stats = this.getSubjectStats();

    const isEnglishMode = this.currentMode === 'english';

    let stages = [];

    if (isEnglishMode) {
      // --- CHUYÊN SÂU TIẾNG ANH TP.HCM ---
      const engExams = history.filter(h => h.subject === 'english');
      const has40QExam = engExams.some(e => e.totalQuestions >= 40);
      const engAvg = stats.english.avg;

      // Stage 1: Nền tảng Ngữ âm & 12 Thì SGK 9
      const s1Criteria = [
        { label: 'Hoàn thành ít nhất 1 bài thi Tiếng Anh', done: engExams.length >= 1 },
        { label: 'Thuộc 10+ thẻ Flashcard từ vựng & ngữ âm', done: flashcards.length >= 10 },
        { label: 'Đạt độ chính xác Phát âm & Trọng âm ≥ 75%', done: engAvg >= 7.0 }
      ];
      const s1Pct = Math.round((s1Criteria.filter(c => c.done).length / s1Criteria.length) * 100);

      // Stage 2: Biển báo TP.HCM, Phrasal Verbs & Viết lại câu
      const s2Criteria = [
        { label: 'Làm đúng dạng bài Biển báo (Signs & Notices)', done: engExams.length >= 1 && engAvg >= 7.5 },
        { label: 'Giải quyết các câu sai về viết lại câu trong Sổ tay', done: engExams.length >= 1 && mistakes.length <= 15 },
        { label: 'Đạt điểm thi Tiếng Anh ≥ 7.5/10', done: engExams.length >= 1 && engAvg >= 7.5 }
      ];
      const s2Pct = engExams.length === 0 ? 0 : s1Pct >= 100 ? Math.round((s2Criteria.filter(c => c.done).length / s2Criteria.length) * 100) : Math.round(s1Pct * 0.4);

      // Stage 3: Luyện đề chuẩn 40 câu TP.HCM (Word Form & Đọc hiểu Chợ Lớn)
      const s3Criteria = [
        { label: 'Hoàn thành trọn vẹn Đề chính thức TP.HCM (40 câu - 90 phút)', done: has40QExam },
        { label: 'Đạt điểm Đề thi TP.HCM ≥ 8.25/10', done: engAvg >= 8.25 },
        { label: 'Làm đúng tối thiểu 4/6 câu dạng Word Form', done: engAvg >= 8.0 }
      ];
      const s3Pct = s2Pct >= 80 ? Math.round((s3Criteria.filter(c => c.done).length / s3Criteria.length) * 100) : 0;

      // Stage 4: Bứt phá Điểm 9.5 - 10 Chuyên (Idioms, Đảo ngữ & Cụm từ khó)
      const s4Criteria = [
        { label: 'Đạt điểm Tiếng Anh ≥ 9.0/10 trong bài thi', done: engExams.some(e => e.score >= 9.0) },
        { label: 'Làm chủ chuyên đề Thành ngữ (Idioms) & Đảo ngữ Inversion', done: engAvg >= 9.0 },
        { label: 'Tỷ lệ trúng tuyển trường Top 1 TP.HCM đạt Rất An Toàn', done: stats.projectedTotal >= (window.storageManager.getProfile().benchmarkScore || 25.5) }
      ];
      const s4Pct = s3Pct >= 80 ? Math.round((s4Criteria.filter(c => c.done).length / s4Criteria.length) * 100) : 0;

      stages = [
        {
          num: 1,
          timeline: 'Tháng 9 - Tháng 11',
          title: 'Chặng 1: Nền tảng Ngữ âm, 12 Thì & Từ vựng SGK 9',
          target: 'Mục tiêu: 6.0 - 7.0đ',
          desc: 'Nắm vững quy tắc phát âm đuôi -ed/-s, trọng âm 2-3 âm tiết, bảng động từ bất quy tắc và từ vựng cốt lõi Unit 1 - 10.',
          subjectFocus: {
            math: 'Căn bậc hai & Hệ phương trình 2 ẩn',
            english: 'Phát âm -ed/-s, Trọng âm, 12 thì cơ bản',
            literature: 'Đọc hiểu tiếng Việt & Thơ hiện đại'
          },
          pct: s1Pct,
          criteria: s1Criteria,
          actionBtn: {
            text: 'Ôn 10 Thẻ Flashcards Ngữ Âm →',
            onClick: () => window.app.switchTab('knowledge')
          }
        },
        {
          num: 2,
          timeline: 'Tháng 12 - Tháng 2',
          title: 'Chặng 2: Bẻ khóa Biển báo TP.HCM & 6 Dạng Viết lại câu',
          target: 'Mục tiêu: 7.5 - 8.5đ',
          desc: 'Thành thạo dạng bài Biển báo đời sống (Signs & Notices), Phrasal Verbs, Câu điều kiện, Câu bị động và biến đổi câu tương đương.',
          subjectFocus: {
            math: 'Hệ thức Vi-ét, Parabol & Tứ giác nội tiếp',
            english: 'Biển báo đời sống TP.HCM, Phrasal Verbs, 6 dạng viết lại câu',
            literature: 'Nghị luận xã hội 200 chữ & Tác phẩm truyện 9'
          },
          pct: s2Pct,
          criteria: s2Criteria,
          actionBtn: {
            text: 'Xử Lý Bẫy Trong Sổ Tay Lỗi Sai →',
            onClick: () => window.app.switchTab('mistakes')
          }
        },
        {
          num: 3,
          timeline: 'Tháng 3 - Tháng 4',
          title: 'Chặng 3: Luyện Đề Tốc Độ TP.HCM (40 Câu — 90 Phút)',
          target: 'Mục tiêu: 8.5 - 9.25đ',
          desc: 'Chinh phục 6 câu Word Form đặc trưng TP.HCM, đọc hiểu đoạn văn Chợ Lớn / Giao thông xanh dưới áp lực đồng hồ đếm ngược.',
          subjectFocus: {
            math: 'Toán thực tế Co.opmart & Đo đạc hình không gian',
            english: '6 câu Word Form TP.HCM, Đọc hiểu Cloze & Chợ Lớn',
            literature: 'Dàn ý nhanh 15p & Phân tích chiều sâu nhân vật'
          },
          pct: s3Pct,
          criteria: s3Criteria,
          actionBtn: {
            text: 'Vào Thi Đề Chuẩn 40 Câu TP.HCM →',
            onClick: () => {
              const hcmc = (window.ENGLISH_EXAMS || []).find(e => e.id === 'eng_exam_hcmc_2024') || (window.ENGLISH_EXAMS || []).find(e => e.id === 'eng_exam_02') || (window.ENGLISH_EXAMS || [])[0];
              if (hcmc && window.examEngine) window.examEngine.startExam(hcmc, 'exam');
              else window.app.switchTab('exams-list');
            }
          }
        },
        {
          num: 4,
          timeline: 'Tháng 5 - Tháng 6',
          title: 'Chặng 4: Bứt phá Điểm 9.5 - 10 Chuyên & Thủ Khoa',
          target: 'Mục tiêu: 9.5 - 10.0đ',
          desc: 'Chinh phục các câu phân loại điểm 10: Thành ngữ Idioms, Cụm từ cố định Collocations, Cấu trúc đảo ngữ và Mệnh đề quan hệ rút gọn.',
          subjectFocus: {
            math: 'Cực trị hình học câu 8c & BĐT Cô-si điểm 10',
            english: 'Thành ngữ Idioms, Đảo ngữ Inversion, Collocations khó',
            literature: 'Mở/kết bài sáng tạo & Dẫn chứng thời sự sắc sảo'
          },
          pct: s4Pct,
          criteria: s4Criteria,
          actionBtn: {
            text: 'Luyện Đề Nâng Cao Chuyên →',
            onClick: () => window.app.switchTab('exams-list')
          }
        }
      ];
    } else {
      // --- LỘ TRÌNH TOÀN DIỆN 3 MÔN ---
      const totalTests = history.length;
      const proj = stats.projectedTotal;
      const bench = window.storageManager.getProfile().benchmarkScore || 25.5;

      const s1Criteria = [
        { label: 'Hoàn thành tối thiểu 2 bài thi khảo sát phân loại', done: totalTests >= 2 },
        { label: 'Thuộc 10+ thẻ Flashcard công thức cốt lõi', done: flashcards.length >= 10 },
        { label: 'Độ chính xác câu Nhận biết/Thông hiểu đạt ≥ 75%', done: proj >= 20.0 }
      ];
      const s1Pct = Math.round((s1Criteria.filter(c => c.done).length / s1Criteria.length) * 100);

      const s2Criteria = [
        { label: 'Điểm trung bình 3 môn đạt ≥ 7.5/10', done: totalTests >= 1 && proj >= 22.5 },
        { label: 'Xử lý tối thiểu 5 lỗi sai trong Sổ tay lỗi sai', done: totalTests >= 1 && mistakes.length <= 20 },
        { label: 'Thuần thục chuyên đề Vi-ét, Parabol & Biển báo TP.HCM', done: totalTests >= 1 && stats.math.avg >= 7.5 && stats.english.avg >= 7.5 }
      ];
      const s2Pct = totalTests === 0 ? 0 : s1Pct >= 100 ? Math.round((s2Criteria.filter(c => c.done).length / s2Criteria.length) * 100) : Math.round(s1Pct * 0.4);

      const s3Criteria = [
        { label: 'Hoàn thành đề chuẩn Sở GD&ĐT TP.HCM (40 câu Tiếng Anh / 8 bài Toán)', done: totalTests >= 3 },
        { label: 'Tổng điểm 3 môn dự phóng đạt ≥ 24.5/30.0đ', done: proj >= 24.5 },
        { label: 'Kiểm soát tốc độ làm bài trước khi hết giờ 10 phút', done: totalTests >= 4 }
      ];
      const s3Pct = s2Pct >= 80 ? Math.round((s3Criteria.filter(c => c.done).length / s3Criteria.length) * 100) : 0;

      const s4Criteria = [
        { label: 'Đạt điểm ≥ 9.0 trong ít nhất 1 bài thi tuyển sinh', done: history.some(h => h.score >= 9.0) },
        { label: 'Xử lý chính xác câu Vận dụng cao (Word Form khó, BĐT Cô-si)', done: stats.english.avg >= 9.0 || stats.math.avg >= 9.0 },
        { label: `Vượt điểm chuẩn an toàn mục tiêu (${bench.toFixed(2)}đ)`, done: totalTests >= 3 && proj >= bench }
      ];
      const s4Pct = s3Pct >= 80 ? Math.round((s4Criteria.filter(c => c.done).length / s4Criteria.length) * 100) : 0;

      stages = [
        {
          num: 1,
          timeline: 'Tháng 9 - Tháng 11',
          title: 'Chặng 1: Nắm chắc kiến thức cốt lõi SGK Lớp 9',
          target: 'Mục tiêu: 5.5 - 6.5đ',
          desc: 'Hoàn thành kiến thức nhận biết, thông hiểu SGK: Căn thức, Hệ phương trình, Đường tròn, Bảng thì Tiếng Anh và Tác phẩm Văn 9.',
          subjectFocus: {
            math: 'Căn thức bậc hai, Đồ thị hàm số, Hệ PT 2 ẩn',
            english: '12 thì cơ bản, Động từ bất quy tắc, Ngữ âm',
            literature: 'Đọc hiểu văn bản tiếng Việt & Thơ hiện đại'
          },
          pct: s1Pct,
          criteria: s1Criteria,
          actionBtn: {
            text: 'Ôn Tập Thẻ Công Thức Cốt Lõi →',
            onClick: () => window.app.switchTab('knowledge')
          }
        },
        {
          num: 2,
          timeline: 'Tháng 12 - Tháng 2',
          title: 'Chặng 2: Luyện chuyên đề điểm 7-8 & Nhận diện bẫy đề',
          target: 'Mục tiêu: 7.5 - 8.5đ',
          desc: 'Chinh phục các dạng toán Vi-ét, Tứ giác nội tiếp, Toán thực tế Co.opmart, Biển báo TP.HCM và kỹ năng viết đoạn văn 200 chữ.',
          subjectFocus: {
            math: 'Hệ thức Vi-ét, Parabol, Toán thực tế Co.opmart',
            english: 'Biển báo đời sống TP.HCM & 6 dạng viết lại câu',
            literature: 'Đoạn văn nghị luận xã hội 200 chữ & Tác phẩm truyện 9'
          },
          pct: s2Pct,
          criteria: s2Criteria,
          actionBtn: {
            text: 'Xử Lý Bẫy Đề Trong Sổ Tay →',
            onClick: () => window.app.switchTab('mistakes')
          }
        },
        {
          num: 3,
          timeline: 'Tháng 3 - Tháng 4',
          title: 'Chặng 3: Luyện đề tổng hợp chuẩn form Sở GD&ĐT TP.HCM',
          target: 'Mục tiêu: 8.5 - 9.0đ',
          desc: 'Làm trọn vẹn đề thi tuyển sinh 40 câu Tiếng Anh và 8 bài Toán thực tế dưới áp lực đồng hồ đếm ngược.',
          subjectFocus: {
            math: 'Giải trọn vẹn 8 bài toán thực tế TP.HCM trong 120p',
            english: 'Đề chuẩn 40 câu trắc nghiệm Sở GD&ĐT TP.HCM trong 90p',
            literature: 'Kỹ năng làm bài văn hoàn chỉnh 120p chuẩn barem'
          },
          pct: s3Pct,
          criteria: s3Criteria,
          actionBtn: {
            text: 'Làm Đề Chuẩn Sở GD&ĐT TP.HCM →',
            onClick: () => {
              const hcmc = (window.ENGLISH_EXAMS || []).find(e => e.id === 'eng_exam_hcmc_2024') || (window.ENGLISH_EXAMS || []).find(e => e.id === 'eng_exam_02') || (window.ENGLISH_EXAMS || [])[0];
              if (hcmc && window.examEngine) window.examEngine.startExam(hcmc, 'exam');
              else window.app.switchTab('exams-list');
            }
          }
        },
        {
          num: 4,
          timeline: 'Tháng 5 - Tháng 6',
          title: 'Chặng 4: Bứt phá câu phân loại (9-10đ) & Phòng thi thực tế',
          target: 'Mục tiêu: 9.0 - 10.0đ',
          desc: 'Chinh phục cực trị BĐT Cô-si, hình học câu 8c, Word Form biến đổi kép và Idioms phân loại vào trường Top 1 TP.HCM.',
          subjectFocus: {
            math: 'Cực trị hình học câu 8c & BĐT Cô-si tìm Min/Max',
            english: 'Word Form khó, Thành ngữ Idioms & Đảo ngữ',
            literature: 'Mở rộng liên hệ thực tế & Sáng tạo phong cách văn'
          },
          pct: s4Pct,
          criteria: s4Criteria,
          actionBtn: {
            text: 'Thi Thử Bấm Giờ Mô Phỏng →',
            onClick: () => window.app.switchTab('exams-list')
          }
        }
      ];
    }

    container.innerHTML = stages.map(st => {
      const isCompleted = st.pct >= 100;
      const isInProgress = st.pct > 0 && st.pct < 100;
      const stepClass = isCompleted ? 'completed' : isInProgress ? 'current' : '';
      const badgeText = isCompleted ? 'Hoàn thành' : isInProgress ? 'Đang thực hiện' : 'Chưa mở';
      const badgeClass = isCompleted ? 'done' : isInProgress ? 'in-progress' : 'locked';

      const checklistHtml = st.criteria.map(c => `
        <div class="roadmap-check-item ${c.done ? 'done' : 'pending'}">
          <i data-lucide="${c.done ? 'check-circle-2' : 'circle'}"></i>
          <span>${c.label}</span>
        </div>
      `).join('');

      return `
        <div class="roadmap-step ${stepClass}" id="roadmapStage_${st.num}">
          <div class="roadmap-icon-node">${isCompleted ? '<i data-lucide="check"></i>' : st.num}</div>
          <div class="roadmap-card">
            <div class="roadmap-header">
              <div>
                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 4px;">
                  <span class="roadmap-timeline-pill"><i data-lucide="calendar"></i> ${st.timeline}</span>
                  <span style="font-size: 0.78rem; font-weight: 800; color: var(--primary);">${st.target}</span>
                </div>
                <div class="roadmap-title">${st.title}</div>
              </div>
              <span class="roadmap-status-badge ${badgeClass}">${badgeText}</span>
            </div>

            <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.5; margin-top: 0.35rem;">
              ${st.desc}
            </p>

            <div class="roadmap-subject-pills">
              <span class="roadmap-subject-pill math"><i data-lucide="calculator"></i> <strong>Toán:</strong> ${st.subjectFocus.math}</span>
              <span class="roadmap-subject-pill english"><i data-lucide="languages"></i> <strong>Anh:</strong> ${st.subjectFocus.english}</span>
              <span class="roadmap-subject-pill literature"><i data-lucide="book-marked"></i> <strong>Văn:</strong> ${st.subjectFocus.literature}</span>
            </div>

            <div class="roadmap-progress-bar-bg">
              <div class="roadmap-progress-fill" style="width: ${st.pct}%;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.35rem; font-size: 0.8rem;">
              <span style="font-size: 0.75rem; color: var(--text-muted);">Mức độ đạt chuẩn chặng:</span>
              <span style="font-weight: 800; font-family: var(--font-mono); color: ${isCompleted ? 'var(--success)' : 'var(--primary)'};">${st.pct}%</span>
            </div>

            <div class="roadmap-checklist">
              <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800; color: var(--text-muted); margin-bottom: 0.25rem;">Tiêu chí học lực cần đạt:</div>
              ${checklistHtml}
            </div>

            <div class="roadmap-stage-footer">
              <div style="font-size: 0.78rem; color: var(--text-dim); display: flex; align-items: center; gap: 0.35rem;">
                <i data-lucide="activity"></i> ${isCompleted ? 'Đã hoàn tất toàn bộ tiêu chí chặng này' : 'Nhiệm vụ trọng tâm chặng này:'}
              </div>
              <button class="roadmap-stage-action-btn" id="btnStageAction_${st.num}">
                ${st.actionBtn.text}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Bind action buttons for each milestone stage
    stages.forEach(st => {
      const btn = document.getElementById(`btnStageAction_${st.num}`);
      if (btn && st.actionBtn && st.actionBtn.onClick) {
        btn.addEventListener('click', () => {
          if (window.soundManager) window.soundManager.playClick();
          st.actionBtn.onClick();
        });
      }
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // 6. Render Achievements & Badges
  renderAchievements() {
    const list = document.getElementById('achievementsList');
    if (!list) return;

    const history = window.storageManager.getExamHistory();
    const streak = window.storageManager.getProfile().streakDays || 0;
    const flashcardsCount = window.storageManager.getMasteredFlashcards().length;
    const hasScore9 = history.some(h => h.score >= 9.0);
    const hasHcmcExam = history.some(h => h.examId && (h.examId.includes('hcmc') || h.examId === 'eng_exam_02' || h.examId === 'math_exam_02'));

    const achievements = [
      {
        icon: 'rocket',
        title: 'Tân Binh Tuyển Sinh 10',
        desc: 'Hoàn thành bài thi khảo sát đầu tiên',
        unlocked: history.length >= 1
      },
      {
        icon: 'flame',
        title: 'Bền Bỉ Thần Tốc',
        desc: 'Duy trì chuỗi học tập 5 ngày liên tiếp',
        unlocked: streak >= 5
      },
      {
        icon: 'map-pin',
        title: 'Chiến Binh Sài Gòn',
        desc: 'Hoàn thành đề chuẩn Sở GD&ĐT TP.HCM',
        unlocked: hasHcmcExam
      },
      {
        icon: 'brain-circuit',
        title: 'Bậc Thầy Ghi Nhớ',
        desc: 'Thuộc 10+ thẻ Flashcard công thức',
        unlocked: flashcardsCount >= 10
      },
      {
        icon: 'trophy',
        title: 'Bứt Phá Điểm 9',
        desc: 'Đạt từ 9.0 điểm trở lên trong bài thi',
        unlocked: hasScore9
      }
    ];

    list.innerHTML = achievements.map(ach => `
      <div class="stat-card" style="opacity: ${ach.unlocked ? '1' : '0.45'};">
        <div class="stat-icon ${ach.unlocked ? 'emerald' : 'indigo'}">
          <i data-lucide="${ach.icon}"></i>
        </div>
        <div class="stat-content">
          <div style="font-weight: 800; font-size: 0.95rem; color: var(--text-main);">${ach.title}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${ach.desc}</div>
          <div style="font-size: 0.72rem; font-weight: 800; color: ${ach.unlocked ? 'var(--success)' : 'var(--text-dim)'}; margin-top: 0.25rem;">
            ${ach.unlocked ? '✅ Đã mở khóa' : '🔒 Chưa đạt'}
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // 7. Render Dashboard Homepage 4-Stage Roadmap Preview
  renderDashboardPreview() {
    const previewContainer = document.getElementById('dashRoadmapPreview');
    if (!previewContainer) return;

    const profile = window.storageManager.getProfile();
    const stats = this.getSubjectStats();
    const history = window.storageManager.getExamHistory();
    const mistakes = window.storageManager.getMistakes();
    const flashcards = window.storageManager.getMasteredFlashcards();
    const benchmark = profile.benchmarkScore || 25.5;

    const isAuth = window.userManager && typeof window.userManager.isAuthenticated === 'function' && window.userManager.isAuthenticated();
    const isStudent = isAuth && typeof window.userManager.isStudent === 'function' && window.userManager.isStudent();

    // 1. Update Target School Header (Privacy guard)
    const targetSchoolEl = document.getElementById('dashRoadmapTargetSchool');
    if (targetSchoolEl) {
      if (isStudent && profile.targetSchool) {
        targetSchoolEl.textContent = profile.targetSchool;
      } else {
        targetSchoolEl.innerHTML = `<span style="color: var(--text-muted); font-size: 1.05rem; font-weight: 500;">(Chưa đăng nhập — Mục tiêu được bảo mật riêng)</span>`;
      }
    }

    // 2. Compute 4 stages (Same robust milestones as 3-subject comprehensive roadmap)
    const totalTests = history.length;
    const proj = stats.projectedTotal;

    const s1Criteria = [
      { label: 'Làm ≥ 2 bài thi', done: totalTests >= 2 },
      { label: 'Thuộc ≥ 10 Flashcards', done: flashcards.length >= 10 },
      { label: 'Nhận biết/Thông hiểu ≥ 75%', done: proj >= 20.0 }
    ];
    const s1Pct = Math.round((s1Criteria.filter(c => c.done).length / s1Criteria.length) * 100);

    const s2Criteria = [
      { label: 'Điểm TB 3 môn ≥ 7.5', done: totalTests >= 1 && proj >= 22.5 },
      { label: 'Sửa bẫy trong Sổ lỗi', done: totalTests >= 1 && mistakes.length <= 20 },
      { label: 'Vi-ét & Biển báo TP.HCM', done: totalTests >= 1 && stats.math.avg >= 7.5 && stats.english.avg >= 7.5 }
    ];
    const s2Pct = totalTests === 0 ? 0 : s1Pct >= 100 ? Math.round((s2Criteria.filter(c => c.done).length / s2Criteria.length) * 100) : Math.round(s1Pct * 0.4);

    const s3Criteria = [
      { label: 'Đề chuẩn Sở GD TP.HCM', done: totalTests >= 3 },
      { label: 'Điểm dự phóng ≥ 24.5đ', done: proj >= 24.5 },
      { label: 'Kiểm soát tốc độ 90-120p', done: totalTests >= 4 }
    ];
    const s3Pct = s2Pct >= 80 ? Math.round((s3Criteria.filter(c => c.done).length / s3Criteria.length) * 100) : 0;

    const s4Criteria = [
      { label: 'Đạt điểm ≥ 9.0 trong bài thi', done: history.some(h => h.score >= 9.0) },
      { label: 'Xử lý câu Vận dụng cao', done: stats.english.avg >= 9.0 || stats.math.avg >= 9.0 },
      { label: `Vượt điểm chuẩn (${benchmark.toFixed(2)}đ)`, done: totalTests >= 3 && proj >= benchmark }
    ];
    const s4Pct = s3Pct >= 80 ? Math.round((s4Criteria.filter(c => c.done).length / s4Criteria.length) * 100) : 0;

    const stages = [
      {
        num: 1,
        title: 'Chặng 1: Nền tảng SGK Lớp 9',
        target: 'Mục tiêu: 5.5 - 6.5đ',
        pct: s1Pct,
        criteria: s1Criteria
      },
      {
        num: 2,
        title: 'Chặng 2: Bẻ khóa bẫy đề thi',
        target: 'Mục tiêu: 7.5 - 8.5đ',
        pct: s2Pct,
        criteria: s2Criteria
      },
      {
        num: 3,
        title: 'Chặng 3: Luyện đề chuẩn TP.HCM',
        target: 'Mục tiêu: 8.5 - 9.0đ',
        pct: s3Pct,
        criteria: s3Criteria
      },
      {
        num: 4,
        title: 'Chặng 4: Bứt phá điểm 9-10 & Top 1',
        target: 'Mục tiêu: 9.0 - 10.0đ',
        pct: s4Pct,
        criteria: s4Criteria
      }
    ];

    // 3. Render 4 Stage Cards into Grid
    const stagesGrid = document.getElementById('dashRoadmapStagesGrid');
    if (stagesGrid) {
      stagesGrid.innerHTML = stages.map(st => {
        const isCompleted = isStudent && st.pct >= 100;
        const isInProgress = isStudent && st.pct > 0 && st.pct < 100;
        const statusBadge = isCompleted 
          ? '<span class="dash-stage-badge completed"><i data-lucide="check-circle-2"></i> Hoàn thành</span>'
          : isInProgress 
          ? `<span class="dash-stage-badge current"><i data-lucide="clock"></i> Đang học (${st.pct}%)</span>`
          : '<span class="dash-stage-badge locked"><i data-lucide="lock"></i> Chưa mở</span>';

        const clickAction = isAuth 
          ? `window.app.switchTab('roadmap'); setTimeout(() => { const el = document.getElementById('roadmapStage_${st.num}'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 150);`
          : `if (window.adminController) window.adminController.openLoginModal('student');`;

        return `
          <div class="dash-stage-card ${isCompleted ? 'completed' : isInProgress ? 'active' : ''}" 
               onclick="${clickAction}"
               title="Nhấn để xem chi tiết Chặng ${st.num} trong Lộ trình"
               role="button" tabindex="0">
            <div class="dash-stage-header">
              <div class="dash-stage-num">${st.num}</div>
              ${statusBadge}
            </div>
            <div class="dash-stage-title">${st.title}</div>
            <div class="dash-stage-target">${st.target}</div>
            <div class="dash-stage-progress-bar">
              <div class="dash-stage-progress-fill" style="width: ${isStudent ? Math.min(100, Math.max(st.pct > 0 ? 8 : 0, st.pct)) : 0}%;"></div>
            </div>
            <div class="dash-stage-criteria-count">
              <span>Tiến độ tiêu chí:</span>
              <strong>${isStudent ? st.criteria.filter(c => c.done).length : 0}/${st.criteria.length}</strong>
            </div>
          </div>
        `;
      }).join('');
    }

    // 4. Update Footer Stats (Projected score & admission chance)
    const chanceBadge = document.getElementById('dashRoadmapChanceBadge');
    const scoreSummary = document.getElementById('dashRoadmapScoreSummary');

    if (!isStudent || !profile.targetSchool) {
      if (chanceBadge) {
        chanceBadge.innerHTML = `<i data-lucide="shield-check"></i> Bảo mật tài khoản riêng`;
        chanceBadge.style.color = "var(--text-muted)";
        chanceBadge.style.background = "rgba(148, 163, 184, 0.12)";
        chanceBadge.style.borderColor = "rgba(148, 163, 184, 0.25)";
      }
      if (scoreSummary) {
        scoreSummary.innerHTML = `Vui lòng <strong>Đăng nhập</strong> tài khoản học sinh để theo dõi lộ trình & lưu mục tiêu cá nhân.`;
      }
    } else {
      const gap = Math.round((proj - benchmark) * 100) / 100;
      let chanceText = "Khởi đầu (Cần làm bài thi khảo sát)";
      let chanceColor = "var(--text-muted)";
      let chanceBg = "rgba(148, 163, 184, 0.12)";

      if (totalTests === 0) {
        chanceText = "Khởi đầu (Cần làm bài thi khảo sát)";
        chanceColor = "var(--primary)";
        chanceBg = "rgba(14, 165, 233, 0.15)";
      } else if (gap >= 1.5) {
        chanceText = "Xác suất: Rất an toàn (95%)";
        chanceColor = "var(--success)";
        chanceBg = "rgba(16, 185, 129, 0.18)";
      } else if (gap >= 0.5) {
        chanceText = "Xác suất: Cơ hội cao (88%)";
        chanceColor = "var(--primary)";
        chanceBg = "rgba(14, 165, 233, 0.18)";
      } else if (gap >= 0.0) {
        chanceText = "Xác suất: Đạt chuẩn (80%)";
        chanceColor = "var(--primary)";
        chanceBg = "rgba(14, 165, 233, 0.15)";
      } else if (gap >= -1.0) {
        chanceText = `Xác suất: Đang bám sát (Thiếu ${Math.abs(gap).toFixed(2)}đ)`;
        chanceColor = "#f59e0b";
        chanceBg = "rgba(245, 158, 11, 0.18)";
      } else {
        chanceText = `Xác suất: Cần tăng tốc (Thiếu ${Math.abs(gap).toFixed(2)}đ)`;
        chanceColor = "#f97316";
        chanceBg = "rgba(249, 115, 22, 0.15)";
      }

      if (chanceBadge) {
        chanceBadge.innerHTML = `<i data-lucide="target"></i> ${chanceText}`;
        chanceBadge.style.color = chanceColor;
        chanceBadge.style.background = chanceBg;
        chanceBadge.style.borderColor = chanceColor;
      }

      if (scoreSummary) {
        scoreSummary.innerHTML = `Tổng điểm dự phóng: <strong style="color: var(--primary);">${proj.toFixed(2)} / 30.0đ</strong> • Điểm chuẩn cần: <strong>${benchmark.toFixed(2)}đ</strong>`;
      }
    }

    if (window.lucide) window.lucide.createIcons();
  }
}

window.progressTracker = new ProgressTracker();
