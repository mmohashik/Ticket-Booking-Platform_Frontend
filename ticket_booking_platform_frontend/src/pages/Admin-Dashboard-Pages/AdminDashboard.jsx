import React from "react";
import Sidebar from "../components/dashboard_Components/Sidebar";
import D_Navbar from "../components/dashboard_Components/D_Navbar";

const AdminDashboard = () => {
  return (
    
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <D_Navbar />
          
        </div>
      </div>
    
  );
};

export default AdminDashboard;
