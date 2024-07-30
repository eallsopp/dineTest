"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import ImageScrollButtons from "./imageScrollButtons";

const Carousel = ({
  data,
}: {
  data: {
    image: string;
  }[];
}) => {
  // State and Ref initialization
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  // useEffect to get the initial carousel size
  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }
  }, []);

  return (
    <div>
      {/* Carousel container */}
      <div className="w-80 h-60 rounded-md overflow-hidden relative">
        {/* Image container */}
        <div
          ref={carouselRef}
          className="w-full h-full absolute flex transition-all duration-300"
          style={{
            left: -currentImg * carouselSize.width,
          }}
        >
          {/* Map through data to render images */}
          {data.map((v, i) => (
            <div key={i} className="relative shrink-0 w-full h-full">
              <Image
                key={`image-${i}`}
                fill
                alt={`carousel-image-${i}`}
                className="pointer-events-none"
                loading="lazy"
                src={v.image || "https://random.imagecdn.app/500/500"}
              />
            </div>
          ))}
        </div>
      </div>

      <ImageScrollButtons
        currentImg={currentImg}
        setCurrentImg={setCurrentImg}
        data={data}
      />
    </div>
  );
};

export default Carousel;
