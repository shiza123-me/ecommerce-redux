'use client';
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Slider() {
  return (
    <div className="w-full h-[80vh] overflow-hidden">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 2000,
          pauseOnHover: true,
           pagination: false,  
          perPage: 1,
        }}
      >
       <SplideSlide>
  <img
    src="/slider01.png"
    alt="slide image"
    className="w-fit h-fit object-cover"
  />
</SplideSlide>


       <SplideSlide>
  <img
    src="/slider02.png"
    alt="slide image"
    className="w-fit h-fit object-cover"
  />
</SplideSlide>

<SplideSlide>
  <img
   src="/slider03.png"
    alt="slide image"
    className="w-fit h-fit object-cover"
  />
</SplideSlide>
      </Splide>
    </div>
  );
}
