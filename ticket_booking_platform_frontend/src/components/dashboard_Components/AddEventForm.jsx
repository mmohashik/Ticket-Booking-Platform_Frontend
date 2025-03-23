import React, { useState } from "react";
import axios from "axios";

const AddEventForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
    venue: "",
    totalTickets: "",
    ticketTypes: [
      { type: "General", price: 0 }, // General ticket
      { type: "VIP", price: 0 }, // VIP ticket
      { type: "VVIP", price: 0 }, // VVIP ticket
    ],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTicketTypeChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTicketTypes = [...formData.ticketTypes];
    updatedTicketTypes[index][name] = value;
    setFormData({ ...formData, ticketTypes: updatedTicketTypes });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const venues = [
    { id: "1", name: "Venue 1" },
    { id: "2", name: "Venue 2" },
    { id: "3", name: "Venue 3" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create a new FormData object to send the data
    const data = new FormData();
  
    // Append basic event details
    data.append("eventName", formData.eventName);
    data.append("eventDescription", formData.eventDescription);
    data.append("eventDate", formData.eventDate);
    data.append("eventTime", formData.eventTime);
    data.append("venue", formData.venue);
    data.append("totalTickets", formData.totalTickets);
  
    // Append ticket types as a JSON string
    data.append("ticketTypes", JSON.stringify(formData.ticketTypes)); // Stringify the array
  
    // Append the image file
    data.append("image", formData.image);
  
    try {
      // Send the data to the backend
      const response = await axios.post("http://localhost:3000/event", data, {
        headers: { "Content-Type": "multipart/form-data" }, // Set the content type for file upload
      });
  
      // Log the response and close the modal
      console.log("Event created:", response.data);
      onClose(); // Close the modal after successful submission
    } catch (error) {
      // Log any errors
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="p-3 bg-white rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Form Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Add Event</h1>

        {/* Event Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Name
          </label>
          <input
            type="text"
            name="eventName"
            placeholder="Enter event name"
            value={formData.eventName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Event Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Description
          </label>
          <input
            type="text"
            name="eventDescription"
            placeholder="Enter Description"
            value={formData.eventDescription}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="block text-sm font-medium text-gray-700">
          <div className="flex space-x-2">
            {/* Event Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Event Date
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="mt-1 block w-40 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Event Time */}
            <div className="pl-2">
              <label className="block text-sm font-medium text-gray-700">
                Event Time
              </label>
              <input
                type="time"
                name="eventTime"
                value={formData.eventTime}
                onChange={handleChange}
                className="mt-1 block w-45 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Venue Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Venue
          </label>
          <select
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Venue</option>
            {venues.map((venue) => (
              <option key={venue.id} value={venue.name}>
                {venue.name}
              </option>
            ))}
          </select>
        </div>

        {/* Total Tickets */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Total Tickets
          </label>
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
        <div className="space-y-4">
          {/* General Ticket */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              General Ticket
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                name="type"
                value="General"
                readOnly // Make the field read-only since the type is fixed
                className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.ticketTypes[0].price} // Access the first ticket type (General)
                onChange={(e) => handleTicketTypeChange(0, e)} // Update the first ticket type
                className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* VIP Ticket */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              VIP Ticket
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                name="type"
                value="VIP"
                readOnly // Make the field read-only since the type is fixed
                className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.ticketTypes[1].price} // Access the second ticket type (VIP)
                onChange={(e) => handleTicketTypeChange(1, e)} // Update the second ticket type
                className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* VVIP Ticket */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              VVIP Ticket
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                name="type"
                value="VVIP"
                readOnly // Make the field read-only since the type is fixed
                className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.ticketTypes[2].price} // Access the third ticket type (VVIP)
                onChange={(e) => handleTicketTypeChange(2, e)} // Update the third ticket type
                className="w-1/2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Image Upload (Icon-Based) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Event Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-3 w-3 text-gray-400"
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
