import React, { createContext, useState, useCallback } from "react";
import axios from "axios";
export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [apis, setApis] = useState([]);
  //   const [api, setapi] = useState(null);
  //using react hook to manage our api request and response
  const fetchApis = useCallback(async () => {
    try {
      const res = await axios.get(
        "http://3.88.1.181:8000/products/public/catalog"
      ); ///api endpoint goes here
      console.log(res.data);
      setApis(res.data);
    } catch (error) {
      console.error("Error fecthing data:", error);
    }
  }, []);
  //   const fetchApiById = useCallback(async (id) => {
  //     try {
  //       const res = await axios.get(`/${id}`); ///api endpoint goes here
  //       setapi(res.data);
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //     }
  //   }, []);

  return (
    <ApiContext.Provider value={{ apis, fetchApis }}>
      {children}
    </ApiContext.Provider>
  );
};
export default ApiProvider;
