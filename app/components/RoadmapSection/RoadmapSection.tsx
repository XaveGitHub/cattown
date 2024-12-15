'use client';

import { motion } from 'framer-motion';

interface RoadmapItem {
  quarter: string;
  side: 'left' | 'right';
  features: {
    title: string;
    description: string;
  }[];
}

const roadmapItems: RoadmapItem[] = [
  {
    quarter: 'Q4 2024',
    side: 'left',
    features: [
      {
        title: 'Game Updates',
        description: 'New UI, Weather System, Equipment Screen, Fishing V2'
      },
      {
        title: 'Cooking System',
        description: 'Breath of the Wild style cooking with special recipes and upgradable pots'
      },
      {
        title: 'Marketing & Events',
        description: '2.5M $KIBBLE Airdrop, Christmas events and quests'
      }
    ]
  },
  {
    quarter: 'Q1 2025',
    side: 'right',
    features: [
      {
        title: 'Battle System',
        description: 'JRPG-style turn based battles with tactical grid system'
      },
      {
        title: 'Social Features',
        description: 'Friends list, Clans, Chat system, Player Hideouts'
      },
      {
        title: 'Adventure Mode',
        description: 'Story quests combining passive and active missions with combat'
      }
    ]
  }
];

const RoadmapCard = ({ feature, side }: { feature: RoadmapItem['features'][0], side: 'left' | 'right' }) => (
  <motion.div
    initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`w-[calc(50%-40px)] ${side === 'right' ? 'ml-auto' : 'mr-auto'} 
               relative group`}
  >
    <div className="bg-background-light/50 backdrop-blur-sm p-6 pixel-corners relative
                  border-2 border-primary/30 hover:border-primary/50 transition-colors">
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary" />

      <h4 className="text-xl font-bold text-primary mb-2">{feature.title}</h4>
      <p className="text-gray-300">{feature.description}</p>
    </div>
  </motion.div>
);

const TimelineNode = () => (
  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4">
    <div className="w-full h-full bg-primary pixel-corners animate-pulse" />
  </div>
);

const TimelineSection = ({ item }: { item: RoadmapItem }) => (
  <div className="relative mb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl font-bold text-center mb-8"
    >
      <div className="inline-block px-6 py-2 bg-primary/10 pixel-corners border-2 border-primary">
        {item.quarter}
      </div>
    </motion.div>

    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
           style={{ 
             background: 'repeating-linear-gradient(to bottom, #8B5CF6 2px, transparent 2px, transparent 4px)',
             imageRendering: 'pixelated'
           }} 
      />
      
      {item.features.map((_, idx) => (
        <div key={idx} className="absolute left-1/2 transform -translate-x-1/2"
             style={{ top: `${idx * 200 + 100}px` }}>
          <TimelineNode />
        </div>
      ))}
      
      <div className="space-y-12">
        {item.features.map((feature, idx) => (
          <RoadmapCard 
            key={feature.title} 
            feature={feature} 
            side={idx % 2 === 0 ? 'left' : 'right'} 
          />
        ))}
      </div>
    </div>
  </div>
);

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-light opacity-50" />
      
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 pixel-corners"
        >
          Roadmap
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {roadmapItems.map((item) => (
            <TimelineSection key={item.quarter} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection; 