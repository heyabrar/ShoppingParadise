import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MomBabyByCategory() {
    const ShopByCatData = [
        {
            id: 1,
            image: 'https://images-static.nykaa.com/uploads/91f298c1-cbe8-48b6-a860-7ebd7a842ac6.jpg?tr=w-300,cm-pad_resize'
        },
        {
            id: 2,
            image: 'https://images-static.nykaa.com/uploads/bbf6c5cf-eb78-486b-a8ce-13c031cf0f94.jpg?tr=w-300,cm-pad_resize'
        },
        {
            id: 3,
            image: 'https://images-static.nykaa.com/uploads/e1739f8c-d214-4a1d-bc87-df6a6b66f204.jpg?tr=w-300,cm-pad_resize'
        },
        {
            id: 4,
            image: 'https://images-static.nykaa.com/uploads/7b40a234-49ff-4d88-bb90-603c065b772d.png?tr=w-300,cm-pad_resize'
        },
        {
            id: 5,
            image: 'https://images-static.nykaa.com/uploads/8da01015-11ef-451d-a3ae-1ac17250c2e6.jpg?tr=w-300,cm-pad_resize'
        },
        {
            id: 6,
            image: 'https://images-static.nykaa.com/uploads/b2273171-c34b-43d8-af27-4ead5beead3a.jpg?tr=w-300,cm-pad_resize'
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