import React from "react";
import { Calendar, MapPin } from "lucide-react";

const EventCard = () => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* Event Image */}
      <img
        src="https://via.placeholder.com/300x200"
        alt="Event name here"
        className="w-full h-48 object-cover"
      />

      {/* Event Details */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900">
          Event Name
        </h2>
        
        {/* Date & Time */}
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Mar 15, 2025 • 06.30 PM IST</span>
        </div>

        {/* Venue */}
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span>BMICH - COLOMBO</span>
        </div>

        {/* Price */}
        <p className="text-blue-600 font-bold text-sm mt-3">1,000 LKR upwards</p>

        {/* Buy Tickets Button */}
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Buy Tickets
        </button>
      </div>
    </div>
  );
};

export default EventCard;
