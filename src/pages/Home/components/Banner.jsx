import { SwiperSlide,Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
function Banner() {
  return (
    <section className="banner">
      <Swiper
        spaceBetween={15}   
        slidesPerView={1.6}
        centeredSlides={true}
        loop={true}
        modules={[Navigation, Pagination]}
        className="swiper banner-swiper"
      >
        <SwiperSlide className="swiper-slide">
          <div className="banner-image__wrapper">
            <img src="/images/banner-image-1.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="banner-image__wrapper">
            <img src="/images/banner-image-2.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="banner-image__wrapper">
            <img src="/images/banner-image-3.webp" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Banner;
