import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import menuIcon from "../menu.svg"; // Adjust the path if necessary
import closeIcon from "../Close.svg"; // Adjust the path if necessary

function Navbar() {
  const [navItems] = useState([
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Blogs", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "text-[#214651] font-[600] border-t-[2px] border-[#214651] h-full items-center flex justify-center"
      : "text-[#000000] font-[400]";
  };

  return (
    <div className="w-full flex justify-center mt-[30px]">
      <div className="h-[70px] w-[90%]">
        <div className="w-full px-[64px] border rounded-[15px] h-[65px] flex justify-between items-center bg-white shadow-md relative">
          {/* logo */}
          <div className="flex">
            <img
              src="/PNLogo.svg"
              alt="Logo"
              onClick={() => navigate("/")}
              className="cursor-pointer w-[36px] h-[40px]"
            />
          </div>
          {/* navlinks for desktop */}
          <div className="hidden  md:flex gap-[60px] text-[16px] h-full items-center justify-center ">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={isActive(item.path)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* profile button for desktop */}
          <div className="hidden md:flex gap-4 items-center">
            <button
              onClick={() => navigate("/contact")}
              className="text-left border px-[35px] py-[12px] bg-[#214651] rounded-[11px] text-[#FFFFFF] font-[500]"
            >
              Contact Us
            </button>
          </div>
          {/* hamburger menu for mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleSidebar}>
              <img src={menuIcon} alt="Menu Icon" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      {/* sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between p-4">
          <img
            src="/Maskgroup.svg"
            alt="Logo"
            onClick={() => navigate("/")}
            className="cursor-pointer w-8 h-8"
          />
          <button onClick={toggleSidebar}>
            <img src={closeIcon} alt="Close Icon" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col items-start gap-4 mt-8 text-[#000000] font-[400] text-[16px] pl-4">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={toggleSidebar}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
