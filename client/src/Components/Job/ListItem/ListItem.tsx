import LocationIcons from "../../Icons/LocationIcons";
import Rating from "../../Icons/Rating";
import { ListItemProps } from "./types";
import styles from "./index.module.scss";
import WishListIcon from "../../Icons/WihList";
import { useState } from "react";
import { getDaysPassDate } from "../functions";
import { Link } from "react-router-dom";

const ListItem = ({ jobData }: ListItemProps) => {
  const [isInWishList, setIsInWishList] = useState(false);

  const setToWishList = () => {
    setIsInWishList(!isInWishList);
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
        <Link to={`/job-board/detailed/${jobData.id}`}>
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
        </Link>
      </div>

      <div className={styles.raitingBox}>
        <Rating rating={jobData?.rating || 4} />
      </div>

      <div className={styles.infoBox}>
        <div className={styles.infoBoxItem}>
          <div className={styles.wishList}>
            <button onClick={setToWishList}>
              <WishListIcon isInWishList={isInWishList} />
            </button>
          </div>
          <p className={styles.postDate}>
            {getDaysPassDate(jobData.createdAt)}
          </p>
        </div>
      </div>
    </>
  );
};

export default ListItem;
