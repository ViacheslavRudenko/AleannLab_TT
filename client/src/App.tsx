import React, { useEffect } from "react";
import { useActions } from "./hooks/useActions";

function App() {
  const { axiosData } = useActions();
  useEffect(() => {
    axiosData();
  }, []);
  return <div></div>;
}

export default App;
