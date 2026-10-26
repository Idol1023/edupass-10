// =========================================================
// EDUPASS 10 - ADMIN & STUDENT PORTAL CONTROLLER (SECURE RBAC)
// Strict Admin Provisioning, Authentication, Modals & Roster Management
// =========================================================

class AdminController {
  constructor() {
    this.currentViewMode = 'roster'; // roster, assignments, analytics
    this.selectedStudentId = null;
    this.studentSearchQuery = '';
    this.studentFilterStatus = 'all';

    this.init();
  }

  init() {
    this.bindEvents();
    this.updateNavbarRoleBadge();
  }

  bindEvents() {
    // Header user button (opens user menu or login modal)
    const userBtn = document.getElementById('headerUserBadgeBtn');
    if (userBtn) {
      userBtn.addEventListener('click', () => {
        if (!window.userManager.isAuthenticated()) {
          this.openLoginModal();
        } else {
          this.openUserMenuModal();
        }
      });
    }

    // Login modal
    const closeLoginBtn = document.getElementById('btnCloseLoginModal');
    if (closeLoginBtn) {
      closeLoginBtn.addEventListener('click', () => this.closeLoginModal());
    }

    const formLogin = document.getElementById('formAuthLogin');
    if (formLogin) {
      formLogin.addEventListener('submit', (e) => this.handleLoginSubmit(e));
    }

    // Change password modal
    const formChangePass = document.getElementById('formChangePassword');
    if (formChangePass) {
      formChangePass.addEventListener('submit', (e) => this.handleChangePasswordSubmit(e));
    }

    const closeChangePassBtn = document.getElementById('btnCloseChangePasswordModal');
    if (closeChangePassBtn) {
      closeChangePassBtn.addEventListener('click', () => this.closeChangePasswordModal());
    }

    // Student detail modal close
    const closeDetailBtn = document.getElementById('btnCloseStudentDetailModal') || document.getElementById('btnDismissStudentDetail');
    if (closeDetailBtn) {
      closeDetailBtn.addEventListener('click', () => this.closeStudentDetailModal());
    }

    // Add student (Account provisioning) modal
    const btnOpenAddStudent = document.getElementById('btnOpenAddStudentModal') || document.getElementById('btnAdminOpenAddStudentModal');
    if (btnOpenAddStudent) {
      btnOpenAddStudent.addEventListener('click', () => this.openAddStudentModal());
    }

    const btnCloseAddStudent = document.getElementById('btnCloseAddStudentModal');
    if (btnCloseAddStudent) {
      btnCloseAddStudent.addEventListener('click', () => this.closeAddStudentModal());
    }

    const formAddStudent = document.getElementById('formAddStudent');
    if (formAddStudent) {
      formAddStudent.addEventListener('submit', (e) => this.handleAddStudentSubmit(e));
    }

    // Add assignment modal
    const btnOpenAddAsg = document.getElementById('btnOpenAddAssignmentModal');
    if (btnOpenAddAsg) {
      btnOpenAddAsg.addEventListener('click', () => this.openAddAssignmentModal());
    }

    const btnCloseAddAsg = document.getElementById('btnCloseAddAssignmentModal');
    if (btnCloseAddAsg) {
      btnCloseAddAsg.addEventListener('click', () => this.closeAddAssignmentModal());
    }

    const formAddAsg = document.getElementById('formAddAssignment');
    if (formAddAsg) {
      formAddAsg.addEventListener('submit', (e) => this.handleAddAssignmentSubmit(e));
    }

    // Data export buttons
    const btnExportCSV = document.getElementById('btnAdminExportCSV');
    if (btnExportCSV) {
      btnExportCSV.addEventListener('click', () => {
        try {
          window.userManager.exportStudentsCSV();
          if (window.app) window.app.showToast('Đã xuất bảng điểm học sinh ra file CSV thành công!');
        } catch (err) {
          alert(err.message);
        }
      });
    }

    const btnExportHandover = document.getElementById('btnAdminExportHandover');
    if (btnExportHandover) {
      btnExportHandover.addEventListener('click', () => {
        try {
          window.userManager.exportAccountHandoverList();
          if (window.app) window.app.showToast('Đã xuất phiếu bàn giao tài khoản lớp 9A1 thành công!');
        } catch (err) {
          alert(err.message);
        }
      });
    }

    const btnBackupJSON = document.getElementById('btnAdminBackupJSON');
    if (btnBackupJSON) {
      btnBackupJSON.addEventListener('click', () => {
        try {
          window.userManager.exportBackupJSON();
          if (window.app) window.app.showToast('Đã sao lưu bảo mật toàn bộ dữ liệu thành công!');
        } catch (err) {
          alert(err.message);
        }
      });
    }

    const btnResetSample = document.getElementById('btnAdminResetSample');
    if (btnResetSample) {
      btnResetSample.addEventListener('click', () => {
        if (confirm('Khôi phục danh sách Lớp 9A1 mẫu ban đầu (kèm tài khoản đăng nhập chuẩn)?')) {
          window.userManager.resetToDefault();
          this.renderAdminPortal();
          if (window.app) window.app.showToast('Đã khôi phục dữ liệu Lớp 9A1 mẫu thành công!');
        }
      });
    }
  }

  // =========================================================
  // NAVBAR & AUTHENTICATION BADGE SYNC
  // =========================================================
  updateNavbarRoleBadge() {
    const badgeEl = document.getElementById('headerUserBadgeBtn');
    if (!badgeEl) return;

    const user = window.userManager.getCurrentUser();

    if (!user) {
      badgeEl.innerHTML = `
        <div class="header-user-avatar" style="background: var(--bg-surface-elevated); color: var(--text-muted);">
          <i data-lucide="lock" style="width: 14px; height: 14px;"></i>
        </div>
        <div style="display: flex; flex-direction: column; text-align: left;">
          <span style="font-size: 0.82rem; font-weight: 700; color: var(--text-main);">Đăng nhập</span>
          <span style="font-size: 0.68rem; color: var(--text-muted);">Khách vãng lai</span>
        </div>
        <i data-lucide="log-in" style="width: 14px; height: 14px; opacity: 0.8; color: var(--primary);"></i>
      `;
    } else if (user.role === 'admin') {
      badgeEl.innerHTML = `
        <div class="header-user-avatar" style="background: linear-gradient(135deg, #ec4899, #8b5cf6);">
          ${user.avatar || '👩‍🏫'}
        </div>
        <div style="display: flex; flex-direction: column; text-align: left;">
          <span id="headerUserName" style="font-size: 0.82rem; font-weight: 700; line-height: 1.1; max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${user.name}</span>
          <span class="header-user-role-tag admin">👑 Giáo viên (Admin)</span>
        </div>
        <i data-lucide="chevron-down" style="width: 14px; height: 14px; opacity: 0.7;"></i>
      `;
    } else {
      badgeEl.innerHTML = `
        <div class="header-user-avatar" style="background: linear-gradient(135deg, #06b6d4, #3b82f6);">
          ${user.avatar || '👨‍🎓'}
        </div>
        <div style="display: flex; flex-direction: column; text-align: left;">
          <span id="headerUserName" style="font-size: 0.82rem; font-weight: 700; line-height: 1.1; max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${user.name}</span>
          <span class="header-user-role-tag student">🎓 Lớp ${user.class || '9A1'}</span>
        </div>
        <i data-lucide="chevron-down" style="width: 14px; height: 14px; opacity: 0.7;"></i>
      `;
    }

    // Role-based Nav tabs styling and accessibility
    const navAdminBtn = document.getElementById('navBtnAdminPortal');
    const navStudentBtn = document.getElementById('navBtnStudentPortal');

    if (navAdminBtn) {
      if (window.userManager.isAdmin()) {
        navAdminBtn.style.display = 'inline-flex';
        navAdminBtn.style.opacity = '1';
        navAdminBtn.title = 'Khu vực quản lý lớp dành cho Giáo viên';
      } else {
        navAdminBtn.style.opacity = '0.45';
        navAdminBtn.title = 'Bị khóa: Chỉ Quản trị viên/Giáo viên mới có quyền truy cập';
      }
    }

    if (navStudentBtn) {
      if (window.userManager.isStudent()) {
        navStudentBtn.innerHTML = `<i data-lucide="graduation-cap"></i> Tiến trình của bạn`;
      } else {
        navStudentBtn.innerHTML = `<i data-lucide="graduation-cap"></i> Xem góc nhìn Học sinh`;
      }
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // =========================================================
  // LOGIN MODAL CONTROLS
  // =========================================================
  openLoginModal() {
    const modal = document.getElementById('authLoginModal');
    if (!modal) return;

    const errMsg = document.getElementById('loginErrorMessage');
    if (errMsg) errMsg.style.display = 'none';

    modal.classList.add('active');
    if (window.lucide) window.lucide.createIcons();
  }

  closeLoginModal() {
    const modal = document.getElementById('authLoginModal');
    if (modal) modal.classList.remove('active');
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const usernameInput = document.getElementById('inputLoginUsername');
    const passwordInput = document.getElementById('inputLoginPassword');
    const rememberInput = document.getElementById('inputLoginRemember');
    const errMsg = document.getElementById('loginErrorMessage');

    const username = usernameInput ? usernameInput.value.trim() : '';
    const password = passwordInput ? passwordInput.value.trim() : '';
    const remember = rememberInput ? rememberInput.checked : true;

    const res = window.userManager.login(username, password, remember);

    if (res.success) {
      this.closeLoginModal();
      this.updateNavbarRoleBadge();
      if (errMsg) errMsg.style.display = 'none';
      if (window.app) window.app.showToast(res.message);
    } else {
      if (errMsg) {
        errMsg.textContent = res.message;
        errMsg.style.display = 'block';
      } else {
        alert(res.message);
      }
    }
  }

  quickLoginAs(username, password) {
    const res = window.userManager.login(username, password, true);
    if (res.success) {
      this.closeLoginModal();
      this.closeUserMenuModal();
      this.updateNavbarRoleBadge();
      if (window.app) window.app.showToast(`Đã đăng nhập thành công tài khoản: ${res.user.name}`);
    } else {
      alert(res.message);
    }
  }

  // =========================================================
  // USER ACCOUNT MENU MODAL
  // =========================================================
  openUserMenuModal() {
    const modal = document.getElementById('userMenuModal');
    if (!modal) return;

    const user = window.userManager.getCurrentUser();
    if (!user) {
      this.openLoginModal();
      return;
    }

    const container = document.getElementById('userMenuContentContainer');
    if (container) {
      container.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: var(--radius-md); background: var(--bg-surface-elevated); margin-bottom: 1.25rem;">
          <span style="font-size: 2.2rem; width: 56px; height: 56px; border-radius: 50%; background: var(--bg-surface); display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm);">${user.avatar || '👨‍🎓'}</span>
          <div>
            <div style="font-size: 1.05rem; font-weight: 800; color: var(--text-main);">${user.name}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">Tài khoản: <strong>${user.username}</strong></div>
            <span class="badge" style="margin-top: 0.35rem; font-size: 0.72rem; font-weight: 700; padding: 2px 8px; border-radius: 99px; background: ${user.role === 'admin' ? 'rgba(236, 72, 153, 0.2)' : 'rgba(6, 182, 212, 0.2)'}; color: ${user.role === 'admin' ? '#f472b6' : '#22d3ee'};">
              ${user.role === 'admin' ? '👑 Quản Trị Viên / Giáo Viên' : '🎓 Học Sinh Lớp 9'}
            </span>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem;">
          <button class="btn btn-secondary btn-sm" id="btnOpenChangePassFromMenu" style="justify-content: flex-start;">
            <i data-lucide="key"></i> Đổi mật khẩu cá nhân
          </button>
          ${user.role === 'admin' ? `
            <button class="btn btn-secondary btn-sm" id="btnOpenProvisionFromMenu" style="justify-content: flex-start; color: var(--primary);">
              <i data-lucide="user-plus"></i> Cấp tài khoản học sinh mới
            </button>
            <button class="btn btn-secondary btn-sm" id="btnExportHandoverFromMenu" style="justify-content: flex-start;">
              <i data-lucide="file-text"></i> Xuất phiếu bàn giao tài khoản toàn lớp
            </button>
          ` : `
            <button class="btn btn-secondary btn-sm" id="btnGoToMyProgressFromMenu" style="justify-content: flex-start; color: var(--accent-cyan);">
              <i data-lucide="bar-chart-2"></i> Xem hồ sơ & nhiệm vụ của tôi
            </button>
          `}
          <button class="btn btn-secondary btn-sm" id="btnAppLogout" style="justify-content: flex-start; color: #f87171; border-color: rgba(239, 68, 68, 0.3);">
            <i data-lucide="log-out"></i> Đăng xuất an toàn
          </button>
        </div>

        <!-- Quick Switch for Demonstration / Testing -->
        <div style="border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
          <div style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 4px;">
            <i data-lucide="shuffle" style="width: 14px; height: 14px;"></i> Chuyển đổi nhanh tài khoản thử nghiệm:
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-sm" id="btnSwitchAdminQuick" style="font-size: 0.78rem;">
              👑 Cô Mai Anh (Admin)
            </button>
            <button class="btn btn-secondary btn-sm" id="btnSwitchStudent1Quick" style="font-size: 0.78rem;">
              👨‍🎓 Minh An (Top 1)
            </button>
            <button class="btn btn-secondary btn-sm" id="btnSwitchStudent2Quick" style="font-size: 0.78rem;">
              👩‍🎓 Bảo Ngọc (NV1 NTH)
            </button>
            <button class="btn btn-secondary btn-sm" id="btnSwitchStudent7Quick" style="font-size: 0.78rem;">
              👨‍🎓 Tuấn Kiệt (Phụ đạo)
            </button>
          </div>
        </div>
      `;

      // Bind handlers
      const btnLogout = container.querySelector('#btnAppLogout');
      if (btnLogout) {
        btnLogout.addEventListener('click', () => {
          window.userManager.logout();
          this.closeUserMenuModal();
          this.updateNavbarRoleBadge();
          if (window.app) window.app.showToast('Bạn đã đăng xuất an toàn.');
        });
      }

      const btnChangePass = container.querySelector('#btnOpenChangePassFromMenu');
      if (btnChangePass) {
        btnChangePass.addEventListener('click', () => {
          this.closeUserMenuModal();
          this.openChangePasswordModal();
        });
      }

      const btnOpenProvision = container.querySelector('#btnOpenProvisionFromMenu');
      if (btnOpenProvision) {
        btnOpenProvision.addEventListener('click', () => {
          this.closeUserMenuModal();
          this.openAddStudentModal();
        });
      }

      const btnExportHandover = container.querySelector('#btnExportHandoverFromMenu');
      if (btnExportHandover) {
        btnExportHandover.addEventListener('click', () => {
          this.closeUserMenuModal();
          window.userManager.exportAccountHandoverList();
          if (window.app) window.app.showToast('Đã tải xuống phiếu bàn giao tài khoản lớp 9A1.');
        });
      }

      const btnGoProgress = container.querySelector('#btnGoToMyProgressFromMenu');
      if (btnGoProgress) {
        btnGoProgress.addEventListener('click', () => {
          this.closeUserMenuModal();
          if (window.app) window.app.switchTab('student-portal');
        });
      }

      // Quick switch buttons
      const btnSwAdmin = container.querySelector('#btnSwitchAdminQuick');
      if (btnSwAdmin) {
        btnSwAdmin.addEventListener('click', () => this.quickLoginAs('admin', 'admin@123'));
      }
      const btnSw1 = container.querySelector('#btnSwitchStudent1Quick');
      if (btnSw1) {
        btnSw1.addEventListener('click', () => this.quickLoginAs('hs0901', 'hocsinh@123'));
      }
      const btnSw2 = container.querySelector('#btnSwitchStudent2Quick');
      if (btnSw2) {
        btnSw2.addEventListener('click', () => this.quickLoginAs('hs0902', 'hocsinh@123'));
      }
      const btnSw7 = container.querySelector('#btnSwitchStudent7Quick');
      if (btnSw7) {
        btnSw7.addEventListener('click', () => this.quickLoginAs('hs0907', 'hocsinh@123'));
      }
    }

    modal.classList.add('active');
    if (window.lucide) window.lucide.createIcons();
  }

  closeUserMenuModal() {
    const modal = document.getElementById('userMenuModal');
    if (modal) modal.classList.remove('active');
  }

  // =========================================================
  // CHANGE PASSWORD MODAL
  // =========================================================
  openChangePasswordModal() {
    const modal = document.getElementById('changePasswordModal');
    if (modal) modal.classList.add('active');
    if (window.lucide) window.lucide.createIcons();
  }

  closeChangePasswordModal() {
    const modal = document.getElementById('changePasswordModal');
    if (modal) modal.classList.remove('active');
  }

  handleChangePasswordSubmit(e) {
    e.preventDefault();
    const oldPass = document.getElementById('inputOldPassword').value;
    const newPass = document.getElementById('inputNewPassword').value;
    const confirmPass = document.getElementById('inputConfirmNewPassword').value;

    if (newPass !== confirmPass) {
      alert('Xác nhận mật khẩu mới không trùng khớp!');
      return;
    }

    try {
      const res = window.userManager.changeOwnPassword(oldPass, newPass);
      if (res.success) {
        this.closeChangePasswordModal();
        e.target.reset();
        if (window.app) window.app.showToast('Đổi mật khẩu thành công!');
      }
    } catch (err) {
      alert(err.message);
    }
  }

  // =========================================================
  // ADMIN PORTAL RENDERING (WITH ACCESS GUARDING)
  // =========================================================
  renderAdminPortal() {
    const container = document.getElementById('adminContentArea');

    // Access Guard: Only Admin can access
    if (!window.userManager.isAdmin()) {
      if (container) {
        container.innerHTML = `
          <div style="padding: 4rem 2rem; text-align: center; background: var(--bg-surface); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: var(--radius-lg);">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(239, 68, 68, 0.15); color: #f87171; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; font-size: 1.8rem;">
              <i data-lucide="shield-alert"></i>
            </div>
            <h3 style="font-size: 1.4rem; font-weight: 800; color: #f87171; margin-bottom: 0.5rem;">Khu Vực Quản Trị Bị Khóa</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 500px; margin: 0 auto 1.5rem auto; line-height: 1.6;">
              Chỉ Quản trị viên (Giáo viên chủ nhiệm) mới có quyền truy cập cổng Quản lý lớp 9A1 và cấp tài khoản học sinh.
            </p>
            <div style="display: flex; justify-content: center; gap: 0.75rem;">
              <button class="btn btn-primary" onclick="window.adminController.openLoginModal()">
                <i data-lucide="log-in"></i> Đăng nhập tài khoản Giáo viên
              </button>
              <button class="btn btn-secondary" onclick="window.app.switchTab('student-portal')">
                <i data-lucide="graduation-cap"></i> Xem tiến trình học sinh
              </button>
            </div>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
      return;
    }

    const stats = window.userManager.getClassStats();

    // 1. Render KPI Summary Cards
    const elTotalStudents = document.getElementById('adminStatTotalStudents');
    const elTotalExams = document.getElementById('adminStatTotalExams');
    const elClassAvg = document.getElementById('adminStatClassAvg');
    const elPassRate = document.getElementById('adminStatPassRate');

    if (elTotalStudents) elTotalStudents.textContent = stats.totalStudents;
    if (elTotalExams) elTotalExams.textContent = stats.totalExams;
    if (elClassAvg) elClassAvg.textContent = stats.classAverage + '/10';
    if (elPassRate) elPassRate.textContent = stats.targetPassRate + '%';

    // 2. Render Subtabs
    this.renderSubTabNavigation();

    // 3. Render Current View
    if (this.currentViewMode === 'roster') {
      this.renderStudentRosterTable();
    } else if (this.currentViewMode === 'assignments') {
      this.renderAssignmentsList();
    } else if (this.currentViewMode === 'analytics') {
      this.renderClassAnalyticsView(stats);
    }

    if (window.lucide) window.lucide.createIcons();
  }

  renderSubTabNavigation() {
    const subNavContainer = document.getElementById('adminSubNavTabs');
    if (!subNavContainer) return;

    subNavContainer.innerHTML = `
      <button class="filter-chip ${this.currentViewMode === 'roster' ? 'active' : ''}" data-view="roster">
        <i data-lucide="users"></i> Danh sách học sinh & Tài khoản (${window.userManager.getAllStudents().length})
      </button>
      <button class="filter-chip ${this.currentViewMode === 'assignments' ? 'active' : ''}" data-view="assignments">
        <i data-lucide="clipboard-list"></i> Giao đề & Nhiệm vụ (${window.userManager.getAllAssignments().length})
      </button>
      <button class="filter-chip ${this.currentViewMode === 'analytics' ? 'active' : ''}" data-view="analytics">
        <i data-lucide="pie-chart"></i> Phân tích phổ điểm & Dự báo NV1
      </button>
    `;

    subNavContainer.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentViewMode = e.currentTarget.dataset.view;
        this.renderAdminPortal();
      });
    });
  }

  // =========================================================
  // STUDENT ROSTER TABLE (WITH SECURITY CONTROLS)
  // =========================================================
  renderStudentRosterTable() {
    const container = document.getElementById('adminContentArea');
    if (!container) return;

    let students = window.userManager.getAllStudents();

    // Filter by search query
    if (this.studentSearchQuery) {
      const q = this.studentSearchQuery.toLowerCase();
      students = students.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.studentCode.toLowerCase().includes(q) || 
        (s.username && s.username.toLowerCase().includes(q)) ||
        (s.targetSchool && s.targetSchool.toLowerCase().includes(q))
      );
    }

    // Filter by status
    if (this.studentFilterStatus !== 'all') {
      students = students.filter(s => s.status === this.studentFilterStatus);
    }

    container.innerHTML = `
      <div class="admin-toolbar" style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem; flex: 1; max-width: 480px;">
          <div style="position: relative; width: 100%;">
            <i data-lucide="search" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); width: 16px; height: 16px; color: var(--text-muted);"></i>
            <input type="text" id="adminStudentSearchInput" placeholder="Tìm theo tên, mã HS, username hoặc trường..." 
                   value="${this.studentSearchQuery}"
                   style="width: 100%; padding: 0.65rem 0.75rem 0.65rem 2.25rem; border-radius: var(--radius-md); background: var(--bg-surface); border: 1px solid var(--border-subtle); color: var(--text-main); font-size: 0.88rem;">
          </div>
          <select id="adminStudentStatusSelect" style="padding: 0.65rem 1rem; border-radius: var(--radius-md); background: var(--bg-surface); border: 1px solid var(--border-subtle); color: var(--text-main); font-size: 0.88rem;">
            <option value="all" ${this.studentFilterStatus === 'all' ? 'selected' : ''}>Tất cả học lực</option>
            <option value="excellent" ${this.studentFilterStatus === 'excellent' ? 'selected' : ''}>🌟 Xuất sắc (>= 8.5)</option>
            <option value="good" ${this.studentFilterStatus === 'good' ? 'selected' : ''}>⚡ Khá giỏi (7.0 - 8.4)</option>
            <option value="average" ${this.studentFilterStatus === 'average' ? 'selected' : ''}>🌱 Trung bình (5.0 - 6.9)</option>
            <option value="needs_support" ${this.studentFilterStatus === 'needs_support' ? 'selected' : ''}>⚠️ Cần hỗ trợ (< 5.0)</option>
          </select>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn btn-primary btn-sm" id="btnOpenAddStudentModal" style="background: linear-gradient(135deg, var(--primary), #8b5cf6);">
            <i data-lucide="user-plus"></i> Cấp tài khoản mới
          </button>
          <button class="btn btn-secondary btn-sm" id="btnAdminExportHandover" title="Xuất danh sách cấp tài khoản và mật khẩu khởi tạo">
            <i data-lucide="printer"></i> Phiếu bàn giao tài khoản
          </button>
          <button class="btn btn-secondary btn-sm" id="btnAdminExportCSV" title="Xuất file CSV bảng điểm học sinh">
            <i data-lucide="download"></i> Xuất Excel điểm
          </button>
        </div>
      </div>

      <div class="table-responsive-wrapper" style="overflow-x: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); background: var(--bg-surface);">
        <table class="admin-student-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.88rem;">
          <thead>
            <tr style="background: var(--bg-surface-elevated); border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.04em;">
              <th style="padding: 1rem 1.25rem;">Học Sinh</th>
              <th style="padding: 1rem;">Tài Khoản Đăng Nhập</th>
              <th style="padding: 1rem;">Mục Tiêu Vào 10</th>
              <th style="padding: 1rem; text-align: center;">Toán</th>
              <th style="padding: 1rem; text-align: center;">Ngữ Văn</th>
              <th style="padding: 1rem; text-align: center;">Tiếng Anh</th>
              <th style="padding: 1rem; text-align: center;">ĐTB Chung</th>
              <th style="padding: 1rem; text-align: center;">Học Lực</th>
              <th style="padding: 1rem; text-align: center;">Bảo Mật</th>
              <th style="padding: 1rem; text-align: right;">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            ${students.length === 0 ? `
              <tr>
                <td colspan="10" style="padding: 3rem; text-align: center; color: var(--text-muted);">
                  <i data-lucide="user-x" style="width: 36px; height: 36px; stroke-width: 1.5; margin-bottom: 0.5rem; opacity: 0.5;"></i>
                  <div>Không tìm thấy học sinh nào phù hợp.</div>
                </td>
              </tr>
            ` : students.map(s => {
              const statusPill = s.status === 'excellent' ? 
                `<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 99px;">Xuất sắc</span>` :
                s.status === 'good' ?
                `<span class="badge" style="background: rgba(99, 102, 241, 0.15); color: #a5b4fc; border: 1px solid rgba(99, 102, 241, 0.3); font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 99px;">Khá giỏi</span>` :
                s.status === 'average' ?
                `<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 99px;">Trung bình</span>` :
                `<span class="badge" style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 99px;">Cần phụ đạo</span>`;

              const isLocked = s.accountStatus === 'locked';

              return `
                <tr style="border-bottom: 1px solid var(--border-subtle); transition: background 0.15s ease;" class="admin-table-row">
                  <td style="padding: 0.9rem 1.25rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <span style="font-size: 1.4rem; background: var(--bg-surface-elevated); width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; border-radius: 50%;">${s.avatar || '👨‍🎓'}</span>
                      <div>
                        <div style="font-weight: 700; color: var(--text-main);">${s.name}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">${s.studentCode} • Lớp ${s.class}</div>
                      </div>
                    </div>
                  </td>
                  <td style="padding: 0.9rem 1rem;">
                    <div style="font-family: var(--font-mono); font-weight: 700; color: var(--primary); font-size: 0.82rem;">${s.username || s.studentCode.toLowerCase()}</div>
                    <div style="font-size: 0.72rem; color: var(--text-dim);">MK: <code>${s.initialPassword || 'hocsinh@123'}</code></div>
                  </td>
                  <td style="padding: 0.9rem 1rem;">
                    <div style="font-size: 0.82rem; font-weight: 600; color: var(--text-main); max-width: 200px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${s.targetSchool}">
                      ${s.targetSchool}
                    </div>
                    <div style="font-size: 0.74rem; color: #a855f7; font-weight: 600;">Mục tiêu: ${s.benchmarkScore} điểm</div>
                  </td>
                  <td style="padding: 0.9rem 1rem; text-align: center; font-weight: 700; color: ${s.mathAvg >= 8 ? '#34d399' : s.mathAvg >= 6.5 ? '#818cf8' : '#f87171'};">
                    ${s.mathAvg > 0 ? s.mathAvg : '-'}
                  </td>
                  <td style="padding: 0.9rem 1rem; text-align: center; font-weight: 700; color: ${s.literatureAvg >= 8 ? '#34d399' : s.literatureAvg >= 6.5 ? '#818cf8' : '#f87171'};">
                    ${s.literatureAvg > 0 ? s.literatureAvg : '-'}
                  </td>
                  <td style="padding: 0.9rem 1rem; text-align: center; font-weight: 700; color: ${s.englishAvg >= 8 ? '#34d399' : s.englishAvg >= 6.5 ? '#818cf8' : '#f87171'};">
                    ${s.englishAvg > 0 ? s.englishAvg : '-'}
                  </td>
                  <td style="padding: 0.9rem 1rem; text-align: center;">
                    <span style="font-size: 1rem; font-weight: 800; color: var(--primary);">${s.overallAvg > 0 ? s.overallAvg : '-'}</span>
                  </td>
                  <td style="padding: 0.9rem 1rem; text-align: center;">
                    ${statusPill}
                  </td>
                  <td style="padding: 0.9rem 1rem; text-align: center;">
                    <span class="badge" style="font-size: 0.7rem; font-weight: 700; padding: 2px 7px; border-radius: 99px; ${isLocked ? 'background: rgba(239, 68, 68, 0.15); color: #f87171;' : 'background: rgba(16, 185, 129, 0.15); color: #34d399;'}">
                      ${isLocked ? '🔒 Đã khóa' : '✓ Hoạt động'}
                    </span>
                  </td>
                  <td style="padding: 0.9rem 1.25rem; text-align: right;">
                    <div style="display: flex; align-items: center; justify-content: flex-end; gap: 0.35rem;">
                      <button class="btn btn-primary btn-sm btn-view-student" data-id="${s.id}" style="padding: 0.4rem 0.65rem; font-size: 0.75rem;" title="Xem hồ sơ tiến trình">
                        <i data-lucide="bar-chart-2"></i> Hồ sơ
                      </button>
                      <button class="btn btn-secondary btn-sm btn-reset-pass" data-id="${s.id}" data-name="${s.name}" title="Đặt lại mật khẩu cho học sinh" style="padding: 0.4rem 0.5rem; color: #f59e0b;">
                        <i data-lucide="key-round"></i>
                      </button>
                      <button class="btn btn-secondary btn-sm btn-lock-student" data-id="${s.id}" data-name="${s.name}" title="${isLocked ? 'Mở khóa tài khoản' : 'Khóa tài khoản'}" style="padding: 0.4rem 0.5rem; color: ${isLocked ? '#10b981' : '#f87171'};">
                        <i data-lucide="${isLocked ? 'unlock' : 'lock'}"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;

    // Bind inputs & buttons
    const searchInput = document.getElementById('adminStudentSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.studentSearchQuery = e.target.value;
        this.renderStudentRosterTable();
      });
    }

    const statusSelect = document.getElementById('adminStudentStatusSelect');
    if (statusSelect) {
      statusSelect.addEventListener('change', (e) => {
        this.studentFilterStatus = e.target.value;
        this.renderStudentRosterTable();
      });
    }

    // View student details
    container.querySelectorAll('.btn-view-student').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        this.openStudentDetailModal(id);
      });
    });

    // Reset student password
    container.querySelectorAll('.btn-reset-pass').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const name = e.currentTarget.dataset.name;
        const newPass = prompt(`Đặt lại mật khẩu cho học sinh "${name}" (${id}):`, 'hocsinh@123');
        if (newPass) {
          try {
            window.userManager.adminResetStudentPassword(id, newPass);
            this.renderStudentRosterTable();
            if (window.app) window.app.showToast(`Đã đổi mật khẩu cho ${name} thành: ${newPass}`);
          } catch (err) {
            alert(err.message);
          }
        }
      });
    });

    // Lock/Unlock student account
    container.querySelectorAll('.btn-lock-student').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const name = e.currentTarget.dataset.name;
        try {
          const res = window.userManager.adminToggleAccountLock(id);
          this.renderStudentRosterTable();
          if (window.app) {
            window.app.showToast(`Tài khoản "${name}" hiện đang: ${res.status === 'locked' ? 'ĐÃ KHÓA' : 'HOẠT ĐỘNG'}`);
          }
        } catch (err) {
          alert(err.message);
        }
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // =========================================================
  // ADMIN-ONLY: PROVISION NEW STUDENT ACCOUNT
  // =========================================================
  openAddStudentModal() {
    if (!window.userManager.isAdmin()) {
      alert('Từ chối truy cập: Chỉ Quản trị viên mới có quyền cấp tài khoản học sinh.');
      return;
    }
    const modal = document.getElementById('addStudentModal');
    if (modal) modal.classList.add('active');
    if (window.lucide) window.lucide.createIcons();
  }

  closeAddStudentModal() {
    const modal = document.getElementById('addStudentModal');
    if (modal) modal.classList.remove('active');
  }

  handleAddStudentSubmit(e) {
    e.preventDefault();

    if (!window.userManager.isAdmin()) {
      alert('Từ chối truy cập: Chỉ Quản trị viên mới có quyền cấp tài khoản.');
      return;
    }

    const name = document.getElementById('inputNewStudentName').value.trim();
    const studentClass = document.getElementById('inputNewStudentClass').value.trim() || '9A1';
    const gender = document.getElementById('inputNewStudentGender').value;
    const phone = document.getElementById('inputNewStudentPhone').value.trim();
    const parentPhone = document.getElementById('inputNewStudentParentPhone').value.trim();
    const targetSchool = document.getElementById('inputNewStudentTargetSchool').value.trim() || 'THPT Nguyễn Thượng Hiền (TP.HCM)';
    const benchmarkScore = parseFloat(document.getElementById('inputNewStudentBenchmark').value) || 24.5;
    const username = (document.getElementById('inputNewStudentUsername')?.value || '').trim();
    const password = (document.getElementById('inputNewStudentPassword')?.value || '').trim() || 'hocsinh@123';

    try {
      const res = window.userManager.provisionStudentAccount({
        name,
        class: studentClass,
        gender,
        phone,
        parentPhone,
        targetSchool,
        benchmarkScore,
        username,
        password
      });

      this.closeAddStudentModal();
      this.renderAdminPortal();
      e.target.reset();

      // Show handover credentials
      alert(
        `🎉 ĐÃ CẤP TÀI KHOẢN THÀNH CÔNG!\n\n` +
        `• Học sinh: ${res.credentials.name} (${res.credentials.studentCode})\n` +
        `• Tên đăng nhập: ${res.credentials.username}\n` +
        `• Mật khẩu khởi tạo: ${res.credentials.initialPassword}\n` +
        `• Trường NV1: ${res.credentials.targetSchool}\n\n` +
        `Hãy gửi thông tin này cho phụ huynh & học sinh để đăng nhập.`
      );

      if (window.app) {
        window.app.showToast(`Đã cấp tài khoản cho học sinh: ${res.credentials.name}`);
      }
    } catch (err) {
      alert(err.message);
    }
  }

  // =========================================================
  // STUDENT DETAIL MODAL
  // =========================================================
  openStudentDetailModal(studentId) {
    const modal = document.getElementById('studentDetailModal');
    if (!modal) return;

    const student = window.userManager.getStudentById(studentId);
    if (!student) return;

    this.selectedStudentId = studentId;

    const titleEl = document.getElementById('studentDetailModalTitle');
    if (titleEl) {
      titleEl.innerHTML = `<i data-lucide="user-check" style="color: var(--accent-cyan);"></i> Hồ Sơ Năng Lực: ${student.name} (${student.studentCode})`;
    }

    const bodyEl = document.getElementById('studentDetailModalBody');
    if (bodyEl) {
      bodyEl.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding: 1.25rem; border-radius: var(--radius-md); background: var(--bg-surface-elevated); margin-bottom: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-size: 2.5rem; width: 64px; height: 64px; border-radius: 50%; background: var(--bg-surface); display: flex; align-items: center; justify-content: center;">${student.avatar || '👨‍🎓'}</span>
            <div>
              <div style="font-size: 1.25rem; font-weight: 800; color: var(--text-main);">${student.name}</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">Lớp: ${student.class} • SĐT Phụ huynh: <strong>${student.parentPhone || 'Chưa cập nhật'}</strong></div>
              <div style="font-size: 0.85rem; color: #a855f7; font-weight: 700; margin-top: 0.2rem;">Mục tiêu: ${student.targetSchool} (Điểm chuẩn: ${student.benchmarkScore}đ)</div>
            </div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Dự báo NV1</div>
            <div style="font-size: 1.8rem; font-weight: 800; color: ${(student.overallAvg * 3) >= student.benchmarkScore ? '#10b981' : '#f59e0b'};">
              ${(student.overallAvg * 3).toFixed(1)} / 30đ
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
          <div style="padding: 1rem; border-radius: var(--radius-md); background: var(--bg-surface); border: 1px solid var(--border-subtle); text-align: center;">
            <div style="font-size: 0.75rem; color: #60a5fa; font-weight: 700; text-transform: uppercase;">Điểm Toán TB</div>
            <div style="font-size: 1.75rem; font-weight: 800; color: #3b82f6; margin-top: 0.25rem;">${student.mathAvg || 0}</div>
          </div>
          <div style="padding: 1rem; border-radius: var(--radius-md); background: var(--bg-surface); border: 1px solid var(--border-subtle); text-align: center;">
            <div style="font-size: 0.75rem; color: #f472b6; font-weight: 700; text-transform: uppercase;">Điểm Văn TB</div>
            <div style="font-size: 1.75rem; font-weight: 800; color: #ec4899; margin-top: 0.25rem;">${student.literatureAvg || 0}</div>
          </div>
          <div style="padding: 1rem; border-radius: var(--radius-md); background: var(--bg-surface); border: 1px solid var(--border-subtle); text-align: center;">
            <div style="font-size: 0.75rem; color: #34d399; font-weight: 700; text-transform: uppercase;">Điểm Anh TB</div>
            <div style="font-size: 1.75rem; font-weight: 800; color: #10b981; margin-top: 0.25rem;">${student.englishAvg || 0}</div>
          </div>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">Lời dặn & Nhận xét của Giáo viên:</h4>
          <textarea id="txtTeacherStudentNote" rows="3" style="width: 100%; padding: 0.75rem; border-radius: var(--radius-sm); background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); color: var(--text-main); font-size: 0.88rem;">${student.notes || ''}</textarea>
          <button class="btn btn-primary btn-sm" id="btnSaveTeacherNote" style="margin-top: 0.5rem;">
            <i data-lucide="save"></i> Lưu lời nhận xét
          </button>
        </div>

        <div>
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.75rem;">Lịch sử làm bài thi (${(student.examHistory || []).length} đề đã nộp):</h4>
          ${(student.examHistory || []).length === 0 ? `
            <div style="padding: 2rem; text-align: center; color: var(--text-muted); background: var(--bg-surface-elevated); border-radius: var(--radius-md);">
              Học sinh chưa nộp bài thi nào.
            </div>
          ` : `
            <div style="max-height: 220px; overflow-y: auto;">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.82rem; text-align: left;">
                <thead>
                  <tr style="border-bottom: 1px solid var(--border-subtle); color: var(--text-muted);">
                    <th style="padding: 0.5rem;">Ngày</th>
                    <th style="padding: 0.5rem;">Đề thi</th>
                    <th style="padding: 0.5rem; text-align: center;">Môn</th>
                    <th style="padding: 0.5rem; text-align: center;">Điểm</th>
                    <th style="padding: 0.5rem; text-align: right;">Thời gian</th>
                  </tr>
                </thead>
                <tbody>
                  ${student.examHistory.map(h => `
                    <tr style="border-bottom: 1px solid var(--border-subtle);">
                      <td style="padding: 0.5rem; color: var(--text-muted);">${h.date}</td>
                      <td style="padding: 0.5rem; font-weight: 600; color: var(--text-main);">${h.title}</td>
                      <td style="padding: 0.5rem; text-align: center; text-transform: uppercase; font-weight: 700;">${h.subject}</td>
                      <td style="padding: 0.5rem; text-align: center; font-weight: 800; color: ${h.score >= 8 ? '#10b981' : '#f59e0b'};">${h.score}</td>
                      <td style="padding: 0.5rem; text-align: right; color: var(--text-muted);">${h.timeSpent || '60p'}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>
      `;

      // Bind note saving
      const btnSaveNote = bodyEl.querySelector('#btnSaveTeacherNote');
      if (btnSaveNote) {
        btnSaveNote.addEventListener('click', () => {
          const txt = bodyEl.querySelector('#txtTeacherStudentNote').value.trim();
          student.notes = txt;
          window.userManager.saveStudents();
          if (window.app) window.app.showToast(`Đã lưu nhận xét cho học sinh ${student.name}!`);
        });
      }
    }

    modal.classList.add('active');
    if (window.lucide) window.lucide.createIcons();
  }

  closeStudentDetailModal() {
    const modal = document.getElementById('studentDetailModal');
    if (modal) modal.classList.remove('active');
  }

  // =========================================================
  // ASSIGNMENTS MANAGEMENT
  // =========================================================
  renderAssignmentsList() {
    const container = document.getElementById('adminContentArea');
    if (!container) return;

    const assignments = window.userManager.getAllAssignments();
    const students = window.userManager.getAllStudents();

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main);">Quản Lý Giao Đề Thi & Bài Tập Về Nhà</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Giao đề thi chuẩn tuyển sinh lớp 10, đặt hạn chót và giám sát nộp bài theo thời gian thực.</p>
        </div>
        <button class="btn btn-primary btn-sm" id="btnOpenAddAssignmentModal">
          <i data-lucide="plus-circle"></i> Giao bài tập mới
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1.25rem;">
        ${assignments.length === 0 ? `
          <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
            Chưa có bài tập nào được giao. Hãy nhấn "Giao bài tập mới" để bắt đầu!
          </div>
        ` : assignments.map(a => {
          const submittedCount = Object.keys(a.submissions || {}).length;
          const totalCount = students.length;
          const rate = totalCount > 0 ? Math.round((submittedCount / totalCount) * 100) : 0;
          const deadlineDate = new Date(a.deadline);
          const deadlineStr = deadlineDate.toLocaleDateString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });

          return `
            <div class="card" style="padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                  <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: #a5b4fc; font-weight: 700; font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 99px;">
                    ${a.subject === 'math' ? '📐 Môn Toán' : a.subject === 'english' ? '🇬🇧 Tiếng Anh' : '📖 Ngữ Văn'}
                  </span>
                  <button class="action-icon-btn btn-delete-asg" data-id="${a.id}" title="Xóa bài tập này" style="color: #f87171;">
                    <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                  </button>
                </div>

                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem; line-height: 1.4;">
                  ${a.title}
                </h4>
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem;">
                  ${a.note || 'Yêu cầu làm bài nghiêm túc và nộp đúng thời hạn.'}
                </p>
                <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 1rem;">
                  Hạn nộp: <strong style="color: var(--text-main);">${deadlineStr}</strong>
                </div>
              </div>

              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.35rem;">
                  <span>Tiến độ nộp bài:</span>
                  <strong>${submittedCount}/${totalCount} học sinh (${rate}%)</strong>
                </div>
                <div class="progress-track" style="height: 6px; border-radius: 99px; background: var(--bg-surface-elevated); overflow: hidden;">
                  <div class="progress-fill" style="width: ${rate}%; height: 100%; background: linear-gradient(90deg, var(--primary), var(--accent-cyan));"></div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Rebind add asg button in this view
    const btnOpenAsg = container.querySelector('#btnOpenAddAssignmentModal');
    if (btnOpenAsg) {
      btnOpenAsg.addEventListener('click', () => this.openAddAssignmentModal());
    }

    container.querySelectorAll('.btn-delete-asg').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        if (confirm('Bạn có chắc muốn xóa bài tập này?')) {
          window.userManager.deleteAssignment(id);
          this.renderAssignmentsList();
          if (window.app) window.app.showToast('Đã xóa bài tập.');
        }
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  openAddAssignmentModal() {
    if (!window.userManager.isAdmin()) {
      alert('Từ chối truy cập: Chỉ Quản trị viên mới có quyền giao bài tập.');
      return;
    }
    const modal = document.getElementById('addAssignmentModal');
    if (!modal) return;

    const selectExam = document.getElementById('selectAssignmentExam');
    if (selectExam) {
      const mathExams = window.MATH_EXAMS || [];
      const litExams = window.LITERATURE_EXAMS || [];
      const engExams = window.ENGLISH_EXAMS || [];

      let optionsHtml = '<option value="">-- Chọn một đề thi từ kho chuẩn tuyển sinh --</option>';

      optionsHtml += '<optgroup label="📐 Đề Thi Môn Toán Học">';
      mathExams.forEach(ex => {
        optionsHtml += `<option value="${ex.id}" data-subject="math">${ex.title}</option>`;
      });
      optionsHtml += '</optgroup>';

      optionsHtml += '<optgroup label="📖 Đề Thi Môn Ngữ Văn">';
      litExams.forEach(ex => {
        optionsHtml += `<option value="${ex.id}" data-subject="literature">${ex.title}</option>`;
      });
      optionsHtml += '</optgroup>';

      optionsHtml += '<optgroup label="🇬🇧 Đề Thi Môn Tiếng Anh">';
      engExams.forEach(ex => {
        optionsHtml += `<option value="${ex.id}" data-subject="english">${ex.title}</option>`;
      });
      optionsHtml += '</optgroup>';

      selectExam.innerHTML = optionsHtml;
    }

    modal.classList.add('active');
    if (window.lucide) window.lucide.createIcons();
  }

  closeAddAssignmentModal() {
    const modal = document.getElementById('addAssignmentModal');
    if (modal) modal.classList.remove('active');
  }

  handleAddAssignmentSubmit(e) {
    e.preventDefault();

    const selectExam = document.getElementById('selectAssignmentExam');
    const examId = selectExam.value;
    if (!examId) {
      alert('Vui lòng chọn đề thi để giao cho học sinh!');
      return;
    }

    const selectedOption = selectExam.options[selectExam.selectedIndex];
    const examTitle = selectedOption.textContent;
    const subject = selectedOption.dataset.subject || 'math';
    const deadline = document.getElementById('inputAssignmentDeadline').value;
    const note = document.getElementById('inputAssignmentNote').value.trim();

    if (!deadline) {
      alert('Vui lòng chọn hạn nộp bài!');
      return;
    }

    try {
      window.userManager.createAssignment({
        title: examTitle,
        examId: examId,
        subject: subject,
        deadline: deadline,
        note: note,
        assignedTo: 'all'
      });

      this.closeAddAssignmentModal();
      this.renderAssignmentsList();
      e.target.reset();

      if (window.app) {
        window.app.showToast('Đã giao bài tập mới cho toàn lớp thành công!');
      }
    } catch (err) {
      alert(err.message);
    }
  }

  // =========================================================
  // CLASS ANALYTICS VIEW
  // =========================================================
  renderClassAnalyticsView(stats) {
    const container = document.getElementById('adminContentArea');
    if (!container) return;

    container.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
        <!-- Grade Distribution Chart Summary -->
        <div class="card" style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="pie-chart" style="color: var(--primary);"></i> Phổ Điểm Xếp Loại Học Lực Lớp 9A1
          </h4>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
                <span style="color: #34d399; font-weight: 700;">🌟 Xuất sắc (>= 8.5)</span>
                <strong>${stats.gradeDistribution.excellent} học sinh</strong>
              </div>
              <div style="height: 8px; border-radius: 99px; background: var(--bg-surface-elevated); overflow: hidden;">
                <div style="width: ${(stats.gradeDistribution.excellent / stats.totalStudents) * 100}%; height: 100%; background: #10b981;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
                <span style="color: #a5b4fc; font-weight: 700;">⚡ Khá giỏi (7.0 - 8.4)</span>
                <strong>${stats.gradeDistribution.good} học sinh</strong>
              </div>
              <div style="height: 8px; border-radius: 99px; background: var(--bg-surface-elevated); overflow: hidden;">
                <div style="width: ${(stats.gradeDistribution.good / stats.totalStudents) * 100}%; height: 100%; background: #6366f1;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
                <span style="color: #fbbf24; font-weight: 700;">🌱 Trung bình (5.0 - 6.9)</span>
                <strong>${stats.gradeDistribution.average} học sinh</strong>
              </div>
              <div style="height: 8px; border-radius: 99px; background: var(--bg-surface-elevated); overflow: hidden;">
                <div style="width: ${(stats.gradeDistribution.average / stats.totalStudents) * 100}%; height: 100%; background: #f59e0b;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
                <span style="color: #f87171; font-weight: 700;">⚠️ Cần kèm cặp (< 5.0)</span>
                <strong>${stats.gradeDistribution.needsSupport} học sinh</strong>
              </div>
              <div style="height: 8px; border-radius: 99px; background: var(--bg-surface-elevated); overflow: hidden;">
                <div style="width: ${(stats.gradeDistribution.needsSupport / stats.totalStudents) * 100}%; height: 100%; background: #ef4444;"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- At Risk Students Alert -->
        <div class="card" style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <h4 style="font-size: 1.05rem; font-weight: 800; color: #f87171; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="alert-triangle"></i> Danh Sách Học Sinh Cần Kèm Cặp Gấp
          </h4>
          ${stats.atRiskStudents.length === 0 ? `
            <div style="padding: 2rem; text-align: center; color: #34d399;">
              🎉 Toàn bộ học sinh trong lớp đều đạt từ mức Khá trở lên!
            </div>
          ` : `
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              ${stats.atRiskStudents.map(s => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; border-radius: var(--radius-md); background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2);">
                  <div>
                    <div style="font-weight: 700; color: var(--text-main); font-size: 0.9rem;">${s.name} (${s.studentCode})</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">ĐTB: <strong style="color: #f87171;">${s.overallAvg}đ</strong> • NV1: ${s.targetSchool} (${s.benchmarkScore}đ)</div>
                  </div>
                  <button class="btn btn-secondary btn-sm" onclick="window.adminController.openStudentDetailModal('${s.id}')" style="font-size: 0.75rem;">
                    Kế hoạch phụ đạo
                  </button>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  // =========================================================
  // STUDENT PORTAL RENDERING
  // =========================================================
  renderStudentPortal() {
    const container = document.getElementById('studentPortalContentArea');
    if (!container) return;

    const user = window.userManager.getCurrentUser();

    // If not logged in
    if (!user) {
      container.innerHTML = `
        <div style="padding: 4rem 2rem; text-align: center; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎓</div>
          <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.5rem;">Cổng Tiến Trình Học Sinh</h3>
          <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 480px; margin: 0 auto 1.5rem auto;">
            Vui lòng đăng nhập bằng tài khoản học sinh do Giáo viên cấp để theo dõi mục tiêu điểm số vào 10, làm bài tập về nhà và xem nhận xét.
          </p>
          <button class="btn btn-primary" onclick="window.adminController.openLoginModal()">
            <i data-lucide="log-in"></i> Đăng nhập ngay
          </button>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    // If user is Admin viewing student portal, select first student or default
    let student = user.role === 'student' ? 
      window.userManager.getStudentById(user.studentId || user.id) : 
      window.userManager.getAllStudents()[0];

    if (!student) {
      container.innerHTML = `
        <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
          Không tìm thấy hồ sơ học sinh tương ứng.
        </div>
      `;
      return;
    }

    const assignments = window.userManager.getAllAssignments();
    const isTargetMet = (student.overallAvg * 3) >= student.benchmarkScore;
    const diff = Math.round(((student.overallAvg * 3) - student.benchmarkScore) * 10) / 10;

    container.innerHTML = `
      <!-- Student Top Header Banner -->
      <div class="hero-banner" style="margin-bottom: 1.5rem; min-height: auto; padding: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; flex-wrap: wrap; gap: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 1.25rem;">
            <span style="font-size: 3rem; width: 72px; height: 72px; border-radius: 50%; background: var(--bg-surface); display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-md);">${student.avatar || '👨‍🎓'}</span>
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-main);">${student.name}</h2>
                <span class="badge" style="background: rgba(16, 185, 129, 0.2); color: #34d399; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: 99px;">Lớp ${student.class}</span>
                <span class="badge" style="background: rgba(99, 102, 241, 0.2); color: #a5b4fc; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: 99px;">Tài khoản: ${student.username || student.studentCode}</span>
              </div>
              <p style="font-size: 0.95rem; color: var(--text-muted); margin-top: 0.35rem;">
                Mục tiêu tuyển sinh: <strong style="color: var(--text-main);">${student.targetSchool}</strong> (Điểm chuẩn dự kiến: <strong style="color: #a855f7;">${student.benchmarkScore} điểm</strong>)
              </p>
            </div>
          </div>

          <!-- Target Score Forecast Widget -->
          <div style="background: var(--bg-surface); padding: 1.25rem 1.75rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle); text-align: center; min-width: 200px;">
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">Dự Báo Điểm 3 Môn</div>
            <div style="font-size: 2rem; font-weight: 800; color: ${isTargetMet ? '#10b981' : '#f59e0b'}; margin: 0.2rem 0;">
              ${(student.overallAvg * 3).toFixed(1)} / 30đ
            </div>
            <div style="font-size: 0.8rem; font-weight: 700; color: ${isTargetMet ? '#10b981' : '#f87171'};">
              ${isTargetMet ? '✨ Đạt mục tiêu NV1' : 'Cần cố thêm'} (${diff >= 0 ? '+' : ''}${diff}đ)
            </div>
          </div>
        </div>
      </div>

      <!-- 3 Subject Metric Grid -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; margin-bottom: 1.75rem;" class="student-metric-grid">
        <div class="card" style="padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <span style="font-size: 0.82rem; font-weight: 700; color: #60a5fa; text-transform: uppercase;">Môn Toán Học</span>
            <span style="font-size: 1.3rem;">📐</span>
          </div>
          <div style="font-size: 2rem; font-weight: 800; color: #3b82f6;">${student.mathAvg || 0}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Học lực môn: ${student.mathAvg >= 8 ? 'Giỏi' : student.mathAvg >= 6.5 ? 'Khá' : 'Trung bình'}</div>
        </div>

        <div class="card" style="padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <span style="font-size: 0.82rem; font-weight: 700; color: #f472b6; text-transform: uppercase;">Môn Ngữ Văn</span>
            <span style="font-size: 1.3rem;">📖</span>
          </div>
          <div style="font-size: 2rem; font-weight: 800; color: #ec4899;">${student.literatureAvg || 0}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Học lực môn: ${student.literatureAvg >= 8 ? 'Giỏi' : student.literatureAvg >= 6.5 ? 'Khá' : 'Trung bình'}</div>
        </div>

        <div class="card" style="padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <span style="font-size: 0.82rem; font-weight: 700; color: #34d399; text-transform: uppercase;">Môn Tiếng Anh</span>
            <span style="font-size: 1.3rem;">🇬🇧</span>
          </div>
          <div style="font-size: 2rem; font-weight: 800; color: #10b981;">${student.englishAvg || 0}</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Học lực môn: ${student.englishAvg >= 8 ? 'Giỏi' : student.englishAvg >= 6.5 ? 'Khá' : 'Trung bình'}</div>
        </div>
      </div>

      <!-- Pending Assignments Assigned by Teacher -->
      <div style="margin-bottom: 2rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="bell" style="color: var(--primary);"></i> Nhiệm Vụ Giáo Viên Giao Cho Bạn
          </h3>
          <span style="font-size: 0.82rem; color: var(--text-muted);">Hoàn thành đúng hạn để giáo viên chấm và nhận xét</span>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1.25rem;">
          ${assignments.map(a => {
            const isSubmitted = a.submissions && a.submissions[student.id] && a.submissions[student.id].submitted;
            const subScore = isSubmitted ? a.submissions[student.id].score : null;
            const deadlineDate = new Date(a.deadline);
            const deadlineStr = deadlineDate.toLocaleDateString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' });

            return `
              <div class="card" style="padding: 1.25rem; background: var(--bg-surface); border: 1px solid ${isSubmitted ? 'rgba(16, 185, 129, 0.4)' : 'var(--border-subtle)'}; border-radius: var(--radius-lg); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: #a5b4fc; font-weight: 700; font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 99px;">
                      ${a.subject === 'math' ? 'Toán Học' : a.subject === 'english' ? 'Tiếng Anh' : 'Ngữ Văn'}
                    </span>
                    <span style="font-size: 0.78rem; color: ${isSubmitted ? '#10b981' : '#f59e0b'}; font-weight: 700;">
                      ${isSubmitted ? `✓ Đã nộp (${subScore}đ)` : '⏳ Chưa hoàn thành'}
                    </span>
                  </div>

                  <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.4rem; line-height: 1.4;">
                    ${a.title}
                  </h4>
                  <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem;">
                    ${a.note || 'Làm bài và nộp bài trước hạn chót.'}
                  </p>
                  <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 1rem;">
                    Hạn nộp: <strong style="color: var(--text-main);">${deadlineStr}</strong>
                  </div>
                </div>

                <div>
                  ${isSubmitted ? `
                    <button class="btn btn-secondary btn-sm" style="width: 100%;" disabled>
                      <i data-lucide="check-circle-2"></i> Đã hoàn thành xuất sắc
                    </button>
                  ` : `
                    <button class="btn btn-primary btn-sm btn-start-asg-exam" data-exam-id="${a.examId}" style="width: 100%;">
                      <i data-lucide="play-circle"></i> Bắt đầu làm bài ngay
                    </button>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Teacher Feedback & Action Plan -->
      <div class="card" style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); margin-bottom: 2rem;">
        <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="message-square" style="color: var(--primary);"></i> Lời Khuyên & Nhận Xét Của Giáo Viên Chủ Nhiệm
        </h4>
        <div style="padding: 1rem; border-radius: var(--radius-md); background: rgba(99, 102, 241, 0.08); border-left: 4px solid var(--primary); font-size: 0.92rem; line-height: 1.6; color: var(--text-main);">
          "${student.notes || 'Em đang có lộ trình ôn luyện rất tốt. Hãy tiếp tục duy trì chuỗi ngày học tập và chú ý làm lại các câu sai trong sổ tay lỗi sai.'}"
        </div>
        <div style="margin-top: 0.75rem; font-size: 0.78rem; color: var(--text-muted); text-align: right;">
          — ThS. Nguyễn Mai Anh (Giáo viên chủ nhiệm 9A1)
        </div>
      </div>

      <!-- Exam History Table -->
      <div class="card" style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
        <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <i data-lucide="award" style="color: #f59e0b;"></i> Lịch Sử Luyện Đề Cá Nhân (${(student.examHistory || []).length} đề đã thi)
        </h4>

        ${(student.examHistory || []).length === 0 ? `
          <div style="padding: 2.5rem; text-align: center; color: var(--text-muted);">
            Bạn chưa thi thử đề nào. Hãy vào kho đề để chọn bài thi đầu tiên!
          </div>
        ` : `
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;">
              <thead>
                <tr style="background: var(--bg-surface-elevated); border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.78rem; text-transform: uppercase;">
                  <th style="padding: 0.75rem 1rem;">Ngày Làm</th>
                  <th style="padding: 0.75rem 1rem;">Tên Đề Thi</th>
                  <th style="padding: 0.75rem 1rem; text-align: center;">Môn</th>
                  <th style="padding: 0.75rem 1rem; text-align: center;">Điểm Số</th>
                  <th style="padding: 0.75rem 1rem; text-align: center;">Số Câu Đúng</th>
                  <th style="padding: 0.75rem 1rem; text-align: right;">Thời Gian</th>
                </tr>
              </thead>
              <tbody>
                ${student.examHistory.map(h => `
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 0.75rem 1rem; font-family: var(--font-mono); color: var(--text-muted);">${h.date}</td>
                    <td style="padding: 0.75rem 1rem; font-weight: 600; color: var(--text-main);">${h.title}</td>
                    <td style="padding: 0.75rem 1rem; text-align: center;">
                      <span style="font-size: 0.78rem; font-weight: 700; color: ${h.subject === 'math' ? '#60a5fa' : h.subject === 'english' ? '#34d399' : '#f472b6'};">
                        ${h.subject === 'math' ? 'Toán' : h.subject === 'english' ? 'Anh' : 'Văn'}
                      </span>
                    </td>
                    <td style="padding: 0.75rem 1rem; text-align: center; font-size: 1rem; font-weight: 800; color: ${h.score >= 8 ? '#10b981' : h.score >= 6.5 ? 'var(--primary)' : '#f87171'};">
                      ${h.score}
                    </td>
                    <td style="padding: 0.75rem 1rem; text-align: center; color: var(--text-muted);">
                      ${h.correctCount}/${h.totalQuestions}
                    </td>
                    <td style="padding: 0.75rem 1rem; text-align: right; color: var(--text-muted);">
                      ${h.timeSpent || '60 phút'}
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>
    `;

    // Bind start assignment exam buttons
    container.querySelectorAll('.btn-start-asg-exam').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const examId = e.currentTarget.dataset.examId;
        const allExams = [
          ...(window.MATH_EXAMS || []),
          ...(window.LITERATURE_EXAMS || []),
          ...(window.ENGLISH_EXAMS || [])
        ];
        const exam = allExams.find(ex => ex.id === examId);
        if (exam && window.examEngine) {
          window.examEngine.startExam(exam, 'exam');
        } else if (window.app) {
          window.app.switchTab('exams-list');
        }
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }
}

window.adminController = new AdminController();
