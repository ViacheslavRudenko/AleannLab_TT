import { getDaysPassDate } from "../functions";
import { JobItemType } from "./types";
import styles from "./index.module.scss";
import ImgSwiper from "./ImgSwiper/ImgSwiper";
import { ReactElement, useState } from "react";
import Modal from "../../Modal/Modal";
import Form from "./Form/Form";

const JobItem = ({ jobItem }: JobItemType): ReactElement => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  const setApply = () => {
    setModalContent(
      <Form
        setIsModalOpen={setIsApplyModalOpen}
        setModalContent={setModalContent}
      />
    );
    setIsApplyModalOpen(true);
  };

  return (
    <div className={styles.box}>
      <div className={styles.applyBox}>
        <button onClick={setApply} className={styles.btn}>
          APPLY NOW
        </button>
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
        <button onClick={setApply} className={styles.btn}>
          APPLY NOW
        </button>
      </div>

      <div className={styles.imgBox}>
        <h6 className={styles.title}>Attached images</h6>

        <ImgSwiper jobItem={jobItem} />
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
      {isApplyModalOpen && (
        <Modal
          title={"Your contact details"}
          content={modalContent}
          isModalOpen={isApplyModalOpen}
          setIsModalOpen={setIsApplyModalOpen}
        />
      )}
    </div>
  );
};

export default JobItem;
