"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Feature cards data
const featureCards = [
  {
    id: 1,
    title: "Get breakthrough autonomy",
    description:
      "Conversationally build AI Employees to run entire workflows agentically—from start to finish—freeing humans to focus on strategy and growth.",
    image: "/feature-showcase/1.png",
  },
  {
    id: 2,
    title: "Optimized, transparent, and trustworthy",
    description:
      "Ema's AI Employees are powered by EmaFusion™, which combines the outputs of 100+ LLMs so your AI investments are always optimized and future-proof. Get encrypted PII protection and compliance with leading security protocols from day one.",
    image: "/feature-showcase/2.png",
  },
  {
    id: 3,
    title: "Autonomy with judgement",
    description:
      "Ema's AI employees reason and learn when to involve humans, so automation stays fast and accurate, but also trusted.",
    image: "/feature-showcase/3.png",
  },
  {
    id: 4,
    title: "Grow exponentially in weeks or months—not decades",
    description:
      "Ema helped companies like Chegg scale from 1,000 tickets a day to 10,000—not in 6 employees or decades, but weeks or 2 teammates.",
    image: "/feature-showcase/4.png",
  },
  {
    id: 5,
    title: "The future of work—made simple",
    description:
      "Your digital workforce is just like your human workforce. Create it naturally. Or deploy from our collection of pre-built solutions.",
    image: "/feature-showcase/5.png",
  },
];

const FeatureShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cards = cardsRef.current;

    if (!section || !cardsContainer || cards.length === 0) return;

    // Set initial state - all cards below viewport except first
    cards.forEach((card, index) => {
      if (index === 0) {
        gsap.set(card, { y: 0 });
      } else {
        gsap.set(card, { y: "100vh" });
      }
    });

    // Create scroll trigger for each card (except the first one)
    const triggers: ScrollTrigger[] = [];

    cards.forEach((card, index) => {
      if (index === 0) return; // Skip first card

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: () => `top+=${index * window.innerHeight * 0.5} top`,
        end: () => `top+=${(index + 1) * window.innerHeight * 0.5} top`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(card, {
            y: (1 - progress) * window.innerHeight,
            duration: 0,
            ease: "none",
          });
        },
      });

      triggers.push(trigger);
    });

    // Pin the section while cards animate
    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${featureCards.length * window.innerHeight * 0.5}`,
      pin: true,
      pinSpacing: true,
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      pinTrigger.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className=" min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-">
            Everything you need to build your AI workforce
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-sm lg:pt-4">
            From conversational AI Employee creation to enterprise-grade
            security—Ema handles the complexity so you can focus on results.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div
          ref={cardsContainerRef}
          className="relative h-[500px] md:h-[550px]"
        >
          {featureCards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="absolute inset-0 w-full"
              style={{ zIndex: index + 1 }}
            >
              <FeatureCard
                title={card.title}
                description={card.description}
                image={card.image}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F3EE] to-transparent pointer-events-none" />
    </section>
  );
};

// Feature Card Component
interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const FeatureCard = ({ title, description, image }: FeatureCardProps) => {
  return (
    <div className="bg-[#EDEAE3] rounded-3xl p-8 md:p-12 lg:p-14 h-full shadow-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 h-full">
        {/* Left Content */}
        <div className="lg:w-2/5 relative">
          {/* Decorative curved lines */}
          <div className="absolute -left-4 bottom-0 opacity-20 pointer-events-none">
            <svg
              width="280"
              height="280"
              viewBox="0 0 280 280"
              fill="none"
              className="text-[#B5B2A8]"
            >
              <path
                d="M20 260 Q 140 260 140 140 Q 140 20 260 20"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M50 260 Q 155 260 155 155 Q 155 50 260 50"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M80 260 Q 170 260 170 170 Q 170 80 260 80"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-[2.5rem] font-serif leading-tight mb-5 relative z-10">
            {title}
          </h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed relative z-10 max-w-md">
            {description}
          </p>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-3/5 w-full h-full flex items-center justify-end">
          <div className="relative w-full max-w-xl">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="w-full h-auto object-contain rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
