import { Pagination } from "@mui/material";
import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import ListItem from "../../Components/Job/ListItem/ListItem";
import Error from "../../Components/PageInfo/PageError/Error";
import PageLoading from "../../Components/PageInfo/PageLoading/PageLoading";
import { RootState } from "../../store/root-reducer";
import styles from "./index.module.scss";

const pageLimit: number = 10;

const JobBoard: React.FC = (): ReactElement => {
  const { data, err, loading } = useSelector(
    (state: RootState) => state.JobsData
  );
  const [page, setPage] = useState(1);

  const getPageValue = (e: any, v: number) => {
    setPage(v);
  };

  return (
    <div className={styles.jobBoard}>
      {err ? <Error err={err} /> : null}
      {loading ? (
        <PageLoading />
      ) : (
        <ul className={styles.list}>
          {data
            .slice(page * pageLimit - pageLimit, page * pageLimit)
            .map((job) => (
              <ol key={job.id} className={styles.listItem}>
                <ListItem jobData={job} />
              </ol>
            ))}
          <div className={styles.pagination}>
            {!err.length ? (
              <Pagination
                variant="outlined"
                shape="rounded"
                page={page}
                count={data.length / pageLimit}
                onChange={getPageValue}
              />
            ) : null}
          </div>
        </ul>
      )}
    </div>
  );
};

export default JobBoard;
