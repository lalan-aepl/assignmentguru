/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import Nav from "./navbar/Navbar";
import MobileNav from "./navbar/Mobilenav";
import logo from '../../assets/assiGuruCrop.png'
function Header({ myRef }) {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 70 ? setIsActive(true) : setIsActive(false);
    });
  });
  // function handleScroll(section){
  //   let value=document.getElementById(section)
  //   console.log(value)
  //   if(value){
  //       value.scrollIntoView({behavior:"smooth",block:'center',inline:'center'})
  //   }

// }
  return (
    <header
      className={`${
        isActive
          ? "top-0 z-30 sm:top-0 py-1 sm:py-2 bg-primaryWhite shadow-2xl overflow-hidden"
          : "top-0 sm:top-0 py-3"
      } py-4 sm:py-3 fixed w-full transition-all z-10 bg-primaryWhite`}
    >
      <div className="mx-auto max-w-screen-2xl lg:max-w-screen-xl px-4 pt-3 sm:px-6 flex justify-between items-center">
        {/* logo */}
        <a href="#">
          <span className="font-Inter font-bold tracking-[10px] text-2xl uppercase sm:text-[30px]">
             <img width={100} src={logo} alt="logo"/>
          </span>
        </a>
        {/* nav - initially hidden - show on desktop mode */}
        <div className="hidden sm:flex lsm:items-center sm:gap-3">
          <Nav ref={myRef} />
        </div>
        <div className="hidden sm:block">
          
          <a
            // onClick={()=>handleScroll('contact')}
            href="https://wa.me/message/HIJF2T5A43BHO1" target="_blank"
            className="inline-block cursor-pointer rounded-full bg-gradient-to-r bg-blue-main px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            Chat With Us
          </a>
        </div>
        {/* cta button - initially hidden - show on desktop mode */}
        {/* mobile nav trigger btn - hidden on desktop */}
        <button className="sm:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-primary" />
          ) : (
            <AiOutlineMenu className="text-3xl text-secondary" />
          )}
        </button>
        {/* mobile nav - hidden on desktop */}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          }  fixed top-0 bottom-0 w-[60vw] block sm:hidden transition-all`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
