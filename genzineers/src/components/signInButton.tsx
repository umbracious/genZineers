"use client";

import { useState } from "react";

export default function SignInButton() {
  const [hover, setHover] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleHover = (state: boolean) => setHover(state);
  const handleClick = () => setMenu((menu) =>!menu);

  return (
    <>
    <div>
    <button onMouseEnter={()=>handleHover(true)} onMouseLeave={()=>handleHover(false)} onClick={()=>handleClick()}>
      <div className={`transition duration-600 flex gap-2 h-10 px-5 items-center ${hover || menu ? "bg-white" : ""}`}>
          <svg
            viewBox="0 0 16 16"
            height="20px"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke={`${hover || menu ? "#000000" : "#ffffff"}`}
            className="transition duration-600"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
                fill={`${hover || menu ? "#000000" : "#ffffff"}`}
                className="transition duration-600"
              ></path>{" "}
              <path
                d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
                fill={`${hover || menu ? "#000000" : "#ffffff"}`}
                className="transition duration-600"
              ></path>{" "}
            </g>
          </svg>
        <div className={`${hover || menu ? "text-black" : "text-white"} transition duration-600`}>Not logged in</div>
        <svg viewBox="0 0 24 24" height="30px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" className="transition duration-600"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 9L12 15L18 9" stroke={`${hover || menu ? "#000000" : "#ffffff"}`} 
        className="transition duration-600"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
    </button>
    </div>
    {menu && 
    <div className="absolute top-10 flex flex-col bg-yellow-600 w-[9.9%] justify-center items-center">
      <div className="border-t-[1px] border-black w-full py-2 text-center">Register</div>  
      <div className="border-t-[1px] border-black w-full py-2 text-center">Log in</div>
    </div>}
    </>
  );
}
