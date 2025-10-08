import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/body';
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