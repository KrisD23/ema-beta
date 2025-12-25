"use client";

import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import anim1 from "@/public/animations/Knowledge_Insight_scroll_animation/KI_scroll1_sq.json";
import anim2 from "@/public/animations/Knowledge_Insight_scroll_animation/KI_scroll2_sq.json";
import anim3 from "@/public/animations/Knowledge_Insight_scroll_animation/KI_scroll3_sq.json";
import anim4 from "@/public/animations/Knowledge_Insight_scroll_animation/KI_scroll4_sq.json";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const animations = [anim1, anim2, anim3, anim4];

const content = [
  {
    step: "01",
    title: "One-stop search and analysis",
    desc: "Bring together documents, files, apps, and data—no more endless hunting in siloed systems.",
    bg: "bg-[#E6E3D5]",
    text: "text-gray-900",
  },
  {
    step: "02",
    title: "Agentic intelligence",
    desc: "Ema doesn’t just “find” information; it can take multiple steps, query databases, write code, and automate follow-ups.",
    bg: "bg-[#202F3C]",
    text: "text-white",
  },
  {
    step: "03",
    title: "Contextual answers, zero guesswork",
    desc: "Every response is cited at the paragraph level, with built-in charts, code snippets, and more.",
    bg: "bg-[#A5CFB4]",
    text: "text-gray-900",
  },
  {
    step: "04",
    title: "Self-updating knowledge",
    desc: "Connect new data automatically—Ema keeps learning from your latest tools, files, and repositories.",
    bg: "bg-[#1F8844]",
    text: "text-white",
  },
];

const WhatSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640); // sm breakpoint
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${content.length * 100}%`,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const index = Math.min(
            content.length - 1,
            Math.floor(self.progress * content.length)
          );
          setActive(index);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full relative">
      {/* Heading */}
      <div className="max-w-6xl mx-auto pt-20 sm:pt-32 px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight">
          Go beyond enterprise <br />
          search perform action <br />
          at scale
        </h2>
      </div>

      <div ref={sectionRef} className="pt-10 sm:pt-32 z-10">
        {/* Scroll Feature Section */}
        <div className="relative max-w-6xl h-[70vh] sm:h-[55vh] mx-auto overflow-hidden mt-20 px-6 sm:px-0">
          {/* FLEX CONTAINER */}
          <div className="relative z-10 h-full flex flex-col sm:flex-row">
            {content.map((item, i) => {
              const isActive = i === active;

              return (
                <div
                  key={i}
                  className={`relative h-full transition-all duration-700 ease-out overflow-hidden flex-shrink-0 ${item.text} ${item.bg}`}
                  style={
                    isMobile
                      ? { height: isActive ? "70%" : "10%" }
                      : { width: isActive ? "70%" : "10%" }
                  }
                >
                  {/* CARD CONTENT */}
                  <div className="h-full hidden sm:flex flex-col justify-between px-8 py-6 ">
                    {/* Text */}
                    <div>
                      <p className="text-xl mb-3 opacity-80">{item.step}</p>

                      <h3
                        className={`text-2xl md:text-3xl font-normal mb-6 max-w-xs ${
                          isActive ? "" : "hidden"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <p
                      className={`max-w-xs leading-relaxed text-lg opacity-90 ${
                        isActive ? "" : "hidden"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                  {/* LOTTIE */}
                  <div
                    className={`absolute top-0 right-0 w-[70%] h-full hidden sm:flex items-center justify-center transition-all duration-700 ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <Lottie
                      key={i} // 🔥 ensures correct instance per card
                      animationData={animations[i]}
                      autoplay
                      loop
                      className="w-[360px]"
                    />
                  </div>

                  <div className="flex flex-col sm:hidden justify-between h-full p-6">
                    <p className="text-xl mb-3 opacity-80">{item.step}</p>
                    {/* LOTTIE */}
                    <div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-full items-center justify-center transition-all duration-700 ${
                        isActive
                          ? "opacity-100 scale-85"
                          : "opacity-0 scale-50 pointer-events-none"
                      }`}
                    >
                      <Lottie
                        key={i} // 🔥 ensures correct instance per card
                        animationData={animations[i]}
                        autoplay
                        loop
                        className="w-[360px]"
                      />
                    </div>
                    <div className="z-10">
                      <h3
                        className={`text-2xl md:text-3xl font-normal mb-6 max-w-xs${
                          isActive ? "" : "hidden"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`max-w-xs leading-relaxed text-lg opacity-90 ${
                          isActive ? "" : "hidden"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSection;
