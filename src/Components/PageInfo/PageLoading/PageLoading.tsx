import { CircularProgress } from "@mui/material";
import { ReactElement } from "react";
import styles from "./index.module.scss";

const PageLoading = (): ReactElement => {
  return (
    <div className={styles.info}>
      <CircularProgress size={100} />
    </div>
  );
};

export default PageLoading;
