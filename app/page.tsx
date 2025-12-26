import Cta from "@/components/Insights-page/Cta";
import Faq from "@/components/Insights-page/Faq";
import FeatureShowcaseSection from "@/components/Insights-page/FeatureShowcaseSection";
import GoBeyondSection from "@/components/Insights-page/GoBeyondSection";
import Hero from "@/components/Insights-page/Hero";
import ImageContainer from "@/components/Insights-page/ImageContainer";
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
      <FeatureShowcaseSection />
      <Faq />
      <Cta />
    </main>
  );
};

export default Home;
