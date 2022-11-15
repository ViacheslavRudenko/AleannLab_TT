import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ImgSwiperType } from "./types";
import { ReactElement } from "react";
import styles from "./index.module.scss";

const breakpoints = {
  320: {
    slidesPerView: 1.5,
  },
  640: {
    slidesPerView: 2.5,
  },
  768: {
    slidesPerView: 3,
  },
};

const ImgSwiper = ({ jobItem }: ImgSwiperType): ReactElement => {
  return (
    <Swiper
      spaceBetween={50}
      breakpoints={breakpoints}
      className={styles.imgList}
    >
      {jobItem.pictures.map((picture: string, index: number) => (
        <SwiperSlide key={index}>
          <img src={picture} alt="img" key={index} className={styles.imgItem} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImgSwiper;
