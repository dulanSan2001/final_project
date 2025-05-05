import React from 'react'
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from '../../context/authContext';

import './navbar.scss';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';




function NavBar() {
  const{toggle,darkMode}=useContext(DarkModeContext);
  const{currentUser}=useContext(AuthContext);
  return (
    <div className='navBar'>
      <div className='left'>
        <Link to="/" style={{ textDecoration: "none" }}>
        <span>ConnectSphere</span>
        </Link>
        <OtherHousesOutlinedIcon/>
        {darkMode ?<WbSunnyOutlinedIcon onClick={toggle}/>:<NightlightOutlinedIcon onClick={toggle}/>}
        <WidgetsOutlinedIcon/>
        <div className='search'>
          <SearchOutlinedIcon/>
          <input type="text"placeholder='Search...'/>
        </div>

        
      </div>
      <div className='right'>
        <PersonOutlineOutlinedIcon/>
        <NotificationsActiveOutlinedIcon/>
        <EmailOutlinedIcon/>
        <WbSunnyOutlinedIcon/>
        <div className='user'>
          <img src={currentUser?.profilePic}/>
          <span>{currentUser?.name}</span>
        </div>
      </div>
   </div>
   
  )
}

export default NavBar
