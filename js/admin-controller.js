// =========================================================
// EDUPASS 10 - ADMIN & STUDENT PORTAL CONTROLLER
// UI Views, Tables, Modals, Progress Tracking & Reports
// =========================================================

class AdminController {
  constructor() {
    this.currentViewMode = 'roster'; // roster, assignments, analytics, reports
    this.selectedStudentId = null;
    this.studentSearchQuery = '';
    this.studentFilterStatus = 'all';

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Header user switcher button
    const userBtn = document.getElementById('headerUserBadgeBtn');
    if (userBtn) {
      userBtn.addEventListener('click', () => this.openUserSwitcherModal());
    }

    // Role switcher modal buttons
    const closeSwitcherBtn = document.getElementById('btnCloseUserSwitcher');
    if (closeSwitcherBtn) {
      closeSwitcherBtn.addEventListener('click', () => this.closeUserSwitcherModal());
    }

    // Student detail modal close
    const closeDetailBtn = document.getElementById('btnCloseStudentDetailModal');
    if (closeDetailBtn) {
      closeDetailBtn.addEventListener('click', () => this.closeStudentDetailModal());
    }

    // Add student modal
    const btnOpenAddStudent = document.getElementById('btnOpenAddStudentModal');
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
        window.userManager.exportStudentsCSV();
        if (window.app) window.app.showToast('Đã xuất danh sách học sinh ra file CSV thành công!');
      });
    }

    const btnBackupJSON = document.getElementById('btnAdminBackupJSON');
    if (btnBackupJSON) {
      btnBackupJSON.addEventListener('click', () => {
        window.userManager.exportBackupJSON();
        if (window.app) window.app.showToast('Đã sao lưu dữ liệu toàn hệ thống thành công!');
      });
    }

    const btnRestoreJSON = document.getElementById('btnAdminRestoreJSON');
    const inputRestoreFile = document.getElementById('inputRestoreJSONFile');
    if (btnRestoreJSON && inputRestoreFile) {
      btnRestoreJSON.addEventListener('click', () => inputRestoreFile.click());
      inputRestoreFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const res = window.userManager.importBackupJSON(event.target.result);
            if (res.success) {
              this.renderAdminPortal();
              if (window.app) window.app.showToast(`Đã phục hồi thành công ${res.count} hồ sơ học sinh!`);
            } else {
              alert('Lỗi phục hồi dữ liệu: ' + res.message);
            }
          };
          reader.readAsText(file);
        }
      });
    }

    const btnResetSample = document.getElementById('btnAdminResetSample');
    if (btnResetSample) {
      btnResetSample.addEventListener('click', () => {
        if (confirm('Khôi phục danh sách Lớp 9A1 mẫu ban đầu (10 học sinh với dữ liệu đầy đủ)?')) {
          window.userManager.resetToDefault();
          this.renderAdminPortal();
          if (window.app) window.app.showToast('Đã khôi phục dữ liệu Lớp 9A1 mẫu thành công!');
        }
      });
    }

    // Print class report
    const btnPrintClassReport = document.getElementById('btnPrintClassReport');
    if (btnPrintClassReport) {
      btnPrintClassReport.addEventListener('click', () => window.print());
    }
  }

  // =========================================================
  // ADMIN PORTAL RENDERING
  // =========================================================
  renderAdminPortal() {
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
        <i data-lucide="users"></i> Danh sách học sinh (${window.userManager.getAllStudents().length})
      </button>
      <button class="filter-chip ${this.currentViewMode === 'assignments' ? 'active' : ''}" data-view="assignments">
        <i data-lucide="clipboard-list"></i> Giao đề & Nhiệm vụ (${window.userManager.getAllAssignments().length})
      </button>
      <button class="filter-chip ${this.currentViewMode === 'analytics' ? 'active' : ''}" data-view="analytics">
        <i data-lucide="pie-chart"></i> Phân tích lớp & Dự báo
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
  // STUDENT ROSTER TABLE
  // =========================================================
  renderStudentRosterTable() {
    const container = document.getElementById('adminContentArea');
    if (!container) return;

    let students = window.userManager.getAllStudents();

    // Filter by query
    if (this.studentSearchQuery) {
      const q = this.studentSearchQuery.toLowerCase();
      students = students.filter(s => 
        s.name.toLowerCase().includes(q) || 
        s.studentCode.toLowerCase().includes(q) || 
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
            <input type="text" id="adminStudentSearchInput" placeholder="Tìm kiếm theo tên, mã HS hoặc trường mục tiêu..." 
                   value="${this.studentSearchQuery}"
                   style="width: 100%; padding: 0.65rem 0.75rem 0.65rem 2.25rem; border-radius: var(--radius-md); background: var(--bg-surface); border: 1px solid var(--border-subtle); color: var(--text-main); font-size: 0.88rem;">
          </div>
          <select id="adminStudentStatusSelect" style="padding: 0.65rem 1rem; border-radius: var(--radius-md); background: var(--bg-surface); border: 1px solid var(--border-subtle); color: var(--text-main); font-size: 0.88rem;">
            <option value="all" ${this.studentFilterStatus === 'all' ? 'selected' : ''}>Tất cả xếp loại</option>
            <option value="excellent" ${this.studentFilterStatus === 'excellent' ? 'selected' : ''}>🌟 Xuất sắc (>= 8.5)</option>
            <option value="good" ${this.studentFilterStatus === 'good' ? 'selected' : ''}>⚡ Khá giỏi (7.0 - 8.4)</option>
            <option value="average" ${this.studentFilterStatus === 'average' ? 'selected' : ''}>🌱 Trung bình (5.0 - 6.9)</option>
            <option value="needs_support" ${this.studentFilterStatus === 'needs_support' ? 'selected' : ''}>⚠️ Cần hỗ trợ (< 5.0)</option>
          </select>
        </div>

        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn btn-primary btn-sm" id="btnOpenAddStudentModal">
            <i data-lucide="user-plus"></i> Thêm học sinh
          </button>
          <button class="btn btn-secondary btn-sm" id="btnAdminExportCSV" title="Xuất file CSV danh sách học sinh">
            <i data-lucide="download"></i> Xuất Excel
          </button>
        </div>
      </div>

      <div class="table-responsive-wrapper" style="overflow-x: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); background: var(--bg-surface);">
        <table class="admin-student-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.88rem;">
          <thead>
            <tr style="background: var(--bg-surface-elevated); border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.04em;">
              <th style="padding: 1rem 1.25rem;">Học Sinh</th>
              <th style="padding: 1rem;">Mục Tiêu Vào 10</th>
              <th style="padding: 1rem; text-align: center;">Toán</th>
              <th style="padding: 1rem; text-align: center;">Ngữ Văn</th>
              <th style="padding: 1rem; text-align: center;">Tiếng Anh</th>
              <th style="padding: 1rem; text-align: center;">ĐTB Chung</th>
              <th style="padding: 1rem; text-align: center;">Số Đề Thi</th>
              <th style="padding: 1rem; text-align: center;">Xếp Loại</th>
              <th style="padding: 1rem; text-align: right;">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            ${students.length === 0 ? `
              <tr>
                <td colspan="9" style="padding: 3rem; text-align: center; color: var(--text-muted);">
                  <i data-lucide="user-x" style="width: 36px; height: 36px; stroke-width: 1.5; margin-bottom: 0.5rem; opacity: 0.5;"></i>
                  <div>Không tìm thấy học sinh nào phù hợp với điều kiện tìm kiếm.</div>
                </td>
              </tr>
            ` : students.map(s => {
              const statusPill = s.status === 'excellent' ? 
                `<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 99px;">Xuất sắc</span>` :
                s.status === 'good' ?
                `<span class="badge" style="background: rgba(99, 102, 241, 0.15); color: #a5b4fc; border: 1px solid rgba(99, 102, 241, 0.3); font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 99px;">Khá giỏi</span>` :
                s.status === 'average' ?
                `<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 99px;">Trung bình</span>` :
                `<span class="badge" style="background: rgba(239, 68, 68, 0.15); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.3); font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 99px;">Cần kèm cặp</span>`;

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
                    <div style="font-size: 0.82rem; font-weight: 600; color: var(--text-main); max-width: 220px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${s.targetSchool}">
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
                  <td style="padding: 0.9rem 1rem; text-align: center; font-weight: 600; color: var(--text-muted);">
                    ${s.examsCompleted} đề
                  </td>
                  <td style="padding: 0.9rem 1rem; text-align: center;">
                    ${statusPill}
                  </td>
                  <td style="padding: 0.9rem 1.25rem; text-align: right;">
                    <div style="display: flex; align-items: center; justify-content: flex-end; gap: 0.35rem;">
                      <button class="btn btn-primary btn-sm btn-view-student" data-id="${s.id}" style="padding: 0.4rem 0.75rem; font-size: 0.78rem;">
                        <i data-lucide="bar-chart-2"></i> Tiến trình
                      </button>
                      <button class="btn btn-secondary btn-sm btn-delete-student" data-id="${s.id}" data-name="${s.name}" title="Xóa học sinh" style="padding: 0.4rem 0.5rem; color: #f87171; border-color: rgba(239, 68, 68, 0.3);">
                        <i data-lucide="trash-2"></i>
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

    // Bind search & filter inputs
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

    // Bind action buttons
    container.querySelectorAll('.btn-view-student').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        this.openStudentDetailModal(id);
      });
    });

    container.querySelectorAll('.btn-delete-student').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const name = e.currentTarget.dataset.name;
        if (confirm(`Bạn có chắc muốn xóa học sinh "${name}" (${id}) khỏi danh sách?`)) {
          window.userManager.deleteStudent(id);
          this.renderAdminPortal();
          if (window.app) window.app.showToast(`Đã xóa học sinh ${name}.`);
        }
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // =========================================================
  // ASSIGNMENTS MANAGEMENT VIEW
  // =========================================================
  renderAssignmentsList() {
    const container = document.getElementById('adminContentArea');
    if (!container) return;

    const assignments = window.userManager.getAllAssignments();
    const students = window.userManager.getAllStudents();

    container.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main);">Nhiệm Vụ & Bộ Đề Giao Về Nhà</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Giao bộ đề tuyển sinh cho toàn lớp hoặc từng học sinh có thời hạn cụ thể.</p>
        </div>
        <button class="btn btn-primary" id="btnOpenAddAssignmentModal">
          <i data-lucide="plus-circle"></i> Giao bộ đề mới
        </button>
      </div>

      <div class="assignments-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 1.25rem;">
        ${assignments.length === 0 ? `
          <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; background: var(--bg-surface); border: 1px dashed var(--border-subtle); border-radius: var(--radius-lg); color: var(--text-muted);">
            <i data-lucide="clipboard-x" style="width: 48px; height: 48px; stroke-width: 1.5; margin-bottom: 0.75rem; opacity: 0.5;"></i>
            <div style="font-size: 1rem; font-weight: 700; color: var(--text-main);">Chưa có bài tập nào được giao</div>
            <p style="font-size: 0.85rem; margin-top: 0.25rem;">Hãy bấm "Giao bộ đề mới" để tạo bài kiểm tra cho học sinh trong lớp.</p>
          </div>
        ` : assignments.map(a => {
          const subCount = Object.keys(a.submissions || {}).length;
          const targetCount = a.assignedTo === 'all' ? students.length : (Array.isArray(a.assignedTo) ? a.assignedTo.length : 1);
          const pct = targetCount > 0 ? Math.round((subCount / targetCount) * 100) : 0;
          const deadlineDate = new Date(a.deadline);
          const deadlineStr = deadlineDate.toLocaleDateString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });
          const isOverdue = deadlineDate < new Date();

          return `
            <div class="card" style="padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.75rem;">
                  <span class="badge" style="background: ${a.subject === 'math' ? 'rgba(59, 130, 246, 0.15)' : a.subject === 'english' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(236, 72, 153, 0.15)'}; color: ${a.subject === 'math' ? '#60a5fa' : a.subject === 'english' ? '#34d399' : '#f472b6'}; font-weight: 700; font-size: 0.75rem; padding: 0.25rem 0.65rem; border-radius: 99px;">
                    ${a.subject === 'math' ? 'Toán Học' : a.subject === 'english' ? 'Tiếng Anh' : 'Ngữ Văn'}
                  </span>
                  <button class="btn-icon btn-delete-asg" data-id="${a.id}" title="Xóa bài tập này" style="color: #f87171; background: transparent; border: none; cursor: pointer; padding: 4px;">
                    <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
                  </button>
                </div>

                <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; line-height: 1.4;">
                  ${a.title}
                </h4>

                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem; line-height: 1.5;">
                  ${a.note || 'Yêu cầu làm bài nghiêm túc, tự bấm giờ theo đúng quy định.'}
                </p>

                <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.78rem; color: ${isOverdue ? '#f87171' : 'var(--text-muted)'}; margin-bottom: 1rem;">
                  <i data-lucide="clock" style="width: 14px; height: 14px;"></i>
                  <span>Hạn chót: <strong>${deadlineStr}</strong> ${isOverdue ? '(Đã hết hạn)' : ''}</span>
                </div>
              </div>

              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.35rem;">
                  <span>Tiến độ nộp bài</span>
                  <span>${subCount}/${targetCount} học sinh (${pct}%)</span>
                </div>
                <div style="height: 6px; border-radius: 99px; background: var(--bg-surface-elevated); overflow: hidden; margin-bottom: 1rem;">
                  <div style="height: 100%; width: ${pct}%; background: ${pct === 100 ? '#10b981' : 'var(--primary)'}; border-radius: 99px;"></div>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.78rem; color: var(--text-muted);">
                  <span>Giao bởi: <strong>${a.assignedBy}</strong></span>
                  <span style="font-weight: 600; color: var(--primary);">
                    ${a.assignedTo === 'all' ? 'Toàn lớp 9A1' : 'Học sinh chỉ định'}
                  </span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Bind delete assignment
    container.querySelectorAll('.btn-delete-asg').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        if (confirm('Bạn có chắc muốn xóa bài tập được giao này không?')) {
          window.userManager.deleteAssignment(id);
          this.renderAssignmentsList();
          if (window.app) window.app.showToast('Đã xóa bài tập được giao.');
        }
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // =========================================================
  // CLASS ANALYTICS VIEW
  // =========================================================
  renderClassAnalyticsView(stats) {
    const container = document.getElementById('adminContentArea');
    if (!container) return;

    const students = window.userManager.getAllStudents();
    const mathAvg = students.length ? Math.round((students.reduce((a, b) => a + (b.mathAvg || 0), 0) / students.length) * 10) / 10 : 0;
    const litAvg = students.length ? Math.round((students.reduce((a, b) => a + (b.literatureAvg || 0), 0) / students.length) * 10) / 10 : 0;
    const engAvg = students.length ? Math.round((students.reduce((a, b) => a + (b.englishAvg || 0), 0) / students.length) * 10) / 10 : 0;

    container.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;" class="analytics-row">
        <!-- Subject Performance Card -->
        <div class="card" style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="bar-chart" style="color: var(--primary);"></i> Phổ Điểm Trung Bình 3 Môn Của Lớp
          </h4>

          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.88rem; font-weight: 700; margin-bottom: 0.4rem;">
                <span style="color: #60a5fa;">Môn Toán Học</span>
                <span>${mathAvg} / 10.0</span>
              </div>
              <div style="height: 10px; border-radius: 99px; background: var(--bg-surface-elevated); overflow: hidden;">
                <div style="height: 100%; width: ${mathAvg * 10}%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 99px;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.88rem; font-weight: 700; margin-bottom: 0.4rem;">
                <span style="color: #f472b6;">Môn Ngữ Văn</span>
                <span>${litAvg} / 10.0</span>
              </div>
              <div style="height: 10px; border-radius: 99px; background: var(--bg-surface-elevated); overflow: hidden;">
                <div style="height: 100%; width: ${litAvg * 10}%; background: linear-gradient(90deg, #ec4899, #f472b6); border-radius: 99px;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.88rem; font-weight: 700; margin-bottom: 0.4rem;">
                <span style="color: #34d399;">Môn Tiếng Anh</span>
                <span>${engAvg} / 10.0</span>
              </div>
              <div style="height: 10px; border-radius: 99px; background: var(--bg-surface-elevated); overflow: hidden;">
                <div style="height: 100%; width: ${engAvg * 10}%; background: linear-gradient(90deg, #10b981, #34d399); border-radius: 99px;"></div>
              </div>
            </div>
          </div>

          <div style="margin-top: 1.5rem; padding: 0.85rem; border-radius: var(--radius-md); background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.2); font-size: 0.82rem; color: var(--text-muted); line-height: 1.5;">
            💡 <strong>Nhận định chuyên môn:</strong> Môn ${mathAvg <= litAvg && mathAvg <= engAvg ? 'Toán Học' : litAvg <= engAvg ? 'Ngữ Văn' : 'Tiếng Anh'} hiện đang có điểm trung bình thấp nhất. Khuyến nghị giáo viên tăng cường giao đề chuyên đề thực tế cho học sinh.
          </div>
        </div>

        <!-- Grade Distribution Card -->
        <div class="card" style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="pie-chart" style="color: #10b981;"></i> Phân Bố Học Lực Lớp 9A1
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div style="padding: 1rem; border-radius: var(--radius-md); background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2);">
              <div style="font-size: 1.5rem; font-weight: 800; color: #10b981;">${stats.gradeDistribution.excellent} HS</div>
              <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-main); margin-top: 0.2rem;">Xuất sắc (>= 8.5)</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Sẵn sàng vào trường Top 1 & Chuyên</div>
            </div>

            <div style="padding: 1rem; border-radius: var(--radius-md); background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.2);">
              <div style="font-size: 1.5rem; font-weight: 800; color: var(--primary);">${stats.gradeDistribution.good} HS</div>
              <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-main); margin-top: 0.2rem;">Khá giỏi (7.0 - 8.4)</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Khả năng đỗ NV1 cao</div>
            </div>

            <div style="padding: 1rem; border-radius: var(--radius-md); background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.2);">
              <div style="font-size: 1.5rem; font-weight: 800; color: #f59e0b;">${stats.gradeDistribution.average} HS</div>
              <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-main); margin-top: 0.2rem;">Trung bình (5.0 - 6.9)</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Cần luyện thêm tốc độ</div>
            </div>

            <div style="padding: 1rem; border-radius: var(--radius-md); background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.2);">
              <div style="font-size: 1.5rem; font-weight: 800; color: #ef4444;">${stats.gradeDistribution.needsSupport} HS</div>
              <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-main); margin-top: 0.2rem;">Cần kèm cặp (< 5.0)</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Có nguy cơ trượt nguyện vọng</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Students & At Risk Students Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;" class="analytics-row">
        <!-- Top 3 Students -->
        <div class="card" style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <h4 style="font-size: 1.1rem; font-weight: 700; color: #f59e0b; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="trophy"></i> Bảng Vàng Top 3 Điểm Số Cao Nhất Lớp
          </h4>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${stats.topStudents.map((s, idx) => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; border-radius: var(--radius-md); background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <span style="font-size: 1.25rem; font-weight: 800; color: ${idx === 0 ? '#f59e0b' : idx === 1 ? '#94a3b8' : '#b45309'}; width: 24px; text-align: center;">
                    #${idx + 1}
                  </span>
                  <span style="font-size: 1.3rem;">${s.avatar || '👨‍🎓'}</span>
                  <div>
                    <div style="font-weight: 700; color: var(--text-main);">${s.name}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted);">${s.targetSchool}</div>
                  </div>
                </div>
                <div style="text-align: right;">
                  <div style="font-size: 1.1rem; font-weight: 800; color: #10b981;">${s.overallAvg} đ</div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">${s.examsCompleted} đề thi</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- At-Risk Students -->
        <div class="card" style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
          <h4 style="font-size: 1.1rem; font-weight: 700; color: #ef4444; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="alert-circle"></i> Học Sinh Cần Chú Ý & Hỗ Trợ Đặc Biệt
          </h4>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${stats.atRiskStudents.length === 0 ? `
              <div style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
                🎉 Tuyệt vời! Hiện tại không có học sinh nào trong diện báo động.
              </div>
            ` : stats.atRiskStudents.map(s => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; border-radius: var(--radius-md); background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2);">
                <div style="display: flex; align-items: center; gap: 0.75rem;">
                  <span style="font-size: 1.3rem;">${s.avatar || '👦'}</span>
                  <div>
                    <div style="font-weight: 700; color: var(--text-main);">${s.name}</div>
                    <div style="font-size: 0.75rem; color: #f87171;">Mục tiêu: ${s.targetSchool} (${s.benchmarkScore}đ)</div>
                  </div>
                </div>
                <div style="text-align: right;">
                  <div style="font-size: 1.05rem; font-weight: 800; color: #ef4444;">${s.overallAvg} đ</div>
                  <button class="btn btn-primary btn-sm btn-view-student" data-id="${s.id}" style="margin-top: 0.25rem; padding: 0.2rem 0.5rem; font-size: 0.72rem;">
                    Kế hoạch kèm
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.btn-view-student').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        this.openStudentDetailModal(id);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // =========================================================
  // STUDENT DETAIL / PROGRESS INSPECTOR MODAL
  // =========================================================
  openStudentDetailModal(studentId) {
    this.selectedStudentId = studentId;
    const student = window.userManager.getStudentById(studentId);
    if (!student) return;

    const modal = document.getElementById('studentDetailModal');
    if (!modal) return;

    const modalBody = document.getElementById('studentDetailModalBody');
    if (modalBody) {
      const isTargetPassed = (student.overallAvg * 3) >= student.benchmarkScore;
      const diffScore = Math.round(((student.overallAvg * 3) - student.benchmarkScore) * 10) / 10;

      modalBody.innerHTML = `
        <!-- Student Header Card -->
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1.25rem; border-radius: var(--radius-lg); background: var(--bg-surface-elevated); margin-bottom: 1.25rem; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-size: 2.25rem; width: 56px; height: 56px; border-radius: 50%; background: var(--bg-surface); display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm);">${student.avatar || '👨‍🎓'}</span>
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-main);">${student.name}</h3>
                <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: #a5b4fc; font-weight: 700; font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 99px;">${student.studentCode}</span>
              </div>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.2rem;">
                Lớp ${student.class} • SĐT: ${student.phone || 'Chưa cập nhật'} • Phụ huynh: ${student.parentPhone || 'Chưa cập nhật'}
              </div>
            </div>
          </div>

          <div style="text-align: right; background: var(--bg-surface); padding: 0.75rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Dự Báo Tuyển Sinh Vào 10</div>
            <div style="font-size: 1.1rem; font-weight: 800; color: ${isTargetPassed ? '#10b981' : '#f87171'};">
              ${isTargetPassed ? '✅ Khả năng đỗ cao' : '⚠️ Cần tăng tốc'} (${diffScore >= 0 ? '+' : ''}${diffScore}đ)
            </div>
            <div style="font-size: 0.75rem; color: var(--text-dim);">${student.targetSchool} (Chuẩn: ${student.benchmarkScore}đ)</div>
          </div>
        </div>

        <!-- 3 Subject Breakdown Metric Pills -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
          <div style="padding: 1rem; border-radius: var(--radius-md); background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.2); text-align: center;">
            <div style="font-size: 0.78rem; font-weight: 700; color: #60a5fa; text-transform: uppercase;">Môn Toán Học</div>
            <div style="font-size: 1.6rem; font-weight: 800; color: #3b82f6; margin: 0.25rem 0;">${student.mathAvg || 0}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Hệ số x1</div>
          </div>

          <div style="padding: 1rem; border-radius: var(--radius-md); background: rgba(236, 72, 153, 0.08); border: 1px solid rgba(236, 72, 153, 0.2); text-align: center;">
            <div style="font-size: 0.78rem; font-weight: 700; color: #f472b6; text-transform: uppercase;">Môn Ngữ Văn</div>
            <div style="font-size: 1.6rem; font-weight: 800; color: #ec4899; margin: 0.25rem 0;">${student.literatureAvg || 0}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Hệ số x1</div>
          </div>

          <div style="padding: 1rem; border-radius: var(--radius-md); background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); text-align: center;">
            <div style="font-size: 0.78rem; font-weight: 700; color: #34d399; text-transform: uppercase;">Môn Tiếng Anh</div>
            <div style="font-size: 1.6rem; font-weight: 800; color: #10b981; margin: 0.25rem 0;">${student.englishAvg || 0}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Hệ số x1</div>
          </div>
        </div>

        <!-- Teacher Notes Section -->
        <div style="margin-bottom: 1.5rem; background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <label style="font-size: 0.88rem; font-weight: 700; color: var(--text-main); display: flex; align-items: center; gap: 0.5rem;">
              <i data-lucide="edit-3" style="width: 16px; height: 16px; color: var(--primary);"></i>
              Nhận Xét & Định Hướng Kèm Cặp Của Giáo Viên
            </label>
            <button class="btn btn-secondary btn-sm" id="btnSaveTeacherNote" style="font-size: 0.75rem; padding: 0.3rem 0.65rem;">
              <i data-lucide="save"></i> Lưu nhận xét
            </button>
          </div>
          <textarea id="inputTeacherNote" rows="3" placeholder="Nhập nhận xét về điểm mạnh, lỗ hổng kiến thức và lời khuyên dành cho học sinh này..."
                    style="width: 100%; padding: 0.75rem; border-radius: var(--radius-sm); background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); color: var(--text-main); font-size: 0.88rem; line-height: 1.5; resize: vertical;">${student.notes || ''}</textarea>
        </div>

        <!-- Exam History List of this Student -->
        <div>
          <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <i data-lucide="history" style="color: var(--primary);"></i> Lịch Sử Làm Bài Thi Của Học Sinh (${(student.examHistory || []).length} đề)
          </h4>

          ${(student.examHistory || []).length === 0 ? `
            <div style="padding: 2rem; text-align: center; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-subtle);">
              Học sinh chưa hoàn thành bài thi thử nào trên hệ thống.
            </div>
          ` : `
            <div style="max-height: 240px; overflow-y: auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); background: var(--bg-surface);">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.84rem; text-align: left;">
                <thead>
                  <tr style="background: var(--bg-surface-elevated); border-bottom: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase;">
                    <th style="padding: 0.6rem 1rem;">Ngày Làm</th>
                    <th style="padding: 0.6rem 1rem;">Tên Đề Thi</th>
                    <th style="padding: 0.6rem 1rem; text-align: center;">Môn</th>
                    <th style="padding: 0.6rem 1rem; text-align: center;">Điểm Số</th>
                    <th style="padding: 0.6rem 1rem; text-align: center;">Đúng/Tổng</th>
                    <th style="padding: 0.6rem 1rem; text-align: right;">Thời Gian</th>
                  </tr>
                </thead>
                <tbody>
                  ${student.examHistory.map(h => `
                    <tr style="border-bottom: 1px solid var(--border-subtle);">
                      <td style="padding: 0.6rem 1rem; color: var(--text-muted); font-family: var(--font-mono);">${h.date}</td>
                      <td style="padding: 0.6rem 1rem; font-weight: 600; color: var(--text-main); max-width: 280px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${h.title}">${h.title}</td>
                      <td style="padding: 0.6rem 1rem; text-align: center;">
                        <span style="font-size: 0.72rem; font-weight: 700; color: ${h.subject === 'math' ? '#60a5fa' : h.subject === 'english' ? '#34d399' : '#f472b6'};">
                          ${h.subject === 'math' ? 'Toán' : h.subject === 'english' ? 'Anh' : 'Văn'}
                        </span>
                      </td>
                      <td style="padding: 0.6rem 1rem; text-align: center; font-weight: 800; color: ${h.score >= 8 ? '#10b981' : h.score >= 6.5 ? 'var(--primary)' : '#f87171'};">
                        ${h.score}
                      </td>
                      <td style="padding: 0.6rem 1rem; text-align: center; color: var(--text-muted); font-size: 0.78rem;">
                        ${h.correctCount}/${h.totalQuestions}
                      </td>
                      <td style="padding: 0.6rem 1rem; text-align: right; color: var(--text-muted); font-size: 0.78rem;">
                        ${h.timeSpent || '45 phút'}
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>
      `;

      // Bind save teacher note button
      const btnSaveNote = document.getElementById('btnSaveTeacherNote');
      const inputNote = document.getElementById('inputTeacherNote');
      if (btnSaveNote && inputNote) {
        btnSaveNote.addEventListener('click', () => {
          const noteText = inputNote.value.trim();
          window.userManager.updateStudent(student.id, { notes: noteText });
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
  // USER / ROLE SWITCHER MODAL
  // =========================================================
  openUserSwitcherModal() {
    const modal = document.getElementById('userSwitcherModal');
    if (!modal) return;

    const listContainer = document.getElementById('userSwitcherList');
    if (listContainer) {
      const currentUser = window.userManager.getCurrentUser();
      const students = window.userManager.getAllStudents();

      listContainer.innerHTML = `
        <!-- Admin / Teacher Option -->
        <div class="user-switch-item ${currentUser.role === 'admin' ? 'active' : ''}" data-id="admin"
             style="display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 1rem; border-radius: var(--radius-md); background: ${currentUser.role === 'admin' ? 'rgba(168, 85, 247, 0.15)' : 'var(--bg-surface-elevated)'}; border: 1px solid ${currentUser.role === 'admin' ? '#a855f7' : 'var(--border-subtle)'}; cursor: pointer; margin-bottom: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-size: 1.5rem;">👩‍🏫</span>
            <div>
              <div style="font-weight: 700; color: var(--text-main);">ThS. Nguyễn Mai Anh (Admin / Giáo Viên)</div>
              <div style="font-size: 0.75rem; color: #c084fc;">Giáo viên chủ nhiệm lớp 9A1 • Quyền quản trị toàn diện</div>
            </div>
          </div>
          ${currentUser.role === 'admin' ? '<span style="color: #a855f7; font-weight: 800; font-size: 0.85rem;">Đang chọn ✓</span>' : '<span class="badge" style="background: rgba(168, 85, 247, 0.2); color: #c084fc; font-size: 0.75rem;">Chuyển vai trò</span>'}
        </div>

        <div style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 700; color: var(--text-muted); margin: 1rem 0 0.5rem;">
          Học Sinh Lớp 9A1 (${students.length} em)
        </div>

        <div style="max-height: 280px; overflow-y: auto; display: flex; flex-direction: column; gap: 0.5rem; padding-right: 4px;">
          ${students.map(s => `
            <div class="user-switch-item ${currentUser.id === s.id ? 'active' : ''}" data-id="${s.id}"
                 style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; border-radius: var(--radius-md); background: ${currentUser.id === s.id ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-surface)'}; border: 1px solid ${currentUser.id === s.id ? '#10b981' : 'var(--border-subtle)'}; cursor: pointer;">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                <span style="font-size: 1.3rem;">${s.avatar || '👨‍🎓'}</span>
                <div>
                  <div style="font-weight: 700; color: var(--text-main); font-size: 0.9rem;">${s.name} (${s.studentCode})</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">Mục tiêu: ${s.targetSchool} • ĐTB: ${s.overallAvg}đ</div>
                </div>
              </div>
              ${currentUser.id === s.id ? '<span style="color: #10b981; font-weight: 800; font-size: 0.85rem;">Đang học ✓</span>' : '<span style="font-size: 0.75rem; color: var(--text-muted);">Đăng nhập</span>'}
            </div>
          `).join('')}
        </div>
      `;

      listContainer.querySelectorAll('.user-switch-item').forEach(item => {
        item.addEventListener('click', (e) => {
          const id = e.currentTarget.dataset.id;
          window.userManager.switchUser(id);
          this.closeUserSwitcherModal();
          if (window.app) {
            window.app.showToast(`Đã chuyển sang tài khoản: ${window.userManager.getCurrentUser().name}`);
          }
        });
      });
    }

    modal.classList.add('active');
    if (window.lucide) window.lucide.createIcons();
  }

  closeUserSwitcherModal() {
    const modal = document.getElementById('userSwitcherModal');
    if (modal) modal.classList.remove('active');
  }

  // =========================================================
  // ADD STUDENT MODAL
  // =========================================================
  openAddStudentModal() {
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
    const name = document.getElementById('inputNewStudentName').value.trim();
    const studentClass = document.getElementById('inputNewStudentClass').value.trim() || '9A1';
    const gender = document.getElementById('inputNewStudentGender').value;
    const phone = document.getElementById('inputNewStudentPhone').value.trim();
    const parentPhone = document.getElementById('inputNewStudentParentPhone').value.trim();
    const targetSchool = document.getElementById('inputNewStudentTargetSchool').value.trim() || 'THPT Nguyễn Thượng Hiền (TP.HCM)';
    const benchmarkScore = parseFloat(document.getElementById('inputNewStudentBenchmark').value) || 24.5;

    if (!name) {
      alert('Vui lòng nhập họ và tên học sinh!');
      return;
    }

    const newStudent = window.userManager.addStudent({
      name,
      class: studentClass,
      gender,
      phone,
      parentPhone,
      targetSchool,
      benchmarkScore
    });

    this.closeAddStudentModal();
    this.renderAdminPortal();
    e.target.reset();

    if (window.app) {
      window.app.showToast(`Đã thêm thành công học sinh ${newStudent.name} (${newStudent.studentCode})!`);
    }
  }

  // =========================================================
  // ADD ASSIGNMENT MODAL
  // =========================================================
  openAddAssignmentModal() {
    const modal = document.getElementById('addAssignmentModal');
    if (!modal) return;

    // Populate exam options from all available exams
    const selectExam = document.getElementById('selectAssignmentExam');
    if (selectExam) {
      const mathExams = window.MATH_EXAMS || [];
      const litExams = window.LITERATURE_EXAMS || [];
      const engExams = window.ENGLISH_EXAMS || [];

      let optionsHtml = '<option value="">-- Chọn một đề thi từ kho đề chuẩn --</option>';

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
      window.app.showToast('Đã giao đề thi mới cho toàn lớp thành công!');
    }
  }

  // =========================================================
  // STUDENT PORTAL RENDERING (HỒ SƠ & TIẾN TRÌNH HỌC SINH)
  // =========================================================
  renderStudentPortal() {
    const container = document.getElementById('studentPortalContentArea');
    if (!container) return;

    const user = window.userManager.getCurrentUser();
    const student = window.userManager.getStudentById(user.id);

    if (!student) {
      container.innerHTML = `
        <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
          Vui lòng chuyển sang một tài khoản học sinh cụ thể để xem nhiệm vụ và tiến trình cá nhân.
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
                <span class="badge" style="background: rgba(99, 102, 241, 0.2); color: #a5b4fc; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: 99px;">Mã: ${student.studentCode}</span>
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
