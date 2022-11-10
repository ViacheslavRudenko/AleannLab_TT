import LocationIcons from "../../Icons/LocationIcons";
import { JobItemType } from "./types";
import styles from "./index.module.scss";

const JobContact = ({ jobItem }: JobItemType) => {
  return (
    <>
      <div className={styles.contactsBoxTitle}>
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
    </>
  );
};

export default JobContact;
