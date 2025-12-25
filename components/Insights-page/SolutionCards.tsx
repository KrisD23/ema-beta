"use client";

import { useRef, useEffect, useState, useSyncExternalStore } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    image: "/solution-cards/card1.png",
    title: "Employee Assistant",
    description:
      "Streamline daily inquiries with instant answers on policies, procedures, and shared documents. No more pinging teammates or wading through folders.",
  },
  {
    id: 2,
    image: "/solution-cards/card2.png",
    title: "Sales Assistant",
    description:
      "Quickly access account status, pipeline updates, and CRM insights. Focus on closing deals while Ema handles research and repetitive tasks.",
  },
  {
    id: 3,
    image: "/solution-cards/card3.png",
    title: "Marketing Assistant",
    description:
      "Find campaign assets, performance metrics, and brand guidelines in seconds. Optimize strategy with real-time, data-driven suggestions.",
  },
  {
    id: 4,
    image: "/solution-cards/card4.png",
    title: "Technical Assistant",
    description:
      "Retrieve code snippets, engineering docs, or product specs on demand. Spend less time searching and more time building.",
  },
  {
    id: 5,
    image: "/solution-cards/card5.png",
    title: "Leadership Assistant",
    description:
      "Gain unified insights across departments to make data-backed decisions fast. Get top-level metrics and reports in one conversation.",
  },
  {
    id: 6,
    image: "/solution-cards/card6.png",
    title: "Legal & Compliance Assistant",
    description:
      "Surface regulations, contracts, and guidelines instantly. Stay on top of evolving compliance requirements without the manual chase.",
  },
  {
    id: 7,
    image: "/solution-cards/card7.png",
    title: "Support Data Analyst",
    description:
      "Consolidate ticket logs, track resolution metrics, and highlight improvement areas. Drive upsells and implement changes rooted in data, provide proactive, data-driven support.",
  },
  {
    id: 8,
    image: "/solution-cards/card8.png",
    title: "Voice of Customer Analyst",
    description:
      "Synthesize calls, chats, and social media feedback. Spot key trends, inform product roadmaps, and strengthen customer relationships.",
  },
];

const MOBILE_BREAKPOINT = 768;

// Custom hook to detect mobile using useSyncExternalStore (hydration-safe)
function useIsMobile() {
  const subscribe = (callback: () => void) => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
  };

  const getSnapshot = () => {
    return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
  };

  const getServerSnapshot = () => false; // Default to desktop on server

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

const SolutionCards = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(3);
  const isMobile = useIsMobile();
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;

    // Kill existing ScrollTrigger if any
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
      scrollTriggerRef.current = null;
    }

    // Only create horizontal scroll on desktop
    if (!section || !cardsContainer || isMobile) return;

    const totalScrollWidth = cardsContainer.scrollWidth - window.innerWidth;
    const extraPinSpace = window.innerWidth;

    const ctx = gsap.context(() => {
      const tween = gsap.to(cardsContainer, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${totalScrollWidth + extraPinSpace}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: (self) => {
            scrollTriggerRef.current = self;
          },
        },
      });

      if (tween.scrollTrigger) {
        scrollTriggerRef.current = tween.scrollTrigger;
      }
    }, section);

    return () => {
      ctx.revert();
      scrollTriggerRef.current = null;
    };
  }, [isMobile]);

  const handleViewMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  const hasMoreCards = visibleCards < cards.length;

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#f5f5f0]">
      <div ref={triggerRef} className="md:min-h-screen">
        {/* Header */}
        <div className="max-w-7xl mx-auto pt-16 md:pt-24 px-6 md:px-12 mb-12">
          <p className="text-primary-green text-sm md:text-base font-medium font-satoshi tracking-wide uppercase mb-4">
            Choose Ema&apos;s role to start
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-satoshi font-medium leading-tight">
            Meet Your On-Demand AI
            <br />
            Employees
          </h2>
        </div>

        {/* Cards Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Mobile: Vertical stacked cards with "View More" */}
          <div className="md:hidden flex flex-col gap-6 pb-8">
            {cards.slice(0, visibleCards).map((card) => (
              <div
                key={card.id}
                className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative h-70 bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain p-4 relative z-10"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300 z-0">
                    <svg
                      className="w-20 h-20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2-2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold font-satoshi mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button - Mobile Only */}
          {hasMoreCards && (
            <div className="md:hidden flex justify-center pb-12">
              <button
                onClick={handleViewMore}
                className="px-8 py-3 bg-primary-green text-white font-satoshi font-medium rounded-full hover:bg-opacity-90 transition-all"
              >
                VIEW MORE
              </button>
            </div>
          )}

          {/* Desktop: Horizontal scrolling cards with GSAP */}
          <div ref={cardsContainerRef} className="hidden md:flex gap-6 pb-16">
            {cards.map((card) => (
              <div
                key={card.id}
                className="shrink-0 w-75 md:w-85 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative h-80 bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain p-4 relative z-10"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300 z-0">
                    <svg
                      className="w-20 h-20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-satoshi mb-3">
                    {card.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
            {/* Extra spacing div at the end for desktop scroll */}
            <div className="shrink-0 w-[50vw]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionCards;
