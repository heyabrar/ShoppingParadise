import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function HairBrand() {
    const HairData = [
        {
            id: 1,
            image: 'https://images-static.nykaa.com/uploads/7e11ce99-1f3b-4827-a8c9-92e130bf0cdc.jpeg?tr=w-300,cm-pad_resize'
        },

        {
            id: 2,
            image: 'https://images-static.nykaa.com/uploads/768efc26-207a-4960-8e1f-05479a95fc04.jpg?tr=w-300,cm-pad_resize'
        },

        {
            id: 3,
            image: 'https://images-static.nykaa.com/uploads/8322d126-0fb5-41f1-b9fb-30f2b48104b3.png?tr=w-300,cm-pad_resize'
        },

        {
            id: 4,
            image: 'https://images-static.nykaa.com/uploads/e176e498-1b68-4d4b-88f0-40896a676a90.jpg?tr=w-300,cm-pad_resize'
        },

        {
            id: 5,
            image: 'https://images-static.nykaa.com/uploads/362eb17a-44aa-46de-89b3-90a3999807d2.jpg?tr=w-300,cm-pad_resize'
        },

        {
            id: 6,
            image: 'https://images-static.nykaa.com/uploads/d50322fd-bb6f-4329-9ab1-52466883def7.jpg?tr=w-300,cm-pad_resize'
        },
        {
            id: 7,
            image: 'https://images-static.nykaa.com/uploads/49c1a7f8-2759-4066-ae4d-da6992e68292.jpeg?tr=w-300,cm-pad_resize'
        },
        {
            id: 8,
            image: 'https://images-static.nykaa.com/uploads/840407e5-ff06-415f-a4cb-8c5fba384cc1.jpg?tr=w-300,cm-pad_resize'
        }
    ]
    return (
        <>
            <Text textAlign='center' fontSize={{ base: '16px', md: '24px', lg: '26px' }} fontWeight='650' letterSpacing={{ base: '2px' }} mt={{ base: '15px', md: '30px', lg: '7%' }}>BRANDS YOU WILL LOVE</Text>
            <SimpleGrid templateRows='repeat(2, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={2}>
                {HairData.length > 0 && HairData.map((elem) => {
                    return <Box key={elem.id}>
                        <Link to={"/hairproducts"}><Image width={{ base: '160px', lg: '280px' }} src={elem.image} m='auto' /></Link>
                    </Box>
                })}
            </SimpleGrid>
        </>
    )
}