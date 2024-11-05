import React, { useEffect } from 'react'
import "./Scrollup.css"
import { HiMiniArrowLongUp } from "react-icons/hi2";
const Scrollup = () => {
   useEffect(() =>{
    const handleScroll = () =>{
        const scrollUp = document.querySelector(".scrollup");
        if (window.scrollY >= 560) {
          scrollUp.classList.add("show-scroll");
        } else {
          scrollUp.classList.remove("show-scroll");
        }
    };

    window.addEventListener("scroll", handleScroll);

    // clean up 
    return () => window.removeEventListener("scroll", handleScroll);
   })
  return (
    <a href="#" className="scrollup">
      <HiMiniArrowLongUp className='scrollup-icon'/>
    </a>
  );
}

export default Scrollup