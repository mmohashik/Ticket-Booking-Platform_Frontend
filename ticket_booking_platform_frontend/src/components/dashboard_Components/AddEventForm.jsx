import React, { useState, useEffect } from "react";
import axios from "axios";

const AddEventForm = () => {
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    venue: "",
    auditorium: "",
    ticketTypes: "",
    image: null,
  });

  const [auditoriums, setAuditoriums] = useState([]);
  const ticketTypes = ["VIP", "Regular", "Student"];

  useEffect(() => {
    // Fetch auditoriums from API (Mocking API response)
    setAuditoriums(["Main Hall", "Conference Room", "Outdoor Arena"]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleFileChange = (e) => {
    setEventData({ ...eventData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(eventData).forEach((key) => {
      formData.append(key, eventData[key]);
    });

    try {
      const response = await axios.post("http://localhost:3000/event", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Event added successfully:", response.data);
      alert("Event added successfully!");

      setEventData({
        eventName: "",
        eventDate: "",
        eventTime: "",
        venue: "",
        auditorium: "",
        ticketTypes: "",
        image: null,
      });
    } catch (error) {
      console.error("Error adding event:", error.response?.data || error);
      alert("Failed to add event.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input type="text" name="eventName" value={eventData.eventName} onChange={handleChange} placeholder="Event Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
        <input type="date" name="eventDate" value={eventData.eventDate} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
        <input type="time" name="eventTime" value={eventData.eventTime} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
        <input type="text" name="venue" value={eventData.venue} onChange={handleChange} placeholder="Venue" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />

        <select name="auditorium" value={eventData.auditorium} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required>
          <option value="">Select Auditorium</option>
          {auditoriums.map((auditorium, index) => (
            <option key={index} value={auditorium}>{auditorium}</option>
          ))}
        </select>

        <select name="ticketTypes" value={eventData.ticketTypes} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required>
          <option value="">Select Ticket Type</option>
          {ticketTypes.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>

        <input type="file" name="image" onChange={handleFileChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />

        <button type="submit" className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventForm;
