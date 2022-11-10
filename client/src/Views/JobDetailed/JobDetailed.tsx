import Share from "../../Components/Icons/Share";
import WishListIcon from "../../Components/Icons/WihList";
import JobItem from "../../Components/Job/JobItem/JobItem";
import { useParams } from "react-router-dom";

const JobDetailed = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className="py-6 px-4">
      <div className="grid">
        <h6 className="text-[#3A4562] font-bold text-lg border-b-2 border-[#3A4562] pb-3">
          Job Details
        </h6>
        <div className="grid grid-cols-2 pt-4">
          <div>
            <button className="flex">
              <span className="pr-3">
                <WishListIcon isInWishList={false} />
              </span>
              <span>Save to my list</span>
            </button>
          </div>
          <div>
            <button className="flex">
              <span className="pr-3">
                <Share />
              </span>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <JobItem />
      </div>
    </div>
  );
};

export default JobDetailed;
