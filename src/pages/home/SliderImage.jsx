// SlidingImages.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SlidingImages = () => {
  const images = ["./hero.gif"];
  return (
    <section className=" flex ">
      <Swiper spaceBetween={30} slidesPerView={1} autoplay>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className=" w-full lg:h-[70vh]    -z-2 " />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SlidingImages;
