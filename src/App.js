
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Blog from './Pages/Blog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyReview from './Pages/Dashboard/MyReview';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import NotFound from './Pages/Shared/NotFound/NotFound';
import MyportFolio from './Pages/MyportFolio/MyportFolio';


function App() {
  return (
    <div className='px-12'>
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<RequireAuth>
          <Purchase />
        </RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="manageproduct" element={<ManageProduct></ManageProduct>}></Route>
         </Route>
        <Route path="about" element={<About />} />
        <Route path="myportFolio" element={<MyportFolio/>} />
        <Route path="blog" element={<Blog />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
