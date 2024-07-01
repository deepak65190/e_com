import { Box, Image, Text, HStack } from "@chakra-ui/react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { FaRupeeSign } from "react-icons/fa";

const SingleCard = (props) => {
  const navigate = useNavigate();

  const handleSinglePage = () => {
    navigate(`/${props.sData.id}`);
  };

  return (
    <Box
      onClick={handleSinglePage}
      className={styles.cardContainer}
      textAlign={"center"}
      borderWidth="1px"
      p={"10px"}
      backgroundColor={"#efefef"}
      borderRadius="lg"
      overflow="hidden"
      maxW="sm"
      boxShadow="md"
    >
      <Image
        src={props.sData.thumbnail}
        alt={props.sData.title}
        boxSize="300px"
        h={"200px"}
        objectFit="contain"
      />
      <Text fontWeight="bold" as="h4" lineHeight="tight">
        {props.sData.title}
      </Text>
      <HStack justifyContent="center">
        
          <FaRupeeSign /><Text> {props.sData.price}
        </Text>
      </HStack>
      <Text ml={2} pb={"5px"}>
      Rating  {props.sData.rating}
      </Text>
    </Box>
  );
};

export default SingleCard;
