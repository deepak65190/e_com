import React, { useState ,useEffect } from 'react';
import { useCard } from '../context/Card';
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
  Button ,
  Text
} from "@chakra-ui/react";

const CardCom = () => {
  const [cardData, setCardData] = useCard();
const [totalPrice ,setTotalPrice]=useState(0)
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

  useEffect(() => {
    // Calculate the total price whenever cardData changes
    const newTotalPrice = cardData.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalPrice(Math.round(newTotalPrice));
  }, [cardData]);
  return (
    <Box overflowX="auto" width={{ base: "98%", md: "90%" }} margin={"auto"}>
        <Text>{totalPrice||"hh"}</Text>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Title</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Subtotal Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cardData.length > 0 && cardData.map((ele) => (
              <Tr key={ele.id}>
                <Td>
                  <Image src={ele.thumbnail} alt={ele.title} />
                </Td>
                <Td>{ele.title}</Td>
                <Td>
                  <Button disabled={ele.quantity === 1} onClick={() => handleDecrement(ele.id)}>-</Button>
                  <Button marginLeft={"10px"} marginRight={"10px"}>{ele.quantity}</Button>
                  <Button onClick={() => handleIncrement(ele.id)}>+</Button>
                </Td>
                <Td>{ele.price}</Td>
                <Td>{Math.round(ele.price * ele.quantity)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CardCom;
