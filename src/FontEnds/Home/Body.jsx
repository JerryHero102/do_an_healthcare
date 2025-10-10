import styles from './Body.module.css';

const Body = () => {
  return (
    <div className={styles.wrapper}>

      {/* ✅ Banner chính */}
      <section className={styles.bannerSection}>
        <h2 className={styles.bannerTitle}>Chăm sóc sức khỏe của bạn là sứ mệnh của chúng tôi</h2>
        <p className={styles.bannerSubtitle}>Đặt lịch khám trực tuyến nhanh chóng - Theo dõi thông tin sức khỏe mọi lúc</p>
        <button className={styles.bannerButton}>
          Đặt lịch ngay
        </button>
      </section>

      {/* ✅ Giới thiệu ngắn */}
      <section className={styles.introSection}>
        <h3 className={styles.introTitle}>Healthy System - Phòng khám tư nhân hiện đại</h3>
        <p className={styles.introText}>
          Chúng tôi cung cấp các dịch vụ khám chữa bệnh với đội ngũ bác sĩ chuyên môn cao, trang thiết bị hiện đại,
          hệ thống đặt lịch trực tuyến tiện lợi và theo dõi hồ sơ bệnh án mọi lúc mọi nơi.
        </p>
      </section>

      {/* ✅ Danh sách dịch vụ/chuyên khoa */}
      <section className={styles.servicesSection}>
        <h3 className={styles.sectionTitle}>Chuyên khoa nổi bật</h3>
        <div className={styles.servicesGrid}>
          {[
            "Nội khoa",
            "Tai Mũi Họng",
            "Xét nghiệm - Sinh hóa",
            "Chẩn đoán hình ảnh"
          ].map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <h4 className={styles.serviceTitle}>{service}</h4>
              <p className={styles.serviceLink}>Xem chi tiết dịch vụ →</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Danh sách chi nhánh / cơ sở */}
      <section className={styles.branchesSection}>
        <h3 className={styles.sectionTitleWithColor}>Hệ thống chi nhánh</h3>
        <div className={styles.branchesGrid}>
          {[
            { name: "Cơ sở Quận 1", address: "123 Nguyễn Huệ, Quận 1, TP.HCM", hotline: "0901 234 567" },
            { name: "Cơ sở Quận 7", address: "456 Lê Văn Lương, Quận 7, TP.HCM", hotline: "0902 345 678" },
            { name: "Cơ sở Hà Nội", address: "789 Trần Duy Hưng, Cầu Giấy, Hà Nội", hotline: "0903 456 789" }
          ].map((branch, index) => (
            <div key={index} className={styles.branchCard}>
              <h4 className={styles.branchName}>{branch.name}</h4>
              <p className={styles.branchAddress}>{branch.address}</p>
              <p className={styles.branchHotline}>📞 Hotline: {branch.hotline}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Đội ngũ bác sĩ */}
      <section className={styles.doctorsSection}>
        <h3 className={styles.sectionTitleWithColor}>Đội ngũ bác sĩ chuyên môn cao</h3>
        <div className={styles.doctorsGrid}>
          {[
            { name: "BS. Nguyễn Văn A", specialty: "Nội khoa", exp: "10 năm kinh nghiệm" },
            { name: "BS. Trần Thị B", specialty: "Tai Mũi Họng", exp: "8 năm kinh nghiệm" },
            { name: "BS. Lê Hoàng C", specialty: "Chẩn đoán hình ảnh", exp: "12 năm kinh nghiệm" },
            { name: "BS. Phạm Thu D", specialty: "Xét nghiệm - Sinh hóa", exp: "9 năm kinh nghiệm" }
          ].map((doctor, index) => (
            <div key={index} className={styles.doctorCard}>
              <h4 className={styles.doctorName}>{doctor.name}</h4>
              <p className={styles.doctorSpecialty}>🔹 {doctor.specialty}</p>
              <p className={styles.doctorExp}>🎓 {doctor.exp}</p>
              <button className={styles.doctorButton}>Xem hồ sơ →</button>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Trang thiết bị hiện đại */}
      <section className={styles.equipmentSection}>
        <h3 className={styles.sectionTitleWithColor}>Trang thiết bị chẩn đoán & điều trị hiện đại</h3>
        <div className={styles.equipmentGrid}>
          {[
            { name: "Máy siêu âm 5D Doppler", desc: "Chẩn đoán hình ảnh độ chính xác cao" },
            { name: "Máy xét nghiệm sinh hóa tự động", desc: "Cho kết quả nhanh và chính xác" },
            { name: "Máy nội soi Tai Mũi Họng", desc: "Hình ảnh sắc nét, ít xâm lấn" },
            { name: "Hệ thống X-Quang kỹ thuật số", desc: "Giảm liều tia X, an toàn cho bệnh nhân" }
          ].map((tool, index) => (
            <div key={index} className={styles.equipmentCard}>
              <h4 className={styles.equipmentName}>{tool.name}</h4>
              <p className={styles.equipmentDesc}>{tool.desc}</p>
              <p className={styles.equipmentLink}>Xem chi tiết →</p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default Body;
