import React, { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import JobBoard from "./Views/JobBoard";
import styles from "./App.module.scss";

function App() {
  const { axiosData } = useActions();
  useEffect(() => {
    axiosData();
  }, []);
  return (
    <div className={styles.content}>
      <JobBoard />
    </div>
  );
}

export default App;
