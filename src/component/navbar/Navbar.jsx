import Logo from "../../image/blu.svg";
import Search from "./Search";
import UserMenu from "./UserMenu";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-2 
          border-b-[1px]
        "
      >
        <div
          className="
        w-full
        mx-auto
        xl:px-20 
        md:px-10
        sm:px-2
        
      "
        >
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            
            
            md:gap-0
           
          "
          >
            

                  <img src={Logo} alt="React Logo"   />  
            
      
            <Search />
            <UserMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
