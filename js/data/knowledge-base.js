// =========================================================
// EDUPASS 10 - TRUNG TÂM KIẾN THỨC & CẨM NANG DẠNG CÂU ĐỀ THI
// Chuẩn 100% Ma trận & Cấu trúc Đề thi Tuyển sinh Lớp 10 (GDPT 2018, TP.HCM, Hà Nội & Toàn Quốc)
// Phân tách biệt lập 3 môn: Toán Học, Tiếng Anh, Ngữ Văn theo đúng các DẠNG CÂU HỎI TRONG ĐỀ THI
// =========================================================

window.KNOWLEDGE_BASE = {
  // =======================================================
  // 1. MÔN TOÁN HỌC (MA TRẬN ĐỀ THI VÀO 10: 10 ĐIỂM - 120 PHÚT)
  // =======================================================
  math: {
    id: "math",
    name: "Toán Học",
    color: "#6366f1",
    accent: "#818cf8",
    icon: "calculator",
    badgeText: "📐 9 Dạng Đề Tuyển Sinh Vào 10",
    targetExam: "Tuyển Sinh Lớp 10 (Chuẩn GDPT 2018 & Đề Thi TP.HCM / Hà Nội)",
    examStructure: {
      totalScore: "10.0 điểm",
      duration: "120 phút",
      format: "Tự luận & Trắc nghiệm kết hợp tự luận theo GDPT 2018",
      matrix: [
        { name: "Số và Đại số", weight: "40% (4.0 điểm)", desc: "Parabol & Tương giao, Phương trình bậc hai Vi-ét, Căn thức bậc hai" },
        { name: "Hình học và Đo lường", weight: "45% (4.5 điểm)", desc: "Hình học phẳng đường tròn, Đo đạc góc nghiêng lượng giác, Hình không gian đời sống (Trụ - Nón - Cầu)" },
        { name: "Thống kê và Xác suất", weight: "15% (1.5 điểm)", desc: "Bảng tần số ghép nhóm, tần số tương đối %, xác suất thực nghiệm biến cố đời sống" },
        { name: "Cực trị & Bất đẳng thức", weight: "0.5 điểm", desc: "Câu hỏi phân loại điểm 9.5 - 10 (BĐT Cauchy, Bunhiacopxki)" }
      ]
    },
    questionTypes: [
      {
        id: "math_q1_parabol",
        typeCode: "Dạng 1",
        examPosition: "Câu 1 trong đề thi (1.5 điểm)",
        title: "Đồ thị Parabol (P) & Tương giao với Đường thẳng (d)",
        category: "Số và Đại số",
        level: "Nhận biết & Thông hiểu",
        targetScore: "1.5 điểm",
        summary: "Vẽ đồ thị parabol $y = ax^2$ và đường thẳng $y = mx + n$. Tìm tọa độ các giao điểm bằng phép tính đại số.",
        methods: [
          "Bước 1: Lập bảng giá trị Parabol $y = ax^2$ với ít nhất 5 điểm đối xứng qua trục tung $Oy$ ($x = -2, -1, 0, 1, 2$). Vẽ đường cong parabol đi qua 5 điểm đỉnh $O(0;0)$.",
          "Bước 2: Lập bảng giá trị đường thẳng $(d): y = mx + n$ với 2 điểm cắt trục tọa độ ($x = 0 \\implies y = n$; $y = 0 \\implies x = -n/m$).",
          "Bước 3: Lập phương trình hoành độ giao điểm của $(P)$ và $(d)$: $ax^2 = mx + n \\iff ax^2 - mx - n = 0$.",
          "Bước 4: Tính biệt thức $\\Delta$ (hoặc $\\Delta'$), giải tìm 2 nghiệm hoành độ $x_1, x_2$. Thay vào $(d)$ tìm $y_1, y_2$. Kết luận tọa độ giao điểm $A(x_1; y_1)$ và $B(x_2; y_2)$."
        ],
        formulas: [
          { name: "Phương trình hoành độ giao điểm", formula: "$$ax^2 = mx + n \\iff ax^2 - mx - n = 0$$" },
          { name: "Số giao điểm của (P) và (d)", formula: "$$\\Delta > 0: \\text{Cắt tại 2 điểm}; \\quad \\Delta = 0: \\text{Tiếp xúc}; \\quad \\Delta < 0: \\text{Không cắt nhau}$$" },
          { name: "Tọa độ tiếp điểm khi tiếp xúc", formula: "$$x_0 = -\\frac{b}{2a} = \\frac{m}{2a}; \\quad y_0 = ax_0^2$$" }
        ],
        examExample: {
          question: "Cho parabol $(P): y = \\frac{1}{2}x^2$ và đường thẳng $(d): y = x + 4$. Tìm tọa độ các giao điểm của $(P)$ và $(d)$ bằng phép tính.",
          solution: "Phương trình hoành độ giao điểm của $(P)$ và $(d)$:\n$$\\frac{1}{2}x^2 = x + 4 \\iff x^2 - 2x - 8 = 0$$\nTa có $\\Delta' = (-1)^2 - 1(-8) = 9 > 0 \\implies \\sqrt{\\Delta'} = 3$.\nPhương trình có 2 nghiệm phân biệt:\n$$x_1 = 1 + 3 = 4 \\implies y_1 = 4 + 4 = 8 \\implies A(4; 8)$$\n$$x_2 = 1 - 3 = -2 \\implies y_2 = -2 + 4 = 2 \\implies B(-2; 2)$$\nVậy $(P)$ và $(d)$ cắt nhau tại hai điểm phân biệt $A(4; 8)$ và $B(-2; 2)$.",
          note: "Chuẩn barem: 0.5đ lập phương trình hoành độ, 0.5đ giải ra x1, x2, 0.5đ tính ra y và kết luận tọa độ."
        },
        traps: [
          "BẪY TỌA ĐỘ: Chỉ giải ra nghiệm $x_1, x_2$ mà quên thay lại tìm $y_1, y_2$ và quên kết luận tọa độ cặp điểm $(x; y)$ -> Bị trừ ngay 0.25 - 0.5 điểm!",
          "BẪY VẼ ĐỒ THỊ: Vẽ parabol chỉ lấy 3 điểm (phải lấy đủ 5 điểm) hoặc vẽ đáy parabol bị nhọn như chữ V thay vì bo tròn tại đỉnh $O(0;0)$."
        ],
        flashcards: [
          {
            front: "Để tìm tọa độ giao điểm của Parabol $y = ax^2$ và đường thẳng $y = mx + n$, bước đầu tiên cần làm là gì?",
            back: "Lập phương trình hoành độ giao điểm: $ax^2 = mx + n \\iff ax^2 - mx - n = 0$."
          },
          {
            front: "Đường thẳng $(d)$ tiếp xúc với Parabol $(P)$ khi nào và tọa độ tiếp điểm tính ra sao?",
            back: "Khi phương trình hoành độ giao điểm có nghiệm kép (tức $\\Delta = 0$). Nghiệm kép $x_0 = -\\frac{b}{2a}$, thay $x_0$ vào tìm $y_0$."
          },
          {
            front: "Parabol $y = ax^2$ với $a < 0$ nằm ở phía nào của trục hoành $Ox$ và có điểm cao nhất là điểm nào?",
            back: "Nằm phía dưới trục hoành $Ox$, nhận đỉnh $O(0;0)$ làm điểm cao nhất (giá trị lớn nhất $y = 0$ khi $x = 0$)."
          }
        ]
      },
      {
        id: "math_q2_viet",
        typeCode: "Dạng 2",
        examPosition: "Câu 2 trong đề thi (1.0 - 1.5 điểm)",
        title: "Phương trình bậc hai & Định lý Vi-ét (Biểu thức đối xứng & Dấu nghiệm)",
        category: "Số và Đại số",
        level: "Thông hiểu & Vận dụng",
        targetScore: "1.5 điểm",
        summary: "Ứng dụng định lý Vi-ét tính giá trị biểu thức đối xứng của nghiệm, tìm tham số m để phương trình có 2 nghiệm thỏa mãn điều kiện.",
        methods: [
          "Bước 1: BẮT BUỘC tìm điều kiện để phương trình có 2 nghiệm: $a \\ne 0$ và $\\Delta \\ge 0$ (hoặc $\\Delta > 0$ nếu đề yêu cầu 2 nghiệm phân biệt).",
          "Bước 2: Áp dụng định lý Vi-ét: $S = x_1 + x_2 = -b/a$ và $P = x_1 x_2 = c/a$.",
          "Bước 3: Biến đổi biểu thức bài toán cho về dạng chỉ chứa tổng $S$ và tích $P$.",
          "Bước 4: Thay $S$ và $P$ vào giải tìm giá trị hoặc tham số $m$. Bắt buộc đối chiếu với điều kiện $\\Delta$ ở Bước 1!"
        ],
        formulas: [
          { name: "Định lý Vi-ét", formula: "$$S = x_1 + x_2 = -\\frac{b}{a}; \\quad P = x_1 x_2 = \\frac{c}{a}$$" },
          { name: "Các hệ thức đối xứng quen thuộc", formula: "$$x_1^2 + x_2^2 = S^2 - 2P; \\quad (x_1 - x_2)^2 = S^2 - 4P; \\quad x_1^3 + x_2^3 = S(S^2 - 3P)$$" },
          { name: "Điều kiện 2 nghiệm trái dấu", formula: "$$a \\cdot c < 0 \\quad (\\text{Khi } ac < 0 \\implies \\Delta > 0 \\text{ luôn đúng, không cần tính } \\Delta)$$" },
          { name: "Điều kiện 2 nghiệm cùng dương", formula: "$$\\Delta \\ge 0; \\quad S = -b/a > 0; \\quad P = c/a > 0$$" }
        ],
        examExample: {
          question: "Cho phương trình $x^2 - 2(m-1)x + 2m - 5 = 0$. Tìm $m$ để phương trình có 2 nghiệm phân biệt $x_1, x_2$ thỏa mãn: $x_1^2 + x_2^2 = 10$.",
          solution: "Ta có $\\Delta' = [-(m-1)]^2 - (2m - 5) = m^2 - 2m + 1 - 2m + 5 = m^2 - 4m + 6 = (m-2)^2 + 2 > 0, \\forall m$.\nVậy phương trình luôn có 2 nghiệm phân biệt với mọi $m$.\nTheo định lý Vi-ét: $x_1 + x_2 = 2(m-1); \\quad x_1 x_2 = 2m - 5$.\nBiến đổi: $x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2 = 10$\n$$\\iff [2(m-1)]^2 - 2(2m - 5) = 10 \\iff 4(m^2 - 2m + 1) - 4m + 10 = 10$$\n$$\\iff 4m^2 - 12m + 4 = 0 \\iff m^2 - 3m + 1 = 0 \\iff m = \\frac{3 \\pm \\sqrt{5}}{2}$$.\nĐối chiếu điều kiện: Thỏa mãn với mọi $m$.",
          note: "Lưu ý bước chứng minh $\\Delta' > 0$ với mọi $m$ chiếm 0.25 - 0.5 điểm!"
        },
        traps: [
          "BẪY QUÊN XÉT $\\Delta$: Nhảy vào dùng Vi-ét ngay mà không tìm điều kiện $\\Delta \\ge 0$ hoặc hệ số $a \\ne 0$ -> Mất toàn bộ điểm của bài!",
          "BẪY DẤU TRỪ TRONG TỔNG VI-ÉT: Nhầm $S = b/a$ thay vì $S = -b/a$."
        ],
        flashcards: [
          {
            front: "Phương trình bậc hai $ax^2 + bx + c = 0$ có 2 nghiệm trái dấu khi nào?",
            back: "Khi và chỉ khi tích $ac < 0$ (tích $a$ và $c$ trái dấu, khi đó $\\Delta = b^2 - 4ac > 0$ luôn được đảm bảo)."
          },
          {
            front: "Công thức biến đổi biểu thức $|x_1 - x_2|$ về $S$ và $P$ là gì?",
            back: "$|x_1 - x_2| = \\sqrt{(x_1 - x_2)^2} = \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2} = \\sqrt{S^2 - 4P}$."
          },
          {
            front: "Trước khi áp dụng định lý Vi-ét cho phương trình $ax^2 + bx + c = 0$, điều kiện bắt buộc là gì?",
            back: "Bắt buộc có điều kiện phương trình có nghiệm: $a \\ne 0$ và $\\Delta \\ge 0$ (hoặc $\\Delta' \\ge 0$)."
          }
        ]
      },
      {
        id: "math_q3_canthuc",
        typeCode: "Dạng 3",
        examPosition: "Bài I trong đề thi (1.5 - 2.0 điểm)",
        title: "Căn thức bậc hai & Rút gọn biểu thức đại số",
        category: "Số và Đại số",
        level: "Nhận biết & Thông hiểu & Vận dụng",
        targetScore: "2.0 điểm",
        summary: "Tìm ĐKXĐ, rút gọn phân thức chứa căn bậc hai. Giải các câu hỏi phụ: tìm x nguyên để P nhận giá trị nguyên, so sánh P với số, giải bất phương trình.",
        methods: [
          "Bước 1: Tìm ĐKXĐ (biểu thức dưới căn $\\ge 0$, mẫu thức $\\ne 0$).",
          "Bước 2: Phân tích tử và mẫu thành nhân tử bằng hằng đẳng thức (như $x - 1 = (\\sqrt{x}-1)(\\sqrt{x}+1)$; $x - 4 = (\\sqrt{x}-2)(\\sqrt{x}+2)$).",
          "Bước 3: Quy đồng mẫu thức chung, rút gọn tử số và chia cho phân thức nếu có.",
          "Bước 4: Giải câu hỏi phụ (Để $P \\in \\mathbb{Z} \\implies$ tách phần nguyên, cho mẫu là ước của hằng số). Đối chiếu ĐKXĐ và kết luận."
        ],
        formulas: [
          { name: "Hằng đẳng thức căn", formula: "$$\\sqrt{A^2} = |A| = \\begin{cases} A & \\text{khi } A \\ge 0 \\\\ -A & \\text{khi } A < 0 \\end{cases}$$" },
          { name: "Trục căn thức ở mẫu", formula: "$$\\frac{m}{\\sqrt{A} \\pm \\sqrt{B}} = \\frac{m(\\sqrt{A} \\mp \\sqrt{B})}{A - B}$$" },
          { name: "Phân tích nhân tử căn thức", formula: "$$x - a = (\\sqrt{x} - \\sqrt{a})(\\sqrt{x} + \\sqrt{a}) \\quad (x \\ge 0, a > 0)$$" }
        ],
        examExample: {
          question: "Cho biểu thức $A = \\frac{3\\sqrt{x}+1}{x-1} - \\frac{2}{\\sqrt{x}-1}$ với $x \\ge 0, x \\ne 1$. Rút gọn $A$ và tìm $x$ để $A = \\frac{1}{3}$.",
          solution: "Ta có $x - 1 = (\\sqrt{x}-1)(\\sqrt{x}+1)$. Quy đồng mẫu thức chung:\n$$A = \\frac{3\\sqrt{x}+1 - 2(\\sqrt{x}+1)}{(\\sqrt{x}-1)(\\sqrt{x}+1)} = \\frac{3\\sqrt{x}+1 - 2\\sqrt{x}-2}{(\\sqrt{x}-1)(\\sqrt{x}+1)} = \\frac{\\sqrt{x}-1}{(\\sqrt{x}-1)(\\sqrt{x}+1)} = \\frac{1}{\\sqrt{x}+1}$$\nĐể $A = \\frac{1}{3} \\iff \\frac{1}{\\sqrt{x}+1} = \\frac{1}{3} \\iff \\sqrt{x}+1 = 3 \\iff \\sqrt{x} = 2 \\iff x = 4$.\nĐối chiếu ĐKXĐ ($x \\ge 0, x \\ne 1$): $x = 4$ thỏa mãn. Vậy $x = 4$.",
          note: "Câu rút gọn biểu thức luôn yêu cầu đối chiếu nghiệm với ĐKXĐ ban đầu."
        },
        traps: [
          "BẪY ĐKXĐ: Quên tìm ĐKXĐ ngay từ dòng đầu tiên hoặc quên kiểm tra nghiệm sau khi giải xong x.",
          "BẪY PHÁ NGOẶC ĐỔI DẤU: Trước phân thức có dấu trừ '$-$' khi quy đồng quên đổi dấu các hạng tử trên tử số."
        ],
        flashcards: [
          {
            front: "Rút gọn biểu thức $\\sqrt{(2 - \\sqrt{5})^2}$ bằng bao nhiêu?",
            back: "$|2 - \\sqrt{5}| = \\sqrt{5} - 2$ (Vì $2 = \\sqrt{4} < \\sqrt{5}$, biểu thức âm nên phải đảo dấu để đảm bảo giá trị dương)."
          },
          {
            front: "Điều kiện xác định của biểu thức $\\frac{1}{\\sqrt{x - 3}}$ là gì?",
            back: "$x - 3 > 0 \\iff x > 3$ (Vì căn nằm ở mẫu nên bắt buộc mẫu phải lớn hơn 0 tuyệt đối, không lấy dấu bằng)."
          },
          {
            front: "Phương pháp chuẩn giải dạng bài 'Tìm x nguyên để biểu thức P nhận giá trị nguyên' là gì?",
            back: "Tách $P = \\text{phần nguyên} + \\frac{k}{\\text{mẫu thức}}$. Cho mẫu thức là ước nguyên của $k$, giải tìm x rồi đối chiếu ĐKXĐ."
          }
        ]
      },
      {
        id: "math_q4_hpt_thucte",
        typeCode: "Dạng 4",
        examPosition: "Bài II.1 trong đề thi (1.5 - 2.0 điểm)",
        title: "Giải bài toán bằng cách lập hệ phương trình / phương trình",
        category: "Số và Đại số",
        level: "Thông hiểu & Vận dụng",
        targetScore: "2.0 điểm",
        summary: "Toán chuyển động (quãng đường - vận tốc - thời gian), toán năng suất làm chung làm riêng, toán phần trăm nồng độ dung dịch.",
        methods: [
          "Bước 1: Chọn 1 hoặc 2 ẩn số, ghi rõ đơn vị và điều kiện hợp lý của ẩn ($x, y > 0$, $x \\in \\mathbb{N}^*$...).",
          "Bước 2: Lập bảng phân tích 3 đại lượng (ví dụ: $S = v \\cdot t$; Khối lượng công việc = Năng suất $\\times$ Thời gian).",
          "Bước 3: Biểu diễn các đại lượng chưa biết theo ẩn và lập 2 phương trình (hoặc 1 phương trình).",
          "Bước 4: Giải hệ phương trình bằng phương pháp thế hoặc cộng đại số. Đối chiếu điều kiện và kết luận có lời văn rõ ràng."
        ],
        formulas: [
          { name: "Toán chuyển động", formula: "$$S = v \\cdot t; \\quad t = \\frac{S}{v}; \\quad v_{\\text{xuôi}} = v_{\\text{thực}} + v_{\\text{nước}}; \\quad v_{\\text{ngược}} = v_{\\text{thực}} - v_{\\text{nước}}$$" },
          { name: "Toán làm chung - làm riêng", formula: "$$\\text{Cả 2 tổ làm chung } x \\text{ ngày } \\implies 1 \\text{ ngày làm } \\frac{1}{x} \\text{ công việc}$$" },
          { name: "Toán nồng độ", formula: "$$C\\% = \\frac{m_{\\text{chất tan}}}{m_{\\text{dung dịch}}} \\times 100\\%$$" }
        ],
        examExample: {
          question: "Hai tổ công nhân cùng làm chung một đoạn hầm metro thì trong 12 ngày sẽ hoàn thành. Nếu tổ I làm trong 4 ngày rồi tổ II làm tiếp trong 10 ngày nữa thì hoàn thành được 7/10 công việc. Hỏi nếu làm riêng thì mỗi tổ hoàn thành công việc trong bao lâu?",
          solution: "Gọi thời gian tổ I làm một mình xong công việc là $x$ (ngày), tổ II là $y$ (ngày) ($x, y > 12$).\nTrong 1 ngày tổ I làm được $\\frac{1}{x}$ (công việc), tổ II làm được $\\frac{1}{y}$ (công việc).\nHai tổ làm chung 12 ngày xong nên: $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{12}$ (1)\nTổ I làm 4 ngày và tổ II làm 10 ngày được 7/10 công việc: $\\frac{4}{x} + \\frac{10}{y} = \\frac{7}{10}$ (2)\nĐặt $u = 1/x, v = 1/y$, hệ trở thành:\n$$\\begin{cases} u + v = \\frac{1}{12} \\\\ 4u + 10v = \\frac{7}{10} \\end{cases} \\iff \\begin{cases} u = \\frac{1}{45} \\\\ v = \\frac{11}{300} \\end{cases} \\implies \\begin{cases} x = 45 \\\\ y = \\frac{300}{11} \\approx 27.3 \\end{cases}$$\nVậy tổ I làm riêng mất 45 ngày; tổ II làm riêng mất khoảng 27 ngày.",
          note: "Nhớ ghi rõ điều kiện của ẩn và đối chiếu ở bước kết luận."
        },
        traps: [
          "BẪY ĐƠN VỊ THỜI GIAN: Đề cho phút phải đổi ra giờ (ví dụ: 15 phút = 1/4 giờ, 45 phút = 3/4 giờ) trước khi lập phương trình.",
          "BẪY NƯỚC CHẢY: Quên cộng/trừ vận tốc dòng nước khi ca nô đi xuôi dòng / ngược dòng."
        ],
        flashcards: [
          {
            front: "Khi ca nô đi xuôi dòng nước, vận tốc thực tế của ca nô tính như thế nào?",
            back: "$v_{\\text{xuôi}} = v_{\\text{riêng}} + v_{\\text{nước}}$ (Vận tốc xuôi bằng vận tốc riêng của ca nô cộng với vận tốc dòng nước)."
          },
          {
            front: "Nếu một vòi nước chảy một mình mất 6 giờ thì đầy bể, vậy trong 1 giờ vòi đó chảy được bao nhiêu phần của bể?",
            back: "Trong 1 giờ vòi đó chảy được $\\frac{1}{6}$ dung tích của bể."
          }
        ]
      },
      {
        id: "math_q5_toanthucte_doisong",
        typeCode: "Dạng 5",
        examPosition: "Câu 4, 5, 6 trong đề thi (2.0 - 2.5 điểm)",
        title: "Toán thực tế Đời sống & Kinh tế xã hội (Chuẩn GDPT 2018)",
        category: "Số và Đại số & Đời sống",
        level: "Thông hiểu & Vận dụng",
        targetScore: "2.5 điểm",
        summary: "Bảo bối thực chiến chiếm tỷ trọng điểm cao nhất trong đề thi hiện nay: Giảm giá kép %, Hóa đơn tiền điện sinh hoạt bậc thang EVN, Hóa đơn nước Sawaco, Nồng độ pha chế cồn y tế / muối sinh lý.",
        methods: [
          "1. Bài toán Giảm giá kép: Tính giá sau lần 1: $G_1 = G_0 \\times (1 - %_1)$. Tính giá sau lần 2 trên giá $G_1$: $G_2 = G_1 \\times (1 - %_2)$. TUYỆT ĐỐI KHÔNG CỘNG HAI MỨC PHẦN TRĂM!",
          "2. Bài toán Tiền điện nước bậc thang: Chia sản lượng thành từng khoảng định mức theo bậc. Nhân số đơn vị mỗi bậc với đơn giá bậc đó, cộng lại rồi nhân thêm thuế VAT (8% hoặc 10%).",
          "3. Bài toán Pha chế nồng độ: Bảo toàn lượng cồn nguyên chất hoặc chất tan: $V_1 \\cdot C_1\\% = V_2 \\cdot C_2\\%$.",
          "4. Bài toán Lãi suất gửi tiết kiệm: Sau 1 năm nhận: $T = G_0 \\times (1 + r)$. Sau 2 năm lãi kép: $T = G_0 \\times (1 + r)^2$."
        ],
        formulas: [
          { name: "Giảm giá kép", formula: "$$G_2 = G_{\\text{gốc}} \\times (1 - %_1) \\times (1 - %_2) \\quad (\\text{Không cộng } %_1 + %_2!)$$" },
          { name: "Hóa đơn điện bậc thang", formula: "$$\\text{Tổng} = (\\text{Bậc 1} + \\text{Bậc 2} + \\dots + \\text{Bậc n}) \\times (1 + \\text{VAT})$$" },
          { name: "Bảo toàn cồn nguyên chất", formula: "$$V_{90^\\circ} \\times 90\\% = V_{70^\\circ} \\times 70\\%$$" }
        ],
        examExample: {
          question: "Một chiếc áo khoác có giá niêm yết 600.000 đồng. Nhân dịp Black Friday, cửa hàng giảm giá 20%. Bạn Lan có thẻ khách hàng thân thiết nên được giảm thêm 10% trên GIÁ ĐÃ GIẢM. Hỏi bạn Lan phải trả bao nhiêu tiền?",
          solution: "Giá của chiếc áo sau đợt giảm giá đầu tiên là:\n$$600.000 \\times (1 - 0.20) = 480.000 \\text{ (đồng)}$$\nSố tiền bạn Lan phải thanh toán sau khi được giảm thêm 10% trên giá đã giảm là:\n$$480.000 \\times (1 - 0.10) = 432.000 \\text{ (đồng)}$$\n(Lưu ý: Nếu lấy $20\\% + 10\\% = 30\\%$ sẽ ra $420.000$ đồng là SAI).",
          note: "Đề thi hay bẫy việc cộng dồn % giảm giá."
        },
        traps: [
          "BẪY CỘNG DỒN % GIẢM GIÁ: Lấy 20% + 10% = 30% -> Mất trọn điểm câu thực tế!",
          "BẪY THUẾ VAT: Đề bài yêu cầu số tiền đã gồm thuế VAT, quên nhân $(1 + 0.08)$ hoặc $(1 + 0.10)$."
        ],
        flashcards: [
          {
            front: "Tại sao không được cộng gộp 2 mức giảm giá 10% và 5% thành 15%?",
            back: "Vì đợt giảm giá thứ hai được tính trên GIÁ ĐÃ ĐƯỢC GIẢM của đợt 1, chứ không phải giá niêm yết ban đầu. Công thức đúng: Giá gốc $\\times (1 - 0.10) \\times (1 - 0.05)$."
          },
          {
            front: "Để pha $500\\text{ ml}$ cồn $70^\\circ$ từ cồn $90^\\circ$, công thức bảo toàn thể tích cồn nguyên chất là gì?",
            back: "$V_{90} \\times 90\\% = 500 \\times 70\\% \\implies V_{90} = \\frac{500 \\times 70}{90} \\approx 388.9\\text{ ml}$."
          }
        ]
      },
      {
        id: "math_q6_hinhkhonggian_luonggiac",
        typeCode: "Dạng 6",
        examPosition: "Câu 4 hoặc 5 trong đề thi (1.0 - 1.5 điểm)",
        title: "Hình học không gian (Trụ - Nón - Cầu) & Đo đạc lượng giác",
        category: "Hình học và Đo lường",
        level: "Thông hiểu & Vận dụng",
        targetScore: "1.5 điểm",
        summary: "Tính diện tích xung quanh, thể tích vật thể đời sống (bồn nước hình trụ, nón lá, quả bóng cầu). Đo chiều cao tòa nhà, cột cờ bằng giác kế lượng giác.",
        methods: [
          "1. Lượng giác đo chiều cao: Dùng tam giác vuông có cạnh kề $d$ (khoảng cách) và góc nâng $\\alpha$. Chiều cao toàn phần $H = d \\cdot \\tan\\alpha + h_{\\text{giác kế}}$ (nhớ cộng chiều cao máy ngắm).",
          "2. Hình trụ: Xác định bán kính đáy $r$ (lưu ý đề cho đường kính $d$ phải chia đôi!), chiều cao $h$. Dùng $V = \\pi r^2 h$.",
          "3. Hình nón: Lưu ý quan hệ $l^2 = h^2 + r^2$ giữa đường sinh $l$, chiều cao $h$ và bán kính đáy $r$. Thể tích có hệ số $1/3$: $V = \\frac{1}{3}\\pi r^2 h$.",
          "4. Đổi đơn vị thể tích: $1\\text{ m}^3 = 1000\\text{ dm}^3 = 1000\\text{ lít}$; $1\\text{ lít} = 1\\text{ dm}^3 = 1000\\text{ cm}^3$."
        ],
        formulas: [
          { name: "Đo đạc lượng giác giác kế", formula: "$$H = d \\cdot \\tan\\alpha + h_{\\text{giác kế}} \\quad (\\text{Luôn cộng thêm chiều cao mắt ngắm } h)$$" },
          { name: "Hình trụ", formula: "$$S_{xq} = 2\\pi rh; \\quad V = \\pi r^2 h$$" },
          { name: "Hình nón", formula: "$$S_{xq} = \\pi rl; \\quad l^2 = h^2 + r^2; \\quad V = \\frac{1}{3}\\pi r^2 h$$" },
          { name: "Hình cầu", formula: "$$S = 4\\pi R^2; \\quad V = \\frac{4}{3}\\pi R^3$$" }
        ],
        examExample: {
          question: "Một giác kế đặt cách chân tháp Bitexco một khoảng $d = 120\\text{ m}$. Góc ngắm từ đỉnh giác kế lên đỉnh tháp là $60^\\circ$. Chiều cao từ mặt đất đến mắt ngắm của giác kế là $1.5\\text{ m}$. Tính chiều cao toàn phần của tháp (làm tròn đến mét).",
          solution: "Chiều cao từ mắt ngắm giác kế lên đỉnh tháp là:\n$$h_1 = d \\cdot \\tan 60^\\circ = 120 \\cdot \\sqrt{3} \\approx 120 \\cdot 1.732 = 207.85\\text{ (m)}$$\nChiều cao toàn phần của tháp Bitexco là:\n$$H = h_1 + h_{\\text{giác kế}} = 207.85 + 1.5 = 209.35\\text{ m} \\approx 209\\text{ (m)}$$\nVậy tháp cao khoảng $209\\text{ m}$.",
          note: "Nhớ lấy chiều cao toàn phần bằng cách cộng thêm 1.5m chiều cao giác kế."
        },
        traps: [
          "BẪY GIÁC KẾ: Tính ra $d \\cdot \\tan\\alpha$ rồi kết luận luôn, quên cộng chiều cao máy ngắm $1.5\\text{m}$!",
          "BẪY ĐƯỜNG KÍNH: Đề bài cho đường kính đáy $d = 40\\text{cm}$, học sinh lấy luôn $r = 40$ thay vì chia đôi $r = 20\\text{cm}$."
        ],
        flashcards: [
          {
            front: "Công thức tính thể tích hình nón có bán kính đáy r và chiều cao h là gì?",
            back: "$V = \\frac{1}{3}\\pi r^2 h$ (chú ý luôn có hệ số $1/3$)."
          },
          {
            front: "Mối liên hệ giữa đường sinh l, chiều cao h và bán kính đáy r của hình nón?",
            back: "Theo định lý Pythagore: $l^2 = h^2 + r^2 \\implies l = \\sqrt{h^2 + r^2}$."
          },
          {
            front: "$1\\text{ m}^3$ bằng bao nhiêu lít nước?",
            back: "$1\\text{ m}^3 = 1000\\text{ dm}^3 = 1000\\text{ lít}$ nước."
          }
        ]
      },
      {
        id: "math_q7_thongke_xacsuat",
        typeCode: "Dạng 7",
        examPosition: "Câu 3 trong đề thi (1.0 - 1.5 điểm)",
        title: "Thống kê & Xác suất thực nghiệm (15% Đề thi GDPT 2018)",
        category: "Thống kê và Xác suất",
        level: "Thông hiểu & Vận dụng",
        targetScore: "1.5 điểm",
        summary: "Bảng tần số và tần số tương đối ghép nhóm, đọc biểu đồ thực tế học sinh, xác suất thực nghiệm của biến cố trong đời sống.",
        methods: [
          "1. Tần số tương đối: Tỷ số giữa tần số của nhóm $m$ và cỡ mẫu $N$: $f = \\frac{m}{N} \\times 100\\%$. Tổng các tần số tương đối luôn bằng $100\\%$.",
          "2. Đọc khoảng ghép nhóm: Nhóm $[a; b)$ gồm các giá trị từ $a$ đến bé hơn $b$ (lấy giá trị $a$, không lấy giá trị $b$).",
          "3. Xác suất thực nghiệm biến cố $E$: $P(E) = \\frac{\\text{Số kết quả thuận lợi cho } E}{\\text{Tổng số lần thực nghiệm}} = \\frac{n(E)}{N}$."
        ],
        formulas: [
          { name: "Tần số tương đối", formula: "$$f_i = \\frac{m_i}{N} \\times 100\\% \\quad (\\sum f_i = 100\\%)$$" },
          { name: "Xác suất thực nghiệm biến cố", formula: "$$P(E) = \\frac{n(E)}{N} \\quad (0 \\le P(E) \\le 1)$$" }
        ],
        examExample: {
          question: "Khảo sát thời gian sử dụng phương tiện xanh của 500 học sinh THCS tại TP.HCM: Dưới 15 phút: 120 em; Từ 15 đến dưới 30 phút: 230 em; Từ 30 đến dưới 45 phút: 100 em; Từ 45 phút trở lên: 50 em. Tính tần số tương đối nhóm [15; 30) và xác suất chọn ngẫu nhiên 1 em đi từ 30 phút trở lên.",
          solution: "Tần số tương đối của nhóm [15; 30) phút là:\n$$f = \\frac{230}{500} \\times 100\\% = 46\\%$$\nSố học sinh đi từ 30 phút trở lên là: $100 + 50 = 150$ học sinh.\nXác suất thực nghiệm chọn trúng học sinh đi từ 30 phút trở lên là:\n$$P(E) = \\frac{150}{500} = 0.30 = 30\\%$$.",
          note: "Câu hỏi 15% chuẩn GDPT 2018 bắt buộc có trong mọi đề thi vào 10 mới."
        },
        traps: [
          "BẪY KHOẢNG MỞ/ĐÓNG: Nhầm lẫn giữa 'từ 30 phút trở lên' (cộng cả nhóm 30-45 và nhóm >=45) với việc chỉ lấy nhóm 30-45.",
          "BẪY CỠ MẪU: Đọc sót tổng số học sinh $N$ trong đề bài."
        ],
        flashcards: [
          {
            front: "Công thức tính tần số tương đối của một nhóm số liệu có tần số m trong mẫu kích thước N là gì?",
            back: "$f = \\frac{m}{N} \\times 100\\%$."
          },
          {
            front: "Nhóm số liệu $[20; 30)$ bao gồm những giá trị nào của x?",
            back: "Bao gồm các giá trị $x$ thỏa mãn: $20 \\le x < 30$ (lấy giá trị 20, không lấy giá trị 30)."
          }
        ]
      },
      {
        id: "math_q8_hinhphang_duongtron",
        typeCode: "Dạng 8",
        examPosition: "Bài Hình học lớn trong đề thi (3.0 - 3.5 điểm)",
        title: "Hình học phẳng - Đường tròn & Tứ giác nội tiếp",
        category: "Hình học và Đo lường",
        level: "Thông hiểu & Vận dụng & Vận dụng cao",
        targetScore: "3.0 điểm",
        summary: "Chiếm trọn 3.0 - 3.5 điểm trong mọi đề thi: 4 dấu hiệu vàng chứng minh tứ giác nội tiếp, góc với đường tròn, tiếp tuyến, cát tuyến, tam giác đồng dạng.",
        methods: [
          "Câu a (1.0đ): Chứng minh tứ giác nội tiếp bằng 1 trong 4 dấu hiệu vàng (phổ biến nhất là tổng 2 góc đối bằng $180^\\circ$ hoặc 2 đỉnh kề cùng nhìn một cạnh dưới góc bằng nhau).",
          "Câu b (1.0đ): Chứng minh hệ thức hình học ($MA^2 = MC \\cdot MD$ hoặc $AB \\cdot AC = AH \\cdot AD$) bằng cách đưa về hai tam giác đồng dạng có góc chung và góc tạo bởi tiếp tuyến - dây cung.",
          "Câu c (0.5 - 1.0đ): Chứng minh 3 điểm thẳng hàng, 3 đường đồng quy, song song hoặc tiếp tuyến chung. Thường dùng tính chất đường kính - dây cung, trực tâm hoặc góc nội tiếp bằng nhau."
        ],
        formulas: [
          { name: "Dấu hiệu 1: Tổng 2 góc đối bằng 180°", formula: "$$\\widehat{A} + \\widehat{C} = 180^\\circ \\implies ABCD \\text{ nội tiếp}$$" },
          { name: "Dấu hiệu 2: Hai đỉnh kề cùng nhìn một cạnh", formula: "$$\\widehat{DAC} = \\widehat{DBC} \\implies ABCD \\text{ nội tiếp}$$" },
          { name: "Hệ thức cát tuyến - tiếp tuyến", formula: "$$MA^2 = MC \\cdot MD = MO^2 - R^2 \\quad (MA \\text{ là tiếp tuyến})$$" },
          { name: "Góc tiếp tuyến và dây cung", formula: "$$\\widehat{MAB} = \\widehat{ACB} = \\frac{1}{2}\\text{sđ}\\overparen{AB}$$" }
        ],
        examExample: {
          question: "Từ điểm $M$ nằm ngoài đường tròn $(O; R)$, kẻ 2 tiếp tuyến $MA, MB$ ($A, B$ là tiếp điểm). Kẻ cát tuyến $MCD$ không qua tâm $O$ ($C$ nằm giữa $M$ và $D$). Chứng minh tứ giác $MAOB$ nội tiếp và $MA^2 = MC \\cdot MD$.",
          solution: "1. Xét tứ giác $MAOB$ có $\\widehat{MAO} = 90^\\circ$ (vì $MA$ là tiếp tuyến) và $\\widehat{MBO} = 90^\\circ$ (vì $MB$ là tiếp tuyến).\nSuy ra $\\widehat{MAO} + \\widehat{MBO} = 90^\\circ + 90^\\circ = 180^\\circ$.\nDo đó tứ giác $MAOB$ nội tiếp đường tròn đường kính $MO$.\n2. Xét $\\Delta MAC$ và $\\Delta MDA$ có:\n- Góc $\\widehat{M}$ chung\n- $\\widehat{MAC} = \\widehat{MDA}$ (góc tạo bởi tiếp tuyến và dây cung bằng góc nội tiếp cùng chắn cung $AC$).\nSuy ra $\\Delta MAC \\sim \\Delta MDA\\text{ (g-g)} \\implies \\frac{MA}{MD} = \\frac{MC}{MA} \\implies MA^2 = MC \\cdot MD$ (đpcm).",
          note: "Câu kinh điển ăn chắc 2.0 điểm phần hình học."
        },
        traps: [
          "BẪY HAI ĐỈNH KỀ: Dùng dấu hiệu 2 góc bằng nhau cùng nhìn 1 cạnh nhưng 2 đỉnh đó không kề nhau -> Bị gạch bài!",
          "BẪY THIẾU TÂM: Khi nói tứ giác nội tiếp đường tròn, nên chỉ rõ đường tròn đường kính nào để được điểm tuyệt đối."
        ],
        flashcards: [
          {
            front: "Góc nội tiếp chắn nửa đường tròn luôn có số đo bằng bao nhiêu độ?",
            back: "Luôn bằng $90^\\circ$ (góc vuông). Dữ kiện vàng để tìm tam giác vuông và tứ giác nội tiếp!"
          },
          {
            front: "Góc tạo bởi tia tiếp tuyến và dây cung có mối liên hệ gì với góc nội tiếp cùng chắn cung đó?",
            back: "Hai góc này BẰNG NHAU (cùng bằng một nửa số đo của cung bị chắn)."
          },
          {
            front: "Hai tiếp tuyến $MA$ và $MB$ cắt nhau tại $M$ thì $OM$ vuông góc với dây cung $AB$ tại đâu?",
            back: "Tại trung điểm của đoạn thẳng $AB$ ($OM$ là đường trung trực của đoạn thẳng $AB$)."
          }
        ]
      },
      {
        id: "math_q9_batdangthuc",
        typeCode: "Dạng 9",
        examPosition: "Câu cuối cùng trong đề thi (0.5 điểm)",
        title: "Bất đẳng thức Cauchy (AM-GM) & Cực trị đại số (Câu 10 điểm)",
        category: "Số và Đại số - Nâng cao",
        level: "Phân loại 9+ & Điểm 10",
        targetScore: "0.5 điểm",
        summary: "Câu hỏi phân loại học sinh giỏi: BĐT Cauchy cho 2 và 3 số dương, kỹ thuật chọn điểm rơi, thêm bớt hạng tử, BĐT Cauchy-Schwarz dạng Engel.",
        methods: [
          "Bước 1: Dự đoán điểm rơi đối xứng (thường là $a = b = c = 1$ hoặc $a = b = 1/2$).",
          "Bước 2: Áp dụng BĐT Cauchy dạng ghép cặp thích hợp để triệt tiêu mẫu số.",
          "Bước 3: Sử dụng BĐT phụ quen thuộc: $(a+b)^2 \\ge 4ab$; $\\frac{1}{a} + \\frac{1}{b} \\ge \\frac{4}{a+b}$.",
          "Bước 4: Chỉ ra dấu bằng xảy ra khi nào và kết luận giá trị nhỏ nhất / lớn nhất."
        ],
        formulas: [
          { name: "BĐT Cauchy cho 2 số dương", formula: "$$a + b \\ge 2\\sqrt{ab} \\quad (\\text{Dấu } = \\iff a = b)$$" },
          { name: "BĐT Cauchy-Schwarz dạng Engel", formula: "$$\\frac{x_1^2}{a_1} + \\frac{x_2^2}{a_2} \\ge \\frac{(x_1 + x_2)^2}{a_1 + a_2}$$" },
          { name: "BĐT phân thức cộng mẫu", formula: "$$\\frac{1}{a} + \\frac{1}{b} \\ge \\frac{4}{a + b} \\quad (a, b > 0)$$" }
        ],
        examExample: {
          question: "Cho $a, b > 0$ thỏa mãn $a + b \\le 1$. Tìm giá trị nhỏ nhất của biểu thức: $P = \\frac{1}{a^2 + b^2} + \\frac{1}{2ab}$.",
          solution: "Biến đổi: $P = \\frac{1}{a^2 + b^2} + \\frac{1}{2ab} = \\left(\\frac{1}{a^2 + b^2} + \\frac{1}{2ab}\\right) + \\frac{1}{2ab} - \\frac{1}{2ab}$\nÁp dụng BĐT $\\frac{1}{x} + \\frac{1}{y} \\ge \\frac{4}{x + y}$ với $x = a^2 + b^2, y = 2ab$:\n$$\\frac{1}{a^2 + b^2} + \\frac{1}{2ab} \\ge \\frac{4}{a^2 + b^2 + 2ab} = \\frac{4}{(a+b)^2} \\ge \\frac{4}{1^2} = 4$$\nMặt khác, vì $ab \\le \\frac{(a+b)^2}{4} \\le \\frac{1}{4} \\implies 2ab \\le \\frac{1}{2} \\implies \\frac{1}{2ab} \\ge 2$.\nDo đó $P = \\frac{1}{a^2+b^2} + \\frac{1}{2ab} \\ge 4$.\nDấu \"=\" xảy ra khi $a = b = 1/2$.\nVậy giá trị nhỏ nhất của $P$ là $4$.",
          note: "Kỹ thuật tách hạng tử để dùng điểm rơi $a = b = 1/2$."
        },
        traps: [
          "BẪY QUÊN DẤU BẰNG: Tìm ra min/max nhưng quên không chỉ ra dấu bằng xảy ra khi nào -> Bị trừ 0.25đ.",
          "BẪY NGƯỢC CHIỀU: Dùng BĐT Cauchy ở mẫu nhưng không đảo chiều bất đẳng thức dẫn đến kết quả sai."
        ],
        flashcards: [
          {
            front: "Bất đẳng thức Cauchy (AM-GM) cho 2 số dương a và b phát biểu như thế nào và dấu bằng xảy ra khi nào?",
            back: "$a + b \\ge 2\\sqrt{ab}$. Dấu bằng xảy ra khi và chỉ khi $a = b$."
          },
          {
            front: "Với hai số dương a và b, bất đẳng thức cộng mẫu thức là gì?",
            back: "$\\frac{1}{a} + \\frac{1}{b} \\ge \\frac{4}{a + b}$. Dấu bằng xảy ra khi $a = b$."
          }
        ]
      }
    ]
  },

  // =======================================================
  // 2. MÔN TIẾNG ANH (MA TRẬN ĐỀ THI VÀO 10: 40 CÂU - 90 PHÚT)
  // =======================================================
  english: {
    id: "english",
    name: "Tiếng Anh",
    color: "#0284c7",
    accent: "#38bdf8",
    icon: "languages",
    badgeText: "🔤 10 Dạng Câu Trắc Nghiệm & Tự Luận",
    targetExam: "Tuyển Sinh Lớp 10 (Chuẩn 4 Phần GDPT 2018 & Đề Thi TP.HCM / Hà Nội)",
    examStructure: {
      totalScore: "10.0 điểm (40 câu hỏi)",
      duration: "90 phút",
      format: "Trắc nghiệm khách quan kết hợp Tự luận (Word Form, Viết lại câu)",
      matrix: [
        { name: "Phonetics & Word Stress", weight: "4 câu (1.0 điểm)", desc: "Phát âm đuôi -ed, -s/es, nguyên âm ngắn/dài; Trọng âm từ 2 & 3 âm tiết" },
        { name: "Grammar & Vocabulary MCQ", weight: "12 câu (3.0 điểm)", desc: "5 thì trọng tâm, Câu điều kiện & Unless, Mệnh đề quan hệ, Cụm động từ & Collocations" },
        { name: "Communication & Real-life Signs", weight: "4 câu (1.0 điểm)", desc: "Giao tiếp xã hội đời sống; Đọc hiểu biển báo công cộng & nội quy thông báo" },
        { name: "Reading (Cloze Test & Comprehension)", weight: "10 câu (2.5 điểm)", desc: "Đọc điền từ vào đoạn văn (4 câu); Đọc hiểu văn bản trả lời câu hỏi (6 câu)" },
        { name: "Writing & Transformation", weight: "10 câu (2.5 điểm)", desc: "Biến đổi dạng từ Word Form (4 câu); Sắp xếp câu (2 câu); Viết lại câu tương đương (4 câu)" }
      ]
    },
    questionTypes: [
      {
        id: "eng_q1_pronunciation",
        typeCode: "Dạng 1",
        examPosition: "Câu 1 - 2 trong đề thi (0.5 điểm)",
        title: "Ngữ âm - Quy tắc Phát âm (-ed, -s/es & Nguyên âm/Phụ âm bẫy)",
        category: "Phonetics",
        level: "Nhận biết",
        targetScore: "0.5 điểm",
        summary: "Quy tắc thần chú phát âm đuôi -ed, đuôi -s/es, 7 ngoại lệ -ed đọc /ɪd/, cặp phụ âm /θ/ vs /ð/ và các nguyên âm đôi.",
        methods: [
          "1. Đuôi -ed: /ɪd/ sau âm /t, d/ (tiền đô) | /t/ sau âm vô thanh /p, k, f, s, ʃ, tʃ/ (thảo phải kính phật tổ) | /d/ sau các âm hữu thanh còn lại.",
          "2. 7 Ngoại lệ -ed đọc /ɪd/: naked, wicked, sacred, beloved, learned (adj), crooked, hatred (dù tận cùng là k, p... thì vẫn đọc /ɪd/!).",
          "3. Đuôi -s/es: /s/ sau /p, k, f, t, θ/ (thời phong kiến phương tây) | /ɪz/ sau /s, z, ʃ, tʃ, dʒ/ (sóng gió chẳng sợ zó) | /z/ sau các âm còn lại.",
          "4. Cặp /θ/ (thổi hơi vô thanh: think, thank, thin, tooth, breath) vs /ð/ (rung thanh quản hữu thanh: this, that, there, father, breathe)."
        ],
        formulas: [
          { name: "Thần chú đuôi -ed", formula: "/ɪd/: t, d | /t/: p, k, f, s, sh, ch | /d/: còn lại" },
          { name: "Thần chú đuôi -s/es", formula: "/s/: p, k, f, t, th | /ɪz/: s, ss, ch, sh, x, z, ge, ce | /z/: còn lại" },
          { name: "Ngoại lệ -ed kinh điển", formula: "naked, wicked, sacred, beloved, learned (tính từ) luôn đọc /ɪd/" }
        ],
        examExample: {
          question: "Choose the word whose underlined part is pronounced differently from the others:\nA. discovered\tB. announced\tC. looked\tD. watched",
          solution: "- discovered tận cùng bằng âm hữu thanh /r/ nên đuôi -ed phát âm là /d/.\n- announced (/s/), looked (/k/), watched (/tʃ/) đều tận cùng bằng âm vô thanh nên đuôi -ed phát âm là /t/.\n=> Đáp án đúng: A. discovered (/d/).",
          note: "Câu này chiếm 0.25đ mở đầu đề thi."
        },
        traps: [
          "BẪY NGOẠI LỆ: Gặp từ 'beloved' hay 'naked' vội vàng nhìn thấy chữ 'k' mà khoanh /t/ là SAI -> Luôn đọc /ɪd/!",
          "BẪY DANH TỪ vs ĐỘNG TỪ: 'breath' (danh từ hơi thở) kết thúc bằng /θ/, nhưng 'breathe' (động từ thở) kết thúc bằng /ð/."
        ],
        flashcards: [
          {
            front: "Đuôi '-ed' của hai từ 'naked' và 'beloved' phát âm là gì?",
            back: "Phát âm là /ɪd/ (Đây là 2 ngoại lệ kinh điển đề thi vào 10 rất hay ra để phân loại học sinh!)."
          },
          {
            front: "Phát âm đuôi '-s' trong từ 'cats', 'maps', 'books' là gì?",
            back: "Phát âm là /s/ vì đứng sau các phụ âm vô thanh /t/, /p/, /k/."
          },
          {
            front: "Âm 'th' trong từ 'think' và 'father' phát âm khác nhau như thế nào?",
            back: "'think' phát âm là /θ/ (âm vô thanh, thổi hơi); 'father' phát âm là /ð/ (âm hữu thanh, rung dây thanh quản)."
          }
        ]
      },
      {
        id: "eng_q2_stress",
        typeCode: "Dạng 2",
        examPosition: "Câu 3 - 4 trong đề thi (0.5 điểm)",
        title: "Ngữ âm - Trọng âm từ 2 & 3 âm tiết (Word Stress)",
        category: "Phonetics",
        level: "Thông hiểu",
        targetScore: "0.5 điểm",
        summary: "Quy tắc trọng âm từ 2 âm tiết (N/Adj âm 1, Verb âm 2), các ngoại lệ động từ -en, -er, -it, hậu tố kéo trọng âm (-tion, -ic, -ity) và hậu tố nhận trọng âm (-ee, -ese).",
        methods: [
          "1. Từ 2 âm tiết: Hầu hết Danh từ & Tính từ nhấn âm 1 ('table, 'happy, 'teacher). Hầu hết Động từ nhấn âm 2 (re'ceive, pro'vide, de'cide).",
          "2. Ngoại lệ động từ 2 âm tiết nhấn âm 1: 'listen, 'happen, 'enter, 'visit, 'finish, 'open, 'follow (đuôi -en, -er, -it, -ow).",
          "3. Hậu tố kéo trọng âm rơi vào âm tiết NGAY TRƯỚC NÓ: -tion, -sion, -ic, -ity, -ical, -ious, -logy (infor'mation, scien'tific, a'bility, de'licious).",
          "4. Hậu tố NHẬN CHÍNH TRỌNG ÂM: -ee, -eer, -ese, -ique (train'ee, engi'neer, Vietna'mese, u'nique)."
        ],
        formulas: [
          { name: "Danh từ & Tính từ 2 âm tiết", formula: "Trọng âm nhấn vào âm 1: 'doctor, 'pencil, 'famous" },
          { name: "Động từ 2 âm tiết", formula: "Trọng âm nhấn vào âm 2: com'plete, for'get, de'stroy" },
          { name: "Hậu tố kéo trọng âm về trước nó", formula: "-tion, -ic, -ity, -ious: pol'lution, 'comic, po'tential" }
        ],
        examExample: {
          question: "Choose the word that has a different stress pattern from the others:\nA. create\tB. protect\tC. machine\tD. future",
          solution: "- create (v), protect (v), machine (n đặc biệt) đều có trọng âm rơi vào âm tiết thứ 2.\n- future (n) có trọng âm rơi vào âm tiết thứ 1.\n=> Đáp án đúng: D. future (trọng âm 1).",
          note: "Học sinh hay nhầm từ 'machine' nhấn âm 1, thực tế machine nhấn âm 2: ma'chine."
        },
        traps: [
          "BẪY TỪ 2 LOẠI: 'record (n - âm 1) vs re'cord (v - âm 2); 'present (n - âm 1) vs pre'sent (v - âm 2).",
          "BẪY TIỀN TỐ PHỦ ĐỊNH: Tiền tố un-, im-, in-, dis- KHÔNG BAO GIỜ nhận trọng âm: un'happy, im'possible."
        ],
        flashcards: [
          {
            front: "Các từ có hậu tố '-tion' (pollution) và '-ic' (scientific) có trọng âm rơi vào đâu?",
            back: "Rơi vào âm tiết NGAY TRƯỚC nó: pol'lution (âm 2), scien'tific (âm 3)."
          },
          {
            front: "Các động từ 2 âm tiết 'listen', 'happen', 'visit' có trọng âm rơi vào âm mấy?",
            back: "Nhấn âm 1 (Đây là các ngoại lệ kinh điển của động từ 2 âm tiết có đuôi -en, -it!)."
          },
          {
            front: "Từ 'Vietnamese' và 'engineer' có trọng âm rơi vào âm mấy?",
            back: "Rơi vào chính âm tiết chứa đuôi -ese và -eer: Vietna'mese (âm 3), engi'neer (âm 3)."
          }
        ]
      },
      {
        id: "eng_q3_grammar_mcq",
        typeCode: "Dạng 3",
        examPosition: "Câu 5 - 14 trong đề thi (2.5 điểm)",
        title: "Ngữ pháp trắc nghiệm cốt lõi (5 Thì, Câu điều kiện, Wish, Mệnh đề quan hệ)",
        category: "Grammar",
        level: "Thông hiểu & Vận dụng",
        targetScore: "2.5 điểm",
        summary: "10 câu trắc nghiệm ăn điểm chắc chắn: Thì HTHT với since/for/already/yet, QKTD với when/while, Câu điều kiện loại 1-2 & Unless, Mệnh đề quan hệ Who/Whom/Which/Whose/That, Câu ước Wish.",
        methods: [
          "1. Thì Hiện tại hoàn thành: S + have/has + V3/ed. Dấu hiệu: since, for, already, yet, so far, up to now, recently, ever, never.",
          "2. Quy tắc SINCE: Mệnh đề trước chia HTHT + SINCE + Mệnh đề sau chia Quá khứ đơn (S + V2/ed).",
          "3. Quá khứ tiếp diễn với When/While: Hành động đang diễn ra chia was/were + V-ing, hành động cắt ngang chia V2/ed.",
          "4. Điều kiện loại 1: If + S + V(hiện tại), S + will/can + V-inf. Unless = If ... not.",
          "5. Điều kiện loại 2 & Wish: If + S + V2/were, S + would/could + V-inf. To be luôn chia WERE cho mọi ngôi.",
          "6. Mệnh đề quan hệ: WHO (người - S), WHOM (người - O), WHICH (vật), WHOSE + N (sở hữu), THAT (thay cho who/which trong MĐQH xác định; BẮT BUỘC dùng sau người + vật hoặc so sánh nhất)."
        ],
        formulas: [
          { name: "Phối hợp thì với SINCE", formula: "S + have/has + V3/ed + SINCE + S + V2/ed" },
          { name: "Unless = If ... not", formula: "Unless + S + V(khẳng định), S + will/won't + V = If + S + don't/doesn't + V..." },
          { name: "Điều kiện loại 2 (Giả định hiện tại)", formula: "If + S + were/V2, S + would/could + V-inf" },
          { name: "Câu ước ở hiện tại", formula: "S + wish(es) + S + V2/ed / were" }
        ],
        examExample: {
          question: "If you ________ hard, you won't pass the upcoming entrance examination.\nA. don't study\tB. study\tC. won't study\tD. studied",
          solution: "Vế chính có 'won't pass' (will not + V) là câu điều kiện loại 1. Vế If phải chia ở thì Hiện tại đơn mang nghĩa phù hợp: 'Nếu bạn không học chăm chỉ, bạn sẽ không đỗ'.\n=> Đáp án đúng: A. don't study.",
          note: "Chú ý nếu câu dùng 'Unless' thì đáp án sẽ là B. study (Unless you study = If you don't study)."
        },
        traps: [
          "BẪY UNLESS: Trong mệnh đề chứa 'Unless' TUYỆT ĐỐI KHÔNG dùng 'not' (vì Unless đã mang nghĩa phủ định)!",
          "BẪY ĐẠI TỪ THAT: 'That' KHÔNG BAO GIỜ đứng sau dấu phẩy (mệnh đề quan hệ không xác định) và KHÔNG BAO GIỜ đứng sau giới từ."
        ],
        flashcards: [
          {
            front: "Trong câu điều kiện loại 2, động từ 'to be' chia như thế nào cho các ngôi?",
            back: "Chia là 'were' cho TẤT CẢ các ngôi (If I were you, If he were rich...)."
          },
          {
            front: "Quy tắc phối hợp thì với liên từ SINCE là gì?",
            back: "Mệnh đề trước SINCE chia Hiện tại hoàn thành (have/has + V3); Mệnh đề sau SINCE chia Quá khứ đơn (V2/ed)."
          },
          {
            front: "Khi nào BẮT BUỘC dùng đại từ quan hệ 'THAT' thay vì 'who' hay 'which'?",
            back: "Khi danh từ đi trước bao gồm CẢ NGƯỜI VÀ VẬT (ví dụ: the man and his dog that...), hoặc sau tính từ ở cấp so sánh nhất."
          }
        ]
      },
      {
        id: "eng_q4_phrasal_collocation",
        typeCode: "Dạng 4",
        examPosition: "Câu 15 - 20 trong đề thi (1.5 điểm)",
        title: "Cụm động từ (Phrasal Verbs) & Cụm từ cố định (Collocations)",
        category: "Vocabulary",
        level: "Thông hiểu & Vận dụng",
        targetScore: "1.5 điểm",
        summary: "Top cụm động từ và collocations phân loại điểm 8 - 10: look after, look forward to + V-ing, turn down/off, put off vs call off, give up, make vs do collocations.",
        methods: [
          "1. Bộ cụm với LOOK: look after (chăm sóc = take care of), look for (tìm kiếm), look forward to + V-ing (háo hức mong đợi), look up (tra cứu từ điển).",
          "2. Bộ cụm với TURN: turn down (vặn nhỏ âm lượng / từ chối lời mời), turn on/off (bật/tắt thiết bị), turn up (đến, xuất hiện).",
          "3. Bộ cụm với GIVE, PUT & CALL: give up (từ bỏ), put off (hoãn lại = postpone), call off (hủy bỏ = cancel), put on (mặc áo, đeo kính).",
          "4. Phân biệt MAKE vs DO:\n- MAKE: make an effort (nỗ lực), make a mistake (phạm lỗi), make a decision (ra quyết định), make friends.\n- DO: do homework (làm BTVN), do housework (làm việc nhà), do research (nghiên cứu), do good/harm."
        ],
        formulas: [
          { name: "Cụm look forward to", formula: "look forward to + V-ing / Noun (Tuyệt đối không dùng V-nguyên thể!)" },
          { name: "Collocation với EFFORT & MISTAKE", formula: "make an effort to V; \\quad make a mistake" },
          { name: "Phân biệt Call off vs Put off", formula: "call off = cancel (hủy hoàn toàn); \\quad put off = delay / postpone (hoãn sang ngày khác)" }
        ],
        examExample: {
          question: "My brother is really looking forward to ________ his pen pal from Singapore this summer.\nA. meet\tB. meeting\tC. met\tD. to meet",
          solution: "Cấu trúc: 'look forward to + V-ing' (trông mong, mong đợi làm gì). Sau giới từ 'to' ở đây bắt buộc là V-ing.\n=> Đáp án đúng: B. meeting.",
          note: "Bẫy kinh điển: Thấy 'to' tưởng động từ nguyên mẫu."
        },
        traps: [
          "BẪY 'TO V': Sau 'look forward to' ĐỘNG TỪ BẮT BUỘC PHẢI LÀ V-ING: look forward to seeing you (không dùng see)!",
          "BẪY MAKE vs DO: 'make homework' là SAI -> phải là 'do homework'; 'do a mistake' là SAI -> phải là 'make a mistake'."
        ],
        flashcards: [
          {
            front: "'Look forward to' theo sau bởi dạng động từ nào?",
            back: "Bắt buộc theo sau bởi V-ING hoặc Danh từ (ví dụ: I look forward to hearing from you soon!)."
          },
          {
            front: "'Call off' khác với 'Put off' như thế nào?",
            back: "'Call off' = Cancel (Hủy bỏ hoàn toàn); 'Put off' = Postpone / Delay (Hoãn lại sang thời điểm khác)."
          },
          {
            front: "Điền Make hay Do: '________ an effort' và '________ homework'?",
            back: "'MAKE an effort' (nỗ lực) và 'DO homework' (làm bài tập về nhà)."
          }
        ]
      },
      {
        id: "eng_q5_communication",
        typeCode: "Dạng 5",
        examPosition: "Câu 21 - 22 trong đề thi (0.5 điểm)",
        title: "Giao tiếp xã hội đời sống (Everyday Communication)",
        category: "Communication",
        level: "Thông hiểu",
        targetScore: "0.5 điểm",
        summary: "Đáp lại lời khen ngợi, lời mời, lời đề nghị giúp đỡ, cảm ơn và xin lỗi theo đúng văn hóa giao tiếp chuẩn bản ngữ.",
        methods: [
          "1. Đáp lại lời khen ('Your presentation was great!'): 'Thank you. It’s very kind of you to say so' hoặc 'I’m glad you like it' (Không khiêm tốn phủ nhận như tiếng Việt).",
          "2. Đáp lại lời mời ('Would you like to join us for dinner?'): Đồng ý: 'Yes, I’d love to' / 'That sounds great'. Từ chối lịch sự: 'I’d love to, but I have to finish my homework'.",
          "3. Đáp lại lời đề nghị giúp đỡ ('Can I help you with those heavy bags?'): Đồng ý: 'Yes, please. That’s very kind of you'. Từ chối: 'No, thank you. I can manage'.",
          "4. Đáp lại lời cảm ơn: 'You’re welcome' / 'My pleasure' / 'Don't mention it' / 'No problem'."
        ],
        formulas: [
          { name: "Đáp lời khen", formula: "\"It's very kind of you to say so.\" / \"Thank you!\"" },
          { name: "Đáp lời mời Would you like...?", formula: "Đồng ý: \"Yes, I'd love to.\" | Từ chối: \"I'd love to, but...\"" },
          { name: "Đáp lời cảm ơn", formula: "\"You're welcome.\" / \"My pleasure.\"" }
        ],
        examExample: {
          question: "Lan: \"Congratulations on winning the first prize in the English speaking contest!\"\nHoa: \"________\"\nA. You're welcome.\tB. Never mind.\tC. Thanks. It's very kind of you to say so.\tD. Yes, certainly.",
          solution: "Khi nhận được lời chúc mừng hoặc lời khen, cách ứng xử chuẩn mực trong tiếng Anh là cảm ơn chân thành: 'Thanks. It's very kind of you to say so.'\n=> Đáp án đúng: C.",
          note: "Không chọn 'You're welcome' vì đó là đáp lại lời cảm ơn."
        },
        traps: [
          "BẪY NGÔN NGỮ MẸ ĐẺ: Người Việt thường khiêm tốn 'No, I'm not good at all' -> Trong tiếng Anh bị xem là kỳ quặc, bắt buộc phải cảm ơn!",
          "BẪY YOU'RE WELCOME: Dùng 'You're welcome' để đáp lại lời khen là SAI (chỉ dùng đáp lại lời cảm ơn)."
        ],
        flashcards: [
          {
            front: "Khi ai đó khen: 'You have a lovely dress!', câu đáp lại chuẩn lịch sự là gì?",
            back: "'Thank you! It’s very kind of you to say so' (hoặc 'Thanks, I’m glad you like it')."
          },
          {
            front: "Khi ai đó nói: 'Thank you very much for your help!', câu đáp lại chuẩn là gì?",
            back: "'You’re welcome!' hoặc 'My pleasure!' hoặc 'Not at all!'."
          }
        ]
      },
      {
        id: "eng_q6_signs_notices",
        typeCode: "Dạng 6",
        examPosition: "Câu 23 - 24 trong đề thi (0.5 điểm)",
        title: "Đọc hiểu Biển báo & Thông báo đời sống (Sign & Notice Reading)",
        category: "Real-life Reading",
        level: "Thông hiểu",
        targetScore: "0.5 điểm",
        summary: "Dạng bài đặc thù chiếm 2 câu trong đề thi TP.HCM và chuẩn GDPT 2018: Biển báo giao thông công cộng, trạm sạc xe điện, phòng lab trường học, nội quy an toàn.",
        methods: [
          "1. Xác định ngữ cảnh xuất hiện biển báo: Ở đâu? (bệnh viện, trạm xe buýt, phòng máy tính, thư viện, công viên).",
          "2. Bắt từ khóa mệnh lệnh & cấm đoán:\n- CẤM: 'No...', 'Do not...', 'Prohibited', 'Forbidden', 'Never...'.\n- BẮT BUỘC: 'Must...', 'Required', 'Keep...', 'Strictly...'.\n- NGUY HIỂM / CẢNH BÁO: 'Caution', 'Danger', 'Beware of...', 'Warning'.",
          "3. Chọn đáp án diễn đạt tương đương (Paraphrase) mà không bị suy diễn quá mức."
        ],
        formulas: [
          { name: "Cấm làm gì", formula: "No V-ing = You must not + V = You are not allowed to + V" },
          { name: "Bắt buộc làm gì", formula: "Keep out = Do not enter; \\quad Wear safety goggles = Protective eyewear is required" }
        ],
        examExample: {
          question: "Look at the sign with a charging plug icon and text: 'ELECTRIC VEHICLE CHARGING ONLY. NON-EV PARKING PROHIBITED.' What does this sign tell you?\nA. Anyone can park here if they pay a fee.\nB. Only electric vehicles are permitted to park and charge here.\nC. Electric vehicles must not enter this area.\nD. You can park your petrol car here for 30 minutes.",
          solution: "Biển báo ghi rõ: 'ELECTRIC VEHICLE CHARGING ONLY' (Chỉ dành cho sạc xe điện) và 'NON-EV PARKING PROHIBITED' (Cấm đỗ xe không phải xe điện). Do đó chỉ xe điện mới được đỗ và sạc ở đây.\n=> Đáp án đúng: B.",
          note: "Câu hỏi gắn liền với chuyển đổi xanh của TP.HCM."
        },
        traps: [
          "BẪY TỪ ĐỒNG NGHĨA PHỦ ĐỊNH: Biển ghi 'Prohibited' (bị cấm) tương đương với 'must not' hoặc 'not allowed', không được chọn đáp án khẳng định.",
          "BẪY THỜI GIAN: Đề ghi 'For 15 minutes only' mà đáp án ghi 'All day' là sai."
        ],
        flashcards: [
          {
            front: "Biển báo ghi 'PEDESTRIANS ONLY' có nghĩa là gì?",
            back: "Khu vực này CHỈ DÀNH CHO NGƯỜI ĐI BỘ (các phương tiện giao thông như xe máy, ô tô không được phép đi vào)."
          },
          {
            front: "Từ 'PROHIBITED' trên biển báo công cộng đồng nghĩa với cụm từ nào?",
            back: "Đồng nghĩa với 'NOT ALLOWED' hoặc 'FORBIDDEN' (bị cấm, không được phép làm)."
          }
        ]
      },
      {
        id: "eng_q7_cloze_test",
        typeCode: "Dạng 7",
        examPosition: "Câu 25 - 28 trong đề thi (1.0 điểm)",
        title: "Đọc điền từ vào đoạn văn (Cloze Test / Guided Cloze)",
        category: "Reading",
        level: "Thông hiểu & Vận dụng",
        targetScore: "1.0 điểm",
        summary: "Kỹ thuật đoán từ loại cần điền, phân tích liên từ nối nghĩa đoạn văn và kết hợp từ vựng cố định trong ngữ cảnh bài đọc ngắn.",
        methods: [
          "1. Đọc lướt cả câu chứa chỗ trống để xác định TỪ LOẠI còn thiếu (Danh từ, Động từ, Tính từ, Trạng từ hay Giới từ).",
          "2. Nhìn trước và sau chỗ trống xem có CỤM CỐ ĐỊNH hoặc GIỚI TỪ đi kèm hay không (ví dụ: 'depend ...' -> chọn 'on'; 'famous ...' -> chọn 'for').",
          "3. Nếu là LIÊN TỪ (However, Therefore, Although, Because): Dịch nghĩa của 2 mệnh đề trước và sau để xác định quan hệ nguyên nhân - kết quả hay tương phản.",
          "4. Đọc lại cả câu hoàn chỉnh để kiểm tra độ trôi chảy và hợp lý."
        ],
        formulas: [
          { name: "Vị trí sau giới từ", formula: "Preposition (in, on, at, about, with...) + Noun / V-ing" },
          { name: "Liên từ tương phản vs Nguyên nhân", formula: "However / Although: Tương phản đối lập | Because / Since: Nguyên nhân lý do" }
        ],
        examExample: {
          question: "Many schools are now adopting digital learning tools. ________, some students in remote areas still lack internet access.\nA. Therefore\tB. However\tC. Because\tD. Although",
          solution: "Câu trước nói về sự phát triển của công cụ số, câu sau nói về học sinh vùng sâu vùng xa còn thiếu thốn internet. Hai vế tương phản nhau và đứng đầu câu sau dấu chấm, trước dấu phẩy => Cần trạng từ liên kết 'However' (Tuy nhiên).\n=> Đáp án đúng: B. However.",
          note: "'Although' không đứng trước dấu phẩy như vậy."
        },
        traps: [
          "BẪY LIÊN TỪ: Nhầm lẫn vị trí của 'Although' (không có dấu phẩy đi kèm ngay sau nó) và 'However' (bắt buộc có dấu phẩy: 'However, ...').",
          "BẪY GIỚI TỪ: Nhớ kỹ: depend ON, participate IN, succeed IN, proud OF."
        ],
        flashcards: [
          {
            front: "Sau các giới từ như 'about, in, on, without, of', động từ phải ở dạng nào?",
            back: "Bắt buộc ở dạng V-ING hoặc Danh từ."
          },
          {
            front: "Điền giới từ thích hợp: 'interested ________', 'fond ________', 'proud ________'?",
            back: "'interested IN' (thích thú), 'fond OF' (ưa thích), 'proud OF' (tự hào về)."
          }
        ]
      },
      {
        id: "eng_q8_reading_comprehension",
        typeCode: "Dạng 8",
        examPosition: "Câu 29 - 34 trong đề thi (1.5 điểm)",
        title: "Đọc hiểu văn bản (Reading Comprehension)",
        category: "Reading",
        level: "Thông hiểu & Vận dụng",
        targetScore: "1.5 điểm",
        summary: "6 câu hỏi đọc hiểu văn bản: Tìm ý chính (Main idea), Câu hỏi định vị thông tin chi tiết (According to...), Câu hỏi đại từ quy chiếu (What does 'it' refer to?), Câu hỏi từ đồng nghĩa ngữ cảnh và suy luận.",
        methods: [
          "1. Câu hỏi Ý CHÍNH (Main idea / Best title): Đọc kỹ câu mở đầu và câu kết luận của đoạn 1 và đoạn cuối bài. LÀM CÂU NÀY SAU CÙNG sau khi đã hiểu cả bài!",
          "2. Câu hỏi ĐỊNH VỊ CHI TIẾT ('According to the text...'): Gạch chân TỪ KHÓA trong câu hỏi (tên riêng, số liệu, năm, thuật ngữ). Scan tìm đúng vị trí từ khóa trong bài và so sánh.",
          "3. Câu hỏi ĐẠI TỪ QUY CHIẾU ('The word \"they\" refers to...'): Đọc ngược lại 1 câu ngay trước đại từ đó để tìm danh từ số nhiều tương ứng.",
          "4. Câu hỏi 'NOT TRUE / EXCEPT': Dùng phương pháp loại trừ, tìm 3 đáp án có xuất hiện trong bài, đáp án còn lại là đáp án cần chọn."
        ],
        formulas: [
          { name: "Kỹ thuật Skimming", formula: "Đọc lướt tiêu đề, dòng đầu & dòng cuối từng đoạn để nắm ý chính toàn bài" },
          { name: "Kỹ thuật Scanning", formula: "Đảo mắt thật nhanh tìm từ khóa chính xác: Số liệu, năm, tên riêng, thuật ngữ" }
        ],
        examExample: {
          question: "\"Ben Thanh Market was built in 1912. It has become an enduring symbol of Ho Chi Minh City.\" What does the word 'It' refer to?\nA. The year 1912\tB. Ben Thanh Market\tC. An enduring symbol\tD. Ho Chi Minh City",
          solution: "Xét câu liền trước: 'Ben Thanh Market was built in 1912'. Đại từ 'It' thay thế cho chủ ngữ của câu trước là 'Ben Thanh Market'.\n=> Đáp án đúng: B. Ben Thanh Market.",
          note: "Câu hỏi đại từ quy chiếu thường rất dễ ghi điểm nếu đọc kỹ câu phía trước."
        },
        traps: [
          "BẪY TỪ KHÓA NGOÀI ĐỜI: Chọn đáp án đúng với kiến thức thực tế của mình nhưng TRONG BÀI ĐỌC KHÔNG NÓI ĐẾN -> Vẫn là SAI!",
          "BẪY TỪ ĐỒNG DẠNG: Đề bài dùng từ y hệt trong bài đọc nhưng thêm từ 'only' hoặc 'never' làm sai lệch hoàn toàn ý của tác giả."
        ],
        flashcards: [
          {
            front: "Khi làm bài Đọc hiểu tiếng Anh, câu hỏi 'What is the main idea of the passage?' nên làm trước hay sau?",
            back: "Nên làm SAU CÙNG sau khi đã giải quyết xong các câu hỏi chi tiết, vì lúc đó bạn đã hiểu trọn vẹn toàn bộ nội dung bài đọc."
          },
          {
            front: "Để trả lời câu hỏi 'The word [XYZ] in paragraph 2 refers to...', bước xử lý nhanh nhất là gì?",
            back: "Đọc ngược lại câu văn ngay liền trước từ đó để xác định danh từ (số ít/số nhiều, người/vật) mà đại từ đó đang thay thế."
          }
        ]
      },
      {
        id: "eng_q9_word_form",
        typeCode: "Dạng 9",
        examPosition: "Câu 35 - 38 trong đề thi (1.0 điểm)",
        title: "Biến đổi dạng từ (Word Form / Word Formation)",
        category: "Writing",
        level: "Thông hiểu & Vận dụng",
        targetScore: "1.0 điểm",
        summary: "Phân tích 4 vị trí vàng (Danh - Động - Tính - Trạng), nhận diện tiền tố phủ định (un-, im-, in-) và các bảng gia đình từ (Word Family) thông dụng nhất trong đề thi vào 10.",
        methods: [
          "1. VỊ TRÍ DANH TỪ (Noun): Đứng làm chủ ngữ (đầu câu); Đứng sau mạo từ (a/an/the); Đứng sau tính từ; Đứng sau tính từ sở hữu (my, your, their); Đứng sau giới từ.",
          "2. VỊ TRÍ TÍNH TỪ (Adjective): Đứng trước danh từ để bổ nghĩa (a beautiful girl); Đứng sau động từ to be và linking verbs (look, seem, feel, become).",
          "3. VỊ TRÍ TRẠNG TỪ (Adverb): Bổ nghĩa cho động từ thường (đứng trước hoặc sau V); Đứng đầu câu trước dấu phẩy; Bổ nghĩa cho tính từ (extremely hot).",
          "4. VỊ TRÍ ĐỘNG TỪ (Verb): Đứng sau chủ ngữ; Đứng sau trợ động từ (can, should, must, will)."
        ],
        formulas: [
          { name: "4 Vị trí Danh - Động - Tính - Trạng", formula: "a/the + Adj + NOUN | S + VERB + Adv | Linking Verb + ADJECTIVE | ADV, S + V" },
          { name: "Gia đình từ Môi trường", formula: "pollute (v) -> pollution (n) -> polluted (adj) -> unpolluted (adj phủ định)" },
          { name: "Gia đình từ Thành công", formula: "succeed (v) -> success (n) -> successful (adj) -> successfully (adv)" }
        ],
        examExample: {
          question: "Our history teacher is exceptionally ________ about the cultural heritage and ancient monuments of Saigon - Ho Chi Minh City. (KNOWLEDGE)",
          solution: "Phân tích vị trí: Sau động từ liên kết 'is' và phó từ chỉ mức độ 'exceptionally' cần một TÍNH TỪ bổ nghĩa cho chủ ngữ. Cụm từ cố định: 'knowledgeable about something' (có kiến thức sâu rộng, am hiểu về điều gì).\n=> Đáp án đúng: knowledgeable.",
          note: "Học sinh hay ghi 'knowledge' (danh từ) là sai ngữ pháp."
        },
        traps: [
          "BẪY NGHĨA PHỦ ĐỊNH: Xác định đúng tính từ nhưng quên thêm tiền tố phủ định: ví dụ 'unhappy' thay vì 'happy', 'polluted' thay vì 'unpolluted'.",
          "BẪY NGƯỜI vs VẬT: Danh từ chỉ người hay vật: 'pollutant' (chất gây ô nhiễm) vs 'pollution' (sự ô nhiễm); 'tourist' (du khách) vs 'tourism' (ngành du lịch)."
        ],
        flashcards: [
          {
            front: "Sau mạo từ 'the' và trước danh từ thì cần từ loại gì?",
            back: "Cần một TÍNH TỪ (Adjective) để bổ nghĩa cho danh từ đó (ví dụ: the environmental problems)."
          },
          {
            front: "Dạng Tính từ của từ 'success' là gì, và Trạng từ của nó là gì?",
            back: "Tính từ là 'successful' (thành công), Trạng từ là 'successfully' (một cách thành công)."
          },
          {
            front: "Danh từ chỉ người của 'environment' và 'participate' là gì?",
            back: "'environmentalist' (nhà môi trường học) và 'participant' (người tham gia)."
          }
        ]
      },
      {
        id: "eng_q10_transformation",
        typeCode: "Dạng 10",
        examPosition: "Câu 39 - 40 trong đề thi (1.0 điểm)",
        title: "Viết lại câu không đổi nghĩa (Sentence Transformation)",
        category: "Writing",
        level: "Vận dụng & Vận dụng cao",
        targetScore: "1.0 điểm",
        summary: "Bộ 5 cấu trúc viết lại câu kinh điển xuất hiện trong 100% đề thi tuyển sinh: Chuyển thì HTHT <-> QKĐ, Câu bị động, Câu tường thuật gián tiếp, So sánh, Although <-> Despite / In spite of.",
        methods: [
          "1. Chuyển đổi Thì: 'S + haven't/hasn't + V3/ed + for (thời gian)' $\\iff$ 'S + last + V2/ed + (thời gian) + ago' $\\iff$ 'The last time S + V2/ed was (thời gian) ago'.",
          "2. Câu Bị động: Đưa tân ngữ lên làm chủ ngữ mới. $S + V + O \\implies S_{\\text{mới}} + be + V3/ed + (by O)$. Chia 'be' đúng thì của câu chủ động.",
          "3. Câu Tường thuật gián tiếp: Lùi thì (hiện tại -> quá khứ), đổi đại từ nhân xưng và đổi trạng từ thời gian (now -> then, tomorrow -> the next day). TUYỆT ĐỐI KHÔNG ĐẢO TRỢ ĐỘNG TỪ!",
          "4. Although vs Despite: 'Although + S + V' $\\iff$ 'Despite / In spite of + Noun / V-ing' (hoặc 'Despite the fact that + S + V').",
          "5. Cấu trúc So...that: 'S + be + so + Adj + that + S + V' $\\iff$ 'It is such + (a/an) + Adj + N + that + S + V'."
        ],
        formulas: [
          { name: "Chuyển thì HTHT <-> QKĐ", formula: "haven't V3 for [time] = last V2 [time] ago = The last time S V2 was [time] ago" },
          { name: "Although <-> Despite", formula: "Although + Clause = Despite / In spite of + Noun phrase / V-ing" },
          { name: "Câu gián tiếp Wh-question", formula: "S + asked + O + Wh-word + S + V(lùi thì) \\quad (\\text{Trật tự khẳng định S + V, không đảo ngữ})" },
          { name: "Cấu trúc So that vs Such that", formula: "so + Adj + that = such + (a/an) + Adj + N + that" }
        ],
        examExample: {
          question: "Rewrite the sentence so that it means the same as the original:\n\"I haven't seen my primary school teacher for three years.\"\n=> I last ________________________________________.",
          solution: "Áp dụng công thức chuyển đổi từ Hiện tại hoàn thành sang Quá khứ đơn với 'last':\n'S + haven't + V3 + for + time' = 'S + last + V2 + time + ago'\n=> Đáp án hoàn chỉnh:\n\"I last saw my primary school teacher three years ago.\"",
          note: "Đổi 'seen' thành 'saw' (V2) và 'for three years' thành 'three years ago'."
        },
        traps: [
          "BẪY ĐẢO NGỮ CÂU GIÁN TIẾP: Trong câu hỏi gián tiếp vẫn đảo to be lên trước: 'She asked me where did I live' là SAI -> phải là 'where I lived'!",
          "BẪY THỜI GIAN KHI LÙI THÌ: Quên đổi 'tomorrow' thành 'the next day' / 'the following day'; quên đổi 'yesterday' thành 'the day before'."
        ],
        flashcards: [
          {
            front: "Viết lại câu: 'I haven't visited Ha Long Bay for two years' bắt đầu bằng 'I last... '?",
            back: "'I last visited Ha Long Bay two years ago.' (haven't V3 for = last V2 ago)."
          },
          {
            front: "Chuyển câu sau sang gián tiếp: 'Where do you live?', she asked me.",
            back: "She asked me where I lived (Lùi thì về Quá khứ đơn, đổi trật tự từ khẳng định S + V, không mượn do/did)."
          },
          {
            front: "Viết lại câu 'Although it rained heavily, we went to school' dùng 'In spite of'?",
            back: "'In spite of the heavy rain, we went to school' (hoặc 'In spite of the fact that it rained heavily...')."
          }
        ]
      }
    ]
  },

  // =======================================================
  // 3. MÔN NGỮ VĂN (MA TRẬN ĐỀ THI VÀO 10: 10 ĐIỂM - 120 PHÚT)
  // =======================================================
  literature: {
    id: "literature",
    name: "Ngữ Văn",
    color: "#e11d48",
    accent: "#fb7185",
    icon: "book-open",
    badgeText: "📖 6 Dạng Bài Thi Tuyển Sinh Vào 10",
    targetExam: "Tuyển Sinh Lớp 10 (Chuẩn Đọc Hiểu Ngoài SGK & Làm Văn GDPT 2018)",
    examStructure: {
      totalScore: "10.0 điểm",
      duration: "120 phút",
      format: "Tự luận kết hợp đọc hiểu & tạo lập văn bản theo chuẩn GDPT 2018",
      matrix: [
        { name: "Phần I: Đọc hiểu văn bản ngoài SGK", weight: "4.0 điểm (4 câu)", desc: "100% Ngữ liệu ngoài SGK (Thơ hoặc Truyện ngắn/Ký); 4 cấp độ: Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao" },
        { name: "Phần II: Tiếng Việt & Ngữ liệu thông tin", weight: "1.0 - 1.5 điểm", desc: "Biện pháp tu từ, Thành phần biệt lập, Phép liên kết câu; Xác định thông điệp văn bản đời sống" },
        { name: "Phần III: Viết đoạn văn Nghị luận xã hội", weight: "2.0 điểm (200 chữ)", desc: "Đoạn văn khoảng 200 chữ bàn về tư tưởng đạo lý, kỹ năng sống, trách nhiệm thanh niên học đường" },
        { name: "Phần IV: Viết bài văn Nghị luận văn học", weight: "3.5 - 4.0 điểm", desc: "Phân tích, cảm nhận đoạn thơ/nhân vật văn học; Đánh giá giá trị nhân văn và liên hệ thực tế" }
      ]
    },
    questionTypes: [
      {
        id: "lit_q1_dochieu_vanhoc",
        typeCode: "Dạng 1",
        examPosition: "Phần I trong đề thi (2.0 - 2.5 điểm)",
        title: "Kỹ năng Đọc hiểu văn bản Văn học ngoài SGK (Thơ & Truyện)",
        category: "Đọc hiểu ngoài SGK",
        level: "Nhận biết & Thông hiểu",
        targetScore: "2.5 điểm",
        summary: "100% ngữ liệu ngoài SGK chuẩn GDPT 2018: Nhận diện thể thơ, phương thức biểu đạt, người kể chuyện, hình tượng nhân vật và giải mã dòng cảm xúc nghệ thuật.",
        methods: [
          "1. Nhận diện Thể thơ: Đếm số chữ trong từng câu. Nếu số chữ cố định (5 chữ = ngũ ngôn; 7 chữ = thất ngôn; 6/8 = lục bát). Nếu số chữ biến đổi tự do, ngắt nhịp phóng khoáng -> THỂ THƠ TỰ DO.",
          "2. Nhận diện Phương thức biểu đạt chính:\n- Bộc lộ cảm xúc, tâm tư -> BIỂU CẢM (thơ trữ tình).\n- Kể lại chuỗi sự việc có nhân vật -> TỰ SỰ (truyện, ký).\n- Bàn luận đúng sai, chân lý -> NGHỊ LUẬN.\n- Tái hiện đường nét, màu sắc -> MIÊU TẢ.",
          "3. Người kể chuyện trong văn xuôi: Ngôi thứ nhất (xưng 'tôi' - trực tiếp bộc lộ tâm trạng, tăng tính chân thực) vs Ngôi thứ ba (người kể giấu mình, nhìn bao quát toàn bộ sự việc khách quan).",
          "4. Tìm chi tiết, hình ảnh: Đọc kỹ câu hỏi, gạch chân từ khóa và trích xuất nguyên văn hoặc diễn đạt lại súc tích từ văn bản."
        ],
        formulas: [
          { name: "Nhận diện thể thơ nhanh", formula: "Đếm số chữ: 5 chữ (ngũ ngôn), 7 chữ (thất ngôn), 6-8 (lục bát), số chữ không đều -> Thơ tự do" },
          { name: "Tác dụng của ngôi kể thứ nhất", formula: "Tăng tính chân thực, tin cậy; trực tiếp bày tỏ cảm xúc, thế giới nội tâm sâu kín của nhân vật" }
        ],
        examExample: {
          question: "Đọc đoạn thơ sau trong bài 'Con nằm' (Tế Hanh):\n\"Một chiếc giường nhỏ hẹp\nCha mẹ nằm hai bên\nKhoảng giữa nôi êm\nCon lật con trườn con cười con réo...\"\nĐoạn trích được viết theo thể thơ nào? Phương thức biểu đạt chính là gì?",
          solution: "- Thể thơ: Thể thơ tự do (số chữ trong các câu linh hoạt: câu 5 chữ, câu 8 chữ, ngắt nhịp tự nhiên theo cảm xúc trữ tình).\n- Phương thức biểu đạt chính: Biểu cảm (thể hiện tình yêu thương thiêng liêng, niềm hạnh phúc của cha mẹ khi ngắm nhìn con thơ).",
          note: "Câu nhận biết ăn trọn 0.5 - 1.0 điểm nếu ghi rõ tên thể thơ và phương thức biểu đạt."
        },
        traps: [
          "BẪY THỂ THƠ: Thấy bài thơ có nhiều câu 5 chữ nhưng có 1 vài câu 6 hoặc 7 chữ mà vội kết luận 'thơ 5 chữ' là SAI -> Bắt buộc phải là 'thể thơ tự do'!",
          "BẪY PHƯƠNG THỨC BIỂU ĐẠT: Đề hỏi 'phương thức biểu đạt CHÍNH' thì chỉ được ghi DUY NHẤT 1 phương thức, ghi nhiều hơn sẽ bị trừ điểm hoặc không được tính điểm."
        ],
        flashcards: [
          {
            front: "Dấu hiệu nhận biết nhanh nhất của thể thơ Tự do là gì?",
            back: "Số chữ trong các dòng thơ không bằng nhau, số câu trong khổ thơ không cố định, cách gieo vần và ngắt nhịp linh hoạt theo cảm xúc của tác giả."
          },
          {
            front: "Người kể chuyện xưng 'tôi' là ngôi kể thứ mấy, và có ưu thế nghệ thuật gì?",
            back: "Là ngôi kể thứ nhất. Giúp câu chuyện trở nên chân thực, đáng tin cậy; nhân vật trực tiếp bày tỏ cảm xúc và suy nghĩ nội tâm sâu sắc."
          }
        ]
      },
      {
        id: "lit_q2_dochieu_thongtin",
        typeCode: "Dạng 2",
        examPosition: "Phần I hoặc II trong đề thi (1.5 - 2.0 điểm)",
        title: "Kỹ năng Đọc hiểu văn bản Thông tin & Nghị luận ngoài SGK",
        category: "Đọc hiểu ngoài SGK",
        level: "Thông hiểu & Vận dụng",
        targetScore: "2.0 điểm",
        summary: "Đọc hiểu các văn bản báo chí, khoa học, văn hóa di sản, chuyển đổi số, lối sống xanh: Xác định luận đề, luận điểm, thao tác lập luận và rút ra bài học nhân sinh sâu sắc.",
        methods: [
          "1. Xác định Luận đề (Vấn đề bao trùm): Trả lời câu hỏi: 'Toàn bộ văn bản này bàn về điều gì?' (thường nằm ở nhan đề hoặc câu mở đầu/kết thúc văn bản).",
          "2. Xác định Luận điểm: Là các ý lớn triển khai cho luận đề (thường nằm ở câu chủ đề đầu mỗi đoạn văn).",
          "3. Công thức trả lời câu hỏi 'Thông điệp ý nghĩa nhất':\n- Bước 1: Gọi tên thông điệp cụ thể (1 câu ngắn gọn).\n- Bước 2: Vì sao thông điệp đó có ý nghĩa đối với cuộc sống hôm nay? (giải thích 2 - 3 câu).\n- Bước 3: Rút ra bài học hành động thiết thực cho bản thân (1 câu)."
        ],
        formulas: [
          { name: "Công thức trả lời Thông điệp ý nghĩa", formula: "Nêu thông điệp -> Lý giải vì sao có ý nghĩa (2 câu) -> Liên hệ hành động bản thân (1 câu)" },
          { name: "Phân biệt Luận đề vs Luận điểm", formula: "Luận đề: Vấn đề trung tâm toàn bài | Luận điểm: Các ý chính triển khai trong từng đoạn" }
        ],
        examExample: {
          question: "Từ văn bản bàn về 'Lòng kiên trì trước những thử thách học đường', em hãy rút ra một thông điệp có ý nghĩa nhất đối với bản thân.",
          solution: "- Thông điệp: 'Thất bại không phải là dấu chấm hết, mà là cơ hội để rèn luyện bản lĩnh và trưởng thành.'\n- Lý giải: Bởi vì trong hành trình học tập và cuộc sống, khó khăn là điều không thể tránh khỏi. Sự kiên trì và dám đối mặt với sai lầm sẽ giúp chúng ta tích lũy kinh nghiệm, vượt qua giới hạn của chính mình.\n- Liên hệ bản thân: Là học sinh lớp 9 chuẩn bị thi vào 10, em sẽ luôn giữ vững tinh thần lạc quan, kiên trì ôn luyện, không nản lòng trước những bài toán khó hay điểm số chưa như ý.",
          note: "Trả lời đủ 3 bước để đạt điểm tối đa 1.0 điểm."
        },
        traps: [
          "BẪY CHÉP LẠI VĂN BẢN: Chép y nguyên một đoạn dài trong văn bản mà không khái quát thành thông điệp -> Mất điểm!",
          "BẪY THIẾU LIÊN HỆ: Chỉ nêu lý thuyết chung chung mà không liên hệ hành động thực tế của học sinh."
        ],
        flashcards: [
          {
            front: "Công thức chuẩn 3 bước khi trả lời câu hỏi 'Thông điệp ý nghĩa nhất rút ra từ văn bản' là gì?",
            back: "1. Nêu rõ thông điệp (1 câu) -> 2. Giải thích vì sao thông điệp đó có ý nghĩa (2-3 câu) -> 3. Rút ra bài học hành động thực tế cho bản thân."
          },
          {
            front: "Luận đề của văn bản nghị luận khác với Luận điểm như thế nào?",
            back: "Luận đề là vấn đề trung tâm bao trùm toàn bộ bài viết; Luận điểm là các ý lớn cụ thể được triển khai trong từng phần/đoạn để làm sáng tỏ luận đề."
          }
        ]
      },
      {
        id: "lit_q3_tiengviet_bptt",
        typeCode: "Dạng 3",
        examPosition: "Phần Tiếng Việt trong Đọc hiểu (1.0 - 1.5 điểm)",
        title: "Kiến thức Tiếng Việt & Biện pháp tu từ trong Đọc hiểu",
        category: "Tiếng Việt Lớp 9",
        level: "Thông hiểu & Vận dụng",
        targetScore: "1.5 điểm",
        summary: "Công thức 4 bước nêu tác dụng tu từ, phân biệt Ẩn dụ vs Hoán dụ, 4 Thành phần biệt lập (Tình thái, Cảm thán, Gọi - đáp, Phụ chú), Phép liên kết câu.",
        methods: [
          "1. CÔNG THỨC 4 BƯỚC NÊU TÁC DỤNG TU TỪ (Bắt buộc thuộc lòng):\n- Bước 1: Gọi tên biện pháp tu từ + Chỉ rõ từ ngữ biểu hiện trong văn bản.\n- Bước 2: Tác dụng gợi hình (Vẽ nên bức tranh, hình ảnh, sự vật gì cụ thể?).\n- Bước 3: Tác dụng gợi cảm (Thể hiện thái độ, cảm xúc, tư tưởng, tình yêu thương gì của tác giả?).\n- Bước 4: Tác dụng nghệ thuật (Làm cho câu thơ/văn thêm sinh động, nhịp nhàng, giàu sức gợi cảm).",
          "2. Phân biệt Ẩn dụ vs Hoán dụ:\n- ẨN DỤ: Dựa trên quan hệ TƯƠNG ĐỒNG (giống nhau về hình thức, phẩm chất, cảm giác). Ví dụ: 'Người Cha mái tóc bạc' -> Ẩn dụ Bác Hồ.\n- HOÁN DỤ: Dựa trên quan hệ TƯƠNG CẬN (gần gũi, đi liền với nhau). Ví dụ: 'Áo nâu cùng với áo xanh' -> nông dân và công nhân.",
          "3. 4 Thành phần biệt lập: Tình thái (thể hiện độ tin cậy: chắc chắn, có lẽ, dường như) | Cảm thán (bộc lộ cảm xúc: ôi, chao ôi) | Gọi - đáp (ơi, dạ, vâng) | Phụ chú (bổ sung thông tin, nằm giữa 2 dấu gạch nối hoặc ngoặc đơn).",
          "4. Phép liên kết câu: Phép lặp (lặp từ ngữ), Phép thế (dùng đại từ thay thế), Phép nối (dùng quan hệ từ: nhưng, vì vậy, tuy nhiên), Phép liên tưởng/đồng nghĩa."
        ],
        formulas: [
          { name: "Công thức 4 bước tác dụng tu từ", formula: "1. Gọi tên & Từ ngữ -> 2. Gợi hình (hình ảnh gì?) -> 3. Gợi cảm (cảm xúc/tư tưởng gì?) -> 4. Tăng sức biểu cảm" },
          { name: "Ẩn dụ vs Hoán dụ", formula: "Ẩn dụ: Tương đồng (giống nhau) | Hoán dụ: Tương cận (đi liền nhau, vật chứa vs vật bị chứa)" },
          { name: "4 Thành phần biệt lập", formula: "Tình thái (chắc hẳn) | Cảm thán (than ôi) | Gọi - đáp (ơi) | Phụ chú (- ... -)" }
        ],
        examExample: {
          question: "Chỉ ra và nêu tác dụng của biện pháp tu từ trong hai câu thơ:\n\"Mặt trời của bắp thì nằm trên đồi\nMặt trời của mẹ, con nằm trên lưng\"",
          solution: "- Biện pháp tu từ: Ẩn dụ tu từ (từ 'Mặt trời' trong cụm 'Mặt trời của mẹ').\n- Tác dụng:\n+ Gợi hình: 'Mặt trời của bắp' là mặt trời tự nhiên mang ánh sáng nuôi dưỡng cây cối; 'Mặt trời của mẹ' là đứa con bé bỏng nằm trên lưng mẹ.\n+ Gợi cảm: Thể hiện tình mẫu tử thiêng liêng, con là nguồn sống, nguồn hạnh phúc, niềm hy vọng ấm áp sưởi ấm cuộc đời gian nhọc của người mẹ nghèo.\n+ Nghệ thuật: Tạo sự đối xứng độc đáo, giàu chất thơ và giàu giá trị biểu cảm sâu lắng.",
          note: "Phải nêu đủ tác dụng gợi hình và gợi cảm mới được trọn vẹn 1.0 điểm."
        },
        traps: [
          "BẪY THIẾU TÁC DỤNG CẢM XÚC: Chỉ nói 'làm câu thơ thêm sinh động' mà không nói rõ cụ thể bộc lộ tình cảm, cảm xúc gì của nhân vật -> Bị trừ 50% số điểm!",
          "BẪY NHẦM ẨN DỤ VỚI HOÁN DỤ: Nhớ: Ẩn dụ là so sánh ngầm (A giống B); Hoán dụ là đi liền nhau (áo chàm = người Việt Bắc vì họ mặc áo chàm)."
        ],
        flashcards: [
          {
            front: "Công thức chuẩn 4 bước nêu tác dụng của một biện pháp tu từ trong bài thi Ngữ Văn là gì?",
            back: "1. Chỉ ra tên biện pháp + từ ngữ biểu hiện -> 2. Tác dụng gợi hình (khắc họa hình ảnh gì?) -> 3. Tác dụng gợi cảm (thể hiện cảm xúc, tư tưởng gì?) -> 4. Tăng tính sinh động, biểu cảm."
          },
          {
            front: "Ẩn dụ và Hoán dụ khác nhau về bản chất như thế nào?",
            back: "Ẩn dụ dựa trên quan hệ TƯƠNG ĐỒNG (giống nhau về hình thức, tính chất); Hoán dụ dựa trên quan hệ TƯƠNG CẬN (gần gũi, gắn bó thực tế với nhau)."
          },
          {
            front: "Thành phần phụ chú trong câu nhận biết bằng dấu hiệu hình thức nào?",
            back: "Thường được đặt giữa hai dấu gạch nối (- ... -), hai dấu phẩy, trong ngoặc đơn, hoặc sau dấu hai chấm dùng để chú thích thêm thông tin."
          }
        ]
      },
      {
        id: "lit_q4_doanvan_nlxh",
        typeCode: "Dạng 4",
        examPosition: "Phần Làm văn 1 trong đề thi (2.0 điểm)",
        title: "Kỹ năng Viết đoạn văn Nghị luận xã hội (Khoảng 200 chữ)",
        category: "Tạo lập văn bản",
        level: "Vận dụng",
        targetScore: "2.0 điểm",
        summary: "Bí quyết viết đoạn văn 200 chữ đạt 1.75 - 2.0 điểm tuyệt đối: Cấu trúc 5 phần chuẩn barem, ngân hàng dẫn chứng thực tế đắt giá và quy tắc sống còn về hình thức đoạn văn.",
        methods: [
          "1. HÌNH THỨC ĐOẠN VĂN: Bắt đầu bằng chữ viết hoa lùi đầu dòng và kết thúc bằng dấu chấm xuống dòng. TUYỆT ĐỐI KHÔNG XUỐNG DÒNG TÁCH ĐOẠN (bị trừ ngay 0.5 điểm nếu tách dòng!). Độ dài chuẩn: 2/3 đến 1 trang giấy thi (khoảng 20-25 dòng).",
          "2. CẤU TRÚC 5 BƯỚC CHUẨN BAREM BỘ GD&ĐT:\n- Phần 1. Mở đoạn (1-2 câu): Dẫn dắt ngắn gọn và nêu đúng vấn đề nghị luận (phải chứa từ khóa của đề).\n- Phần 2. Giải thích (2-3 câu): Cắt nghĩa từ khóa trọng tâm là gì (Lòng dũng cảm là gì? Trách nhiệm là gì?).\n- Phần 3. Bàn luận & Dẫn chứng (6-8 câu): Trọng tâm! Vì sao cần có phẩm chất đó? Mang lại giá trị gì cho bản thân và xã hội? Đưa 1 dẫn chứng thực tế tiêu biểu (2 câu).\n- Phần 4. Phản đề & Mở rộng (2-3 câu): Phê phán những người có biểu hiện ngược lại hoặc nhìn nhận đa chiều.\n- Phần 5. Bài học bản thân (2 câu): Rút ra bài học nhận thức và bài học hành động thiết thực của học sinh lớp 9.",
          "3. DẪN CHỨNG THỰC TẾ ĐẮT GIÁ: Chọn nhân vật thực tế thời sự, truyền cảm hứng (thầy giáo Nguyễn Ngọc Ký, kình ngư Ánh Viên, các tấm gương cứu hộ, thanh niên tình nguyện...)."
        ],
        formulas: [
          { name: "Cấu trúc 5 phần đoạn văn 200 chữ", formula: "Mở đoạn (từ khóa) -> Giải thích -> Bàn luận & Dẫn chứng -> Phản đề mở rộng -> Bài học bản thân" },
          { name: "Quy tắc hình thức tối thượng", formula: "1 Đoạn văn duy nhất = Lùi đầu dòng + 1 dấu chấm hết đoạn (Tuyệt đối KHÔNG xuống dòng!)" }
        ],
        examExample: {
          question: "Viết một đoạn văn (khoảng 200 chữ) trình bày suy nghĩ của em về ý nghĩa của tinh thần tự lập đối với giới trẻ hiện nay.",
          solution: "Dàn ý chuẩn:\n1. Mở đoạn: Trong hành trình trưởng thành, tinh thần tự lập chính là chiếc chìa khóa vạn năng mở ra cánh cửa thành công cho mỗi người trẻ.\n2. Giải thích: Tự lập là khả năng tự suy nghĩ, tự định hướng và tự chịu trách nhiệm về cuộc đời mình mà không ỷ lại, dựa dẫm vào người khác.\n3. Bàn luận: Tự lập giúp người trẻ rèn luyện bản lĩnh, chủ động giải quyết khó khăn, từ đó khám phá tiềm năng và khẳng định giá trị bản thân. Người có tính tự lập sẽ luôn tự tin, kiên định và được mọi người tôn trọng.\n- Dẫn chứng: Những bạn học sinh vùng cao tự đi bộ hàng chục cây số tìm con chữ, hay các bạn trẻ vừa học vừa làm để tự trang trải cuộc sống là minh chứng sáng ngời cho tinh thần tự lập.\n4. Phản đề: Đáng tiếc thay, vẫn còn một bộ phận thanh niên sống như 'những chú gà công nghiệp', lười biếng, dựa dẫm vào cha mẹ.\n5. Bài học: Là học sinh lớp 9, em nhận thức rõ cần rèn luyện tính tự lập từ việc nhỏ nhất: tự giác học tập, quản lý thời gian và chủ động đối mặt với thử thách kỳ thi vào 10 sắp tới.",
          note: "Viết liền mạch không ngắt dòng, dung lượng khoảng 20 - 25 dòng giấy thi."
        },
        traps: [
          "BẪY HÌNH THỨC: Tách thành 2 hay 3 đoạn nhỏ (bị trừ ngay 0.5 điểm vì sai yêu cầu HÌNH THỨC ĐOẠN VĂN)!",
          "BẪY KỂ LỂ DẪN CHỨNG: Kể chi tiết tiểu sử của dẫn chứng mất hết nửa trang giấy mà không phân tích ý nghĩa -> Không còn đất để bàn luận."
        ],
        flashcards: [
          {
            front: "Quy tắc hình thức tối thượng khi viết đoạn văn Nghị luận xã hội 200 chữ là gì?",
            back: "Bắt đầu bằng chữ viết hoa lùi đầu dòng và kết thúc bằng một dấu chấm xuống dòng. TUYỆT ĐỐI KHÔNG ĐƯỢC TÁCH THÀNH NHIỀU ĐOẠN trong bài làm!"
          },
          {
            front: "Trong đoạn văn 200 chữ, nên đưa bao nhiêu dẫn chứng và trình bày dung lượng thế nào?",
            back: "Chỉ nên đưa 1 ĐẾN 2 DẪN CHỨNG tiêu biểu nhất, trình bày ngắn gọn trong 2 - 3 câu để làm sáng tỏ lý lẽ, không kể lể chi tiết tiểu sử."
          }
        ]
      },
      {
        id: "lit_q5_baivan_nlvh",
        typeCode: "Dạng 5",
        examPosition: "Phần Làm văn 2 trong đề thi (3.5 - 4.5 điểm)",
        title: "Kỹ năng Viết bài văn Nghị luận văn học / Phân tích tác phẩm",
        category: "Tạo lập văn bản",
        level: "Vận dụng cao",
        targetScore: "4.0 điểm",
        summary: "Kỹ thuật viết bài văn nghị luận phân tích đoạn trích thơ, truyện ngắn hoặc ngữ liệu ngoài SGK: Mở bài gián tiếp cuốn hút, tách luận điểm thân bài sắc sảo, đánh giá nâng cao giá trị tư tưởng nghệ thuật.",
        methods: [
          "1. MỞ BÀI GIÁN TIẾP (3-4 câu): Dẫn dắt từ một nhận định lý luận văn học hoặc một đề tài tương đồng -> Giới thiệu tác giả, tác phẩm -> Trích dẫn vấn đề cần nghị luận (hoặc trích thơ).",
          "2. THÂN BÀI:\n- Luận điểm 1: Khái quát hoàn cảnh sáng tác, mạch cảm xúc hoặc bối cảnh nhân vật (3-4 câu).\n- Luận điểm 2, 3: Phân tích chi tiết từng đoạn thơ / từng phẩm chất nhân vật. Luôn kết hợp phân tích NỘI DUNG gắn liền với NGHỆ THUẬT (từ ngữ, hình ảnh, nhịp thơ, giọng điệu).\n- Luận điểm Đánh giá nâng cao (Chiếm 0.5 điểm phân loại): Đánh giá phong cách tác giả, giá trị hiện thực và nhân đạo sâu sắc của tác phẩm, thông điệp gửi gắm tới thế hệ trẻ hôm nay.",
          "3. KẾT BÀI (3-4 câu): Khẳng định lại giá trị bền vững của tác phẩm và dư âm lắng đọng trong lòng người đọc."
        ],
        formulas: [
          { name: "Công thức mở bài gián tiếp", formula: "Dẫn ý lý luận văn học / Đề tài -> Tác giả & Tác phẩm -> Nêu vấn đề nghị luận / Trích dẫn thơ" },
          { name: "Quy tắc phân tích Thơ", formula: "Không diễn xuôi bài thơ! Luôn phân tích: Từ ngữ đắt giá -> Hình ảnh thơ -> Nhịp điệu -> Cảm xúc nhân vật trữ tình" }
        ],
        examExample: {
          question: "Cảm nhận về bức tranh mùa xuân thiên nhiên đất trời trong 4 câu thơ đầu bài 'Mùa xuân nho nhỏ' (Thanh Hải):\n\"Mọc giữa dòng sông xanh\nMột bông hoa tím biếc\nƠi con chim chiền chiện\nHót chi mà vang trời...\"",
          solution: "Dàn ý thân bài chi tiết:\n- Nghệ thuật đảo ngữ: Động từ 'Mọc' đặt đầu câu gợi sức sống trỗi dậy mãnh liệt của mùa xuân xứ Huế.\n- Màu sắc hài hòa, đặc trưng xứ Huế: Sắc 'xanh' trong trẻo của dòng sông Hương hòa cùng sắc 'tím biếc' thủy chung của bông hoa lục bình.\n- Âm thanh rộn rã: Tiếng hót chim chiền chiện vang vọng không gian cao rộng, trong trẻo.\n- Cảm xúc tác giả: Lời gọi tha thiết 'Ơi... Hót chi mà' đậm chất Huế, thể hiện niềm say sưa, ngây ngất và nâng niu từng giọt âm thanh mùa xuân đất trời.",
          note: "Nhớ chỉ rõ nghệ thuật đảo từ 'Mọc' và chuyển đổi cảm giác."
        },
        traps: [
          "BẪY DIỄN XUÔI THƠ: Kể lại nội dung bài thơ bằng ngôn ngữ văn xuôi thông thường mà không chỉ ra nghệ thuật từ ngữ, hình ảnh, nhịp điệu.",
          "BẪY THIẾU DẪN CHỨNG: Bình luận chung chung mà không trích dẫn cụ thể từ ngữ, câu thơ hay lời thoại của nhân vật."
        ],
        flashcards: [
          {
            front: "Yêu cầu cốt lõi khi phân tích một đoạn thơ là gì?",
            back: "Tuyệt đối không diễn xuôi thơ thành văn xuôi. Phải bám sát ngôn từ, hình ảnh, biện pháp tu từ, nhịp điệu để phân tích dòng cảm xúc trữ tình của nhà thơ."
          },
          {
            front: "Đoạn Đánh giá nâng cao trong thân bài văn nghị luận văn học thường làm những gì?",
            back: "Khái quát nét đặc sắc nghệ thuật, phong cách tác giả, khẳng định giá trị nhân đạo/hiện thực và liên hệ bài học cuộc sống cho người đọc hôm nay."
          }
        ]
      },
      {
        id: "lit_q6_sotay_tacgia_tacpham",
        typeCode: "Dạng 6",
        examPosition: "Cẩm nang tra cứu cốt lõi (Kiến thức nền tảng)",
        title: "Sổ tay Tác giả, Tác phẩm & Bối cảnh lịch sử Lớp 9",
        category: "Kiến thức nền tảng",
        level: "Nhận biết & Ghi nhớ",
        targetScore: "Trọn bộ thông tin tác phẩm",
        summary: "Bảng tra cứu cứu sinh về năm sáng tác, hoàn cảnh ra đời, đề tài và thông điệp của các tác phẩm trọng tâm: Đồng chí, Bài thơ về tiểu đội xe không kính, Lặng lẽ Sa Pa, Chiếc lược ngà, Mùa xuân nho nhỏ, Viếng lăng Bác, Sang thu, Ánh trăng.",
        methods: [
          "1. Giai đoạn Kháng chiến chống Pháp (1946 - 1954):\n- 'Đồng chí' (Chính Hữu - 1948, tập 'Đầu súng trăng treo'): Vẻ đẹp mộc mạc, lý tưởng cao đẹp và tình đồng chí keo sơn của người lính nông dân.",
          "2. Giai đoạn Kháng chiến chống Mỹ (1954 - 1975):\n- 'Bài thơ về tiểu đội xe không kính' (Phạm Tiến Duật - 1969, tập 'Vầng trăng quầng lửa'): Tinh thần dũng cảm, lạc quan, ngang tàng của thế hệ lính lái xe Trường Sơn.\n- 'Lặng lẽ Sa Pa' (Nguyễn Thành Long - 1970, chuyến đi thực tế Lào Cai): Vẻ đẹp của người lao động thầm lặng cống hiến cho quê hương.\n- 'Chiếc lược ngà' (Nguyễn Quang Sáng - 1966, chiến trường Nam Bộ): Tình cha con thiêng liêng, bất diệt trong khói lửa chiến tranh.",
          "3. Giai đoạn Sau năm 1975 (Hòa bình & Đổi mới):\n- 'Viếng lăng Bác' (Viễn Phương - 1976, lăng Bác khánh thành): Lòng thành kính, tiếc thương và biết ơn vô hạn đối với Chủ tịch Hồ Chí Minh.\n- 'Mùa xuân nho nhỏ' (Thanh Hải - 11/1980, trên giường bệnh cuối đời): Khát vọng cống hiến mùa xuân cuộc đời cho đất nước."
        ],
        formulas: [
          { name: "Đồng chí - Chính Hữu", formula: "Năm 1948 | Đầu kháng chiến chống Pháp | Tình đồng chí mộc mạc gắn bó | Câu thơ biểu tượng: 'Đầu súng trăng treo'" },
          { name: "Lặng lẽ Sa Pa - Nguyễn Thành Long", formula: "Năm 1970 | Kháng chiến chống Mỹ, miền Bắc xây dựng XHCN | Ca ngợi anh thanh niên khí tượng thầm lặng" },
          { name: "Mùa xuân nho nhỏ - Thanh Hải", formula: "Tháng 11/1980 | Trên giường bệnh cuối đời | Khát vọng làm một 'mùa xuân nho nhỏ' cống hiến cho đời" }
        ],
        examExample: {
          question: "Nêu hoàn cảnh sáng tác và ý nghĩa nhan đề bài thơ 'Mùa xuân nho nhỏ' của nhà thơ Thanh Hải.",
          solution: "- Hoàn cảnh sáng tác: Tháng 11/1980, khi nhà thơ đang nằm trên giường bệnh đối mặt với những ngày cuối của cuộc đời. Dù đối mặt với cái chết, hồn thơ của ông vẫn dạt dào niềm yêu đời, khát khao cống hiến.\n- Ý nghĩa nhan đề: 'Mùa xuân' là mùa của đất trời, mùa tươi đẹp nhất của vạn vật. Từ láy 'nho nhỏ' thể hiện sự khiêm nhường, giản dị. Nhan đề là một ẩn dụ nghệ thuật độc đáo: Mỗi người hãy sống đẹp, hãy dâng hiến phần tinh túy nhất của cuộc đời mình như một mùa xuân nhỏ để hòa vào mùa xuân lớn của đất nước.",
          note: "Câu hỏi thông hiểu hay ra trong phần mở đầu của đề thi văn."
        },
        traps: [
          "BẪY THỜI KỲ LỊCH SỬ: Nhầm lẫn giữa giai đoạn chống Pháp (1946 - 1954) với chống Mỹ (1954 - 1975) -> Bị trừ điểm hoàn cảnh sáng tác.",
          "BẪY THỂ LOẠI: Gọi 'Lặng lẽ Sa Pa' là tiểu thuyết (sai, đó là truyện ngắn trữ tình)."
        ],
        flashcards: [
          {
            front: "Bài thơ 'Đồng chí' của Chính Hữu được sáng tác vào năm nào, trong thời kỳ kháng chiến nào?",
            back: "Sáng tác vào năm 1948, thời kỳ đầu của cuộc kháng chiến chống thực dân Pháp, in trong tập thơ 'Đầu súng trăng treo'."
          },
          {
            front: "Hai câu thơ kết thúc bài 'Đồng chí' là gì?",
            back: "'Đêm nay rừng hoang sương muối / Đứng cạnh bên nhau chờ giặc tới / Đầu súng trăng treo.' (Hình ảnh biểu tượng tuyệt đẹp của tình đồng chí)."
          },
          {
            front: "Hoàn cảnh sáng tác đặc biệt của bài thơ 'Mùa xuân nho nhỏ' (Thanh Hải) là gì?",
            back: "Sáng tác vào tháng 11/1980, không lâu trước khi nhà thơ qua đời, khi ông đang nằm trên giường bệnh của bệnh viện Huế."
          }
        ]
      }
    ]
  }
};

// Aliases for backward compatibility: ensure subData.topics points to subData.questionTypes
Object.keys(window.KNOWLEDGE_BASE).forEach(subKey => {
  const sub = window.KNOWLEDGE_BASE[subKey];
  if (sub && sub.questionTypes) {
    sub.topics = sub.questionTypes;
  }
});
