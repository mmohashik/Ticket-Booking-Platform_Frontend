import React from "react";
import Sidebar from "../../components/dashboard_Components/Sidebar";
import D_Navbar from "../../components/dashboard_Components/D_Navbar";
import DetailsCard from "../../components/dashboard_Components/DetailsCard";

const AdminDashboard = () => {
  return (
    
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <D_Navbar />
          <div className="p-5">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
              
              <DetailsCard/>
              <DetailsCard/>
              <DetailsCard/>

            </div>
          </div>
        </div>
      </div>
    
  );
};


export default AdminDashboard;
