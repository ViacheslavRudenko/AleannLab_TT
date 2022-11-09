import { useSelector } from "react-redux";
import ListItem from "../Components/ListItem/ListItem";
import { RootState } from "../store/root-reducer";

const JobBoard = () => {
  const { data, err, loading } = useSelector(
    (state: RootState) => state.JobsData
  );

  return (
    <div className="grid place-items-center p-2 min-h-screen bg-slate-200">
      {err ? <p className="text-center text-red-600">{err}</p> : null}
      {loading ? (
        <p>Loading, please wait...</p>
      ) : (
        <ul className="grid gap-2">
          {data.map((job) => (
            <ol
              key={job.id}
              className="grid  grid-cols-5 grid-rows-4 gap-4 px-3 py-6 rounded-lg bg-white"
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
