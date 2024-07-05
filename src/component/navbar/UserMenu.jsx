import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {FaBell} from "react-icons/fa"
import Avatar from "../../image/placeholder.jpg";

const UserMenu = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          <FaBell size={20}/>
        </div>
        <div
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <img src={Avatar} alt="React Logo" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
