import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import SingleCard from "./SingleCard";
import { Flex, Spinner, Button, Box } from "@chakra-ui/react";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterPrice, setFilterPrice] = useState("");
  const [pagination, setPagination] = useState(1); // Updated state name
  const page = pagination * 10;

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=10&skip=${page}`)
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [pagination]); 
// Update pagination
  const handlePrevPage = () => {
    if (pagination > 1) {
      setPagination((prevPagination) => prevPagination - 1); 
    }
  };
 // Update pagination
  const handleNextPage = () => {
    setPagination((prevPagination) => prevPagination + 1);
  };

  if (loading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <div>
      <div className={styles.filterContainer}>
        <select name="price" id="" onChange={(e) => setFilterPrice(e.target.value)}>
          <option value="">Sort by price</option>
          <option value="desc">Higher to lower</option>
          <option value="asc">Lower to higher</option>
        </select>
      </div>
      <div className={styles.container}>
        {data.length > 0 && data.map((items) => <SingleCard key={items.id} sData={items} />)}
      </div>
      <Box className={styles.container}>
        <Button disabled={pagination === 1}
  onClick={handlePrevPage}
  _hover={pagination === 1 ? { cursor: "default" } : {}} >-</Button>
        <Button margin={"10px"}>{pagination}</Button>
        <Button onClick={handleNextPage}>+</Button>
      </Box>
    </div>
  );
};

export default Home;
