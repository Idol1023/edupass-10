// =========================================================
// EDUPASS 10 - STORAGE MANAGER (MULTI-TENANT ACCOUNT ISOLATION)
// Strict Per-Account Storage Partitioning & Privacy Protection
// Guest Mode: No personal data or target school leakage
// Authenticated Mode: Securely scoped to each user/student account
// =========================================================

class StorageManager {
  constructor() {
    this.initDefaults();
  }

  // Returns isolated storage prefix based on active session
  getCurrentPrefix() {
    try {
      if (window.userManager && typeof window.userManager.isAuthenticated === 'function' && window.userManager.isAuthenticated()) {
        const user = window.userManager.getCurrentUser();
        if (user) {
          const id = (user.username || user.studentId || user.id || 'usr').toLowerCase().replace(/[^a-z0-9_-]/g, '_');
          return `edupass_user_${id}_`;
        }
      }
    } catch (e) {
      console.warn("getCurrentPrefix error:", e);
    }
    return 'edupass_guest_';
  }

  getKey(type) {
    return `${this.getCurrentPrefix()}${type}`;
  }

  initDefaults() {
    const isCleanZero = localStorage.getItem('edupass_zero_clean_v7');
    if (!isCleanZero) {
      this.resetAllData();
      localStorage.setItem('edupass_zero_clean_v7', 'true');
    }
  }

  // 1. User Profile Management (Isolated per account)
  getProfile() {
    const prefix = this.getCurrentPrefix();
    const isAuth = window.userManager && typeof window.userManager.isAuthenticated === 'function' && window.userManager.isAuthenticated();
    const isStudent = isAuth && window.userManager.isStudent && window.userManager.isStudent();
    const user = isAuth ? window.userManager.getCurrentUser() : null;

    try {
      const stored = localStorage.getItem(prefix + 'profile');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Error reading profile:', e);
    }

    // If authenticated as student, initialize from student records in userManager
    if (isStudent && user) {
      const student = window.userManager.getStudentById ? window.userManager.getStudentById(user.studentId || user.id) : null;
      const studentProfile = {
        name: (student && student.name) || user.name || "Học Sinh",
        targetSchool: (student && student.targetSchool) || "THPT Chuyên Lê Hồng Phong (TP.HCM)",
        benchmarkScore: (student && student.benchmarkScore) || 28.0,
        targetAverage: (student && student.benchmarkScore) ? Math.round((student.benchmarkScore / 3) * 100) / 100 : 9.33,
        region: "TP. Hồ Chí Minh",
        examDate: "2026-06-06",
        streakDays: (student && student.streakDays) || 0,
        lastActiveDate: null,
        isGuest: false
      };
      this.saveProfile(studentProfile);
      return studentProfile;
    }

    // If authenticated as admin
    if (isAuth && user && user.role === 'admin') {
      return {
        name: user.name || "Quản Trị Viên",
        targetSchool: "",
        benchmarkScore: null,
        targetAverage: null,
        region: "TP. Hồ Chí Minh",
        examDate: "2026-06-06",
        streakDays: 0,
        lastActiveDate: null,
        isGuest: false,
        isAdmin: true
      };
    }

    // Guest Mode: ABSOLUTELY NO TARGET SCHOOL!
    return {
      name: "Khách",
      targetSchool: "",
      benchmarkScore: null,
      targetAverage: null,
      region: "TP. Hồ Chí Minh",
      examDate: "2026-06-06",
      streakDays: 0,
      lastActiveDate: null,
      isGuest: true
    };
  }

  saveProfile(profile) {
    const prefix = this.getCurrentPrefix();
    localStorage.setItem(prefix + 'profile', JSON.stringify(profile));

    // Also sync back to student record in userManager if student
    if (window.userManager && typeof window.userManager.isStudent === 'function' && window.userManager.isStudent()) {
      const user = window.userManager.getCurrentUser();
      if (user) {
        const student = window.userManager.getStudentById ? window.userManager.getStudentById(user.studentId || user.id) : null;
        if (student) {
          if (profile.targetSchool !== undefined) student.targetSchool = profile.targetSchool;
          if (profile.benchmarkScore !== undefined) student.benchmarkScore = profile.benchmarkScore;
          if (profile.streakDays !== undefined) student.streakDays = profile.streakDays;
          if (typeof window.userManager.saveStudents === 'function') {
            window.userManager.saveStudents();
          }
        }
      }
    }
  }

  // 2. Exam History (Isolated per account)
  getExamHistory() {
    const prefix = this.getCurrentPrefix();
    try {
      const data = JSON.parse(localStorage.getItem(prefix + 'history'));
      if (Array.isArray(data)) return data;
    } catch (e) {
      console.warn('Error reading history:', e);
    }

    // If student has seeded examHistory in userManager and no isolated storage exists yet
    if (window.userManager && typeof window.userManager.isStudent === 'function' && window.userManager.isStudent()) {
      const user = window.userManager.getCurrentUser();
      const student = window.userManager.getStudentById ? window.userManager.getStudentById(user.studentId || user.id) : null;
      if (student && student.examHistory && Array.isArray(student.examHistory) && student.examHistory.length > 0) {
        localStorage.setItem(prefix + 'history', JSON.stringify(student.examHistory));
        return student.examHistory;
      }
    }

    return [];
  }

  saveExamResult(result) {
    const prefix = this.getCurrentPrefix();
    const history = this.getExamHistory();
    history.unshift({
      ...result,
      timestamp: new Date().toISOString(),
      id: 'res_' + Date.now()
    });
    localStorage.setItem(prefix + 'history', JSON.stringify(history));

    // Also update mistake bank if any wrong questions
    if (result.wrongQuestions && result.wrongQuestions.length > 0) {
      this.addMistakes(result.wrongQuestions, result.subject);
    }

    // Update streak
    this.updateStreak();
  }

  // 3. Mistake Bank (Isolated per account)
  getMistakes() {
    const prefix = this.getCurrentPrefix();
    try {
      return JSON.parse(localStorage.getItem(prefix + 'mistakes')) || [];
    } catch {
      return [];
    }
  }

  addMistakes(questions, subject) {
    const prefix = this.getCurrentPrefix();
    const currentMistakes = this.getMistakes();
    const existingIds = new Set(currentMistakes.map(m => m.id));

    questions.forEach(q => {
      if (!existingIds.has(q.id)) {
        currentMistakes.push({
          ...q,
          subject: subject || q.subject,
          addedAt: new Date().toISOString(),
          attempts: 1,
          resolved: false
        });
      }
    });

    localStorage.setItem(prefix + 'mistakes', JSON.stringify(currentMistakes));
  }

  removeMistake(questionId) {
    const prefix = this.getCurrentPrefix();
    let currentMistakes = this.getMistakes();
    currentMistakes = currentMistakes.filter(m => m.id !== questionId);
    localStorage.setItem(prefix + 'mistakes', JSON.stringify(currentMistakes));
  }

  // 4. Flashcards (Isolated per account)
  getMasteredFlashcards() {
    const prefix = this.getCurrentPrefix();
    try {
      return JSON.parse(localStorage.getItem(prefix + 'flashcards')) || [];
    } catch {
      return [];
    }
  }

  toggleMasteredFlashcard(cardFrontText) {
    const prefix = this.getCurrentPrefix();
    const mastered = this.getMasteredFlashcards();
    const idx = mastered.indexOf(cardFrontText);
    if (idx > -1) {
      mastered.splice(idx, 1);
    } else {
      mastered.push(cardFrontText);
    }
    localStorage.setItem(prefix + 'flashcards', JSON.stringify(mastered));
    return idx === -1; // true if now mastered
  }

  updateStreak() {
    const profile = this.getProfile();
    const today = new Date().toISOString().split('T')[0];
    if (profile.lastActiveDate !== today) {
      profile.streakDays = (profile.streakDays || 0) + 1;
      profile.lastActiveDate = today;
      this.saveProfile(profile);
    }
  }

  addXP(amount = 20) {
    const profile = this.getProfile();
    profile.xp = (profile.xp || 0) + amount;
    profile.masteredMistakesCount = (profile.masteredMistakesCount || 0) + 1;
    this.saveProfile(profile);
    return profile.xp;
  }

  clearCookies() {
    try {
      const cookies = document.cookie.split(";");
      const hostname = window.location.hostname;
      const hostParts = hostname ? hostname.split(".") : [];

      cookies.forEach(cookie => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
        if (!name) return;

        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;

        if (hostname) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname};`;
        }

        if (hostParts.length > 1) {
          const domain = hostParts.slice(-2).join(".");
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;
        }
      });
    } catch (e) {
      console.warn("Could not clear cookies:", e);
    }
  }

  resetAllData() {
    this.clearCookies();
    try { sessionStorage.clear(); } catch (e) {}

    // Clean legacy unpartitioned keys
    localStorage.removeItem('edupass_profile');
    localStorage.removeItem('edupass_history');
    localStorage.removeItem('edupass_mistakes');
    localStorage.removeItem('edupass_flashcards');
    localStorage.removeItem('edupass_streak');
    localStorage.removeItem('edupass_last_exam');
    localStorage.removeItem('edupass_active_exam');

    // Clean current partition
    const prefix = this.getCurrentPrefix();
    localStorage.removeItem(prefix + 'profile');
    localStorage.removeItem(prefix + 'history');
    localStorage.removeItem(prefix + 'mistakes');
    localStorage.removeItem(prefix + 'flashcards');
    localStorage.removeItem(prefix + 'streak');
  }
}

window.storageManager = new StorageManager();
