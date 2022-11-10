import LocationIcons from "../../Icons/LocationIcons";
import { getDaysPassDate } from "../functions";
import { JobItemType } from "./types";
import styles from "./index.module.scss";

const JobItem = ({ jobItem }: JobItemType) => {
  console.log(jobItem);

  return (
    <div className={styles.box}>
      <h6 className={styles.mainTitle}>{jobItem.title}</h6>
      <div className={styles.boxInfo}>
        <p className={styles.period}>{getDaysPassDate(jobItem.createdAt)}</p>
        <div className={styles.priceBox}>
          <p>Brutto, per year</p>
          <p className={styles.price}>{jobItem.salary}</p>
        </div>
      </div>

      <p>{jobItem.description}</p>

      <div className={styles.applyBox}>
        <button className={styles.btn}>APPLY NOW</button>
      </div>

      <div className={styles.imgBox}>
        <h6 className={styles.title}>Attached images</h6>
      </div>
      <div className={styles.detailBox}>
        <h6 className={styles.title}>Additional info</h6>
        <p className={styles.text}>Employment type</p>
        <ul className={styles.list}>
          {jobItem.employment_type.map((benefit: string, index: number) => (
            <button key={index} className={styles.btnType}>
              {benefit}
            </button>
          ))}
        </ul>
        <p className={styles.text}>Benefits</p>
        <ul className={styles.list}>
          {jobItem.benefits.map((benefit: string, index: number) => (
            <button key={index} className={styles.btnBenefit}>
              {benefit}
            </button>
          ))}
        </ul>
      </div>

      <div className={styles.contactsBox}>
        <h6 className={styles.title}>Contacts</h6>
      </div>
      <div className={styles.contacts}>
        <div className={styles.infoBox}>
          <h6 className={styles.name}>{jobItem.name}</h6>
          <p className={styles.address}>
            <span className={styles.ico}>
              <LocationIcons />
            </span>
            <span>{jobItem.address}</span>
          </p>
          <p>{jobItem.phone}</p>
          <p>{jobItem.email}</p>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
