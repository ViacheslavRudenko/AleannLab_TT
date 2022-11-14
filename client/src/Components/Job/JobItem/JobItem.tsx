import { getDaysPassDate } from "../functions";
import { JobItemType } from "./types";
import styles from "./index.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const JobItem = ({ jobItem }: JobItemType) => {
  return (
    <div className={styles.box}>
      <div className={styles.applyBox}>
        <button className={styles.btn}>APPLY NOW</button>
      </div>

      <div className={styles.mainInfo}>
        <h6 className={styles.mainTitle}>{jobItem.title}</h6>
        <div className={styles.boxInfo}>
          <p className={styles.period}>{getDaysPassDate(jobItem.createdAt)}</p>
          <div className={styles.priceBox}>
            <p>Brutto, per year</p>
            <p className={styles.price}>{jobItem.salary}</p>
          </div>
        </div>
        <p className={styles.period}>{getDaysPassDate(jobItem.createdAt)}</p>
      </div>

      <p>{jobItem.description}</p>

      <div className={styles.applyBox}>
        <button className={styles.btn}>APPLY NOW</button>
      </div>

      <div className={styles.imgBox}>
        <h6 className={styles.title}>Attached images</h6>

        <Swiper
          spaceBetween={50}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {jobItem.pictures.map((picture: string, index: number) => (
            <SwiperSlide>
              <img src={picture} alt="img" key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.detailBox}>
        <h6 className={styles.title}>Additional info</h6>
        <p className={styles.text}>Employment type</p>
        <ul className={styles.list}>
          {jobItem.employment_type.map((benefit: string, index: number) => (
            <div key={index} className={styles.btnType}>
              {benefit}
            </div>
          ))}
        </ul>
        <p className={styles.text}>Benefits</p>
        <ul className={styles.list}>
          {jobItem.benefits.map((benefit: string, index: number) => (
            <div key={index} className={styles.btnBenefit}>
              {benefit}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobItem;
