import { useSelector } from "react-redux";
import ListItem from "../Components/ListItem/ListItem";
import { RootState } from "../store/root-reducer";

const JobBoard = () => {
  const { data, err, loading } = useSelector(
    (state: RootState) => state.JobsData
  );

  return (
    <div className="grid h-screen place-items-center">
      {err ? <p className="text-center text-red-600">{err}</p> : null}
      {loading ? (
        <p>Loading, please wait...</p>
      ) : (
        <ul>
          {data.map((job) => (
            <ol
              key={job.id}
              className="grid grid-cols-[200px_minmax(900px,_1fr)_100px] gap-7"
            >
              <ListItem jobData={job} />
            </ol>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JobBoard;
