import { useState } from "react";
import QLBenhNhan from "./QLBenhNhan/QLBenhNhan"; 
import QLBN_Select_QL from "./QLBenhNhan/QLBN_Select_QL";

const DashBoard = () => {
  const [context, setContext] = useState("Quản lý Bệnh Nhân");
  return (
    <div className="flex h-screen">
      <aside className="h-screen w-fit bg-white text-white flex flex-col items-start box-border shadow">
        <div className="bg-[#EDFFFA] text-[#FFC419] text-[22px] font-bold mb-5 px-3 py-1.5 rounded-md w-full text-center">HealthCare</div>
        <div className="text-[14px] text-black my-1 cursor-pointer px-3 py-2 rounded hover:bg-[#FFC419] transition w-full truncate"
          onClick={() => setContext("Quản lý Bệnh Nhân")}>Quản lý Bệnh Nhân</div>
        <div className="text-[14px] text-black my-1 cursor-pointer px-3 py-2 rounded hover:bg-[#FFC419] transition w-full truncate"
          onClick={() => setContext("Quản lý Bác sĩ")}>Quản lý Bác sĩ</div>
        <div className="text-[14px] text-black my-1 cursor-pointer px-3 py-2 rounded hover:bg-[#FFC419] transition w-full truncate"
          onClick={() => setContext("Quản lý Y tá")}>Quản lý Y tá</div>
        <div className="text-[14px] text-black my-1 cursor-pointer px-3 py-2 rounded hover:bg-[#FFC419] transition w-full truncate"
          onClick={() => setContext("Quản lý Phòng Khám")}>Quản lý Phòng Khám</div>
        <div className="text-[14px] text-black my-1 cursor-pointer px-3 py-2 rounded hover:bg-[#FFC419] transition w-full truncate"
          onClick={() => setContext("Quản lý hệ thống")}>Quản lý hệ thống</div>
      </aside>
      <main className="flex-1 bg-[#f5f5f5]">
        {context === "Quản lý Bệnh Nhân" && <QLBN_Select_QL />}
        {/* Có thể thêm các context khác ở đây */}
      </main>
    </div>
  );
};

export default DashBoard;