import { useEffect } from "react";

const useDebug = <T>(item: T) =>
  useEffect(() => {
    console.log("Debug: " + item);
  }, [item]);

  export default useDebug;