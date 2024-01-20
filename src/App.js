import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import About from "./pages/About"
import Nav from "./components/Nav"
import Shop from "./pages/Shop"
import ContactUs from "./pages/ContactUs"
import 'swiper/css';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Backtotop from './components/Backtotop';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 3000);
  }, []);
  return (
    <div>
       {data ? (
        <div>
          <Preloader />
        </div>)
      :(<div>
        <div className='bg-[url("./assets/images/Bg-hero.webp")] bg-no-repeat bg-cover min-h-screen'><Nav/><Hero/></div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
        <Backtotop/>
      </div>)}
    </div>
  );
}

export default App;
