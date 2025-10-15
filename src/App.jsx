import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './FontEnds/Home/Header';
import Body from './FontEnds/Home/Body';
import Footer from './FontEnds/Home/Footer';
import DashBoard from './FontEnds/Admin/DashBoard';
import Login_E from './FontEnds/Admin/auth/Login_E';
import ChuyenKhoa from './FontEnds/ChuyenKhoa/ChuyenKhoa';
import ChuyenGia from './FontEnds/ChuyenGia/ChuyenGia';
import DichVu from './FontEnds/DichVu/DichVu';
import DatLichHen from './FontEnds/DatLichHen/DatLichHen';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/*Trang Home: Hiển thị Header + Body + Footer */}
        <Route path="/" element={<><Header /><Body /><Footer /></>} />

        {/* Trang Đặt Lịch Hẹn */}
        <Route path="/dat-lich-hen" element={<DatLichHen />} />

        {/* Trang Chuyên Khoa */}
        <Route path="/chuyen-khoa" element={<ChuyenKhoa />} />

        {/* Trang Chuyên Gia */}
        <Route path="/chuyen-gia" element={<ChuyenGia />} />

        {/* Trang Dịch Vụ */}
        <Route path="/dich-vu" element={<DichVu />} />


        {/*Trang Admin riêng */}
        <Route path="/Admin" element={<Navigate to="/Admin/Login" replace />} />
        <Route path='/Admin/Login' element={<Login_E/>}/>  
        <Route path='/Admin/Dashboard' element={<DashBoard />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
