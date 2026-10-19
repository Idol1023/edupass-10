// =========================================================
// EDUPASS 10 - BỘ ĐỀ LUYỆN CHUYÊN SÂU THEO TỪNG DẠNG CÂU HỎI MÔN NGỮ VĂN
// Chuẩn cấu trúc đề thi tuyển sinh vào 10 & Chương trình GDPT 2018
// Mỗi đề tập trung duy nhất 100% vào đúng 1 dạng câu hỏi trọng tâm
// =========================================================

window.LITERATURE_TOPIC_EXAMS = [
  // -------------------------------------------------------
  // DẠNG 1: ĐỌC HIỂU VĂN BẢN VĂN HỌC NGOÀI SGK (THƠ & TRUYỆN)
  // -------------------------------------------------------
  {
    "id": "lit_exam_type_dochieu_vanhoc",
    "topicId": "lit_q1_dochieu_vanhoc",
    "title": "Chuyên Đề Dạng 1: Kỹ Năng Đọc Hiểu Văn Bản Văn Học Ngoài SGK",
    "subject": "literature",
    "year": 2025,
    "location": "Chuyên đề",
    "isOfficial": false,
    "isSingleTopic": true,
    "badgeText": "🎯 Chuyên Đề: Dạng 1",
    "durationMinutes": 30,
    "totalQuestions": 6,
    "description": "Luyện tập 100% chuyên sâu kỹ năng đọc hiểu ngữ liệu văn học mới ngoài SGK (chuẩn GDPT 2018): Nhận diện thể thơ, ngôi kể, điểm nhìn trần thuật, hình tượng nghệ thuật tiêu biểu, mạch cảm xúc nhân vật trữ tình và thông điệp tư tưởng của tác phẩm.",
    "questions": [
      {
        "id": "lit_top_vh01",
        "topic": "Xác định thể thơ của văn bản nghệ thuật",
        "difficulty": "Nhận biết",
        "question": "Đọc đoạn thơ sau và xác định thể thơ:<br><em>'Con về thăm mẹ chiều đông<br>Khói rơm cay mắt, mênh mông cánh đồng<br>Mẹ ngồi vá áo bên song<br>Bàn tay gầy guộc đếm từng mùa qua.'</em><br>Đoạn thơ trên được viết theo thể thơ nào?",
        "options": [
          "Thể thơ lục bát",
          "Thể thơ song thất lục bát",
          "Thể thơ tự do",
          "Thể thơ bảy chữ"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Đoạn thơ viết theo các cặp câu: câu trên 6 tiếng (lục), câu dưới 8 tiếng (bát) xen kẽ nhau và gieo vần chân - vần lưng chuẩn mực (đông - đồng - song - từng). Đây chính là thể thơ lục bát truyền thống của dân tộc."
      },
      {
        "id": "lit_top_vh02",
        "topic": "Xác định phương thức biểu đạt chính của văn bản trữ tình",
        "difficulty": "Nhận biết",
        "question": "Phương thức biểu đạt chính của đoạn thơ trên là:",
        "options": [
          "Biểu cảm",
          "Tự sự",
          "Miêu tả",
          "Nghị luận"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Văn bản thơ là tiếng nói tâm tình, bộc lộ trực tiếp tình cảm yêu thương, xót xa, kính trọng và biết ơn của người con đối với người mẹ tần tảo. Do đó phương thức biểu đạt chính là Biểu cảm (kết hợp yếu tố tự sự và miêu tả để gợi cảm xúc)."
      },
      {
        "id": "lit_top_vh03",
        "topic": "Phân tích hình ảnh biểu tượng nghệ thuật",
        "difficulty": "Thông hiểu",
        "question": "Hình ảnh <em>'bàn tay gầy guộc'</em> của mẹ trong câu thơ mang ý nghĩa biểu tượng sâu sắc nhất cho điều gì?",
        "options": [
          "Sự vất vả, lam lũ, hy sinh thầm lặng cả cuộc đời của mẹ vì con.",
          "Sự ốm yếu, bệnh tật do thời tiết mùa đông giá lạnh.",
          "Sự nghèo khó của gia đình ở vùng nông thôn.",
          "Thời gian trôi qua quá nhanh làm con người già đi."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "'Bàn tay gầy guộc' là chi tiết giàu sức gợi, không chỉ tả thực đôi bàn tay xương gầy của người mẹ già mà còn là biểu tượng cảm động cho cả một đời lam lũ, tảo tần, chắt chiu, gánh vác mọi nhọc nhằn hy sinh để nuôi nấng con khôn lớn."
      },
      {
        "id": "lit_top_vh04",
        "topic": "Xác định ngôi kể và tác dụng trong văn bản truyện ngắn",
        "difficulty": "Thông hiểu",
        "question": "Trong truyện ngắn có đoạn trích: <em>'Tôi nhìn theo bóng dáng người cha đang khom lưng đẩy chiếc xe thồ vượt qua con dốc, lòng bỗng trào dâng một nỗi nghẹn ngào khó tả.'</em> Ngôi kể được sử dụng ở đây có tác dụng gì?",
        "options": [
          "Ngôi kể thứ nhất ('Tôi') giúp bộc lộ trực tiếp, chân thực và sâu sắc thế giới nội tâm của nhân vật.",
          "Ngôi kể thứ ba giúp cái nhìn mang tính khách quan, bao quát toàn bộ sự việc.",
          "Ngôi kể thứ nhất làm hạn chế tầm nhìn của người đọc về bối cảnh xung quanh.",
          "Ngôi kể thứ hai tạo cảm giác đối thoại trực tiếp với độc giả."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Ngôi kể thứ nhất (nhân vật xưng 'Tôi') cho phép người kể chuyện bộc lộ trực tiếp những suy nghĩ, rung động, cảm xúc sâu kín nhất của mình, tạo độ tin cậy và sức truyền cảm mạnh mẽ tới trái tim người đọc."
      },
      {
        "id": "lit_top_vh05",
        "topic": "Phân tích mạch cảm xúc của nhân vật trữ tình",
        "difficulty": "Thông hiểu",
        "question": "Mạch cảm xúc chủ đạo của người con trong đoạn thơ về mẹ ở câu 1 vận động theo trình tự nào?",
        "options": [
          "Từ quan sát cảnh vật chiều đông quê nhà đến xúc động xót xa và trào dâng lòng biết ơn trước đức hy sinh của mẹ.",
          "Từ buồn rầu vì thời tiết lạnh lẽo đến tiếc nuối tuổi thanh xuân của bản thân.",
          "Từ ngạc nhiên trước sự thay đổi của làng quê đến tự hào về thành tựu của mình.",
          "Từ lo lắng cho tương lai đến hồi tưởng kỷ niệm tuổi thơ nghịch ngợm."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Mạch cảm xúc đi từ điểm nhìn thực tế khi trở về thăm mẹ (chiều đông, khói rơm, cánh đồng), dừng lại ở hình ảnh người mẹ bên song cửa và chuyển hóa thành niềm xúc động, xót xa, thấu hiểu sự hy sinh thầm lặng của mẹ theo năm tháng."
      },
      {
        "id": "lit_top_vh06",
        "topic": "Rút ra thông điệp ý nghĩa nhất từ văn bản văn học",
        "difficulty": "Vận dụng",
        "question": "Thông điệp nhân văn sâu sắc nhất mà đoạn trích gửi gắm đến mỗi chúng ta là:",
        "options": [
          "Hãy luôn biết trân trọng, thấu hiểu và đền đáp công ơn sinh thành, dưỡng dục bao la của cha mẹ khi còn có thể.",
          "Cần tích cực trồng trọt để mùa đông cánh đồng không bị hoang vu.",
          "Nên học cách may vá quần áo để tiết kiệm chi tiêu gia đình.",
          "Mùa đông là thời điểm thích hợp nhất để đi du lịch về vùng quê."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Văn bản khơi gợi bài học thiêng liêng về đạo làm con: biết trân quý mái ấm gia đình, thấu hiểu nỗi vất vả của mẹ cha và sống hiếu nghĩa, yêu thương chăm sóc đấng sinh thành mỗi ngày."
      }
    ]
  },

  // -------------------------------------------------------
  // DẠNG 2: ĐỌC HIỂU VĂN BẢN THÔNG TIN & NGHỊ LUẬN XÃ HỘI
  // -------------------------------------------------------
  {
    "id": "lit_exam_type_dochieu_thongtin",
    "topicId": "lit_q2_dochieu_thongtin",
    "title": "Chuyên Đề Dạng 2: Kỹ Năng Đọc Hiểu Văn Bản Thông Tin & Nghị Luận",
    "subject": "literature",
    "year": 2025,
    "location": "Chuyên đề",
    "isOfficial": false,
    "isSingleTopic": true,
    "badgeText": "🎯 Chuyên Đề: Dạng 2",
    "durationMinutes": 30,
    "totalQuestions": 6,
    "description": "Luyện tập 100% chuyên sâu phần Đọc hiểu văn bản thông tin và nghị luận đời sống: Xác định phương thức biểu đạt, nhận diện luận điểm - luận cứ - dẫn chứng, phân tích thao tác lập luận, đánh giá quan điểm tác giả và liên hệ thực tiễn giới trẻ.",
    "questions": [
      {
        "id": "lit_top_tt01",
        "topic": "Xác định phương thức biểu đạt chính của văn bản nghị luận",
        "difficulty": "Nhận biết",
        "question": "Đọc đoạn trích sau:<br><em>'Bản lĩnh không phải là sự liều lĩnh mù quáng, mà là sự can đảm dám đối diện với thất bại để tiếp tục tiến lên. Trong thời đại số biến đổi không ngừng, những người trẻ có bản lĩnh là những người biết tự định vị giá trị của mình, không bị cuốn theo những trào lưu độc hại và kiên định với mục tiêu lý tưởng đã chọn.'</em><br>Phương thức biểu đạt chính của đoạn trích trên là:",
        "options": [
          "Nghị luận",
          "Thuyết minh",
          "Tự sự",
          "Biểu cảm"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Đoạn trích bàn luận về bản chất và ý nghĩa của 'bản lĩnh' đối với người trẻ bằng các luận điểm, lý lẽ và lập luận chặt chẽ. Do đó phương thức biểu đạt chính là Nghị luận."
      },
      {
        "id": "lit_top_tt02",
        "topic": "Xác định luận điểm cốt lõi của đoạn trích",
        "difficulty": "Thông hiểu",
        "question": "Theo đoạn trích trên, biểu hiện nào sau đây ĐÚNG NHẤT về người trẻ có bản lĩnh trong thời đại số?",
        "options": [
          "Biết tự định vị giá trị bản thân, không bị cuốn theo trào lưu độc hại và kiên định với mục tiêu lý tưởng.",
          "Chấp nhận mọi rủi ro bằng sự liều lĩnh mù quáng để nhanh chóng nổi tiếng.",
          "Sử dụng mạng xã hội liên tục nhiều giờ mỗi ngày để cập nhật thông tin.",
          "Tránh xa mọi áp lực và không tham gia vào các hoạt động tập thể."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Dẫn chứng nguyên văn trong đoạn trích: 'những người trẻ có bản lĩnh là những người biết tự định vị giá trị của mình, không bị cuốn theo những trào lưu độc hại và kiên định với mục tiêu lý tưởng đã chọn'."
      },
      {
        "id": "lit_top_tt03",
        "topic": "Nhận diện thao tác lập luận chủ đạo",
        "difficulty": "Thông hiểu",
        "question": "Câu văn: <em>'Bản lĩnh không phải là sự liều lĩnh mù quáng, mà là sự can đảm dám đối diện với thất bại để tiếp tục tiến lên'</em> sử dụng chủ yếu thao tác lập luận nào?",
        "options": [
          "Thao tác giải thích (kết hợp bác bỏ định kiến sai lệch để định nghĩa khái niệm).",
          "Thao tác phân tích số liệu thống kê.",
          "Thao tác miêu tả ngoại hình.",
          "Thao tác so sánh tương đồng đơn thuần."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Tác giả sử dụng mô hình 'không phải là A mà là B' để vừa bác bỏ cách hiểu nông nổi (bản lĩnh không phải là liều lĩnh mù quáng) vừa đưa ra định nghĩa chính xác, sâu sắc về bản lĩnh (thao tác giải thích)."
      },
      {
        "id": "lit_top_tt04",
        "topic": "Phân tích tác dụng của dẫn chứng thực tế trong văn bản thông tin",
        "difficulty": "Thông hiểu",
        "question": "Trong văn bản thông tin, việc tác giả đưa ra số liệu thống kê xác thực và câu chuyện thành công có thật nhằm mục đích gì?",
        "options": [
          "Tăng tính chân thực, thuyết phục và giá trị tin cậy khoa học cho luận điểm.",
          "Làm cho văn bản dài hơn để đạt số lượng chữ quy định.",
          "Chứng tỏ sự uyên bác của người viết về mặt từ vựng.",
          "Biến văn bản thành một bài toán học."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Dẫn chứng xác thực và số liệu tin cậy là bằng chứng thép trong văn bản nghị luận và thông tin, giúp luận điểm không bị sáo rỗng, tạo độ thuyết phục cao và thuyết phục người đọc."
      },
      {
        "id": "lit_top_tt05",
        "topic": "Đánh giá thái độ và quan điểm của tác giả",
        "difficulty": "Thông hiểu",
        "question": "Thái độ của tác giả đối với thế hệ trẻ trong đoạn trích thể hiện điều gì?",
        "options": [
          "Niềm tin tưởng, kỳ vọng và sự định hướng tích cực, đúng đắn cho sự trưởng thành của người trẻ.",
          "Sự phê phán gay gắt và bi quan về tương lai của thế hệ trẻ.",
          "Sự thờ ơ và không quan tâm đến xu thế phát triển xã hội.",
          "Sự hài lòng tuyệt đối không cần thay đổi gì thêm."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Giọng văn mang tính khích lệ, phân tích sáng tỏ để giúp các bạn trẻ nhận thức đúng về bản lĩnh, định hình nhân cách và bản lĩnh vững vàng trong cuộc sống."
      },
      {
        "id": "lit_top_tt06",
        "topic": "Bài học hành động rút ra từ văn bản",
        "difficulty": "Vận dụng",
        "question": "Để rèn luyện bản lĩnh trong học tập chuẩn bị cho kỳ thi vào 10, học sinh cần làm gì?",
        "options": [
          "Chủ động lập kế hoạch tự học, kiên trì vượt qua những bài tập khó và học hỏi từ các lỗi sai sau mỗi lần thi thử.",
          "Chỉ học những môn mình thích và bỏ qua các môn còn yếu.",
          "Thức thâu đêm suốt sáng trước ngày thi để nhồi nhét kiến thức.",
          "Phụ thuộc hoàn toàn vào bài giải của người khác mà không tự tư duy."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Bài học thiết thực nhất: rèn luyện tính tự giác, kỷ luật bản thân, dám đối diện với lỗ hổng kiến thức để lấp đầy và bền bỉ tiến bộ mỗi ngày."
      }
    ]
  },

  // -------------------------------------------------------
  // DẠNG 3: KIẾN THỨC TIẾNG VIỆT & BIỆN PHÁP TU TỪ
  // -------------------------------------------------------
  {
    "id": "lit_exam_type_tiengviet_bptt",
    "topicId": "lit_q3_tiengviet_bptt",
    "title": "Chuyên Đề Dạng 3: Kiến Thức Tiếng Việt & Các Biện Pháp Tu Từ",
    "subject": "literature",
    "year": 2025,
    "location": "Chuyên đề",
    "isOfficial": false,
    "isSingleTopic": true,
    "badgeText": "🎯 Chuyên Đề: Dạng 3",
    "durationMinutes": 25,
    "totalQuestions": 6,
    "description": "Luyện tập 100% chuyên sâu Tiếng Việt lớp 9: Nhận diện và nêu tác dụng biểu đạt của các Biện pháp tu từ (So sánh, Ẩn dụ, Hoán dụ, Điệp ngữ, Nói giảm nói tránh, Nhân hóa), Khởi ngữ và các Thành phần biệt lập (Tình thái, Cảm thán, Gọi đáp, Phụ chú).",
    "questions": [
      {
        "id": "lit_top_tv01",
        "topic": "Nhận diện biện pháp tu từ Ẩn dụ và phân tích tác dụng",
        "difficulty": "Thông hiểu",
        "question": "Trong câu thơ của Viễn Phương:<br><em>'Ngày ngày mặt trời đi qua trên lăng<br>Thấy một mặt trời trong lăng rất đỏ.'</em><br>Hình ảnh <em>'mặt trời trong lăng'</em> ở câu thơ thứ hai sử dụng biện pháp tu từ nào?",
        "options": [
          "Ẩn dụ (ngầm ví Bác Hồ như vầng thái dương soi sáng cách mạng Việt Nam).",
          "Hoán dụ (lấy bộ phận để chỉ toàn thể).",
          "So sánh ngang bằng có từ so sánh.",
          "Nói quá phóng đại sự thật."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Mặt trời thứ nhất là mặt trời của thiên nhiên vũ trụ mang ánh sáng và sự sống. Mặt trời thứ hai là hình ảnh ẩn dụ tuyệt đẹp ngợi ca Chủ tịch Hồ Chí Minh: Bác chính là vầng thái dương bất tử soi đường chỉ lối cho dân tộc thoát khỏi đêm dài nô lệ đi tới tự do, ấm no."
      },
      {
        "id": "lit_top_tv02",
        "topic": "Phân biệt Ẩn dụ và Hoán dụ",
        "difficulty": "Thông hiểu",
        "question": "Câu thơ: <em>'Áo chàm đưa buổi phân ly / Cầm tay nhau biết nói gì hôm nay'</em> (Tố Hữu) sử dụng biện pháp tu từ gì ở cụm từ <em>'Áo chàm'</em>?",
        "options": [
          "Hoán dụ (lấy trang phục đặc trưng để chỉ người dân vùng căn cứ Việt Bắc).",
          "Ẩn dụ phẩm chất dựa trên nét tương đồng ngầm.",
          "Nhân hóa gán cảm xúc con người cho chiếc áo.",
          "Nói giảm nói tránh để giảm nhẹ chia ly."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "'Áo chàm' là trang phục truyền thống quen thuộc của đồng bào các dân tộc thiểu số vùng Việt Bắc. Tác giả lấy dấu hiệu của sự vật (trang phục) để gọi người mặc trang phục đó (quan hệ tương cận, gần gũi) nên đây là phép Hoán dụ."
      },
      {
        "id": "lit_top_tv03",
        "topic": "Tác dụng biểu đạt của Biện pháp Điệp từ / Điệp ngữ",
        "difficulty": "Thông hiểu",
        "question": "Trong bài thơ 'Mùa xuân nho nhỏ' của Thanh Hải, điệp từ <em>'Ta làm...'</em> (Ta làm con chim hót / Ta làm một cành hoa / Ta nhập vào hòa ca...) có tác dụng biểu đạt gì?",
        "options": [
          "Nhấn mạnh khát vọng tha thiết, chân thành và mãnh liệt muốn cống hiến cuộc đời cho đất nước, tạo nhịp điệu dồn dập tha thiết cho lời thơ.",
          "Tả thực về vẻ đẹp phong phú của các loài chim hoa cỏ mùa xuân.",
          "Khẳng định sức mạnh vượt trội của cá nhân trước cộng đồng.",
          "Liệt kê các nghề nghiệp khác nhau trong xã hội."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Điệp từ 'Ta làm' được lặp đi lặp lại ở đầu các dòng thơ tạo âm hưởng nhịp nhàng, tha thiết, khắc sâu ước nguyện cháy bỏng muốn hòa nhập, muốn dâng hiến thầm lặng 'một mùa xuân nho nhỏ' của thi nhân cho mùa xuân lớn của cuộc đời chung."
      },
      {
        "id": "lit_top_tv04",
        "topic": "Nhận diện Khởi ngữ trong câu",
        "difficulty": "Nhận biết",
        "question": "Tìm khởi ngữ trong câu sau: <em>'Về bài toán hình học này, bạn Nam đã tìm ra tới ba cách giải độc đáo.'</em>",
        "options": [
          "Về bài toán hình học này",
          "bạn Nam",
          "đã tìm ra",
          "ba cách giải độc đáo"
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Khởi ngữ là thành phần câu đứng trước chủ ngữ để nêu lên đề tài được nói đến trong câu (thường có thể kèm theo quan hệ từ 'về', 'đối với'). Ở đây 'Về bài toán hình học này' đứng trước chủ ngữ 'bạn Nam' nêu rõ đối tượng bàn luận."
      },
      {
        "id": "lit_top_tv05",
        "topic": "Nhận diện các Thành phần biệt lập (Tình thái, Phụ chú)",
        "difficulty": "Thông hiểu",
        "question": "Từ <em>'Dường như'</em> trong câu văn: <em>'Dường như thu đã về trên từng nhành cây ngọn cỏ'</em> là thành phần biệt lập nào?",
        "options": [
          "Thành phần tình thái (thể hiện cách nhìn nhận, phán đoán của người nói đối với sự việc).",
          "Thành phần cảm thán (bộc lộ cảm xúc vui buồn).",
          "Thành phần gọi đáp (dùng để duy trì giao tiếp).",
          "Thành phần phụ chú (dùng để bổ sung thêm thông tin)."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "'Dường như', 'hình như', 'chắc chắn', 'có lẽ' là các từ ngữ thuộc thành phần tình thái, dùng để thể hiện độ tin cậy và sự phỏng đoán của người nói đối với hiện tượng được diễn đạt."
      },
      {
        "id": "lit_top_tv06",
        "topic": "Biện pháp tu từ Nói giảm nói tránh",
        "difficulty": "Nhận biết",
        "question": "Câu văn nào sau đây sử dụng biện pháp tu từ Nói giảm nói tránh?",
        "options": [
          "Bác đã đi rồi sao, Bác ơi!",
          "Mồ hôi mẹ rơi như mưa trên đồng ruộng.",
          "Rừng xà nu ưỡn tấm ngực lớn của mình ra che chở cho làng.",
          "Ăn quả nhớ kẻ trồng cây."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Từ 'đi' thay thế cho từ 'mất / chết' nhằm giảm nhẹ cảm giác đau thương, mất mát tột cùng của đồng bào cả nước khi Chủ tịch Hồ Chí Minh qua đời, đồng thời thể hiện thái độ kính trọng, thiêng liêng."
      }
    ]
  },

  // -------------------------------------------------------
  // DẠNG 4: KỸ NĂNG VIẾT ĐOẠN VĂN NGHỊ LUẬN XÃ HỘI (200 CHỮ)
  // -------------------------------------------------------
  {
    "id": "lit_exam_type_doanvan_nlxh",
    "topicId": "lit_q4_doanvan_nlxh",
    "title": "Chuyên Đề Dạng 4: Kỹ Năng Viết Đoạn Văn Nghị Luận Xã Hội (200 Chữ)",
    "subject": "literature",
    "year": 2025,
    "location": "Chuyên đề",
    "isOfficial": false,
    "isSingleTopic": true,
    "badgeText": "🎯 Chuyên Đề: Dạng 4",
    "durationMinutes": 30,
    "totalQuestions": 6,
    "description": "Luyện tập 100% chuyên sâu kỹ năng làm chủ đoạn văn NLXH khoảng 200 chữ (chuẩn cấu trúc tuyển sinh vào 10): Nắm chắc bố cục 5 bước (Mở đoạn - Giải thích - Bàn luận chứng minh - Phản đề lật ngược vấn đề - Bài học nhận thức hành động), cách chọn dẫn chứng thời sự và tránh bẫy tách đoạn.",
    "questions": [
      {
        "id": "lit_top_nlxh01",
        "topic": "Quy định hình thức cấu trúc đoạn văn 200 chữ",
        "difficulty": "Nhận biết",
        "question": "Quy tắc hình thức QUAN TRỌNG NHẤT khi làm bài viết 'đoạn văn nghị luận xã hội khoảng 200 chữ' trong đề thi vào 10 là gì?",
        "options": [
          "Chỉ được viết DUY NHẤT một đoạn văn hoàn chỉnh (bắt đầu viết hoa lùi đầu dòng và kết thúc bằng dấu chấm xuống dòng, tuyệt đối không tự ý ngắt thành nhiều đoạn nhỏ).",
          "Phải chia rõ ràng thành 3 đoạn văn riêng biệt: Mở đoạn, Thân đoạn và Kết đoạn.",
          "Càng viết dài càng tốt, không cần bận tâm dung lượng khoảng 200 chữ.",
          "Không được đưa dẫn chứng thực tế vì sợ bị lạc đề."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Bẫy trừ điểm nặng nề nhất: Đề bài yêu cầu viết ĐOẠN VĂN thì học sinh chỉ được viết một khối đoạn văn duy nhất từ chữ đầu tiên đến dấu chấm kết bài. Nếu học sinh xuống dòng ngắt đoạn sẽ bị giám khảo trừ điểm hình thức nghiêm trọng (từ 0.5 đến 1.0 điểm)."
      },
      {
        "id": "lit_top_nlxh02",
        "topic": "Bố cục logic 5 bước của đoạn văn NLXH đạt điểm 9-10",
        "difficulty": "Thông hiểu",
        "question": "Trình tự triển khai logic và chặt chẽ nhất của đoạn văn NLXH 200 chữ gồm những bước nào?",
        "options": [
          "Mở đoạn (dẫn dắt nêu vấn đề) -> Giải thích ngắn gọn -> Bàn luận & Dẫn chứng tiêu biểu -> Mở rộng lật ngược vấn đề (phản đề) -> Bài học nhận thức & hành động.",
          "Kể một câu chuyện thật dài -> Nêu bài học -> Kết thúc.",
          "Giải thích định nghĩa -> Trích dẫn bài thơ dài -> Khuyên nhủ mọi người.",
          "Phê phán xã hội gay gắt -> Nêu ý kiến cá nhân -> Đóng bài."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Bố cục 5 bước vàng: 1) Mở đoạn: Nêu trực tiếp vấn đề cần nghị luận (1 câu); 2) Giải thích từ khóa (1-2 câu); 3) Bàn luận ý nghĩa/vai trò kèm 1 dẫn chứng sắc bén (4-5 câu); 4) Lật ngược vấn đề phê phán biểu hiện tiêu cực (1-2 câu); 5) Bài học nhận thức và hành động của bản thân (2 câu)."
      },
      {
        "id": "lit_top_nlxh03",
        "topic": "Tiêu chí lựa chọn dẫn chứng tiêu biểu trong đoạn văn NLXH",
        "difficulty": "Thông hiểu",
        "question": "Khi bàn luận về tinh thần vượt khó vươn lên trong cuộc sống, dẫn chứng nào sau đây được coi là TIÊU BIỂU và THUYẾT PHỤC nhất?",
        "options": [
          "Thầy giáo Nguyễn Ngọc Ký - người liệt cả hai tay nhưng kiên trì luyện viết chữ bằng chân để trở thành nhà giáo ưu tú truyền cảm hứng cho nhiều thế hệ học sinh.",
          "Bạn Nam cùng lớp của em thỉnh thoảng có cố gắng học bài.",
          "Một nhân vật không rõ tên tuổi được nghe kể mơ hồ trên mạng xã hội.",
          "Một anh hùng trong phim kiếm hiệp giả tưởng."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Dẫn chứng trong văn NLXH phải là người thật, việc thật, có tên tuổi cụ thể, được xã hội thừa nhận rộng rãi và mang tính truyền cảm hứng mạnh mẽ như thầy Nguyễn Ngọc Ký, kình ngư Ánh Viên, hay các tấm gương y bác sĩ tuyến đầu chống dịch."
      },
      {
        "id": "lit_top_nlxh04",
        "topic": "Kỹ thuật phản đề mở rộng vấn đề (chìa khóa lấy điểm sáng tạo)",
        "difficulty": "Vận dụng",
        "question": "Trong đoạn văn nghị luận về 'Lòng khiêm tốn', câu văn nào sau đây thể hiện bước PHẢN ĐỀ (lật ngược vấn đề) xuất sắc nhất?",
        "options": [
          "Tuy nhiên, khiêm tốn không đồng nghĩa với tự ti, nhút nhát hay hạ thấp giá trị bản thân, mà là thái độ nhìn nhận đúng năng lực để không ngừng học hỏi và hoàn thiện.",
          "Khiêm tốn là đức tính tốt đẹp ai cũng phải rèn luyện mỗi ngày.",
          "Mọi người trong xã hội đều phải khiêm tốn với cấp trên của mình.",
          "Nếu không khiêm tốn thì chúng ta sẽ bị bạn bè chê cười."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Bước phản đề sâu sắc đòi hỏi thí sinh phải phân biệt được ranh giới mong manh giữa khái niệm đang bàn với khái niệm tiêu cực dễ nhầm lẫn: khiêm tốn chân chính khác với tự ti hèn nhát, tự tin khác với kiêu ngạo tự phụ."
      },
      {
        "id": "lit_top_nlxh05",
        "topic": "Bài học hành động thiết thực cho bản thân",
        "difficulty": "Thông hiểu",
        "question": "Phần 'Bài học nhận thức và hành động' ở cuối đoạn văn NLXH cần tránh lỗi sai nào sau đây?",
        "options": [
          "Kêu gọi chung chung, sáo rỗng kiểu khẩu hiệu hô hào ('tất cả chúng ta hãy...', 'nhân loại cần phải...') mà không liên hệ hành động cụ thể của bản thân học sinh.",
          "Nêu hành động tự giác học tập và rèn luyện đạo đức mỗi ngày.",
          "Xác định rõ ràng mục tiêu phấn đấu trong kỳ thi tuyển sinh vào 10.",
          "Biết lắng nghe và sửa chữa những sai sót của chính mình."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Giám khảo đánh giá cao tính chân thành, thực tế. Tránh biến đoạn văn thành bản hiệu triệu sáo rỗng; học sinh cần xác định: nhận thức được điều gì và sẽ làm gì cụ thể ngay từ hôm nay."
      },
      {
        "id": "lit_top_nlxh06",
        "topic": "Kỹ năng mở đoạn trực tiếp, ấn tượng",
        "difficulty": "Thông hiểu",
        "question": "Để tiết kiệm dung lượng 200 chữ cho phần thân đoạn, cách mở đoạn nào sau đây là TỐI ƯU nhất?",
        "options": [
          "Mở đoạn trực tiếp: Đi thẳng vào vấn đề nghị luận trong đúng 1 câu văn súc tích, giàu hình ảnh.",
          "Dẫn dắt dài dòng kể về lịch sử loài người từ thời nguyên thủy đến nay.",
          "Trích dẫn 3 câu danh ngôn khác nhau rồi mới bắt đầu bài viết.",
          "Phân tích hoàn cảnh sống của gia đình mình trước khi vào đề."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Với dung lượng khắt khe 200 chữ (khoảng 2/3 trang giấy thi), mở đoạn trực tiếp trong 1-2 câu là giải pháp tối ưu giúp thí sinh không bị cạn thời gian và dành trọn dung lượng cho việc bàn luận, chứng minh sâu sắc."
      }
    ]
  },

  // -------------------------------------------------------
  // DẠNG 5: KỸ NĂNG LÀM BÀI VĂN NGHỊ LUẬN VĂN HỌC
  // -------------------------------------------------------
  {
    "id": "lit_exam_type_baivan_nlvh",
    "topicId": "lit_q5_baivan_nlvh",
    "title": "Chuyên Đề Dạng 5: Kỹ Năng Viết Bài Văn Nghị Luận Văn Học (Câu 4 - 5 Điểm)",
    "subject": "literature",
    "year": 2025,
    "location": "Chuyên đề",
    "isOfficial": false,
    "isSingleTopic": true,
    "badgeText": "🎯 Chuyên Đề: Dạng 5",
    "durationMinutes": 35,
    "totalQuestions": 6,
    "description": "Luyện tập 100% chuyên sâu kỹ năng chinh phục câu Nghị luận văn học (chiếm 40-50% tổng điểm bài thi): Lập dàn ý phân tích đoạn thơ / nhân vật truyện, kỹ năng bổ dọc - bổ ngang ngữ liệu, liên hệ so sánh mở rộng và đánh giá giá trị hiện thực, nhân đạo.",
    "questions": [
      {
        "id": "lit_top_nlvh01",
        "topic": "Kỹ năng mở bài bài văn NLVH gián tiếp ấn tượng",
        "difficulty": "Thông hiểu",
        "question": "Một mở bài bài văn NLVH đạt điểm cao cần đảm bảo tối thiểu những yếu tố cốt lõi nào?",
        "options": [
          "Giới thiệu tác giả, hoàn cảnh/phong cách sáng tác, tên tác phẩm và trích dẫn chính xác vấn đề nghị luận (hoặc đoạn thơ/nhân vật cần phân tích).",
          "Chỉ cần chép lại toàn bộ bài thơ mà không cần giới thiệu tác giả.",
          "Tóm tắt toàn bộ cốt truyện từ đầu đến cuối tác phẩm.",
          "Bày tỏ cảm xúc yêu thích mà không nhắc tên tác giả."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Mở bài bắt buộc phải có 3 yếu tố: 1) Tác giả & vị trí văn học; 2) Tác phẩm & hoàn cảnh sáng tác; 3) Vấn đề nghị luận cụ thể (đoạn trích/nhân vật). Thiếu trích dẫn vấn đề nghị luận là lỗi mất điểm mở bài nghiêm trọng."
      },
      {
        "id": "lit_top_nlvh02",
        "topic": "Phương pháp phân tích thơ: Tránh lỗi diễn xuôi bài thơ",
        "difficulty": "Thông hiểu",
        "question": "Khi phân tích một đoạn thơ, phương pháp nào giúp học sinh TRÁNH lỗi 'diễn xuôi lại bài thơ thành văn xuôi'?",
        "options": [
          "Bám sát từng tín hiệu nghệ thuật (từ ngữ đắt giá, nhịp điệu, hình ảnh ẩn dụ, biện pháp tu từ) để chỉ ra giá trị tư tưởng và cảm xúc của tác giả ẩn sau câu chữ.",
          "Kể lại nội dung đoạn thơ bằng từ ngữ thông thường của mình.",
          "Bỏ qua các biện pháp nghệ thuật vì chỉ cần nêu nội dung chính.",
          "Chỉ tập trung phân tích tiểu sử cuộc đời nhà thơ."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Thơ là nghệ thuật của ngôn từ. Phân tích thơ chuẩn mực phải đi từ hình thức nghệ thuật (nhịp điệu, ngắt nhịp, vần, từ ngữ gợi hình gợi cảm, biện pháp tu từ) rồi mới thấu thị đến tầng ý nghĩa nội dung và chiều sâu cảm xúc của nhà thơ."
      },
      {
        "id": "lit_top_nlvh03",
        "topic": "Phương pháp phân tích nhân vật trong tác phẩm truyện",
        "difficulty": "Thông hiểu",
        "question": "Khi làm bài văn phân tích một nhân vật trong truyện ngắn (như anh thanh niên, bé Thu, ông Hai), các bình diện nào cần được khai thác?",
        "options": [
          "Lai lịch, hoàn cảnh sống, ngoại hình, hành động, lời nói, diễn biến tâm trạng nội tâm và mối quan hệ với các nhân vật khác.",
          "Chỉ cần chép lại lời thoại của nhân vật trong truyện.",
          "Chỉ phân tích tên gọi của nhân vật.",
          "So sánh nhân vật với các nhân vật trong phim truyền hình."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Hệ thống luận điểm phân tích nhân vật hoàn chỉnh: 1) Hoàn cảnh xuất thân và bối cảnh sống; 2) Ngoại hình và cử chỉ hành động; 3) Ngôn ngữ đối thoại và độc thoại nội tâm; 4) Phẩm chất tính cách tiêu biểu; 5) Nghệ thuật xây dựng nhân vật của tác giả."
      },
      {
        "id": "lit_top_nlvh04",
        "topic": "Kỹ thuật liên hệ so sánh mở rộng để bứt phá điểm 9-10",
        "difficulty": "Vận dụng",
        "question": "Khi phân tích hình tượng người lính nông dân trong bài thơ 'Đồng chí' của Chính Hữu, việc liên hệ với bài thơ 'Bài thơ về tiểu đội xe không kính' của Phạm Tiến Duật có tác dụng gì?",
        "options": [
          "Làm nổi bật nét tiếp nối và phát triển vẻ đẹp của người lính qua hai thời kỳ kháng chiến: từ người lính chống Pháp mộc mạc gian lao đến người lính chống Mỹ trẻ trung, sôi nổi, ngạo nghễ.",
          "Chứng minh rằng người lính thời chống Mỹ khỏe hơn thời chống Pháp.",
          "Làm cho bài văn dài hơn gấp đôi.",
          "Phê phán sự thiếu thốn của quân đội thời kỳ đầu."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Liên hệ mở rộng là điểm cộng sáng tạo tuyệt vời: đặt hai thế hệ người lính bên cạnh nhau giúp bài viết có chiều sâu lịch sử văn học, làm sáng rõ vẻ đẹp trường tồn và sự trưởng thành của chủ nghĩa anh hùng cách mạng Việt Nam."
      },
      {
        "id": "lit_top_nlvh05",
        "topic": "Đánh giá giá trị hiện thực và giá trị nhân đạo trong kết bài",
        "difficulty": "Thông hiểu",
        "question": "Đoạn văn kết bài của bài văn NLVH cần đảm bảo nhiệm vụ gì?",
        "options": [
          "Khái quát lại giá trị nội dung và nghệ thuật tiêu biểu của tác phẩm, khẳng định sức sống lâu bền của tác phẩm trong lòng độc giả và nêu ấn tượng cá nhân.",
          "Nêu lại toàn bộ các dẫn chứng đã phân tích ở thân bài.",
          "Đưa ra các câu hỏi mở mà không giải quyết vấn đề.",
          "Chỉ viết 1 dòng ngắn gọn 'Bài thơ rất hay'."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Kết bài là tiếng vang đọng lại: cần tổng kết nâng tầm giá trị tác phẩm (giá trị hiện thực và nhân đạo), vị trí của tác phẩm trong sự nghiệp nhà văn và bài học thẩm mỹ cho bạn đọc hôm nay."
      },
      {
        "id": "lit_top_nlvh06",
        "topic": "Lỗi sai diễn đạt cần tuyệt đối tránh khi làm bài văn NLVH",
        "difficulty": "Nhận biết",
        "question": "Lỗi diễn đạt nào sau đây làm thí sinh bị trừ điểm nặng nhất trong bài thi tuyển sinh vào 10?",
        "options": [
          "Diễn đạt lủng củng, dùng sai từ ngữ chính trị/triết học, sai kiến thức cơ bản về tác giả tác phẩm và viết sai chính tả tên nhân vật.",
          "Dùng từ ngữ gợi cảm xúc trong sáng.",
          "Sử dụng các câu văn chuyển đoạn mượt mà.",
          "Trích dẫn thơ đúng nguyên văn chữ trong SGK."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Viết sai tên tác giả, tên nhân vật, sai lệch bối cảnh lịch sử hoặc dùng sai thuật ngữ là những lỗi sai chí mạng cho thấy học sinh hổng kiến thức căn bản, làm mất uy tín toàn bộ bài viết."
      }
    ]
  },

  // -------------------------------------------------------
  // DẠNG 6: SỔ TAY TÁC GIẢ, TÁC PHẨM & BỐI CẢNH LỊCH SỬ LỚP 9
  // -------------------------------------------------------
  {
    "id": "lit_exam_type_sotay_tacgia_tacpham",
    "topicId": "lit_q6_sotay_tacgia_tacpham",
    "title": "Chuyên Đề Dạng 6: Sổ Tay Kiến Thức Tác Giả, Tác Phẩm Lớp 9 Trọng Tâm",
    "subject": "literature",
    "year": 2025,
    "location": "Chuyên đề",
    "isOfficial": false,
    "isSingleTopic": true,
    "badgeText": "🎯 Chuyên Đề: Dạng 6",
    "durationMinutes": 25,
    "totalQuestions": 6,
    "description": "Luyện tập 100% chuyên sâu sổ tay kiến thức tác giả - tác phẩm chuẩn lớp 9 thi vào 10: Hoàn cảnh sáng tác, xuất xứ, năm ra đời, phong cách nghệ thuật và ý nghĩa nhan đề của các kiệt tác văn học: Mùa xuân nho nhỏ, Viếng lăng Bác, Đồng chí, Lặng lẽ Sa Pa, Chiếc lược ngà và Làng.",
    "questions": [
      {
        "id": "lit_top_st01",
        "topic": "Hoàn cảnh sáng tác bài thơ 'Mùa xuân nho nhỏ' của Thanh Hải",
        "difficulty": "Nhận biết",
        "question": "Bài thơ <em>'Mùa xuân nho nhỏ'</em> của Thanh Hải được sáng tác trong hoàn cảnh đặc biệt nào?",
        "options": [
          "Tháng 11 năm 1980, không bao lâu trước khi nhà thơ qua đời, khi ông đang nằm trên giường bệnh tại Bệnh viện Trung ương Huế.",
          "Năm 1975, ngay sau ngày đất nước hoàn toàn thống nhất non sông.",
          "Năm 1969, trong những ngày đau thương khi Chủ tịch Hồ Chí Minh từ trần.",
          "Năm 1986, thời kỳ đầu đất nước bước vào công cuộc đổi mới."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Bài thơ được viết vào tháng 11 năm 1980, trên giường bệnh những ngày cuối đời của Thanh Hải. Hoàn cảnh đặc biệt ấy càng làm ngời sáng tấm lòng lạc quan, yêu đời tha thiết và khát vọng cống hiến cao đẹp, trong ngần của nhà thơ."
      },
      {
        "id": "lit_top_st02",
        "topic": "Xuất xứ và bối cảnh sáng tác bài thơ 'Viếng lăng Bác' của Viễn Phương",
        "difficulty": "Nhận biết",
        "question": "Bài thơ <em>'Viếng lăng Bác'</em> của Viễn Phương ra đời vào thời điểm lịch sử nào?",
        "options": [
          "Tháng 4 năm 1976, sau khi cuộc kháng chiến chống Mỹ thắng lợi, đất nước thống nhất và lăng Chủ tịch Hồ Chí Minh vừa khánh thành.",
          "Năm 1969, ngay trong lễ tang của Chủ tịch Hồ Chí Minh.",
          "Năm 1954, sau chiến thắng lịch sử Điện Biên Phủ lừng lẫy.",
          "Năm 1985, kỷ niệm 10 năm giải phóng miền Nam."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Tháng 4/1976, sau ngày giải phóng miền Nam thống nhất non sông, lăng Bác vừa khánh thành, Viễn Phương là một trong những người con đồng bào miền Nam đầu tiên được ra thủ đô viếng Bác. Bài thơ in trong tập 'Như mây mùa xuân' (1978)."
      },
      {
        "id": "lit_top_st03",
        "topic": "Năm sáng tác và xuất xứ bài thơ 'Đồng chí' của Chính Hữu",
        "difficulty": "Nhận biết",
        "question": "Bài thơ <em>'Đồng chí'</em> của Chính Hữu được sáng tác vào năm nào?",
        "options": [
          "Đầu năm 1948, sau khi tác giả cùng đồng đội tham gia chiến dịch Việt Bắc thu đông 1947.",
          "Năm 1954, sau chiến dịch Điện Biên Phủ.",
          "Năm 1945, ngay sau Cách mạng tháng Tám.",
          "Năm 1968, thời kỳ chiến tranh cục bộ."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Bài thơ sáng tác đầu năm 1948, thời kỳ đầu của cuộc kháng chiến chống thực dân Pháp gian nan thiếu thốn, in trong tập thơ 'Đầu súng trăng treo' (1966), khẳng định tình đồng chí thiêng liêng như cội nguồn sức mạnh chiến đấu."
      },
      {
        "id": "lit_top_st04",
        "topic": "Bối cảnh sáng tác truyện ngắn 'Lặng lẽ Sa Pa' của Nguyễn Thành Long",
        "difficulty": "Thông hiểu",
        "question": "Truyện ngắn <em>'Lặng lẽ Sa Pa'</em> là kết quả từ chuyến đi thực tế nào của Nguyễn Thành Long?",
        "options": [
          "Chuyến đi thực tế Lào Cai vào mùa hè năm 1970 của tác giả, ca ngợi những con người lao động thầm lặng cống hiến cho công cuộc xây dựng CNXH ở miền Bắc.",
          "Chuyến đi công tác vào miền Nam thời kỳ kháng chiến chống Mỹ năm 1968.",
          "Chuyến đi thực tế tại vùng mỏ than Quảng Ninh năm 1965.",
          "Chuyến đi thăm đồng bào vùng cao Tây Bắc năm 1954."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Tác phẩm ra đời sau chuyến đi thực tế Lào Cai mùa hè năm 1970 của nhà văn, in trong tập 'Giữa trong xanh' (1972). Tác phẩm ca ngợi vẻ đẹp của những người lao động bình dị, say mê công việc như anh thanh niên làm khí tượng trên đỉnh Yên Sơn."
      },
      {
        "id": "lit_top_st05",
        "topic": "Ý nghĩa nhan đề truyện ngắn 'Chiếc lược ngà' của Nguyễn Quang Sáng",
        "difficulty": "Thông hiểu",
        "question": "Nhan đề <em>'Chiếc lược ngà'</em> mang ý nghĩa biểu tượng sâu sắc nhất cho điều gì?",
        "options": [
          "Kỷ vật thiêng liêng kết tinh toàn bộ tình phụ tử sâu nặng, bất tử của anh Sáu dành cho bé Thu và là biểu tượng cho nỗi đau mất mát do chiến tranh gây ra.",
          "Món đồ trang sức đắt tiền của phụ nữ Nam Bộ.",
          "Món quà bình thường mua từ chợ kháng chiến.",
          "Biểu tượng cho sự khéo tay của người thợ thủ công rừng U Minh."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Chiếc lược ngà là cây cầu nối tâm linh giữa anh Sáu và bé Thu. Chiếc lược là hiện thân của tình cha con thiêng liêng, niềm mong ước gặp lại con cháy bỏng và lời trăn trối cuối cùng của người cha trước lúc hy sinh."
      },
      {
        "id": "lit_top_st06",
        "topic": "Bối cảnh và diễn biến tâm trạng nhân vật ông Hai trong truyện ngắn 'Làng'",
        "difficulty": "Thông hiểu",
        "question": "Truyện ngắn <em>'Làng'</em> của Kim Lân được viết vào thời kỳ nào và khắc họa thành công điều gì ở người nông dân?",
        "options": [
          "Thời kỳ đầu cuộc kháng chiến chống Pháp (1948), khắc họa tình yêu làng quê tha thiết đã thống nhất hòa quyện mãnh liệt với lòng yêu nước và tinh thần theo kháng chiến của người nông dân.",
          "Thời kỳ kháng chiến chống Mỹ (1968), ca ngợi tinh thần sản xuất chi viện cho tiền tuyến.",
          "Thời kỳ phong kiến trước năm 1945, phản ánh nỗi khổ cực vì sưu thuế.",
          "Thời kỳ đổi mới xây dựng nông thôn mới hiện đại."
        ],
        "correctIndex": 0,
        "correct": 0,
        "explanation": "Truyện viết năm 1948 khi Kim Lân đang ở vùng tản cư kháng chiến. Tác phẩm thể hiện bước ngoặt nhận thức mới mẻ của người nông dân thời đại cách mạng: 'Làng thì yêu thật, nhưng làng theo Tây thì phải thù' - tình yêu làng được đặt trong tình yêu Tổ quốc."
      }
    ]
  }
];

// Tự động tích hợp vào hệ thống Đề thi Ngữ Văn chung
if (window.LITERATURE_EXAMS) {
  window.LITERATURE_EXAMS = window.LITERATURE_EXAMS.concat(window.LITERATURE_TOPIC_EXAMS);
}
