import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ShopByHairType() {
    const ShopByHairData = [
        {
            id: 1,
            image: 'https://images-static.nykaa.com/uploads/78c7a4ea-24c4-40a2-88de-abb6bbd7eb7d.png?tr=w-300,cm-pad_resize'
        },

        {
            id: 2,
            image: 'https://images-static.nykaa.com/uploads/7ed3c3ba-c402-4227-8322-81aebfda3eea.png?tr=w-300,cm-pad_resize'
        },

        {
            id: 3,
            image: 'https://images-static.nykaa.com/uploads/1a8d387f-080b-4079-b36f-73c7a46fce16.png?tr=w-300,cm-pad_resize'
        },

        {
            id: 4,
            image: 'https://images-static.nykaa.com/uploads/16c4fdf1-550c-4b57-9281-ed0cb240468d.png?tr=w-300,cm-pad_resize'
        }
    ]
    return (
        <>
            <Text textAlign='center' fontSize={{ base: '16px', md: '24px', lg: '26px' }} fontWeight='650' letterSpacing={{ base: '2px' }} mt={{ base: '15px', md: '30px', lg: '7%' }}>SHOP BY HAIR TYPE</Text>
            <SimpleGrid columns={[2, 2, 4, 4]} width={{ base: '95%', md: '90%' }} m='auto' mt={{ base: '15px' }} rowGap={{ base: '20px' }}>
                {ShopByHairData.length > 0 && ShopByHairData.map((elem) => {
                    return <Box key={elem.id}>
                        <Link to={"/hairproducts"}><Image width={{ base: '160px', lg: '280px' }} src={elem.image} m='auto' /></Link>
                    </Box>
                })}
            </SimpleGrid>
        </>
    )
}