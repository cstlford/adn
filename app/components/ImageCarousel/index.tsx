"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ImageCarousel.css";

import { Navigation, Pagination } from "swiper/modules";

import { products } from "./products";

export default function ImageCarousel() {
  return (
    <div className="swiperContainer">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-card">
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
    </div>
  );
}
