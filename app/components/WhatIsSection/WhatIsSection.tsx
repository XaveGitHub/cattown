'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const WhatIsSection = () => {
  return (
    <section className="py-24 bg-background-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold mb-6 pixel-corners">
              What is{' '}
              <span className="text-primary">Cat Town?</span>
            </h2>
            
            <p className="text-lg text-gray-300">
              Welcome to Cat Town, an idle game built on Base, driven by a self-sustainable, 
              fair economy. Purchase cats and combine floofs to increase your ETH yield 
              and $KIBBLE rewards.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 pixel-corners bg-primary flex-shrink-0 flex items-center justify-center">
                  <span className="text-sm">1</span>
                </div>
                <p className="text-gray-300">
                  Jump in and earn KIBBLE by completing quests, fishing or spinning the gacha
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 pixel-corners bg-primary flex-shrink-0 flex items-center justify-center">
                  <span className="text-sm">2</span>
                </div>
                <p className="text-gray-300">
                  Participate in seasonal onchain events and weekly fishing competitions
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 pixel-corners bg-primary flex-shrink-0 flex items-center justify-center">
                  <span className="text-sm">3</span>
                </div>
                <p className="text-gray-300">
                  Generate Floofs and grow your Cat Army to increase your yield
                </p>
              </div>
            </div>

            <button className="hero-button bg-green-500 mt-8">
              Get Started
            </button>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video relative pixel-corners overflow-hidden">
              <Image
                src="/cat-town.png"
                alt="Cat Town Screenshot - A cozy pixel art scene with cats and buildings"
                fill
                className="object-cover"
                style={{ imageRendering: 'pixelated' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-light/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection; 