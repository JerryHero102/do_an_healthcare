import Header from '../Home/Header';
import Footer from '../Home/Footer';

const ChuyenGia = () => {
  return (
    <div className="w-full">
      <Header />
      
      {/* Content chính của trang Chuyên Gia */}
      <div className="min-h-screen">
        {/* Banner */}
        <section className="h-[300px] bg-[#E3FFF8] flex flex-col justify-center items-center text-center">
          <h2 className="text-[36px] font-bold text-[#2c3e50]">Đội Ngũ Chuyên Gia</h2>
          <p className="text-[18px] mt-2 text-gray-600">Bác sĩ chuyên môn cao, tận tâm với nghề nghiệp</p>
        </section>

        {/* Danh sách chuyên gia */}
        <section className="py-10 px-20">
          <h3 className="text-[28px] font-semibold mb-8 text-[#2c3e50]">Đội ngũ bác sĩ của chúng tôi</h3>
          <div className="grid grid-cols-4 gap-6">
            {[
              { 
                name: "BS. Nguyễn Văn An", 
                specialty: "Nội khoa - Tim Mạch", 
                exp: "15 năm kinh nghiệm",
                education: "Tiến sĩ Y khoa - ĐH Y Hà Nội",
                image: "👨‍⚕️"
              },
              { 
                name: "BS. Trần Thị Bích", 
                specialty: "Tai Mũi Họng", 
                exp: "12 năm kinh nghiệm",
                education: "Thạc sĩ Y khoa - ĐH Y Dược TP.HCM",
                image: "👩‍⚕️"
              },
              { 
                name: "BS. Lê Hoàng Cường", 
                specialty: "Chẩn đoán hình ảnh", 
                exp: "18 năm kinh nghiệm",
                education: "Tiến sĩ Y khoa - ĐH Y Tokyo",
                image: "👨‍⚕️"
              },
              { 
                name: "BS. Phạm Thu Dung", 
                specialty: "Xét nghiệm - Sinh hóa", 
                exp: "10 năm kinh nghiệm",
                education: "Thạc sĩ Y khoa - ĐH Y Hà Nội",
                image: "👩‍⚕️"
              },
              { 
                name: "BS. Võ Minh Khoa", 
                specialty: "Nhi Khoa", 
                exp: "14 năm kinh nghiệm",
                education: "Bác sĩ chuyên khoa II - ĐH Y Huế",
                image: "👨‍⚕️"
              },
              { 
                name: "BS. Đặng Hải Linh", 
                specialty: "Da Liễu", 
                exp: "11 năm kinh nghiệm",
                education: "Thạc sĩ Y khoa - ĐH Y Dược TP.HCM",
                image: "👩‍⚕️"
              },
              { 
                name: "BS. Ngô Thanh Minh", 
                specialty: "Thần Kinh", 
                exp: "16 năm kinh nghiệm",
                education: "Tiến sĩ Y khoa - ĐH Y Paris",
                image: "👨‍⚕️"
              },
              { 
                name: "BS. Hoàng Thị Nga", 
                specialty: "Phục hồi chức năng", 
                exp: "9 năm kinh nghiệm",
                education: "Thạc sĩ Y khoa - ĐH Y Hà Nội",
                image: "👩‍⚕️"
              }
            ].map((doctor, index) => (
              <div key={index} className="bg-white shadow-lg p-6 rounded-2xl hover:shadow-xl transition-all cursor-pointer">
                <div className="text-[72px] text-center mb-4">{doctor.image}</div>
                <h4 className="text-[19px] font-semibold text-[#2c3e50] text-center">{doctor.name}</h4>
                <p className="text-[#1e90ff] text-[15px] mt-2 text-center font-medium">🔹 {doctor.specialty}</p>
                <p className="text-gray-600 text-[14px] mt-2 text-center">🎓 {doctor.education}</p>
                <p className="text-gray-500 text-[13px] mt-1 text-center">⏱️ {doctor.exp}</p>
                <button className="w-full mt-4 bg-[#FFC419] hover:bg-[#e6ae14] text-white font-medium text-[14px] py-2 rounded-lg">
                  Đặt lịch khám
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Tại sao chọn chúng tôi */}
        <section className="py-10 px-20 bg-[#F8F9FA]">
          <h3 className="text-[28px] font-semibold mb-8 text-center text-[#2c3e50]">Tại sao chọn chúng tôi?</h3>
          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Đội ngũ chuyên môn cao",
                desc: "Bác sĩ được đào tạo bài bản tại các trường đại học y khoa hàng đầu",
                icon: "🎓"
              },
              {
                title: "Kinh nghiệm dày dặn",
                desc: "Trung bình 10+ năm kinh nghiệm thực tế trong lĩnh vực chuyên môn",
                icon: "⭐"
              },
              {
                title: "Tận tâm với bệnh nhân",
                desc: "Luôn đặt sức khỏe và sự hài lòng của bệnh nhân lên hàng đầu",
                icon: "❤️"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md text-center">
                <div className="text-[56px] mb-4">{item.icon}</div>
                <h4 className="text-[20px] font-semibold text-[#2c3e50] mb-3">{item.title}</h4>
                <p className="text-gray-600 text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ChuyenGia;

