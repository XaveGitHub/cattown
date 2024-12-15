import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import WhatIsSection from './components/WhatIsSection/WhatIsSection';
import RoadmapSection from './components/RoadmapSection/RoadmapSection';
import KibbleSection from './components/KibbleSection/KibbleSection';
import CommunitySection from './components/CommunitySection/CommunitySection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <WhatIsSection />
      <KibbleSection />
      <RoadmapSection />
      <CommunitySection />
    </main>
  );
}
