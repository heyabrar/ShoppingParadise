import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function CartListing ({data,handleDeleteFromCart,handleCheckout}){
    return (
        <>
          <SimpleGrid columns={[2,2,3,3]} width={{base : '95%', md : '95%'}} m='auto' rowGap={{base : '10px', md: '25px', lg: '25px'}}>
            {data.length > 0 && data.map((e)=>{
                return <Box className="Box" key={e.id} width={{base : '95%', lg : '80%'}} margin='auto' h={{base : '250px', md : '300px', lg :'380px'}} padding='10px' bg='white' shadow='sm' borderRadius='2px'>
                    <Flex fontSize={{base : '10px', md : '12px', lg : '16px'}} fontWeight='550' gap={{base : '15px'}} h={{base : '20px'}} justifyContent='right'>
                    </Flex>
                    <Image width={{base : '85px' , md : '120px', lg : '200px'}} m='auto' src={e.image || e.images} h={{base : '85px', md : '120px', lg :'200px'}} mt='10px'/>
                    <Text fontSize={{base : '12px', md  :'14px'}} fontWeight='520' w={{base : '95%', lg : '80%'}}  m='auto' textAlign='center' h={{base : '55px', md : '50px'}} mt={{base : '5px'}} >{e.title}</Text>
                    <Flex fontSize={{base : '10px', md: '12px', lg : '14px'}}  justifyContent='center' gap={{base : '10px'}} mt={{base : '5px'}}>
                    <Text textDecoration='line-through' color='gray'>₹{e.actualPrice}</Text>
                    <Text fontWeight='620'>{'MRP: '+'₹'+e.price}</Text>
                    <Text color='green' fontWeight='620'>{e.discount}</Text>
                    </Flex>
                    <Box mt={{base : '5px'}}>
                        <Link to='/checkout'><Button onClick={( ) => handleCheckout(e)} size={{base : 'sm'}} m='auto' bg='white' _hover={{bgColor : '#fc2779', color : 'white'}} w='100%' fontSize={{base : '12px', md : '14px'}}>Checkout</Button></Link>
                        <Button onClick={( ) => handleDeleteFromCart(e.id)} size={{base : 'sm'}} m='auto' bg='white' _hover={{bgColor : '#fc2779', color : 'white'}} w='100%' fontSize={{base : '12px', md : '14px'}}>Remove From Cart</Button>
                    </Box>
                </Box>
            })}
        </SimpleGrid>
        </>
    )
}