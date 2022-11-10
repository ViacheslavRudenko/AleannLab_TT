import Share from "../../../Icons/Share";
import WishListIcon from "../../../Icons/WihList";
import styles from "./index.module.scss";

const PageHeader = () => {
  return (
    <>
      <div className={styles.box}>
        <h6 className={styles.title}>Job Details</h6>
        <div className={styles.actionBox}>
          <div>
            <button className={styles.btn}>
              <span className={styles.span}>
                <WishListIcon isInWishList={false} />
              </span>
              <span>Save to my list</span>
            </button>
          </div>
          <div>
            <button className={styles.btn}>
              <span className={styles.span}>
                <Share />
              </span>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
