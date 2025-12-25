import React from "react";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="sm:min-h-[120vh] max-w-7xl mx-auto px-6 pb-10 sm:pb-0 pt-28 relative overflow-hidden"
    >
      {/* 🔹 Foreground Content */}
      <div className="relative z-10 max-w-xl">
        <p className="text-lg sm:text-xl font-normal text-green-700 mb-4">
          KNOWLEDGE INSIGHTS
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal text-gray-900 leading-tight mb-6">
          Empower Teams with <br />
          the Right Knowledge
        </h1>

        <p className="text-base sm:text-lg text-gray-600 max-w-[250px] sm:max-w-sm leading-relaxed">
          Unify all your enterprise knowledge into a single source of truth, so
          you can ask questions, surface insights, and take action — right when
          you need it.
        </p>
      </div>

      {/* 🔹 Background Lottie */}
      <div className="sm:absolute sm:inset-0 z-0 pointer-events-none sm:my-20">
        <LottieAnimation className="w-full h-full opacity-90 scale-125 sm:scale-100" />
      </div>
    </section>
  );
};

export default Hero;
