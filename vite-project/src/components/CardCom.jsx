import React from 'react'
import { useCard } from '../context/Card'
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
    Button
  } from "@chakra-ui/react";
const CardCom = () => {
    const [cardData ,setCardData]=useCard() ;
    console.log(cardData)
  return (
    
      

      <Box overflowX="auto">
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Title</Th>
              <Th>Quanity</Th>
              <Th>Price</Th>
              <Th>Subtotal price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cardData.length>0 &&cardData.map((ele) => (
              
              <Tr key={ele.id}>
                <Td>
                    
  <Image src={ele.thumbnail} alt='Dan Abramov' />
                </Td>
                <Td>{ele.title}</Td>
                <Td><Button>-</Button><Button>{ele.quantity}</Button><Button>+</Button></Td>
                <Td>{ele.price}</Td>
                <Td>100</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
    
  )
}

export default CardCom
