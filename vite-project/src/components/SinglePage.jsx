import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Button, Flex, Spinner, Heading ,HStack } from '@chakra-ui/react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react' ;
import { useCard } from '../context/Card';
import { FaRupeeSign } from "react-icons/fa";

const SinglePage = () => {
  const { productID } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const toast = useToast()
const [cardData ,setCardData]=useCard() ;

const handleCard=()=>{
  
  const singleCardData={
id:data.id ,
title:data.title ,
thumbnail:data.thumbnail ,
price:data.price ,
quantity:1 ,
category:data.category ,
discount:data.discountPercentage

  }
  const newData=[...cardData ,singleCardData ] ;
  const dataExist = cardData.some(element => element.id === data.id);
  const {email}=JSON.parse(localStorage.getItem("auth"))||1 ;
  
  if(!email){
    toast({
      position: 'top',
      description: "Login please",
      status: 'warning',
      duration: 2000,
      isClosable: true,
    })
    return
  }
  if(!dataExist){

    setCardData(newData) ;
    toast({
      position: 'top',
      description: "Added to the Card",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }else{
    toast({
      position: 'top',
      description: "This product already exist",
      status: 'warning',
      duration: 2000,
      isClosable: true,
    })
  }
  
}
console.log(cardData ,"helkoo")
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productID}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [productID]);

  if (loading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      p={8}
      bg="gray.50"
      borderRadius={{ base: '0px', md: 'lg' }}
  height={"auto"}
      textAlign={'center'} 
      width={{ base: '100%', md: '90%' }}
      m={"auto"} 
      backgroundColor={"#EFEFEF"}
      mt={{base:"50px", md:"100px"}}
    >
      <Box flex="1" mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
        {data.images && data.images.length > 0 && (
          <Image src={data.images[0]} objectFit={"contain"} width={"100%"} height={"100%"} alt={data.title} borderRadius="md" />
        )}
      </Box>
      <Box flex="2">
        <Heading as="h2" size="lg" mb={4}>{data.title}</Heading>
        <Text fontSize="lg" mb={4}>{data.description}</Text>
        <HStack fontSize="xl" fontWeight="bold" mb={2} justifyContent="center">
          <FaRupeeSign /><Text>{data.price}</Text>
        </HStack>
        <Text fontSize="md" color="green.600" mb={2}>Discount: {data.discountPercentage}%</Text>
        <Text fontSize="md" mb={2}>Rating: {data.rating}</Text>
        <Text fontSize="md" mb={2}>Category: {data.category}</Text>
        <Text fontSize="md" mb={4}>Return Policy: {data.returnPolicy}</Text>
        <Button variant="outline" colorScheme='blue' onClick={handleCard}>Add to cart</Button>
      </Box>
    </Flex>
  );
};

export default SinglePage;
