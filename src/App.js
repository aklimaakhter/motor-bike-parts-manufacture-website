
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import SignUp from './Pages/Login/SignUp';


function App() {
  return (
    <div className='px-12'>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
