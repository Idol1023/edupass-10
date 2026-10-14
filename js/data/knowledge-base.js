// Sổ tay kiến thức & Flashcard Ôn tập trọng tâm Lớp 9 lên 10
window.KNOWLEDGE_BASE = {
  math: {
    name: "Toán Học",
    color: "#6366f1",
    topics: [
      {
        id: "math_t1",
        title: "Căn bậc hai & Rút gọn biểu thức",
        summary: "Nắm chắc điều kiện xác định, hằng đẳng thức căn bậc hai, quy đồng mẫu thức và các câu hỏi phụ.",
        formulas: [
          { name: "Điều kiện xác định", formula: "\\sqrt{A} \\text{ xác định khi } A \\ge 0; \\quad \\frac{1}{\\sqrt{A}} \\text{ xác định khi } A > 0" },
          { name: "Hằng đẳng thức căn", formula: "\\sqrt{A^2} = |A| = \\begin{cases} A & \\text{khi } A \\ge 0 \\\\ -A & \\text{khi } A < 0 \\end{cases}" },
          { name: "Khử mẫu & Trục căn", formula: "\\frac{m}{\\sqrt{A} \\pm \\sqrt{B}} = \\frac{m(\\sqrt{A} \\mp \\sqrt{B})}{A - B}" }
        ],
        traps: [
          "Quên tìm ĐKXĐ ngay từ đầu bài toán hoặc không đối chiếu ĐKXĐ khi giải xong x.",
          "Quên dấu giá trị tuyệt đối khi khai phương: $\\sqrt{(3 - \\sqrt{10})^2} = |3 - \\sqrt{10}| = \\sqrt{10} - 3$ (vì $3 < \\sqrt{10}$)."
        ],
        flashcards: [
          {
            front: "Điều kiện để biểu thức $\\frac{1}{\\sqrt{x - 2}}$ có nghĩa là gì?",
            back: "$x - 2 > 0 \\Leftrightarrow x > 2$ (Vì căn nằm ở mẫu nên mẫu phải > 0 tuyệt đối, không lấy dấu bằng)."
          },
          {
            front: "Rút gọn biểu thức $\\sqrt{(1 - \\sqrt{3})^2}$ được kết quả là bao nhiêu?",
            back: "$|1 - \\sqrt{3}| = \\sqrt{3} - 1$ (Vì $1 < \\sqrt{3} \\approx 1.732$, nên phải đảo dấu để đảm bảo giá trị dương)."
          },
          {
            front: "Khi giải bài toán 'Tìm x nguyên để biểu thức P nhận giá trị nguyên', phương pháp chuẩn là gì?",
            back: "Tách $P = \\text{phần nguyên} + \\frac{k}{\\text{mẫu thức}}$. Cho mẫu thức là ước của hằng số $k$, sau đó giải tìm x và so sánh với ĐKXĐ + điều kiện x nguyên."
          }
        ]
      },
      {
        id: "math_t2",
        title: "Hệ thức Vi-ét & Phương trình bậc hai",
        summary: "Bảo bối chiếm 1.5 - 2.0 điểm trong mọi đề thi vào 10 toàn quốc.",
        formulas: [
          { name: "Biệt thức Delta", formula: "\\Delta = b^2 - 4ac; \\quad \\Delta' = b'^2 - ac \\quad (b = 2b')" },
          { name: "Định lý Vi-ét", formula: "x_1 + x_2 = -\\frac{b}{a}; \\quad x_1 x_2 = \\frac{c}{a}" },
          { name: "Các hệ thức đối xứng", formula: "x_1^2 + x_2^2 = S^2 - 2P; \\quad (x_1 - x_2)^2 = S^2 - 4P" },
          { name: "Dấu hai nghiệm", formula: "\\text{Cùng dấu: } \\Delta \\ge 0, P > 0; \\quad \\text{Trái dấu: } ac < 0" }
        ],
        traps: [
          "Cực kỳ quan trọng: Trước khi dùng Vi-ét, BẮT BUỘC phải tìm điều kiện để phương trình có 2 nghiệm (\\Delta \\ge 0 hoặc \\Delta > 0) và hệ số a khác 0!",
          "Nhầm dấu trong tổng Vi-ét: $S = -b/a$ (có dấu trừ), $P = c/a$ (không có dấu trừ)."
        ],
        flashcards: [
          {
            front: "Phương trình bậc hai $ax^2 + bx + c = 0$ có 2 nghiệm trái dấu khi nào?",
            back: "Khi và chỉ khi tích $ac < 0$ (Khi $ac < 0$ thì $\\Delta = b^2 - 4ac > 0$ luôn được đảm bảo, không cần xét delta)."
          },
          {
            front: "Biến đổi biểu thức $|x_1 - x_2|$ theo $S$ và $P$ của Vi-ét?",
            back: "$|x_1 - x_2| = \\sqrt{(x_1 - x_2)^2} = \\sqrt{(x_1 + x_2)^2 - 4x_1 x_2} = \\sqrt{S^2 - 4P}$."
          },
          {
            front: "Để phương trình $ax^2 + bx + c = 0$ có 2 nghiệm cùng dương thì cần những điều kiện gì?",
            back: "Hệ điều kiện: $a \\ne 0$, $\\Delta \\ge 0$, $S = -b/a > 0$, $P = c/a > 0$."
          }
        ]
      },
      {
        id: "math_t3",
        title: "Tứ giác nội tiếp & Hình học đường tròn",
        summary: "Trọng tâm hình học lớp 9: 4 dấu hiệu vàng nhận biết tứ giác nội tiếp và các góc với đường tròn.",
        formulas: [
          { name: "Dấu hiệu 1: Tổng hai góc đối", formula: "\\widehat{A} + \\widehat{C} = 180^\\circ \\text{ hoặc } \\widehat{B} + \\widehat{D} = 180^\\circ" },
          { name: "Dấu hiệu 2: Cùng nhìn một cạnh", formula: "\\widehat{DAC} = \\widehat{DBC} \\text{ (hai đỉnh kề A và B cùng nhìn DC dưới góc bằng nhau)}" },
          { name: "Dấu hiệu 3: Góc ngoài tại một đỉnh", formula: "\\text{Góc ngoài tại đỉnh A bằng góc trong tại đỉnh đối diện C}" },
          { name: "Dấu hiệu 4: Cách đều một điểm", formula: "OA = OB = OC = OD = R" }
        ],
        traps: [
          "Nhầm lẫn giữa góc ở tâm (bằng sđ cung) và góc nội tiếp (bằng 1/2 sđ cung).",
          "Khi chứng minh 2 đỉnh kề cùng nhìn một cạnh, quên chỉ rõ hai đỉnh kề nhau."
        ],
        flashcards: [
          {
            front: "Góc tạo bởi tia tiếp tuyến và dây cung có mối quan hệ gì với góc nội tiếp cùng chắn cung đó?",
            back: "Hai góc này BẰNG NHAU (cùng bằng nửa số đo của cung bị chắn)."
          },
          {
            front: "Góc nội tiếp chắn nửa đường tròn luôn có số đo bằng bao nhiêu độ?",
            back: "Luôn bằng $90^\\circ$ (góc vuông). Đây là dữ kiện vàng để tìm trực tâm và các tứ giác nội tiếp!"
          },
          {
            front: "Tam giác nội tiếp đường tròn có một cạnh là đường kính thì đó là tam giác gì?",
            back: "Tam giác vuông tại đỉnh đối diện với đường kính đó."
          }
        ]
      },
      {
        id: "math_t4",
        title: "Hình học không gian (Trụ - Nón - Cầu)",
        summary: "Câu hỏi 0.5 - 0.75 điểm chắc chắn có trong đề thi tuyển sinh vào 10.",
        formulas: [
          { name: "Hình trụ", formula: "S_{xq} = 2\\pi rh; \\quad S_{tp} = 2\\pi rh + 2\\pi r^2; \\quad V = \\pi r^2 h" },
          { name: "Hình nón", formula: "S_{xq} = \\pi rl; \\quad l^2 = h^2 + r^2; \\quad V = \\frac{1}{3}\\pi r^2 h" },
          { name: "Hình cầu", formula: "S = 4\\pi R^2; \\quad V = \\frac{4}{3}\\pi R^3" }
        ],
        traps: [
          "Đổi sai đơn vị đo (cm sang dm hoặc m; lít sang cm3, chú ý 1 lít = 1 dm3 = 1000 cm3).",
          "Quên số $1/3$ trong thể tích hình nón hoặc quên số $4/3$ trong thể tích hình cầu."
        ],
        flashcards: [
          {
            front: "Công thức tính diện tích xung quanh của hình nón có bán kính r và đường sinh l là gì?",
            back: "$S_{xq} = \\pi r l$."
          },
          {
            front: "Mối liên hệ giữa chiều cao $h$, bán kính đáy $r$ và đường sinh $l$ trong hình nón?",
            back: "Theo định lý Pythagore: $l = \\sqrt{h^2 + r^2}$."
          }
        ]
      },
      {
        id: "math_t5",
        title: "Toán Thực Tế Vào 10 (Chuẩn GDPT 2018)",
        summary: "Bảo bối thực chiến chiếm 60% - 70% số điểm đề thi vào 10: Mua sắm giảm giá kép, Tiền điện EVN bậc thang, Nồng độ dung dịch, Đo đạc lượng giác giác kế, Thể tích vật thể đời sống, Thống kê & Xác suất thực nghiệm.",
        formulas: [
          { name: "Tiền điện EVN bậc thang", formula: "\\text{Chia sản lượng theo từng bậc: Bậc 1 (0-50), Bậc 2 (51-100), Bậc 3 (101-200)... rồi cộng thuế VAT 8%}" },
          { name: "Giảm giá kép", formula: "T = \\text{Giá gốc} \\times (1 - %_1) \\times (1 - %_2) \\quad (\\text{Tuyệt đối không cộng dồn } %_1 + %_2!)" },
          { name: "Lượng giác đo đạc", formula: "H = d \\cdot \\tan\\alpha + h_{\\text{giác kế}} \\quad (\\text{Luôn cộng thêm chiều cao mắt/giác kế } h)" },
          { name: "Bảo toàn cồn/muối", formula: "V_1 \\cdot C_1 = V_2 \\cdot C_2; \\quad m_1 \\cdot C_1\\% = m_2 \\cdot C_2\\%" },
          { name: "Hình học đời sống", formula: "\\text{Trụ: } V = \\pi r^2 h; \\quad \\text{Nón: } V = \\frac{1}{3}\\pi r^2 h; \\quad \\text{Cầu: } V = \\frac{4}{3}\\pi R^3 \\quad (1\\text{ m}^3 = 1000\\text{ lít})" },
          { name: "Xác suất thực nghiệm", formula: "P = \\frac{\\text{Số kết quả thuận lợi}}{\\text{Tổng số lần thực nghiệm}} \\times 100\\%" }
        ],
        traps: [
          "BẪY GIÁC KẾ: Tính được $d \\cdot \\tan\\alpha$ nhưng quên cộng chiều cao $1.4\\text{m} - 1.6\\text{m}$ của giác kế ngắm!",
          "BẪY ĐƯỜNG KÍNH: Đề bài cho đường kính $d$, quên chia đôi để lấy bán kính $r$ trước khi tính thể tích/diện tích.",
          "BẪY CỘNG DỒN GIẢM GIÁ: Lấy 10% + 5% = 15% là sai lầm mất điểm ngay lập tức!"
        ],
        flashcards: [
          {
            front: "Tại sao không được cộng dồn hai mức giảm giá $10\\%$ và $5\\%$ thành $15\\%$?",
            back: "Vì đợt giảm giá thứ hai được tính trên GIÁ ĐÃ GIẢM của đợt một, chứ không phải trên giá niêm yết ban đầu. Công thức đúng: Giá gốc $\\times (1 - 0.10) \\times (1 - 0.05) = \\text{Giá gốc} \\times 0.855$ (tương đương giảm 14.5%, không phải 15%)."
          },
          {
            front: "Khi dùng giác kế đặt cao $1.5\\text{ m}$ để đo chiều cao cột cờ, công thức tính chiều cao toàn phần $H$ là gì?",
            back: "$H = d \\cdot \\tan\\alpha + 1.5$ (Trong đó $d$ là khoảng cách từ chân giác kế đến chân cột cờ, $\\alpha$ là góc ngắm nâng)."
          },
          {
            front: "Pha chế $500\\text{ ml}$ cồn $70^\\circ$ từ cồn $90^\\circ$, lượng cồn $90^\\circ$ cần dùng tính như thế nào?",
            back: "Bảo toàn thể tích cồn nguyên chất: $V_{90} \\times 90\\% = 500 \\times 70\\% \\Rightarrow V_{90} = \\frac{500 \\times 70}{90} \\approx 388.9\\text{ ml}$."
          },
          {
            front: "Trong bài toán tiền điện nước bậc thang lũy tiến, phương pháp tính đúng là gì?",
            back: "Chia mức tiêu thụ thành từng khoảng định mức theo bậc. Nhân số đơn vị của từng bậc với đơn giá của bậc đó, cộng tổng các bậc lại rồi mới nhân thuế VAT."
          }
        ]
      }
    ]
  },
  english: {
    name: "Tiếng Anh",
    color: "#0ea5e9",
    topics: [
      {
        id: "eng_t1",
        title: "Quy tắc phát âm (-ed, -s/es) & Nguyên âm / Phụ âm bẫy",
        summary: "Chiếm từ 4 - 6 câu mở đầu đề thi. Đạt trọn vẹn điểm phần này tạo đà tâm lý cực kỳ tốt.",
        formulas: [
          { name: "Phát âm đuôi -ed", formula: "/ɪd/: sau t, d (tiền đô) | /t/: sau p, k, f, s, sh, ch (thảo phải kính phật tổ) | /d/: các âm hữu thanh còn lại" },
          { name: "Phát âm đuôi -s/es", formula: "/s/: sau p, k, f, t, th | /ɪz/: sau s, ss, ch, sh, x, z, ge, ce | /z/: các âm còn lại" },
          { name: "Ngoại lệ -ed đọc /ɪd/", formula: "naked, wicked, sacred, beloved, learned (adj), crooked, hatred (dù tận cùng là k, p...)" },
          { name: "Cặp âm hay lừa /θ/ và /ð/", formula: "/θ/: think, thank, thin, tooth, breath | /ð/: this, that, there, father, breathe" }
        ],
        traps: [
          "Bẫy từ 'naked', 'sacred', 'beloved' có đuôi -ed luôn phát âm là /ɪd/ bất chấp chữ cái trước nó!",
          "Nhầm lẫn giữa động từ 'breathe' /briːð/ (kết thúc /ð/) và danh từ 'breath' /breθ/ (kết thúc /θ/)."
        ],
        flashcards: [
          {
            front: "Đuôi '-ed' của từ 'invited' và 'decided' được phát âm là gì?",
            back: "Phát âm là /ɪd/ vì động từ nguyên mẫu kết thúc bằng âm /t/ hoặc /d/."
          },
          {
            front: "Từ 'beloved' và 'naked' có đuôi -ed phát âm là gì?",
            back: "Phát âm là /ɪd/ (Đây là các trường hợp ngoại lệ đặc biệt hay xuất hiện trong câu phân loại đề thi vào 10!)."
          },
          {
            front: "Đuôi '-s' của các từ 'books', 'cats', 'maps' phát âm là gì?",
            back: "Phát âm là /s/ vì đứng sau các phụ âm vô thanh /k/, /t/, /p/."
          },
          {
            front: "Phát âm phần gạch chân của 'th' trong từ 'there' và 'think' khác nhau thế nào?",
            back: "'there' phát âm là /ð/ (hữu thanh, rung dây thanh quản); 'think' phát âm là /θ/ (vô thanh, thổi hơi)."
          }
        ]
      },
      {
        id: "eng_t2",
        title: "Bí kíp trọng âm từ 2 & 3 âm tiết (Chiếm trọn 1.0 điểm)",
        summary: "Nắm vững quy tắc hậu tố và bản chất từ loại để tìm nhanh đáp án trong 15 giây.",
        formulas: [
          { name: "Động từ vs Danh từ 2 âm tiết", formula: "Danh từ & Tính từ nhấn âm 1 ('listen, 'happy); Động từ nhấn âm 2 (re'ceive, pro'vide)" },
          { name: "Ngoại lệ động từ nhấn âm 1", formula: "ˈlisten, ˈhappen, ˈenter, ˈvisit, ˈfinish, ˈopen, ˈfollow (tận cùng -en, -er, -it, -ow)" },
          { name: "Hậu tố kéo trọng âm về trước nó", formula: "-tion, -sion, -ic, -ity, -ical, -ious, -logy (ví dụ: scien'tific, pol'lution, a'bility)" },
          { name: "Hậu tố nhận chính trọng âm", formula: "-ee, -eer, -ese, -ique (ví dụ: train'ee, engi'neer, Vietna'mese, un'ique)" }
        ],
        traps: [
          "Từ có 2 âm tiết vừa là Danh vừa là Động: 'record (n - âm 1) vs re'cord (v - âm 2); 'present (n - âm 1) vs pre'sent (v - âm 2).",
          "Tiền tố phủ định (un-, im-, in-, dis-) KHÔNG BAO GIỜ nhận trọng âm: un'happy, im'possible."
        ],
        flashcards: [
          {
            front: "Trọng âm của các từ tận cùng bằng '-tion' và '-ic' rơi vào đâu?",
            back: "Rơi vào âm tiết NGAY TRƯỚC nó (ví dụ: infor'mation, scien'tific, tra'dition)."
          },
          {
            front: "Các động từ 2 âm tiết như 'listen', 'happen', 'visit' nhấn âm mấy?",
            back: "Nhấn âm 1 (Đây là các ngoại lệ kinh điển của động từ 2 âm tiết có đuôi -en, -it!)."
          },
          {
            front: "Từ 'volunteer' và 'Japanese' có trọng âm rơi vào âm tiết thứ mấy?",
            back: "Rơi vào chính âm tiết cuối chứa đuôi -eer và -ese (volun'teer - âm 3; Japa'nese - âm 3)."
          },
          {
            front: "Từ 'pollute' (v) và 'pollution' (n) có trọng âm rơi vào âm mấy?",
            back: "Cả hai đều nhấn âm 2: pol'lute (động từ 2 âm tiết nhấn âm 2) và pol'lution (đuôi -tion nhấn âm trước nó)."
          }
        ]
      },
      {
        id: "eng_t3",
        title: "5 Thì trọng tâm thi vào 10 & Dấu hiệu nhận biết",
        summary: "Hiện tại đơn, Quá khứ đơn, Hiện tại hoàn thành, Quá khứ tiếp diễn và Tương lai.",
        formulas: [
          { name: "Hiện tại hoàn thành (HTHT)", formula: "S + have/has + V3/ed | Dấu hiệu: since, for, already, yet, so far, up to now, recently, ever, never" },
          { name: "Quá khứ tiếp diễn với When / While", formula: "S + was/were + V-ing (đang diễn ra) WHEN S + V2/ed (xen vào) | WHILE S + was/were + V-ing" },
          { name: "Tương lai gần vs Tương lai đơn", formula: "Be going to + V: Có kế hoạch hoặc bằng chứng hiện tại | Will + V: Quyết định tức thì tại thời điểm nói" },
          { name: "Thì với SINCE", formula: "S + have/has + V3/ed (HTHT) + SINCE + S + V2/ed (Quá khứ đơn)" }
        ],
        traps: [
          "Bằng chứng thấy trước mắt: 'Look at the clouds! It is going to rain' (không được dùng will rain!).",
          "Sau WHEN / AS SOON AS / BEFORE / AFTER trong câu tương lai PHẢI dùng Hiện tại đơn, không dùng will."
        ],
        flashcards: [
          {
            front: "Trong câu có 'up to now' hoặc 'so far' thì động từ chia ở thì nào?",
            back: "Thì Hiện Tại Hoàn Thành (S + have/has + V3/ed)."
          },
          {
            front: "Quy tắc phối hợp thì với liên từ SINCE là gì?",
            back: "Mệnh đề trước SINCE chia Hiện tại hoàn thành; Mệnh đề sau SINCE chia Quá khứ đơn."
          },
          {
            front: "Cấu trúc: 'While we ________ (have) dinner, the phone rang' chia thế nào?",
            back: "Chia 'were having' (Quá khứ tiếp diễn diễn tả hành động đang diễn ra thì hành động khác xen vào)."
          },
          {
            front: "Phân biệt 'already' và 'yet' trong thì hiện tại hoàn thành?",
            back: "'already' dùng trong câu khẳng định; 'yet' đứng ở cuối câu phủ định và câu hỏi nghi vấn."
          }
        ]
      },
      {
        id: "eng_t4",
        title: "Câu điều kiện (Type 1, 2, Unless) & Mệnh đề quan hệ",
        summary: "Bắt buộc có từ 2 - 3 câu trong trắc nghiệm, tìm lỗi sai và viết lại câu.",
        formulas: [
          { name: "Điều kiện loại 1", formula: "If + S + V(hiện tại đơn), S + will / can + V-inf (Có thể xảy ra ở hiện tại/tương lai)" },
          { name: "Điều kiện loại 2", formula: "If + S + V2/ed / were, S + would / could + V-inf (Giả định không có thật ở hiện tại)" },
          { name: "Unless = If ... not", formula: "Unless you hurry, you will be late = If you don't hurry, you will be late" },
          { name: "Đại từ quan hệ", formula: "Who (người, S); Whom (người, O); Which (vật); Whose + N (sở hữu); That (thay who/which)" }
        ],
        traps: [
          "Mệnh đề có 'Unless' thì KHÔNG BAO GIỜ có 'not' nữa vì Unless đã mang nghĩa phủ định!",
          "'That' KHÔNG BAO GIỜ đứng sau dấu phẩy (mệnh đề quan hệ không xác định) và KHÔNG đứng sau giới từ."
        ],
        flashcards: [
          {
            front: "Khi nào BẮT BUỘC dùng đại từ quan hệ 'that' thay vì 'who' hay 'which'?",
            back: "Khi danh từ đi trước bao gồm CẢ NGƯỜI VÀ VẬT (ví dụ: the man and his dog that...), hoặc sau cấp so sánh nhất."
          },
          {
            front: "Câu điều kiện loại 2: 'If I ________ (be) you, I would take that opportunity' chia to be thế nào?",
            back: "Chia là 'were' cho tất cả các ngôi trong câu điều kiện loại 2 (If I were you = Nếu tôi là bạn)."
          },
          {
            front: "Viết lại câu: 'If you don't practice English every day, you won't improve' bằng 'Unless'?",
            back: "'Unless you practice English every day, you won't improve' (Bỏ don't, giữ nguyên động từ khẳng định)."
          },
          {
            front: "Đứng giữa 2 danh từ chỉ quan hệ sở hữu thì dùng đại từ quan hệ nào?",
            back: "Dùng WHOSE (ví dụ: The girl whose bicycle was stolen...)."
          }
        ]
      },
      {
        id: "eng_t5",
        title: "Câu bị động & Câu tường thuật gián tiếp (Reported Speech)",
        summary: "Công thức biến đổi ngữ pháp nền tảng cho trắc nghiệm và viết lại câu.",
        formulas: [
          { name: "Bị động chuẩn", formula: "S + be + V3/ed + (by O) | be chia theo đúng thì của câu chủ động" },
          { name: "Bị động HTHT & Modal", formula: "HTHT: have/has been + V3/ed | Modal: can/will/must be + V3/ed" },
          { name: "Tường thuật câu Wh-question", formula: "S + asked + O + Wh-word + S + V(lùi thì) -> TUYỆT ĐỐI KHÔNG ĐẢO NGỮ!" },
          { name: "Quy tắc lùi thì", formula: "Hiện tại đơn -> Quá khứ đơn; Hiện tại tiếp diễn -> Quá khứ tiếp diễn; will -> would, can -> could" }
        ],
        traps: [
          "LỖI KINH ĐIỂN: Trong câu gián tiếp Wh-question vẫn đảo to be lên trước chủ ngữ: 'She asked me how old was I' là SAI -> phải là 'how old I was'!",
          "Quên đổi trạng từ thời gian khi tường thuật: now -> then, yesterday -> the day before, tomorrow -> the following day."
        ],
        flashcards: [
          {
            front: "Chuyển câu sau sang gián tiếp: 'Where do you live?', she asked me.",
            back: "She asked me where I lived (Lùi thì về Quá khứ đơn, đổi trật tự từ khẳng định S + V, không mượn trợ động từ do/did)."
          },
          {
            front: "Bị động của câu: 'They will build a new bridge next year' là gì?",
            back: "A new bridge will be built next year (will be + V3/ed)."
          },
          {
            front: "Khi chuyển sang câu tường thuật gián tiếp, 'this' đổi thành gì, 'tomorrow' đổi thành gì?",
            back: "'this' đổi thành 'that'; 'tomorrow' đổi thành 'the next day' hoặc 'the following day'."
          },
          {
            front: "Cấu trúc gợi ý gián tiếp: 'Why don't we go camping?' chuyển thành gì?",
            back: "S + suggested going camping HOẶC S + suggested that we should go camping."
          }
        ]
      },
      {
        id: "eng_t6",
        title: "Top 50 Phrasal Verbs, Collocations & Cấu trúc Viết lại câu",
        summary: "Kho vũ khí từ vựng và cấu trúc tương đương quyết định điểm 8 - 10.",
        formulas: [
          { name: "Cụm với LOOK & TURN", formula: "look after (chăm sóc), look forward to + V-ing (trông đợi), turn down (vặn nhỏ/từ chối), turn on/off" },
          { name: "Cụm với GIVE & PUT", formula: "give up (từ bỏ), put off (hoãn lại), put on (mặc vào), call off (hủy bỏ hoàn toàn)" },
          { name: "Collocations ăn điểm", formula: "make an effort (nỗ lực), make a mistake (phạm lỗi), do homework, pay attention to (chú ý)" },
          { name: "Bộ 3 viết lại câu tương đương", formula: "haven't V3/ed for ... = last V2/ed ... ago | Although + Clause = Despite + Noun/V-ing" }
        ],
        traps: [
          "Sau cụm 'look forward to' ĐỘNG TỪ BẮT BUỘC PHẢI THÊM -ING: look forward to hearing from you (không dùng to hear)!",
          "Phân biệt MAKE và DO: make an effort, make a decision, make money; do homework, do research, do business."
        ],
        flashcards: [
          {
            front: "'Look forward to' theo sau bởi dạng động từ nào?",
            back: "Bắt buộc theo sau bởi V-ING hoặc Danh từ (ví dụ: I look forward to seeing you soon!)."
          },
          {
            front: "Viết lại câu: 'I haven't seen my teacher for two months' dùng 'last'?",
            back: "'I last saw my teacher two months ago' (haven't V3 for = last V2 ago)."
          },
          {
            front: "'Call off' khác 'Put off' như thế nào?",
            back: "'Call off' = Cancel (Hủy luôn, không tổ chức nữa); 'Put off' = Postpone / Delay (Hoãn lại sang ngày khác)."
          },
          {
            front: "Viết lại câu 'Although it rained heavily, we went out' dùng 'In spite of'?",
            back: "'In spite of the heavy rain, we went out' (hoặc 'In spite of the fact that it rained heavily...')."
          }
        ]
      }
    ]
  },
  literature: {
    name: "Ngữ Văn",
    color: "#ec4899",
    topics: [
      {
        id: "lit_t1",
        title: "Bảng tra cứu Tác giả - Tác phẩm trọng tâm lớp 9",
        summary: "Hệ thống thông tin cốt lõi bắt buộc phải ghi nhớ chính xác từng mốc thời gian và hoàn cảnh ra đời.",
        formulas: [
          { name: "Đồng chí", formula: "Chính Hữu | Năm 1948 | Đầu kháng chiến chống Pháp | Tập 'Đầu súng trăng treo'" },
          { name: "Bài thơ về tiểu đội xe không kính", formula: "Phạm Tiến Duật | Năm 1969 | Kháng chiến chống Mỹ | Tập 'Vầng trăng quầng lửa'" },
          { name: "Lặng lẽ Sa Pa", formula: "Nguyễn Thành Long | Năm 1970 | Chuyến đi thực tế Lào Cai | Ca ngợi người lao động thầm lặng" },
          { name: "Chiếc lược ngà", formula: "Nguyễn Quang Sáng | Năm 1966 | Chiến trường Nam Bộ thời chống Mỹ | Tình cha con sâu nặng" },
          { name: "Mùa xuân nho nhỏ", formula: "Thanh Hải | Tháng 11/1980 | Trên giường bệnh cuối đời | Khát vọng cống hiến cho đời" }
        ],
        traps: [
          "Nhầm lẫn năm sáng tác giữa kháng chiến chống Pháp (1946 - 1954) và kháng chiến chống Mỹ (1954 - 1975).",
          "Nhầm lẫn thể loại giữa truyện ngắn trữ tình (Lặng lẽ Sa Pa) và truyện ngắn tâm lý xã hội (Làng)."
        ],
        flashcards: [
          {
            front: "Truyện ngắn 'Làng' của Kim Lân được sáng tác trong thời kỳ nào?",
            back: "Sáng tác vào thời kỳ đầu của cuộc kháng chiến chống thực dân Pháp (năm 1948), đăng lần đầu trên tạp chí Văn nghệ."
          },
          {
            front: "Hai câu thơ kết thúc bài 'Đồng chí' là gì?",
            back: "'Đêm nay rừng hoang sương muối / Đứng cạnh bên nhau chờ giặc tới / Đầu súng trăng treo.' (Biểu tượng tình đồng chí và vẻ đẹp người lính)."
          },
          {
            front: "Bài thơ 'Viếng lăng Bác' của Viễn Phương được sáng tác vào dịp nào?",
            back: "Tháng 4/1976, một năm sau ngày giải phóng miền Nam, khi lăng Chủ tịch Hồ Chí Minh vừa được khánh thành và tác giả có dịp ra thăm miền Bắc."
          }
        ]
      },
      {
        id: "lit_t2",
        title: "Biện pháp tu từ & Tiếng Việt lớp 9",
        summary: "Công cụ đắc lực giải trọn điểm phần Đọc hiểu (3 - 4 điểm trong đề thi).",
        formulas: [
          { name: "Ẩn dụ vs Hoán dụ", formula: "Ẩn dụ: Tương đồng (giống nhau về hình thức, phẩm chất, cảm giác) | Hoán dụ: Tương cận (gần gũi, đi liền nhau)" },
          { name: "Thành phần biệt lập", formula: "1. Tình thái (chắc chắn, có lẽ) | 2. Cảm thán (chao ôi, than ôi) | 3. Gọi - đáp (ơi, dạ, vâng) | 4. Phụ chú (nằm giữa dấu ngoặc đơn/gạch nối)" },
          { name: "Phép liên kết câu", formula: "Phép lặp (lặp từ), Phép thế (dùng từ thay thế), Phép nối (quan hệ từ), Phép liên tưởng / đồng nghĩa" }
        ],
        traps: [
          "Xác định đúng tên biện pháp nhưng QUÊN nêu tác dụng nghệ thuật (Gợi hình ảnh gì? Bộc lộ tình cảm gì? Tăng sức gợi cảm thế nào?).",
          "Nhầm thành phần phụ chú với thành phần nòng cốt vị ngữ trong câu phức."
        ],
        flashcards: [
          {
            front: "Công thức nêu tác dụng của biện pháp tu từ trong bài thi Ngữ Văn?",
            back: "1. Biện pháp gì (ở từ ngữ nào)? 2. Gợi hình (vẽ nên bức tranh, hình ảnh cụ thể gì)? 3. Gợi cảm (thể hiện cảm xúc, thái độ, tư tưởng gì của tác giả)? 4. Tăng tính sinh động, biểu cảm."
          },
          {
            front: "Thành phần tình thái trong câu dùng để làm gì?",
            back: "Dùng để thể hiện cách nhìn, mức độ tin cậy của người nói đối với sự việc được nói đến trong câu (chắc hẳn, dường như, có lẽ...)."
          }
        ]
      },
      {
        id: "lit_t3",
        title: "Công thức viết đoạn văn Nghị luận xã hội 200 chữ",
        summary: "Bí quyết viết đoạn văn 200 chữ đạt 1.75 - 2.0 điểm tuyệt đối.",
        formulas: [
          { name: "1. Mở đoạn (1-2 câu)", formula: "Dẫn dắt trực tiếp và nêu đúng vấn đề nghị luận (có từ khóa)." },
          { name: "2. Giải thích (2-3 câu)", formula: "Cắt nghĩa từ khóa trọng tâm bằng ngôn ngữ ngắn gọn, rõ ràng." },
          { name: "3. Phân tích & Dẫn chứng (5-7 câu)", formula: "Vì sao cần có phẩm chất đó? Nêu 1 dẫn chứng tiêu biểu, xác thực (2 câu)." },
          { name: "4. Phản đề & Mở rộng (2-3 câu)", formula: "Phê phán hiện tượng tiêu cực trái ngược hoặc nhìn nhận đa chiều." },
          { name: "5. Bài học bản thân (2 câu)", formula: "Rút ra bài học nhận thức và hành động thiết thực của học sinh." }
        ],
        traps: [
          "Viết thành bài văn có xuống dòng (bị trừ ngay 0.5 điểm vì sai yêu cầu HÌNH THỨC ĐOẠN VĂN).",
          "Viết quá dài quá 1.5 trang hoặc kể lể chi tiết tiểu sử của dẫn chứng."
        ],
        flashcards: [
          {
            front: "Yêu cầu hình thức tối thượng của ĐOẠN VĂN 200 chữ là gì?",
            back: "Bắt đầu bằng chữ viết hoa lùi đầu dòng và kết thúc bằng dấu chấm xuống dòng. TUYỆT ĐỐI KHÔNG TÁCH XUỐNG DÒNG trong toàn bộ đoạn văn!"
          },
          {
            front: "Nên đưa mấy dẫn chứng trong đoạn văn 200 chữ?",
            back: "Chỉ nên đưa 1 ĐẾN 2 DẪN CHỨNG tiêu biểu nhất, nêu ngắn gọn 2 - 3 câu để phân tích ý nghĩa, không kể lể chi tiết."
          }
        ]
      },
      {
        id: "lit_t4",
        title: "Kỹ năng Đọc hiểu Ngữ liệu ngoài SGK (Chuẩn GDPT 2018)",
        summary: "Bí quyết đạt điểm tối đa phần Đọc hiểu và Nghị luận xã hội với ngữ liệu văn bản hoàn toàn ngoài SGK.",
        formulas: [
          { name: "Nhận diện thể loại", formula: "Văn bản nghị luận (luận điểm, lý lẽ, dẫn chứng) | Văn bản thông tin (số liệu, sự kiện) | Văn bản văn học (hình tượng, cảm xúc)" },
          { name: "Tìm thông điệp", formula: "Trả lời 2 câu hỏi: Văn bản bàn về vấn đề gì? Tác giả muốn người đọc thay đổi nhận thức hay hành động như thế nào?" },
          { name: "Nêu tác dụng tu từ", formula: "1. Tên biện pháp -> 2. Từ ngữ biểu hiện -> 3. Tác dụng gợi hình -> 4. Tác dụng gợi cảm, tư tưởng" }
        ],
        traps: [
          "Chép lại nguyên xi văn bản khi trả lời câu hỏi thông điệp thay vì đúc kết thành bài học nhận thức cho bản thân.",
          "Quên không liên hệ với thực tế đời sống học đường và trách nhiệm của người trẻ."
        ],
        flashcards: [
          {
            front: "Quy tắc vàng khi trả lời câu hỏi 'Thông điệp ý nghĩa nhất rút ra từ văn bản'?",
            back: "Nêu rõ thông điệp (1 câu khái quát) + Giải thích ngắn gọn vì sao thông điệp đó có ý nghĩa đối với cuộc sống hôm nay (2-3 câu) + Liên hệ hành động thực tế của bản thân."
          },
          {
            front: "Dấu hiệu nhận biết văn bản nghị luận xã hội trong phần Đọc hiểu ngoài SGK?",
            back: "Mục đích thuyết phục người đọc về một tư tưởng, đạo lý hay hiện tượng đời sống; có hệ thống luận điểm rõ ràng, lý lẽ sắc bén và dẫn chứng thực tế chứng minh."
          }
        ]
      }
    ]
  }
};
