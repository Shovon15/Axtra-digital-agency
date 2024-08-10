import { useState } from "react";
import Logo from "../../../assets/logo-black.png";
import NavLinks from "./NavLinks";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  console.log(isSearchBarOpen)

  return (
    <nav className="bg-white sticky top-0 z-20">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? (<RxCross2 className="w-5 h-5" />) : (<HiMiniBars3BottomRight className="w-5 h-5" />)}
          </div>
        </div>
        <div className="md:flex hidden uppercase items-center justify-center">
          <NavLinks />
        </div>
        <div className="relative">
          <div className="md:block hidden" onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}>
            {
              isSearchBarOpen ?
              <RxCross2 className="w-5 h-5" />:
              <IoSearchOutline className="w-5 h-5 cursor-pointer" /> 
            }
          </div>
          {isSearchBarOpen && (
            <div className="absolute top-7 right-0 w-80 bg-gray-400 border border-gray-300 p-2">
              <input type="text" placeholder="Search..." className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none" />
            </div>
          )}
        </div>
        {/* Mobile nav */}
        <div
          className={`
        md:hidden bg-color-secondary fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
