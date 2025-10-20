import Header from '../../Home/Header';
import Footer from '../../Home/Footer';
import styles from './KhamBenhTrucTuyen.module.css';

const KhamBenhTrucTuyen = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      {/* Nội dung chính */}
      <div className={styles.mainContent}>
        {/* Banner */}
        <section className={styles.bannerSection}>
          <h2 className={styles.bannerTitle}>Dịch vụ Khám bệnh trực tuyến</h2>
          <p className={styles.bannerSubtitle}>
            Kết nối với bác sĩ mọi lúc, mọi nơi – chăm sóc sức khỏe thuận tiện và an toàn
          </p>
        </section>

        {/* Giới thiệu */}
        <section className={styles.introSection}>
          <h3 className={styles.sectionTitle}>Giới thiệu dịch vụ</h3>
          <p className={styles.introText}>
            <strong>Khám bệnh trực tuyến</strong> là giải pháp y tế thông minh giúp bạn được tư vấn, 
            chẩn đoán và theo dõi sức khỏe ngay tại nhà thông qua video call, chat, 
            hoặc gọi điện trực tiếp với bác sĩ. Dịch vụ giúp tiết kiệm thời gian, 
            giảm rủi ro lây nhiễm và vẫn đảm bảo được tư vấn chuyên sâu từ đội ngũ y bác sĩ giàu kinh nghiệm.
          </p>
        </section>

        {/* Dịch vụ nổi bật */}
        <section className={styles.serviceSection}>
          <h3 className={styles.sectionTitle}>Các dịch vụ trực tuyến nổi bật</h3>
          <div className={styles.serviceGrid}>
            {[
              {icon: "💬", name: "Tư vấn sức khỏe qua video", desc: "Kết nối trực tiếp với bác sĩ thông qua video call an toàn, bảo mật."},
              {icon: "📋", name: "Đặt lịch khám trực tuyến", desc: "Chọn bác sĩ, chuyên khoa và thời gian phù hợp chỉ với vài thao tác."},
              {icon: "📱", name: "Chat với bác sĩ", desc: "Trao đổi nhanh các vấn đề sức khỏe, nhận tư vấn sơ bộ ngay lập tức."},
              {icon: "💊", name: "Đơn thuốc điện tử", desc: "Bác sĩ kê đơn online, gửi trực tiếp đến nhà thuốc hoặc giao thuốc tận nơi."},
              {icon: "📈", name: "Theo dõi sức khỏe định kỳ", desc: "Theo dõi kết quả, tình trạng bệnh, nhắc lịch tái khám tự động."},
              {icon: "👨‍⚕️", name: "Tư vấn chuyên khoa", desc: "Được tư vấn bởi các bác sĩ chuyên khoa đầu ngành trên toàn quốc."}
            ].map((item, i) => (
              <div key={i} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{item.icon}</div>
                <h4 className={styles.serviceName}>{item.name}</h4>
                <p className={styles.serviceDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Lợi ích */}
        <section className={styles.benefitSection}>
          <h3 className={styles.sectionTitle}>Lợi ích khi sử dụng dịch vụ</h3>
          <ul className={styles.benefitList}>
            <li>🕒 Tiết kiệm thời gian di chuyển và chờ đợi.</li>
            <li>🏠 Khám bệnh an toàn ngay tại nhà.</li>
            <li>👩‍⚕️ Được tư vấn bởi bác sĩ chuyên khoa uy tín.</li>
            <li>📱 Sử dụng dễ dàng qua điện thoại, máy tính hoặc máy tính bảng.</li>
            <li>🔒 Bảo mật tuyệt đối thông tin sức khỏe cá nhân.</li>
          </ul>
        </section>

        {/* Cam kết */}
        <section className={styles.commitSection}>
          <div className={styles.commitContainer}>
            <h3 className={styles.commitTitle}>Cam kết của chúng tôi</h3>
            <p className={styles.commitText}>
              Chúng tôi mang đến nền tảng khám bệnh trực tuyến hiện đại, 
              giúp người dân tiếp cận dịch vụ y tế chất lượng một cách nhanh chóng, 
              tiện lợi và bảo mật. Sức khỏe của bạn – trách nhiệm của chúng tôi.
            </p>
            <a href="/dat-lich-hen">
              <button className={styles.commitButton}>Đặt lịch ngay</button>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default KhamBenhTrucTuyen;
