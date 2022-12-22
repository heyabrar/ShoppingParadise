import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ShopByCategory() {
    const ShopByCatData = [
        {
            id: 1,
            image: 'https://images-static.nykaa.com/uploads/523d7014-5e8b-4eee-a2dc-d237d3099ea3.png?tr=w-300,cm-pad_resize'
        },
        {
            id: 2,
            image: 'https://images-static.nykaa.com/uploads/2e100c07-4244-4492-8e07-dcea640d72cc.png?tr=w-300,cm-pad_resize'
        },
        {
            id: 3,
            image: 'https://images-static.nykaa.com/uploads/01764611-c997-477c-8dcb-cb59a832a9c1.png?tr=w-300,cm-pad_resize'
        },
        {
            id: 4,
            image: 'https://images-static.nykaa.com/uploads/5cb9240c-dcb6-4611-afda-9bdca7e83da0.png?tr=w-300,cm-pad_resize'
        },
        {
            id: 5,
            image: 'https://images-static.nykaa.com/uploads/827cc6f1-aac8-4b26-8783-dcc0e17f744a.png?tr=w-300,cm-pad_resize'
        },
        {
            id: 6,
            image: 'https://images-static.nykaa.com/uploads/99836a18-3459-485c-889b-b610d828a743.png?tr=w-300,cm-pad_resize'
        },
        {
            id: 7,
            image: 'https://images-static.nykaa.com/uploads/4619d014-4c2d-4836-a89a-fdcdca3c746c.png?tr=w-300,cm-pad_resize'
        },
        {
            id: 8,
            image: 'https://images-static.nykaa.com/uploads/d979218d-69fd-4a74-8847-87a5e733d7ef.jpg?tr=w-300,cm-pad_resize'
        },
    ]
    return (
        <>
            <Box mt={{ base: '10px', md: '25px' }}>
                <Text textAlign='center' fontSize={{ base: '16px', md: '24px', lg: '26px' }} fontWeight='650' letterSpacing={{ base: '2px' }} mt={{ base: '5px', md: '30px', lg: '7%' }}>SHOP BY CATEGORY</Text>
                <SimpleGrid columns={[2, 2, 3, 4]} width={{ base: '95%', lg: '90%' }} m='auto' rowGap={{ base: '20px', md: '30px', lg: '35px' }} mt={{ base: '10px', md: '25px' }}>
                    {ShopByCatData.length > 0 && ShopByCatData.map((elem) => {
                        return <Box key={elem.id} width={{ base: '95%', md: '90%' }} m='auto' >
                            <Link to={"/hairproducts"}><Image width={{ base: '160px', md: '170px', lg: '300px' }} src={elem.image} m='auto' /></Link>
                        </Box>
                    })}
                </SimpleGrid>
            </Box>
        </>
    )
}