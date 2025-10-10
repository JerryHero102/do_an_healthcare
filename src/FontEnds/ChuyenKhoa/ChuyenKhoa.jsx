import Header from '../Home/Header';
import Footer from '../Home/Footer';

const ChuyenKhoa = () => {
  return (
    <div className="w-full">
      <Header />
      
      {/* Content chính của trang Chuyên Khoa */}
      <div className="min-h-screen">
        {/* Banner */}
        <section className="h-[300px] bg-[#E3FFF8] flex flex-col justify-center items-center text-center">
          <h2 className="text-[36px] font-bold text-[#2c3e50]">Chuyên Khoa</h2>
          <p className="text-[18px] mt-2 text-gray-600">Đội ngũ chuyên khoa giàu kinh nghiệm và chuyên môn cao</p>
        </section>

        {/* Danh sách chuyên khoa */}
        <section className="py-10 px-20">
          <h3 className="text-[28px] font-semibold mb-8 text-[#2c3e50]">Các chuyên khoa của chúng tôi</h3>
          <div className="grid grid-cols-3 gap-8">
            {[
              { 
                name: "Nội khoa", 
                desc: "Chuyên điều trị các bệnh lý nội khoa như tim mạch, tiêu hóa, hô hấp",
                icon: "🫀"
              },
              { 
                name: "Tai Mũi Họng", 
                desc: "Khám và điều trị các bệnh về tai, mũi, họng với thiết bị hiện đại",
                icon: "👂"
              },
              { 
                name: "Nhi Khoa", 
                desc: "Chăm sóc sức khỏe toàn diện cho trẻ em từ sơ sinh đến 16 tuổi",
                icon: "👶"
              },
              { 
                name: "Da Liễu", 
                desc: "Điều trị các bệnh về da, tóc, móng với công nghệ tiên tiến",
                icon: "🧴"
              },
              { 
                name: "Tim Mạch", 
                desc: "Chuyên sâu về các bệnh lý tim mạch và mạch máu",
                icon: "❤️"
              },
              { 
                name: "Thần Kinh", 
                desc: "Chẩn đoán và điều trị các bệnh lý về hệ thần kinh",
                icon: "🧠"
              },
              { 
                name: "Xét nghiệm - Sinh hóa", 
                desc: "Phòng xét nghiệm hiện đại, kết quả nhanh chóng và chính xác",
                icon: "🔬"
              },
              { 
                name: "Chẩn đoán hình ảnh", 
                desc: "Trang thiết bị chẩn đoán hình ảnh tiên tiến: X-quang, siêu âm, CT",
                icon: "📷"
              },
              { 
                name: "Phục hồi chức năng", 
                desc: "Hỗ trợ phục hồi chức năng sau chấn thương và bệnh lý",
                icon: "🏥"
              }
            ].map((specialty, index) => (
              <div key={index} className="bg-white shadow-lg p-8 rounded-2xl hover:shadow-xl transition-all cursor-pointer border border-gray-100">
                <div className="text-[48px] mb-4">{specialty.icon}</div>
                <h4 className="text-[22px] font-semibold text-[#2c3e50] mb-3">{specialty.name}</h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">{specialty.desc}</p>
                <button className="mt-4 text-[#1e90ff] font-medium text-[15px] hover:underline">
                  Xem chi tiết →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Thông tin thêm */}
        <section className="py-10 px-20 bg-[#F8F9FA]">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-[26px] font-semibold mb-4 text-[#2c3e50]">Cam kết chất lượng</h3>
            <p className="text-gray-700 text-[16px] leading-relaxed">
              Với đội ngũ bác sĩ giàu kinh nghiệm, trang thiết bị hiện đại và quy trình khám chữa bệnh chuyên nghiệp, 
              chúng tôi cam kết mang đến dịch vụ y tế chất lượng cao nhất cho bệnh nhân.
            </p>
            <button className="mt-6 bg-[#FFC419] hover:bg-[#e6ae14] text-white font-semibold px-8 py-3 rounded-xl shadow-md">
              Đặt lịch khám ngay
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ChuyenKhoa;

