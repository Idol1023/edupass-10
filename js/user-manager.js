// =========================================================
// EDUPASS 10 - USER & ADMIN MANAGEMENT SYSTEM
// Student Roster, Deep Progress Analytics, Assignments & Roles
// =========================================================

class UserManager {
  constructor() {
    this.STORAGE_KEYS = {
      CURRENT_USER: 'edupass_current_user_v2',
      STUDENTS: 'edupass_students_registry_v2',
      ASSIGNMENTS: 'edupass_assignments_registry_v2'
    };

    this.currentUser = null;
    this.students = [];
    this.assignments = [];

    this.init();
  }

  init() {
    this.loadData();
    if (!this.students || this.students.length === 0) {
      this.seedSampleClass();
    }
    if (!this.currentUser) {
      // Default to Teacher/Admin role
      this.currentUser = {
        id: 'admin_01',
        role: 'admin',
        name: 'ThS. Nguyễn Mai Anh',
        title: 'Giáo viên Chủ nhiệm & Tổ trưởng Chuyên môn 9A1',
        email: 'maianh.nguyen@edupass.edu.vn',
        school: 'THCS Trọng Điểm & Chuyên Sài Gòn',
        avatar: '👩‍🏫'
      };
      this.saveCurrentUser();
    }
  }

  loadData() {
    try {
      this.currentUser = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.CURRENT_USER));
      this.students = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.STUDENTS)) || [];
      this.assignments = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.ASSIGNMENTS)) || [];
    } catch (e) {
      console.warn('Error loading user manager data:', e);
      this.students = [];
      this.assignments = [];
    }
  }

  saveCurrentUser() {
    localStorage.setItem(this.STORAGE_KEYS.CURRENT_USER, JSON.stringify(this.currentUser));
  }

  saveStudents() {
    localStorage.setItem(this.STORAGE_KEYS.STUDENTS, JSON.stringify(this.students));
  }

  saveAssignments() {
    localStorage.setItem(this.STORAGE_KEYS.ASSIGNMENTS, JSON.stringify(this.assignments));
  }

  // =========================================================
  // SEED SAMPLE DATA (Lớp 9A1 - 10 học sinh thực tế đa dạng)
  // =========================================================
  seedSampleClass() {
    const now = new Date();
    const getDateAgo = (days) => {
      const d = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
      return d.toISOString().split('T')[0];
    };

    this.students = [
      {
        id: 'HS0901',
        studentCode: 'HS0901',
        name: 'Nguyễn Minh An',
        class: '9A1',
        gender: 'Nam',
        avatar: '👨‍🎓',
        phone: '0903123456',
        parentPhone: '0918765432',
        targetSchool: 'THPT Chuyên Lê Hồng Phong (TP.HCM)',
        benchmarkScore: 28.0,
        mathAvg: 9.2,
        literatureAvg: 8.5,
        englishAvg: 9.4,
        overallAvg: 9.03,
        examsCompleted: 18,
        accuracyRate: 92,
        streakDays: 14,
        lastActive: getDateAgo(0),
        status: 'excellent', // excellent, good, average, needs_support
        notes: 'Nắm rất chắc Toán thực tế và tiếng Anh. Cần bổ sung thêm phần phân tích nghệ thuật trong văn học.',
        examHistory: [
          {
            examId: 'math_exam_hcmc_2025',
            title: 'Đề thi Tham khảo Tuyển sinh Lớp 10 TP.HCM 2025 - Toán',
            subject: 'math',
            score: 9.5,
            correctCount: 13,
            totalQuestions: 14,
            date: getDateAgo(0),
            timeSpent: '84 phút'
          },
          {
            examId: 'eng_exam_hcmc_2024',
            title: 'Đề thi chính thức Tuyển sinh Lớp 10 TP.HCM 2024 - Tiếng Anh',
            subject: 'english',
            score: 9.75,
            correctCount: 39,
            totalQuestions: 40,
            date: getDateAgo(1),
            timeSpent: '48 phút'
          },
          {
            examId: 'lit_exam_mock_hcmc_2025',
            title: 'Đề Thi Thử Tuyển Sinh Lớp 10 Năm 2025 - Cụm Chuyên TP.HCM - Ngữ Văn',
            subject: 'literature',
            score: 8.5,
            correctCount: 13,
            totalQuestions: 15,
            date: getDateAgo(3),
            timeSpent: '110 phút'
          }
        ],
        weakTopics: ['Nghị luận văn học - Đánh giá nghệ thuật', 'Bất đẳng thức cực trị']
      },
      {
        id: 'HS0902',
        studentCode: 'HS0902',
        name: 'Trần Bảo Ngọc',
        class: '9A1',
        gender: 'Nữ',
        avatar: '👩‍🎓',
        phone: '0908888999',
        parentPhone: '0912345678',
        targetSchool: 'THPT Nguyễn Thượng Hiền (TP.HCM)',
        benchmarkScore: 25.5,
        mathAvg: 8.5,
        literatureAvg: 8.8,
        englishAvg: 8.4,
        overallAvg: 8.57,
        examsCompleted: 15,
        accuracyRate: 88,
        streakDays: 9,
        lastActive: getDateAgo(0),
        status: 'excellent',
        notes: 'Học lực đồng đều cả 3 môn, môn Văn viết rất truyền cảm và lập luận sắc sảo.',
        examHistory: [
          {
            examId: 'lit_exam_mock_hcmc_2025',
            title: 'Đề Thi Thử Tuyển Sinh Lớp 10 - Ngữ Văn',
            subject: 'literature',
            score: 9.0,
            correctCount: 14,
            totalQuestions: 15,
            date: getDateAgo(0),
            timeSpent: '105 phút'
          },
          {
            examId: 'math_exam_mock_hcmc_2025',
            title: 'Đề Thi Thử Tuyển Sinh Lớp 10 - Quận 1 TP.HCM - Toán',
            subject: 'math',
            score: 8.5,
            correctCount: 12,
            totalQuestions: 14,
            date: getDateAgo(2),
            timeSpent: '92 phút'
          }
        ],
        weakTopics: ['Toán thực tế hình trụ và lượng giác', 'Đảo ngữ câu gián tiếp tiếng Anh']
      },
      {
        id: 'HS0903',
        studentCode: 'HS0903',
        name: 'Lê Hoàng Nam',
        class: '9A1',
        gender: 'Nam',
        avatar: '🧑‍💻',
        phone: '0934567890',
        parentPhone: '0987654321',
        targetSchool: 'THPT Gia Định (TP.HCM)',
        benchmarkScore: 23.5,
        mathAvg: 7.6,
        literatureAvg: 7.0,
        englishAvg: 7.8,
        overallAvg: 7.47,
        examsCompleted: 10,
        accuracyRate: 76,
        streakDays: 4,
        lastActive: getDateAgo(1),
        status: 'good',
        notes: 'Tiến bộ rõ rệt ở môn Toán, cần rèn thêm kỹ năng viết đoạn văn 200 chữ môn Văn.',
        examHistory: [
          {
            examId: 'math_exam_hanoi_2024_style',
            title: 'Đề ôn thi Tuyển sinh Lớp 10 - Môn Toán (Hà Nội)',
            subject: 'math',
            score: 7.8,
            correctCount: 11,
            totalQuestions: 14,
            date: getDateAgo(1),
            timeSpent: '95 phút'
          }
        ],
        weakTopics: ['Hệ phương trình bậc nhất hai ẩn', 'Từ đồng nghĩa - trái nghĩa nâng cao']
      },
      {
        id: 'HS0904',
        studentCode: 'HS0904',
        name: 'Phạm Thùy Linh',
        class: '9A1',
        gender: 'Nữ',
        avatar: '👧',
        phone: '0901234789',
        parentPhone: '0945678123',
        targetSchool: 'THPT Chu Văn An (Hà Nội / Chuyên)',
        benchmarkScore: 26.5,
        mathAvg: 8.8,
        literatureAvg: 8.4,
        englishAvg: 8.9,
        overallAvg: 8.70,
        examsCompleted: 16,
        accuracyRate: 90,
        streakDays: 11,
        lastActive: getDateAgo(0),
        status: 'excellent',
        notes: 'Ý thức tự giác rất cao. Luôn nộp bài sớm nhất lớp trong các bài tập giao về nhà.',
        examHistory: [
          {
            examId: 'eng_exam_hanoi_2024_style',
            title: 'Đề ôn thi Tuyển sinh Lớp 10 Hà Nội - Tiếng Anh',
            subject: 'english',
            score: 9.3,
            correctCount: 28,
            totalQuestions: 30,
            date: getDateAgo(0),
            timeSpent: '45 phút'
          }
        ],
        weakTopics: ['Toán tối ưu chi phí cực trị', 'Cụm động từ phrasal verbs lạ']
      },
      {
        id: "HS0905",
        studentCode: 'HS0905',
        name: 'Vũ Đức Huy',
        class: '9A1',
        gender: 'Nam',
        avatar: '👦',
        phone: '0978123456',
        parentPhone: '0932123456',
        targetSchool: 'THPT Bùi Thị Xuân (TP.HCM)',
        benchmarkScore: 22.0,
        mathAvg: 5.8,
        literatureAvg: 5.5,
        englishAvg: 6.2,
        overallAvg: 5.83,
        examsCompleted: 5,
        accuracyRate: 60,
        streakDays: 1,
        lastActive: getDateAgo(4),
        status: 'needs_support',
        notes: 'Học sinh có lỗ hổng kiến thức căn bản ở Vi-ét và các thì tiếng Anh. Đã liên hệ phụ huynh để đôn đốc lịch ôn.',
        examHistory: [
          {
            examId: 'math_exam_01',
            title: 'Đề thi thử Môn Toán - Đề số 01 (Toán thực tế)',
            subject: 'math',
            score: 6.0,
            correctCount: 9,
            totalQuestions: 15,
            date: getDateAgo(4),
            timeSpent: '75 phút'
          }
        ],
        weakTopics: ['Định lý Vi-ét', 'Câu điều kiện loại 2, 3', 'Phép lập luận phân tích văn bản']
      },
      {
        id: 'HS0906',
        studentCode: 'HS0906',
        name: 'Đỗ Hoàng Yến',
        class: '9A1',
        gender: 'Nữ',
        avatar: '🧕',
        phone: '0912456789',
        parentPhone: '0981237654',
        targetSchool: 'THPT Trần Phú (TP.HCM)',
        benchmarkScore: 24.0,
        mathAvg: 8.2,
        literatureAvg: 8.1,
        englishAvg: 8.3,
        overallAvg: 8.20,
        examsCompleted: 13,
        accuracyRate: 84,
        streakDays: 6,
        lastActive: getDateAgo(1),
        status: 'good',
        notes: 'Chăm chỉ, làm bài cẩn thận, ít bị sai lỗi ngớ ngẩn (careless mistakes).',
        examHistory: [
          {
            examId: 'eng_exam_moet_mock_2025_02',
            title: 'Đề thi thử Tuyển sinh Lớp 10 - Tiếng Anh GDPT 2018',
            subject: 'english',
            score: 8.67,
            correctCount: 26,
            totalQuestions: 30,
            date: getDateAgo(1),
            timeSpent: '52 phút'
          }
        ],
        weakTopics: ['Hình học tiếp tuyến đường tròn', 'Liên từ nhượng bộ While / In spite of']
      },
      {
        id: 'HS0907',
        studentCode: 'HS0907',
        name: 'Nguyễn Tuấn Kiệt',
        class: '9A1',
        gender: 'Nam',
        avatar: '🧑',
        phone: '0909567890',
        parentPhone: '0943987654',
        targetSchool: 'THPT Lương Thế Vinh (Hà Nội)',
        benchmarkScore: 23.0,
        mathAvg: 7.4,
        literatureAvg: 6.8,
        englishAvg: 7.5,
        overallAvg: 7.23,
        examsCompleted: 9,
        accuracyRate: 73,
        streakDays: 3,
        lastActive: getDateAgo(2),
        status: 'good',
        notes: 'Môn Toán khá ổn nhưng môn Ngữ văn cần rèn luyện khả năng mở rộng vấn đề (phản đề).',
        examHistory: [],
        weakTopics: ['Mở bài gián tiếp văn học', 'Toán chuyển động ngược chiều']
      },
      {
        id: 'HS0908',
        studentCode: 'HS0908',
        name: 'Bùi Gia Hân',
        class: '9A1',
        gender: 'Nữ',
        avatar: '👱‍♀️',
        phone: '0938123987',
        parentPhone: '0919283746',
        targetSchool: 'THPT Mạc Đĩnh Chi (TP.HCM)',
        benchmarkScore: 24.5,
        mathAvg: 8.3,
        literatureAvg: 8.6,
        englishAvg: 8.1,
        overallAvg: 8.33,
        examsCompleted: 14,
        accuracyRate: 85,
        streakDays: 8,
        lastActive: getDateAgo(0),
        status: 'good',
        notes: 'Văn học rất tốt, ngữ pháp tiếng Anh nắm chắc, cần tập trung thêm phần hình học không gian.',
        examHistory: [],
        weakTopics: ['Hình nón và hình trụ thực tế', 'Trọng âm từ 3 âm tiết']
      }
    ];

    // Seed sample assignments
    this.assignments = [
      {
        id: 'asg_01',
        title: 'Đề thi thử Tuyển sinh Lớp 10 TP.HCM Năm 2025 - Môn Toán (Đề số 03)',
        examId: 'math_exam_hcmc_mock_2025_03',
        subject: 'math',
        assignedBy: 'ThS. Nguyễn Mai Anh',
        assignedTo: 'all', // all or studentId
        deadline: '2026-05-30T23:59:00',
        note: 'Đề chuẩn cấu trúc 7 bài Sở GD&ĐT TP.HCM. Yêu cầu cả lớp hoàn thành trước 24h ngày thứ Bảy.',
        submissions: {
          'HS0901': { submitted: true, score: 9.3, submittedAt: getDateAgo(0) },
          'HS0902': { submitted: true, score: 8.6, submittedAt: getDateAgo(1) },
          'HS0904': { submitted: true, score: 9.0, submittedAt: getDateAgo(1) },
          'HS0906': { submitted: true, score: 8.2, submittedAt: getDateAgo(2) }
        }
      },
      {
        id: 'asg_02',
        title: 'Đề thi thử Tiếng Anh Vào 10 - Đề số 02 (Chuẩn Định Dạng Mới GDPT 2018)',
        examId: 'eng_exam_moet_mock_2025_02',
        subject: 'english',
        assignedBy: 'ThS. Nguyễn Mai Anh',
        assignedTo: 'all',
        deadline: '2026-06-02T23:59:00',
        note: 'Ôn tập dạng biển báo thực tế và các thì ngữ pháp trọng tâm.',
        submissions: {
          'HS0901': { submitted: true, score: 9.6, submittedAt: getDateAgo(0) },
          'HS0906': { submitted: true, score: 8.7, submittedAt: getDateAgo(1) }
        }
      },
      {
        id: 'asg_03',
        title: 'Đề thi thử Tuyển sinh Lớp 10 Môn Ngữ Văn - Đề số 02 (Chủ đề Biết ơn & Yêu thương)',
        examId: 'lit_exam_hcmc_mock_2025_02',
        subject: 'literature',
        assignedBy: 'ThS. Nguyễn Mai Anh',
        assignedTo: ['HS0903', 'HS0905', 'HS0907'], // Targeted students
        deadline: '2026-06-04T22:00:00',
        note: 'Bài luyện tăng cường kỹ năng phân tích truyện ngắn và viết đoạn nghị luận 200 chữ cho nhóm cần kèm cặp.',
        submissions: {}
      }
    ];

    this.saveStudents();
    this.saveAssignments();
  }

  // =========================================================
  // USER / ROLE MANAGEMENT
  // =========================================================
  getCurrentUser() {
    return this.currentUser;
  }

  getCurrentRole() {
    return this.currentUser ? this.currentUser.role : 'student';
  }

  isAdmin() {
    return this.currentUser && this.currentUser.role === 'admin';
  }

  exportRosterCSV() {
    return this.exportStudentsCSV();
  }

  switchUser(userId) {
    if (userId === 'admin' || userId === 'admin_01') {
      this.currentUser = {
        id: 'admin_01',
        role: 'admin',
        name: 'ThS. Nguyễn Mai Anh',
        title: 'Giáo viên Chủ nhiệm & Tổ trưởng Chuyên môn 9A1',
        email: 'maianh.nguyen@edupass.edu.vn',
        school: 'THCS Trọng Điểm & Chuyên Sài Gòn',
        avatar: '👩‍🏫'
      };
    } else {
      const student = this.getStudentById(userId);
      if (student) {
        this.currentUser = {
          id: student.id,
          studentCode: student.studentCode,
          role: 'student',
          name: student.name,
          class: student.class,
          avatar: student.avatar || '👨‍🎓',
          targetSchool: student.targetSchool,
          benchmarkScore: student.benchmarkScore
        };

        // Sync to storageManager profile for consistency
        if (window.storageManager) {
          const profile = window.storageManager.getProfile();
          profile.name = student.name;
          profile.targetSchool = student.targetSchool;
          profile.benchmarkScore = student.benchmarkScore;
          profile.targetAverage = (student.benchmarkScore / 3).toFixed(1);
          window.storageManager.saveProfile(profile);
        }
      }
    }

    this.saveCurrentUser();

    // Re-render UI
    if (window.app) {
      window.app.updateHeaderStats();
      this.updateNavbarRoleBadge();
      if (this.currentUser.role === 'admin') {
        window.app.switchTab('admin-portal');
      } else {
        window.app.switchTab('student-portal');
      }
    }

    return this.currentUser;
  }

  updateNavbarRoleBadge() {
    const user = this.currentUser;
    const badgeEl = document.getElementById('headerUserBadgeBtn');
    if (badgeEl) {
      if (user.role === 'admin') {
        badgeEl.innerHTML = `
          <span style="font-size: 1.1rem; line-height: 1;">${user.avatar}</span>
          <div style="display: flex; flex-direction: column; text-align: left; line-height: 1.15;">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">${user.name}</span>
            <span style="font-size: 0.68rem; color: #a855f7; font-weight: 700;">👑 GVCN / Admin</span>
          </div>
          <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: var(--text-muted);"></i>
        `;
      } else {
        badgeEl.innerHTML = `
          <span style="font-size: 1.1rem; line-height: 1;">${user.avatar}</span>
          <div style="display: flex; flex-direction: column; text-align: left; line-height: 1.15;">
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-main);">${user.name}</span>
            <span style="font-size: 0.68rem; color: #10b981; font-weight: 700;">🎓 Lớp ${user.class || '9A1'}</span>
          </div>
          <i data-lucide="chevron-down" style="width: 14px; height: 14px; color: var(--text-muted);"></i>
        `;
      }
      if (window.lucide) window.lucide.createIcons();
    }

    // Update nav tab label based on role
    const adminNavBtn = document.querySelector('.nav-tab-btn[data-tab="admin-portal"], .nav-tab-btn[data-tab="student-portal"]');
    if (adminNavBtn) {
      if (user.role === 'admin') {
        adminNavBtn.dataset.tab = 'admin-portal';
        adminNavBtn.innerHTML = `<i data-lucide="shield-check"></i> Quản trị học sinh <span class="nav-tab-badge" style="background: #a855f7; color: #fff;">Admin</span>`;
      } else {
        adminNavBtn.dataset.tab = 'student-portal';
        adminNavBtn.innerHTML = `<i data-lucide="user-check"></i> Nhiệm vụ & Hồ sơ <span class="nav-tab-badge" style="background: #10b981; color: #fff;">HS</span>`;
      }
      if (window.lucide) window.lucide.createIcons();
    }
  }

  // =========================================================
  // STUDENT ROSTER CRUD
  // =========================================================
  getAllStudents() {
    return this.students;
  }

  getStudentById(id) {
    return this.students.find(s => s.id === id || s.studentCode === id);
  }

  addStudent(studentData) {
    const newId = 'HS09' + String(this.students.length + 1).padStart(2, '0');
    const newStudent = {
      id: newId,
      studentCode: newId,
      name: studentData.name || 'Học sinh mới',
      class: studentData.class || '9A1',
      gender: studentData.gender || 'Nam',
      avatar: studentData.gender === 'Nữ' ? '👩‍🎓' : '👨‍🎓',
      phone: studentData.phone || '',
      parentPhone: studentData.parentPhone || '',
      targetSchool: studentData.targetSchool || 'THPT Nguyễn Thượng Hiền (TP.HCM)',
      benchmarkScore: parseFloat(studentData.benchmarkScore) || 24.0,
      mathAvg: 0,
      literatureAvg: 0,
      englishAvg: 0,
      overallAvg: 0,
      examsCompleted: 0,
      accuracyRate: 0,
      streakDays: 0,
      lastActive: new Date().toISOString().split('T')[0],
      status: 'average',
      notes: studentData.notes || 'Học sinh mới tham gia hệ thống.',
      examHistory: [],
      weakTopics: []
    };

    this.students.unshift(newStudent);
    this.saveStudents();
    return newStudent;
  }

  updateStudent(id, updatedData) {
    const idx = this.students.findIndex(s => s.id === id);
    if (idx !== -1) {
      this.students[idx] = { ...this.students[idx], ...updatedData };
      this.saveStudents();
      return this.students[idx];
    }
    return null;
  }

  deleteStudent(id) {
    const initialLen = this.students.length;
    this.students = this.students.filter(s => s.id !== id);
    this.saveStudents();
    return this.students.length < initialLen;
  }

  // =========================================================
  // HOOK: RECORD EXAM RESULT FOR ACTIVE STUDENT
  // =========================================================
  recordExamForCurrentStudent(result) {
    if (!this.currentUser || this.currentUser.role === 'admin') return;

    const student = this.getStudentById(this.currentUser.id);
    if (!student) return;

    if (!student.examHistory) student.examHistory = [];

    // Add entry
    const entry = {
      examId: result.examId,
      title: result.title,
      subject: result.subject,
      score: result.score,
      correctCount: result.correctCount,
      totalQuestions: result.totalQuestions,
      date: new Date().toISOString().split('T')[0],
      timeSpent: Math.floor(result.timeSpentSeconds / 60) + ' phút'
    };

    student.examHistory.unshift(entry);
    student.examsCompleted = student.examHistory.length;
    student.lastActive = entry.date;

    // Recalculate averages
    const mathExams = student.examHistory.filter(e => e.subject === 'math');
    const litExams = student.examHistory.filter(e => e.subject === 'literature');
    const engExams = student.examHistory.filter(e => e.subject === 'english');

    if (mathExams.length) {
      student.mathAvg = Math.round((mathExams.reduce((a, b) => a + b.score, 0) / mathExams.length) * 10) / 10;
    }
    if (litExams.length) {
      student.literatureAvg = Math.round((litExams.reduce((a, b) => a + b.score, 0) / litExams.length) * 10) / 10;
    }
    if (engExams.length) {
      student.englishAvg = Math.round((engExams.reduce((a, b) => a + b.score, 0) / engExams.length) * 10) / 10;
    }

    const allScores = student.examHistory.map(e => e.score);
    student.overallAvg = Math.round((allScores.reduce((a, b) => a + b, 0) / allScores.length) * 100) / 100;

    // Calculate accuracy rate
    const totalQ = student.examHistory.reduce((a, b) => a + (b.totalQuestions || 0), 0);
    const totalC = student.examHistory.reduce((a, b) => a + (b.correctCount || 0), 0);
    student.accuracyRate = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;

    // Update status
    if (student.overallAvg >= 8.5) student.status = 'excellent';
    else if (student.overallAvg >= 7.0) student.status = 'good';
    else if (student.overallAvg >= 5.0) student.status = 'average';
    else student.status = 'needs_support';

    // Check assignments
    this.assignments.forEach(asg => {
      if (asg.examId === result.examId) {
        if (!asg.submissions) asg.submissions = {};
        asg.submissions[student.id] = {
          submitted: true,
          score: result.score,
          submittedAt: entry.date
        };
      }
    });

    this.saveStudents();
    this.saveAssignments();
  }

  // =========================================================
  // ASSIGNMENTS MANAGEMENT
  // =========================================================
  getAllAssignments() {
    return this.assignments;
  }

  createAssignment(asgData) {
    const newAsg = {
      id: 'asg_' + Date.now(),
      title: asgData.title,
      examId: asgData.examId,
      subject: asgData.subject,
      assignedBy: this.currentUser ? this.currentUser.name : 'Giáo viên',
      assignedTo: asgData.assignedTo || 'all',
      deadline: asgData.deadline,
      note: asgData.note || '',
      submissions: {}
    };

    this.assignments.unshift(newAsg);
    this.saveAssignments();
    return newAsg;
  }

  deleteAssignment(id) {
    this.assignments = this.assignments.filter(a => a.id !== id);
    this.saveAssignments();
  }

  // =========================================================
  // CLASS STATISTICS & ANALYTICS
  // =========================================================
  getClassStats() {
    const totalStudents = this.students.length;
    if (totalStudents === 0) {
      return {
        totalStudents: 0,
        totalExams: 0,
        classAverage: 0,
        targetPassRate: 0,
        gradeDistribution: { excellent: 0, good: 0, average: 0, needsSupport: 0 },
        topStudents: [],
        atRiskStudents: []
      };
    }

    const totalExams = this.students.reduce((acc, s) => acc + (s.examsCompleted || 0), 0);
    const sumAvg = this.students.reduce((acc, s) => acc + (s.overallAvg || 0), 0);
    const classAverage = Math.round((sumAvg / totalStudents) * 100) / 100;

    // Passing target prediction (overallAvg * 3 >= benchmarkScore)
    const passedCount = this.students.filter(s => (s.overallAvg * 3) >= (s.benchmarkScore || 24.0)).length;
    const targetPassRate = Math.round((passedCount / totalStudents) * 100);

    const gradeDistribution = {
      excellent: this.students.filter(s => s.overallAvg >= 8.5).length,
      good: this.students.filter(s => s.overallAvg >= 7.0 && s.overallAvg < 8.5).length,
      average: this.students.filter(s => s.overallAvg >= 5.0 && s.overallAvg < 7.0).length,
      needsSupport: this.students.filter(s => s.overallAvg < 5.0 || s.status === 'needs_support').length
    };

    // Sort by overallAvg desc
    const sorted = [...this.students].sort((a, b) => (b.overallAvg || 0) - (a.overallAvg || 0));
    const topStudents = sorted.slice(0, 3);
    const atRiskStudents = this.students.filter(s => s.overallAvg < 6.5 || s.status === 'needs_support');

    return {
      totalStudents,
      totalExams,
      classAverage,
      targetPassRate,
      gradeDistribution,
      topStudents,
      atRiskStudents
    };
  }

  // =========================================================
  // DATA EXPORT & BACKUP
  // =========================================================
  exportStudentsCSV() {
    const headers = [
      'Mã Học Sinh',
      'Họ và Tên',
      'Lớp',
      'Giới Tính',
      'SĐT Học Sinh',
      'SĐT Phụ Huynh',
      'Trường Nguyện Vọng 1',
      'Điểm Chuẩn Mục Tiêu',
      'ĐTB Môn Toán',
      'ĐTB Ngữ Văn',
      'ĐTB Tiếng Anh',
      'Điểm Trung Bình Chung',
      'Số Đề Đã Làm',
      'Tỷ Lệ Chính Xác (%)',
      'Xếp Loại Năng Lực',
      'Ngày Hoạt Động Gần Nhất',
      'Ghi Chú Giáo Viên'
    ];

    const rows = this.students.map(s => [
      `"${s.studentCode}"`,
      `"${s.name}"`,
      `"${s.class}"`,
      `"${s.gender}"`,
      `"${s.phone || ''}"`,
      `"${s.parentPhone || ''}"`,
      `"${s.targetSchool}"`,
      s.benchmarkScore,
      s.mathAvg,
      s.literatureAvg,
      s.englishAvg,
      s.overallAvg,
      s.examsCompleted,
      s.accuracyRate,
      `"${s.status === 'excellent' ? 'Xuất sắc' : s.status === 'good' ? 'Khá giỏi' : s.status === 'average' ? 'Trung bình' : 'Cần hỗ trợ'}"`,
      `"${s.lastActive}"`,
      `"${(s.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `EduPass10_Danh_Sach_Hoc_Sinh_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  exportBackupJSON() {
    const data = {
      version: 'edupass_v2',
      exportedAt: new Date().toISOString(),
      students: this.students,
      assignments: this.assignments
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `EduPass10_Backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  importBackupJSON(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data && Array.isArray(data.students)) {
        this.students = data.students;
        if (Array.isArray(data.assignments)) {
          this.assignments = data.assignments;
        }
        this.saveStudents();
        this.saveAssignments();
        return { success: true, count: this.students.length };
      }
      return { success: false, message: 'Định dạng file sao lưu không hợp lệ.' };
    } catch (e) {
      return { success: false, message: e.message };
    }
  }

  resetToDefault() {
    this.seedSampleClass();
    return true;
  }
}

window.userManager = new UserManager();
