'use client';

import { motion } from 'framer-motion';

const SocialCard = ({ platform, link, emoji }: { platform: string; link: string; emoji: string }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-background-light/30 p-8 pixel-corners relative group
               border-2 border-primary/30 hover:border-primary/50 transition-all duration-300"
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex flex-col items-center text-center space-y-4">
      <span className="text-4xl group-hover:scale-110 transition-transform">{emoji}</span>
      <h3 className="text-xl font-bold text-primary">{platform}</h3>
    </div>
  </motion.a>
);

const CommunitySection = () => {
  const socials = [
    {
      platform: 'Discord',
      link: 'https://discord.gg/cattown',
      emoji: '💬'
    },
    {
      platform: 'X',
      link: 'https://x.com/CatTownBase',
      emoji: '✖️'
    },
    {
      platform: 'Telegram',
      link: 'https://t.me/cattownofficial',
      emoji: '📱'
    }
  ];

  return (
    <section id="community" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-light opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold pixel-corners inline-block px-6 py-2 bg-primary/10"
          >
            Join Our Community
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Connect with fellow Cat Town players and stay updated with the latest news
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socials.map((social) => (
            <SocialCard key={social.platform} {...social} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'Discord Members', value: '50K+' },
            { label: 'X Followers', value: '25K+' },
            { label: 'Active Players', value: '10K+' }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 