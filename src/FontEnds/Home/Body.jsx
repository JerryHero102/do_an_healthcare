import "./Css/Body.css";

const Body = () => {
  return (
    <div className="body-wrapper">

      {/* ✅ Banner chính */}
      <section className="banner">
        <h2>Chăm sóc sức khỏe của bạn là sứ mệnh của chúng tôi</h2>
        <p>Đặt lịch khám trực tuyến nhanh chóng - Theo dõi thông tin sức khỏe mọi lúc</p>
        <button className="btn-primary">
          Đặt lịch ngay
        </button>
      </section>

      {/* ✅ Giới thiệu ngắn */}
      <section className="intro">
        <h3>Healthy System - Phòng khám tư nhân hiện đại</h3>
        <p>
          Chúng tôi cung cấp các dịch vụ khám chữa bệnh với đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại,
          hệ thống đặt lịch trực tuyến tiện lợi và theo dõi hồ sơ bệnh án mọi lúc mọi nơi.
        </p>
      </section>

      {/* ✅ Danh sách dịch vụ/chuyên khoa */}
      <section className="section">
        <h3>Chuyên khoa nổi bật</h3>
        <div className="grid-4">
          {["Nội khoa", "Tai Mũi Họng", "Xét nghiệm - Sinh hóa", "Chẩn đoán hình ảnh"].map((service, index) => (
            <div key={index} className="box">
              <h4>{service}</h4>
              <p>Xem chi tiết dịch vụ →</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Danh sách chi nhánh */}
      <section className="branch-section">
        <h3>Hệ thống chi nhánh</h3>
        <div className="grid-3">
          {[
            { name: "Cơ sở Quận 1", address: "123 Nguyễn Huệ, Quận 1, TP.HCM", hotline: "0901 234 567" },
            { name: "Cơ sở Quận 7", address: "456 Lê Văn Lương, Quận 7, TP.HCM", hotline: "0902 345 678" },
            { name: "Cơ sở Hà Nội", address: "789 Trần Duy Hưng, Cầu Giấy, Hà Nội", hotline: "0903 456 789" }
          ].map((branch, index) => (
            <div key={index} className="box">
              <h4>{branch.name}</h4>
              <p>{branch.address}</p>
              <p className="hotline">📞 Hotline: {branch.hotline}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Đội ngũ bác sĩ */}
      <section className="section">
        <h3>Đội ngũ bác sĩ chuyên môn cao</h3>
        <div className="grid-4">
          {[
            { name: "BS. Nguyễn Văn A", specialty: "Nội khoa", exp: "10 năm kinh nghiệm" },
            { name: "BS. Trần Thị B", specialty: "Tai Mũi Họng", exp: "8 năm kinh nghiệm" },
            { name: "BS. Lê Hoàng C", specialty: "Chẩn đoán hình ảnh", exp: "12 năm kinh nghiệm" },
            { name: "BS. Phạm Thu D", specialty: "Xét nghiệm - Sinh hóa", exp: "9 năm kinh nghiệm" }
          ].map((doctor, index) => (
            <div key={index} className="box">
              <h4>{doctor.name}</h4>
              <p>🔹 {doctor.specialty}</p>
              <p>🎓 {doctor.exp}</p>
              <button className="link-btn">Xem hồ sơ →</button>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Trang thiết bị */}
      <section className="equipment-section">
        <h3>Trang thiết bị chẩn đoán & điều trị hiện đại</h3>
        <div className="grid-4">
          {[
            { name: "Máy siêu âm 5D Doppler", desc: "Chẩn đoán hình ảnh độ chính xác cao" },
            { name: "Máy xét nghiệm sinh hóa tự động", desc: "Cho kết quả nhanh và chính xác" },
            { name: "Máy nội soi Tai Mũi Họng", desc: "Hình ảnh sắc nét, ít xâm lấn" },
            { name: "Hệ thống X-Quang kỹ thuật số", desc: "Giảm liều tia X, an toàn cho bệnh nhân" }
          ].map((tool, index) => (
            <div key={index} className="box">
              <h4>{tool.name}</h4>
              <p>{tool.desc}</p>
              <p className="link-btn">Xem chi tiết →</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Body;
