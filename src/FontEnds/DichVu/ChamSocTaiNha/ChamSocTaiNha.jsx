import Header from '../../Home/Header';
import Footer from '../../Home/Footer';
import styles from './ChamSocTaiNha.module.css';

const ChamSocTaiNha = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      {/* Nội dung chính */}
      <div className={styles.mainContent}>
        {/* Banner */}
        <section className={styles.bannerSection}>
          <h2 className={styles.bannerTitle}>Dịch vụ Chăm sóc tại nhà</h2>
          <p className={styles.bannerSubtitle}>
            Chăm sóc sức khỏe chu đáo, tận nơi – vì sự an tâm của bạn và gia đình
          </p>
        </section>

        {/* Giới thiệu */}
        <section className={styles.introSection}>
          <h3 className={styles.sectionTitle}>Giới thiệu dịch vụ</h3>
          <p className={styles.introText}>
            Dịch vụ <strong>Chăm sóc tại nhà</strong> mang đến giải pháp y tế tiện lợi cho bệnh nhân 
            không thể đến bệnh viện hoặc cần được theo dõi sức khỏe thường xuyên tại nhà. 
            Đội ngũ điều dưỡng và bác sĩ chuyên nghiệp sẽ đến tận nơi để thăm khám, tiêm truyền, thay băng, 
            đo huyết áp, xét nghiệm và nhiều dịch vụ khác. 
            Chúng tôi giúp bạn tiết kiệm thời gian, chi phí và nhận được sự chăm sóc tận tâm nhất.
          </p>
        </section>

        {/* Dịch vụ cung cấp */}
        <section className={styles.serviceSection}>
          <h3 className={styles.sectionTitle}>Các dịch vụ tại nhà nổi bật</h3>
          <div className={styles.serviceGrid}>
            {[
              {icon: "💉", name: "Tiêm truyền tại nhà", desc: "Thực hiện bởi điều dưỡng có chứng chỉ hành nghề."},
              {icon: "🩺", name: "Khám bệnh tại nhà", desc: "Bác sĩ đến tận nơi để chẩn đoán và kê đơn."},
              {icon: "❤️", name: "Theo dõi bệnh mãn tính", desc: "Hỗ trợ theo dõi và chăm sóc bệnh nhân dài hạn."},
              {icon: "👵", name: "Chăm sóc người cao tuổi", desc: "Theo dõi sức khỏe, hỗ trợ sinh hoạt hàng ngày."},
              {icon: "🩹", name: "Thay băng – cắt chỉ", desc: "Thực hiện an toàn, vô trùng ngay tại nhà."}
            ].map((item, i) => (
              <div key={i} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{item.icon}</div>
                <h4 className={styles.serviceName}>{item.name}</h4>
                <p className={styles.serviceDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cam kết */}
        <section className={styles.commitSection}>
          <div className={styles.commitContainer}>
            <h3 className={styles.commitTitle}>Cam kết của chúng tôi</h3>
            <p className={styles.commitText}>
              Chúng tôi hiểu rằng sức khỏe là ưu tiên hàng đầu. 
              Dịch vụ chăm sóc tại nhà cam kết mang đến trải nghiệm y tế an toàn, tận tâm và hiệu quả – 
              giúp bạn và người thân yên tâm ngay tại chính ngôi nhà của mình.
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

export default ChamSocTaiNha;
