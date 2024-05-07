import React from 'react';
import Video from '../assets/hero-video.mp4'

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <video autoPlay loop muted className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* Semi-transparent Overlay */}
            <div className="absolute z-10 w-full h-full bg-black opacity-60"></div>

            {/* Text Content */}
            <div className="flex flex-col items-center justify-center h-full z-20">
                <h1 className="text-white text-5xl font-bold animate-slow-fade-in" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.50)' }}>
                    Experience Live Music
                </h1>
                <p className="text-white text-xl mt-4 animate-slow-fade-in" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.50)' }}>
                    Join the world's best concerts from home.
                </p>
            </div>
        </div>
    );
}

export default Hero;

