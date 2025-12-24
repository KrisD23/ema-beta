import Cta from "@/components/Insights-page/Cta";
import FeatureShowcase from "@/components/Insights-page/FeatureShowcase";
import GoBeyondSection from "@/components/Insights-page/GoBeyondSection";
import Hero from "@/components/Insights-page/Hero";
import SolutionCards from "@/components/Insights-page/SolutionCards";

const Home = () => {
  return (
    <main>
      <Hero />
      <GoBeyondSection />
      <SolutionCards />
      <FeatureShowcase />
      <Cta />
    </main>
  );
};

export default Home;
