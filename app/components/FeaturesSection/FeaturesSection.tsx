'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  details: string;
  index: number;
}

const FeatureCard = ({ title, description, image, details, index }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-102 
                 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: 0,
        animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        {/* Animated corner decorations */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-0 w-8 h-0.5 bg-yellow-400/60 transition-all duration-300 ${isHovered ? 'w-16' : 'w-8'}`} />
          <div className={`absolute top-0 left-0 w-0.5 h-8 bg-yellow-400/60 transition-all duration-300 ${isHovered ? 'h-16' : 'h-8'}`} />
          <div className={`absolute top-0 right-0 w-8 h-0.5 bg-yellow-400/60 transition-all duration-300 ${isHovered ? 'w-16' : 'w-8'}`} />
          <div className={`absolute top-0 right-0 w-0.5 h-8 bg-yellow-400/60 transition-all duration-300 ${isHovered ? 'h-16' : 'h-8'}`} />
          <div className={`absolute bottom-0 left-0 w-8 h-0.5 bg-yellow-400/60 transition-all duration-300 ${isHovered ? 'w-16' : 'w-8'}`} />
          <div className={`absolute bottom-0 left-0 w-0.5 h-8 bg-yellow-400/60 transition-all duration-300 ${isHovered ? 'h-16' : 'h-8'}`} />
          <div className={`absolute bottom-0 right-0 w-8 h-0.5 bg-yellow-400/60 transition-all duration-300 ${isHovered ? 'w-16' : 'w-8'}`} />
          <div className={`absolute bottom-0 right-0 w-0.5 h-8 bg-yellow-400/60 transition-all duration-300 ${isHovered ? 'h-16' : 'h-8'}`} />
        </div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white z-10">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-300 mb-4 font-medium">{description}</p>
        <p className="text-sm text-gray-400 leading-relaxed">{details}</p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      title: "Weekend Fishing Competition",
      description: "Join Isabella's Weekly Fishing Event!",
      image: "/preview-fishing.webp",
      details: "Join in with a provably fair onchain fishing experience! Every weekend the town's local angling guru Isabella throws a fishing competition on her lake. Fish up the biggest fish you can for your slice of the prize pool!"
    },
    {
      title: "Rosie's Gacha Shop",
      description: "Discover Rare Treasures!",
      image: "/preview-buy-kibble.webp",
      details: "Meet Rosie, our delightfully eccentric shopkeeper who's secretly a gacha-obsessed collector extraordinaire! Help fellow villagers complete their collections, and maybe (just maybe!) find that ultra-rare jackpot everyone's been buzzing about - the fabled Lucky Golden Cat!"
    },
    {
      title: "Adventure Beyond",
      description: "Strategic Turn-Based Adventures",
      image: "/preview-battle.webp",
      details: "Embark outside of Cat Town and into the wilderness. Take part in a strategic turn based RPG, collecting valuable treasures, cosmetics and powerful items along the way! With treasure filled caves and moors to explore why wait any longer?"
    }
  ];

  return (
    <section className="py-20 relative" id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            Game Features
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500/60" />
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            Discover the magical world of Cat Town and its exciting features!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 