import { useState } from "react";
import QLBN_Select_QL from "./QLBenhNhan/QLBN_Select_QL";
import DS_BN_ChuaKham from "./QLBenhNhan/DS_BN_ChuaKham";
import DS_BN_DaKham from "./QLBenhNhan/DS_BN_DaKham";
import Them_BN from "./QLBenhNhan/Them_BN";
import DS_BS from "./QL_BacSi/DS_BS";
import DS_YTa from "./QL_YTa/DS_YTa";
import PhongKham from "./QL_PhongKham/PhongKham";
import HeThong from "./QL_HeThong/HeThong";

// Class chữ tittle
const TextTittle = ({children}) => (
<h6 className="text-[12px] text-gray-800 bg-gray-300 w-full py-1.5 px-2 mt-5">{children}</h6> // 👈 Cần thêm {children}
);

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
                        const defaultClasses = "text-[12px] text-black my-1 cursor-pointer px-3 py-2 rounded transition w-full truncate hover:bg-[#FFC419]";

                        // 2. Sửa lỗi màu chữ và nền để hiển thị rõ
                        const activeClasses = "bg-[#FFC419] font-bold text-black"; 

                        // Logic kiểm tra Active: Mục đang chọn HOẶC đang ở Context con của mục "Quản lý Bệnh Nhân"
                        if (context === navItem || (navItem === "Quản lý Bệnh Nhân" && PATIENT_SUB_CONTEXTS.includes(context))) {
                                return `${defaultClasses} ${activeClasses}`;
                        }


                        return defaultClasses;
                };

        return (
                <div className="flex h-screen">
                        <aside className="h-screen w-[10%] bg-white text-white flex flex-col items-start box-border shadow">
                                <div className="bg-[#EDFFFA] text-[#FFC419] text-[22px] font-bold mb-5 px-3 py-1.5 rounded-md w-full text-center">HealthCare</div>
                                
                                {/* DÀNH CHO TIẾP TÂN */}
                                <div className="w-full">
                                        <TextTittle>Tiếp tân</TextTittle>
                                        {/* Quản lý Bệnh Nhân */}
                                        <div className={getNavClasses("Quản lý Bệnh Nhân")}
                                        onClick={() => setContext("Quản lý Bệnh Nhân")}>Quản lý Bệnh Nhân</div>
                                </div>

                                {/* DÀNH CHO QUẢN LÝ NHÂN VIÊN */}
                                <div className="w-full">
                                        <TextTittle>QL Nhân viên</TextTittle>
                                        {/* Quản lý Bác sĩ - Sử dụng tên context đồng bộ */}
                                        <div className={getNavClasses("Quản lý Bác sĩ")}
                                        onClick={() => setContext("Quản lý Bác sĩ")}>Quản lý Bác sĩ</div>

                                        {/* Quản lý Y tá */}
                                        <div className={getNavClasses("Quản lý Y tá")}
                                        onClick={() => setContext("Quản lý Y tá")}>Quản lý Y tá</div>
                                </div>

                                {/* DÀNH CHO QUẢN LÝ PHÒNG KHÁM*/}
                                <div className="w-full">
                                        <TextTittle>QL Phòng khám</TextTittle>

                                        {/* Quản lý Phòng Khám */}
                                        <div className={getNavClasses("Quản lý Phòng khám")}
                                        onClick={() => setContext("Quản lý Phòng khám")}>Quản lý Phòng khám</div>

                                        {/* Quản lý hệ thống */}
                                        <div className={getNavClasses("Quản lý Hệ thống PK")}
                                        onClick={() => setContext("Quản lý Hệ thống PK")}>Quản lý Hệ thống PK</div>
                                </div> 

                                {/* DÀNH CHO KẾ TOÁN */}
                                <div className="w-full">
                                        <TextTittle>QL Doanh thu</TextTittle>
                                        <div className={getNavClasses("DT Khám & Chữa Bệnh")}
                                        onClick={() => setContext("DT Khám & Chữa Bệnh")}>DT Khám & Chữa Bệnh</div>
                                        <div className={getNavClasses("Chi Phí HĐ")}
                                        onClick={() => setContext("Chi Phí HĐ")}>Chi Phí HĐ</div>
                                        <div className={getNavClasses("QL TT Bảo Hiểm")}
                                        onClick={() => setContext("QL TT Bảo Hiểm")}>QL TT Bảo Hiểm</div>
                                        <div className={getNavClasses("TT Công nợ & Lương")}
                                        onClick={() => setContext("TT Công nợ & Lương")}>TT Công nợ & Lương</div>
                                        <div className={getNavClasses("QL Quỹ")}
                                        onClick={() => setContext("QL Quỹ")}>QL Quỹ</div>
                                </div>         
                        </aside>


                        {/* MAIN */}
                        <main className="flex-1 bg-[#f5f5f5]">
                                {/*DEFAULT*/}
                                {context === "Quản lý Bệnh Nhân" && 
                                <QLBN_Select_QL setContext={setContext} />}

                                {/*ADD Bệnh Nhân (Sử dụng tên context đồng bộ) */}
                                {context === "Thêm bệnh nhân mới" && <Them_BN setContext={setContext} />}

                                {/*DS bệnh nhân chưa khám */}
                                {context === "Danh sách bệnh nhân chưa khám" && <DS_BN_ChuaKham setContext={setContext} />}
                                
                                {/*DS bệnh nhân đã khám */}
                                {context === "Danh sách bệnh nhân đã khám" && <DS_BN_DaKham setContext={setContext} />}
                                
                                {/*QL Bác sĩ */}
                                {context === "Quản lý Bác sĩ" && 
                                <DS_BS setContext={setContext} />}
                                {/*QL Y Tá */}
                                        {context === "Quản lý Y tá" && 
                                <DS_YTa setContext={setContext} />}

                                {/*QL Phòng Khám */}
                                        {context === "Quản lý Phòng khám" && 
                                <PhongKham setContext={setContext} />}
                                        
                                {/*QL Hệ Thống*/}
                                        {context === "Quản lý Hệ thống PK" && 
                                <HeThong setContext={setContext} />}
                                
                        </main>
                </div>
        );
};

export default DashBoard;