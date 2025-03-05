import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const menuItems = [
      { name: "Analytics", path: "/analytics" },
      { name: "Manage Event", path: "/manage-event" },
      { name: "Seat Map Tool", path: "/seat-map" },
      { name: "Reporting", path: "/reporting" },
    ];
  
    return (
      <div className="bg-gray-800 text-white w-64 min-h-screen p-5">
        <h2 className="text-2xl font-extrabold text-blue-500 mb-6 pl-5">BigIdea</h2>
        <nav>
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={`block py-6 px-6 m-2 font-bold hover:bg-blue-500 ${location.pathname === item.path ? "bg-blue-500" : ""}`}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    );
  };

export default Sidebar;