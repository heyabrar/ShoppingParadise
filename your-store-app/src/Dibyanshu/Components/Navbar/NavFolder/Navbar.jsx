import { Box, Flex, IconButton, useDisclosure, Stack, Text, Image, Input } from '@chakra-ui/react';
import { Link, useNavigate, } from "react-router-dom"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { BsCartCheckFill, BsFillPhoneFill, BsSearch } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"
import { BiHelpCircle } from "react-icons/bi"
import style from './Navbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import SmartphoneIcon from '@mui/icons-material/Smartphone';import NavbarPopUpComponents from '../NavComponent/NavbarPopUpComponents';
import { useState } from 'react';
;
export default function Navbar() {



  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
   

      <Box className={style.ChackraNavBar} top={"0px"} >
        <Box bg='#fc2779'>
          <Flex width={{ base: '80%', md: '100%', lg: '70%' }} m='auto' justifyContent='space-around' bg='#fc2779' fontSize={{ base: '14px', md: '16px' }} padding='5px'>
            <Text display={{ base: 'none', md: 'flex' }} fontWeight='530'>BEAUTY BONANZA Get Your Daily Dose of Amazing Offers</Text>
            <Flex justifyContent='center' align='center' gap='5px'>

              <SmartphoneIcon style={{ fontSize: "20px" }} />
              <a href="https://www.nykaa.com/installApp"><Text>Get App</Text></a>
            </Flex>
            <Flex justifyContent='center' align='center' gap='5px'>
              <MdLocationOn style={{ fontSize: "22px" }} />
              <a href="https://www.nykaa.com/stores-n-events-desktop"><Text>Store & Event</Text></a>
            </Flex>
            <Flex justifyContent='center' align='center' gap='5px'>
              <BiHelpCircle style={{ fontSize: "22px" }} />
              <a href="https://www.nykaa.com/gateway-api/omsApis/helpCenter?domain=NYKAA"><Text>Help</Text></a>
            </Flex>
          </Flex>
        </Box>
        <Box px={4} mb={20} bg={"white"} shadow='lg' padding='10px'>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton color='black' size='md' bg='white' icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px' />} aria-label='Open Menu' display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />

            <Flex width={{ base: "20%", md: '13%', lg: '10%' }} justifyContent={'center'} >
              <Link to='/'><Image src='https://www.linkpicture.com/q/1_295.jpg' width='60px' m='auto' /></Link>
            </Flex>
            <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{ base: '', md: '90%', lg: '100%' }} justifyContent='space-around' alignItems='center' padding='10px'>
              <Flex width={{ base: '', md: '75%', lg: '40%' }} justifyContent='space-around' fontWeight='550' fontSize={{ base: '', md: '14px', lg: '15px' }}>

                <Link to='/skin'><Text>Categories</Text></Link>
                <Link to="/appliance"><Text>Brands</Text></Link>
                <Link to='/fragrance'><Text>Paradise Fashion</Text></Link>
                <Link to='/men'><Text>Luxe</Text></Link>
                <Link to='/fragrance'><Text>Beauty Advice</Text></Link>


              </Flex>

              <Flex width={{ base: "", md: '30%', lg: '50%' }} fontSize='16px' alignItems='center' justifyContent="space-around">
                <Flex alignItems='center' gap='10px' display={{ base: '', md: 'none', lg: 'flex' }} width='70%'>

                  <div className={style.inputContainer}>

                    <input type="text" className={style.input} placeholder="Search on Shopping Paradise " />
                    <div><h2>< SearchIcon /></h2></div>
                  </div>


                </Flex>

                <Flex alignItems='center' gap='10px'>
                  <Link to='/profile'><Text color='#fc2779'><FaUser /></Text></Link>
                  <Link to='/profile'><Text>Profile</Text></Link>
                </Flex>
                <Flex alignItems='center' gap='10px'>
                  <Link to='/cart'><Text color='#fc2779'><BsCartCheckFill /></Text></Link>
                  <Link to='/cart'><Text>Cart</Text></Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }} >
              <Stack as={'nav'} spacing={4}>
                <Link to='/skin'><Text>Skin</Text></Link>
                <Link to='/hair'><Text>Hair</Text></Link>
                <Link to='/appliance'><Text>Appliance</Text></Link>
                <Link to='/mombaby'><Text>Mom & Baby</Text></Link>
                <Link to='/men'><Text>Men</Text></Link>
                <Link to='/fragrance'><Text>Frag</Text></Link>
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Box>
        


        
    
    </>
  );
}





