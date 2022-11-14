import JobItem from "../../Components/Job/JobItem/JobItem";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/root-reducer";
import { Job } from "../../store/Jobs/types";
import { useEffect, useState } from "react";
import PageHeader from "../../Components/Job/JobItem/PageHeader/PageHeader";
import JobContact from "../../Components/Job/JobItem/JobsContact";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import PageLoading from "../../Components/PageInfo/PageLoading/PageLoading";

const JobDetailed = () => {
  const params = useParams();
  const [jobItem, setjobItem] = useState({});
  const { data, err } = useSelector((state: RootState) => state.JobsData);

  useEffect(() => {
    //i do it, because get item by id from server not working
    setjobItem(data.filter((job: Job) => job.id === params.id).shift() || {});
  }, [params, data]);

  return data.length ? (
    <div className={styles.section}>
      {err && <p>{err}</p>}
      {Object.keys(jobItem).length ? (
        <div className={styles.boxContent}>
          <div>
            <PageHeader jobItem={jobItem} />
            <JobItem jobItem={jobItem} />
          </div>
          <div>
            <JobContact jobItem={jobItem} />
          </div>
          <div className={styles.boxBtnBack}>
            <Link to={"/job-board"}>
              <button className={styles.btnback}>
                <span className="pr-3">&#10094;</span> RETURN TO JOB BOARD
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <PageLoading />
      )}
    </div>
  ) : (
    <PageLoading />
  );
};

export default JobDetailed;
