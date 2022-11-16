import { ReactElement } from "react";
import styles from "./index.module.scss";
import { ErrPageType } from "./types";

const Error = ({ err }: ErrPageType): ReactElement => {
  return (
    <div className={styles.info}>
      <p className={styles.err}>{err}</p>
    </div>
  );
};

export default Error;
