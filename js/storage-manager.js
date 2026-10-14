// =========================================================
// EDUPASS 10 - STORAGE MANAGER
// LocalStorage Persistence, Seed Data & History Management
// =========================================================

class StorageManager {
  constructor() {
    this.KEYS = {
      PROFILE: 'edupass_profile',
      EXAM_HISTORY: 'edupass_history',
      MISTAKE_BANK: 'edupass_mistakes',
      FLASHCARDS: 'edupass_flashcards',
      STREAK: 'edupass_streak'
    };

    this.initDefaults();
  }

  initDefaults() {
    const isCleanZero = localStorage.getItem('edupass_zero_clean_v6');
    const history = this.getExamHistory();
    const hasSeedHistory = history.some(h => String(h.id).startsWith('seed_'));
    const mistakes = this.getMistakes();
    const hasSeedMistakes = mistakes.some(m => String(m.id).startsWith('m01_') || String(m.id).startsWith('e01_'));
    const profile = this.getProfile();

    if (!isCleanZero || hasSeedHistory || hasSeedMistakes || profile.streakDays === 6) {
      this.resetAllData();
      return;
    }

    if (!profile || !profile.targetSchool) {
      const defaultProfile = {
        name: "Sĩ Tử Lớp 9",
        targetSchool: "THPT Nguyễn Thượng Hiền (TP.HCM)",
        benchmarkScore: 25.5, // Điểm chuẩn tuyển sinh lớp 10 TP.HCM
        targetAverage: 8.5,
        region: "TP. Hồ Chí Minh",
        examDate: "2026-06-06",
        streakDays: 0,
        lastActiveDate: null
      };
      this.saveProfile(defaultProfile);
    }

    if (localStorage.getItem(this.KEYS.EXAM_HISTORY) === null) {
      localStorage.setItem(this.KEYS.EXAM_HISTORY, JSON.stringify([]));
    }
    if (localStorage.getItem(this.KEYS.MISTAKE_BANK) === null) {
      localStorage.setItem(this.KEYS.MISTAKE_BANK, JSON.stringify([]));
    }
    if (localStorage.getItem(this.KEYS.FLASHCARDS) === null) {
      localStorage.setItem(this.KEYS.FLASHCARDS, JSON.stringify([]));
    }
  }

  getProfile() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.PROFILE)) || {};
    } catch {
      return {};
    }
  }

  saveProfile(profile) {
    localStorage.setItem(this.KEYS.PROFILE, JSON.stringify(profile));
  }

  getExamHistory() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.EXAM_HISTORY)) || [];
    } catch {
      return [];
    }
  }

  saveExamResult(result) {
    const history = this.getExamHistory();
    history.unshift({
      ...result,
      timestamp: new Date().toISOString(),
      id: 'res_' + Date.now()
    });
    localStorage.setItem(this.KEYS.EXAM_HISTORY, JSON.stringify(history));

    // Also update mistake bank if any wrong questions
    if (result.wrongQuestions && result.wrongQuestions.length > 0) {
      this.addMistakes(result.wrongQuestions, result.subject);
    }

    // Update streak
    this.updateStreak();
  }

  getMistakes() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.MISTAKE_BANK)) || [];
    } catch {
      return [];
    }
  }

  addMistakes(questions, subject) {
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

    localStorage.setItem(this.KEYS.MISTAKE_BANK, JSON.stringify(currentMistakes));
  }

  removeMistake(questionId) {
    let currentMistakes = this.getMistakes();
    currentMistakes = currentMistakes.filter(m => m.id !== questionId);
    localStorage.setItem(this.KEYS.MISTAKE_BANK, JSON.stringify(currentMistakes));
  }

  getMasteredFlashcards() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.FLASHCARDS)) || [];
    } catch {
      return [];
    }
  }

  toggleMasteredFlashcard(cardFrontText) {
    const mastered = this.getMasteredFlashcards();
    const idx = mastered.indexOf(cardFrontText);
    if (idx > -1) {
      mastered.splice(idx, 1);
    } else {
      mastered.push(cardFrontText);
    }
    localStorage.setItem(this.KEYS.FLASHCARDS, JSON.stringify(mastered));
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

  resetAllData() {
    localStorage.removeItem(this.KEYS.EXAM_HISTORY);
    localStorage.removeItem(this.KEYS.MISTAKE_BANK);
    localStorage.removeItem(this.KEYS.FLASHCARDS);
    localStorage.removeItem(this.KEYS.STREAK);
    localStorage.removeItem('edupass_last_exam');
    localStorage.removeItem('edupass_active_exam');
    localStorage.removeItem('edupass_mistakes');
    localStorage.removeItem('edupass_history');
    localStorage.removeItem('edupass_flashcards');

    const cleanProfile = {
      name: "Sĩ Tử Lớp 9",
      targetSchool: "THPT Nguyễn Thượng Hiền (TP.HCM)",
      benchmarkScore: 25.5,
      targetAverage: 8.5,
      region: "TP. Hồ Chí Minh",
      examDate: "2026-06-06",
      streakDays: 0,
      lastActiveDate: null
    };
    this.saveProfile(cleanProfile);
    localStorage.setItem(this.KEYS.EXAM_HISTORY, JSON.stringify([]));
    localStorage.setItem(this.KEYS.MISTAKE_BANK, JSON.stringify([]));
    localStorage.setItem(this.KEYS.FLASHCARDS, JSON.stringify([]));
    localStorage.setItem('edupass_zero_clean_v6', 'true');
  }
}

window.storageManager = new StorageManager();
