"use client";

import { useState } from "react";
import Image from "next/image";

const GoBeyondSection = () => {
  const [activeTab, setActiveTab] = useState<"before" | "after">("before");

  return (
    <section className="bg-[#A5CFB4] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif  leading-tight mb-6">
              Go Beyond
              <br />
              Typical Search
            </h2>
            <p className="/80 text-base md:text-lg leading-relaxed max-w-md">
              Traditional enterprise search tools only point you to possible
              answers.
              <br />
              Ema&apos;s agentic intelligence does the work—querying multiple
              sources, running analytics, building visualizations, and
              automating actions. It&apos;s like having an entire team of AI
              employees ready to act on your behalf.
            </p>
          </div>

          {/* Right Content - Toggle and Image */}
          <div className="lg:w-1/2 flex flex-col items-center">
            {/* Toggle Button */}
            <div className="bg-white rounded-full p-1 flex mb-6 shadow-md">
              <button
                onClick={() => setActiveTab("before")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "before"
                    ? "bg-[#2d5a47] text-white"
                    : " hover:bg-gray-100"
                }`}
              >
                BEFORE
              </button>
              <button
                onClick={() => setActiveTab("after")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === "after"
                    ? "bg-[#2d5a47] text-white"
                    : " hover:bg-gray-100"
                }`}
              >
                AFTER
              </button>
            </div>

            {/* Image Container */}
            <div className="relative w-full max-w-lg">
              <div className="relative">
                <Image
                  src={
                    activeTab === "before"
                      ? "/go-beyond-section/img1.png"
                      : "/go-beyond-section/img2.png"
                  }
                  alt={`${activeTab} comparison`}
                  width={600}
                  height={450}
                  className="rounded-lg transition-opacity duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoBeyondSection;
