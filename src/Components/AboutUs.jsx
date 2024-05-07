import React from 'react';

const AboutUs = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-4xl font-bold text-center text-orange-600 mb-6">About LiveTune</h2>
            <p className="text-lg text-gray-800">
                Welcome to LiveTune, the ultimate destination for live concert experiences from the comfort of your home. At LiveTune, we believe that music should know no boundaries, and thrilling live performances should be accessible to everyone, everywhere.
            </p>
            <h3 className="text-3xl font-bold text-orange-500 mt-8 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-800">
                Our mission is to bring you closer to the music you love, connecting you directly to live events across the globe. Whether you're into rock, jazz, classical, or electronic music, LiveTune offers a front-row experience to spectacular concerts without you having to leave your house.
            </p>
            <h3 className="text-3xl font-bold text-orange-500 mt-8 mb-4">How It Works</h3>
            <p className="text-lg text-gray-800">
                LiveTune streams concerts live, using cutting-edge technology to deliver high-definition video and crystal-clear audio. Just choose your event, purchase a ticket, and enjoy a live streaming experience like no other. You can watch on your phone, tablet, computer, or TV—wherever you have internet access.
            </p>
            <h3 className="text-3xl font-bold text-orange-500 mt-8 mb-4">Why Choose Us</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
                <li>Accessibility: Attend concerts from leading artists without geographical barriers.</li>
                <li>Quality: Experience high-definition streaming with superior sound.</li>
                <li>Community: Join a global community of music lovers. Share experiences and connect with other fans during live events.</li>
                <li>Convenience: Easy access, with no need to travel. Save time and money while enjoying your favorite music live.</li>
            </ul>
            <div className="text-center mt-10">
                <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 transition-colors">
                    Join Us Today
                </button>
            </div>
        </div>
    );
}

export default AboutUs;
