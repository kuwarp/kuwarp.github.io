import React from 'react';
import { TbBulb } from "react-icons/tb";
import { IoFlashOffOutline } from "react-icons/io5";

const Darkmode = () => {
    const switchTheme = (e) => {
        document.querySelector('body').classList.toggle("light")
    }
    return (
        <button id="darkmode" onClick={(e) => switchTheme(e)}>
          <TbBulb className="light-icon theme-gradient "  />
           {/* <img src={`${process.env.PUBLIC_URL}/images/icons/sun-01.svg`} alt="Sun images" /> */}
           <IoFlashOffOutline className="dark-icon " />
           {/* <img  src={`${process.env.PUBLIC_URL}/images/icons/vector.svg`} alt="Sun images" /> */}
        </button>
    )
}
export default Darkmode;
