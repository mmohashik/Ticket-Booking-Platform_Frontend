import React from "react";
import { NavLink, BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const D_Navbar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>
      <div className="relative">
        <Menu>
          <MenuButton className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
            <span className="text-gray-700 font-medium">Admin</span>
            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
          </MenuButton>
          <MenuItems className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md">
            <MenuItem>
              <div className="p-2 border-b">Admin</div>
            </MenuItem>
            <MenuItem>
              <div className="p-2 border-b">admin@example.com</div>
            </MenuItem>
            <MenuItem>
              <NavLink to="/edit-profile" className="block p-2 hover:bg-gray-200">Edit Profile</NavLink>
            </MenuItem>
            <MenuItem>
              <button className="w-full text-left p-2 hover:bg-gray-200">Sign Out</button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default D_Navbar
