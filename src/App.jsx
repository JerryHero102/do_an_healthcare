import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './FontEnds/Home/Header';
import Body from './FontEnds/Home/Body';
import Footer from './FontEnds/Home/Footer';
import DashBoard from './FontEnds/Admin/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ Trang Home: Hiển thị Header + Body + Footer */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Body />
              <Footer />
            </>
          } 
        />

        {/* ✅ Trang Admin riêng */}
        <Route path="/Admin" element={<DashBoard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
