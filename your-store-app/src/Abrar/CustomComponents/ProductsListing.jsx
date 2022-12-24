import { Box, Button, Flex, Image, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductsListing ({data,direct}) {
    const Toast = useToast( );

    const handleAddToCartData = (title,image,price,actualPrice,discount) =>{
        const payload = {
            title,
            image,
            price,
            actualPrice,
            discount
        }
        Toast({position : 'top', render: ( )  => (<Box p={5} bg='#fc2779' color='white' borderRadius='10px' fontWeight='600'>Added To Cart</Box>)})
        return axios.post(`https://adminside-yourstore.onrender.com/cart`, payload)
        .then((res)=>{
           
        })

    }
    return (
        <>
        <SimpleGrid columns={[2,2,3,3]} width={{base : '95%', md : '95%'}} m='auto' rowGap={{base : '10px', md: '25px', lg: '25px'}}>
            {data.length > 0 && data.map((e)=>{
                return <Box className="Box" key={e.id} width={{base : '95%', lg : '80%'}} margin='auto' h={{base : '250px', md : '300px', lg :'380px'}} padding='10px' bg='white' shadow='sm' borderRadius='2px'>
                    <Flex fontSize={{base : '10px', md : '12px', lg : '16px'}} fontWeight='550' gap={{base : '15px'}} h={{base : '20px'}} justifyContent='right'>
                            <Text color='gray'>{'('+e.id+')'}</Text>
                    </Flex>
                   <Link to={`${direct}/${e.id}`}> <Image width={{base : '85px' , md : '120px', lg : '200px'}} m='auto' src={e.image || e.images} h={{base : '85px', md : '120px', lg :'200px'}} mt='10px'/></Link>
                    <Text fontSize={{base : '12px', md  :'14px'}} fontWeight='520' w={{base : '95%', lg : '80%'}}  m='auto' textAlign='center' h={{base : '55px', md : '53px'}} mt={{base : '5px'}} >{e.title}</Text>
                    <Flex fontSize={{base : '10px', md: '12px', lg : '14px'}}  justifyContent='center' gap={{base : '10px'}} mt={{base : '5px'}}>
                            <Text textDecoration='line-through' color='gray'>₹{e.actualPrice}</Text>
                            <Text fontWeight='620'>{'MRP: '+'₹'+e.price}</Text>
                            <Text color='green' fontWeight='620'>{e.discount}</Text>
                    </Flex>
                    <Box mt={{base : '5px'}}>
                            <Button onClick={( ) => handleAddToCartData(e.title,e.image,e.price,e.actualPrice,e.discount)} size={{base : 'sm'}} m='auto' bg='white' _hover={{bgColor : '#fc2779', color : 'white'}} w='100%' fontSize={{base : '12px', md : '14px'}}>Add To Bag</Button>
                    </Box>
                </Box>
            })}
        </SimpleGrid>
        </>
    )
}