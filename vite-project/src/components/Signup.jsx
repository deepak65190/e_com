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


const Signup = () => {
  const toast=useToast()
const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email:"" ,
    password: "",
  });

  //handle login fun
  const handleSubmit = (e) => {
    e.preventDefault();
  if(formData.email&& formData.email && formData.password){
const form={
    name:formData.name.trim() ,
    email:formData.email.trim(),
    password:formData.password.trim()
}
      localStorage.setItem("auth",JSON.stringify(form)) ;
      toast({
        position: 'top',
          description: "Signup Successfull",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      navigate("/")
  }
  };

 
  return (
    <div style={{ marginTop: "20px" }}>
      <Box
        width={{ base: "96%", md: "30%" }}
        
        m={"auto"}
        marginTop={"20px"}
        p={5}
        boxShadow={
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
        }
        borderRadius={"10px"}
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                required
                
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="email">
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

export default Signup;
