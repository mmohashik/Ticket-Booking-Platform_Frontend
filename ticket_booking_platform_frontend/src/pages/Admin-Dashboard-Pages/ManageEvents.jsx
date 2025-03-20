import React from "react";
import Sidebar from "../../components/dashboard_Components/Sidebar";
import D_Navbar from "../../components/dashboard_Components/D_Navbar";
import AddEventForm from "../../components/dashboard_Components/AddEventForm";

const ManageEvents = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <D_Navbar />
        <div className="p-5">
          <h1 className="text-2xl font-semibold mb-4">Manage Events</h1>
        </div>
        <div className="p-5">
          {/* display table */}
          <AddEventForm />
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;
