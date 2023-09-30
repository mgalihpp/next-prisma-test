import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

function DropdownMenu() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <svg
            className={`${isOpen ? "transform rotate-90" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
            viewBox="0 0 50 10"
          >
            <circle cx="5" cy="5" r="5" fill="#000" />
            <circle cx="25" cy="5" r="5" fill="#000" />
            <circle cx="45" cy="5" r="5" fill="#000" />
          </svg>
        </button>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-0" role="none">
            {/* Dropdown Items */}
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              <span className="flex">
                <AiFillEdit className={"mx-2 my-auto"} size={15} />
                <p className="text-[0.9rem]">Edit</p>
              </span>
            </a>
            <hr className='h-[2px]'/>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              <span className="flex">
                <AiFillDelete className={"mx-2 my-auto"} size={15} />
                <p className="text-[0.9rem]">Delete</p>
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
