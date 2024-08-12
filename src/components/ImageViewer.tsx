import React, { useState } from 'react';

const ImageViewer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleViewer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={toggleViewer}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all"
      >
        {isOpen ? 'Close Image' : 'View Image'}
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative">
            <img
              src="https://via.placeholder.com/300"
              alt="Example"
              className="rounded-md"
            />
            <button
              onClick={toggleViewer}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-red-600 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
