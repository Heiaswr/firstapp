import { useCallback, useEffect, useState } from "react";
import useDebug from "./useDebug";

const useAPI = <T>(baseUrl: string, route: string) => {
    /*
    Fetch API                 OK
    Doit être refreshable     OK
    Renvoie les données       OK
    isLoading                 OK
    */
    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(true);
  
    const startFetch = useCallback(() => {
      setIsRefreshing(true);
      setIsLoading(true);
    }, [setIsRefreshing, setIsLoading]);
  
    const stopFetch = useCallback(() => {
      setIsRefreshing(false);
      setIsLoading(false);
    }, [setIsRefreshing, setIsLoading]);
  
    useEffect(() => {
      if (!isRefreshing) return;
      // declare the async data fetching function
      const fetchData = async () => {
        // get the data from the api
        const data = await fetch(baseUrl + route, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'your-api-key'
          }
        });
        // convert the data to json
        const json = await data.json();
  
        // set state with the result
        setData(json);
        useDebug(data);
        stopFetch();
      };
  
      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);
    }, [isRefreshing, setData, setIsLoading]);
  
    return {
      data,
      isLoading,
      refresh: startFetch,
    };
  };

  export default useAPI;