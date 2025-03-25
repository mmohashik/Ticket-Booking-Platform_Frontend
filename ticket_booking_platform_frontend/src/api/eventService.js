const API_BASE_URL = 'http://localhost:3000'; // Remove /api from here

// Fetch all events
export const fetchEvents = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/events`); // Add /api here
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch events');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch Error:', {
      message: error.message,
      url: `${API_BASE_URL}/api/events`,
      time: new Date().toISOString()
    });
    throw error;
  }
};

// Delete an event
export const deleteEvent = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/events/${id}`, { // Add /api here
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to delete event');
    }
    return await response.json();
  } catch (error) {
    console.error('Delete Error:', {
      message: error.message,
      eventId: id,
      time: new Date().toISOString()
    });
    throw error;
  }
};

// Create a new event
export const createEvent = async (eventData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/events`, { // Add /api here
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create event');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Create Error:', {
      message: error.message,
      eventData,
      time: new Date().toISOString()
    });
    throw error;
  }
};