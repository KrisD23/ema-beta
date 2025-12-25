import Image from "next/image";
import React from "react";

const ImageContainer = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] overflow-hidden -mt-50 sm:mt-0 z-0">
      <Image
        src="/whatsection.png"
        alt="What section background"
        fill
        className="object-contain scale-110 sm:scale-[240%] sm:-mt-50"
        priority
      />
    </div>
  );
};

export default ImageContainer;
