import React from "react";
import Hero from './../Components/Hero';          // Corrected path
import EventList from './../Components/featuredEvents/EventList';  // Corrected path
import AboutUs from './../Components/AboutUs';  // Corrected path

function HomePage() {
  return (
    <>
      <Hero />
      <EventList />
      <AboutUs />
      {/* Additional sections can be added here as the site grows */}
    </>
  );
}

export default HomePage;

