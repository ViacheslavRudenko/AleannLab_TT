import LocationIcons from "./LocationIcons";
import Rating from "./Rating";
import { ListItemProps } from "./types";

const ListItem = ({ jobData }: ListItemProps) => {
  const getDaysPassDate = (prevDate: string): string => {
    const dateNow = new Date();
    const datePrew = new Date(prevDate);
    let timeToDate: number =
      (dateNow.getTime() - datePrew.getTime()) / 86400000;
    if (timeToDate > 365) {
      return `Posted ${Math.floor(timeToDate / 356)} years ago`;
    } else {
      return `Posted ${timeToDate} days ago`;
    }
  };

  return (
    <>
      <div className="row-start-1 row-span-4  col-start-1 flex">
        <img
          style={{ clipPath: "circle()" }}
          src={jobData.pictures[0]}
          alt={jobData.name}
        />
      </div>

      <div className="col-start-2 col-span-5 row-start-2 row-span-4">
        <div className="flex justify-between flex-col ">
          <h6 className="font-bold">{jobData.title}</h6>
          <h4>{jobData.name}</h4>
          <p className="flex -ml-1">
            <span className="pr-2">
              <LocationIcons />
            </span>
            {jobData.address}
          </p>
        </div>
      </div>
      <div className="col-start-2 col-span-4 row-start-1">
        <Rating rating={jobData?.rating || 4} />
      </div>
      <div className="row-start-1 row-span-1  col-span-3 col-start-4">
        <div className="flex flex-col justify-between text-end  ">
          <div className="hidden sm:block">sadfa</div>
          <p className="font-size-2 ">{getDaysPassDate(jobData.createdAt)}</p>
        </div>
      </div>
    </>
  );
};

export default ListItem;
