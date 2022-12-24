import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MfeatcherdBrand() {
    const ShopByCatData = [
        {
            id: 1,
            image: 'https://images-static.nykaa.com/uploads/ab2d4701-154d-4e54-bcf9-ee79db3667c5.jpg?tr=w-240,cm-pad_resize'
        },
        {
            id: 2,
            image: 'https://images-static.nykaa.com/uploads/cd441ef2-a2c6-4845-86d6-bd36fb8be352.png?tr=w-240,cm-pad_resize'
        },
        {
            id: 3,
            image: 'https://images-static.nykaa.com/uploads/4561369d-3174-4b5a-becf-d1ebf6913872.jpg?tr=w-240,cm-pad_resize'
        },
        {
            id: 4,
            image: 'https://images-static.nykaa.com/uploads/c905b431-9404-4f13-8380-51256b5e0b22.png?tr=w-240,cm-pad_resize'
        },
        {
            id: 5,
            image: 'https://images-static.nykaa.com/uploads/321042a0-c93e-4375-af38-a74e283fedc1.png?tr=w-240,cm-pad_resize'
        },
        {
            id: 6,
            image: 'https://images-static.nykaa.com/uploads/87bb0b04-4a01-4ff5-a982-40c5703fa636.png?tr=w-240,cm-pad_resize'
        },
        {
            id: 7,
            image: 'https://images-static.nykaa.com/uploads/04738e4d-0a6b-4526-8861-4efc2e6c0405.png?tr=w-240,cm-pad_resize'
        },
        {
            id: 8,
            image: 'https://images-static.nykaa.com/uploads/cd6e7aae-ced5-4b69-baa4-c53fa4c21f67.png?tr=w-240,cm-pad_resize'
        },
    ]
    return (
        <>
            <Box mt={{ base: '10px', md: '25px' }}>
                <Text textAlign='center' fontSize={{ base: '16px', md: '24px', lg: '26px' }} fontWeight='650' letterSpacing={{ base: '2px' }} mt={{ base: '5px', md: '30px', lg: '7%' }}>FEATURED BRANDS</Text>
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