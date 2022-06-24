import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";
// import React from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    console.log(isScrolled);
    
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" /> */}
            <img src="https://user-images.githubusercontent.com/72781778/175261795-41541f92-357c-4959-a9f4-a14b10ebc994.png" alt="" />
            <span>HomePage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and popular</span>
            <span>My list</span>
        </div>
        <div className="right">
            <Search className="icon"/>
            <span>KID</span>
            <Notifications className="icon"/>
            <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg" alt="" />
            <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
                <span>
                    Settings
                </span>
                <span>
                    LogOut
                </span>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
