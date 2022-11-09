import LocationIcons from "./LocationIcons";
import { ListItemProps } from "./types";

const ListItem = ({ jobData }: ListItemProps) => {
  return (
    <>
      <div>
        <img src={jobData.pictures[0]} alt={`${jobData.name} image`} />
      </div>
      <div>
        <h6>{jobData.title}</h6>
        <h4>{jobData.name}</h4>
        <p>
          <span>
            <LocationIcons />
          </span>
          {jobData.address}
        </p>
      </div>
    </>
  );
};

export default ListItem;
