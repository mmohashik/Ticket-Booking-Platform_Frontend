import React, { useState } from "react";
import Sidebar from "../../components/dashboard_Components/Sidebar";
import D_Navbar from "../../components/dashboard_Components/D_Navbar";

const ManageEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([
    { id: 1, name: "Music Concert", date: "2025-03-20", location: "Colombo" },
    { id: 2, name: "Tech Expo", date: "2025-04-10", location: "Kandy" },
    { id: 3, name: "Food Festival", date: "2025-05-05", location: "Galle" },
  ]);

  const handleDelete = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <D_Navbar />
        <div className="p-5">
          <h1 className="text-2xl font-semibold mb-4">Manage Events</h1>
          
          <div className="flex justify-between mb-4">
            <input
              type="text"
              placeholder="Search events..."
              className="border p-2 rounded w-1/3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add New Event</button>
          </div>

          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Event Name</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Location</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event) => (
                <tr key={event.id} className="border">
                  <td className="border p-2">{event.name}</td>
                  <td className="border p-2">{event.date}</td>
                  <td className="border p-2">{event.location}</td>
                  <td className="border p-2 space-x-2">
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;
