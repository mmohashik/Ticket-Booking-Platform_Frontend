import React, {useState} from "react";
import AddEventForm from "./AddEventForm";

const AddEventButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      
        <div className="p-4">
          {/* Button to open the modal */}
          <button
            onClick={openModal}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Event
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-5" // Semi-transparent background
              onClick={closeModal} // Close modal when clicking the background
            >
              <div
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
                onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>

                {/* Event Form */}
                <AddEventForm onClose={closeModal} />
              </div>
            </div>
          )}
        </div>
      </div>
    
  );
};

export default AddEventButton;
