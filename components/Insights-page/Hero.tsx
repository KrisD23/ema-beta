import { getHero } from "@/lib/action";
import LottieAnimation from "./LottieAnimation";

const Hero = async () => {
  const hero = await getHero();
  return (
    <section
      id="hero"
      className="sm:min-h-[130vh] 2xl:min-h-[120vh] max-w-7xl mx-auto px-6 pb-10 sm:pb-0 pt-28 relative overflow-hidden"
    >
      {/* Foreground Content */}
      <div className="relative z-10 max-w-xl">
        <p className="text-lg sm:text-xl font-medium font-satoshi text-primary-green mb-4">
          {hero.fields.heroBatch?.toString()}
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-satoshi font-medium leading-tight mb-6">
          {hero.fields.heading?.toString()}
        </h1>

        <p className="text-base sm:text-lg font-satoshi font-normal max-w-62.5 sm:max-w-sm leading-relaxed">
          {hero.fields.description?.toString()}
        </p>
      </div>

      {/* Background Lottie */}
      <div className="sm:absolute sm:inset-0 z-0 pointer-events-none sm:my-20">
        <LottieAnimation className="w-full h-full opacity-90 scale-125 sm:scale-100" />
      </div>
    </section>
  );
};

export default Hero;
