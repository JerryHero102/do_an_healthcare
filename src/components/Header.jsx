const Header = () => {
  return (
  <div className="p-4 h-[100px] bg-[#EDFFFA] flex items-center justify-between">
    <div className=" flex items-center space-x-4">
      <h1 className="text-[20px] uppercase font-bold text-[#FFC419] pr-[25px] pl-[100px]">HealthCare</h1>
      <nav className="flex items-center space-x-4">
        <a href="#" className="text-[18px] font-medium text-black hover:text-[#FFF3D1]  hover:bg-[#FFC419] rounded-2xl pt-[5px] pb-[5px] pl-[8px] pr-[8px]">Trang chủ</a>
        <a href="#" className="text-[18px] font-medium text-black hover:text-[#FFF3D1]  hover:bg-[#FFC419] rounded-2xl pt-[5px] pb-[5px] pl-[8px] pr-[8px]">Chuyên Khoa</a>
        <a href="#" className="text-[18px] font-medium text-black hover:text-[#FFF3D1]  hover:bg-[#FFC419] rounded-2xl pt-[5px] pb-[5px] pl-[8px] pr-[8px]">Chuyên Gia</a>
        <a href="#" className="text-[18px] font-medium text-black hover:text-[#FFF3D1]  hover:bg-[#FFC419] rounded-2xl pt-[5px] pb-[5px] pl-[8px] pr-[8px]">Dịch vụ</a>
      </nav>

    </div>

  </div>)
}

export default Header