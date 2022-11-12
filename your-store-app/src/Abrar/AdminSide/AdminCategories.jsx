import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function AdminCategoriesPage ( ) {
    const Brands = [
        {
            id : 1, 
            title : 'HAIR',
            image : 'https://newspaperads.ads2publish.com/wp-content/uploads/2017/10/emami-7-in-one-oils-upto-20-x-stronger-hair-the-magic-of-7-oils-for-long-thick-hair-ad-times-of-india-lucknow-30-09-2017.jpg'
        },

        {
            id : 2, 
            title : 'SKIN',
            image : 'https://newspaperads.ads2publish.com/wp-content/uploads/2019/06/dr-tvacha-hair-skin-slimming-free-consultation-valid-till-29th-June-2019-ad-times-of-india-delhi-26-06-2019-250x390.png'
        },

        {
            id : 3, 
            title : 'MEN',
            image : 'https://i.pinimg.com/736x/76/0d/39/760d39b6d93f7d62404338c4a611bfa9--male-grooming-fashion-advertising.jpg'
        },

        {
            id : 4, 
            title : 'FRAGRANCE',
            image : 'https://media.istockphoto.com/id/1321710678/photo/design-advertising-poster-for-cosmetic-product-with-rose-petals-for-catalog-magazine-osmetic.jpg?s=612x612&w=0&k=20&c=evRvGauwmqKkv3KOKXfW1YfjICNWeGt3R5J26JXzwVI='
        }
    ]
    return (
        <>
        <Text textAlign='center' fontSize={{base  :'16px', md : '20px' ,lg  :'30px'}} color='#fc2779' fontWeight='550'>CATEGORIES</Text>
        <SimpleGrid columns={[2,3,3,4]} width={{base  :'95%', md :'90%'}} m='auto' rowGap={{base : '20px', md :'40px'}} mt='20px' >
            {Brands.map((elem)=>{
                return <Box key={elem.id} textAlign='center'>
                    <Image margin='auto' width={{base : '100px', md : '150px'}} src={elem.image} alt={elem.title} h='210px' borderRadius='20px' shadow='lg'/>
                    <Text fontWeight={'550'} mt='10px'>{elem.title}</Text>
                </Box>
            })}
        </SimpleGrid>
        <Flex width={{base  : '40%'}} m='auto'  justifyContent='center' mt='20px'>
        <Link to='/adminside'><Button size='sm' color='white' bg='#fc2779' colorScheme='#fc2779'>Admin Panel</Button></Link>
        </Flex>
        </>
    )
}