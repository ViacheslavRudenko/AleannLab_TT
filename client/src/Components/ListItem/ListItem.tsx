import LocationIcons from "./LocationIcons";
import Rating from "./Rating";
import { ListItemProps } from "./types";
import styles from "./index.module.scss";

const ListItem = ({ jobData }: ListItemProps) => {
  const getDaysPassDate = (prevDate: string): string => {
    const dateNow = new Date();
    const datePrew = new Date(prevDate);
    let timeToDate: number =
      (dateNow.getTime() - datePrew.getTime()) / 86400000;
    if (timeToDate > 365) {
      return `Posted ${Math.floor(timeToDate / 356)} years ago`;
    } else {
      return `Posted ${timeToDate} days ago`;
    }
  };

  return (
    <>
      <div className={styles.imgBox}>
        <img
          style={{ clipPath: "circle()" }}
          src={jobData.pictures[0]}
          alt={jobData.name}
        />
      </div>

      <div className={styles.contentBox}>
        <div className={styles.contentBoxItem}>
          <h6 className={styles.title}>{jobData.title}</h6>
          <h4 className={styles.name}>{jobData.name}</h4>
          <p className={styles.text}>
            <span className={styles.span}>
              <LocationIcons />
            </span>
            {jobData.address}
          </p>
        </div>
      </div>

      <div className={styles.raitingBox}>
        <Rating rating={jobData?.rating || 4} />
      </div>

      <div className={styles.infoBox}>
        <div className={styles.infoBoxItem}>
          <div className={styles.wishList}>sadfa</div>
          <p className={styles.postDate}>
            {getDaysPassDate(jobData.createdAt)}
          </p>
        </div>
      </div>
    </>
  );
};

export default ListItem;
