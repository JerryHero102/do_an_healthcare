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

    </div>
  );
};

export default Body;
