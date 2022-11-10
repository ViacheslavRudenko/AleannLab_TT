import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { RootState } from "../../../../store/root-reducer";
import Share from "../../../Icons/Share";
import WishListIcon from "../../../Icons/WihList";
import { JobItemType } from "../types";
import styles from "./index.module.scss";

const PageHeader = ({ jobItem }: JobItemType) => {
  const { addNewJobToWihList, removeJobFromWishList } = useActions();
  const [isInWishList, setIsInWishList] = useState(false);
  const wihList = useSelector(
    (state: RootState) => state.UserActivity.wishList
  );

  useEffect(() => {
    setIsInWishList(wihList.some((data) => data === jobItem.id));
  }, [wihList]);

  const toggleWishList = () =>
    isInWishList
      ? removeJobFromWishList(jobItem.id)
      : addNewJobToWihList(jobItem.id);

  return (
    <>
      <div className={styles.box}>
        <h6 className={styles.title}>Job Details</h6>
        <div className={styles.actionBox}>
          <div>
            <button className={styles.btn} onClick={toggleWishList}>
              <span className={styles.span}>
                <WishListIcon isInWishList={isInWishList} />
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
