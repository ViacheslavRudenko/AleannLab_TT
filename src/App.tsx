import React, { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import styles from "./App.module.scss";
import Routing from "./Components/Routing/Routing";

function App() {
  const { axiosData, addJobsToWishList } = useActions();
  useEffect(() => {
    axiosData();
    const wishList = localStorage.getItem("wishList");
    wishList && addJobsToWishList(JSON.parse(wishList));
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
