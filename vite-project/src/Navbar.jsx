

import { useNavigate } from 'react-router-dom'; 
import { useState ,useEffect } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  useDisclosure,
  useColorModeValue,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useCard } from './context/Card';
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [productNum, setProductNum] = useState(0);
  const [cardData] = useCard();
  const navigate = useNavigate();
  useEffect(() => {
        setProductNum(cardData.length);
       }, [cardData]);
  
  return (
    <>
      <Flex justifyContent="center" width="100%" position="fixed" zIndex="1000" top={0}>
        <Box
          bg={useColorModeValue('gray.100', 'gray.900')}
          boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
          width={{ base: "100%", md: "90%" }}
          px={4}
          mb="50px"
        >
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Heading size="md" onClick={() => navigate("/")} cursor="pointer">MyLogo</Heading>
            <InputGroup display={{ base: 'none', md: 'flex' }} maxW="md">
              <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.500" />} />
              <Input type="search" placeholder="Search" />
            </InputGroup>
            <Flex alignItems="center">
              <Stack direction="row" spacing={4} position="relative">
                <IconButton
                  size="lg"
                  icon={<FaShoppingCart />}
                  aria-label="Add to Cart"
                  display={{ base: 'none', md: 'flex' }}
                />
             {productNum?    <Box
                  as="span"
                  position="absolute"
                  left={"15px"}
                  
                  bg="rgb(155, 155, 222)"
                  color="white"
                  borderRadius="full"
                  width="15px"
                  height="15px"
                  display={{base:"none" ,md:"flex"}}
                  alignItems="center"
                  justifyContent="center"
                  fontSize="sm"
                  
                >
                  {productNum}
                </Box> :""}
                <IconButton
                  size="lg"
                  icon={<FaUser />}
                  aria-label="User Account"
                  display={{ base: 'none', md: 'flex' }}
                  onClick={()=>navigate("/signup")}
                />
                <Avatar size="sm" display={{ base: 'flex', md: 'none' }} />
              </Stack>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as="nav" spacing={4}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.500" />} />
                  <Input type="search" placeholder="Search" />
                </InputGroup>
                <Button w="full" leftIcon={<FaShoppingCart />}  _hover={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} justifyContent="flex-start">
                  Cart products: {productNum}
                </Button>
                <Button w="full" leftIcon={<FaUser />}  _hover={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} justifyContent="flex-start">
                  Account
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Flex>
      <Box mt="66px">
        {/* Main content goes here */}
      </Box>
    </>
  );
};

export default Navbar;




