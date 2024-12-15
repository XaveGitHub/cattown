'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const TokenStats = ({ label, value }: { label: string; value: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="bg-background-light/50 backdrop-blur-sm p-8 pixel-corners relative group
                 border-2 border-primary/30 hover:border-primary/50 transition-all duration-300
                 flex flex-col items-center text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative z-10">
        <h4 className="text-3xl font-bold text-primary mb-4 group-hover:scale-105 transition-transform">
          {value}
        </h4>
        <p className="text-gray-300">{label}</p>
      </div>
    </motion.div>
  );
};

const KibbleSection = () => {
  return (
    <section id="kibble" className="py-32 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <Image 
              src="/kibble.png"
              alt="KIBBLE"
              width={120}
              height={120}
              className="mx-auto mb-8"
              style={{ imageRendering: 'pixelated' }}
            />
            <h2 className="text-5xl font-bold mb-6">
              KIBBLE Token
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The governance token of Cat Town, empowering players to shape the future of the game
            </p>
          </motion.div>
        </div>

        {/* Token Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <TokenStats label="Maximum Supply" value="1,000,000,000" />
          <TokenStats label="Burnt So Far" value="560,023,423" />
          <TokenStats label="Locked for Future" value="265,330,890" />
          <TokenStats label="Circulating Supply" value="175M" />
        </div>

        {/* Token Info Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background-light/30 p-8 pixel-corners"
            >
              <h3 className="text-2xl font-bold mb-6">What is KIBBLE?</h3>
              <p className="text-gray-300 leading-relaxed">
                KIBBLE is the governance token that powers Cat Town's ecosystem. 
                Stake KIBBLE to earn rewards, participate in key governance votes, 
                and shape the future of Cat Town.
              </p>
            </motion.div>

            {/* Token Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background-light/30 p-8 pixel-corners"
            >
              <h3 className="text-2xl font-bold mb-6">Contract Address</h3>
              <div className="flex items-center justify-between bg-background/50 p-4 pixel-corners">
                <code className="text-primary text-sm">0x64cc19a52f4d631ef5be07947caba14ae00c52eb</code>
                <button 
                  onClick={() => navigator.clipboard.writeText('0x64cc19a52f4d631ef5be07947caba14ae00c52eb')}
                  className="p-2 hover:bg-primary/20 rounded transition-colors"
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    className="text-gray-400"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background-light/30 p-8 pixel-corners"
            >
              <h3 className="text-2xl font-bold mb-6">Use Cases</h3>
              <ul className="space-y-4">
                {[
                  "Stake to earn rewards from the ecosystem",
                  "Vote on game development and features",
                  "Purchase exclusive in-game items",
                  "Trade on major DEXs",
                  "Participate in special events",
                  "Access premium game features"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary pixel-corners flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Trading Venues */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background-light/30 p-8 pixel-corners"
            >
              <h3 className="text-2xl font-bold mb-6">Where to Trade</h3>
              <div className="grid grid-cols-2 gap-4">
                <a href="https://app.uniswap.org" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center p-6 bg-background/50 pixel-corners
                            hover:bg-background/70 transition-colors group"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">🦄</span>
                  <span className="ml-3 text-gray-300 group-hover:text-white transition-colors">
                    Uniswap
                  </span>
                </a>
                <a href="https://app.sushi.com" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center p-6 bg-background/50 pixel-corners
                            hover:bg-background/70 transition-colors group"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">🍣</span>
                  <span className="ml-3 text-gray-300 group-hover:text-white transition-colors">
                    SushiSwap
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KibbleSection; 