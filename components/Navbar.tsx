"use client";

import React, { useState, useEffect } from "react";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { FaRegPenToSquare, FaRegUser } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";

const BottomNavbar = () => {
  const [isNavVisible, setIsNavVisible] = React.useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine the scroll direction (up or down)
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Update the previous scroll position
      setPrevScrollPos(currentScrollPos);

      // Update visibility based on scroll direction
      setIsNavVisible(!isScrollingDown);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navStyle = {
    transform: isNavVisible ? "translateY(0)" : "translateY(100%)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <header
      className="bg-white h-[75px] fixed bottom-0 left-0 right-0 w-full md:w-[450px] m-auto z-[999]"
      style={navStyle}
    >
      <nav className="flex flex-row justify-center items-center h-full">
        <ul className="flex flex-row justify-between items-center gap-6 h-full w-full">
          <li>
            <a href="/">
              <GoHomeFill size={30} />
            </a>
          </li>
          <li>
            <a href="/search">
              <GoSearch size={30} />
            </a>
          </li>
          <li>
            <a href="/create">
              <FaRegPenToSquare size={30} />
            </a>
          </li>
          <li>
            <a href="/feed">
              <AiOutlineHeart size={30} />
            </a>
          </li>
          <li>
            <a href="/profile">
              <FaRegUser size={30} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default BottomNavbar;
