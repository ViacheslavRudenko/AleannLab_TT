import { ReactElement } from "react";
import { useSelector } from "react-redux";
import ListItem from "../../Components/Job/ListItem/ListItem";
import Error from "../../Components/PageInfo/PageError/Error";
import PageLoading from "../../Components/PageInfo/PageLoading/PageLoading";
import { RootState } from "../../store/root-reducer";
import styles from "./index.module.scss";

const JobBoard: React.FC = (): ReactElement => {
  const { data, err, loading } = useSelector(
    (state: RootState) => state.JobsData
  );

  return (
    <div className={styles.jobBoard}>
      {err ? <Error err={err} /> : null}
      {loading ? (
        <PageLoading />
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
