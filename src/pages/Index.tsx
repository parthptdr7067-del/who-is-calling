import { HeroSection } from "@/components/HeroSection";
import { NumberLookup } from "@/components/NumberLookup";
import { SpamProtection } from "@/components/SpamProtection";
import { CommunityFeatures } from "@/components/CommunityFeatures";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NumberLookup />
      <SpamProtection />
      <CommunityFeatures />
    </div>
  );
};

export default Index;
