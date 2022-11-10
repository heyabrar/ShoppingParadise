import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SpinnerCompo from "./Spinner";

export default function SingleProductComponent ({data,isLoading,isError}) {
    return (
        <>
        <Navbar/>
        <Text textAlign='center'>{isLoading && <SpinnerCompo color='#fc2779'/>}</Text>
        <Flex  w={{base : '100%', md: '90%', lg : '60%'}} m='auto' direction={{base : 'column', md : 'row'}} bg='white' padding='20px' mt='10px' shadow='sm'>
            <Box  m='auto'> 
                <Image m='auto' w={{base : '180px', md : '220px', lg : '280px'}} src={data.image || data.images} />
            </Box>
           
            <Box  width={{base : '85%', md: '60%', lg : '60%'}} m='auto' lineHeight={{base : '30px'}}>
                <Text fontSize={{base : '18px'}} fontWeight='550'>{data.title}</Text>
                <Text fontSize={{base : '14px'}}>reviews : {data.review}</Text>
                <Flex gap='5px' fontSize={{base : '14px'}} fontWeight='550'>
                    <Text textDecoration='line-through' color='gray'>{data.actualPrice}</Text>
                    
                    <Text>{'MRP:  ' + data.price}</Text>
                    <Text color='green'>{data.discount}</Text>
                </Flex>
                <Text color='#fc2779' fontWeight='600'>{data.freeGift}</Text>
                <Text>{data['css-asphnc']}</Text>
            </Box>
        </Flex>
        <Footer/>
        
        </>
    )
}