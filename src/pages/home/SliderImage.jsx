// SlidingImages.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SlidingImages = () => {
  const images = ["./images.jpg", "./download.jpg"];
  return (
    <section className=" ">
      <Swiper spaceBetween={30} slidesPerView={1} autoplay>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[75vh] object-cover relative -z-2 " />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SlidingImages;
