import React, { useEffect, useRef, useState } from 'react';
import EventItem from './EventItem';
import concert_1 from '../../assets/concert_1.png';
import concert_2 from '../../assets/concert_2.jpeg';
import concert_3 from '../../assets/concert_3.jpeg';
import concert_4 from '../../assets/concert_4.jpeg';
import concert_5 from '../../assets/concert_5.jpeg';

const events = [
  { id: 1, title: 'Live Concert by John Doe', date: 'June 12, 2024', description: 'Experience thrilling live performances.', image: concert_1 },
  { id: 2, title: 'Virtual Opera Night', date: 'July 5, 2024', description: 'Enjoy the mesmerizing voice from the top opera singers.', image: concert_2 },
  { id: 3, title: 'Jazz Night', date: 'August 20, 2024', description: 'Smooth jazz from renowned musicians.', image: concert_3 },
  { id: 4, title: 'Rock & Roll Revival', date: 'September 15, 2024', description: 'Rock all night with classic and modern hits.', image: concert_4 },
  { id: 5, title: 'Electronic Beats Festival', date: 'October 3, 2024', description: 'Dance to electronic music from top DJs.', image: concert_5 }
];

const EventList = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(2); // Starts from middle index assuming 5 events.

    useEffect(() => {
      const scrollElement = scrollRef.current;
      const handleAutoScroll = () => {
        if (scrollElement) {
          const cardWidth = scrollElement.firstChild.offsetWidth;
          const nextPosition = scrollElement.scrollLeft + cardWidth;
          const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

          if (scrollElement.scrollLeft >= maxScrollLeft) {
            scrollElement.scrollTo({ left: 0, behavior: 'smooth' }); // Reset to start
          } else {
            scrollElement.scrollTo({ left: nextPosition, behavior: 'smooth' });
          }
        }
      };

      // Initial scroll to middle
      setTimeout(() => {
        if (scrollElement) {
          const cardWidth = scrollElement.firstChild.offsetWidth;
          scrollElement.scrollTo({ left: cardWidth * 2, behavior: 'smooth' }); // Middle card
        }
      }, 100);

      const interval = setInterval(handleAutoScroll, 3000);

      scrollElement.addEventListener('scroll', () => {
        const cardWidth = scrollElement.firstChild.offsetWidth;
        const newIndex = Math.round(scrollElement.scrollLeft / cardWidth);
        setActiveIndex(newIndex);
      });

      return () => {
        clearInterval(interval);
        scrollElement.removeEventListener('scroll', handleAutoScroll);
      };
    }, []);

    return (
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-evenly cursor-pointer">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">Featured Events</h1>
        <div className="flex overflow-x-auto scrollbar-hide" style={{ width: 'calc(100vw - 2rem)', padding: '0 1rem' }} ref={scrollRef}>
          {events.map((event, index) => (
            <div key={event.id} className="flex-none w-[30%] min-w-[280px] mx-2">
              <EventItem event={event} />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {events.map((_, index) => (
            <span key={index} className={`h-2 w-2 mx-1 rounded-full ${index === activeIndex ? 'bg-orange-600' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>
    );
  }

export default EventList;
