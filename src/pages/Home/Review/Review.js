import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// import "swiper/components/effect-coverflow/effect-coverflow.min.css";
// import "swiper/components/pagination/pagination.min.css";

import "./Review.css";

import { data } from "./data";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination]);

const Review = () => {
  return (
    <section id="testimonials" className="main-testimonials-wrapper">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        // pagination={true}
      >
        {data.map((item, key) => (
          <SwiperSlide>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.testimony}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="quote-parent">
        <div className="quote n-box1 flex-with-center">
          <h1>Quote?!</h1>
          <div className="quote-content">
            <p>“ Knowledge is power.” </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
