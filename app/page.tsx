import Cta from "@/components/Insights-page/Cta";
import FeatureShowcase from "@/components/Insights-page/FeatureShowcase";
import GoBeyondSection from "@/components/Insights-page/GoBeyondSection";
import Hero from "@/components/Insights-page/Hero";
import ImageContainer from "@/components/Insights-page/ImageContainer";
import SolutionCards from "@/components/Insights-page/SolutionCards";
import SolutionCardSection from "@/components/Insights-page/SolutionCardSection";
import WhatSection from "@/components/Insights-page/WhatSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <WhatSection />
      <ImageContainer />
      <GoBeyondSection />
      <SolutionCardSection />
      <FeatureShowcase />
      <Cta />
    </main>
  );
};

export default Home;
