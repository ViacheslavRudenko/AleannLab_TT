import { Link } from "react-router-dom";
import styles from "./index.module.scss";

export const BtnBack = () => {
  return (
    <>
      <div className={styles.boxBtnBack}>
        <Link to={"/job-board"}>
          <button className={styles.btnback}>
            <span className={styles.span}>&#10094;</span> RETURN TO JOB BOARD
          </button>
        </Link>
      </div>
    </>
  );
};
