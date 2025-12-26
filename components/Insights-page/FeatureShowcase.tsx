"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Card {
  id: number | string;
  image: string;
  title: string;
  description: string;
}

interface featureCardsProps {
  featureCards: Card[];
}

gsap.registerPlugin(ScrollTrigger);

const FeatureShowcase = ({ featureCards }: featureCardsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640); // sm breakpoint
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const cards = cardsRef.current;

    if (!section || !cardsContainer || cards.length === 0 || isMobile) return;

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
        scrub: 2,
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
  }, [featureCards.length, isMobile]);

  return (
    <section ref={sectionRef} className="min-h-screen md:min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-satoshi leading-tight font-bold lg:max-w-2xl">
            Everything you need to build your AI workforce
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-sm lg:self-end lg:text-left">
            From conversational AI Employee creation to enterprise-grade
            security—Ema handles the complexity so you can focus on results.
          </p>
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="md:hidden flex flex-col gap-6">
          {featureCards.map((card, index) => (
            <div key={card.id} className="w-full">
              <FeatureCard
                title={card.title}
                description={card.description}
                image={card.image}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Desktop: Animated Stacked Cards Container */}
        <div
          ref={cardsContainerRef}
          className="hidden md:block relative h-125 md:h-137.5"
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
    <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-14 h-full shadow-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 h-full">
        {/* Left Content */}
        <div className="lg:w-2/5 relative">
          <h3 className="text-2xl md:text-3xl lg:text-[2.5rem] font-satoshi font-semibold leading-tight mb-5 relative z-10">
            {title}
          </h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed relative z-10 max-w-md">
            {description}
          </p>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-3/5 w-full h-full flex items-start justify-end">
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
