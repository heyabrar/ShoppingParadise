import { Box, Button, Flex, Image, Select, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProgressCompo from "./Progress";
import SpinnerCompo from "./Spinner";

export default function SingleProductComponent ({data,isLoading,isError}) {
    const [quantity,setQuantity]  =useState('');
    const Toast = useToast( );
    const handleAddToCart = (image,title,price,actualPrice,discount) =>{
        const payload = {
            image,
            title,
            price,
            actualPrice,
            discount
        }
        Toast({position : 'bottom',duration: 2000 ,render: ( )  => (<Box p={5} bg='#fc2779' color='white' borderRadius='10px' fontWeight='600'>Added To Cart</Box>)})
        return axios.post(`https://adminside-yourstore.onrender.com/cart`, payload)
        .then((res)=>{
            // Dispatch(AddToCartSuccess(res.data))
        })
    }
    return (
        <>
        <Navbar/>
        <Text textAlign='center'>{isLoading && <SpinnerCompo color='#fc2779'/>}</Text>
        <Text>{isError && <ProgressCompo/>} </Text>
        <Text textAlign='center'>{isError && 'Something Went Wrong !!!!!'} </Text>
        <Flex  w={{base : '100%', md: '90%', lg : '60%'}} m='auto' direction={{base : 'column', md : 'row'}} bg='white' padding='20px' mt='10px' shadow='sm'>
                <Box  m='auto'> 
                     <Image m='auto' w={{base : '180px', md : '220px', lg : '280px'}} src={data.image || data.images} />
                </Box>
            
                <Box  width={{base : '85%', md: '60%', lg : '60%'}} m='auto' lineHeight={{base : '30px'}}>
                        <Text fontSize={{base : '18px'}} fontWeight='550'>{data.title} ({data.id})</Text>
                        <Box>
                                <Text textDecoration='line-through' color='gray'>₹{data.actualPrice}</Text>
                                <Text fontWeight='550'>{'MRP:  ' +'₹'+Number(data.price * quantity || data.price)}</Text>
                                <Text color='green' fontWeight='550'>{data.discount}</Text>
                        </Box>

                        <Flex gap='10px'>
                                <Box width={{base : '40%'}}>
                                        <Select size={{base : 'sm', md :'md'}} value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Select>
                                </Box>
                                <Button onClick={( ) => handleAddToCart(data.image,data.title,data.price=data.price*quantity || data.price,data.actualPrice,data.discount,)} color='white' bg='#fc2779' colorScheme='#fc2779' size={{base :'sm', md : 'md', lg :'md'}}>Add To Bag</Button>
                        </Flex>
                </Box>
        </Flex>
        <Footer/>
        </>
    )
}