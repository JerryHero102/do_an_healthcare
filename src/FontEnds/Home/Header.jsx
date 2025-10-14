import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>

      {/* Logo + Menu */}
      <div className={styles.leftSection}>
        <a href="/" className={styles.logo}>
          HealthCare
        </a>
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>
            Trang chủ
          </a>
          <a href="/chuyen-khoa" className={styles.navLink}>
            Chuyên Khoa
          </a>
          <a href="/chuyen-gia" className={styles.navLink}>
            Chuyên Gia
          </a>
          <a href="/dich-vu" className={styles.navLink}>
            Dịch vụ
          </a>
        </nav>
      </div>

      {/* ✅ Phần bên phải: Login hoặc Hotline */}
      <div className={styles.rightSection}>
        <button className={styles.loginButton}>
          Đăng nhập
        </button>
      </div>

    </div>
  );
};

export default Header;
