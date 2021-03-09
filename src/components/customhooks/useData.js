import { useState, useEffect } from "react";

const useData = (url) => {
  const [globalData, setGlobalData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setGlobalData(data);
  };

  useEffect(() => {
    if (!url) return;
    fetchData();
  }, []);

  return { globalData };
};

export default useData;
