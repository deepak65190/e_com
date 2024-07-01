import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import styles from "./Home.module.css";
import useDebounce from "./Debounce";
import SingleCard from "./SingleCard";

import {
  Flex,
  Spinner,
  Button,
  Box,
  WrapItem,
  Wrap,
  Stack,
} from "@chakra-ui/react";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const debouncedSearch = useDebounce();

  const filter = searchParams.get("filter") || "";
  const pagination = parseInt(searchParams.get("page")) || 1;

  const page = (pagination - 1) * 10;

  useEffect(() => {
    setLoading(true);
    const url = debouncedSearch
      ? `https://dummyjson.com/products/search?q=${debouncedSearch}&limit=10&skip=${page}`
      : filter
      ? `https://dummyjson.com/products/category/${filter}?limit=10&skip=${page}`
      : `https://dummyjson.com/products?limit=10&skip=${page}`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [pagination, filter, debouncedSearch, page]);

  // Update pagination
  const handlePrevPage = () => {
    if (pagination > 1) {
      setSearchParams({ filter, page: pagination - 1 });
    }
  };

  // Update pagination
  const handleNextPage = () => {
    setSearchParams({ filter, page: pagination + 1 });
  };

  const handleFilterChange = (newFilter) => {
    setSearchParams({ filter: newFilter, page: 1 });
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
        <div className={styles.filterBtn}>
          <Wrap spacing={4}>
            <WrapItem>
              <Button
                colorScheme="red"
                cursor="pointer"
                onClick={() => handleFilterChange("laptops")}
              >
                laptops
              </Button>{" "}
            </WrapItem>
            <WrapItem>
              {" "}
              <Button
                colorScheme="orange"
                cursor={"pointer"}
                onClick={() => handleFilterChange("beauty")}
              >
                beauty
              </Button>
            </WrapItem>
            <WrapItem>
              {" "}
              <Button
                colorScheme="yellow"
                cursor={"pointer"}
                onClick={() => handleFilterChange("furniture")}
              >
                furniture
              </Button>
            </WrapItem>
            <WrapItem>
              {" "}
              <Button
                colorScheme="green"
                cursor={"pointer"}
                onClick={() => handleFilterChange("mens-shoes")}
              >
                mens-shoes
              </Button>
            </WrapItem>
            <WrapItem>
              {" "}
              <Button
                colorScheme="teal"
                cursor={"pointer"}
                onClick={() => handleFilterChange("sunglasses")}
              >
                sunglasses
              </Button>
            </WrapItem>
            <WrapItem>
              {" "}
              <Button
                colorScheme="blue"
                cursor={"pointer"}
                onClick={() => handleFilterChange("tops")}
              >
                tops
              </Button>
            </WrapItem>
            <WrapItem>
              <Button
                colorScheme="cyan"
                cursor={"pointer"}
                onClick={() => handleFilterChange("smartphones")}
              >
                smartphones
              </Button>
            </WrapItem>
          </Wrap>
        </div>
      </div>
      <div className={styles.container}>
        {data.length > 0 &&
          data.map((items) => <SingleCard key={items.id} sData={items} />)}
      </div>
      <Box className={styles.container}>
        <Button
          colorScheme="teal"
          disabled={pagination === 1}
          onClick={handlePrevPage}
          _hover={pagination === 1 ? { cursor: "default" } : {}}
        >
          -
        </Button>
        <Button margin={"10px"} cursor={"default"}>
          {pagination}
        </Button>
        <Button onClick={handleNextPage} colorScheme="teal">
          +
        </Button>
      </Box>
    </div>
  );
};

export default Home;
