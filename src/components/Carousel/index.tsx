"use client";

import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import Image from "next/image";

export default function Carousel() {
  return (
    <Flickity
      className={"carousel"}
      elementType={"div"}
      options={{
        initialIndex: 0,
        wrapAround: true,
        adaptiveHeight: true,
        pageDots: false,
        autoPlay: 3000,
      }}
      reloadOnUpdate
      static
    >
      <Image
        src="/assets/images/carousel-1.png"
        width={0}
        height={0}
        alt="carousel-1"
        sizes="100vw"
        priority
        className="w-full h-auto lg:h-[552px]"
      />
      <Image
        src="/assets/images/carousel-1.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="carousel-2"
        priority
        className="w-full h-auto lg:h-[552px]"
      />
      <Image
        src="/assets/images/carousel-1.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="carousel-3"
        priority
        className="w-full h-auto lg:h-[552px]"
      />
    </Flickity>
  );
}
