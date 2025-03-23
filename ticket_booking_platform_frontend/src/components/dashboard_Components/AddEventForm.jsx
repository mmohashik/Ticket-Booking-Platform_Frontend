import React, { useState } from "react";
import axios from "axios";

const AddEventForm = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    venue: "",
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
  data.append("ticketTypes", JSON.stringify(formData.ticketTypes)); // Stringify the array
  data.append("image", formData.image);

  try {
    const response = await axios.post("http://localhost:3000/event", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("Event created:", response.data);
  } catch (error) {
    console.error("Error creating event:", error);
  }
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="eventName"
        placeholder="Event Name"
        value={formData.eventName}
        onChange={handleChange}
      />
      <input
        type="date"
        name="eventDate"
        value={formData.eventDate}
        onChange={handleChange}
      />
      <input
        type="time"
        name="eventTime"
        value={formData.eventTime}
        onChange={handleChange}
      />
      <input
        type="text"
        name="venue"
        placeholder="Venue"
        value={formData.venue}
        onChange={handleChange}
      />
      {formData.ticketTypes.map((ticket, index) => (
        <div key={index}>
          <input
            type="text"
            name="type"
            placeholder="Ticket Type"
            value={ticket.type}
            onChange={(e) => handleTicketTypeChange(index, e)}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={ticket.price}
            onChange={(e) => handleTicketTypeChange(index, e)}
          />
        </div>
      ))}
      <input type="file" name="image" onChange={handleImageChange} />
      <button type="submit">Create Event</button>
    </form>
    </div>
  );
  
};

export default AddEventForm;
