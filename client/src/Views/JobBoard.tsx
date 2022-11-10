import { useSelector } from "react-redux";
import ListItem from "../Components/ListItem/ListItem";
import { RootState } from "../store/root-reducer";
import styles from "./index.module.scss";

const JobBoard = () => {
  const { data, err, loading } = useSelector(
    (state: RootState) => state.JobsData
  );

  return (
    <div className={styles.jobBoard}>
      {err ? <p className={styles.err}>{err}</p> : null}
      {loading ? (
        <p>Loading, please wait...</p>
      ) : (
        <ul className={styles.list}>
          {data.map((job) => (
            <ol key={job.id} className={styles.listItem}>
              <ListItem jobData={job} />
            </ol>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobBoard;
