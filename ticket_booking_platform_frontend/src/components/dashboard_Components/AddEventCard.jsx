import React, { useState } from "react";
import axios from "axios";

const AddEventCard = () => {
  const [eventName, setEventName] = useState(""); // Store event name

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await axios.post("http://localhost:3000/event", {
        eventName: eventName, // Send event name to backend
      });

      console.log("Event added successfully:", response.data);
      alert("Event added successfully!");

      setEventName(""); // Clear input field after submission
    } catch (error) {
      console.error("Error adding event:", error);
      alert("Failed to add event.");
    }
  };

  return (
    <div>
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="name">Event Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)} // Update state
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEventCard;
