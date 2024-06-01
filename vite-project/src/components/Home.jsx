import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css"
import SingleCard from "./SingleCard";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products))
      .catch((err) => {
        console.log(err);
      });
  }, []);
 
  return (
    <div className={styles.container}>
      {data.length > 0 &&
        data.map((items) => <SingleCard key={items.id} sData={items} />)}
    </div>
  );
};

export default Home;
