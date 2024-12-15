'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import VideoModal from '../VideoModal/VideoModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/40 z-0" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Welcome to Cat Town
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Explore, fish, and build your dream town with adorable pixel cats!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://cat.town/signin"
                className="hero-button inline-flex items-center justify-center bg-green-500"
              >
                Play Now
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="hero-button bg-purple-600"
              >
                Watch Trailer
              </button>
            </div>
          </div>

          {/* Right side - Video thumbnail */}
          <div className="flex-1 relative w-full max-w-2xl">
            <div 
              className="aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={`https://img.youtube.com/vi/f1Ln6k4LatU/maxresdefault.jpg`}
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-black ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId="f1Ln6k4LatU"
      />
    </section>
  );
};

export default HeroSection; 