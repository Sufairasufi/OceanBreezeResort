import React from 'react'
import Navbar from './src/Component/Navbar/Navbar'
import { Outlet ,useLocation} from 'react-router-dom'
import HomeNavbar from './src/Component/Home/HomeNavbar';
import Footer from './src/Component/Footer/Footer';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div>
    {isHome ? <HomeNavbar/> : <Navbar/>}
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout