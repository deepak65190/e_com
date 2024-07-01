import { useState, useEffect ,useContext } from "react";
import { SearchContext } from "../context/Search";
const useDebounce = () => {
  const [debouncedValue, setDebouncedValue] = useState();
  const {search}=useContext(SearchContext) ;
  const delay=500
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(search);
      
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [search, delay]);

  return debouncedValue;
};

export default useDebounce;
