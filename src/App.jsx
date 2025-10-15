import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './FontEnds/Home/Header';
import Body from './FontEnds/Home/Body';
import Footer from './FontEnds/Home/Footer';
import DashBoard from './FontEnds/Admin/DashBoard';
import Login_E from './FontEnds/Admin/auth/Login_E';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/*Trang Home: Hiển thị Header + Body + Footer */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Body />
              <Footer />
            </>
          }/>

        {/*Trang Admin riêng */}
        <Route path="/Admin" element={<Navigate to="/Admin/Login" replace />} />
        <Route path='/Admin/Login' element={<Login_E/>}/>  
        <Route path='/Admin/Dashboard' element={<DashBoard />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
