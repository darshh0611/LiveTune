import React, { useRef, useState } from 'react';
import EventCard from '../Components/EventCard';
import concert_1 from '../assets/concert_1.png';
import concert_2 from '../assets/concert_2.jpeg';
import concert_3 from '../assets/concert_3.jpeg';

const eventsData = [
  { id: 1, title: 'Live Concert by John Doe', date: 'June 12, 2024', description: 'Experience thrilling live performances.', image: concert_1, genre: 'Rock', location: 'New York', price: '$30', time: '7:00 PM' },
  { id: 2, title: 'Virtual Opera Night', date: 'July 5, 2024', description: 'Enjoy the mesmerizing voice from the top opera singers.', image: concert_2, genre: 'Classical', location: 'Online', price: '$20', time: '8:00 PM' },
  { id: 3, title: 'Jazz Night', date: 'August 20, 2024', description: 'Smooth jazz from renowned musicians.', image: concert_3, genre: 'Jazz', location: 'Chicago', price: '$25', time: '6:30 PM' },
  // Add more events as needed
];

const EventsPage = () => {
  const [events, setEvents] = useState(eventsData);
  const eventListRef = useRef(null);

  // Filter events based on criteria
  const filterEvents = (criteria) => {
    // Implement your filtering logic here
    // For demonstration, let's filter by event title containing the search criteria
    const filteredEvents = eventsData.filter(event => event.title.toLowerCase().includes(criteria.toLowerCase()));
    setEvents(filteredEvents);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-orange-600 mb-6 flex justify-center items-center ">All Events</h2>
      {/* Filters */}
      <div className="flex flex-wrap mb-4">
        {/* Search */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-4">
          <input type="text" placeholder="Search events..." className="px-4 py-2 border border-gray-300 rounded-md w-full" onChange={(e) => filterEvents(e.target.value)} />
        </div>
        {/* Price */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md w-full">
            <option value="">Select Price</option>
            <option value="0-10">$0 - $10</option>
            <option value="10-20">$10 - $20</option>
            <option value="20-30">$20 - $30</option>
            {/* Add more price ranges as needed */}
          </select>
        </div>
        {/* Location */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-4">
          <input type="text" placeholder="Location" className="px-4 py-2 border border-gray-300 rounded-md w-full" />
        </div>
        {/* Time */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-4">
          <input type="time" placeholder="Time" className="px-4 py-2 border border-gray-300 rounded-md w-full" />
        </div>
        {/* Genre */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 px-4 mb-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md w-full">
            <option value="">Select Genre</option>
            <option value="Rock">Rock</option>
            <option value="Jazz">Jazz</option>
            <option value="Classical">Classical</option>
            {/* Add more genres as needed */}
          </select>
        </div>
      </div>
      {/* Event Cards */}
      <div className="flex flex-wrap -mx-4 items-center justify-center">
        {events.map(event => (
          <div key={event.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-4 mb-4">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
