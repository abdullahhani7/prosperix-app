import React from "react";
import "../../App";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const MobileNav = ({ activeMenu, setMenu }) => {
  return (
    <div className={`mobileNav ${activeMenu && "active"}`}>
      <div className="mb-10" onClick={() => setMenu(!activeMenu)}>
        <button className="cursor-pointer border border-[#008080] p-3 rounded-full">
          <IoCloseSharp color="#008080" size={"2rem"} />
        </button>
      </div>

      <nav className="flex flex-col items-center  gap-6">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-xl text-[#008080] font-inter font-bold capitalize"
              : "text-xl text-white font-inter font-bold capitalize"
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/service"}
          className={({ isActive }) =>
            isActive
              ? "text-xl text-[#008080] font-inter font-bold capitalize"
              : "text-xl text-white font-inter font-bold capitalize"
          }
        >
          service
        </NavLink>

        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "text-xl text-[#008080] font-inter font-bold capitalize"
              : "text-xl text-white font-inter font-bold capitalize"
          }
        >
          contact
        </NavLink>

        <NavLink
          to={"/help"}
          className={({ isActive }) =>
            isActive
              ? "text-xl text-[#008080] font-inter font-bold capitalize"
              : "text-xl text-white font-inter font-bold capitalize"
          }
        >
          help
        </NavLink>
      </nav>
    </div>
  );
};

export default MobileNav;
