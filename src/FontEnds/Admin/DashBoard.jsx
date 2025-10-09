import { useState } from "react";
import QLBN_Select_QL from "./QLBenhNhan/QLBN_Select_QL";
import DS_BN_ChuaKham from "./QLBenhNhan/DS_BN_ChuaKham";
import DS_BN_DaKham from "./QLBenhNhan/DS_BN_DaKham";
import Them_BN from "./QLBenhNhan/Them_BN";
import DS_BS from "./QL_BacSi/DS_BS";
import DS_YTa from "./QL_YTa/DS_YTa";
import PhongKham from "./QL_PhongKham/PhongKham";
import HeThong from "./QL_HeThong/HeThong";


const DashBoard = () => {
  // 1. Sửa lỗi cú pháp useState - chỉ giữ lại giá trị khởi tạo
  const [context, setContext] = useState("Quản lý Bệnh Nhân"); 

  // Đồng bộ tên Context con
  const PATIENT_SUB_CONTEXTS = [
    "Thêm bệnh nhân mới", 
    "Danh sách bệnh nhân chưa khám", 
    "Danh sách bệnh nhân đã khám"
  ];

  // 💡 Hàm tạo class cho từng mục
  const getNavClasses = (navItem) => {
    // Classes mặc định
    const defaultClasses = "text-[14px] text-black my-1 cursor-pointer px-3 py-2 rounded transition w-full truncate hover:bg-[#FFC419]";

    // 2. Sửa lỗi màu chữ và nền để hiển thị rõ
    const activeClasses = "bg-[#FFF9E9] font-bold text-black"; 

    // Logic kiểm tra Active: Mục đang chọn HOẶC đang ở Context con của mục "Quản lý Bệnh Nhân"
    if (context === navItem || (navItem === "Quản lý Bệnh Nhân" && PATIENT_SUB_CONTEXTS.includes(context))) {
      return `${defaultClasses} ${activeClasses}`;
    }
    return defaultClasses;
  };

  return (
    <div className="flex h-screen">
      <aside className="h-screen w-[15%] bg-white text-white flex flex-col items-start box-border shadow">
        <div className="bg-[#EDFFFA] text-[#FFC419] text-[22px] font-bold mb-5 px-3 py-1.5 rounded-md w-full text-center">HealthCare</div>
        
        {/* Quản lý Bệnh Nhân */}
        <div className={getNavClasses("Quản lý Bệnh Nhân")}
          onClick={() => setContext("Quản lý Bệnh Nhân")}>Quản lý Bệnh Nhân</div>

        {/* Quản lý Bác sĩ - Sử dụng tên context đồng bộ */}
        <div className={getNavClasses("Quản lý Bác sĩ")}
          onClick={() => setContext("Quản lý Bác sĩ")}>Quản lý Bác sĩ</div>

        {/* Quản lý Y tá */}
        <div className={getNavClasses("Quản lý Y tá")}
          onClick={() => setContext("Quản lý Y tá")}>Quản lý Y tá</div>

        {/* Quản lý Phòng Khám */}
        <div className={getNavClasses("Quản lý Phòng khám")}
          onClick={() => setContext("Quản lý Phòng khám")}>Quản lý Phòng khám</div>

        {/* Quản lý hệ thống */}
        <div className={getNavClasses("Quản lý Hệ thống")}
          onClick={() => setContext("Quản lý Hệ thống")}>Quản lý Hệ thống</div>
        
      </aside>


        {/* MAIN */}
      <main className="flex-1 bg-[#f5f5f5]">
        {/* 1. Trang Lựa chọn ban đầu */}
        {context === "Quản lý Bệnh Nhân" && 
            <QLBN_Select_QL setContext={setContext} />}
        
        {/* 2. Trang Thêm Bệnh Nhân (Sử dụng tên context đồng bộ) */}
        {context === "Thêm bệnh nhân mới" && <Them_BN setContext={setContext} />}
        
        {/* 3. Trang Danh sách bệnh nhân chưa khám */}
        {context === "Danh sách bệnh nhân chưa khám" && <DS_BN_ChuaKham setContext={setContext} />}
        
        {/* 4. Trang Danh sách bệnh nhân đã khám */}
        {context === "Danh sách bệnh nhân đã khám" && <DS_BN_DaKham setContext={setContext} />}
        
        {/* 🎯 Logic cho Quản lý Bác sĩ */}
        {context === "Quản lý Bác sĩ" && 
            <DS_BS setContext={setContext} />}

        {/* 🎯 Logic cho Quản lý Y Tá */}
        {context === "Quản lý Y tá" && 
            <DS_YTa setContext={setContext} />}

        {/* 🎯 Logic cho Quản lý Phòng Khám */}
        {context === "Quản lý Phòng khám" && 
            <PhongKham setContext={setContext} />}
        
        {/* 🎯 Logic cho Quản lý Hệ Thống*/}
        {context === "Quản lý Hệ thống" && 
            <HeThong setContext={setContext} />}
        
      </main>
    </div>
  );
};

export default DashBoard;