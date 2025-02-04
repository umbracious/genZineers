"use client";
import { useState } from "react";
import Logo from "../../public/logo.svg";
import Image from "next/image";

export default function MobileNavbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => (click ? setClick(false) : setClick(true));
  const stopPropagation = (event: any) => event.stopPropagation();
  return (
    <div className="fixed md:hidden">
      <nav className="bg-black w-full top-0 fixed left-0 right-0 ">
        <div className="px-4 py-3 flex justify-between w-full ">
          {/* this image should be a monogram, not a logo. */}
          <Image src={Logo} width={100} alt="genzineers" />
          <button onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </nav>
      {click && (
        <div
          className="bg-neutral-950 w-screen h-screen bg-opacity-90"
          onClick={handleClick}
        >
          <div className="w-screen flex flex-row-reverse fixed ">
            <div
              className="flex flex-col  gap-3 py-5 px-6 w-[60vw] h-screen bg-black float-right"
              onClick={stopPropagation}
            >
              <div className="text-3xl">Events</div>
              <div className="text-3xl">The Potential Dropout</div>
              <div className="text-3xl">Contact Us</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
