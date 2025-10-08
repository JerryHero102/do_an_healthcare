import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './FontEnds/Home/Header';
import Body from './FontEnds/Home/body';
import DashBoard from './FontEnds/Admin/DashBoard'; 

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={<Body />} />
        <Route path="/Admin" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;