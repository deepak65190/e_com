import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import SingleCard from "./SingleCard";
import { Flex, Spinner, Button, Box ,Stack ,Wrap ,WrapItem } from "@chakra-ui/react";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [pagination, setPagination] = useState(1); // Updated state name
  const page = (pagination-1) * 10;
  
  console.log(filter)
  useEffect(() => {
    setLoading(true)
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
<div className={styles.filterBtn}>
  {/* <Wrap spacing={4}>
   
    <WrapItem>
    <Button colorScheme='red' cursor='pointer' onClick={()=>setFilter("laptops")}>
      laptops
    </Button>    </WrapItem>
    

  </Wrap> */}
   <Button colorScheme='red' cursor='pointer' onClick={()=>setFilter("laptops")}>
      laptops
    </Button>
   <Button colorScheme='red' cursor='pointer' onClick={()=>setFilter("laptops")}>
      laptops
    </Button>
   <Button colorScheme='red' cursor='pointer' onClick={()=>setFilter("laptops")}>
      laptops
    </Button>
  <button onClick={()=>setFilter("hii")}>one</button>
  </div>

      </div>
      <div className={styles.container}>
        {data.length > 0 && data.map((items) => <SingleCard key={items.id} sData={items} />)}
      </div>
      <Box className={styles.container}>
        <Button colorScheme="teal" disabled={pagination === 1}
  onClick={handlePrevPage}
  _hover={pagination === 1 ? { cursor: "default" } : {}} >-</Button>
        <Button margin={"10px"} cursor={"default"} >{pagination}</Button>
        <Button  onClick={handleNextPage} colorScheme="teal">+</Button>
      
        
      </Box>
    </div>
  );
};

export default Home;

{/* <WrapItem>
      <Button colorScheme='orange' cursor={"pointer"} onClick={()=>setFilter()}>eauty</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='yellow' cursor={"pointer"} onClick={()=>setFilter()}>furniture</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='green' cursor={"pointer"} onClick={()=>setFilter()}>mens-shoes</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='teal' cursor={"pointer"} onClick={()=>setFilter()}>sunglasses</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='blue' cursor={"pointer"} onClick={()=>setFilter()}>tops</Button>
    </WrapItem>
    <WrapItem>
      <Button colorScheme='cyan' cursor={"pointer"} onClick={()=>setFilter()}>smartphones</Button>
    </WrapItem> */}
    