import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icono1.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      to: "/players",
      name: "Players",
    },
    {
      to: "/memories",
      name: "Memories",
    },
    {
      to: "/events",
      name: "Events",
    },
    {
      to: "/mods",
      name: "Mods",
    },
  ];
  return (
    <nav className="h-16 text-[#E0D2C3] flex items-center">
      <div className="container m-10 flex justify-between items-center lg:mx-auto ">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="h-16" />
          </Link>
        </div>
        {/* Burger */}
        <div className="flex z-40">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#E0D2C3"
              className="bi bi-list hover:fill-[#E46F18]"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        }    lg:w-1/5 w-full h-screen absolute right-0 top-0 pt-52 z-30 bg-gray-900 bg-opacity-40`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <ul className="flex flex-col space-y-4 items-center">
          {links.map(({ to, name }, index) => {
            return (
              <li
                key={index}
                className="relative hover:text-[#57CB02] hover:text-xl hover:before:content-['•'] hover:before:mr-1 w-full justify-center flex"
              >
                <Link to={to} onClick={() => setIsOpen(false)}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
