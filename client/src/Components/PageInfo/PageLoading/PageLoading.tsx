import { ReactElement } from "react";
import styles from "./index.module.scss";

const PageLoading = (): ReactElement => {
  return <p className={styles.info}>Loading, please wait..</p>;
};

export default PageLoading;
