import React from 'react';

const EventItem = ({ event }) => {
  return (
    // Add w-96 for a fixed width, or use responsive widths like md:w-96
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out w-100 h-15 mx-2 hover:scale-110">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h5 className="text-lg font-bold text-orange-600">{event.title}</h5>
        <p className="text-gray-700">{event.date}</p>
        <p className="text-gray-600">{event.description}</p>
      </div>
    </div>
  );
}

export default EventItem;
