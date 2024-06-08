import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css"
import SingleCard from "./SingleCard"; ;
import { Flex ,Spinner } from "@chakra-ui/react";
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  }, []);
  if (loading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }
  return (
    <div className={styles.container}>
      {data.length > 0 &&
        data.map((items) => <SingleCard key={items.id} sData={items} />)}
    </div>
  );
};

export default Home;
