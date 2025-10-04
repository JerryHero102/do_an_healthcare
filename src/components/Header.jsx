
const Header = () => {
  return (
  <div className="p-4 bg-black flex items-center justify-between">
    <div className=" flex items-center space-x-4">
      <h1 className="text-[20px] uppercase font-bold text-blue-400 pr-[25px] pl-[100px]">HealthCare</h1>
      <nav className="flex items-center space-x-4">
        <a href="#" className="text-white hover:text-blue-400  hover:bg-yellow-900 rounded-2xl pt-[5px] pb-[5px] pl-[10px] pr-[10px]">Trang chủ</a>
        <a href="#" className="text-white hover:text-blue-400  hover:bg-yellow-900 rounded-2xl pt-[5px] pb-[5px] pl-[10px] pr-[10px]">Chuyên Khoa</a>
        <a href="#" className="text-white hover:text-blue-400  hover:bg-yellow-900 rounded-2xl pt-[5px] pb-[5px] pl-[10px] pr-[10px]">Chuyên Gia</a>
        <a href="#" className="text-white hover:text-blue-400  hover:bg-yellow-900 rounded-2xl pt-[5px] pb-[5px] pl-[10px] pr-[10px]">Dịch vụ</a>
      </nav>

    </div>

  </div>)
}

export default Header