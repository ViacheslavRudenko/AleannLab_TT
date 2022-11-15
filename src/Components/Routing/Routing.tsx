import { ReactElement } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import JobBoard from "../../Views/JobBoard/JobBoard";
import JobDetailed from "../../Views/JobDetailed/JobDetailed";

const Routing: React.FC = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/job-board" />}></Route>
      <Route path="/job-board" element={<JobBoard />} />
      <Route path="/job-board/detailed/:id" element={<JobDetailed />} />
    </Routes>
  );
};

export default Routing;
