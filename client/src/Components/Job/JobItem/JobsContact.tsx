import LocationIcons from "../../Icons/LocationIcons";
import { JobItemType } from "./types";
import styles from "./index.module.scss";
import Map from "./PageItems/Map/Map";

const JobContact = ({ jobItem }: JobItemType) => {
  return (
    <>
      <div className={styles.contactsBoxTitle}>
        <h6 className={styles.title}>Contacts</h6>
      </div>
      <div className={styles.contacts}>
        <div className={styles.infoBox}>
          <h6 className={styles.name}>{jobItem.name}</h6>
          <div>
            <a
              className={styles.link}
              href={`http://www.google.com/maps/place/${jobItem.location.lat},${jobItem.location.long}`}
            >
              <span className={styles.ico}>
                <LocationIcons />
              </span>
              <span>{jobItem.address}</span>
            </a>
          </div>
          <div>
            <a href={`tel:${jobItem.phone}`}>{jobItem.phone}</a>
          </div>
          <div>
            <a href={`mailto:${jobItem.email}`}>{jobItem.email}</a>
          </div>
        </div>
        <div>
          <Map jobItem={jobItem} />
        </div>
      </div>
    </>
  );
};

export default JobContact;
