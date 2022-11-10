import Share from "../../Components/Icons/Share";
import WishListIcon from "../../Components/Icons/WihList";
import JobItem from "../../Components/Job/JobItem/JobItem";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/root-reducer";
import { Job } from "../../store/Jobs/types";
import { useEffect, useState } from "react";
import PageHeader from "../../Components/Job/JobItem/PageItems/PageHeader";

const JobDetailed = () => {
  const params = useParams();
  const [jobItem, setjobItem] = useState([{}]);
  const { data } = useSelector((state: RootState) => state.JobsData);

  useEffect(() => {
    //i do it, because get item by id from server not working
    setjobItem(data.filter((job: Job) => job.id == params.id));
  }, [params, data]);

  return data.length ? (
    <div className="py-6 px-4">
      <PageHeader />
      <div>
        {jobItem.length ? <JobItem jobItem={jobItem[0]} /> : <p>Loading...</p>}
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default JobDetailed;
