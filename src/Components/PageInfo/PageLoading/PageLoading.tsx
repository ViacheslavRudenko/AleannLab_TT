import { CircularProgress } from "@mui/material";
import { ReactElement } from "react";
import styles from "./index.module.scss";

const PageLoading = (): ReactElement => {
  return (
    <div className={styles.info}>
      <CircularProgress />
    </div>
  );
};

export default PageLoading;
