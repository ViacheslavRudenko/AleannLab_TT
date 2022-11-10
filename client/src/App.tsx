import React, { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import styles from "./App.module.scss";
import Routing from "./Components/Routing/Routing";

function App() {
  const { axiosData } = useActions();
  useEffect(() => {
    axiosData();
  }, []);
  return (
    <div className={styles.content}>
      <div className={styles.contentBox}>
        <Routing />
      </div>
    </div>
  );
}

export default App;
