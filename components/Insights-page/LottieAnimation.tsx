"use client";

import Lottie from "lottie-react";
import animationData from "@/public/animations/Hero_knowledge Insight_F.json";

type Props = {
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
};

export default function LottieAnimation({
  loop = true,
  autoplay = true,
  className = "",
}: Props) {
  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
    </div>
  );
}
