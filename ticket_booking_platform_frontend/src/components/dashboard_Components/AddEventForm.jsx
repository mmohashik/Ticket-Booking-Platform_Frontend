import React, { useState } from "react";
import axios from "axios";

const AddEventForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    venue: "",
    totalTickets: 0,
    ticketTypes: [{ type: "", price: 0 }],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTicketTypeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTicketTypes = [...formData.ticketTypes]; // Create a copy of the ticketTypes array
    updatedTicketTypes[index][name] = value; // Update the specific ticket type
    setFormData({ ...formData, ticketTypes: updatedTicketTypes }); // Update the state
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("eventName", formData.eventName);
  data.append("eventDate", formData.eventDate);
  data.append("eventTime", formData.eventTime);
  data.append("venue", formData.venue);
  data.append("totalTickets", formData.totalTickets);
  data.append("ticketTypes", JSON.stringify(formData.ticketTypes)); // Stringify the array
  data.append("image", formData.image);

  try {
    const response = await axios.post("http://localhost:3000/event", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("Event created:", response.data);
    onClose();
  } catch (error) {
    console.error("Error creating event:", error);
  }
};

  return (
    <div className="p-5 bg-white rounded-lg">
  <form onSubmit={handleSubmit} className="space-y-4">
    {/* Form Title */}
    <h1 className="text-2xl font-semibold text-gray-800 mb-4">Add Event</h1>

    {/* Event Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Event Name</label>
      <input
        type="text"
        name="eventName"
        placeholder="Enter event name"
        value={formData.eventName}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    {/* Event Date */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Event Date</label>
      <input
        type="date"
        name="eventDate"
        value={formData.eventDate}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    {/* Event Time */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Event Time</label>
      <input
        type="time"
        name="eventTime"
        value={formData.eventTime}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    {/* Venue */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Venue</label>
      <input
        type="text"
        name="venue"
        placeholder="Enter venue"
        value={formData.venue}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    {/* Total Tickets */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Total Tickets</label>
      <input
        type="number"
        name="totalTickets"
        placeholder="Enter total tickets"
        value={formData.totalTickets}
        onChange={handleChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    {/* Ticket Types */}
    {formData.ticketTypes.map((ticket, index) => (
      <div key={index} className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Ticket Type {index + 1}</label>
        <div className="flex space-x-2">
          <input
            type="text"
            name="type"
            placeholder="Ticket Type"
            value={ticket.type}
            onChange={(e) => handleTicketTypeChange(index, e)}
            className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={ticket.price}
            onChange={(e) => handleTicketTypeChange(index, e)}
            className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    ))}

    {/* Image Upload (Icon-Based) */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Event Image</label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-6 w-6 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex text-sm text-gray-600">
            <label
              htmlFor="image-upload"
              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
            >
              <span>Upload an image</span>
              <input
                id="image-upload"
                name="image"
                type="file"
                onChange={handleImageChange}
                className="sr-only"
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>

    {/* Submit Button */}
    <div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Create Event
      </button>
    </div>
  </form>
</div>
  );
  
};

export default AddEventForm;
