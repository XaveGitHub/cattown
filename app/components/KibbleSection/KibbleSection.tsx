'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const TokenStats = ({ label, value }: { label: string; value: string }) => {
  return (
    <motion.div
      className="bg-background-light/50 backdrop-blur-sm p-8 pixel-corners relative group
                 border-2 border-primary/30 hover:border-primary/50 transition-all duration-300"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <TokenStats label="Maximum Supply" value="1,000,000,000" />
          <TokenStats label="Burnt So Far" value="560,023,423" />
          <TokenStats label="Locked for Future" value="265,330,890" />
          <TokenStats label="Circulating Supply" value="175M" />
        </div>
      </div>
    </section>
  );
};

export default KibbleSection; 