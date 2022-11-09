import React, { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import JobBoard from "./Views/JobBoard";

function App() {
  const { axiosData } = useActions();
  useEffect(() => {
    axiosData();
  }, []);
  return (
    <div>
      <JobBoard />
    </div>
  );
}

export default App;
