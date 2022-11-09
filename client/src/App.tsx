import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { axiosData } from "./store/Jobs/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(axiosData() as any);
  }, []);
  return <div></div>;
}

export default App;
