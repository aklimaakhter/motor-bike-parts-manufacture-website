
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Parts from './Pages/Home/Parts';

function App() {
  return (
    <div className='px-12'>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parts" element={<Parts/>} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
       
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
