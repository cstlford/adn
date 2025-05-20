"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./ImageCarousel.css";

import { Mousewheel, Pagination } from "swiper/modules";

import { products } from "./products";

export default function ImageCarousel() {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="swiper"
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="card">
            <div className="imgContainer">
              <img src={product.src} alt={product.h2} />
            </div>
            <div className="info">
              <h2>{product.h2}</h2>
              <p>{product.p}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
