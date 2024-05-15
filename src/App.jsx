import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import EventsPage from "./Pages/EventsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<EventsPage />} />
        {/* Future Routes can be added here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
