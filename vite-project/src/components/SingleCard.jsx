import { Box, Image ,Text } from "@chakra-ui/react";
import styles from "./Home.module.css" ;
import { useNavigate ,Link} from "react-router-dom";
import React from "react";

const SingleCard = (props) => {
  const navigate=useNavigate() ;
  
    const handleSinglePage=()=>{
      navigate(`/:productID `)
    }
  return (
    <Link to={`/:${productID}`}>
    <Box  className={styles.cardContainer} textAlign={"center"} borderWidth="1px" p={"10px"} backgroundColor={"#efefef"} borderRadius="lg" overflow="hidden" maxW="sm" boxShadow="md">
      <Image
        src={props.sData.thumbnail}
        alt={"hii"}
        boxSize="300px"
        h={"200px"}
        objectFit="cover"
        
      />
      <Text fontWeight="bold" as="h4" lineHeight="tight">
        {props.sData.title}
      </Text>
      <Text>{props.sData.price}</Text>
      <Text ml={2} pb={"5px"}>{props.sData.rating}</Text>
    </Box></Link>
  );
};

export default SingleCard;
