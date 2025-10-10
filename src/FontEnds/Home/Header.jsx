import './Css/Header.css';

const Header = () => {
  return (
    <div className="header-container">

      {/* Logo + Menu */}
      <div className="flex items-center space-x-4">
        <h1 className="logo">HealthCare</h1>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Trang chủ</a>
          <a href="#" className="nav-link">Chuyên Khoa</a>
          <a href="#" className="nav-link">Chuyên Gia</a>
          <a href="#" className="nav-link">Dịch vụ</a>
        </nav>
      </div>

      {/* Phần bên phải */}
      <div className="right-section">
        <button className="login-btn">Đăng nhập</button>
      </div>

    </div>
  );
};

export default Header;
