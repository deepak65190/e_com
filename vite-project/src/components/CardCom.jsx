import React, { useState, useEffect } from 'react';
import { useCard } from '../context/Card';
import { useToast } from '@chakra-ui/react' ;
import cardImage from "../assets/mLxgS34.png"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Image,
  Button,
  Text,
  Stack ,
  
} from "@chakra-ui/react";

const CardCom = () => {
  const [cardData, setCardData] = useCard();
  const [totalPrice, setTotalPrice] = useState(0);
const toast=useToast()
  const handleDecrement = (ele_id) => {
    const updatedData = cardData.map((ele) => {
      if (ele.id === ele_id && ele.quantity > 1) {
        return { ...ele, quantity: ele.quantity - 1 };
      }
      return ele;
    });
    setCardData(updatedData);
  };

  const handleIncrement = (ele_id) => {
    const updatedData = cardData.map((ele) => {
      if (ele.id === ele_id) {
        return { ...ele, quantity: ele.quantity + 1 };
      }
      return ele;
    });
    setCardData(updatedData);
  };

  const handleRemove = (ele_id) => {
    const updatedData = cardData.filter((ele) => ele.id !== ele_id);
    setCardData(updatedData);
    toast({
      position: 'top',
      description: "Product removed successfully",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  };

  useEffect(() => {
    const newTotalPrice = cardData.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalPrice(Math.round(newTotalPrice));
  }, [cardData]);

  return (
    <Box overflowX="auto" width={{ base: "98%", md: "90%" }} margin="auto" mt={10} p={4} borderWidth="1px" borderRadius="lg">
      {cardData.length>0?
      <>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Total Price: {totalPrice}</Text>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Title</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Subtotal Price</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cardData.length > 0 && cardData.map((ele) => (
              <Tr key={ele.id}>
                <Td>
                  <Image src={ele.thumbnail} alt={ele.title} boxSize="50px" objectFit="cover" />
                </Td>
                <Td>{ele.title}</Td>
                <Td>
                  <Stack direction="row" align="center">
                    <Button disabled={ele.quantity === 1} onClick={() => handleDecrement(ele.id)}>-</Button>
                    <Text mx={2}>{ele.quantity}</Text>
                    <Button onClick={() => handleIncrement(ele.id)}>+</Button>
                  </Stack>
                </Td>
                <Td>{ele.price}</Td>
                <Td>{Math.round(ele.price * ele.quantity)}</Td>
                <Td>
                  <Button colorScheme="red" onClick={() => handleRemove(ele.id)}>Remove</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer></>: <Image margin={"auto"}  src={cardImage} alt='ADD TO CART' />}
     
      
    </Box>
  );
};

export default CardCom;
