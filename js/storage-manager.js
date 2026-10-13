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
    // Check if initial run
    const existingProfile = localStorage.getItem(this.KEYS.PROFILE);
    if (!existingProfile || existingProfile.includes("Chu Văn An")) {
      const defaultProfile = {
        name: "Sĩ Tử Lớp 9 TP.HCM",
        targetSchool: "THPT Nguyễn Thượng Hiền (TP.HCM)",
        benchmarkScore: 25.5, // Điểm chuẩn tuyển sinh lớp 10 TP.HCM
        targetAverage: 8.5,
        region: "TP. Hồ Chí Minh",
        examDate: "2026-06-06",
        streakDays: 6,
        lastActiveDate: new Date().toISOString().split('T')[0]
      };
      this.saveProfile(defaultProfile);
    }

    if (!localStorage.getItem(this.KEYS.EXAM_HISTORY)) {
      this.seedSampleData();
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

  seedSampleData() {
    // Generate realistic historical exam tests
    const sampleHistory = [
      {
        id: 'seed_01',
        examId: 'math_exam_01',
        title: 'Đề thi thử Tuyển sinh Lớp 10 - Đề số 01 (Hà Nội)',
        subject: 'math',
        score: 8.0,
        correctCount: 12,
        totalQuestions: 15,
        timeSpentSeconds: 1840,
        timestamp: new Date(Date.now() - 6 * 86400000).toISOString()
      },
      {
        id: 'seed_02',
        examId: 'eng_exam_01',
        title: 'Đề thi thử Tuyển sinh Lớp 10 - Tiếng Anh (Đề số 01)',
        subject: 'english',
        score: 8.5,
        correctCount: 17,
        totalQuestions: 20,
        timeSpentSeconds: 1520,
        timestamp: new Date(Date.now() - 4 * 86400000).toISOString()
      },
      {
        id: 'seed_03',
        examId: 'lit_exam_01',
        title: 'Đề thi thử Tuyển sinh Lớp 10 - Ngữ Văn (Đề số 01)',
        subject: 'literature',
        score: 7.33,
        correctCount: 11,
        totalQuestions: 15,
        timeSpentSeconds: 1680,
        timestamp: new Date(Date.now() - 2 * 86400000).toISOString()
      },
      {
        id: 'seed_04',
        examId: 'math_exam_02',
        title: 'Đề thi thử Tuyển sinh Lớp 10 - Đề số 02 (Toán Thực Tế)',
        subject: 'math',
        score: 9.0,
        correctCount: 9,
        totalQuestions: 10,
        timeSpentSeconds: 1400,
        timestamp: new Date(Date.now() - 1 * 86400000).toISOString()
      }
    ];

    localStorage.setItem(this.KEYS.EXAM_HISTORY, JSON.stringify(sampleHistory));

    // Seed some initial mistakes to explore
    const sampleMistakes = [
      {
        id: "m01_q06",
        subject: "math",
        topic: "Định lý Vi-ét & Phương trình bậc hai",
        difficulty: "Vận dụng",
        question: "Tìm tất cả các giá trị của $m$ để phương trình $x^2 - 2(m-1)x + m^2 - 3 = 0$ có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1 + x_2 = 4$:",
        options: [
          "$m = 3$",
          "$m = -1$",
          "$m = 3$ hoặc $m = -1$",
          "Không có giá trị nào của $m$"
        ],
        correctIndex: 0,
        userAnswer: 0,
        explanation: "Bước 1: Phương trình có 2 nghiệm phân biệt khi $\\Delta' > 0$:\n$\\Delta' = -2m + 4 > 0 \\Leftrightarrow m < 2$.\nBước 2: Vi-ét cho $x_1 + x_2 = 2(m-1) = 4 \\Leftrightarrow m = 3$.\nSo với ĐK: $m = 3$ loại vì không thỏa $m < 2$. Vậy không có giá trị nào của m!",
        trapTip: "Bẫy kinh điển: Quên đối chiếu điều kiện Delta > 0 trước khi kết luận nghiệm theo Vi-ét!"
      },
      {
        id: "e01_q14",
        subject: "english",
        topic: "Tìm lỗi sai (Error Identification)",
        difficulty: "Vận dụng",
        question: "Find the underlined part that needs correction: 'She asked me (A) <u>how old was I</u> (B) <u>and where</u> (C) <u>I came</u> (D) <u>from</u>.'",
        options: [
          "how old was I",
          "and where",
          "I came",
          "from"
        ],
        correctIndex: 0,
        userAnswer: 1,
        explanation: "Trong câu gián tiếp Wh-question, trật tự từ KHÔNG ĐẢO NGỮ: S + asked + Wh-word + S + V. 'how old was I' phải sửa thành 'how old I was'.",
        trapTip: "Trật tự từ trong câu gián tiếp luôn là khẳng định (S + V)."
      }
    ];
    localStorage.setItem(this.KEYS.MISTAKE_BANK, JSON.stringify(sampleMistakes));
  }

  resetAllData() {
    localStorage.removeItem(this.KEYS.PROFILE);
    localStorage.removeItem(this.KEYS.EXAM_HISTORY);
    localStorage.removeItem(this.KEYS.MISTAKE_BANK);
    localStorage.removeItem(this.KEYS.FLASHCARDS);
    this.initDefaults();
  }
}

window.storageManager = new StorageManager();
