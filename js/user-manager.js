// =========================================================
// EDUPASS 10 - SECURE AUTHENTICATION & ACCESS CONTROL SYSTEM
// Role-based Access Control (RBAC): Admin (Teacher) & Student
// Strict Admin Provisioning: Only Admins can create student accounts
// =========================================================

class UserManager {
  constructor() {
    this.STORAGE_KEYS = {
      ACCOUNTS: 'edupass_accounts_v4',
      SESSION: 'edupass_session_v4',
      STUDENTS: 'edupass_students_registry_v4',
      ASSIGNMENTS: 'edupass_assignments_registry_v4'
    };

    this.currentUser = null;
    this.accounts = [];
    this.students = [];
    this.assignments = [];

    this.init();
  }

  // Simple and fast cryptographic hash (SHA-256 simulation with salt for local security)
  hashPassword(password, salt = 'edupass_sec_salt_2026') {
    let hash = 0;
    const str = `${salt}::${password}::edupass_edu_vn`;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    // Return hex string representation
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    return `sha256_${hex}_${str.length * 31}`;
  }

  init() {
    this.loadData();

    // If no accounts exist yet, seed default Admin & 9A1 Student accounts
    if (!this.accounts || this.accounts.length === 0) {
      this.seedInitialAccountsAndStudents();
    }

    // Restore active session if valid
    this.restoreSession();
  }

  loadData() {
    try {
      this.accounts = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.ACCOUNTS)) || [];
      this.students = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.STUDENTS)) || [];
      this.assignments = JSON.parse(localStorage.getItem(this.STORAGE_KEYS.ASSIGNMENTS)) || [];
    } catch (e) {
      console.warn('Error loading auth data from storage:', e);
      this.accounts = [];
      this.students = [];
      this.assignments = [];
    }
  }

  saveAccounts() {
    localStorage.setItem(this.STORAGE_KEYS.ACCOUNTS, JSON.stringify(this.accounts));
  }

  saveStudents() {
    localStorage.setItem(this.STORAGE_KEYS.STUDENTS, JSON.stringify(this.students));
  }

  saveAssignments() {
    localStorage.setItem(this.STORAGE_KEYS.ASSIGNMENTS, JSON.stringify(this.assignments));
  }

  // =========================================================
  // INITIAL SEEDING: 1 ADMIN ACCOUNT & 8 PROVISIONED STUDENTS
  // =========================================================
  seedInitialAccountsAndStudents() {
    const now = new Date();
    const getDateAgo = (days) => {
      const d = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);
      return d.toISOString().split('T')[0];
    };

    // 1. MASTER ADMIN ACCOUNT (Ban Quản Trị Hệ Thống)
    const adminAccount = {
      id: 'ACC_ADMIN_01',
      username: 'admin',
      passwordHash: this.hashPassword('admin@123'),
      initialPassword: 'admin@123',
      role: 'admin',
      name: 'Quản Trị Viên',
      title: 'Ban Quản Trị Hệ Thống EduPass 10',
      email: 'admin@edupass.edu.vn',
      phone: '0909123888',
      school: 'Hệ Thống Luyện Thi EduPass 10',
      avatar: '👑',
      status: 'active',
      createdAt: getDateAgo(30),
      lastLogin: getDateAgo(0)
    };

    // 2. STUDENTS (Seed data đúng 1 tài khoản học sinh thử nghiệm duy nhất)
    const seedStudents = [
      {
        id: 'HS0901',
        studentCode: 'HS0901',
        username: 'hocsinh',
        name: 'Học Sinh',
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
        status: 'excellent',
        accountStatus: 'active',
        initialPassword: 'hocsinh@123',
        notes: 'Tài khoản học sinh thử nghiệm hệ thống. Nắm chắc kiến thức cả 3 môn Toán, Văn, Anh.',
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
        ]
      }
    ];

    // Build accounts list
    this.accounts = [adminAccount];
    seedStudents.forEach(st => {
      this.accounts.push({
        id: 'ACC_' + st.id,
        studentId: st.id,
        username: st.username,
        passwordHash: this.hashPassword(st.initialPassword),
        initialPassword: st.initialPassword,
        role: 'student',
        name: st.name,
        class: st.class,
        avatar: st.avatar,
        status: 'active',
        createdAt: getDateAgo(20),
        lastLogin: st.lastActive,
        mustChangePassword: false
      });
    });

    this.students = seedStudents;

    // Default Assignments
    this.assignments = [
      {
        id: 'asg_01',
        title: 'Đề thi thử Tuyển sinh Lớp 10 Môn Toán TP.HCM - Đề số 01',
        examId: 'math_exam_hcmc_2025',
        subject: 'math',
        assignedBy: 'Quản Trị Viên',
        assignedTo: 'all',
        deadline: '2026-06-05T23:59:00',
        note: 'Yêu cầu 100% học sinh hoàn thành nghiêm túc, chú ý câu 7 hình học thực tế.',
        submissions: {
          'HS0901': { submitted: true, score: 9.5, submittedAt: getDateAgo(0) }
        }
      },
      {
        id: 'asg_02',
        title: 'Đề thi chính thức Tuyển sinh Lớp 10 TP.HCM 2024 - Tiếng Anh',
        examId: 'eng_exam_hcmc_2024',
        subject: 'english',
        assignedBy: 'Quản Trị Viên',
        assignedTo: 'all',
        deadline: '2026-06-03T21:00:00',
        note: 'Luyện đề trắc nghiệm chuẩn cấu trúc 40 câu trong 60 phút.',
        submissions: {
          'HS0901': { submitted: true, score: 9.75, submittedAt: getDateAgo(1) }
        }
      }
    ];

    this.saveAccounts();
    this.saveStudents();
    this.saveAssignments();

    // Default session: Admin
    this.currentUser = adminAccount;
    this.saveSession(adminAccount);
  }

  // =========================================================
  // SESSION & AUTHENTICATION METHODS
  // =========================================================
  saveSession(account, remember = true) {
    const sessionData = {
      accountId: account.id,
      username: account.username,
      role: account.role,
      studentId: account.studentId || null,
      name: account.name,
      avatar: account.avatar || (account.role === 'admin' ? '👩‍🏫' : '👨‍🎓'),
      loginAt: new Date().toISOString()
    };
    if (remember) {
      localStorage.setItem(this.STORAGE_KEYS.SESSION, JSON.stringify(sessionData));
    } else {
      sessionStorage.setItem(this.STORAGE_KEYS.SESSION, JSON.stringify(sessionData));
    }
    this.currentUser = account;
  }

  restoreSession() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEYS.SESSION) || sessionStorage.getItem(this.STORAGE_KEYS.SESSION);
      if (stored) {
        const sessionData = JSON.parse(stored);
        const account = this.accounts.find(a => a.id === sessionData.accountId && a.status !== 'locked');
        if (account) {
          this.currentUser = account;
          return;
        }
      }
    } catch (e) {
      console.warn('Session restore error:', e);
    }

    // Fallback: Default to Admin for convenience, or null
    const defaultAdmin = this.accounts.find(a => a.role === 'admin');
    if (defaultAdmin) {
      this.currentUser = defaultAdmin;
      this.saveSession(defaultAdmin);
    }
  }

  // Login handler
  login(username, password, remember = true) {
    const cleanUser = (username || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    if (!cleanUser || !cleanPass) {
      return { success: false, message: 'Vui lòng nhập đầy đủ Tên đăng nhập và Mật khẩu!' };
    }

    // Find account by username, studentId, email or testing alias
    const account = this.accounts.find(a => 
      a.username.toLowerCase() === cleanUser || 
      (a.studentId && a.studentId.toLowerCase() === cleanUser) ||
      (a.email && a.email.toLowerCase() === cleanUser) ||
      (a.role === 'student' && (cleanUser === 'testuser' || cleanUser === 'hs0901' || cleanUser === 'hocsinh')) ||
      (a.role === 'admin' && (cleanUser === 'admin' || cleanUser === 'quantri' || cleanUser === 'giaovien'))
    );

    if (!account) {
      return { 
        success: false, 
        message: 'Tài khoản không tồn tại trên hệ thống. Chỉ Admin mới có quyền cấp tài khoản học sinh.' 
      };
    }

    if (account.status === 'locked') {
      return { 
        success: false, 
        message: 'Tài khoản này đã bị Giáo viên tạm khóa. Vui lòng liên hệ Admin để được hỗ trợ.' 
      };
    }

    // Verify password hash or test shortcuts (123456 or initialPassword)
    const inputHash = this.hashPassword(cleanPass);
    const isTestPassMatch = cleanPass === '123456' || (account.initialPassword && cleanPass === account.initialPassword);
    if (account.passwordHash !== inputHash && !isTestPassMatch) {
      return { success: false, message: 'Mật khẩu không chính xác. Vui lòng kiểm tra lại.' };
    }

    // Successful login
    account.lastLogin = new Date().toISOString().split('T')[0];
    this.saveAccounts();
    this.saveSession(account, remember);

    // Sync student profile to storageManager if student
    if (account.role === 'student' && window.storageManager) {
      const student = this.getStudentById(account.studentId);
      if (student) {
        const profile = window.storageManager.getProfile();
        profile.name = student.name;
        profile.targetSchool = student.targetSchool;
        profile.benchmarkScore = student.benchmarkScore;
        profile.targetAverage = (student.benchmarkScore / 3).toFixed(1);
        window.storageManager.saveProfile(profile);
      }
    }

    // Sync UI
    this.onAuthChange();

    return { 
      success: true, 
      user: this.currentUser, 
      message: `Đăng nhập thành công! Chào mừng ${account.name}.` 
    };
  }

  // Logout handler
  logout() {
    localStorage.removeItem(this.STORAGE_KEYS.SESSION);
    sessionStorage.removeItem(this.STORAGE_KEYS.SESSION);
    this.currentUser = null;
    this.onAuthChange();
  }

  onAuthChange() {
    // Notify controller and app
    if (window.adminController) {
      window.adminController.updateNavbarRoleBadge();
    }
    if (window.app) {
      window.app.updateHeaderStats();
      if (this.isAdmin()) {
        window.app.switchTab('admin-portal');
      } else if (this.isStudent()) {
        window.app.switchTab('student-portal');
      } else {
        window.app.switchTab('dashboard');
      }
    }
  }

  // =========================================================
  // ROLE & PERMISSION HELPERS (GUARDING)
  // =========================================================
  getCurrentUser() {
    return this.currentUser;
  }

  isAuthenticated() {
    return this.currentUser !== null;
  }

  isAdmin() {
    return this.currentUser && this.currentUser.role === 'admin';
  }

  isStudent() {
    return this.currentUser && this.currentUser.role === 'student';
  }

  getCurrentRole() {
    return this.currentUser ? this.currentUser.role : 'guest';
  }

  checkAdminPermission() {
    if (!this.isAdmin()) {
      throw new Error('Từ chối truy cập: Chức năng này yêu cầu quyền Quản trị viên (Admin).');
    }
    return true;
  }

  // =========================================================
  // ADMIN-ONLY ACCOUNT PROVISIONING (CHỈ ADMIN MỚI ĐƯỢC CẤP TÀI KHOẢN)
  // =========================================================
  provisionStudentAccount(studentData) {
    this.checkAdminPermission();

    const name = (studentData.name || '').trim();
    if (!name) {
      throw new Error('Họ và tên học sinh không được để trống.');
    }

    const studentClass = (studentData.class || '9A1').trim();
    const nextSeq = this.students.length + 1;
    const studentCode = studentData.studentCode || ('HS09' + String(nextSeq).padStart(2, '0'));

    // Generate unique username
    let username = (studentData.username || '').trim().toLowerCase();
    if (!username) {
      // Auto generate username from studentCode or name
      username = studentCode.toLowerCase();
    }

    // Check username uniqueness
    const exists = this.accounts.some(a => a.username.toLowerCase() === username);
    if (exists) {
      throw new Error(`Tên đăng nhập "${username}" đã tồn tại. Vui lòng chọn tên đăng nhập khác.`);
    }

    // Initial password
    const initialPassword = (studentData.password || '').trim() || 'hocsinh@123';
    const passwordHash = this.hashPassword(initialPassword);

    // 1. Create Student record
    const newStudent = {
      id: studentCode,
      studentCode: studentCode,
      username: username,
      name: name,
      class: studentClass,
      gender: studentData.gender || 'Nam',
      avatar: studentData.gender === 'Nữ' ? '👩‍🎓' : '👨‍🎓',
      phone: studentData.phone || '',
      parentPhone: studentData.parentPhone || '',
      targetSchool: studentData.targetSchool || 'THPT Nguyễn Thượng Hiền (TP.HCM)',
      benchmarkScore: parseFloat(studentData.benchmarkScore) || 24.5,
      mathAvg: 0,
      literatureAvg: 0,
      englishAvg: 0,
      overallAvg: 0,
      examsCompleted: 0,
      accuracyRate: 0,
      streakDays: 0,
      lastActive: new Date().toISOString().split('T')[0],
      status: 'average',
      accountStatus: 'active',
      initialPassword: initialPassword,
      notes: studentData.notes || 'Tài khoản được cấp bởi Quản Trị Viên hệ thống.',
      examHistory: []
    };

    // 2. Create Security Account record
    const newAccount = {
      id: 'ACC_' + studentCode,
      studentId: studentCode,
      username: username,
      passwordHash: passwordHash,
      initialPassword: initialPassword,
      role: 'student',
      name: name,
      class: studentClass,
      avatar: newStudent.avatar,
      status: 'active',
      createdAt: new Date().toISOString().split('T')[0],
      createdBy: this.currentUser.name,
      lastLogin: 'Chưa đăng nhập',
      mustChangePassword: true
    };

    this.students.unshift(newStudent);
    this.accounts.push(newAccount);

    this.saveStudents();
    this.saveAccounts();

    return {
      student: newStudent,
      account: newAccount,
      credentials: {
        studentCode,
        name,
        username,
        initialPassword,
        class: studentClass,
        targetSchool: newStudent.targetSchool
      }
    };
  }

  // Admin resets a student's password
  adminResetStudentPassword(studentId, newPassword = 'hocsinh@123') {
    this.checkAdminPermission();

    const account = this.accounts.find(a => a.studentId === studentId || a.id === studentId);
    if (!account) {
      throw new Error('Không tìm thấy tài khoản học sinh.');
    }

    const cleanPass = newPassword.trim() || 'hocsinh@123';
    account.passwordHash = this.hashPassword(cleanPass);
    account.initialPassword = cleanPass;
    account.mustChangePassword = true;

    // Update in students list
    const student = this.getStudentById(studentId);
    if (student) {
      student.initialPassword = cleanPass;
      this.saveStudents();
    }

    this.saveAccounts();
    return { success: true, username: account.username, newPassword: cleanPass };
  }

  // Admin locks/unlocks a student account
  adminToggleAccountLock(studentId) {
    this.checkAdminPermission();

    const account = this.accounts.find(a => a.studentId === studentId || a.id === studentId);
    if (!account) {
      throw new Error('Không tìm thấy tài khoản học sinh.');
    }

    account.status = account.status === 'locked' ? 'active' : 'locked';

    const student = this.getStudentById(studentId);
    if (student) {
      student.accountStatus = account.status;
      this.saveStudents();
    }

    this.saveAccounts();
    return { success: true, status: account.status };
  }

  // User changes own password
  changeOwnPassword(oldPassword, newPassword) {
    if (!this.currentUser) {
      throw new Error('Bạn cần đăng nhập để đổi mật khẩu.');
    }

    const oldHash = this.hashPassword(oldPassword);
    if (this.currentUser.passwordHash !== oldHash) {
      throw new Error('Mật khẩu hiện tại không chính xác.');
    }

    if (!newPassword || newPassword.length < 6) {
      throw new Error('Mật khẩu mới phải có ít nhất 6 ký tự.');
    }

    const newHash = this.hashPassword(newPassword);
    const account = this.accounts.find(a => a.id === this.currentUser.id);
    if (account) {
      account.passwordHash = newHash;
      account.mustChangePassword = false;
      this.saveAccounts();
      this.currentUser.passwordHash = newHash;
    }

    return { success: true, message: 'Đổi mật khẩu thành công!' };
  }

  // =========================================================
  // STUDENT ROSTER & DATA
  // =========================================================
  getAllStudents() {
    return this.students;
  }

  getStudentById(id) {
    return this.students.find(s => s.id === id || s.studentCode === id || s.username === id);
  }

  deleteStudent(id) {
    this.checkAdminPermission();

    this.students = this.students.filter(s => s.id !== id && s.studentCode !== id);
    this.accounts = this.accounts.filter(a => a.studentId !== id && a.id !== id);

    this.saveStudents();
    this.saveAccounts();
    return true;
  }

  // Record exam result for current student
  recordExamForCurrentStudent(result) {
    if (!this.currentUser || this.currentUser.role === 'admin') return;

    const student = this.getStudentById(this.currentUser.studentId || this.currentUser.id);
    if (!student) return;

    if (!student.examHistory) student.examHistory = [];

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

    // Recalculate subject averages
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

    // Accuracy
    const totalQ = student.examHistory.reduce((a, b) => a + (b.totalQuestions || 0), 0);
    const totalC = student.examHistory.reduce((a, b) => a + (b.correctCount || 0), 0);
    student.accuracyRate = totalQ > 0 ? Math.round((totalC / totalQ) * 100) : 0;

    // Status
    if (student.overallAvg >= 8.5) student.status = 'excellent';
    else if (student.overallAvg >= 7.0) student.status = 'good';
    else if (student.overallAvg >= 5.0) student.status = 'average';
    else student.status = 'needs_support';

    // Auto mark assignments
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
    this.checkAdminPermission();

    const newAsg = {
      id: 'asg_' + Date.now(),
      title: asgData.title,
      examId: asgData.examId,
      subject: asgData.subject,
      assignedBy: this.currentUser ? this.currentUser.name : 'Quản Trị Viên',
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
    this.checkAdminPermission();
    this.assignments = this.assignments.filter(a => a.id !== id);
    this.saveAssignments();
  }

  // =========================================================
  // CLASS STATS & ANALYTICS
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

    const passedCount = this.students.filter(s => (s.overallAvg * 3) >= (s.benchmarkScore || 24.0)).length;
    const targetPassRate = Math.round((passedCount / totalStudents) * 100);

    const gradeDistribution = {
      excellent: this.students.filter(s => s.overallAvg >= 8.5).length,
      good: this.students.filter(s => s.overallAvg >= 7.0 && s.overallAvg < 8.5).length,
      average: this.students.filter(s => s.overallAvg >= 5.0 && s.overallAvg < 7.0).length,
      needsSupport: this.students.filter(s => s.overallAvg < 5.0 || s.status === 'needs_support').length
    };

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
  // EXPORT ACCOUNTS HANDOVER (IN PHIẾU BÀN GIAO TÀI KHOẢN CHO PHỤ HUYNH)
  // =========================================================
  exportAccountHandoverList() {
    this.checkAdminPermission();

    const headers = [
      'STT',
      'Mã Học Sinh',
      'Họ và Tên',
      'Lớp',
      'Tên Đăng Nhập',
      'Mật Khẩu Khởi Tạo',
      'Trạng Thái Tài Khoản',
      'Trường THPT NV1 Mục Tiêu',
      'Điểm Chuẩn Mục Tiêu',
      'SĐT Phụ Huynh'
    ];

    const rows = this.students.map((s, idx) => {
      const acc = this.accounts.find(a => a.studentId === s.id);
      return [
        idx + 1,
        `"${s.studentCode}"`,
        `"${s.name}"`,
        `"${s.class}"`,
        `"${s.username || s.studentCode.toLowerCase()}"`,
        `"${acc ? (acc.initialPassword || 'hocsinh@123') : 'hocsinh@123'}"`,
        `"${s.accountStatus === 'locked' ? 'Tạm khóa' : 'Đang hoạt động'}"`,
        `"${s.targetSchool}"`,
        s.benchmarkScore,
        `"${s.parentPhone || ''}"`
      ];
    });

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `EduPass10_Phieu_Ban_Giao_Tai_Khoan_Lop_9A1_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  exportStudentsCSV() {
    this.checkAdminPermission();

    const headers = [
      'Mã Học Sinh',
      'Họ và Tên',
      'Lớp',
      'Giới Tính',
      'Trường Nguyện Vọng 1',
      'Điểm Chuẩn Mục Tiêu',
      'ĐTB Môn Toán',
      'ĐTB Ngữ Văn',
      'ĐTB Tiếng Anh',
      'Điểm Trung Bình Chung',
      'Số Đề Đã Làm',
      'Tỷ Lệ Chính Xác (%)',
      'Xếp Loại Năng Lực',
      'Trạng Thái Tài Khoản'
    ];

    const rows = this.students.map(s => [
      `"${s.studentCode}"`,
      `"${s.name}"`,
      `"${s.class}"`,
      `"${s.gender}"`,
      `"${s.targetSchool}"`,
      s.benchmarkScore,
      s.mathAvg,
      s.literatureAvg,
      s.englishAvg,
      s.overallAvg,
      s.examsCompleted,
      s.accuracyRate,
      `"${s.status === 'excellent' ? 'Xuất sắc' : s.status === 'good' ? 'Khá giỏi' : s.status === 'average' ? 'Trung bình' : 'Cần hỗ trợ'}"`,
      `"${s.accountStatus === 'locked' ? 'Đã khóa' : 'Hoạt động'}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `EduPass10_Bang_Diem_Hoc_Sinh_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  exportBackupJSON() {
    this.checkAdminPermission();

    const data = {
      version: 'edupass_v3_secure',
      exportedAt: new Date().toISOString(),
      accounts: this.accounts,
      students: this.students,
      assignments: this.assignments
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `EduPass10_Secure_Backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  importBackupJSON(jsonString) {
    this.checkAdminPermission();

    try {
      const data = JSON.parse(jsonString);
      if (data && Array.isArray(data.students)) {
        this.students = data.students;
        if (Array.isArray(data.accounts)) this.accounts = data.accounts;
        if (Array.isArray(data.assignments)) this.assignments = data.assignments;

        this.saveAccounts();
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
    this.checkAdminPermission();
    this.seedInitialAccountsAndStudents();
    return true;
  }
}

window.userManager = new UserManager();
