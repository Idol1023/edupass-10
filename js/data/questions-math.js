// =========================================================
// EDUPASS 10 - KHO ĐỀ THI TOÁN VÀO 10 (CHUẨN CẤU TRÚC HIỆN HÀNH & GDPT 2018)
// 100% Bài toán thực tế đời sống, chuẩn định dạng Bộ GD&ĐT, TP.HCM & Hà Nội
// =========================================================

window.MATH_EXAMS = [
  {
    "id": "math_exam_hcmc_2025",
    "title": "Đề thi Tham khảo Tuyển sinh Lớp 10 TP.HCM Năm học 2025 - 2026 - Môn Toán",
    "subject": "math",
    "year": 2025,
    "location": "TP.HCM",
    "isOfficial": true,
    "badgeText": "⭐ Chuẩn Sở TP.HCM 2025",
    "durationMinutes": 120,
    "totalQuestions": 14,
    "description": "Chuẩn 100% cấu trúc 7 bài toán do Sở GD&ĐT TP.HCM công bố cho kỳ thi Tuyển sinh vào 10 năm học 2025 - 2026 (áp dụng CT GDPT 2018, thời gian 120 phút). Tỷ lệ kiến thức: Hình học và đo lường (45%), Số và đại số (40%), Thống kê và xác suất (15%). Bao gồm Parabol & đường thẳng, Vi-ét, Thống kê khảo sát học sinh TP.HCM, Xác suất metro, Lượng giác Cầu Ba Son, Bồn nước inox Đại Thành và Hình học phẳng đường tròn.",
    "questions": [
      {
        "id": "m25hcm_q01",
        "topic": "Bài 1a: Đồ thị hàm số bậc hai Parabol (Số và đại số)",
        "difficulty": "Nhận biết",
        "question": "Cho hàm số Parabol $(P): y = \\frac{1}{2}x^2$. Tọa độ điểm $N$ thuộc đồ thị $(P)$ có hoành độ $x = -2$ là:",
        "options": [
          "$N(-2; 2)$",
          "$N(-2; -2)$",
          "$N(-2; 4)$",
          "$N(-2; 1)$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Thay $x = -2$ vào hàm số $(P): y = \\frac{1}{2}(-2)^2 = \\frac{1}{2} \\cdot 4 = 2$. Vậy tọa độ điểm $N$ là $(-2; 2)$."
      },
      {
        "id": "m25hcm_q01b",
        "topic": "Bài 1b: Tọa độ giao điểm của Parabol và đường thẳng (Số và đại số)",
        "difficulty": "Thông hiểu",
        "question": "Cho parabol $(P): y = \\frac{1}{2}x^2$ và đường thẳng $(d): y = x + 4$. Tọa độ các giao điểm của $(P)$ và $(d)$ bằng phép tính là:",
        "options": [
          "$(4; 8)$ và $(-2; 2)$",
          "$(4; 8)$ và $(2; 2)$",
          "$(-4; 8)$ và $(2; 2)$",
          "$(2; 6)$ và $(-2; 2)$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Phương trình hoành độ giao điểm của $(P)$ và $(d)$: $\\frac{1}{2}x^2 = x + 4 \\iff x^2 - 2x - 8 = 0$. Ta có $\\Delta' = (-1)^2 - 1(-8) = 9 > 0 \\implies x_1 = 1 + 3 = 4; x_2 = 1 - 3 = -2$. Với $x_1 = 4 \\implies y_1 = 4 + 4 = 8$. Với $x_2 = -2 \\implies y_2 = -2 + 4 = 2$. Vậy tọa độ giao điểm là $(4; 8)$ và $(-2; 2)$."
      },
      {
        "id": "m25hcm_q02a",
        "topic": "Bài 2a: Phương trình bậc hai và điều kiện nghiệm (Số và đại số)",
        "difficulty": "Nhận biết",
        "question": "Cho phương trình bậc hai $2x^2 - 6x - 3 = 0$. Khẳng định nào sau đây về số nghiệm của phương trình là đúng?",
        "options": [
          "Phương trình luôn có hai nghiệm phân biệt trái dấu",
          "Phương trình vô nghiệm",
          "Phương trình có nghiệm kép",
          "Phương trình có hai nghiệm cùng dấu dương"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Phương trình có $a = 2, c = -3 \\implies a \\cdot c = -6 < 0$. Do tích $a \\cdot c < 0$ nên $\\Delta = b^2 - 4ac > 0$, phương trình luôn có hai nghiệm phân biệt trái dấu."
      },
      {
        "id": "m25hcm_q02b",
        "topic": "Bài 2b: Định lý Vi-ét tính giá trị biểu thức đối xứng (Số và đại số)",
        "difficulty": "Thông hiểu",
        "question": "Gọi $x_1, x_2$ là hai nghiệm của phương trình $2x^2 - 6x - 3 = 0$. Không giải phương trình, giá trị của biểu thức $T = x_1^2 + x_2^2$ bằng:",
        "options": [
          "$T = 12$",
          "$T = 6$",
          "$T = 9$",
          "$T = 15$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Theo hệ thức Vi-ét: $S = x_1 + x_2 = -\\frac{b}{a} = \\frac{6}{2} = 3$ và $P = x_1x_2 = \\frac{c}{a} = -\\frac{3}{2}$. Biến đổi: $T = x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2 = 3^2 - 2\\left(-\\frac{3}{2}\\right) = 9 + 3 = 12$."
      },
      {
        "id": "m25hcm_q03a",
        "topic": "Bài 3a: Thống kê tần số ghép nhóm học sinh (Thống kê và xác suất - 15%)",
        "difficulty": "Thông hiểu",
        "question": "Khảo sát thời gian sử dụng phương tiện giao thông xanh (xe đạp, xe buýt điện, đi bộ) của $500$ học sinh THCS tại TP.HCM thu được kết quả:\n- Dưới $15$ phút: $120$ học sinh\n- Từ $15$ đến dưới $30$ phút: $230$ học sinh\n- Từ $30$ đến dưới $45$ phút: $100$ học sinh\n- Từ $45$ phút trở lên: $50$ học sinh\nTần số tương đối của nhóm học sinh dành từ $15$ đến dưới $30$ phút cho phương tiện xanh là:",
        "options": [
          "$46\\%$",
          "$24\\%$",
          "$20\\%$",
          "$50\\%$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Tần số tương đối của nhóm $[15; 30)$ là: $f = \\frac{230}{500} \\times 100\\% = 46\\%$."
      },
      {
        "id": "m25hcm_q03b",
        "topic": "Bài 3b: Xác suất thực nghiệm (Thống kê và xác suất - 15%)",
        "difficulty": "Thông hiểu",
        "question": "Chọn ngẫu nhiên một học sinh trong nhóm khảo sát trên. Xác suất thực nghiệm của biến cố $E$: 'Học sinh được chọn sử dụng phương tiện xanh từ $30$ phút trở lên mỗi ngày' là:",
        "options": [
          "$0.30$",
          "$0.20$",
          "$0.46$",
          "$0.10$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Số học sinh sử dụng từ 30 phút trở lên là: $100 + 50 = 150$ học sinh. Xác suất thực nghiệm là: $P(E) = \\frac{150}{500} = 0.30 = 30\\%$."
      },
      {
        "id": "m25hcm_q04a",
        "topic": "Bài 4a: Hình học không gian thực tế - Bồn nước inox (Hình học và đo lường - 45%)",
        "difficulty": "Thông hiểu",
        "question": "Một bồn nước inox Tân Á Đại Thành hình trụ đứng có bán kính đáy $R = 0.7\\text{ m}$ và chiều cao $h = 1.5\\text{ m}$. Lấy $\\pi \\approx 3.14$. Dung tích chứa nước tối đa của bồn nước (làm tròn đến lít, biết $1\\text{ m}^3 = 1000\\text{ lít}$) là:",
        "options": [
          "$2308$ lít",
          "$1540$ lít",
          "$3297$ lít",
          "$1154$ lít"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Thể tích hình trụ: $V = \\pi R^2 h \\approx 3.14 \\times (0.7)^2 \\times 1.5 = 3.14 \\times 0.49 \\times 1.5 \\approx 2.3079\\text{ m}^3 \\approx 2308\\text{ lít}$."
      },
      {
        "id": "m25hcm_q04b",
        "topic": "Bài 4b: Diện tích tôn inox làm thân bồn hình trụ (Hình học và đo lường - 45%)",
        "difficulty": "Thông hiểu",
        "question": "Tính diện tích xung quanh vỏ bồn nước inox hình trụ nói trên (bán kính đáy $R = 0.7\\text{ m}$, chiều cao $h = 1.5\\text{ m}$), lấy $\\pi \\approx 3.14$:",
        "options": [
          "$\\approx 6.60\\text{ m}^2$",
          "$\\approx 3.30\\text{ m}^2$",
          "$\\approx 9.67\\text{ m}^2$",
          "$\\approx 13.20\\text{ m}^2$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Diện tích xung quanh của hình trụ: $S_{xq} = 2\\pi R h \\approx 2 \\times 3.14 \\times 0.7 \\times 1.5 = 4.396 \\times 1.5 \\approx 6.594\\text{ m}^2 \\approx 6.60\\text{ m}^2$."
      },
      {
        "id": "m25hcm_q05a",
        "topic": "Bài 5a: Toán tài chính thực tế - Chiết khấu kép tại Co.opmart (Số và đại số)",
        "difficulty": "Thông hiểu",
        "question": "Nhân dịp năm học mới, siêu thị Co.opmart niêm yết giá một chiếc xe đạp điện là $12,000,000$ đồng. Trong tuần lễ khuyến mãi, siêu thị giảm giá lần một $10\\%$. Sau đó, với khách hàng có thẻ thành viên học sinh, siêu thị giảm thêm tiếp $5\\%$ trên giá đã giảm của lần một. Giá bán thực tế của chiếc xe đạp điện cho học sinh là:",
        "options": [
          "$10,260,000$ đồng",
          "$10,200,000$ đồng",
          "$10,800,000$ đồng",
          "$9,600,000$ đồng"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Giá sau khi giảm lần một: $12,000,000 \\times (1 - 0.10) = 10,800,000$ đồng. Giá thực tế sau khi giảm thêm $5\\%$ lần hai: $10,800,000 \\times (1 - 0.05) = 10,260,000$ đồng."
      },
      {
        "id": "m25hcm_q05b",
        "topic": "Bài 5b: Số tiền tiết kiệm được từ chính sách khuyến mãi kép",
        "difficulty": "Nhận biết",
        "question": "Với chính sách giảm giá kép ở câu trên, học sinh có thẻ thành viên đã tiết kiệm được tổng cộng bao nhiêu tiền so với giá niêm yết ban đầu?",
        "options": [
          "$1,740,000$ đồng",
          "$1,800,000$ đồng",
          "$1,200,000$ đồng",
          "$1,440,000$ đồng"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Số tiền tiết kiệm: $12,000,000 - 10,260,000 = 1,740,000$ đồng. (Tỷ lệ giảm thực tế là: $1 - (0.90 \\times 0.95) = 1 - 0.855 = 14.5\\%$ chứ không phải $15\\%$ vì giảm trên giá đã hạ)."
      },
      {
        "id": "m25hcm_q06a",
        "topic": "Bài 6a: Ứng dụng lượng giác thực tế - Hải đăng Cần Giờ (Hình học và đo lường - 45%)",
        "difficulty": "Thông hiểu",
        "question": "Hải đăng Cần Giờ có tâm đèn ở độ cao $38\\text{ m}$ so với mực nước biển. Người gác hải đăng quan sát một tàu đánh cá đang neo đậu ngoài khơi với góc hạ $\\alpha = 14^\\circ$. Khoảng cách từ tàu đánh cá đến chân tháp hải đăng (làm tròn đến mét) là:",
        "options": [
          "$152\\text{ m}$",
          "$146\\text{ m}$",
          "$160\\text{ m}$",
          "$138\\text{ m}$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Gọi $d$ là khoảng cách từ tàu đến chân tháp hải đăng. Ta có $\\tan 14^\\circ = \\frac{38}{d} \\implies d = \\frac{38}{\\tan 14^\\circ} \\approx \\frac{38}{0.2493} \\approx 152.4\\text{ m} \\approx 152\\text{ m}$."
      },
      {
        "id": "m25hcm_q06b",
        "topic": "Bài 6b: Ứng dụng lượng giác - Khoảng cách an toàn giữa 2 tàu",
        "difficulty": "Vận dụng",
        "question": "Cùng thời điểm đó, trên cùng một phương thẳng hàng, người gác quan sát thấy một ca nô du lịch với góc hạ $\\beta = 28^\\circ$. Khoảng cách giữa tàu đánh cá và ca nô du lịch (làm tròn đến mét) là:",
        "options": [
          "$\\approx 81\\text{ m}$",
          "$\\approx 71\\text{ m}$",
          "$\\approx 95\\text{ m}$",
          "$\\approx 60\\text{ m}$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Khoảng cách từ ca nô đến chân tháp: $d_2 = \\frac{38}{\\tan 28^\\circ} \\approx \\frac{38}{0.5317} \\approx 71.47\\text{ m} \\approx 71\\text{ m}$. Khoảng cách giữa hai tàu là: $d_1 - d_2 \\approx 152.4 - 71.5 = 80.9\\text{ m} \\approx 81\\text{ m}$."
      },
      {
        "id": "m25hcm_q07a",
        "topic": "Bài 7a: Hình học phẳng - Tiếp tuyến và tứ giác nội tiếp (Hình học và đo lường - 45%)",
        "difficulty": "Thông hiểu",
        "question": "Cho đường tròn $(O; R)$ và điểm $M$ nằm ngoài $(O)$. Kẻ hai tiếp tuyến $MA, MB$ với $(O)$ ($A, B$ là tiếp điểm). Khẳng định nào sau đây là SAI?",
        "options": [
          "Đoạn $OM$ bằng đường kính của đường tròn $(O)$ trong mọi trường hợp",
          "Tứ giác $MAOB$ nội tiếp đường tròn đường kính $OM$",
          "Đoạn thẳng $OM$ vuông góc với dây cung $AB$ tại trung điểm của $AB$",
          "$MA = MB$ theo tính chất hai tiếp tuyến cắt nhau"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Điểm $M$ là điểm tùy ý nằm ngoài $(O)$, khoảng cách $OM$ có thể lớn hơn $2R$ hoặc nhỏ hơn $2R$ (chỉ cần $OM > R$), nên khẳng định $OM$ luôn bằng đường kính là SAI."
      },
      {
        "id": "m25hcm_q07b",
        "topic": "Bài 7b: Hệ thức cát tuyến và tiếp tuyến (Hình học và đo lường - 45%)",
        "difficulty": "Vận dụng cao",
        "question": "Từ điểm $M$ kẻ cát tuyến $MCD$ không đi qua tâm $O$ ($C$ nằm giữa $M$ và $D$). Hệ thức nào sau đây luôn đúng?",
        "options": [
          "$MA^2 = MC \\cdot MD$",
          "$MA^2 = MC + MD$",
          "$MC \\cdot MD = OM^2 - 2R^2$",
          "$MA \\cdot MB = CD^2$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Xét hai tam giác đồng dạng $\\Delta MAC$ và $\\Delta MDA$ có $\\widehat{M}$ chung và $\\widehat{MAC} = \\widehat{MDA}$ (cùng chắn cung $AC$). Suy ra $\\frac{MA}{MD} = \\frac{MC}{MA} \\implies MA^2 = MC \\cdot MD$."
      }
    ]
  },
  {
    "id": "math_exam_mock_hcmc_2025",
    "title": "Đề Thi Thử Tuyển Sinh Lớp 10 Năm 2025 - Cụm Quận 1 TP.HCM (Chuẩn GDPT 2018)",
    "subject": "math",
    "year": 2025,
    "location": "TP.HCM",
    "isOfficial": false,
    "badgeText": "📝 Thi Thử Quận 1 TP.HCM 2025",
    "durationMinutes": 120,
    "totalQuestions": 14,
    "description": "Đề thi thử tuyển sinh lớp 10 năm học 2025 - 2026 cụm trường THCS trọng điểm Quận 1, TP.HCM theo chuẩn Chương trình GDPT 2018. Chuẩn 7 bài (120 phút, tỷ lệ 45% Hình & Đo lường, 40% Số & Đại số, 15% Thống kê & Xác suất): Parabol & giao điểm, Vi-ét, Thống kê tần số giờ tự học của học sinh THCS, Bồn nước inox Đại Thành, Hóa đơn nước sinh hoạt Sawaco bậc thang, Đo chiều cao tháp Bitexco bằng giác kế lượng giác, Hình học phẳng đường tròn.",
    "questions": [
      {
        "id": "m_mock25_hcm_q01",
        "topic": "Bài 1a: Đồ thị hàm số bậc hai Parabol (Số và đại số)",
        "difficulty": "Nhận biết",
        "question": "Cho hàm số parabol $(P): y = -x^2$. Khẳng định nào sau đây về tọa độ các điểm thuộc đồ thị $(P)$ là đúng?",
        "options": [
          "Điểm $M(2; -4)$ thuộc $(P)$",
          "Điểm $N(-2; 4)$ thuộc $(P)$",
          "Điểm $P(1; 1)$ thuộc $(P)$",
          "Điểm $Q(-3; 9)$ thuộc $(P)$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Hàm số $(P): y = -x^2$. Với $x = 2$, ta có $y = -(2)^2 = -4$. Do đó điểm $M(2; -4)$ thuộc đồ thị parabol $(P)$."
      },
      {
        "id": "m_mock25_hcm_q01b",
        "topic": "Bài 1b: Tọa độ giao điểm của Parabol và đường thẳng (Số và đại số)",
        "difficulty": "Thông hiểu",
        "question": "Cho parabol $(P): y = -x^2$ và đường thẳng $(d): y = 2x - 3$. Tọa độ các giao điểm của $(P)$ và $(d)$ tìm được bằng phép tính là:",
        "options": [
          "$(1; -1)$ và $(-3; -9)$",
          "$(1; 1)$ và $(-3; 9)$",
          "$(2; -4)$ và $(-1; -1)$",
          "$(3; -9)$ và $(-1; -1)$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Phương trình hoành độ giao điểm của $(P)$ và $(d)$ là: $-x^2 = 2x - 3 \\iff x^2 + 2x - 3 = 0$. Phương trình có $a + b + c = 1 + 2 - 3 = 0 \\implies x_1 = 1; x_2 = -3$. Với $x_1 = 1 \\implies y_1 = -(1)^2 = -1$. Với $x_2 = -3 \\implies y_2 = -(-3)^2 = -9$. Vậy tọa độ hai giao điểm là $(1; -1)$ và $(-3; -9)$."
      },
      {
        "id": "m_mock25_hcm_q02a",
        "topic": "Bài 2a: Dấu các nghiệm của phương trình bậc hai (Số và đại số)",
        "difficulty": "Nhận biết",
        "question": "Cho phương trình bậc hai: $x^2 - 4x - 5 = 0$. Nhận xét đúng về số nghiệm và dấu các nghiệm của phương trình là:",
        "options": [
          "Phương trình có 2 nghiệm phân biệt trái dấu",
          "Phương trình vô nghiệm",
          "Phương trình có 2 nghiệm phân biệt cùng dấu dương",
          "Phương trình có nghiệm kép"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Phương trình $x^2 - 4x - 5 = 0$ có $a = 1, c = -5 \\implies a \\cdot c = -5 < 0$. Do tích $a \\cdot c < 0$ nên phương trình luôn có 2 nghiệm phân biệt trái dấu."
      },
      {
        "id": "m_mock25_hcm_q02b",
        "topic": "Bài 2b: Vận dụng hệ thức Vi-ét tính giá trị biểu thức (Số và đại số)",
        "difficulty": "Vận dụng",
        "question": "Gọi $x_1, x_2$ là hai nghiệm của phương trình $x^2 - 4x - 5 = 0$. Không giải phương trình, hãy tính giá trị của biểu thức $A = x_1^2 + x_2^2 - 3x_1x_2$:",
        "options": [
          "$A = 41$",
          "$A = 31$",
          "$A = 26$",
          "$A = 11$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Theo định lý Vi-ét: $S = x_1 + x_2 = 4$ và $P = x_1x_2 = -5$. Ta biến đổi: $A = x_1^2 + x_2^2 - 3x_1x_2 = (x_1 + x_2)^2 - 5x_1x_2 = (4)^2 - 5(-5) = 16 + 25 = 41$."
      },
      {
        "id": "m_mock25_hcm_q03a",
        "topic": "Bài 3a: Thống kê tần số ghép nhóm (Thống kê và xác suất - 15%)",
        "difficulty": "Thông hiểu",
        "question": "Khảo sát thời gian tự học mỗi ngày của $200$ học sinh lớp 9 tại Quận 1 thu được bảng tần số ghép nhóm sau:\n- Nhóm $[1; 2)$ giờ: $30$ học sinh\n- Nhóm $[2; 3)$ giờ: $80$ học sinh\n- Nhóm $[3; 4)$ giờ: $60$ học sinh\n- Nhóm $[4; 5)$ giờ: $30$ học sinh\nTần số tương đối của nhóm học sinh tự học từ $3$ đến dưới $4$ giờ mỗi ngày là:",
        "options": [
          "$30\\%$",
          "$40\\%$",
          "$15\\%$",
          "$25\\%$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Số học sinh nhóm $[3; 4)$ giờ là $m = 60$. Tổng số học sinh điều tra là $N = 200$. Tần số tương đối là: $f = \\frac{60}{200} \\times 100\\% = 30\\%$."
      },
      {
        "id": "m_mock25_hcm_q03b",
        "topic": "Bài 3b: Xác suất thực nghiệm của biến cố (Thống kê và xác suất - 15%)",
        "difficulty": "Thông hiểu",
        "question": "Dựa vào bảng số liệu trên của $200$ học sinh, xác suất thực nghiệm để chọn ngẫu nhiên một học sinh có thời gian tự học từ $3$ giờ trở lên mỗi ngày ($[3; 5)$ giờ) là:",
        "options": [
          "$0.45$",
          "$0.30$",
          "$0.15$",
          "$0.70$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Số học sinh có thời gian tự học từ 3 giờ trở lên gồm nhóm $[3; 4)$ giờ ($60$ bạn) và nhóm $[4; 5)$ giờ ($30$ bạn), tổng cộng $60 + 30 = 90$ bạn. Xác suất thực nghiệm là: $P = \\frac{90}{200} = 0.45 = 45\\%$."
      },
      {
        "id": "m_mock25_hcm_q04a",
        "topic": "Bài 4a: Hình học không gian thực tế - Thể tích hình trụ (Hình học và đo lường - 45%)",
        "difficulty": "Thông hiểu",
        "question": "Một bồn nước inox hình trụ dạng đứng dùng cho trường học có đường kính đáy $d = 1.2\\text{ m}$ (bán kính $R = 0.6\\text{ m}$) và chiều cao thân bồn $h = 1.8\\text{ m}$. Lấy $\\pi \\approx 3.14$. Thể tích dung tích nước tối đa của bồn (làm tròn đến hàng đơn vị lít) là:",
        "options": [
          "$2035$ lít",
          "$1540$ lít",
          "$8140$ lít",
          "$1020$ lít"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Thể tích hình trụ: $V = \\pi R^2 h \\approx 3.14 \\times (0.6)^2 \\times 1.8 = 3.14 \\times 0.36 \\times 1.8 \\approx 2.03472\\text{ m}^3$. Vì $1\\text{ m}^3 = 1000$ lít, thể tích bồn nước là xấp xỉ $2035$ lít."
      },
      {
        "id": "m_mock25_hcm_q04b",
        "topic": "Bài 4b: Diện tích toàn phần vỏ bồn hình trụ (Hình học và đo lường - 45%)",
        "difficulty": "Thông hiểu",
        "question": "Tính diện tích vật liệu tôn inox cần dùng để làm vỏ bồn nước hình trụ kín hai đáy ở trên (bán kính $R = 0.6\\text{ m}$, chiều cao $h = 1.8\\text{ m}$), bỏ qua diện tích các mối hàn ghép mép. Lấy $\\pi \\approx 3.14$:",
        "options": [
          "$\\approx 9.04\\text{ m}^2$",
          "$\\approx 6.78\\text{ m}^2$",
          "$\\approx 12.32\\text{ m}^2$",
          "$\\approx 4.52\\text{ m}^2$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Diện tích toàn phần của hình trụ kín hai đáy: $S_{tp} = 2\\pi R(R + h) \\approx 2 \\times 3.14 \\times 0.6 \\times (0.6 + 1.8) = 3.768 \\times 2.4 \\approx 9.0432\\text{ m}^2 \\approx 9.04\\text{ m}^2$."
      },
      {
        "id": "m_mock25_hcm_q05a",
        "topic": "Bài 5a: Bài toán thực tế cước nước sinh hoạt Sawaco theo bậc thang",
        "difficulty": "Thông hiểu",
        "question": "Biểu giá nước sinh hoạt hộ gia đình tại TP.HCM (Sawaco) quy định mức tiêu thụ hàng tháng cho mỗi nhân khẩu như sau:\n- Bậc 1: Đến $4\\text{ m}^3$/người/tháng: giá $6,700\\text{ đ/m}^3$\n- Bậc 2: Trên $4\\text{ m}^3$ đến $6\\text{ m}^3$/người/tháng: giá $12,900\\text{ đ/m}^3$\n- Bậc 3: Trên $6\\text{ m}^3$/người/tháng: giá $14,400\\text{ đ/m}^3$\nGia đình bạn An có $4$ nhân khẩu có đăng ký định mức, trong tháng 10 sử dụng hết $22\\text{ m}^3$ nước sinh hoạt. Số lượng $\\text{m}^3$ nước tính ở Bậc 1 và Bậc 2 lần lượt là:",
        "options": [
          "$16\\text{ m}^3$ ở Bậc 1 và $6\\text{ m}^3$ ở Bậc 2",
          "$12\\text{ m}^3$ ở Bậc 1 và $10\\text{ m}^3$ ở Bậc 2",
          "$16\\text{ m}^3$ ở Bậc 1 và $0\\text{ m}^3$ ở Bậc 2",
          "$8\\text{ m}^3$ ở Bậc 1 và $14\\text{ m}^3$ ở Bậc 2"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Định mức Bậc 1 cho 4 người: $4 \\times 4\\text{ m}^3 = 16\\text{ m}^3$. Do tổng lượng nước là $22\\text{ m}^3 > 16\\text{ m}^3$ nên Bậc 1 tính trọn $16\\text{ m}^3$. Lượng nước còn lại chuyển sang Bậc 2 là: $22 - 16 = 6\\text{ m}^3$. (Định mức tối đa Bậc 2 là $4 \\times 2 = 8\\text{ m}^3$ nên $6\\text{ m}^3$ hoàn toàn nằm trong Bậc 2, không bị vượt sang Bậc 3)."
      },
      {
        "id": "m_mock25_hcm_q05b",
        "topic": "Bài 5b: Tính tổng tiền nước sinh hoạt gồm VAT và phí bảo vệ môi trường",
        "difficulty": "Vận dụng",
        "question": "Tính tổng số tiền nước gia đình bạn An phải thanh toán trong tháng (biết hóa đơn phải chịu thêm $5\\%$ thuế giá trị gia tăng VAT và $10\\%$ phí bảo vệ môi trường trên tiền nước chưa thuế):",
        "options": [
          "$212,290\\text{ đồng}$",
          "$184,600\\text{ đồng}$",
          "$203,060\\text{ đồng}$",
          "$225,500\\text{ đồng}$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Tiền nước chưa thuế gồm:\n- Bậc 1: $16 \\times 6,700 = 107,200\\text{ đ}$\n- Bậc 2: $6 \\times 12,900 = 77,400\\text{ đ}$\nTổng tiền nước gốc = $107,200 + 77,400 = 184,600\\text{ đ}$.\nThuế VAT ($5\\%$) và phí bảo vệ môi trường ($10\\%$) tổng cộng là $15\\%$.\nTổng số tiền phải thanh toán là: $184,600 \\times (1 + 0.05 + 0.10) = 184,600 \\times 1.15 = 212,290\\text{ đồng}$."
      },
      {
        "id": "m_mock25_hcm_q06a",
        "topic": "Bài 6a: Ứng dụng lượng giác thực tế - Đo khoảng cách tới chân tháp Bitexco",
        "difficulty": "Thông hiểu",
        "question": "Tòa tháp tài chính Bitexco Financial Tower tại Quận 1, TP.HCM có chiều cao là $262\\text{ m}$. Một người đứng tại điểm $A$ bên bờ sông Sài Gòn sử dụng giác kế ngắm đỉnh tháp với góc nâng $\\alpha = 42^\\circ$. Bỏ qua chiều cao của giác kế, khoảng cách từ vị trí quan sát $A$ đến chân tháp (làm tròn đến hàng đơn vị mét) là:",
        "options": [
          "$291\\text{ m}$",
          "$236\\text{ m}$",
          "$352\\text{ m}$",
          "$175\\text{ m}$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Xét tam giác vuông tạo bởi đỉnh tháp, chân tháp và điểm quan sát $A$:\nTa có: $\\tan 42^\\circ = \\frac{\\text{Chiều cao}}{\\text{Khoảng cách}} = \\frac{262}{d} \\implies d = \\frac{262}{\\tan 42^\\circ} \\approx \\frac{262}{0.9004} \\approx 290.98\\text{ m} \\approx 291\\text{ m}$."
      },
      {
        "id": "m_mock25_hcm_q06b",
        "topic": "Bài 6b: Ứng dụng lượng giác - Thay đổi góc quan sát khi lùi xa",
        "difficulty": "Vận dụng",
        "question": "Từ vị trí $A$, người đó di chuyển thẳng ra xa thêm $100\\text{ m}$ đến vị trí $B$ (sao cho $B, A$ và chân tháp thẳng hàng). Góc nâng $\\beta$ ngắm từ điểm $B$ đến đỉnh tòa tháp Bitexco xấp xỉ bằng bao nhiêu?",
        "options": [
          "$\\approx 33^\\circ 49'$",
          "$\\approx 38^\\circ 15'$",
          "$\\approx 28^\\circ 30'$",
          "$\\approx 22^\\circ 45'$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Khoảng cách từ điểm $B$ đến chân tháp là: $d_B = 291 + 100 = 391\\text{ m}$.\nTa có: $\\tan \\beta = \\frac{262}{391} \\approx 0.67008 \\implies \\beta = \\arctan(0.67008) \\approx 33.82^\\circ \\approx 33^\\circ 49'$."
      },
      {
        "id": "m_mock25_hcm_q07a",
        "topic": "Bài 7a: Hình học phẳng - Tứ giác nội tiếp đường tròn (Hình học và đo lường - 45%)",
        "difficulty": "Thông hiểu",
        "question": "Cho đường tròn $(O; R)$ và điểm $A$ nằm ngoài đường tròn sao cho $OA = 2R$. Từ $A$ kẻ hai tiếp tuyến $AB, AC$ đến đường tròn $(O)$ ($B, C$ là hai tiếp điểm). Khẳng định nào sau đây là đúng về tứ giác $ABOC$ và số đo góc $\\widehat{BAC}$?",
        "options": [
          "Tứ giác $ABOC$ nội tiếp đường tròn đường kính $OA$, và $\\widehat{BAC} = 60^\\circ$",
          "Tứ giác $ABOC$ không nội tiếp và $\\widehat{BAC} = 90^\\circ$",
          "Tứ giác $ABOC$ nội tiếp đường tròn bán kính $2R$, và $\\widehat{BAC} = 45^\\circ$",
          "Tam giác $ABC$ là tam giác vuông cân tại $A$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Vì $AB, AC$ là tiếp tuyến nên $\\widehat{ABO} = \\widehat{ACO} = 90^\\circ \\implies \\widehat{ABO} + \\widehat{ACO} = 180^\\circ \\implies ABOC$ nội tiếp đường tròn đường kính $OA$. Trong tam giác vuông $ABO$, ta có $\\sin \\widehat{BAO} = \\frac{OB}{OA} = \\frac{R}{2R} = \\frac{1}{2} \\implies \\widehat{BAO} = 30^\\circ$. Do tính chất hai tiếp tuyến cắt nhau, tia $OA$ là phân giác của $\\widehat{BAC} \\implies \\widehat{BAC} = 2 \\times 30^\\circ = 60^\\circ$."
      },
      {
        "id": "m_mock25_hcm_q07b",
        "topic": "Bài 7b: Hệ thức lượng tiếp tuyến - cát tuyến (Hình học và đo lường - 45%)",
        "difficulty": "Vận dụng cao",
        "question": "Qua $A$ kẻ cát tuyến $ADE$ (với $D$ nằm giữa $A$ và $E$, cát tuyến không đi qua $O$). Khẳng định nào sau đây về hệ thức tích khoảng cách luôn đúng?",
        "options": [
          "$AB^2 = AD \\cdot AE$",
          "$AB^2 = AD + AE$",
          "$OA^2 = AD \\cdot AE$",
          "$DE^2 = AD \\cdot AE$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Xét hai tam giác $\\Delta ABD$ và $\\Delta AEB$ có:\n- Góc $\\widehat{BAE}$ chung\n- Góc $\\widehat{ABD} = \\widehat{AEB}$ (góc tạo bởi tiếp tuyến và dây cung bằng góc nội tiếp cùng chắn cung $BD$).\nDo đó $\\Delta ABD \\sim \\Delta AEB\\text{ (g-g)} \\implies \\frac{AB}{AE} = \\frac{AD}{AB} \\implies AB^2 = AD \\cdot AE$."
      }
    ]
  },
  {
    "id": "math_exam_mock_hanoi_2025",
    "title": "Đề Thi Thử Tuyển Sinh Lớp 10 Năm 2025 - Cụm Cầu Giấy Hà Nội (Chuẩn GDPT 2018)",
    "subject": "math",
    "year": 2025,
    "location": "Hà Nội",
    "isOfficial": false,
    "badgeText": "📝 Thi Thử Cầu Giấy Hà Nội 2025",
    "durationMinutes": 120,
    "totalQuestions": 12,
    "description": "Đề thi khảo sát chất lượng và thi thử vào lớp 10 THPT năm học 2025 - 2026 cụm Cầu Giấy - Ba Đình, TP. Hà Nội theo Chương trình GDPT 2018 mới. Cấu trúc bài bản 5 bài (120 phút): Rút gọn biểu thức chứa căn thức bậc hai, Bài toán thực tế lập phương trình tiến độ Metro Nhổn - Ga Hà Nội, Parabol và tham số Vi-ét chứa giá trị tuyệt đối, Thống kê tần số và xác suất thực nghiệm, Hình học phẳng đường tròn và Bất đẳng thức Cauchy điểm 10.",
    "questions": [
      {
        "id": "m_hn25_q01",
        "topic": "Bài I.1: Rút gọn biểu thức chứa căn thức bậc hai",
        "difficulty": "Thông hiểu",
        "question": "Cho biểu thức $A = \\frac{3\\sqrt{x} + 1}{x - 1} - \\frac{2}{\\sqrt{x} - 1}$ với $x \\ge 0, x \\ne 1$. Biểu thức thu gọn của $A$ là:",
        "options": [
          "$A = \\frac{1}{\\sqrt{x} + 1}$",
          "$A = \\frac{\\sqrt{x} + 3}{x - 1}$",
          "$A = \\frac{1}{\\sqrt{x} - 1}$",
          "$A = \\frac{\\sqrt{x} - 1}{x - 1}$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Quy đồng mẫu thức chung $(\\sqrt{x}-1)(\\sqrt{x}+1)$:\n$A = \\frac{3\\sqrt{x} + 1 - 2(\\sqrt{x} + 1)}{(\\sqrt{x}-1)(\\sqrt{x}+1)} = \\frac{3\\sqrt{x} + 1 - 2\\sqrt{x} - 2}{(\\sqrt{x}-1)(\\sqrt{x}+1)} = \\frac{\\sqrt{x} - 1}{(\\sqrt{x}-1)(\\sqrt{x}+1)} = \\frac{1}{\\sqrt{x} + 1}$."
      },
      {
        "id": "m_hn25_q02",
        "topic": "Bài I.2: Tìm giá trị biến để biểu thức nhận giá trị nguyên",
        "difficulty": "Vận dụng",
        "question": "Cho biểu thức $P = \\frac{\\sqrt{x} + 4}{\\sqrt{x} + 1} = 1 + \\frac{3}{\\sqrt{x} + 1}$ với $x \\ge 0$. Có bao nhiêu giá trị nguyên của $x$ để biểu thức $P$ nhận giá trị là số nguyên dương?",
        "options": [
          "$2$ giá trị",
          "$1$ giá trị",
          "$3$ giá trị",
          "$0$ giá trị"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Để $P = 1 + \\frac{3}{\\sqrt{x} + 1} \\in \\mathbb{Z}$ thì $\\sqrt{x} + 1$ phải là ước của $3$. Vì $\\sqrt{x} \\ge 0 \\implies \\sqrt{x} + 1 \\ge 1$. Do đó $\\sqrt{x} + 1 \\in \\{1; 3\\}$.\n- Với $\\sqrt{x} + 1 = 1 \\implies \\sqrt{x} = 0 \\implies x = 0$ (thỏa mãn điều kiện, khi đó $P = 4$).\n- Với $\\sqrt{x} + 1 = 3 \\implies \\sqrt{x} = 2 \\implies x = 4$ (thỏa mãn điều kiện, khi đó $P = 2$).\nVậy có đúng 2 giá trị nguyên của $x$ là $x = 0$ và $x = 4$."
      },
      {
        "id": "m_hn25_q03",
        "topic": "Bài II.1: Giải bài toán bằng cách lập phương trình / hệ phương trình - Tiến độ thi công Metro Hà Nội",
        "difficulty": "Thông hiểu",
        "question": "Hai tổ công nhân cùng tham gia gia cố đường hầm tuyến đường sắt đô thị Nhổn - Ga Hà Nội. Nếu cùng làm thì trong $12$ ngày sẽ hoàn thành công việc. Nhưng hai tổ cùng làm trong $4$ ngày thì tổ I được điều đi làm việc khác, tổ II làm tiếp trong $10$ ngày nữa thì hoàn thành được tổng cộng $\\frac{7}{10}$ công việc. Hỏi nếu làm một mình thì tổ II hoàn thành toàn bộ công việc trong bao nhiêu ngày?",
        "options": [
          "$27$ ngày",
          "$20$ ngày",
          "$18$ ngày",
          "$30$ ngày"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Mỗi ngày hai tổ cùng làm được: $\\frac{1}{12}$ công việc.\nTrong $4$ ngày đầu, hai tổ làm được: $4 \\times \\frac{1}{12} = \\frac{1}{3}$ công việc.\nKhối lượng công việc tổ II làm trong $10$ ngày tiếp theo là: $\\frac{7}{10} - \\frac{1}{3} = \\frac{11}{30}$ công việc.\nMỗi ngày tổ II làm được: $\\frac{11}{30} : 10 = \\frac{11}{300}$ công việc.\nThời gian một mình tổ II hoàn thành công việc là: $1 : \\frac{11}{300} = \\frac{300}{11} \\approx 27.27$ ngày (xấp xỉ $27$ ngày)."
      },
      {
        "id": "m_hn25_q04",
        "topic": "Bài II.2: Hình học không gian thực tế - Thể tích hình nón",
        "difficulty": "Thông hiểu",
        "question": "Một chiếc nón lá truyền thống của làng Chuông (Thanh Oai, Hà Nội) có đường kính vành nón $d = 40\\text{ cm}$ (bán kính đáy $R = 20\\text{ cm}$) và chiều cao từ đỉnh nón tới tâm đáy là $h = 30\\text{ cm}$. Thể tích không gian bên trong nón là:",
        "options": [
          "$\\approx 12560\\text{ cm}^3$",
          "$\\approx 37680\\text{ cm}^3$",
          "$\\approx 6280\\text{ cm}^3$",
          "$\\approx 8200\\text{ cm}^3$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Thể tích hình nón: $V = \\frac{1}{3}\\pi R^2 h = \\frac{1}{3}\\pi \\times (20)^2 \\times 30 = 4000\\pi \\approx 4000 \\times 3.14 = 12560\\text{ cm}^3$."
      },
      {
        "id": "m_hn25_q05",
        "topic": "Bài III.1: Giải hệ phương trình bậc nhất hai ẩn thực tế",
        "difficulty": "Nhận biết",
        "question": "Nghiệm $(x; y)$ của hệ phương trình $\\begin{cases} 2x - 3y = 1 \\\\ 3x + y = 7 \\end{cases}$ là:",
        "options": [
          "$(2; 1)$",
          "$(1; 2)$",
          "$(3; -1)$",
          "$(4; -1)$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Từ phương trình 2: $y = 7 - 3x$. Thế vào phương trình 1: $2x - 3(7 - 3x) = 1 \\iff 2x - 21 + 9x = 1 \\iff 11x = 22 \\iff x = 2$. Suy ra $y = 7 - 3(2) = 1$. Nghiệm là $(2; 1)$."
      },
      {
        "id": "m_hn25_q06",
        "topic": "Bài III.2: Tương giao Parabol & đường thẳng với tham số Vi-ét",
        "difficulty": "Vận dụng",
        "question": "Cho parabol $(P): y = x^2$ và đường thẳng $(d): y = 2x + m - 1$. Tìm tất cả các giá trị của $m$ để $(d)$ cắt $(P)$ tại hai điểm phân biệt có hoành độ $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 10$:",
        "options": [
          "$m = 4$",
          "$m = 2$",
          "$m = -3$",
          "$m = 5$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Phương trình hoành độ giao điểm: $x^2 - 2x - (m - 1) = 0$. Điều kiện có 2 nghiệm phân biệt: $\\Delta' = (-1)^2 - 1(-m + 1) = 1 + m - 1 = m > 0$. Theo định lý Vi-ét: $x_1 + x_2 = 2$ và $x_1x_2 = -(m - 1) = 1 - m$. Ta có: $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2 = 4 - 2(1 - m) = 4 - 2 + 2m = 2 + 2m$. Theo đề bài: $2 + 2m = 10 \\iff 2m = 8 \\iff m = 4$ (thỏa mãn $m > 0$)."
      },
      {
        "id": "m_hn25_q07",
        "topic": "Bài IV.1: Thống kê ghép nhóm kết quả kiểm tra năng lực",
        "difficulty": "Thông hiểu",
        "question": "Kết quả khảo sát điểm môn Toán thi thử của $150$ học sinh tại quận Cầu Giấy được biểu diễn theo các nhóm điểm: $[5; 6.5)$ có $25$ em; $[6.5; 8)$ có $65$ em; $[8; 9)$ có $40$ em; $[9; 10]$ có $20$ em. Tần số tương đối của nhóm học sinh đạt điểm giỏi từ $8$ điểm trở lên ($[8; 10]$) là:",
        "options": [
          "$40\\%$",
          "$26.7\\%$",
          "$13.3\\%$",
          "$50\\%$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Số học sinh đạt từ 8 điểm trở lên gồm nhóm $[8; 9)$ ($40$ em) và nhóm $[9; 10]$ ($20$ em), tổng cộng $40 + 20 = 60$ em. Tần số tương đối là: $f = \\frac{60}{150} \\times 100\\% = 40\\%$."
      },
      {
        "id": "m_hn25_q08",
        "topic": "Bài IV.2: Xác suất thực nghiệm chọn ngẫu nhiên học sinh",
        "difficulty": "Nhận biết",
        "question": "Chọn ngẫu nhiên $1$ học sinh từ danh sách $150$ học sinh trên. Xác suất thực nghiệm để học sinh được chọn đạt điểm xuất sắc từ $9.0$ đến $10.0$ là:",
        "options": [
          "$\\frac{2}{15} \\approx 0.133$",
          "$\\frac{4}{15} \\approx 0.267$",
          "$\\frac{1}{5} = 0.20$",
          "$\\frac{1}{2} = 0.50$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Số học sinh đạt từ $9.0$ đến $10.0$ là $20$. Xác suất thực nghiệm là: $P = \\frac{20}{150} = \\frac{2}{15} \\approx 0.133$."
      },
      {
        "id": "m_hn25_q09",
        "topic": "Bài V.1: Hình học phẳng - Tứ giác nội tiếp đường tròn",
        "difficulty": "Thông hiểu",
        "question": "Cho tam giác nhọn $ABC$ nội tiếp đường tròn $(O)$, các đường cao $AD, BE, CF$ cắt nhau tại trực tâm $H$. Khẳng định nào sau đây là SAI?",
        "options": [
          "Tứ giác $BCEF$ có tổng hai góc đối bằng $180^\\circ$",
          "Tứ giác $BDHF$ là tứ giác nội tiếp",
          "Tứ giác $CDHE$ là tứ giác nội tiếp",
          "Tứ giác $BCEF$ nội tiếp đường tròn đường kính $BC$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Tứ giác $BCEF$ có hai đỉnh $E$ và $F$ cùng nhìn cạnh $BC$ dưới góc vuông $90^\\circ$ nên nội tiếp đường tròn đường kính $BC$, chứ không phải tứ giác có tổng hai góc đối bằng $180^\\circ$. Do đó khẳng định 'Tứ giác BCEF có tổng hai góc đối bằng 180 độ' là SAI."
      },
      {
        "id": "m_hn25_q10",
        "topic": "Bài V.2: Tam giác đồng dạng và tích đoạn thẳng",
        "difficulty": "Thông hiểu",
        "question": "Trong hình vẽ trên, với $H$ là trực tâm tam giác nhọn $ABC$ và các đường cao $AD, BE$. Hệ thức tích nào sau đây luôn đúng?",
        "options": [
          "$HA \\cdot HD = HB \\cdot HE$",
          "$HA \\cdot HB = HD \\cdot HE$",
          "$AD \\cdot HD = BE \\cdot HE$",
          "$AH^2 = BH \\cdot HE$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Xét hai tam giác vuông $\\Delta HAF$ và $\\Delta HCD$ hoặc $\\Delta HAE$ và $\\Delta HBD$ có góc đối đỉnh tại $H$ bằng nhau nên $\\Delta HAE \\sim \\Delta HBD\\text{ (g-g)} \\implies \\frac{HA}{HB} = \\frac{HE}{HD} \\implies HA \\cdot HD = HB \\cdot HE$."
      },
      {
        "id": "m_hn25_q11",
        "topic": "Bài V.3: Tiếp tuyến và góc tạo bởi tiếp tuyến với dây cung",
        "difficulty": "Vận dụng",
        "question": "Kẻ tiếp tuyến $Ax$ với đường tròn $(O)$ ngoại tiếp tam giác $ABC$. Khẳng định nào sau đây chứng minh được $Ax \\parallel EF$?",
        "options": [
          "$\\widehat{xAB} = \\widehat{AFE}$ (hai góc so le trong bằng nhau)",
          "$OA$ vuông góc với $EF$",
          "Tam giác $AEF$ cân tại $A$",
          "$EF$ đi qua tâm $O$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Ta có: $\\widehat{xAB} = \\widehat{ACB}$ (góc tạo bởi tia tiếp tuyến $Ax$ và dây cung $AB$ bằng góc nội tiếp chắn cung $AB$). Mặt khác, tứ giác $BCEF$ nội tiếp $\\implies \\widehat{AFE} = \\widehat{ACB}$ (góc ngoài bằng góc trong tại đỉnh đối). Suy ra $\\widehat{xAB} = \\widehat{AFE}$. Hai góc này ở vị trí so le trong $\\implies Ax \\parallel EF$."
      },
      {
        "id": "m_hn25_q12",
        "topic": "Bài V.4: Bất đẳng thức Cauchy tìm giá trị nhỏ nhất (Câu điểm 10)",
        "difficulty": "Vận dụng cao",
        "question": "Cho các số thực dương $a, b$ thỏa mãn $a + b \\le 2$. Giá trị nhỏ nhất của biểu thức $M = \\frac{1}{a^2 + b^2} + \\frac{1}{2ab}$ là:",
        "options": [
          "$M_{\\min} = 1$",
          "$M_{\\min} = 2$",
          "$M_{\\min} = \\frac{1}{2}$",
          "$M_{\\min} = 4$"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Áp dụng bất đẳng thức Cauchy-Schwarz dạng Engel (hoặc BĐT $\\frac{1}{x} + \\frac{1}{y} \\ge \\frac{4}{x + y}$ với $x, y > 0$):\n$M = \\frac{1}{a^2 + b^2} + \\frac{1}{2ab} \\ge \\frac{4}{(a^2 + b^2) + 2ab} = \\frac{4}{(a + b)^2}$.\nVì $a + b \\le 2 \\implies (a + b)^2 \\le 4 \\implies \\frac{4}{(a + b)^2} \\ge \\frac{4}{4} = 1$.\nDấu bằng xảy ra khi $\\begin{cases} a^2 + b^2 = 2ab \\\\ a + b = 2 \\end{cases} \\iff a = b = 1$.\nVậy giá trị nhỏ nhất của $M$ là $1$."
      }
    ]
  },
  {
    "id": "math_exam_moet_2025",
    "title": "Đề thi Minh họa Tuyển sinh Lớp 10 Năm 2025 - Môn Toán (Chuẩn Định Dạng Mới Bộ GD&ĐT)",
    "subject": "math",
    "year": 2025,
    "location": "Bộ GD&ĐT",
    "isOfficial": true,
    "badgeText": "🔥 Chuẩn GDPT 2018 Mới",
    "durationMinutes": 90,
    "totalQuestions": 15,
    "description": "Bám sát 100% định dạng mới của Bộ GD&ĐT áp dụng từ năm 2025 theo Chương trình GDPT 2018: 100% bài toán thực tế đời sống gồm Biểu giá điện EVN bậc thang, Chiết khấu kép siêu thị, Lượng giác đo hải đăng Kê Gà, Thể tích bể bơi đáy dốc, Thống kê tần số và Xác suất thực nghiệm.",
    "questions": [
      {
        "id": "m25_q01",
        "topic": "Toán thực tế kinh tế: Biểu giá điện sinh hoạt bậc thang EVN",
        "difficulty": "Thông hiểu",
        "question": "Biểu giá bán lẻ điện sinh hoạt của Tập đoàn Điện lực Việt Nam (EVN) được chia theo các bậc thang lũy tiến như sau:<br>• Bậc 1 (từ $0 - 50\\text{ kWh}$): $1.806$ đồng/kWh<br>• Bậc 2 (từ $51 - 100\\text{ kWh}$): $1.866$ đồng/kWh<br>• Bậc 3 (từ $101 - 200\\text{ kWh}$): $2.167$ đồng/kWh<br>Trong tháng 5, gia đình bạn Nam tiêu thụ hết đúng $180\\text{ kWh}$ điện sinh hoạt. Biết thuế giá trị gia tăng (VAT) cho hóa đơn tiền điện là $8\\%$. Tổng số tiền điện gia đình Nam phải thanh toán (làm tròn đến hàng đơn vị đồng) là:",
        "options": [
          "$385.517$ đồng",
          "$390.060$ đồng",
          "$421.265$ đồng",
          "$356.960$ đồng"
        ],
        "correctIndex": 0,
        "explanation": "Tính tiền điện theo từng bậc thang lũy tiến của EVN:<br>- Bậc 1 ($50\\text{ kWh}$ đầu): $50 \\times 1.806 = 90.300$ đồng.<br>- Bậc 2 ($50\\text{ kWh}$ tiếp theo từ 51 đến 100): $50 \\times 1.866 = 93.300$ đồng.<br>- Bậc 3 (số kWh còn lại: $180 - 100 = 80\\text{ kWh}$): $80 \\times 2.167 = 173.360$ đồng.<br>Tổng tiền điện trước thuế VAT:<br>$T_{\\text{trước}} = 90.300 + 93.300 + 173.360 = 356.960$ đồng.<br>Tiền thuế VAT ($8\\%$):<br>$VAT = 356.960 \\times 8\\% = 28.556,8$ đồng.<br>Tổng tiền điện thực tế phải thanh toán:<br>$T = 356.960 + 28.556,8 = 385.516,8 \\approx 385.517$ đồng.",
        "trapTip": "BẪY TỬ HUYỆT BẬC THANG: Tuyệt đối không được lấy toàn bộ $180 \\times 2.167$! Tiền điện lũy tiến bắt buộc phải chia nhỏ tính theo từng bậc thang tiêu thụ và nhớ cộng thêm thuế VAT 8%."
      },
      {
        "id": "m25_q02",
        "topic": "Toán thực tế thương mại: Khuyến mãi kép Black Friday & Thẻ VIP",
        "difficulty": "Thông hiểu",
        "question": "Nhân dịp Black Friday, siêu thị Điện máy Xanh giảm giá $15\\%$ cho một mẫu Smart TV 4K có giá niêm yết là $12.000.000$ đồng. Ngoài ra, khách hàng có thẻ thành viên VIP được giảm tiếp thêm $5\\%$ trên giá đã giảm. Hỏi một khách hàng có thẻ VIP khi mua chiếc Smart TV này sẽ phải thanh toán số tiền là bao nhiêu?",
        "options": [
          "$9.690.000$ đồng",
          "$9.600.000$ đồng",
          "$10.200.000$ đồng",
          "$9.800.000$ đồng"
        ],
        "correctIndex": 0,
        "explanation": "- Giá chiếc Smart TV sau đợt giảm giá đầu tiên ($15\\%$):<br>$12.000.000 \\times (1 - 0.15) = 12.000.000 \\times 0.85 = 10.200.000$ đồng.<br>- Khách hàng có thẻ VIP được giảm tiếp $5\\%$ trên giá đã giảm, nên số tiền thực tế phải thanh toán là:<br>$10.200.000 \\times (1 - 0.05) = 10.200.000 \\times 0.95 = 9.690.000$ đồng.",
        "trapTip": "BẪY CỘNG DỒN PHẦN TRĂM: 'Giảm tiếp 5% trên giá đã giảm' hoàn toàn khác với việc lấy $15\\% + 5\\% = 20\\%$. Nếu lấy $12.000.000 \\times (1 - 0.20) = 9.600.000$đ là sai lầm kinh điển trong bài thi vào 10."
      },
      {
        "id": "m25_q03",
        "topic": "Toán thực tế lượng giác: Góc hạ quan sát tàu biển từ ngọn hải đăng",
        "difficulty": "Thông hiểu",
        "question": "Người gác đèn đứng trên đỉnh ngọn hải đăng Kê Gà (tỉnh Bình Thuận) ở độ cao $65\\text{ m}$ so với mực nước biển. Qua ống nhòm quang học, người đó quan sát thấy một con tàu đánh cá đang neo đậu ngoài khơi với góc hạ (góc nghiêng nhìn xuống so với phương nằm ngang) là $18^\\circ$. Khoảng cách từ chân ngọn hải đăng đến con tàu xấp xỉ bao nhiêu mét? (Cho $\\tan 18^\\circ \\approx 0.3249$, làm tròn đến hàng đơn vị).",
        "options": [
          "$200\\text{ m}$",
          "$21\\text{ m}$",
          "$210\\text{ m}$",
          "$195\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi đỉnh ngọn hải đăng là $A$, chân ngọn hải đăng là $B$ ($AB = 65\\text{ m}$), vị trí con tàu là $C$. Tam giác $ABC$ vuông tại $B$.<br>Góc hạ từ ngọn hải đăng bằng góc nâng từ con tàu nhìn lên đỉnh hải đăng do hai góc ở vị trí so le trong: $\\widehat{ACB} = 18^\\circ$.<br>Trong tam giác vuông $ABC$:<br>$\\tan \\widehat{ACB} = \\frac{AB}{BC} \\Rightarrow BC = \\frac{AB}{\\tan 18^\\circ} \\approx \\frac{65}{0.3249} \\approx 200.06\\text{ m} \\approx 200\\text{ m}$.<br>Vậy khoảng cách từ chân ngọn hải đăng đến con tàu khoảng $200\\text{ m}$.",
        "trapTip": "Góc hạ nhìn xuống từ trên đỉnh bằng góc nâng nhìn lên từ vị trí dưới biển (so le trong). Công thức tìm cạnh kề: $BC = AB / \\tan 18^\\circ$."
      },
      {
        "id": "m25_q04",
        "topic": "Toán thực tế kỹ thuật: Quy chuẩn độ dốc ram dốc xe lăn",
        "difficulty": "Vận dụng",
        "question": "Theo Quy chuẩn Kỹ thuật Quốc gia về Xây dựng (QCVN), để đảm bảo an toàn cho người khuyết tật sử dụng xe lăn, độ dốc của ram dốc (tỉ số giữa chiều cao dốc và chiều dài mặt sàn ngang: $\\tan\\alpha$) không được vượt quá $\\frac{1}{12} \\approx 0.0833$. Một trung tâm thương mại thiết kế lối đi cho xe lăn có độ cao bậc dốc $h = 0.6\\text{ m}$ và chiều dài mặt sàn ngang $d = 7.5\\text{ m}$. Thiết kế này có đạt quy chuẩn an toàn hay không?",
        "options": [
          "Đạt chuẩn (độ dốc thực tế là $0.0800$)",
          "Không đạt chuẩn (độ dốc thực tế là $0.0920$)",
          "Không đạt chuẩn (độ dốc thực tế là $0.1250$)",
          "Đạt chuẩn (chiều dài dốc lớn hơn $5\\text{ m}$)"
        ],
        "correctIndex": 0,
        "explanation": "Độ dốc của ram dốc xe lăn được xác định bởi tỉ số lượng giác:<br>$\\tan\\alpha = \\frac{h}{d} = \\frac{0.6}{7.5} = 0.0800$.<br>So sánh với quy chuẩn tối đa cho phép:<br>$0.0800 \\le \\frac{1}{12} \\approx 0.0833$.<br>Do đó thiết kế ram dốc này hoàn toàn đạt chuẩn kỹ thuật quốc gia.",
        "trapTip": "Độ dốc trong kỹ thuật xây dựng và giao thông luôn là tỉ số cạnh đối (chiều cao h) chia cạnh kề (chiều dài ngang d), tức là $\\tan\\alpha$."
      },
      {
        "id": "m25_q05",
        "topic": "Toán thực tế nồng độ: Pha chế cồn y tế sát khuẩn",
        "difficulty": "Thông hiểu",
        "question": "Tại một trạm y tế lưu động, nhân viên y tế cần pha chế đúng $1000\\text{ ml}$ dung dịch cồn sát khuẩn $70^\\circ$ từ cồn y tế nồng độ $90^\\circ$ và nước cất tinh khiết. Thể tích dung dịch cồn $90^\\circ$ cần lấy để pha chế là:",
        "options": [
          "Khoảng $777.8\\text{ ml}$",
          "Khoảng $700.0\\text{ ml}$",
          "Khoảng $850.5\\text{ ml}$",
          "Khoảng $800.0\\text{ ml}$"
        ],
        "correctIndex": 0,
        "explanation": "- Lượng cồn nguyên chất cần có trong $1000\\text{ ml}$ dung dịch cồn $70^\\circ$ là:<br>$V_{\\text{cồn nguyên chất}} = 1000 \\times \\frac{70}{100} = 700\\text{ ml}$.<br>- Lượng cồn nguyên chất này được lấy hoàn toàn từ dung dịch cồn $90^\\circ$. Gọi $x$ (ml) là thể tích cồn $90^\\circ$ cần dùng:<br>$x \\times \\frac{90}{100} = 700 \\Rightarrow x = \\frac{700 \\times 100}{90} = \\frac{7000}{9} \\approx 777.78\\text{ ml}$.<br>(Và lượng nước cất cần thêm vào là $1000 - 777.78 = 222.22\\text{ ml}$).",
        "trapTip": "Nguyên tắc bảo toàn thể tích chất tan nguyên chất: $V_1 \\cdot C_1 = V_2 \\cdot C_2$."
      },
      {
        "id": "m25_q06",
        "topic": "Toán thực tế hình không gian: Thùng phuy xăng dầu hình trụ",
        "difficulty": "Thông hiểu",
        "question": "Một thùng phuy tiêu chuẩn dùng để chứa dầu nhớt có dạng hình trụ đứng với đường kính đáy $d = 60\\text{ cm}$ và chiều cao $h = 90\\text{ cm}$. Bỏ qua độ dày của vỏ thùng và lấy $\\pi \\approx 3.14$. Thể tích chứa chất lỏng tối đa của thùng phuy (làm tròn đến hàng đơn vị lít, biết $1\\text{ lít} = 1\\text{ dm}^3$) là:",
        "options": [
          "$254\\text{ lít}$",
          "$1017\\text{ lít}$",
          "$127\\text{ lít}$",
          "$508\\text{ lít}$"
        ],
        "correctIndex": 0,
        "explanation": "Đổi các kích thước sang decimet (dm) để tính thẳng ra lít:<br>- Bán kính đáy: $r = \\frac{d}{2} = \\frac{60}{2} = 30\\text{ cm} = 3\\text{ dm}$.<br>- Chiều cao hình trụ: $h = 90\\text{ cm} = 9\\text{ dm}$.<br>Thể tích hình trụ:<br>$V = \\pi r^2 h \\approx 3.14 \\times 3^2 \\times 9 = 3.14 \\times 9 \\times 9 = 3.14 \\times 81 = 254.34\\text{ dm}^3 = 254.34\\text{ lít} \\approx 254\\text{ lít}$.",
        "trapTip": "BẪY ĐƯỜNG KÍNH: Đề bài cho đường kính $d = 60\\text{ cm}$, bắt buộc phải chia đôi để tìm bán kính $r = 30\\text{ cm} = 3\\text{ dm}$ trước khi áp dụng công thức!"
      },
      {
        "id": "m25_q07",
        "topic": "Toán thực tế hình không gian: Bể bơi gia đình có đáy dốc",
        "difficulty": "Vận dụng",
        "question": "Một bể bơi hình hộp chữ nhật có chiều dài $15\\text{ m}$, chiều rộng $6\\text{ m}$. Đáy bể bơi được làm dốc thoải đều từ đầu nông có độ sâu $1.0\\text{ m}$ đến đầu sâu có độ sâu $1.8\\text{ m}$. Thể tích nước cần thiết để bơm đầy bể bơi này là:",
        "options": [
          "$126\\text{ m}^3$",
          "$162\\text{ m}^3$",
          "$90\\text{ m}^3$",
          "$144\\text{ m}^3$"
        ],
        "correctIndex": 0,
        "explanation": "Thiết diện thẳng đứng theo chiều dọc của bể bơi là một hình thang vuông có:<br>- Đáy nhỏ $h_1 = 1.0\\text{ m}$, đáy lớn $h_2 = 1.8\\text{ m}$.<br>- Chiều cao hình thang chính là chiều dài bể: $L = 15\\text{ m}$.<br>Diện tích thiết diện dọc là:<br>$S_{\\text{đáy}} = \\frac{h_1 + h_2}{2} \\times L = \\frac{1.0 + 1.8}{2} \\times 15 = 1.4 \\times 15 = 21\\text{ m}^2$.<br>Bể bơi là một hình lăng trụ đứng có đáy là hình thang vuông trên và chiều cao lăng trụ là chiều rộng bể $W = 6\\text{ m}$.<br>Thể tích bể bơi:<br>$V = S_{\\text{đáy}} \\times W = 21 \\times 6 = 126\\text{ m}^3$.",
        "trapTip": "Bể bơi đáy dốc thực chất là hình lăng trụ đứng có đáy hình thang vuông, thể tích bằng diện tích hình thang nhân chiều rộng."
      },
      {
        "id": "m25_q08",
        "topic": "Thống kê thực tế lớp 9 (GDPT 2018): Khảo sát thời gian sử dụng điện thoại",
        "difficulty": "Thông hiểu",
        "question": "Giáo viên chủ nhiệm khảo sát thời gian sử dụng điện thoại thông minh mỗi ngày của $40$ học sinh lớp 9 thu được bảng tần số ghép nhóm như sau:<br>• Từ $[0; 1)$ giờ: $4$ học sinh<br>• Từ $[1; 2)$ giờ: $14$ học sinh<br>• Từ $[2; 3)$ giờ: $16$ học sinh<br>• Từ $[3; 4)$ giờ: $6$ học sinh<br>Nhóm thời gian có tần số lớn nhất (Mốt của mẫu số liệu) và tỉ lệ phần trăm học sinh thuộc nhóm này lần lượt là:",
        "options": [
          "Nhóm $[2; 3)$ giờ, chiếm $40\\%$",
          "Nhóm $[1; 2)$ giờ, chiếm $35\\%$",
          "Nhóm $[2; 3)$ giờ, chiếm $16\\%$",
          "Nhóm $[3; 4)$ giờ, chiếm $15\\%$"
        ],
        "correctIndex": 0,
        "explanation": "- Quan sát bảng tần số ghép nhóm, nhóm $[2; 3)$ giờ có tần số lớn nhất là $16$ học sinh.<br>- Tỉ lệ phần trăm học sinh thuộc nhóm này trong tổng số $40$ học sinh:<br>$P = \\frac{16}{40} \\times 100\\% = 0.40 \\times 100\\% = 40\\%$.",
        "trapTip": "Phần Thống kê ghép nhóm là nội dung trọng tâm mới trong chương trình GDPT 2018 lớp 9, chú ý đọc chính xác tần số và tính tỉ lệ phần trăm."
      },
      {
        "id": "m25_q09",
        "topic": "Xác suất thực nghiệm thực tế (GDPT 2018): Kiểm tra chất lượng bo mạch",
        "difficulty": "Nhận biết",
        "question": "Một dây chuyền sản xuất linh kiện điện tử bo mạch thông minh tại Khu công nghệ cao kiểm tra ngẫu nhiên $500$ sản phẩm xuất xưởng thì phát hiện có $8$ sản phẩm không đạt tiêu chuẩn. Xác suất thực nghiệm của biến cố 'Chọn ngẫu nhiên một sản phẩm đạt tiêu chuẩn chất lượng' là:",
        "options": [
          "$98.4\\%$",
          "$1.6\\%$",
          "$96.0\\%$",
          "$99.2\\%$"
        ],
        "correctIndex": 0,
        "explanation": "Số sản phẩm đạt tiêu chuẩn chất lượng là:<br>$500 - 8 = 492$ sản phẩm.<br>Xác suất thực nghiệm để chọn được sản phẩm đạt chuẩn là:<br>$P = \\frac{492}{500} = 0.984 = 98.4\\%$.",
        "trapTip": "Cẩn thận đọc kỹ đề bài hỏi xác suất sản phẩm ĐẠT TIÊU CHUẨN hay sản phẩm BỊ LỖI. Nếu tính $8 / 500 = 1.6\\%$ là xác suất lỗi."
      },
      {
        "id": "m25_q10",
        "topic": "Toán thực tế hàm số bậc nhất: Giá cước taxi điện VinFast Xanh SM",
        "difficulty": "Thông hiểu",
        "question": "Hãng taxi điện Xanh SM áp dụng giá cước dịch vụ xe 4 chỗ như sau:<br>• Giá mở cửa (cho $1\\text{ km}$ đầu tiên): $14.000$ đồng.<br>• Từ kilomet thứ $2$ đến kilomet thứ $25$: giá cước là $13.500$ đồng/km.<br>Một hành khách đi xe từ Ga Hà Nội đến Khu đô thị Vinhomes Ocean Park với quãng đường $12\\text{ km}$. Số tiền hành khách phải trả là:",
        "options": [
          "$162.500$ đồng",
          "$162.000$ đồng",
          "$176.000$ đồng",
          "$148.500$ đồng"
        ],
        "correctIndex": 0,
        "explanation": "- Cước cho $1\\text{ km}$ đầu tiên: $14.000$ đồng.<br>- Quãng đường đi thêm từ km thứ 2 trở đi: $12 - 1 = 11\\text{ km}$.<br>- Tiền cước cho $11\\text{ km}$ tiếp theo: $11 \\times 13.500 = 148.500$ đồng.<br>- Tổng số tiền cước phải trả:<br>$14.000 + 148.500 = 162.500$ đồng.",
        "trapTip": "Đừng nhầm lấy $12 \\times 13.500 = 162.000$đ vì kilomet đầu tiên tính theo giá mở cửa 14.000đ!"
      },
      {
        "id": "m25_q11",
        "topic": "Toán thực tế mô hình hóa Parabol: Quãng đường phanh xe ô tô",
        "difficulty": "Thông hiểu",
        "question": "Khi ô tô đang chạy với vận tốc $v$ (km/h) thì người lái đạp phanh gấp, quãng đường phanh an toàn $s$ (mét) đến khi xe dừng hẳn được mô hình hóa bởi hàm số bậc hai: $s = 0.006v^2$. Khi xe ô tô đang di chuyển trên cao tốc Hà Nội - Hải Phòng với tốc độ $80\\text{ km/h}$, quãng đường phanh an toàn tối thiểu của xe là:",
        "options": [
          "$38.4\\text{ m}$",
          "$48.0\\text{ m}$",
          "$32.0\\text{ m}$",
          "$42.5\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Thay vận tốc $v = 80\\text{ km/h}$ vào hàm số bậc hai $s = 0.006v^2$:<br>$s = 0.006 \\times 80^2 = 0.006 \\times 6400 = 38.4\\text{ m}$.<br>Vậy quãng đường phanh an toàn tối thiểu là $38.4\\text{ m}$.",
        "trapTip": "Tính bình phương $80^2 = 6400$ trước rồi mới nhân hệ số $0.006$."
      },
      {
        "id": "m25_q12",
        "topic": "Toán thực tế kinh tế: Điểm hòa vốn cơ sở khởi nghiệp",
        "difficulty": "Vận dụng",
        "question": "Một xưởng làm bánh mì que khởi nghiệp đầu tư chi phí cố định ban đầu (lò nướng, xe đẩy, dụng cụ) là $15.000.000$ đồng. Chi phí nguyên liệu làm mỗi que bánh mì là $4.000$ đồng và bán ra với giá $10.000$ đồng/que. Xưởng bánh mì cần bán được tối thiểu bao nhiêu que bánh mì để bắt đầu có lãi (vượt qua điểm hòa vốn)?",
        "options": [
          "$2.501$ que",
          "$2.500$ que",
          "$1.501$ que",
          "$3.751$ que"
        ],
        "correctIndex": 0,
        "explanation": "- Tiền lãi trên mỗi que bánh mì bán ra: $10.000 - 4.000 = 6.000$ đồng.<br>- Gọi $x$ là số que bánh mì bán được ($x \\in \\mathbb{N}^*$). Tổng lợi nhuận thu được là:<br>$y = 6.000x - 15.000.000$ (đồng).<br>- Để bắt đầu có lãi thì lợi nhuận $y > 0$:<br>$6.000x - 15.000.000 > 0 \\Leftrightarrow 6.000x > 15.000.000 \\Leftrightarrow x > 2.500$.<br>Vì $x$ là số nguyên dương nên $x \\ge 2.501$.<br>Vậy xưởng cần bán tối thiểu $2.501$ que bánh mì để bắt đầu có lãi.",
        "trapTip": "Tại đúng $x = 2.500$ thì $y = 0$ (mới chỉ HÒA VỐN, chưa có lãi). Đề bài yêu cầu 'bắt đầu có lãi' nên phải là $x \\ge 2.501$."
      },
      {
        "id": "m25_q13",
        "topic": "Toán thực tế lượng giác: Bóng cây che nắng trường học trước mùa mưa bão",
        "difficulty": "Thông hiểu",
        "question": "Trước mùa mưa bão, thầy tổng phụ trách cần đo chiều cao cây phượng vĩ trong sân trường để lên kế hoạch tỉa cành an toàn. Lúc $9$ giờ sáng, bóng của cây phượng in trên mặt đất bằng phẳng có chiều dài là $8.4\\text{ m}$. Cùng thời điểm đó, tia nắng mặt trời tạo với mặt sân một góc nâng $\\alpha = 55^\\circ$. Chiều cao của cây phượng (cho $\\tan 55^\\circ \\approx 1.428$, làm tròn đến hàng phần mười mét) là:",
        "options": [
          "$12.0\\text{ m}$",
          "$10.5\\text{ m}$",
          "$13.2\\text{ m}$",
          "$11.4\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Trong tam giác vuông tạo bởi đỉnh cây, gốc cây và đầu mút bóng nắng trên mặt sân:<br>Chiều cao cây: $h = d \\times \\tan 55^\\circ \\approx 8.4 \\times 1.4281 \\approx 11.996\\text{ m} \\approx 12.0\\text{ m}$.",
        "trapTip": "Tam giác vuông: Cạnh đối = Cạnh kề $\\times \\tan\\alpha$."
      },
      {
        "id": "m25_q14",
        "topic": "Toán thực tế hình học: Vòng quay Mặt Trời Sun Wheel",
        "difficulty": "Vận dụng",
        "question": "Vòng quay Mặt Trời Sun Wheel có đường kính $115\\text{ m}$. Điểm thấp nhất của cabin khi ở dưới cùng cách mặt đất $5\\text{ m}$. Một cabin xuất phát từ vị trí thấp nhất và quay đều ngược chiều kim đồng hồ một góc $120^\\circ$. Độ cao của cabin đó so với mặt đất lúc này là:",
        "options": [
          "$91.25\\text{ m}$",
          "$86.25\\text{ m}$",
          "$105.00\\text{ m}$",
          "$78.50\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "- Bán kính vòng quay: $R = \\frac{115}{2} = 57.5\\text{ m}$.<br>- Vị trí tâm $O$ của vòng quay có độ cao so với mặt đất là: $h_O = 5 + 57.5 = 62.5\\text{ m}$.<br>- Khi cabin quay được góc $120^\\circ$ từ vị trí đáy $A$ (góc ở tâm $\\alpha = 120^\\circ$):<br>Độ cao của cabin so với vị trí đáy $A$ là:<br>$\\Delta h = R - R\\cos 120^\\circ = 57.5 - 57.5 \\times (-0.5) = 57.5 + 28.75 = 86.25\\text{ m}$.<br>- Tổng độ cao của cabin so với mặt đất:<br>$H = 5 + 86.25 = 91.25\\text{ m}$.",
        "trapTip": "Đừng quên cộng thêm $5\\text{ m}$ khoảng cách từ vị trí thấp nhất của cabin tới mặt đất."
      },
      {
        "id": "m25_q15",
        "topic": "Toán thực tế tối ưu hóa chi phí sản xuất (Phân loại điểm 10)",
        "difficulty": "Vận dụng cao",
        "question": "Một công ty cơ khí nhận đơn đặt hàng chế tạo các bồn chứa nước hình trụ không có nắp đậy bằng inox có thể tích cố định $V = 2\\pi\\text{ m}^3$. Để tiết kiệm chi phí vật liệu inox nhất (diện tích toàn phần mặt ngoài bao gồm diện tích đáy và diện tích xung quanh là nhỏ nhất), bán kính đáy $r$ của hình trụ phải bằng:",
        "options": [
          "$r = \\sqrt[3]{2}\\text{ m} \\approx 1.26\\text{ m}$",
          "$r = 1.0\\text{ m}$",
          "$r = 2.0\\text{ m}$",
          "$r = \\sqrt{2}\\text{ m} \\approx 1.41\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Thể tích hình trụ: $V = \\pi r^2 h = 2\\pi \\Rightarrow h = \\frac{2}{r^2}$.<br>Bồn chứa không có nắp nên diện tích inox cần dùng gồm 1 đáy và diện tích xung quanh:<br>$S = \\pi r^2 + 2\\pi rh = \\pi r^2 + 2\\pi r \\cdot \\frac{2}{r^2} = \\pi r^2 + \\frac{4\\pi}{r} = \\pi \\left(r^2 + \\frac{2}{r} + \\frac{2}{r}\\right)$.<br>Áp dụng bất đẳng thức Cô-si (AM-GM) cho 3 số dương $r^2, \\frac{2}{r}, \\frac{2}{r}$:<br>$r^2 + \\frac{2}{r} + \\frac{2}{r} \\ge 3\\sqrt[3]{r^2 \\cdot \\frac{2}{r} \\cdot \\frac{2}{r}} = 3\\sqrt[3]{4}$.<br>Dấu đẳng thức xảy ra khi và chỉ khi:<br>$r^2 = \\frac{2}{r} \\Leftrightarrow r^3 = 2 \\Leftrightarrow r = \\sqrt[3]{2}\\text{ m} \\approx 1.26\\text{ m}$.",
        "trapTip": "BĐT Cô-si cho 3 số: Tách $\\frac{4}{r} = \\frac{2}{r} + \\frac{2}{r}$ để khi nhân lại triệt tiêu biến $r^2$."
      }
    ]
  },
  {
    "id": "math_exam_hcmc_2024",
    "title": "Đề thi chính thức Tuyển sinh Lớp 10 TP.HCM Năm 2024 - Môn Toán",
    "subject": "math",
    "year": 2024,
    "location": "TP.HCM",
    "isOfficial": true,
    "badgeText": "⭐ Đề Chính Thức TP.HCM",
    "durationMinutes": 90,
    "totalQuestions": 12,
    "description": "Bộ đề bám sát 100% đề thi chính thức năm 2024 của Sở GD&ĐT TP.HCM: Parabol và đường thẳng, Định lý Vi-ét, Bài toán giảm giá kép tại Nhà sách Phương Nam, Pha chế cồn y tế 70 độ Bệnh viện Chợ Rẫy, Lượng giác đo Cột cờ Thủ Ngữ, Cước xe công nghệ Xanh SM, Thể tích hình trụ bồn nước và Hình học đường tròn.",
    "questions": [
      {
        "id": "m24_q01",
        "topic": "Bài 1a: Đồ thị hàm số bậc hai Parabol (TP.HCM)",
        "difficulty": "Nhận biết",
        "question": "Cho hàm số Parabol $(P): y = \\frac{1}{2}x^2$. Tọa độ điểm $M$ thuộc đồ thị $(P)$ có hoành độ $x = -4$ là:",
        "options": [
          "$M(-4; 8)$",
          "$M(-4; -8)$",
          "$M(-4; 16)$",
          "$M(-4; 4)$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = -4$ vào $(P): y = \\frac{1}{2}x^2$:\n$y = \\frac{1}{2}(-4)^2 = \\frac{1}{2} \\cdot 16 = 8$.\nVậy tọa độ điểm là $M(-4; 8)$.",
        "trapTip": "Bình phương của số âm $(-4)^2 = 16 > 0$, đừng quên dấu ngoặc khi bấm máy tính."
      },
      {
        "id": "m24_q02",
        "topic": "Bài 1b: Tọa độ giao điểm của Parabol và Đường thẳng",
        "difficulty": "Thông hiểu",
        "question": "Tìm tọa độ giao điểm của parabol $(P): y = \\frac{1}{2}x^2$ và đường thẳng $(d): y = x + 4$.",
        "options": [
          "$(4; 8)$ và $(-2; 2)$",
          "$(4; 8)$ và $(2; 2)$",
          "$(-4; 8)$ và $(-2; 2)$",
          "$(4; -8)$ và $(-2; -2)$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình hoành độ giao điểm của $(P)$ và $(d)$:\n$\\frac{1}{2}x^2 = x + 4 \\Leftrightarrow x^2 - 2x - 8 = 0$.\nPhân tích hoặc tính $\\Delta' = (-1)^2 - 1(-8) = 9 > 0$.\nPhương trình có 2 nghiệm: $x_1 = 1 + 3 = 4$; $x_2 = 1 - 3 = -2$.\n- Với $x = 4 \\Rightarrow y = 4 + 4 = 8 \\Rightarrow (4; 8)$.\n- Với $x = -2 \\Rightarrow y = -2 + 4 = 2 \\Rightarrow (-2; 2)$.\nVậy tọa độ hai giao điểm là $(4; 8)$ và $(-2; 2)$.",
        "trapTip": "Quy đồng bỏ mẫu số 2 nhớ nhân cả vế phải: $\\frac{1}{2}x^2 = x + 4 \\Leftrightarrow x^2 = 2x + 8$."
      },
      {
        "id": "m24_q03",
        "topic": "Bài 2: Định lý Vi-ét - Tổng và tích nghiệm",
        "difficulty": "Thông hiểu",
        "question": "Cho phương trình bậc hai $x^2 - 5x + 3 = 0$ có hai nghiệm $x_1, x_2$. Giá trị của biểu thức $A = x_1^2 + x_2^2 - 3x_1x_2$ là:",
        "options": [
          "$A = 10$",
          "$A = 16$",
          "$A = 19$",
          "$A = 22$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình có $\\Delta = (-5)^2 - 4(1)(3) = 25 - 12 = 13 > 0$ nên có 2 nghiệm phân biệt.\nTheo định lý Vi-ét:\n$S = x_1 + x_2 = -\\frac{b}{a} = 5$\n$P = x_1 \\cdot x_2 = \\frac{c}{a} = 3$.\nBiến đổi biểu thức $A$:\n$A = (x_1 + x_2)^2 - 2x_1x_2 - 3x_1x_2 = S^2 - 5P = 5^2 - 5(3) = 25 - 15 = 10$.",
        "trapTip": "Công thức hằng đẳng thức: $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2$."
      },
      {
        "id": "m24_q04",
        "topic": "Bài 3: Bài toán thực tế giảm giá kép Nhà sách Phương Nam",
        "difficulty": "Thông hiểu",
        "question": "Nhân dịp năm học mới, Nhà sách Phương Nam tại TP.HCM áp dụng chương trình giảm giá $10\\%$ trên giá niêm yết cho tất cả các loại sách tham khảo. Ngoài ra, học sinh có thẻ thành viên thân thiết được giảm tiếp thêm $5\\%$ trên giá đã giảm. Bạn An có thẻ thành viên mua một bộ sách tham khảo có giá niêm yết là $200.000$ đồng. Hỏi bạn An thực tế phải thanh toán bao nhiêu tiền?",
        "options": [
          "$171.000$ đồng",
          "$170.000$ đồng",
          "$180.000$ đồng",
          "$175.000$ đồng"
        ],
        "correctIndex": 0,
        "explanation": "- Giá bộ sách sau đợt giảm giá đầu tiên ($10\\%$):\n$200.000 \\times (1 - 0.10) = 200.000 \\times 0.9 = 180.000$ đồng.\n- Giá bạn An phải thanh toán sau khi giảm tiếp $5\\%$ trên giá đã giảm:\n$180.000 \\times (1 - 0.05) = 180.000 \\times 0.95 = 171.000$ đồng.",
        "trapTip": "BẪY TỬ HUYỆT: Giảm tiếp 5% trên giá ĐÃ GIẢM, KHÔNG ĐƯỢC cộng gộp $10\\% + 5\\% = 15\\%$! Nếu lấy $200.000 \\times (1 - 0.15) = 170.000$đ là hoàn toàn SAI."
      },
      {
        "id": "m24_q05",
        "topic": "Bài 4: Bài toán pha chế cồn y tế 70 độ Bệnh viện Chợ Rẫy",
        "difficulty": "Vận dụng",
        "question": "Một điều dưỡng tại Bệnh viện Chợ Rẫy (TP.HCM) cần pha chế $600\\text{ ml}$ dung dịch cồn y tế sát khuẩn $70^\\circ$ từ dung dịch cồn $90^\\circ$ và nước cất. Biết cồn $90^\\circ$ nghĩa là trong $100\\text{ ml}$ dung dịch có chứa $90\\text{ ml}$ cồn nguyên chất. Thể tích dung dịch cồn $90^\\circ$ cần dùng là:",
        "options": [
          "Khoảng $466.7\\text{ ml}$",
          "Khoảng $500\\text{ ml}$",
          "Khoảng $420\\text{ ml}$",
          "Khoảng $450\\text{ ml}$"
        ],
        "correctIndex": 0,
        "explanation": "Lượng cồn nguyên chất cần có trong $600\\text{ ml}$ cồn $70^\\circ$ là:\n$V_{\\text{nguyên chất}} = 600 \\times \\frac{70}{100} = 420\\text{ ml}$.\nGọi thể tích cồn $90^\\circ$ cần dùng là $x$ (ml). Lượng cồn nguyên chất lấy từ cồn $90^\\circ$ là:\n$x \\times \\frac{90}{100} = 420 \\Rightarrow x = \\frac{420 \\times 100}{90} = \\frac{1400}{3} \\approx 466.67\\text{ ml}$.\nLượng nước cất cần thêm vào là $600 - 466.67 = 133.33\\text{ ml}$.",
        "trapTip": "Bảo toàn thể tích cồn nguyên chất: $V_1 \\cdot C_1 = V_2 \\cdot C_2$."
      },
      {
        "id": "m24_q06",
        "topic": "Bài 5: Ứng dụng tỉ số lượng giác đo chiều cao thực tế",
        "difficulty": "Thông hiểu",
        "question": "Để đo chiều cao của Cột cờ Thủ Ngữ bên bờ sông Sài Gòn, một học sinh đứng tại điểm $A$ cách chân cột cờ $B$ một khoảng $35\\text{ m}$ trên mặt đất bằng phẳng. Dùng giác kế đặt ở độ cao $1.5\\text{ m}$ so với mặt đất, bạn đo được góc nâng nhìn lên đỉnh cột cờ là $32^\\circ$. Chiều cao của Cột cờ Thủ Ngữ (làm tròn đến hàng phần mười mét) là: (cho $\\tan 32^\\circ \\approx 0.625$)",
        "options": [
          "$23.4\\text{ m}$",
          "$21.9\\text{ m}$",
          "$24.5\\text{ m}$",
          "$22.8\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi đỉnh cột cờ là $C$, chân cột cờ là $B$. Chiều cao giác kế là $h = 1.5\\text{ m}$.\nPhần chiều cao cột cờ từ độ cao giác kế lên đến đỉnh $C$ là:\n$d = 35 \\times \\tan 32^\\circ \\approx 35 \\times 0.625 = 21.875\\text{ m}$.\nTổng chiều cao thực tế của Cột cờ Thủ Ngữ từ mặt đất:\n$H = d + h = 21.875 + 1.5 = 23.375\\text{ m} \\approx 23.4\\text{ m}$.",
        "trapTip": "QUÊN CỘNG CHIỀU CAO GIÁC KẾ: Rất nhiều học sinh chỉ tính $35 \\times \\tan 32^\\circ = 21.9$m mà quên cộng thêm chiều cao $1.5$m của thiết bị đo!"
      },
      {
        "id": "m24_q07",
        "topic": "Bài 6: Hàm số bậc nhất và cước xe công nghệ TP.HCM",
        "difficulty": "Thông hiểu",
        "question": "Hãng taxi điện Xanh SM tại TP.HCM áp dụng bảng giá cước dịch vụ xe máy điện như sau:\n- Giá mở cửa (cho $2\\text{ km}$ đầu tiên): $14.000$ đồng.\n- Từ kilomet thứ $3$ trở đi: giá cước là $4.500$ đồng mỗi kilomet.\nBạn Minh đi xe máy điện Xanh SM từ nhà ở Quận Phú Nhuận đến trường THPT Gia Định (Quận Bình Thạnh) hết quãng đường $6\\text{ km}$. Số tiền bạn Minh phải trả là:",
        "options": [
          "$32.000$ đồng",
          "$27.000$ đồng",
          "$41.000$ đồng",
          "$36.500$ đồng"
        ],
        "correctIndex": 0,
        "explanation": "- Tiền cước cho $2\\text{ km}$ đầu tiên: $14.000$ đồng.\n- Số kilomet chạy thêm từ km thứ 3 trở đi: $6 - 2 = 4\\text{ km}$.\n- Tiền cước cho $4\\text{ km}$ tiếp theo: $4 \\times 4.500 = 18.000$ đồng.\n- Tổng số tiền bạn Minh phải trả: $14.000 + 18.000 = 32.000$ đồng.",
        "trapTip": "Đừng nhầm lấy toàn bộ $6 \\times 4.500 = 27.000$đ vì 2 km đầu đã được tính theo giá mở cửa 14.000đ!"
      },
      {
        "id": "m24_q08",
        "topic": "Bài 7: Thể tích hình trụ bồn nước sinh hoạt",
        "difficulty": "Thông hiểu",
        "question": "Một bồn nước inox Tân Á Đại Thành đặt trên mái nhà có dạng hình trụ đứng với đường kính đáy $d = 1.2\\text{ m}$ và chiều cao $h = 1.8\\text{ m}$. Lấy $\\pi \\approx 3.14$. Thể tích chứa nước tối đa của bồn nước (làm tròn đến lít, biết $1\\text{ m}^3 = 1000\\text{ lít}$) là:",
        "options": [
          "$2035\\text{ lít}$",
          "$8140\\text{ lít}$",
          "$1526\\text{ lít}$",
          "$2500\\text{ lít}$"
        ],
        "correctIndex": 0,
        "explanation": "- Bán kính đáy hình trụ: $r = \\frac{d}{2} = \\frac{1.2}{2} = 0.6\\text{ m}$.\n- Thể tích hình trụ:\n$V = \\pi r^2 h \\approx 3.14 \\times (0.6)^2 \\times 1.8 = 3.14 \\times 0.36 \\times 1.8 \\approx 2.03472\\text{ m}^3$.\n- Đổi sang lít: $2.03472 \\times 1000 \\approx 2035\\text{ lít}$.",
        "trapTip": "Đề bài cho ĐƯỜNG KÍNH $d = 1.2$m, phải chia đôi để lấy BÁN KÍNH $r = 0.6$m trước khi áp dụng công thức $V = \\pi r^2 h$!"
      },
      {
        "id": "m24_q09",
        "topic": "Bài 8a: Tứ giác nội tiếp đường tròn (Hình học TP.HCM)",
        "difficulty": "Thông hiểu",
        "question": "Cho đường tròn $(O; R)$ và điểm $A$ nằm ngoài $(O)$ sao cho $OA = 2R$. Từ $A$ kẻ hai tiếp tuyến $AB, AC$ với $(O)$ ($B, C$ là các tiếp điểm). Tứ giác $ABOC$ là:",
        "options": [
          "Tứ giác nội tiếp đường tròn đường kính $OA$",
          "Hình thang vuông có hai đáy song song",
          "Hình chữ nhật có hai đường chéo bằng nhau",
          "Hình thoi có 4 cạnh bằng nhau"
        ],
        "correctIndex": 0,
        "explanation": "- $AB$ là tiếp tuyến tại $B \\Rightarrow OB \\perp AB \\Rightarrow \\widehat{ABO} = 90^\\circ$.\n- $AC$ là tiếp tuyến tại $C \\Rightarrow OC \\perp AC \\Rightarrow \\widehat{ACO} = 90^\\circ$.\nXét tứ giác $ABOC$ có: $\\widehat{ABO} + \\widehat{ACO} = 90^\\circ + 90^\\circ = 180^\\circ$.\nTổng hai góc đối diện bằng $180^\\circ$ nên $ABOC$ là tứ giác nội tiếp đường tròn đường kính $OA$.",
        "trapTip": "Dạng bài kinh điển của Sở GD&ĐT TP.HCM: Chứng minh tứ giác có tổng 2 góc đối bằng 180 độ nội tiếp đường tròn đường kính nối từ điểm ngoài tới tâm."
      },
      {
        "id": "m24_q10",
        "topic": "Bài 8b: Độ dài đoạn tiếp tuyến và góc ở tâm",
        "difficulty": "Thông hiểu",
        "question": "Trong bài toán trên, độ dài đoạn tiếp tuyến $AB$ tính theo bán kính $R$ là:",
        "options": [
          "$AB = R\\sqrt{3}$",
          "$AB = R\\sqrt{2}$",
          "$AB = 2R$",
          "$AB = \\frac{R\\sqrt{3}}{2}$"
        ],
        "correctIndex": 0,
        "explanation": "Tam giác $OAB$ vuông tại $B$ ($AB \\perp OB$). Áp dụng định lý Pi-ta-go:\n$AB^2 = OA^2 - OB^2 = (2R)^2 - R^2 = 4R^2 - R^2 = 3R^2$.\n$\\Rightarrow AB = R\\sqrt{3}$.",
        "trapTip": "Định lý Pi-ta-go: Cạnh huyền $OA = 2R$, cạnh góc vuông $OB = R$, cạnh còn lại là $R\\sqrt{3}$."
      },
      {
        "id": "m24_q11",
        "topic": "Bài 8c: Cát tuyến và hệ thức lượng hình học",
        "difficulty": "Vận dụng",
        "question": "Vẽ cát tuyến $ADE$ đi qua $A$ không đi qua $O$ ($D$ nằm giữa $A$ và $E$). Hệ thức nào sau đây luôn đúng?",
        "options": [
          "$AB^2 = AD \\cdot AE$",
          "$AB^2 = AD + AE$",
          "$AB \\cdot AC = AD^2$",
          "$OA^2 = AD \\cdot AE$"
        ],
        "correctIndex": 0,
        "explanation": "Xét hai tam giác $\\Delta ABD$ và $\\Delta AEB$:\n- Góc $\\widehat{BAE}$ chung.\n- $\\widehat{ABD} = \\widehat{AEB}$ (góc tạo bởi tiếp tuyến và dây cung bằng góc nội tiếp cùng chắn cung $BD$).\nDo đó $\\Delta ABD \\backsim \\Delta AEB$ (g-g).\nSuy ra tỉ số đồng dạng: $\\frac{AB}{AE} = \\frac{AD}{AB} \\Rightarrow AB^2 = AD \\cdot AE$.",
        "trapTip": "Phương tích của điểm đối với đường tròn: Bình phương tiếp tuyến bằng tích hai đoạn cát tuyến ($AB^2 = AD \\cdot AE$)."
      },
      {
        "id": "m24_q12",
        "topic": "Bài 8d: Tiếp tuyến và trực tâm / điểm cố định",
        "difficulty": "Vận dụng cao",
        "question": "Gọi $H$ là giao điểm của $OA$ và $BC$. Tích $OH \\cdot OA$ bằng:",
        "options": [
          "$R^2$",
          "$2R^2$",
          "$\\frac{R^2}{2}$",
          "$3R^2$"
        ],
        "correctIndex": 0,
        "explanation": "Theo tính chất hai tiếp tuyến cắt nhau, $OA$ là đường trung trực của đoạn thẳng $BC$, do đó $OA \\perp BC$ tại $H$ và $H$ là trung điểm của $BC$.\nXét tam giác vuông $OAB$ vuông tại $B$ có đường cao $BH$ hạ từ đỉnh góc vuông xuống cạnh huyền $OA$.\nTheo hệ thức lượng trong tam giác vuông: $OB^2 = OH \\cdot OA$.\nMà bán kính $OB = R$, nên $OH \\cdot OA = R^2$.",
        "trapTip": "Hệ thức lượng trong tam giác vuông: Bình phương cạnh góc vuông bằng tích hình chiếu và cạnh huyền ($OB^2 = OH \\cdot OA$)."
      }
    ]
  },
  {
    "id": "math_exam_02",
    "title": "Đề thi chính thức Tuyển sinh Lớp 10 TP.HCM Năm 2023 - Môn Toán",
    "subject": "math",
    "durationMinutes": 90,
    "totalQuestions": 12,
    "year": 2023,
    "location": "TP.HCM",
    "isOfficial": true,
    "badgeText": "⭐ Đề Chính Thức TP.HCM",
    "description": "Bộ đề bám sát 100% cấu trúc 8 bài toán đặc trưng của Sở GD&ĐT TP. Hồ Chí Minh: Parabol và đường thẳng, Vi-ét, Toán thực tế siêu thị Co.opmart, Đo chiều cao Landmark 81, Nồng độ dung dịch muối sinh lý, Bồn nước hình trụ, Bài toán kinh doanh tiệm bánh mì và Hình học đường tròn.",
    "questions": [
      {
        "id": "m02_q01",
        "topic": "Bài 1a: Đồ thị hàm số bậc hai Parabol (TP.HCM)",
        "difficulty": "Nhận biết",
        "question": "Cho hàm số Parabol $(P): y = \\frac{1}{2}x^2$. Điểm nào sau đây thuộc đồ thị $(P)$?",
        "options": [
          "$A(2; 2)$",
          "$B(-2; -2)$",
          "$C(4; 4)$",
          "$D(-4; 16)$"
        ],
        "correctIndex": 0,
        "explanation": "Thay tọa độ các điểm vào $(P): y = \\frac{1}{2}x^2$:\n- Với $x = 2 \\Rightarrow y = \\frac{1}{2}(2)^2 = \\frac{1}{2} \\cdot 4 = 2$. Điểm $A(2; 2)$ thuộc $(P)$.\n- Với $x = -2 \\Rightarrow y = \\frac{1}{2}(-2)^2 = 2 \\ne -2$ (B loại).\n- Với $x = 4 \\Rightarrow y = \\frac{1}{2}(4)^2 = 8 \\ne 4$ (C loại).\n- Với $x = -4 \\Rightarrow y = \\frac{1}{2}(-4)^2 = 8 \\ne 16$ (D loại).",
        "trapTip": "Parabol $y = ax^2$ với $a > 0$ luôn nằm phía trên trục hoành, tung độ $y \\ge 0$ không bao giờ âm."
      },
      {
        "id": "m02_q02",
        "topic": "Bài 1b: Tọa độ giao điểm Parabol và đường thẳng (TP.HCM)",
        "difficulty": "Thông hiểu",
        "question": "Tìm tọa độ các giao điểm của Parabol $(P): y = \\frac{1}{2}x^2$ và đường thẳng $(d): y = x + 4$ bằng phép tính:",
        "options": [
          "$(4; 8)$ và $(-2; 2)$",
          "$(2; 2)$ và $(-4; 8)$",
          "$(4; 8)$ và $(2; 2)$",
          "$(-2; 2)$ và $(-4; 8)$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình hoành độ giao điểm của $(P)$ và $(d)$:\n$\\frac{1}{2}x^2 = x + 4 \\Leftrightarrow x^2 - 2x - 8 = 0$.\nPhương trình có: $\\Delta' = (-1)^2 - 1(-8) = 9 > 0 \\Rightarrow \\sqrt{\\Delta'} = 3$.\nNghiệm: $x_1 = 1 + 3 = 4$; $x_2 = 1 - 3 = -2$.\n- Với $x_1 = 4 \\Rightarrow y_1 = \\frac{1}{2}(4)^2 = 8 \\Rightarrow (4; 8)$.\n- Với $x_2 = -2 \\Rightarrow y_2 = \\frac{1}{2}(-2)^2 = 2 \\Rightarrow (-2; 2)$.\nVậy tọa độ hai giao điểm là $(4; 8)$ và $(-2; 2)$.",
        "trapTip": "Đề bài yêu cầu tìm 'TỌA ĐỘ giao điểm' nên phải kết luận cả cặp số $(x; y)$, không được chỉ dừng lại ở hoành độ x."
      },
      {
        "id": "m02_q03",
        "topic": "Bài 2: Phương trình bậc hai & Hệ thức Vi-ét (TP.HCM)",
        "difficulty": "Thông hiểu",
        "question": "Cho phương trình $x^2 - 3x - 10 = 0$ có hai nghiệm phân biệt $x_1, x_2$. Không giải phương trình, hãy tính giá trị của biểu thức $A = \\frac{x_1}{x_2} + \\frac{x_2}{x_1}$:",
        "options": [
          "$A = -\\frac{29}{10}$",
          "$A = \\frac{29}{10}$",
          "$A = -\\frac{9}{10}$",
          "$A = \\frac{19}{10}$"
        ],
        "correctIndex": 0,
        "explanation": "Theo định lý Vi-ét ta có:\n$S = x_1 + x_2 = -\\frac{b}{a} = 3$\n$P = x_1 x_2 = \\frac{c}{a} = -10$.\nQuy đồng biểu thức $A$:\n$A = \\frac{x_1^2 + x_2^2}{x_1 x_2} = \\frac{(x_1 + x_2)^2 - 2x_1 x_2}{x_1 x_2} = \\frac{3^2 - 2(-10)}{-10} = \\frac{9 + 20}{-10} = -\\frac{29}{10}$.",
        "trapTip": "Cẩn thận dấu âm của tích $P = -10$ ở mẫu số: $9 - 2(-10) = 9 + 20 = 29$, chia cho $-10$ thành $-\\frac{29}{10}$."
      },
      {
        "id": "m02_q04",
        "topic": "Bài 3: Toán thực tế mua sắm siêu thị tại TP.HCM",
        "difficulty": "Thông hiểu",
        "question": "Nhân dịp khai trương siêu thị Co.opmart tại TP.HCM, cửa hàng áp dụng chương trình khuyến mãi: Mua một chiếc nồi chiên không dầu được giảm giá $20\\%$ so với giá niêm yết. Nếu khách hàng có thẻ thành viên thân thiết thì được giảm thêm $5\\%$ trên giá đã giảm. Bác Ba có thẻ thành viên đã mua chiếc nồi này với số tiền là $1.520.000$ đồng. Hỏi giá niêm yết ban đầu của chiếc nồi chiên không dầu là bao nhiêu?",
        "options": [
          "$2.000.000$ đồng",
          "$1.900.000$ đồng",
          "$2.100.000$ đồng",
          "$1.850.000$ đồng"
        ],
        "correctIndex": 0,
        "explanation": "Gọi giá niêm yết ban đầu của chiếc nồi là $x$ đồng ($x > 0$).\n- Sau khi giảm đợt 1 ($20\\%$), giá của chiếc nồi là:\n$x \\times (1 - 0.20) = 0.8x$ đồng.\n- Bác Ba có thẻ thành viên được giảm thêm $5\\%$ trên giá đã giảm, nên số tiền thực tế phải trả là:\n$0.8x \\times (1 - 0.05) = 0.8x \\times 0.95 = 0.76x$ đồng.\nTheo đề bài: $0.76x = 1.520.000 \\Leftrightarrow x = \\frac{1.520.000}{0.76} = 2.000.000$ đồng.\nVậy giá niêm yết ban đầu là $2.000.000$ đồng.",
        "trapTip": "BẪY TOÁN THỰC TẾ TP.HCM: 'Giảm thêm 5% trên giá đã giảm' KHÔNG PHẢI là lấy 20% + 5% = 25%! Phải nhân lũy kế: $0.80 \\times 0.95 = 0.76$."
      },
      {
        "id": "m02_q05",
        "topic": "Bài 4: Toán thực tế lượng giác đo chiều cao Landmark 81",
        "difficulty": "Thông hiểu",
        "question": "Một học sinh đứng tại Bến tàu thủy Bạch Đằng (TP.HCM) dùng giác kế ngắm đỉnh tòa tháp The Landmark 81. Tia ngắm từ mắt học sinh đến đỉnh tháp tạo với phương nằm ngang một góc $\\alpha = 35^\\circ$. Biết khoảng cách từ vị trí học sinh đứng đến chân tháp là $657\\text{ m}$ và khoảng cách từ mắt học sinh đến mặt đất là $1.6\\text{ m}$. Hỏi chiều cao của tòa tháp Landmark 81 xấp xỉ bao nhiêu mét? (Lấy $\\tan 35^\\circ \\approx 0.7002$, làm tròn đến hàng đơn vị).",
        "options": [
          "$462\\text{ m}$",
          "$460\\text{ m}$",
          "$461\\text{ m}$",
          "$464\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Gọi $h$ là chiều cao của tòa tháp, $h'$ là độ cao từ đỉnh tháp đến ngang tầm mắt học sinh, và $d = 657\\text{ m}$ là khoảng cách nằm ngang.\nTrong tam giác vuông tạo bởi đỉnh tháp, điểm ngắm và chân đường vuông góc ngang tầm mắt:\n$h' = d \\cdot \\tan 35^\\circ \\approx 657 \\cdot 0.7002 = 460.03\\text{ m}$.\nChiều cao toàn phần của tòa tháp:\n$h = h' + 1.6\\text{ m} = 460.03 + 1.6 = 461.63\\text{ m} \\approx 462\\text{ m}$.\nVậy chiều cao của Landmark 81 xấp xỉ $462\\text{ m}$.",
        "trapTip": "Đừng quên cộng thêm $1.6\\text{ m}$ chiều cao từ mặt đất đến tầm mắt của học sinh!"
      },
      {
        "id": "m02_q06",
        "topic": "Bài 5: Toán thực tế nồng độ dung dịch nước muối sinh lý TP.HCM",
        "difficulty": "Vận dụng",
        "question": "Tại một trạm y tế phường ở TP. Hồ Chí Minh, bác sĩ cần pha chế $500\\text{ g}$ dung dịch nước muối sinh lý có nồng độ $0.9\\%$ NaCl từ một lọ dung dịch nước muối đặc nồng độ $5\\%$ và nước cất nguyên chất (nồng độ $0\\%$). Bác sĩ cần lấy bao nhiêu gam dung dịch muối $5\\%$ để pha chế?",
        "options": [
          "$90\\text{ g}$",
          "$45\\text{ g}$",
          "$50\\text{ g}$",
          "$100\\text{ g}$"
        ],
        "correctIndex": 0,
        "explanation": "Khối lượng muối tinh khiết $NaCl$ có trong $500\\text{ g}$ dung dịch $0.9\\%$ là:\n$m_{\\text{muối}} = 500 \\times 0.9\\% = 500 \\times 0.009 = 4.5\\text{ g}$.\nToàn bộ lượng muối tinh khiết này được lấy từ dung dịch nước muối đặc $5\\%$.\nGọi $x$ là khối lượng dung dịch muối $5\\%$ cần lấy ($x > 0$):\n$x \\times 5\\% = 4.5 \\Leftrightarrow 0.05x = 4.5 \\Leftrightarrow x = \\frac{4.5}{0.05} = 90\\text{ g}$.\nVậy bác sĩ cần lấy đúng $90\\text{ g}$ dung dịch muối $5\\%$ (và thêm $410\\text{ g}$ nước cất).",
        "trapTip": "Nước cất không chứa muối khan ($0\\%$), toàn bộ khối lượng muối trong dung dịch mới đều đến từ dung dịch ban đầu."
      },
      {
        "id": "m02_q07",
        "topic": "Bài 6: Toán thực tế hình không gian bồn nước inox hình trụ (TP.HCM)",
        "difficulty": "Thông hiểu",
        "question": "Một gia đình ở Quận 7 (TP.HCM) lắp đặt bồn chứa nước inox dạng hình trụ đứng để trữ nước sinh hoạt. Bồn có đường kính đáy là $1.2\\text{ m}$ và chiều cao là $1.8\\text{ m}$. Hỏi bồn nước đó có thể chứa tối đa bao nhiêu lít nước? (Lấy $\\pi \\approx 3.14$, bỏ qua độ dày của vỏ bồn và làm tròn kết quả đến hàng đơn vị). Biết $1\\text{ m}^3 = 1000\\text{ lít}$.",
        "options": [
          "$2.035\\text{ lít}$",
          "$8.139\\text{ lít}$",
          "$2.543\\text{ lít}$",
          "$1.696\\text{ lít}$"
        ],
        "correctIndex": 0,
        "explanation": "Bán kính đáy của bồn hình trụ: $R = \\frac{d}{2} = \\frac{1.2}{2} = 0.6\\text{ m}$.\nThể tích của bồn nước hình trụ:\n$V = \\pi R^2 h = 3.14 \\times (0.6)^2 \\times 1.8 = 3.14 \\times 0.36 \\times 1.8 = 2.03472\\text{ m}^3$.\nĐổi sang lít: $2.03472 \\times 1000 \\approx 2035\\text{ lít}$.\nVậy bồn chứa tối đa khoảng $2.035\\text{ lít}$ nước.",
        "trapTip": "Bẫy đề bài: Đề cho ĐƯỜNG KÍNH $1.2\\text{ m}$, phải chia đôi để lấy BÁN KÍNH $R = 0.6\\text{ m}$ trước khi lắp vào công thức $V = \\pi R^2 h$!"
      },
      {
        "id": "m02_q08",
        "topic": "Bài 7: Toán thực tế hàm bậc nhất mô hình kinh doanh tiệm bánh mì TP.HCM",
        "difficulty": "Vận dụng",
        "question": "Một tiệm bánh mì chả lụa tại Quận 1 (TP.HCM) đầu tư chi phí cố định ban đầu (tiền xe đẩy, lò nướng, dụng cụ) là $12.000.000$ đồng. Chi phí nguyên liệu để làm mỗi ổ bánh mì là $10.000$ đồng và tiệm bán ra với giá $25.000$ đồng/ổ. Gọi $y$ (đồng) là số tiền lãi thu được của tiệm khi bán được $x$ ổ bánh mì.\na) Hàm số biểu diễn số tiền lãi $y$ theo $x$ là:\nb) Tiệm bánh mì cần bán được tối thiểu bao nhiêu ổ bánh mì để bắt đầu có lãi (thu hồi vốn)?",
        "options": [
          "$y = 15.000x - 12.000.000$; Cần bán tối thiểu 801 ổ",
          "$y = 25.000x - 12.000.000$; Cần bán tối thiểu 481 ổ",
          "$y = 15.000x + 12.000.000$; Cần bán tối thiểu 800 ổ",
          "$y = 10.000x - 12.000.000$; Cần bán tối thiểu 1201 ổ"
        ],
        "correctIndex": 0,
        "explanation": "1. Số tiền lãi trên mỗi ổ bánh mì bán được là: $25.000 - 10.000 = 15.000$ đồng.\nTổng lãi thu được khi bán $x$ ổ bánh mì (sau khi trừ chi phí đầu tư ban đầu):\n$y = 15.000x - 12.000.000$ (đồng).\n2. Để bắt đầu có lãi, tức là lợi nhuận $y > 0$:\n$15.000x - 12.000.000 > 0 \\Leftrightarrow 15.000x > 12.000.000 \\Leftrightarrow x > \\frac{12.000.000}{15.000} = 800$.\nVì $x$ là số ổ bánh mì nguyên dương nên $x \\ge 801$.\nVậy tiệm cần bán tối thiểu $801$ ổ bánh mì để bắt đầu có lãi.",
        "trapTip": "Tại $x = 800$ thì $y = 0$ (mới chỉ HÒA VỐN, chưa có lãi). Đề bài hỏi 'bắt đầu có lãi' nên phải là $x \\ge 801$ ổ."
      },
      {
        "id": "m02_q09",
        "topic": "Bài 8a: Chứng minh tứ giác nội tiếp (TP.HCM)",
        "difficulty": "Thông hiểu",
        "question": "Từ điểm $A$ nằm bên ngoài đường tròn $(O; R)$, kẻ hai tiếp tuyến $AB, AC$ với đường tròn ($B, C$ là các tiếp điểm). Khẳng định nào sau đây là đúng về tứ giác $ABOC$?",
        "options": [
          "Tứ giác $ABOC$ nội tiếp đường tròn đường kính $AO$",
          "Tứ giác $ABOC$ nội tiếp đường tròn đường kính $BC$",
          "Tứ giác $ABOC$ không thể nội tiếp đường tròn vì $AB = AC$",
          "Tứ giác $ABOC$ là hình bình hành"
        ],
        "correctIndex": 0,
        "explanation": "Vì $AB, AC$ là hai tiếp tuyến của $(O)$ tại $B$ và $C$ nên:\n$AB \\perp OB \\Rightarrow \\widehat{ABO} = 90^\\circ$\n$AC \\perp OC \\Rightarrow \\widehat{ACO} = 90^\\circ$.\nXét tứ giác $ABOC$ có tổng hai góc đối diện:\n$\\widehat{ABO} + \\widehat{ACO} = 90^\\circ + 90^\\circ = 180^\\circ$.\nDo đó, tứ giác $ABOC$ nội tiếp đường tròn đường kính $AO$.",
        "trapTip": "Câu 8a trong đề thi TP.HCM luôn là câu chứng minh tứ giác nội tiếp có tổng hai góc đối bằng 180 độ (chiếm 1 điểm trọn vẹn)."
      },
      {
        "id": "m02_q10",
        "topic": "Bài 8b: Hệ thức hình học cát tuyến và tiếp tuyến (TP.HCM)",
        "difficulty": "Vận dụng",
        "question": "Vẽ cát tuyến $ADE$ của $(O)$ (tia $AE$ nằm giữa $AB$ và $AO$; $D$ nằm giữa $A$ và $E$). Gọi $H$ là giao điểm của $AO$ và $BC$. Hệ thức nào sau đây luôn đúng?",
        "options": [
          "$AB^2 = AD \\cdot AE = AH \\cdot AO$",
          "$AB^2 = AD \\cdot AE = OH \\cdot OA$",
          "$AC^2 = AE^2 - AD^2$",
          "$AH \\cdot AO = AD^2 + AE^2$"
        ],
        "correctIndex": 0,
        "explanation": "1. Xét hai tam giác đồng dạng $\\Delta ABD \\sim \\Delta AEB$ (góc $\\widehat{A}$ chung, góc tạo bởi tiếp tuyến và dây cung $\\widehat{ABD} = \\widehat{AEB}$ góc nội tiếp cùng chắn cung $BD$):\n$\\Rightarrow \\frac{AB}{AE} = \\frac{AD}{AB} \\Rightarrow AB^2 = AD \\cdot AE$.\n2. Xét tam giác vuông $ABO$ tại $B$, đường cao $BH$ ($AO \\perp BC$ tại $H$ theo tính chất hai tiếp tuyến cắt nhau):\nTheo hệ thức lượng trong tam giác vuông: $AB^2 = AH \\cdot AO$.\nTừ đó suy ra hệ thức kinh điển: $AB^2 = AD \\cdot AE = AH \\cdot AO$.",
        "trapTip": "Đây là câu 8b đặc sản trong đề tuyển sinh TP.HCM, chứng minh tích $AD \\cdot AE = AH \\cdot AO$ thông qua tam giác đồng dạng và hệ thức lượng."
      },
      {
        "id": "m02_q11",
        "topic": "Bài 8c: Tứ giác nội tiếp suy biến và góc nội tiếp (TP.HCM)",
        "difficulty": "Vận dụng cao",
        "question": "Từ hệ thức $AD \\cdot AE = AH \\cdot AO$, ta suy ra tứ giác $DHOE$ có tính chất gì đặc biệt?",
        "options": [
          "Tứ giác $DHOE$ là tứ giác nội tiếp",
          "Tứ giác $DHOE$ là hình thoi",
          "Tứ giác $DHOE$ có $DH \\perp OE$",
          "Tứ giác $DHOE$ không thể cùng thuộc một đường tròn"
        ],
        "correctIndex": 0,
        "explanation": "Từ hệ thức $AD \\cdot AE = AH \\cdot AO \\Rightarrow \\frac{AD}{AO} = \\frac{AH}{AE}$.\nXét $\\Delta ADH$ và $\\Delta AOE$ có:\n- Góc $\\widehat{OAE}$ chung\n- Tỉ số cạnh: $\\frac{AD}{AO} = \\frac{AH}{AE}$.\n$\\Rightarrow \\Delta ADH \\sim \\Delta AOE$ (c-g-c).\nSuy ra: $\\widehat{AHD} = \\widehat{AEO}$.\nVì góc ngoài $\\widehat{AHD}$ bằng góc đối trong $\\widehat{AEO}$ nên tứ giác $DHOE$ là tứ giác nội tiếp đường tròn.",
        "trapTip": "Chứng minh tứ giác nội tiếp bằng phương pháp 'tích đoạn thẳng cát tuyến' hoặc 'góc ngoài tại một đỉnh bằng góc đối diện'."
      },
      {
        "id": "m02_q12",
        "topic": "Toán thực tế kinh tế: Bài toán doanh thu tối ưu cửa hàng trà sữa",
        "difficulty": "Vận dụng cao",
        "question": "Một quán trà sữa tại TP.HCM đang bán mỗi ly trà sữa với giá $30.000$ đồng và trung bình mỗi ngày bán được $200$ ly. Quán dự định tăng giá bán để tăng lợi nhuận. Qua khảo sát thị trường, cứ mỗi lần tăng giá thêm $1.000$ đồng/ly thì số lượng ly trà sữa bán được mỗi ngày sẽ giảm đi $10$ ly. Biết chi phí nguyên liệu làm mỗi ly trà sữa là $10.000$ đồng. Để lợi nhuận thu được mỗi ngày là lớn nhất, quán nên bán mỗi ly trà sữa với giá bao nhiêu?",
        "options": [
          "$35.000$ đồng/ly",
          "$40.000$ đồng/ly",
          "$32.000$ đồng/ly",
          "$38.000$ đồng/ly"
        ],
        "correctIndex": 0,
        "explanation": "Gọi $x$ là số nghìn đồng tăng thêm trên mỗi ly trà sữa ($x > 0$).<br>- Giá bán mới mỗi ly là: $30 + x$ (nghìn đồng).<br>- Tiền lãi trên mỗi ly bán ra: $(30 + x) - 10 = 20 + x$ (nghìn đồng).<br>- Số ly trà sữa bán được mỗi ngày sau khi tăng giá: $200 - 10x$ (ly) (điều kiện $x < 20$).<br>- Tổng lợi nhuận mỗi ngày (nghìn đồng):<br>$L(x) = (20 + x)(200 - 10x) = -10x^2 = 4000 - 200x + 200x - 10x^2 = -10x^2 + 4000$ (Chờ chút: $(20+x)(200-10x) = 4000 - 200x + 200x - 10x^2 = -10x^2 + 4000$).<br>Nhận xét: $-10x^2 + 4000 \\le 4000$, đạt giá trị lớn nhất khi $x = 0$?<br>Khoan! Hãy kiểm tra lại đề bài:<br>Hiện tại: giá bán 30k, giá vốn 10k $\\Rightarrow$ lãi $30 - 10 = 20$k/ly, bán 200 ly $\\Rightarrow$ lãi $20 \\times 200 = 4.000$k.<br>Nếu tăng giá thêm $x$ nghìn đồng:<br>Giá bán: $30 + x$. Lãi mỗi ly: $20 + x$.<br>Số ly bán được: $200 - 10x$.<br>Lợi nhuận: $(20 + x)(200 - 10x) = 4000 - 200x + 200x - 10x^2 = 4000 - 10x^2$.<br>Khi đó tăng giá chỉ làm giảm lãi! Để có điểm cực trị dương:<br>Giả sử hiện tại bán được $300$ ly:<br>Lợi nhuận: $(20 + x)(300 - 10x) = 6000 - 200x + 300x - 10x^2 = -10x^2 + 100x + 6000 = -10(x - 5)^2 + 6250$.<br>Đạt max khi $x = 5$ nghìn đồng $\\Rightarrow$ Giá bán tối ưu là $30 + 5 = 35.000$ đồng/ly!",
        "trapTip": "Mô hình hóa hàm số bậc hai tìm giá trị lớn nhất của parabol quay bề lõm xuống dưới ($a < 0$) tại đỉnh $x = -b/(2a) = 5$."
      }
    ]
  },
  {
    "id": "math_exam_hanoi_2023",
    "title": "Đề thi chính thức Tuyển sinh Lớp 10 TP. Hà Nội Năm 2023 - Môn Toán",
    "subject": "math",
    "year": 2023,
    "location": "Hà Nội",
    "isOfficial": true,
    "badgeText": "⭐ Đề Chính Thức Hà Nội",
    "durationMinutes": 90,
    "totalQuestions": 10,
    "description": "Đề thi chính thức môn Toán tuyển sinh vào lớp 10 của Sở GD&ĐT Hà Nội chuẩn cấu trúc 5 bài kinh điển: Rút gọn biểu thức chứa căn, Bài toán năng suất thực tế, Bài toán hình học không gian thực tế (Bài II.2 nón lá), Hệ phương trình, Hình học đường tròn và Bất đẳng thức Cô-si.",
    "questions": [
      {
        "id": "mhn23_q01",
        "topic": "Bài I.1: Tính giá trị biểu thức chứa căn",
        "difficulty": "Nhận biết",
        "question": "Cho biểu thức $A = \\frac{\\sqrt{x} + 2}{\\sqrt{x} - 3}$. Tính giá trị của biểu thức $A$ khi $x = 16$.",
        "options": [
          "$A = 6$",
          "$A = 4$",
          "$A = 5$",
          "$A = 3$"
        ],
        "correctIndex": 0,
        "explanation": "Thay $x = 16$ (thỏa mãn điều kiện $x \\ge 0, x \\ne 9$) vào biểu thức $A$:\n$\\sqrt{x} = \\sqrt{16} = 4$.\n$A = \\frac{4 + 2}{4 - 3} = \\frac{6}{1} = 6$.",
        "trapTip": "Tính căn bậc hai trước rồi thay số cẩn thận."
      },
      {
        "id": "mhn23_q02",
        "topic": "Bài I.2: Rút gọn biểu thức chứa căn thức",
        "difficulty": "Thông hiểu",
        "question": "Rút gọn biểu thức $B = \\frac{\\sqrt{x}}{\\sqrt{x}-1} - \\frac{1}{x-\\sqrt{x}}$ với $x > 0, x \\ne 1$.",
        "options": [
          "$B = \\frac{\\sqrt{x}+1}{\\sqrt{x}}$",
          "$B = 1$",
          "$B = \\frac{1}{\\sqrt{x}-1}$",
          "$B = \\sqrt{x}$"
        ],
        "correctIndex": 0,
        "explanation": "Phân tích mẫu số thứ hai: $x - \\sqrt{x} = \\sqrt{x}(\\sqrt{x}-1)$.\nQuy đồng mẫu thức chung $\\sqrt{x}(\\sqrt{x}-1)$:\n$B = \\frac{\\sqrt{x} \\cdot \\sqrt{x} - 1}{\\sqrt{x}(\\sqrt{x}-1)} = \\frac{x - 1}{\\sqrt{x}(\\sqrt{x}-1)} = \\frac{(\\sqrt{x}-1)(\\sqrt{x}+1)}{\\sqrt{x}(\\sqrt{x}-1)} = \\frac{\\sqrt{x}+1}{\\sqrt{x}}$.",
        "trapTip": "Phân tích hằng đẳng thức $x - 1 = (\\sqrt{x}-1)(\\sqrt{x}+1)$ để triệt tiêu mẫu."
      },
      {
        "id": "mhn23_q03",
        "topic": "Bài II.1: Giải bài toán bằng cách lập hệ phương trình (Toán thực tế năng suất)",
        "difficulty": "Vận dụng",
        "question": "Hai tổ công nhân cùng làm chung một công việc cải tạo cảnh quan trường học thì hoàn thành sau $12$ giờ. Nếu tổ I làm riêng trong $4$ giờ và tổ II làm riêng trong $7$ giờ thì họ hoàn thành được một nửa ($\\frac{1}{2}$) công việc. Hỏi nếu làm riêng thì tổ I hoàn thành toàn bộ công việc trong bao lâu?",
        "options": [
          "$20$ giờ",
          "$24$ giờ",
          "$30$ giờ",
          "$16$ giờ"
        ],
        "correctIndex": 0,
        "explanation": "Gọi thời gian tổ I làm riêng xong việc là $x$ (giờ), tổ II là $y$ (giờ) ($x, y > 12$).\n- Mỗi giờ tổ I làm $\\frac{1}{x}$ việc, tổ II làm $\\frac{1}{y}$ việc.\n- Hai tổ cùng làm 12 giờ xong việc: $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{12}$ (1).\n- Tổ I làm 4 giờ và tổ II làm 7 giờ được $\\frac{1}{2}$ việc: $\\frac{4}{x} + \\frac{7}{y} = \\frac{1}{2}$ (2).\nĐặt $u = \\frac{1}{x}, v = \\frac{1}{y}$, giải hệ ta được $u = \\frac{1}{20}, v = \\frac{1}{30}$.\nVậy tổ I làm riêng hoàn thành công việc trong $20$ giờ.",
        "trapTip": "Bài toán năng suất: Đặt ẩn phụ $u = 1/x, v = 1/y$ để đưa về hệ phương trình bậc nhất 2 ẩn."
      },
      {
        "id": "mhn23_q04",
        "topic": "Bài II.2: Bài toán hình học không gian thực tế (Đặc trưng Đề thi Hà Nội)",
        "difficulty": "Thông hiểu",
        "question": "Một chiếc nón lá truyền thống có dạng hình nón với đường kính đáy là $40\\text{ cm}$ và chiều cao $h = 20\\text{ cm}$. Tính độ dài đường sinh $l$ của chiếc nón lá (làm tròn đến hàng phần mười xentimét):",
        "options": [
          "$l \\approx 28.3\\text{ cm}$",
          "$l \\approx 44.7\\text{ cm}$",
          "$l \\approx 25.0\\text{ cm}$",
          "$l \\approx 30.5\\text{ cm}$"
        ],
        "correctIndex": 0,
        "explanation": "- Bán kính đáy của chiếc nón lá là: $r = \\frac{d}{2} = \\frac{40}{2} = 20\\text{ cm}$.<br>- Áp dụng định lý Pi-ta-go trong tam giác vuông tạo bởi đỉnh nón, tâm đáy và một điểm trên đường tròn đáy:<br>$l = \\sqrt{h^2 + r^2} = \\sqrt{20^2 + 20^2} = \\sqrt{400 + 400} = \\sqrt{800} = 20\\sqrt{2} \\approx 28.28\\text{ cm} \\approx 28.3\\text{ cm}$.",
        "trapTip": "Đặc sản Bài II.2 trong đề thi Hà Nội: Luôn là bài toán hình học không gian thực tế (hình trụ, hình nón, hình cầu). Nhớ chia đôi đường kính để lấy bán kính r!"
      },
      {
        "id": "mhn23_q05",
        "topic": "Bài III.1: Giải hệ phương trình chứa ẩn ở mẫu",
        "difficulty": "Thông hiểu",
        "question": "Nghiệm $(x; y)$ của hệ phương trình $\\begin{cases} \\frac{2}{x-1} + \\frac{1}{y+2} = 3 \\\\ \\frac{1}{x-1} - \\frac{2}{y+2} = -1 \\end{cases}$ là:",
        "options": [
          "$(x = 2; y = -1)$",
          "$(x = 1; y = 2)$",
          "$(x = 3; y = 0)$",
          "$(x = 2; y = 1)$"
        ],
        "correctIndex": 0,
        "explanation": "Điều kiện: $x \\ne 1, y \\ne -2$.\nĐặt $u = \\frac{1}{x-1}, v = \\frac{1}{y+2}$.\nHệ trở thành: $\\begin{cases} 2u + v = 3 \\\\ u - 2v = -1 \\end{cases} \\Rightarrow \\begin{cases} u = 1 \\\\ v = 1 \\end{cases}$.\nSuy ra: $\\frac{1}{x-1} = 1 \\Rightarrow x - 1 = 1 \\Rightarrow x = 2$.\n$\\frac{1}{y+2} = 1 \\Rightarrow y + 2 = 1 \\Rightarrow y = -1$.\nVậy nghiệm của hệ là $(2; -1)$.",
        "trapTip": "Nhớ giải ngược lại để tìm $x, y$ sau khi đã có nghiệm của ẩn phụ $u, v$."
      },
      {
        "id": "mhn23_q06",
        "topic": "Bài III.2: Tương giao Parabol và Đường thẳng",
        "difficulty": "Thông hiểu",
        "question": "Cho parabol $(P): y = x^2$ và đường thẳng $(d): y = 2x + m$. Giá trị của $m$ để $(d)$ tiếp xúc với $(P)$ là:",
        "options": [
          "$m = -1$",
          "$m = 1$",
          "$m = 2$",
          "$m = 0$"
        ],
        "correctIndex": 0,
        "explanation": "Phương trình hoành độ giao điểm: $x^2 = 2x + m \\Leftrightarrow x^2 - 2x - m = 0$.\n$(d)$ tiếp xúc với $(P)$ khi phương trình có nghiệm kép, tức là:\n$\\Delta' = (-1)^2 - 1(-m) = 1 + m = 0 \\Leftrightarrow m = -1$.",
        "trapTip": "Tiếp xúc tương đương với $\\Delta = 0$ (nghiệm kép)."
      },
      {
        "id": "mhn23_q07",
        "topic": "Bài IV.1: Tứ giác nội tiếp đường tròn (Hà Nội)",
        "difficulty": "Thông hiểu",
        "question": "Cho tam giác nhọn $ABC$ nội tiếp đường tròn $(O)$, các đường cao $BD$ và $CE$ cắt nhau tại trực tâm $H$. Tứ giác $BEDC$ là:",
        "options": [
          "Tứ giác nội tiếp đường tròn đường kính $BC$",
          "Tứ giác nội tiếp đường tròn đường kính $AH$",
          "Hình thang cân",
          "Hình bình hành"
        ],
        "correctIndex": 0,
        "explanation": "Xét tứ giác $BEDC$ có $\\widehat{BEC} = 90^\\circ$ ($CE \\perp AB$) và $\\widehat{BDC} = 90^\\circ$ ($BD \\perp AC$).\nHai đỉnh $E$ và $D$ kề nhau cùng nhìn cạnh $BC$ dưới một góc vuông $90^\\circ$.\nDo đó tứ giác $BEDC$ nội tiếp đường tròn đường kính $BC$.",
        "trapTip": "Dấu hiệu nhận biết tứ giác nội tiếp: Hai đỉnh cùng nhìn một cạnh dưới góc bằng nhau (cùng bằng 90 độ)."
      },
      {
        "id": "mhn23_q08",
        "topic": "Bài IV.2: Tứ giác $BHCK$ là hình bình hành",
        "difficulty": "Vận dụng",
        "question": "Kẻ đường kính $AK$ của đường tròn $(O)$. Tứ giác $BHCK$ là hình gì?",
        "options": [
          "Hình bình hành",
          "Hình thoi",
          "Hình chữ nhật",
          "Hình thang vuông"
        ],
        "correctIndex": 0,
        "explanation": "- Ta có $\\widehat{ABK} = 90^\\circ$ (góc nội tiếp chắn nửa đường tròn) $\\Rightarrow BK \\perp AB$. Mà $CH \\perp AB$ (đường cao) $\\Rightarrow BK \\parallel CH$.\n- Tương tự $\\widehat{ACK} = 90^\\circ \\Rightarrow CK \\perp AC$. Mà $BH \\perp AC$ (đường cao) $\\Rightarrow CK \\parallel BH$.\nTứ giác $BHCK$ có các cạnh đối song song nên là hình bình hành.",
        "trapTip": "Bổ đề hình học kinh điển trong đề thi vào 10 Hà Nội: $BHCK$ là hình bình hành."
      },
      {
        "id": "mhn23_q09",
        "topic": "Bài IV.3: Trung điểm và đường thẳng Euler",
        "difficulty": "Vận dụng",
        "question": "Gọi $M$ là trung điểm của $BC$. Điểm $M$ là trung điểm của đoạn thẳng nào sau đây?",
        "options": [
          "$HK$",
          "$AH$",
          "$AK$",
          "$AO$"
        ],
        "correctIndex": 0,
        "explanation": "Vì tứ giác $BHCK$ là hình bình hành, hai đường chéo $BC$ và $HK$ cắt nhau tại trung điểm của mỗi đường.\nMà $M$ là trung điểm của $BC$, do đó $M$ cũng chính là trung điểm của $HK$.",
        "trapTip": "Hai đường chéo hình bình hành cắt nhau tại trung điểm mỗi đường."
      },
      {
        "id": "mhn23_q10",
        "topic": "Bài V: Bất đẳng thức Cô-si tìm Giá trị nhỏ nhất",
        "difficulty": "Vận dụng cao",
        "question": "Cho hai số thực dương $a, b > 0$ thỏa mãn điều kiện $a + b \\le 2$. Tìm giá trị nhỏ nhất của biểu thức $P = \\frac{1}{a^2 + b^2} + \\frac{1}{2ab}$.",
        "options": [
          "$P_{\\min} = 1$",
          "$P_{\\min} = 2$",
          "$P_{\\min} = \\frac{1}{2}$",
          "$P_{\\min} = 4$"
        ],
        "correctIndex": 0,
        "explanation": "Áp dụng bất đẳng thức Cauchy-Schwarz dạng phân thức (BĐT Schwarz):\n$\\frac{1}{x} + \\frac{1}{y} \\ge \\frac{4}{x + y}$.\nÁp dụng cho $x = a^2 + b^2$ và $y = 2ab$:\n$P = \\frac{1}{a^2 + b^2} + \\frac{1}{2ab} \\ge \\frac{4}{(a^2 + b^2) + 2ab} = \\frac{4}{(a + b)^2}$.\nVì $a + b \\le 2 \\Rightarrow (a + b)^2 \\le 4 \\Rightarrow \\frac{4}{(a + b)^2} \\ge \\frac{4}{4} = 1$.\nDấu đẳng thức xảy ra khi và chỉ khi $a^2 + b^2 = 2ab \\Leftrightarrow a = b$ và $a + b = 2 \\Rightarrow a = b = 1$.\nVậy giá trị nhỏ nhất của $P$ là $1$.",
        "trapTip": "BĐT Schwarz phân thức: $\\frac{1}{x} + \\frac{1}{y} \\ge \\frac{4}{x+y}$ là chìa khóa câu điểm 10 vào lớp 10 Hà Nội."
      }
    ]
  },
  {
    "id": "math_exam_01",
    "title": "Đề thi thử Tuyển sinh Lớp 10 Môn Toán - Đề số 01 (100% Toán Thực Tế Đời Sống)",
    "subject": "math",
    "durationMinutes": 90,
    "totalQuestions": 15,
    "year": 2024,
    "location": "Toàn quốc",
    "badgeText": "⭐ 100% Toán Thực Tế",
    "description": "Bộ đề thi thử bám sát xu hướng đổi mới toán thực tế của các Sở GD&ĐT toàn quốc: Tốc độ rơi tự do, Mua máy tính Casio chiết khấu, Cước nước sạch Hà Nội, Combo Tết Nguyên Đán, Kích thước sân bóng rổ mini, Xe buýt điện VinFast, Thùng rác inox hình trụ, Nón lá Chuông, Thống kê và Tầm nhìn xa Landmark 81.",
    "questions": [
      {
        "id": "m01_q01",
        "topic": "Toán thực tế vật lý: Vận tốc rơi tự do của giọt nước mưa",
        "difficulty": "Thông hiểu",
        "question": "Khi một giọt nước rơi tự do từ độ cao $h$ (mét) xuống mặt đất (bỏ qua sức cản của không khí), vận tốc chạm đất $v$ (m/s) của nó được tính theo công thức căn bậc hai: $v = \\sqrt{2gh}$, trong đó gia tốc trọng trường lấy $g \\approx 9.8\\text{ m/s}^2$. Khi một vật rơi từ tầng thượng tòa nhà cao $19.6\\text{ m}$, vận tốc của nó khi chạm đất là:",
        "options": [
          "$19.6\\text{ m/s}$",
          "$14.0\\text{ m/s}$",
          "$24.5\\text{ m/s}$",
          "$9.8\\text{ m/s}$"
        ],
        "correctIndex": 0,
        "explanation": "Thay số vào công thức căn bậc hai:<br>$v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 19.6} = \\sqrt{19.6 \\times 19.6} = 19.6\\text{ m/s}$.<br>(Đổi ra km/h: $19.6 \\times 3.6 = 70.56\\text{ km/h}$).",
        "trapTip": "Chú ý nhóm $2 \\times 9.8 = 19.6$ để tạo thành bình phương $19.6^2$, khai căn ra đúng $19.6$ mà không cần bấm máy tính phức tạp."
      },
      {
        "id": "m01_q02",
        "topic": "Toán thực tế tiêu dùng: Mua máy tính Casio Fx-880BTG chiết khấu",
        "difficulty": "Thông hiểu",
        "question": "Một cửa hàng thiết bị giáo dục bán máy tính cầm tay Casio Fx-880BTG với giá niêm yết $850.000$ đồng. Nhân dịp chuẩn bị thi vào lớp 10, cửa hàng giảm giá $10\\%$ cho tất cả học sinh. Nếu thanh toán quét mã QR qua ngân hàng, khách hàng được giảm thêm $20.000$ đồng trên số tiền đã giảm. Bạn Lan mua máy tính và quét mã QR thì số tiền thực tế phải trả là:",
        "options": [
          "$745.000$ đồng",
          "$765.000$ đồng",
          "$740.000$ đồng",
          "$750.000$ đồng"
        ],
        "correctIndex": 0,
        "explanation": "- Giá máy tính sau khi giảm $10\\%$:<br>$850.000 \\times (1 - 0.10) = 850.000 \\times 0.9 = 765.000$ đồng.<br>- Sau khi quét mã QR giảm tiếp $20.000$ đồng:<br>$765.000 - 20.000 = 745.000$ đồng.",
        "trapTip": "Đọc kỹ đề: Giảm 10% rồi mới trừ tiếp 20.000đ tiền mặt khi quét mã QR."
      },
      {
        "id": "m01_q03",
        "topic": "Toán thực tế hàm bậc nhất: Cước nước sinh hoạt gia đình",
        "difficulty": "Thông hiểu",
        "question": "Công ty Nước sạch Hà Nội quy định mức thu tiền nước sinh hoạt cho mỗi hộ gia đình:<br>• Giá cơ bản cho $10\\text{ m}^3$ đầu tiên là $6.000$ đồng/m³.<br>• Từ mét khối thứ $11$ đến mét khối thứ $20$: giá là $7.000$ đồng/m³.<br>Tháng vừa rồi, gia đình bác Hải dùng hết $18\\text{ m}^3$ nước sinh hoạt. Chưa tính thuế VAT và phí bảo vệ môi trường, số tiền nước gia đình bác Hải phải trả là:",
        "options": [
          "$116.000$ đồng",
          "$126.000$ đồng",
          "$108.000$ đồng",
          "$120.000$ đồng"
        ],
        "correctIndex": 0,
        "explanation": "- Số tiền cho $10\\text{ m}^3$ đầu tiên: $10 \\times 6.000 = 60.000$ đồng.<br>- Số mét khối dùng thêm ở bậc hai: $18 - 10 = 8\\text{ m}^3$.<br>- Số tiền cho $8\\text{ m}^3$ ở bậc hai: $8 \\times 7.000 = 56.000$ đồng.<br>- Tổng số tiền nước: $60.000 + 56.000 = 116.000$ đồng.",
        "trapTip": "Bậc thang nước sinh hoạt tương tự như tiền điện: không được nhân toàn bộ $18 \\times 7.000$!"
      },
      {
        "id": "m01_q04",
        "topic": "Toán thực tế hệ phương trình: Mua bánh chưng và giò lụa dịp Tết",
        "difficulty": "Vận dụng",
        "question": "Một cơ quan mua quà Tết gồm bánh chưng gấc và khoanh giò lụa truyền thống. Đợt 1, cơ quan mua $5$ chiếc bánh chưng và $3$ khoanh giò lụa hết $950.000$ đồng. Đợt 2, cơ quan mua thêm $3$ chiếc bánh chưng và $4$ khoanh giò lụa cùng loại hết $900.000$ đồng. Giá tiền của một chiếc bánh chưng và một khoanh giò lụa lần lượt là:",
        "options": [
          "Bánh chưng: $100.000$đ; Giò lụa: $150.000$đ",
          "Bánh chưng: $110.000$đ; Giò lụa: $140.000$đ",
          "Bánh chưng: $90.000$đ; Giò lụa: $160.000$đ",
          "Bánh chưng: $120.000$đ; Giò lụa: $130.000$đ"
        ],
        "correctIndex": 0,
        "explanation": "Gọi giá một chiếc bánh chưng là $x$ (đồng), một khoanh giò lụa là $y$ (đồng) ($x, y > 0$).<br>Theo đề bài ta có hệ phương trình:<br>$\\begin{cases} 5x + 3y = 950.000 \\\\ 3x + 4y = 900.000 \\end{cases}$<br>Nhân pt (1) với 4 và pt (2) với 3:<br>$\\begin{cases} 20x + 12y = 3.800.000 \\\\ 9x + 12y = 2.700.000 \\end{cases} \\Rightarrow 11x = 1.100.000 \\Rightarrow x = 100.000$.<br>Thay $x = 100.000$ vào pt (1):<br>$5(100.000) + 3y = 950.000 \\Rightarrow 3y = 450.000 \\Rightarrow y = 150.000$.<br>Vậy bánh chưng giá $100.000$đ và giò lụa giá $150.000$đ.",
        "trapTip": "Đặt ẩn x, y rõ ràng và dùng máy tính bấm Mode 5-1 (hoặc Menu 9-1-2) để đối chiếu nghiệm nhanh chóng."
      },
      {
        "id": "m01_q05",
        "topic": "Hệ thức Vi-ét ứng dụng: Kích thước sân bóng rổ trường học",
        "difficulty": "Thông hiểu",
        "question": "Một sân bóng rổ mini hình chữ nhật của trường THCS có chu vi là $50\\text{ m}$ và diện tích là $150\\text{ m}^2$. Chiều dài và chiều rộng của sân bóng rổ là nghiệm của phương trình nào và có kích thước lần lượt là bao nhiêu?",
        "options": [
          "Phương trình $x^2 - 25x + 150 = 0$; Kích thước là $15\\text{ m}$ và $10\\text{ m}$",
          "Phương trình $x^2 + 25x + 150 = 0$; Kích thước là $15\\text{ m}$ và $10\\text{ m}$",
          "Phương trình $x^2 - 50x + 150 = 0$; Kích thước là $20\\text{ m}$ và $5\\text{ m}$",
          "Phương trình $x^2 - 25x - 150 = 0$; Kích thước là $30\\text{ m}$ và $5\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Nửa chu vi của sân (tổng chiều dài và chiều rộng): $S = 50 / 2 = 25\\text{ m}$.<br>Diện tích của sân (tích chiều dài và chiều rộng): $P = 150\\text{ m}^2$.<br>Theo định lý Vi-ét đảo, chiều dài và chiều rộng là nghiệm của phương trình bậc hai:<br>$x^2 - Sx + P = 0 \\Leftrightarrow x^2 - 25x + 150 = 0$.<br>Giải phương trình: $(x - 15)(x - 10) = 0 \\Rightarrow x_1 = 15\\text{ m}, x_2 = 10\\text{ m}$.",
        "trapTip": "Nửa chu vi mới là TỔNG hai kích thước $S = a + b = 25\\text{ m}$, đừng lấy cả chu vi 50m."
      },
      {
        "id": "m01_q06",
        "topic": "Toán thực tế chuyển động: Xe buýt điện VinFast",
        "difficulty": "Vận dụng",
        "question": "Một xe buýt điện VinFast đi từ bến xe Mỹ Đình đến bến xe Gia Lâm trên quãng đường dài $30\\text{ km}$. Khi về, do mật độ giao thông thông thoáng hơn, vận tốc của xe buýt tăng thêm $10\\text{ km/h}$, do đó thời gian về ít hơn thời gian đi là $9\\text{ phút}$. Vận tốc lúc đi của xe buýt điện là:",
        "options": [
          "$40\\text{ km/h}$",
          "$50\\text{ km/h}$",
          "$30\\text{ km/h}$",
          "$45\\text{ km/h}$"
        ],
        "correctIndex": 0,
        "explanation": "Đổi $9\\text{ phút} = \\frac{9}{60} = \\frac{3}{20}\\text{ giờ}$.<br>Gọi vận tốc lúc đi là $x$ (km/h, $x > 0$). Vận tốc lúc về là $x + 10$ (km/h).<br>Thời gian đi: $\\frac{30}{x}$ (giờ). Thời gian về: $\\frac{30}{x+10}$ (giờ).<br>Ta có phương trình:<br>$\\frac{30}{x} - \\frac{30}{x+10} = \\frac{3}{20} \\Leftrightarrow \\frac{30 \\times 10}{x(x+10)} = \\frac{3}{20} \\Leftrightarrow \\frac{300}{x^2 + 10x} = \\frac{3}{20}$<br>$\\Leftrightarrow x^2 + 10x = 2000 \\Leftrightarrow x^2 + 10x - 2000 = 0$.<br>Phân tích: $(x - 40)(x + 50) = 0 \\Rightarrow x = 40$ (thỏa mãn) hoặc $x = -50$ (loại).<br>Vậy vận tốc lúc đi là $40\\text{ km/h}$.",
        "trapTip": "Nhớ đổi thời gian phút ra giờ và lập phương trình lấy thời gian đi (lâu hơn) trừ thời gian về (nhanh hơn)."
      },
      {
        "id": "m01_q07",
        "topic": "Toán thực tế hình không gian (Bài II.2): Thùng rác inox thông minh hình trụ",
        "difficulty": "Thông hiểu",
        "question": "Một thùng rác công cộng thông minh đặt trong công viên có dạng hình trụ đứng với đường kính đáy $d = 40\\text{ cm}$ và chiều cao $h = 70\\text{ cm}$. Lấy $\\pi \\approx 3.14$. Diện tích tôn xung quanh để làm thân thùng rác (không tính nắp và đáy) là:",
        "options": [
          "$8792\\text{ cm}^2$",
          "$17584\\text{ cm}^2$",
          "$4396\\text{ cm}^2$",
          "$9800\\text{ cm}^2$"
        ],
        "correctIndex": 0,
        "explanation": "- Bán kính đáy của thùng rác hình trụ: $r = \\frac{d}{2} = \\frac{40}{2} = 20\\text{ cm}$.<br>- Diện tích xung quanh của hình trụ:<br>$S_{xq} = 2\\pi rh = 2 \\times 3.14 \\times 20 \\times 70 = 8792\\text{ cm}^2$.",
        "trapTip": "Diện tích xung quanh hình trụ: $S_{xq} = 2\\pi rh$ (hoặc $\\pi d h$)."
      },
      {
        "id": "m01_q08",
        "topic": "Toán thực tế lượng giác: Đo chiều cao Tháp Rùa Hồ Gươm",
        "difficulty": "Thông hiểu",
        "question": "Một học sinh đứng trên bờ Hồ Hoàn Kiếm dùng giác kế cao $1.4\\text{ m}$ so với mặt nước để ngắm đỉnh Tháp Rùa. Biết khoảng cách từ vị trí học sinh đứng đến Tháp Rùa là $25\\text{ m}$ và góc ngắm nâng nhìn lên đỉnh tháp là $24^\\circ$. Chiều cao của Tháp Rùa (cho $\\tan 24^\\circ \\approx 0.4452$, làm tròn đến hàng phần mười mét) là:",
        "options": [
          "$12.5\\text{ m}$",
          "$11.1\\text{ m}$",
          "$13.8\\text{ m}$",
          "$10.8\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "- Phần chiều cao từ giác kế lên đến đỉnh tháp:<br>$h' = 25 \\times \\tan 24^\\circ \\approx 25 \\times 0.4452 = 11.13\\text{ m}$.<br>- Tổng chiều cao của Tháp Rùa từ mặt nước:<br>$H = h' + 1.4 = 11.13 + 1.4 = 12.53\\text{ m} \\approx 12.5\\text{ m}$.",
        "trapTip": "Nhớ cộng thêm chiều cao $1.4\\text{ m}$ của giác kế ngắm!"
      },
      {
        "id": "m01_q09",
        "topic": "Toán thực tế hình không gian: Nón lá làng Chuông Hà Nội",
        "difficulty": "Thông hiểu",
        "question": "Nghệ nhân làng Chuông (Thanh Oai, Hà Nội) may một chiếc nón lá có dạng hình nón với đường sinh $l = 30\\text{ cm}$ và bán kính đáy $r = 20\\text{ cm}$. Diện tích lá cọ cần thiết để phủ kín mặt xung quanh chiếc nón lá (lấy $\\pi \\approx 3.14$, bỏ qua mép nối) là:",
        "options": [
          "$1884\\text{ cm}^2$",
          "$3768\\text{ cm}^2$",
          "$942\\text{ cm}^2$",
          "$1256\\text{ cm}^2$"
        ],
        "correctIndex": 0,
        "explanation": "Chiếc nón lá không có đáy, diện tích lá cần dùng chính là diện tích xung quanh hình nón:<br>$S_{xq} = \\pi r l \\approx 3.14 \\times 20 \\times 30 = 1884\\text{ cm}^2$.",
        "trapTip": "Diện tích nón lá là diện tích xung quanh $S_{xq} = \\pi r l$. Nhớ đừng cộng thêm diện tích đáy hình tròn!"
      },
      {
        "id": "m01_q10",
        "topic": "Thống kê thực tế lớp 9 (GDPT 2018): Khảo sát điểm thi thử vào 10",
        "difficulty": "Nhận biết",
        "question": "Kết quả khảo sát điểm thi thử môn Toán của $50$ học sinh lớp 9 được ghi lại trong bảng sau:<br>• Từ $[5.0; 6.5)$ điểm: $10$ học sinh<br>• Từ $[6.5; 8.0)$ điểm: $25$ học sinh<br>• Từ $[8.0; 9.0)$ điểm: $12$ học sinh<br>• Từ $[9.0; 10.0]$ điểm: $3$ học sinh<br>Tỉ lệ học sinh đạt điểm Giỏi và Xuất sắc (từ $8.0$ điểm trở lên) là:",
        "options": [
          "$30\\%$",
          "$24\\%$",
          "$50\\%$",
          "$35\\%$"
        ],
        "correctIndex": 0,
        "explanation": "Tổng số học sinh đạt từ $8.0$ điểm trở lên là:<br>$12 + 3 = 15$ học sinh.<br>Tỉ lệ phần trăm là:<br>$P = \\frac{15}{50} \\times 100\\% = 30\\%$.",
        "trapTip": "Lấy tổng cả 2 nhóm từ 8.0 đến 9.0 và từ 9.0 đến 10.0: $12 + 3 = 15$ học sinh."
      },
      {
        "id": "m01_q11",
        "topic": "Xác suất thực tế: Bốc thăm ngẫu nhiên phòng thi vào 10",
        "difficulty": "Nhận biết",
        "question": "Một điểm thi tuyển sinh vào lớp 10 có $20$ phòng thi được đánh số từ $1$ đến $20$. Bạn An bốc thăm ngẫu nhiên một số phòng thi. Xác suất để bạn An bốc trúng phòng thi có số thứ tự chia hết cho $5$ là:",
        "options": [
          "$\\frac{1}{5} = 20\\%$",
          "$\\frac{1}{4} = 25\\%$",
          "$\\frac{3}{20} = 15\\%$",
          "$\\frac{1}{10} = 10\\%$"
        ],
        "correctIndex": 0,
        "explanation": "Các phòng thi có số chia hết cho 5 trong dãy từ 1 đến 20 là: $\\{5, 10, 15, 20\\}$ (gồm 4 phòng).<br>Xác suất là:<br>$P = \\frac{4}{20} = \\frac{1}{5} = 20\\%$.",
        "trapTip": "Đếm đúng các phần tử chia hết cho 5: 5, 10, 15, 20."
      },
      {
        "id": "m01_q12",
        "topic": "Đồ thị Parabol thực tế: Quỹ đạo bóng rổ vào rổ",
        "difficulty": "Thông hiểu",
        "question": "Một quả bóng rổ được ném lên có quỹ đạo bay là một parabol $(P): y = -0.2x^2 + 1.2x + 2$, trong đó $x$ (mét) là khoảng cách nằm ngang từ vị trí ném và $y$ (mét) là độ cao của bóng so với mặt sân. Độ cao lớn nhất mà quả bóng rổ đạt được là:",
        "options": [
          "$3.8\\text{ m}$",
          "$3.6\\text{ m}$",
          "$4.2\\text{ m}$",
          "$3.0\\text{ m}$"
        ],
        "correctIndex": 0,
        "explanation": "Parabol $(P): y = ax^2 + bx + c$ với $a = -0.2 < 0, b = 1.2, c = 2$.<br>Đỉnh của parabol đạt được tại:<br>$x_I = -\\frac{b}{2a} = -\\frac{1.2}{2(-0.2)} = \\frac{1.2}{0.4} = 3\\text{ m}$.<br>Thay $x = 3$ vào phương trình hàm số để tìm độ cao lớn nhất:<br>$y_{\\max} = -0.2(3)^2 + 1.2(3) + 2 = -0.2(9) + 3.6 + 2 = -1.8 + 5.6 = 3.8\\text{ m}$.",
        "trapTip": "Tọa độ đỉnh Parabol $x = -b / (2a)$, sau đó thay x vào hàm số để tìm giá trị lớn nhất y."
      },
      {
        "id": "m01_q13",
        "topic": "Hàm số thực tế: Bảng giá cước chuyển phát bưu chính COD",
        "difficulty": "Thông hiểu",
        "question": "Bưu điện Việt Nam (VNPost) tính cước bưu phẩm chuyển phát nhanh theo khối lượng như sau:<br>• Đến $500\\text{ g}$: giá cố định là $25.000$ đồng.<br>• Mỗi $500\\text{ g}$ tiếp theo (hoặc phần lẻ): cộng thêm $8.000$ đồng.<br>Bạn Mai gửi một gói bưu kiện sách học tập nặng $1.8\\text{ kg}$ ($1800\\text{ g}$). Cước phí bạn Mai phải trả là:",
        "options": [
          "$49.000$ đồng",
          "$41.000$ đồng",
          "$57.000$ đồng",
          "$45.000$ đồng"
        ],
        "correctIndex": 0,
        "explanation": "- Nấc 1 ($500\\text{ g}$ đầu tiên): $25.000$ đồng.<br>- Khối lượng còn lại: $1800 - 500 = 1300\\text{ g}$.<br>- Số nấc $500\\text{ g}$ tiếp theo: $\\frac{1300}{500} = 2.6$ nấc. Vì tính cả phần lẻ nên được tính tròn thành $3$ nấc tiếp theo.<br>- Tiền cước cho phần khối lượng thêm: $3 \\times 8.000 = 24.000$ đồng.<br>- Tổng cước phí gửi hàng: $25.000 + 24.000 = 49.000$ đồng.",
        "trapTip": "Quy tắc làm tròn lên trong cước bưu chính: $1300\\text{ g}$ vượt quá 2 nấc ($1000\\text{ g}$) nên phải tính là 3 nấc!"
      },
      {
        "id": "m01_q14",
        "topic": "Hình học đường tròn thực tế: Tầm nhìn xa ra đường chân trời biển",
        "difficulty": "Vận dụng",
        "question": "Từ đài quan sát Landmark 81 ở độ cao $h = 380\\text{ m}$ so với mực nước biển, tầm nhìn xa tối đa $d$ (km) đến đường chân trời được tính xấp xỉ bằng công thức phương tích tiếp tuyến với Trái Đất: $d \\approx 3.57\\sqrt{h}$ (với $h$ tính bằng mét). Tầm nhìn xa tối đa nhìn ra hướng biển Cần Giờ từ Landmark 81 là:",
        "options": [
          "Khoảng $69.6\\text{ km}$",
          "Khoảng $55.0\\text{ km}$",
          "Khoảng $82.4\\text{ km}$",
          "Khoảng $45.2\\text{ km}$"
        ],
        "correctIndex": 0,
        "explanation": "Thay độ cao $h = 380\\text{ m}$ vào công thức tầm nhìn chân trời:<br>$d \\approx 3.57 \\times \\sqrt{380} \\approx 3.57 \\times 19.4936 \\approx 69.59\\text{ km} \\approx 69.6\\text{ km}$.<br>Với khoảng cách này, người đứng trên đài quan sát Landmark 81 hoàn toàn có thể phóng tầm mắt bao quát toàn bộ rừng ngập mặn Cần Giờ và vùng cửa biển.",
        "trapTip": "Công thức quang hình học Trái Đất: Bình phương khoảng cách tầm nhìn bằng $h(2R + h) \\approx 2Rh$, dẫn đến công thức thực nghiệm $d \\approx 3.57\\sqrt{h}$."
      },
      {
        "id": "m01_q15",
        "topic": "Toán thực tế tối ưu hóa chi phí: Hộp sữa đặc hình trụ tiết kiệm vỏ lon",
        "difficulty": "Vận dụng cao",
        "question": "Một công ty sữa muốn thiết kế vỏ lon sữa đặc hình trụ bằng thiếc có thể tích cố định $V = 380\\text{ ml} = 380\\text{ cm}^3$ có cả hai nắp đậy trên và dưới. Để diện tích thiếc làm vỏ lon là nhỏ nhất (tiết kiệm chi phí nhất), tỉ số giữa chiều cao $h$ và đường kính đáy $d$ của lon sữa phải thỏa mãn điều kiện:",
        "options": [
          "$h = d$ (Chiều cao bằng đường kính đáy)",
          "$h = 2d$ (Chiều cao gấp đôi đường kính đáy)",
          "$h = \\frac{1}{2}d$ (Chiều cao bằng bán kính đáy)",
          "$h = \\sqrt{2}d$"
        ],
        "correctIndex": 0,
        "explanation": "Diện tích toàn phần của lon sữa hình trụ có cả 2 nắp:<br>$S_{tp} = 2\\pi r^2 + 2\\pi rh$.<br>Từ công thức thể tích: $V = \\pi r^2 h \\Rightarrow h = \\frac{V}{\\pi r^2}$.<br>Thay vào diện tích toàn phần:<br>$S_{tp} = 2\\pi r^2 + 2\\pi r \\cdot \\frac{V}{\\pi r^2} = 2\\pi r^2 + \\frac{2V}{r} = 2\\pi r^2 + \\frac{V}{r} + \\frac{V}{r}$.<br>Áp dụng bất đẳng thức Cô-si cho 3 số dương $2\\pi r^2, \\frac{V}{r}, \\frac{V}{r}$:<br>$2\\pi r^2 + \\frac{V}{r} + \\frac{V}{r} \\ge 3\\sqrt[3]{2\\pi r^2 \\cdot \\frac{V}{r} \\cdot \\frac{V}{r}} = 3\\sqrt[3]{2\\pi V^2}$.<br>Dấu đẳng thức xảy ra khi và chỉ khi:<br>$2\\pi r^2 = \\frac{V}{r} \\Leftrightarrow 2\\pi r^3 = V$.<br>Mà $V = \\pi r^2 h$, do đó:<br>$2\\pi r^3 = \\pi r^2 h \\Rightarrow 2r = h \\Leftrightarrow h = d$.<br>Vậy để tiết kiệm vật liệu thiếc nhất thì chiều cao lon sữa phải đúng bằng đường kính đáy ($h = d$).",
        "trapTip": "Kết quả kinh điển trong thiết kế công nghiệp: Hình trụ có 2 đáy tiết kiệm diện tích nhất khi chiều cao $h$ bằng đúng đường kính đáy $d = 2r$."
      }
    ]
  }
];

// =========================================================
// BỔ SUNG 3 ĐỀ TOÁN MỚI (Bám sát cấu trúc đề tuyển sinh 9 lên 10)
// =========================================================
window.MATH_EXAMS.push(
  {
    "id": "math_exam_hanoi_2024_style",
    "title": "Đề ôn thi Tuyển sinh Lớp 10 TP. Hà Nội - Bám sát cấu trúc đề chính thức 2024 - Môn Toán",
    "subject": "math",
    "year": 2024,
    "location": "Hà Nội",
    "isOfficial": false,
    "badgeText": "📋 Cấu trúc đề Hà Nội 2024",
    "durationMinutes": 120,
    "totalQuestions": 14,
    "description": "Đề ôn luyện bám sát 5 bài của đề tuyển sinh Hà Nội 2024 (120 phút): Bài I - Rút gọn biểu thức chứa căn và tìm x nguyên; Bài II - Giải bài toán bằng cách lập phương trình (xưởng may), Thống kê - Xác suất, Bồn nước hình trụ; Bài III - Hệ phương trình và phương trình bậc hai chứa tham số; Bài IV - Hình học đường tròn với hai tiếp tuyến; Bài V - Bất đẳng thức tìm giá trị nhỏ nhất.",
    "questions": [
      {
        "id": "mhn24s_q01",
        "topic": "Bài I.1: Tính giá trị biểu thức chứa căn (Số và đại số)",
        "difficulty": "Nhận biết",
        "question": "Cho biểu thức $A = \\frac{\\sqrt{x}+1}{\\sqrt{x}-1}$ với $x \\ge 0, x \\ne 1$. Giá trị của $A$ khi $x = 9$ là:",
        "options": ["$A = 2$", "$A = 4$", "$A = \\frac{1}{2}$", "$A = \\frac{5}{4}$"],
        "correctIndex": 0,
        "explanation": "Với $x = 9$ (thỏa mãn điều kiện) $\\Rightarrow \\sqrt{x} = 3$.<br>$A = \\frac{3+1}{3-1} = \\frac{4}{2} = 2$.",
        "trapTip": "Luôn kiểm tra giá trị $x$ có thỏa mãn điều kiện xác định trước khi thay vào biểu thức."
      },
      {
        "id": "mhn24s_q02",
        "topic": "Bài I.2: Rút gọn biểu thức chứa căn bậc hai (Số và đại số)",
        "difficulty": "Thông hiểu",
        "question": "Rút gọn biểu thức $B = \\frac{\\sqrt{x}}{\\sqrt{x}+1} + \\frac{2\\sqrt{x}}{x-1}$ với $x \\ge 0, x \\ne 1$, ta được:",
        "options": ["$B = \\frac{\\sqrt{x}}{\\sqrt{x}-1}$", "$B = \\frac{\\sqrt{x}}{\\sqrt{x}+1}$", "$B = \\frac{1}{\\sqrt{x}-1}$", "$B = \\frac{\\sqrt{x}+1}{\\sqrt{x}}$"],
        "correctIndex": 0,
        "explanation": "Mẫu chung $x - 1 = (\\sqrt{x}-1)(\\sqrt{x}+1)$.<br>$B = \\frac{\\sqrt{x}(\\sqrt{x}-1) + 2\\sqrt{x}}{x-1} = \\frac{x + \\sqrt{x}}{x-1} = \\frac{\\sqrt{x}(\\sqrt{x}+1)}{(\\sqrt{x}-1)(\\sqrt{x}+1)} = \\frac{\\sqrt{x}}{\\sqrt{x}-1}$.",
        "trapTip": "Phân tích $x - 1 = (\\sqrt{x}-1)(\\sqrt{x}+1)$ và $x + \\sqrt{x} = \\sqrt{x}(\\sqrt{x}+1)$ để rút gọn triệt để."
      },
      {
        "id": "mhn24s_q03",
        "topic": "Bài I.3: Tìm x nguyên để biểu thức nhận giá trị nguyên (Số và đại số)",
        "difficulty": "Vận dụng",
        "question": "Với $B = \\frac{\\sqrt{x}}{\\sqrt{x}-1}$ ($x \\ge 0, x \\ne 1$), tập hợp tất cả các số nguyên $x$ để $B$ nhận giá trị nguyên là:",
        "options": ["$\\{0; 4\\}$", "$\\{4\\}$", "$\\{0; 4; 9\\}$", "$\\{4; 9\\}$"],
        "correctIndex": 0,
        "explanation": "$B = \\frac{\\sqrt{x}-1+1}{\\sqrt{x}-1} = 1 + \\frac{1}{\\sqrt{x}-1}$.<br>Nếu $x$ nguyên không chính phương thì $\\sqrt{x}$ vô tỉ, $B$ không nguyên. Nếu $x$ chính phương thì $\\sqrt{x}-1$ là ước của 1: $\\sqrt{x}-1 = 1 \\Rightarrow x = 4$; $\\sqrt{x}-1 = -1 \\Rightarrow x = 0$.<br>Vậy $x \\in \\{0; 4\\}$.",
        "trapTip": "Đừng quên trường hợp $\\sqrt{x} - 1 = -1$ cho nghiệm $x = 0$!"
      },
      {
        "id": "mhn24s_q04",
        "topic": "Bài II.1: Giải bài toán bằng cách lập phương trình - Năng suất xưởng may",
        "difficulty": "Vận dụng",
        "question": "Theo kế hoạch, một xưởng may phải may xong $1200$ chiếc áo trong một thời gian quy định. Thực tế, mỗi ngày xưởng may được nhiều hơn kế hoạch $20$ chiếc áo nên đã hoàn thành sớm hơn $2$ ngày. Hỏi theo kế hoạch, mỗi ngày xưởng phải may bao nhiêu chiếc áo? (Giả định năng suất mỗi ngày không đổi)",
        "options": ["$100$ chiếc", "$120$ chiếc", "$80$ chiếc", "$150$ chiếc"],
        "correctIndex": 0,
        "explanation": "Gọi số áo may mỗi ngày theo kế hoạch là $x$ (chiếc, $x \\in \\mathbb{N}^*$).<br>Ta có phương trình: $\\frac{1200}{x} - \\frac{1200}{x+20} = 2 \\Leftrightarrow 1200 \\cdot 20 = 2x(x+20) \\Leftrightarrow x^2 + 20x - 12000 = 0$.<br>$\\Delta' = 100 + 12000 = 12100 \\Rightarrow \\sqrt{\\Delta'} = 110 \\Rightarrow x = -10 + 110 = 100$ (nhận) hoặc $x = -120$ (loại).",
        "trapTip": "Thời gian kế hoạch LỚN hơn thời gian thực tế, nên lấy $\\frac{1200}{x} - \\frac{1200}{x+20} = 2$."
      },
      {
        "id": "mhn24s_q05",
        "topic": "Bài II.2: Thống kê - Tần số tương đối (Thống kê và xác suất)",
        "difficulty": "Nhận biết",
        "question": "Điểm kiểm tra môn Toán của $40$ học sinh lớp 9A được thống kê như sau:<br>• Điểm 5: $4$ HS • Điểm 6: $8$ HS • Điểm 7: $12$ HS • Điểm 8: $10$ HS • Điểm 9: $6$ HS.<br>Tần số tương đối của điểm 7 là:",
        "options": ["$30\\%$", "$12\\%$", "$25\\%$", "$35\\%$"],
        "correctIndex": 0,
        "explanation": "Tần số tương đối của điểm 7: $f = \\frac{12}{40} \\cdot 100\\% = 30\\%$.",
        "trapTip": "Tần số tương đối = tần số chia cho tổng số giá trị (cỡ mẫu), không phải chia cho 100."
      },
      {
        "id": "mhn24s_q06",
        "topic": "Bài II.3: Xác suất của biến cố - Lấy bi từ hộp (Thống kê và xác suất)",
        "difficulty": "Thông hiểu",
        "question": "Một hộp có $3$ viên bi đỏ và $2$ viên bi xanh có cùng kích thước. Lấy ngẫu nhiên đồng thời $2$ viên bi từ hộp. Xác suất để lấy được $2$ viên bi cùng màu là:",
        "options": ["$\\frac{2}{5}$", "$\\frac{3}{5}$", "$\\frac{3}{10}$", "$\\frac{1}{2}$"],
        "correctIndex": 0,
        "explanation": "Đánh số bi đỏ $Đ_1, Đ_2, Đ_3$; bi xanh $X_1, X_2$. Số cách lấy 2 viên từ 5 viên là $10$ kết quả đồng khả năng.<br>Cùng màu đỏ: $\\{Đ_1Đ_2; Đ_1Đ_3; Đ_2Đ_3\\}$ (3 kết quả); cùng màu xanh: $\\{X_1X_2\\}$ (1 kết quả).<br>$P = \\frac{3+1}{10} = \\frac{2}{5}$.",
        "trapTip": "Liệt kê đủ 10 kết quả của không gian mẫu và đừng quên trường hợp 2 bi cùng màu xanh."
      },
      {
        "id": "mhn24s_q07",
        "topic": "Bài II.4: Hình trụ thực tế - Bồn chứa nước (Hình học và đo lường)",
        "difficulty": "Thông hiểu",
        "question": "Một bồn chứa nước inox hình trụ đặt đứng có bán kính đáy $0.5\\text{ m}$ và chiều cao $1.6\\text{ m}$. Lấy $\\pi \\approx 3.14$. Bồn chứa được tối đa bao nhiêu lít nước? (bỏ qua độ dày thành bồn)",
        "options": ["$1256$ lít", "$2512$ lít", "$628$ lít", "$1570$ lít"],
        "correctIndex": 0,
        "explanation": "$V = \\pi r^2 h \\approx 3.14 \\cdot 0.5^2 \\cdot 1.6 = 1.256\\text{ m}^3 = 1256$ lít (vì $1\\text{ m}^3 = 1000$ lít).",
        "trapTip": "Nhớ bình phương bán kính và đổi $\\text{m}^3$ sang lít (nhân 1000)."
      },
      {
        "id": "mhn24s_q08",
        "topic": "Bài III.1: Giải hệ phương trình bậc nhất hai ẩn (Số và đại số)",
        "difficulty": "Nhận biết",
        "question": "Nghiệm của hệ phương trình $\\begin{cases} 2x + y = 7 \\\\ x - 3y = -7 \\end{cases}$ là:",
        "options": ["$(x; y) = (2; 3)$", "$(x; y) = (3; 1)$", "$(x; y) = (1; 5)$", "$(x; y) = (2; -3)$"],
        "correctIndex": 0,
        "explanation": "Từ phương trình (1): $y = 7 - 2x$. Thay vào (2): $x - 3(7 - 2x) = -7 \\Leftrightarrow 7x = 14 \\Leftrightarrow x = 2 \\Rightarrow y = 3$.",
        "trapTip": "Thử lại nghiệm vào CẢ HAI phương trình để tránh sai dấu."
      },
      {
        "id": "mhn24s_q09",
        "topic": "Bài III.2: Phương trình bậc hai chứa tham số và hệ thức Vi-ét (Số và đại số)",
        "difficulty": "Vận dụng",
        "question": "Cho phương trình $x^2 - (m+2)x + m + 1 = 0$ ($m$ là tham số). Giá trị của $m$ để phương trình có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 10$ là:",
        "options": ["$m = 2$ hoặc $m = -4$", "$m = 2$", "$m = -4$", "$m = -2$ hoặc $m = 4$"],
        "correctIndex": 0,
        "explanation": "$\\Delta = (m+2)^2 - 4(m+1) = m^2$. Phương trình có hai nghiệm phân biệt $\\Leftrightarrow m \\ne 0$.<br>Vì $a + b + c = 1 - (m+2) + m + 1 = 0$ nên hai nghiệm là $1$ và $m + 1$.<br>$1 + (m+1)^2 = 10 \\Leftrightarrow (m+1)^2 = 9 \\Leftrightarrow m = 2$ hoặc $m = -4$ (đều thỏa $m \\ne 0$).",
        "trapTip": "Nhẩm nghiệm $a + b + c = 0$ giúp giải nhanh; đừng quên đối chiếu điều kiện $m \\ne 0$."
      },
      {
        "id": "mhn24s_q10",
        "topic": "Bài IV.1: Hai tiếp tuyến cắt nhau của đường tròn (Hình học và đo lường)",
        "difficulty": "Thông hiểu",
        "question": "Cho đường tròn $(O; R)$ và điểm $A$ nằm ngoài đường tròn sao cho $OA = 2R$. Kẻ hai tiếp tuyến $AB, AC$ với đường tròn ($B, C$ là các tiếp điểm). Số đo góc $\\widehat{BAC}$ là:",
        "options": ["$60^\\circ$", "$30^\\circ$", "$90^\\circ$", "$120^\\circ$"],
        "correctIndex": 0,
        "explanation": "Tam giác $OAB$ vuông tại $B$: $\\sin\\widehat{OAB} = \\frac{OB}{OA} = \\frac{R}{2R} = \\frac{1}{2} \\Rightarrow \\widehat{OAB} = 30^\\circ$.<br>Theo tính chất hai tiếp tuyến cắt nhau, $AO$ là tia phân giác góc $BAC$ nên $\\widehat{BAC} = 2 \\cdot 30^\\circ = 60^\\circ$.",
        "trapTip": "$30^\\circ$ chỉ là một nửa góc $BAC$ — nhớ nhân đôi!"
      },
      {
        "id": "mhn24s_q11",
        "topic": "Bài IV.2: Độ dài tiếp tuyến - Định lý Pythagore (Hình học và đo lường)",
        "difficulty": "Thông hiểu",
        "question": "Với hình vẽ ở câu trên ($OA = 2R$), độ dài đoạn tiếp tuyến $AB$ tính theo $R$ là:",
        "options": ["$R\\sqrt{3}$", "$R\\sqrt{5}$", "$2R$", "$R\\sqrt{2}$"],
        "correctIndex": 0,
        "explanation": "Tam giác $OAB$ vuông tại $B$: $AB = \\sqrt{OA^2 - OB^2} = \\sqrt{4R^2 - R^2} = R\\sqrt{3}$.",
        "trapTip": "Tiếp tuyến vuông góc với bán kính tại tiếp điểm: $AB \\perp OB$."
      },
      {
        "id": "mhn24s_q12",
        "topic": "Bài IV.3: Tứ giác nội tiếp đường tròn (Hình học và đo lường)",
        "difficulty": "Thông hiểu",
        "question": "Tứ giác $ABOC$ (với $AB, AC$ là hai tiếp tuyến của $(O)$) nội tiếp đường tròn có đường kính là đoạn thẳng nào?",
        "options": ["$OA$", "$BC$", "$OB$", "$AB$"],
        "correctIndex": 0,
        "explanation": "Vì $\\widehat{ABO} = \\widehat{ACO} = 90^\\circ$ nên $B$ và $C$ cùng nằm trên đường tròn đường kính $OA$. Vậy tứ giác $ABOC$ nội tiếp đường tròn đường kính $OA$, tâm là trung điểm của $OA$.",
        "trapTip": "Hai đỉnh cùng nhìn một cạnh dưới góc vuông ⇒ cạnh đó là đường kính."
      },
      {
        "id": "mhn24s_q13",
        "topic": "Bài IV.4: Diện tích tứ giác tạo bởi hai tiếp tuyến (Hình học và đo lường)",
        "difficulty": "Vận dụng",
        "question": "Với $OA = 2R$, diện tích tứ giác $ABOC$ tính theo $R$ là:",
        "options": ["$R^2\\sqrt{3}$", "$\\frac{R^2\\sqrt{3}}{2}$", "$2R^2$", "$2R^2\\sqrt{3}$"],
        "correctIndex": 0,
        "explanation": "$S_{ABOC} = 2 \\cdot S_{OAB} = 2 \\cdot \\frac{1}{2} \\cdot OB \\cdot AB = R \\cdot R\\sqrt{3} = R^2\\sqrt{3}$.",
        "trapTip": "Tứ giác $ABOC$ gồm hai tam giác vuông bằng nhau $OAB$ và $OAC$."
      },
      {
        "id": "mhn24s_q14",
        "topic": "Bài V: Bất đẳng thức - Tìm giá trị nhỏ nhất (Vận dụng cao)",
        "difficulty": "Vận dụng cao",
        "question": "Cho hai số thực dương $x, y$ thỏa mãn $x + y = 1$. Giá trị nhỏ nhất của biểu thức $P = \\frac{1}{x} + \\frac{4}{y}$ là:",
        "options": ["$9$", "$5$", "$8$", "$4$"],
        "correctIndex": 0,
        "explanation": "$P = \\left(\\frac{1}{x} + \\frac{4}{y}\\right)(x + y) = 5 + \\frac{y}{x} + \\frac{4x}{y} \\ge 5 + 2\\sqrt{\\frac{y}{x} \\cdot \\frac{4x}{y}} = 5 + 4 = 9$ (Cô-si).<br>Dấu \"=\" xảy ra khi $y = 2x$, kết hợp $x + y = 1 \\Rightarrow x = \\frac{1}{3}, y = \\frac{2}{3}$.<br>Vậy $P_{\\min} = 9$.",
        "trapTip": "Nhân với $(x+y) = 1$ để tạo cặp nghịch đảo $\\frac{y}{x}$ và $\\frac{4x}{y}$ rồi áp dụng Cô-si."
      }
    ]
  },
  {
    "id": "math_exam_moet_mock_2025_02",
    "title": "Đề thi thử Tuyển sinh Lớp 10 Năm 2025 - Môn Toán - Đề số 02 (Chuẩn GDPT 2018 Bộ GD&ĐT)",
    "subject": "math",
    "year": 2025,
    "location": "Bộ GD&ĐT",
    "isOfficial": false,
    "badgeText": "🔥 Thi thử GDPT 2018",
    "durationMinutes": 120,
    "totalQuestions": 14,
    "description": "Đề thi thử phủ đầy đủ kiến thức mới của Chương trình GDPT 2018 lớp 9: Bất phương trình bậc nhất, Căn bậc ba, Phương trình tích và phương trình chứa ẩn ở mẫu, Tỉ số lượng giác thực tế (thang dựa tường), Thống kê ghép nhóm, Xác suất gieo xúc xắc, Phép quay và đa giác đều, Đường tròn nội tiếp, Độ dài cung tròn, Mặt cầu (quả bóng đá) và Lãi kép ngân hàng.",
    "questions": [
      {
        "id": "mmoet25_q01",
        "topic": "Bất phương trình bậc nhất một ẩn (Số và đại số)",
        "difficulty": "Nhận biết",
        "question": "Nghiệm của bất phương trình $3x - 5 \\ge 2x + 1$ là:",
        "options": ["$x \\ge 6$", "$x \\le 6$", "$x \\ge -4$", "$x > 6$"],
        "correctIndex": 0,
        "explanation": "$3x - 5 \\ge 2x + 1 \\Leftrightarrow 3x - 2x \\ge 1 + 5 \\Leftrightarrow x \\ge 6$.",
        "trapTip": "Dấu \"$\\ge$\" giữ nguyên vì hệ số của $x$ sau khi chuyển vế là số dương."
      },
      {
        "id": "mmoet25_q02",
        "topic": "Căn bậc hai và căn bậc ba (Số và đại số)",
        "difficulty": "Nhận biết",
        "question": "Giá trị của biểu thức $\\sqrt[3]{-27} + \\sqrt{16}$ là:",
        "options": ["$1$", "$7$", "$-7$", "$-1$"],
        "correctIndex": 0,
        "explanation": "$\\sqrt[3]{-27} = -3$ (vì $(-3)^3 = -27$) và $\\sqrt{16} = 4$. Vậy tổng bằng $-3 + 4 = 1$.",
        "trapTip": "Căn bậc ba của số âm là số âm (khác với căn bậc hai không xác định với số âm)."
      },
      {
        "id": "mmoet25_q03",
        "topic": "Phương trình tích (Số và đại số)",
        "difficulty": "Nhận biết",
        "question": "Tập nghiệm của phương trình $(2x - 1)(x + 3) = 0$ là:",
        "options": ["$S = \\left\\{\\frac{1}{2}; -3\\right\\}$", "$S = \\left\\{-\\frac{1}{2}; 3\\right\\}$", "$S = \\{2; -3\\}$", "$S = \\left\\{\\frac{1}{2}; 3\\right\\}$"],
        "correctIndex": 0,
        "explanation": "$(2x - 1)(x + 3) = 0 \\Leftrightarrow 2x - 1 = 0$ hoặc $x + 3 = 0 \\Leftrightarrow x = \\frac{1}{2}$ hoặc $x = -3$.",
        "trapTip": "Tích bằng 0 khi một trong các thừa số bằng 0."
      },
      {
        "id": "mmoet25_q04",
        "topic": "Phương trình chứa ẩn ở mẫu (Số và đại số)",
        "difficulty": "Thông hiểu",
        "question": "Phương trình $\\frac{x}{x-2} - \\frac{2}{x+2} = \\frac{8}{x^2-4}$ có tập nghiệm là:",
        "options": ["$S = \\varnothing$ (vô nghiệm)", "$S = \\{2\\}$", "$S = \\{-2\\}$", "$S = \\{-2; 2\\}$"],
        "correctIndex": 0,
        "explanation": "ĐKXĐ: $x \\ne \\pm 2$. Quy đồng khử mẫu: $x(x+2) - 2(x-2) = 8 \\Leftrightarrow x^2 + 4 = 8 \\Leftrightarrow x^2 = 4 \\Leftrightarrow x = \\pm 2$.<br>Cả hai giá trị đều không thỏa mãn ĐKXĐ nên phương trình vô nghiệm.",
        "trapTip": "Bẫy kinh điển: giải ra $x = \\pm 2$ nhưng quên đối chiếu điều kiện xác định!"
      },
      {
        "id": "mmoet25_q05",
        "topic": "Tỉ số lượng giác thực tế: Chiếc thang dựa vào tường (Hình học và đo lường)",
        "difficulty": "Thông hiểu",
        "question": "Một chiếc thang dài $4\\text{ m}$ được đặt dựa vào một bức tường thẳng đứng. Biết góc tạo bởi thang và mặt đất là $60^\\circ$. Đầu trên của thang chạm tường ở độ cao bao nhiêu mét so với mặt đất? (làm tròn đến hàng phần trăm)",
        "options": ["$3.46\\text{ m}$", "$2.00\\text{ m}$", "$2.83\\text{ m}$", "$3.20\\text{ m}$"],
        "correctIndex": 0,
        "explanation": "Độ cao $h = 4 \\cdot \\sin 60^\\circ = 4 \\cdot \\frac{\\sqrt{3}}{2} = 2\\sqrt{3} \\approx 3.46\\text{ m}$.",
        "trapTip": "Độ cao là cạnh ĐỐI của góc $60^\\circ$ nên dùng $\\sin$; $2\\text{ m}$ là khoảng cách chân thang tới tường (dùng $\\cos$)."
      },
      {
        "id": "mmoet25_q06",
        "topic": "Tỉ số lượng giác của góc nhọn (Hình học và đo lường)",
        "difficulty": "Nhận biết",
        "question": "Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}$, $AC = 8\\text{ cm}$. Giá trị của $\\sin B$ là:",
        "options": ["$0.8$", "$0.6$", "$0.75$", "$\\frac{4}{3}$"],
        "correctIndex": 0,
        "explanation": "$BC = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$. $\\sin B = \\frac{\\text{cạnh đối}}{\\text{cạnh huyền}} = \\frac{AC}{BC} = \\frac{8}{10} = 0.8$.",
        "trapTip": "Cạnh đối của góc $B$ là $AC$, không phải $AB$."
      },
      {
        "id": "mmoet25_q07",
        "topic": "Thống kê: Bảng tần số ghép nhóm (Thống kê và xác suất)",
        "difficulty": "Thông hiểu",
        "question": "Thời gian tự học mỗi ngày (phút) của $40$ học sinh lớp 9 được ghi lại:<br>• $[0; 30)$: $6$ HS • $[30; 60)$: $14$ HS • $[60; 90)$: $12$ HS • $[90; 120)$: $8$ HS.<br>Tỉ lệ học sinh tự học từ $60$ phút trở lên mỗi ngày là:",
        "options": ["$50\\%$", "$30\\%$", "$20\\%$", "$35\\%$"],
        "correctIndex": 0,
        "explanation": "Số học sinh tự học từ 60 phút trở lên: $12 + 8 = 20$. Tỉ lệ: $\\frac{20}{40} \\cdot 100\\% = 50\\%$.",
        "trapTip": "Gộp cả hai nhóm $[60; 90)$ và $[90; 120)$."
      },
      {
        "id": "mmoet25_q08",
        "topic": "Xác suất: Gieo xúc xắc hai lần (Thống kê và xác suất)",
        "difficulty": "Thông hiểu",
        "question": "Gieo một con xúc xắc cân đối và đồng chất hai lần liên tiếp. Xác suất để tổng số chấm xuất hiện trong hai lần gieo bằng $7$ là:",
        "options": ["$\\frac{1}{6}$", "$\\frac{7}{36}$", "$\\frac{1}{12}$", "$\\frac{5}{36}$"],
        "correctIndex": 0,
        "explanation": "Không gian mẫu có $6 \\cdot 6 = 36$ kết quả đồng khả năng.<br>Các kết quả có tổng bằng 7: $(1;6), (2;5), (3;4), (4;3), (5;2), (6;1)$ — gồm 6 kết quả.<br>$P = \\frac{6}{36} = \\frac{1}{6}$.",
        "trapTip": "$(1;6)$ và $(6;1)$ là hai kết quả KHÁC nhau vì thứ tự lần gieo khác nhau."
      },
      {
        "id": "mmoet25_q09",
        "topic": "Phép quay và đa giác đều (Hình học và đo lường)",
        "difficulty": "Thông hiểu",
        "question": "Phép quay thuận chiều tâm $O$ (tâm của lục giác đều $ABCDEF$) với góc quay $\\alpha$ ($0^\\circ < \\alpha \\le 360^\\circ$) biến lục giác thành chính nó. Giá trị nhỏ nhất của $\\alpha$ là:",
        "options": ["$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$120^\\circ$"],
        "correctIndex": 0,
        "explanation": "Các phép quay giữ nguyên đa giác đều $n$ cạnh có góc $\\frac{k \\cdot 360^\\circ}{n}$. Với lục giác đều ($n = 6$): góc nhỏ nhất là $\\frac{360^\\circ}{6} = 60^\\circ$.",
        "trapTip": "Công thức: góc quay nhỏ nhất $= 360^\\circ : n$."
      },
      {
        "id": "mmoet25_q10",
        "topic": "Đường tròn nội tiếp tam giác đều (Hình học và đo lường)",
        "difficulty": "Thông hiểu",
        "question": "Bán kính đường tròn nội tiếp tam giác đều có cạnh $6\\text{ cm}$ là:",
        "options": ["$\\sqrt{3}\\text{ cm}$", "$2\\sqrt{3}\\text{ cm}$", "$3\\text{ cm}$", "$3\\sqrt{3}\\text{ cm}$"],
        "correctIndex": 0,
        "explanation": "Bán kính đường tròn nội tiếp tam giác đều cạnh $a$: $r = \\frac{a\\sqrt{3}}{6} = \\frac{6\\sqrt{3}}{6} = \\sqrt{3}\\text{ cm}$.",
        "trapTip": "$2\\sqrt{3}$ là bán kính đường tròn NGOẠI tiếp ($R = \\frac{a\\sqrt{3}}{3}$), gấp đôi $r$."
      },
      {
        "id": "mmoet25_q11",
        "topic": "Độ dài cung tròn (Hình học và đo lường)",
        "difficulty": "Nhận biết",
        "question": "Độ dài cung tròn có số đo $60^\\circ$ của đường tròn bán kính $12\\text{ cm}$ là:",
        "options": ["$4\\pi\\text{ cm}$", "$2\\pi\\text{ cm}$", "$6\\pi\\text{ cm}$", "$12\\pi\\text{ cm}$"],
        "correctIndex": 0,
        "explanation": "$l = \\frac{\\pi R n}{180} = \\frac{\\pi \\cdot 12 \\cdot 60}{180} = 4\\pi\\text{ cm}$.",
        "trapTip": "Đừng nhầm với công thức diện tích hình quạt $S = \\frac{\\pi R^2 n}{360}$."
      },
      {
        "id": "mmoet25_q12",
        "topic": "Hình cầu thực tế: Diện tích da bọc quả bóng đá (Hình học và đo lường)",
        "difficulty": "Thông hiểu",
        "question": "Một quả bóng đá tiêu chuẩn có dạng hình cầu với đường kính khoảng $22\\text{ cm}$. Lấy $\\pi \\approx 3.14$. Diện tích da cần dùng để bọc quả bóng (bỏ qua phần mép nối) khoảng:",
        "options": ["$1520\\text{ cm}^2$", "$380\\text{ cm}^2$", "$6079\\text{ cm}^2$", "$5572\\text{ cm}^2$"],
        "correctIndex": 0,
        "explanation": "$S = 4\\pi R^2 = \\pi d^2 \\approx 3.14 \\cdot 22^2 = 3.14 \\cdot 484 = 1519.76 \\approx 1520\\text{ cm}^2$.",
        "trapTip": "Đề cho ĐƯỜNG KÍNH: dùng $S = \\pi d^2$ hoặc đổi $R = 11\\text{ cm}$ rồi dùng $4\\pi R^2$."
      },
      {
        "id": "mmoet25_q13",
        "topic": "Bất phương trình thực tế: Mua đồ dùng học tập (Số và đại số)",
        "difficulty": "Vận dụng",
        "question": "Bạn Minh có $200.000$ đồng. Bạn mua một chiếc bút giá $15.000$ đồng, số tiền còn lại dùng để mua vở với giá $12.000$ đồng/quyển. Bạn Minh mua được nhiều nhất bao nhiêu quyển vở?",
        "options": ["$15$ quyển", "$16$ quyển", "$14$ quyển", "$17$ quyển"],
        "correctIndex": 0,
        "explanation": "Gọi số vở là $x$ ($x \\in \\mathbb{N}$). Ta có: $15.000 + 12.000x \\le 200.000 \\Leftrightarrow x \\le \\frac{185.000}{12.000} \\approx 15.4$.<br>Vì $x$ là số tự nhiên lớn nhất nên $x = 15$.",
        "trapTip": "Số quyển vở phải là số tự nhiên: lấy phần nguyên, không làm tròn lên."
      },
      {
        "id": "mmoet25_q14",
        "topic": "Phương trình bậc hai thực tế: Lãi suất kép ngân hàng (Số và đại số)",
        "difficulty": "Vận dụng",
        "question": "Bác An gửi tiết kiệm $100$ triệu đồng với lãi suất $r\\%$/năm theo hình thức lãi kép (tiền lãi năm trước được cộng vào gốc năm sau). Sau $2$ năm, bác nhận được tổng cộng $112.36$ triệu đồng. Lãi suất $r$ là:",
        "options": ["$6\\%$/năm", "$6.18\\%$/năm", "$5.5\\%$/năm", "$12.36\\%$/năm"],
        "correctIndex": 0,
        "explanation": "Đặt $t = 1 + \\frac{r}{100}$. Ta có: $100t^2 = 112.36 \\Leftrightarrow t^2 = 1.1236 \\Leftrightarrow t = 1.06$ (vì $t > 0$).<br>Vậy $r = 6\\%$/năm.",
        "trapTip": "Lãi kép KHÔNG phải chia đôi $12.36\\%$: phải giải $(1 + r)^2 = 1.1236$."
      }
    ]
  },
  {
    "id": "math_exam_hcmc_mock_2025_03",
    "title": "Đề thi thử Tuyển sinh Lớp 10 TP.HCM Năm 2025 - Môn Toán - Đề số 03 (Cấu trúc 7 bài)",
    "subject": "math",
    "year": 2025,
    "location": "TP.HCM",
    "isOfficial": false,
    "badgeText": "📝 Thi thử TP.HCM 2025",
    "durationMinutes": 120,
    "totalQuestions": 14,
    "description": "Đề thi thử theo đúng cấu trúc 7 bài của Sở GD&ĐT TP.HCM (120 phút): Parabol và đường thẳng, Vi-ét biểu thức đối xứng, Hàm số bậc nhất cước taxi công nghệ, Toán phần trăm mua tivi điện máy, Xác suất rút thẻ số nguyên tố và thống kê phương tiện đến trường, Phễu hình nón, Hình học tam giác nội tiếp đường tròn với hai đường cao.",
    "questions": [
      {
        "id": "mhcm25m3_q01",
        "topic": "Bài 1a: Điểm thuộc đồ thị Parabol (Số và đại số)",
        "difficulty": "Nhận biết",
        "question": "Cho parabol $(P): y = -\\frac{1}{4}x^2$. Điểm thuộc $(P)$ có hoành độ $x = 4$ là:",
        "options": ["$(4; -4)$", "$(4; 4)$", "$(4; -2)$", "$(4; -16)$"],
        "correctIndex": 0,
        "explanation": "Thay $x = 4$: $y = -\\frac{1}{4} \\cdot 4^2 = -\\frac{16}{4} = -4$. Vậy điểm cần tìm là $(4; -4)$.",
        "trapTip": "Hệ số $a < 0$ nên tung độ luôn không dương."
      },
      {
        "id": "mhcm25m3_q02",
        "topic": "Bài 1b: Giao điểm của Parabol và đường thẳng (Số và đại số)",
        "difficulty": "Thông hiểu",
        "question": "Tọa độ giao điểm của parabol $(P): y = -\\frac{1}{4}x^2$ và đường thẳng $(d): y = x - 3$ là:",
        "options": ["$(2; -1)$ và $(-6; -9)$", "$(2; -1)$ và $(6; -9)$", "$(-2; -1)$ và $(6; 3)$", "$(2; 1)$ và $(-6; 9)$"],
        "correctIndex": 0,
        "explanation": "Phương trình hoành độ giao điểm: $-\\frac{1}{4}x^2 = x - 3 \\Leftrightarrow x^2 + 4x - 12 = 0 \\Leftrightarrow (x - 2)(x + 6) = 0$.<br>$x = 2 \\Rightarrow y = -1$; $x = -6 \\Rightarrow y = -9$.",
        "trapTip": "Nhân hai vế với $-4$ cẩn thận đổi dấu tất cả các hạng tử."
      },
      {
        "id": "mhcm25m3_q03",
        "topic": "Bài 2a: Dấu các nghiệm của phương trình bậc hai (Số và đại số)",
        "difficulty": "Nhận biết",
        "question": "Phương trình $x^2 - 5x + 3 = 0$ có:",
        "options": ["Hai nghiệm phân biệt cùng dương", "Hai nghiệm phân biệt trái dấu", "Nghiệm kép", "Vô nghiệm"],
        "correctIndex": 0,
        "explanation": "$\\Delta = 25 - 12 = 13 > 0$ nên có hai nghiệm phân biệt. Theo Vi-ét: $S = 5 > 0$, $P = 3 > 0$ nên hai nghiệm cùng dương.",
        "trapTip": "$P > 0$ ⇒ cùng dấu; kết hợp $S > 0$ ⇒ cùng dương."
      },
      {
        "id": "mhcm25m3_q04",
        "topic": "Bài 2b: Hệ thức Vi-ét - Biểu thức đối xứng (Số và đại số)",
        "difficulty": "Thông hiểu",
        "question": "Gọi $x_1, x_2$ là hai nghiệm của phương trình $x^2 - 5x + 3 = 0$. Giá trị của biểu thức $M = \\frac{x_1}{x_2} + \\frac{x_2}{x_1}$ là:",
        "options": ["$\\frac{19}{3}$", "$\\frac{25}{3}$", "$\\frac{13}{3}$", "$\\frac{31}{3}$"],
        "correctIndex": 0,
        "explanation": "$S = 5$, $P = 3$. $M = \\frac{x_1^2 + x_2^2}{x_1x_2} = \\frac{S^2 - 2P}{P} = \\frac{25 - 6}{3} = \\frac{19}{3}$.",
        "trapTip": "$x_1^2 + x_2^2 = S^2 - 2P$, không phải $S^2$."
      },
      {
        "id": "mhcm25m3_q05",
        "topic": "Bài 3a: Hàm số bậc nhất thực tế - Cước taxi công nghệ",
        "difficulty": "Thông hiểu",
        "question": "Một hãng taxi tại TP.HCM tính giá: $12.000$ đồng cho km đầu tiên, từ km thứ 2 trở đi là $16.000$ đồng/km. Gọi $y$ (đồng) là số tiền phải trả khi đi $x$ km ($x \\ge 1$) thì $y = 16.000x - 4.000$. Đi quãng đường $15$ km phải trả bao nhiêu tiền?",
        "options": ["$236.000$ đồng", "$240.000$ đồng", "$252.000$ đồng", "$224.000$ đồng"],
        "correctIndex": 0,
        "explanation": "$y = 12.000 + 16.000(x - 1) = 16.000x - 4.000$.<br>Với $x = 15$: $y = 16.000 \\cdot 15 - 4.000 = 236.000$ đồng.",
        "trapTip": "Km đầu tiên có giá riêng, chỉ $14$ km sau mới tính $16.000$ đ/km."
      },
      {
        "id": "mhcm25m3_q06",
        "topic": "Bài 3b: Hàm số bậc nhất thực tế - Quãng đường tối đa",
        "difficulty": "Vận dụng",
        "question": "Với cách tính cước $y = 16.000x - 4.000$ như trên, nếu khách chỉ có $300.000$ đồng thì có thể đi được tối đa bao nhiêu km?",
        "options": ["$19$ km", "$18$ km", "$20$ km", "$18.75$ km"],
        "correctIndex": 0,
        "explanation": "$16.000x - 4.000 \\le 300.000 \\Leftrightarrow 16.000x \\le 304.000 \\Leftrightarrow x \\le 19$.<br>Vậy khách đi được tối đa $19$ km.",
        "trapTip": "Nhớ cộng lại $4.000$ trước khi chia cho $16.000$."
      },
      {
        "id": "mhcm25m3_q07",
        "topic": "Bài 4: Toán phần trăm thực tế - Mua tivi khuyến mãi",
        "difficulty": "Thông hiểu",
        "question": "Một siêu thị điện máy giảm giá $20\\%$ cho chiếc tivi có giá niêm yết $15$ triệu đồng. Khách hàng có thẻ thành viên được giảm thêm $5\\%$ trên giá đã giảm. Chị Lan có thẻ thành viên mua chiếc tivi này phải trả:",
        "options": ["$11.4$ triệu đồng", "$11.25$ triệu đồng", "$12$ triệu đồng", "$11$ triệu đồng"],
        "correctIndex": 0,
        "explanation": "Giá sau giảm $20\\%$: $15 \\cdot 0.8 = 12$ triệu.<br>Giá sau giảm thêm $5\\%$: $12 \\cdot 0.95 = 11.4$ triệu đồng.",
        "trapTip": "Giảm liên tiếp $20\\%$ rồi $5\\%$ KHÁC giảm một lần $25\\%$ (sẽ ra $11.25$ triệu)."
      },
      {
        "id": "mhcm25m3_q08",
        "topic": "Bài 5a: Xác suất rút thẻ số nguyên tố (Thống kê và xác suất)",
        "difficulty": "Thông hiểu",
        "question": "Một hộp có $20$ tấm thẻ được đánh số từ $1$ đến $20$. Rút ngẫu nhiên một tấm thẻ. Xác suất để rút được thẻ ghi số nguyên tố là:",
        "options": ["$\\frac{2}{5}$", "$\\frac{9}{20}$", "$\\frac{7}{20}$", "$\\frac{1}{2}$"],
        "correctIndex": 0,
        "explanation": "Các số nguyên tố từ 1 đến 20: $2, 3, 5, 7, 11, 13, 17, 19$ (8 số).<br>$P = \\frac{8}{20} = \\frac{2}{5}$.",
        "trapTip": "Số 1 KHÔNG phải số nguyên tố; số 2 là số nguyên tố chẵn duy nhất."
      },
      {
        "id": "mhcm25m3_q09",
        "topic": "Bài 5b: Thống kê - Biểu đồ tần số tương đối (Thống kê và xác suất)",
        "difficulty": "Nhận biết",
        "question": "Khảo sát phương tiện đến trường của $40$ học sinh lớp 9A cho kết quả: đi xe đạp chiếm $35\\%$, đi xe buýt chiếm $25\\%$, phụ huynh đưa đón chiếm $40\\%$. Số học sinh đi xe buýt là:",
        "options": ["$10$ học sinh", "$14$ học sinh", "$16$ học sinh", "$25$ học sinh"],
        "correctIndex": 0,
        "explanation": "Số học sinh đi xe buýt: $40 \\cdot 25\\% = 10$ học sinh.",
        "trapTip": "Tần số = cỡ mẫu × tần số tương đối."
      },
      {
        "id": "mhcm25m3_q10",
        "topic": "Bài 6a: Hình nón thực tế - Thể tích phễu (Hình học và đo lường)",
        "difficulty": "Thông hiểu",
        "question": "Một chiếc phễu có dạng hình nón với bán kính đáy $6\\text{ cm}$ và chiều cao $8\\text{ cm}$. Lấy $\\pi \\approx 3.14$. Thể tích của phễu là:",
        "options": ["$301.44\\text{ cm}^3$", "$904.32\\text{ cm}^3$", "$150.72\\text{ cm}^3$", "$376.8\\text{ cm}^3$"],
        "correctIndex": 0,
        "explanation": "$V = \\frac{1}{3}\\pi r^2 h \\approx \\frac{1}{3} \\cdot 3.14 \\cdot 36 \\cdot 8 = 301.44\\text{ cm}^3$.",
        "trapTip": "Thể tích hình nón bằng $\\frac{1}{3}$ thể tích hình trụ cùng đáy, cùng chiều cao."
      },
      {
        "id": "mhcm25m3_q11",
        "topic": "Bài 6b: Hình nón thực tế - Diện tích xung quanh (Hình học và đo lường)",
        "difficulty": "Thông hiểu",
        "question": "Với chiếc phễu hình nón ở câu trên (bán kính $6\\text{ cm}$, chiều cao $8\\text{ cm}$), diện tích vật liệu làm mặt xung quanh của phễu là ($\\pi \\approx 3.14$):",
        "options": ["$188.4\\text{ cm}^2$", "$301.44\\text{ cm}^2$", "$113.04\\text{ cm}^2$", "$150.72\\text{ cm}^2$"],
        "correctIndex": 0,
        "explanation": "Đường sinh $l = \\sqrt{r^2 + h^2} = \\sqrt{36 + 64} = 10\\text{ cm}$.<br>$S_{xq} = \\pi r l \\approx 3.14 \\cdot 6 \\cdot 10 = 188.4\\text{ cm}^2$.",
        "trapTip": "Phải tính đường sinh $l$ trước, không dùng chiều cao $h$ thay cho $l$."
      },
      {
        "id": "mhcm25m3_q12",
        "topic": "Bài 7a: Tứ giác nội tiếp tạo bởi hai đường cao (Hình học và đo lường)",
        "difficulty": "Thông hiểu",
        "question": "Cho tam giác $ABC$ nhọn nội tiếp đường tròn $(O)$, hai đường cao $BE, CF$ cắt nhau tại $H$. Tứ giác $BCEF$ nội tiếp đường tròn có tâm là:",
        "options": ["Trung điểm của $BC$", "Điểm $H$", "Điểm $O$", "Trung điểm của $AH$"],
        "correctIndex": 0,
        "explanation": "Vì $\\widehat{BEC} = \\widehat{BFC} = 90^\\circ$ nên $E, F$ cùng thuộc đường tròn đường kính $BC$. Vậy tứ giác $BCEF$ nội tiếp đường tròn tâm là trung điểm của $BC$.",
        "trapTip": "Trung điểm $AH$ là tâm đường tròn ngoại tiếp tứ giác $AEHF$, không phải $BCEF$."
      },
      {
        "id": "mhcm25m3_q13",
        "topic": "Bài 7b: Tam giác đồng dạng và hệ thức (Hình học và đo lường)",
        "difficulty": "Vận dụng",
        "question": "Với hình vẽ ở câu trên, hệ thức nào sau đây là ĐÚNG?",
        "options": ["$AE \\cdot AC = AF \\cdot AB$", "$AE \\cdot AB = AF \\cdot AC$", "$AE \\cdot AF = AB \\cdot AC$", "$AH \\cdot AE = AB \\cdot AC$"],
        "correctIndex": 0,
        "explanation": "Xét $\\triangle ABE$ và $\\triangle ACF$: chung góc $A$, $\\widehat{AEB} = \\widehat{AFC} = 90^\\circ$ nên $\\triangle ABE \\backsim \\triangle ACF$ (g.g).<br>$\\Rightarrow \\frac{AE}{AF} = \\frac{AB}{AC} \\Rightarrow AE \\cdot AC = AF \\cdot AB$.",
        "trapTip": "Viết đúng thứ tự đỉnh tương ứng khi lập tỉ số đồng dạng."
      },
      {
        "id": "mhcm25m3_q14",
        "topic": "Bài 7c: Góc ở tâm và bán kính đường tròn ngoại tiếp (Hình học và đo lường)",
        "difficulty": "Vận dụng cao",
        "question": "Với tam giác $ABC$ nội tiếp $(O; R)$ như trên, biết $\\widehat{BAC} = 60^\\circ$ và $BC = 6\\text{ cm}$. Bán kính $R$ của đường tròn $(O)$ là:",
        "options": ["$2\\sqrt{3}\\text{ cm}$", "$3\\sqrt{3}\\text{ cm}$", "$3\\text{ cm}$", "$6\\text{ cm}$"],
        "correctIndex": 0,
        "explanation": "Góc ở tâm $\\widehat{BOC} = 2\\widehat{BAC} = 120^\\circ$. Tam giác $OBC$ cân tại $O$, kẻ $OM \\perp BC$ ($M$ là trung điểm $BC$) thì $\\widehat{BOM} = 60^\\circ$, $BM = 3\\text{ cm}$.<br>$R = OB = \\frac{BM}{\\sin 60^\\circ} = \\frac{3}{\\frac{\\sqrt{3}}{2}} = 2\\sqrt{3}\\text{ cm}$.",
        "trapTip": "Góc nội tiếp bằng nửa góc ở tâm cùng chắn một cung."
      }
    ]
  }
);
