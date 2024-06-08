import React, { useState, useContext } from "react";
import { useToast } from '@chakra-ui/react' ;
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
} from "@chakra-ui/react";


const Login = () => {
  const navigate=useNavigate()
    const toast = useToast()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //handle login fun
  const handleSubmit = (e) => {
    e.preventDefault();
   let localData=JSON.parse(localStorage.getItem("auth"))
   if(localData==null){
    toast({
      position: 'top',
        description: "No data found ! Signup first",
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
      return
   }
   if(localData.email===formData.email.trim() && localData.password===formData.password.trim()){
    navigate("/")
   }else{
    toast({
      position: 'top',
        description: "Wrong Credentials",
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })

   }

  };

 
  return (
    <div style={{ marginTop: "20px" }}>
      <Box
        w={"30%"}
        
        m={"auto"}
        p={5}
        boxShadow={
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
        }
        borderRadius={"10px"}
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="name">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </div>
  );
};

export default Login;
