const Header = () => {
  return (
    <div className="p-4 h-[100px] bg-[#EDFFFA] flex items-center justify-between">

      {/* Logo + Menu */}
      <div className="flex items-center space-x-4">
        <h1 className="text-[20px] uppercase font-bold text-[#FFC419] pr-[25px] pl-[100px]">
          HealthCare
        </h1>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-[18px] font-medium text-black hover:text-[#FFF3D1] hover:bg-[#FFC419] rounded-2xl pt-[5px] pb-[5px] px-[12px]">
            Trang chủ
          </a>
          <a href="#" className="text-[18px] font-medium text-black hover:text-[#FFF3D1] hover:bg-[#FFC419] rounded-2xl pt-[5px] pb-[5px] px-[12px]">
            Chuyên Khoa
          </a>
          <a href="#" className="text-[18px] font-medium text-black hover:text-[#FFF3D1] hover:bg-[#FFC419] rounded-2xl pt-[5px] pb-[5px] px-[12px]">
            Chuyên Gia
          </a>
          <a href="#" className="text-[18px] font-medium text-black hover:text-[#FFF3D1] hover:bg-[#FFC419] rounded-2xl pt-[5px] pb-[5px] px-[12px]">
            Dịch vụ
          </a>
        </nav>
      </div>

      {/* ✅ Phần bên phải: Login hoặc Hotline */}
      <div className="pr-[100px]">
        <button className="bg-[#FFC419] hover:bg-[#e6ae14] text-white font-semibold px-4 py-2 rounded-xl shadow-md">
          Đăng nhập
        </button>
      </div>

    </div>
  );
};

export default Header;
