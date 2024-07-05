import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
        border-[1px] 
        
        md:w-auto 
        py-2 
        px-8
        xl:ml-[-500px]
        rounded-sm 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      
      "
    >
      <div
        className="
          flex 
          flex-row 
          items-center 
          justify-between
         
        "
      >
       
        
        <div
          className="
            text-sm 
            pl-2 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
            w-auto
          "
        >
          
          <div
            className="
              p-2
              bg-transparent
              rounded-sm
               
              text-grey
            "
          >
            <BiSearch size={18} />
          </div><div className="hidden sm:block">Search by Patients</div>
        </div>
      </div>
    </div>
  );
};

export default Search;
