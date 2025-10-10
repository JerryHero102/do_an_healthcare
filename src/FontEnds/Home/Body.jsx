const Body = () => {
  return (
    <div className="w-full">

      {/* ✅ Banner chính */}
      <section className="h-[400px] bg-[#E3FFF8] flex flex-col justify-center items-center text-center">
        <h2 className="text-[32px] font-bold text-[#2c3e50]">Chăm sóc sức khỏe của bạn là sứ mệnh của chúng tôi</h2>
        <p className="text-[18px] mt-2 text-gray-600">Đặt lịch khám trực tuyến nhanh chóng - Theo dõi thông tin sức khỏe mọi lúc</p>
        <button className="mt-4 bg-[#FFC419] hover:bg-[#e6ae14] text-white font-semibold px-6 py-2 rounded-xl shadow-md">
          Đặt lịch ngay
        </button>
      </section>

      {/* ✅ Giới thiệu ngắn */}
      <section className="py-10 px-20 text-center">
        <h3 className="text-[26px] font-semibold text-[#2c3e50]">Healthy System - Phòng khám tư nhân hiện đại</h3>
        <p className="mt-3 text-[16px] text-gray-600 leading-relaxed">
          Chúng tôi cung cấp các dịch vụ khám chữa bệnh với đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại,
          hệ thống đặt lịch trực tuyến tiện lợi và theo dõi hồ sơ bệnh án mọi lúc mọi nơi.
        </p>
      </section>

      {/* ✅ Danh sách dịch vụ/chuyên khoa */}
      <section className="py-10 px-20">
        <h3 className="text-[24px] font-semibold mb-5">Chuyên khoa nổi bật</h3>
        <div className="grid grid-cols-4 gap-6">
          {[
            "Nội khoa",
            "Tai Mũi Họng",
            "Xét nghiệm - Sinh hóa",
            "Chẩn đoán hình ảnh"
          ].map((service, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition-all cursor-pointer">
              <h4 className="text-[18px] font-medium text-[#2c3e50]">{service}</h4>
              <p className="text-gray-500 mt-2 text-[14px]">Xem chi tiết dịch vụ →</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Danh sách chi nhánh / cơ sở */}
<section className="py-10 px-20 bg-[#F8F9FA]">
  <h3 className="text-[24px] font-semibold mb-5 text-[#2c3e50]">Hệ thống chi nhánh</h3>
  <div className="grid grid-cols-3 gap-6">
    {[
      { name: "Cơ sở Quận 1", address: "123 Nguyễn Huệ, Quận 1, TP.HCM", hotline: "0901 234 567" },
      { name: "Cơ sở Quận 7", address: "456 Lê Văn Lương, Quận 7, TP.HCM", hotline: "0902 345 678" },
      { name: "Cơ sở Hà Nội", address: "789 Trần Duy Hưng, Cầu Giấy, Hà Nội", hotline: "0903 456 789" }
    ].map((branch, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
        <h4 className="text-[18px] font-medium text-[#2c3e50]">{branch.name}</h4>
        <p className="text-gray-600 text-[14px] mt-2">{branch.address}</p>
        <p className="text-[14px] mt-1 font-semibold text-[#2c3e50]">📞 Hotline: {branch.hotline}</p>
      </div>
    ))}
  </div>
</section>

{/* ✅ Đội ngũ bác sĩ */}
<section className="py-10 px-20">
  <h3 className="text-[24px] font-semibold mb-5 text-[#2c3e50]">Đội ngũ bác sĩ chuyên môn cao</h3>
  <div className="grid grid-cols-4 gap-6">
    {[
      { name: "BS. Nguyễn Văn A", specialty: "Nội khoa", exp: "10 năm kinh nghiệm" },
      { name: "BS. Trần Thị B", specialty: "Tai Mũi Họng", exp: "8 năm kinh nghiệm" },
      { name: "BS. Lê Hoàng C", specialty: "Chẩn đoán hình ảnh", exp: "12 năm kinh nghiệm" },
      { name: "BS. Phạm Thu D", specialty: "Xét nghiệm - Sinh hóa", exp: "9 năm kinh nghiệm" }
    ].map((doctor, index) => (
      <div key={index} className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition-all">
        <h4 className="text-[18px] font-medium text-[#2c3e50]">{doctor.name}</h4>
        <p className="text-gray-600 text-[14px] mt-1">🔹 {doctor.specialty}</p>
        <p className="text-gray-500 text-[13px] mt-1">🎓 {doctor.exp}</p>
        <button className="mt-3 text-[#1e90ff] text-[14px] hover:underline">Xem hồ sơ →</button>
      </div>
    ))}
  </div>
</section>

{/* ✅ Trang thiết bị hiện đại */}
<section className="py-10 px-20 bg-[#F8F9FA]">
  <h3 className="text-[24px] font-semibold mb-5 text-[#2c3e50]">Trang thiết bị chẩn đoán & điều trị hiện đại</h3>
  <div className="grid grid-cols-4 gap-6">
    {[
      { name: "Máy siêu âm 5D Doppler", desc: "Chẩn đoán hình ảnh độ chính xác cao" },
      { name: "Máy xét nghiệm sinh hóa tự động", desc: "Cho kết quả nhanh và chính xác" },
      { name: "Máy nội soi Tai Mũi Họng", desc: "Hình ảnh sắc nét, ít xâm lấn" },
      { name: "Hệ thống X-Quang kỹ thuật số", desc: "Giảm liều tia X, an toàn cho bệnh nhân" }
    ].map((tool, index) => (
      <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
        <h4 className="text-[18px] font-medium text-[#2c3e50]">{tool.name}</h4>
        <p className="text-gray-600 text-[14px] mt-2">{tool.desc}</p>
        <p className="text-[13px] text-[#1e90ff] mt-2 cursor-pointer hover:underline">Xem chi tiết →</p>
      </div>
    ))}
  </div>
</section>


    </div>
  );
};

export default Body;
