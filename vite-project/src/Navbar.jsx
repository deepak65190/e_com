import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import { useCard } from './context/Card'; 
import logo from "../src/assets/logo.png"
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
  Text,
  Drawer,
  DrawerBody,
  Image ,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,

} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { FaShoppingCart, FaUser } from 'react-icons/fa';


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isHovering, setHovering] = useState(false);
  const [productNum, setProductNum] = useState(0);
  
  const [cardData ,setCardData]=useCard() ;
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));
  const userName = auth ? auth.name[0].toUpperCase() : "" ;

  useEffect(() => {
    setProductNum(cardData.length);
  }, [cardData]);

  useEffect(() => {
    if (isHovering) {
      setDrawerOpen(true);
    } else {
      const timer = setTimeout(() => {
        setDrawerOpen(false);
      }, 200); // Delay to prevent flicker
      return () => clearTimeout(timer);
    }
  }, [isHovering]);
const handleLogout=()=>{
  localStorage.removeItem('auth');
navigate("/")
setCardData([])
setDrawerOpen(false)
}
const handleSignup=()=>{
  navigate("/signup") ;
  setDrawerOpen(false)
}
const handleLogin=()=>{
  navigate("/login") ;
  setDrawerOpen(false)
}


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
             <Image
        src={logo}
        objectFit={"cover"}
        width={"50px"} 
        height={"50px"}
        onClick={() => navigate("/")} cursor="pointer"
      />
            <InputGroup display={{ base: 'none', md: 'flex' }} maxW="md">
              <Input type="search" placeholder="Search" />
              <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.500" />} />
              
            </InputGroup>
            <Flex alignItems="center">
              <Stack direction="row" spacing={4} position="relative">
                <IconButton
                  size="lg"
                  icon={<FaShoppingCart />}
                  aria-label="Add to Cart"
                  display={{ base: 'none', md: 'flex' }}
                />
                {productNum > 0 && (
                  <Box
                    as="span"
                    position="absolute"
                    left={"15px"}
                    bg="rgb(155, 155, 222)"
                    color="white"
                    borderRadius="full"
                    width="15px"
                    height="15px"
                    display={{ base: "none", md: "flex" }}
                    alignItems="center"
                    justifyContent="center"
                    fontSize="sm"
                  >
                    {productNum}
                  </Box>
                )}
                <Box
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                >
                  <IconButton
                    size="lg"
                    icon={<FaUser />}
                    aria-label="User Account"
                    display={{ base: 'none', md: 'flex' }}
                  />
                  {/* {userName ? (
                    <Text display={{ base: 'none', md: 'flex' }}>{userName}</Text>
                  ) : ( */}
                    <Avatar size="sm" display={{ base: 'flex', md: 'none' }} />
                  {/* )} */}
                </Box>
              </Stack>
            </Flex>
          </Flex>

          {isOpen && (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as="nav" spacing={4}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.500" />} />
                  <Input type="search" placeholder="Search" />
                </InputGroup>
                <Button w="full" leftIcon={<FaShoppingCart />} _hover={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} justifyContent="flex-start">
                  Cart products: {productNum}
                </Button>
                <Button w="full" leftIcon={<FaUser />} _hover={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} justifyContent="flex-start">
                  Account
                </Button>
              </Stack>
            </Box>
          )}
        </Box>
      </Flex>

      <Drawer  isOpen={isDrawerOpen} placement="right" onClose={() => setDrawerOpen(false)}>
        <DrawerOverlay />
      <DrawerContent maxH={"40vh"}h={"50vh"} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
          <DrawerCloseButton />
          <DrawerHeader>Account</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              <Button w="full" onClick={handleSignup}>SignUp</Button>
              <Button w="full" onClick={handleLogin}>Login</Button>
              <Button w="full" onClick={handleLogout}>Logout</Button>
            </Stack>
          </DrawerBody>
         
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
