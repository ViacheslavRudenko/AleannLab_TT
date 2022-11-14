import styles from "./index.module.scss";
import { ErrPageType } from "./types";

const Error = ({ err }: ErrPageType) => {
  return <p className={styles.err}>{err}</p>;
};

export default Error;
