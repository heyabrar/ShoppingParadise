import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MomBrandsLov() {
    const BabyData = [
        {
            id: 1,
            image: 'https://images-static.nykaa.com/creatives/21aa8c1e-dbea-488d-8d04-9464a40ec5f6/default.jpg?tr=w-300,cm-pad_resize'
        },

        {
            id: 2,
            image: 'https://images-static.nykaa.com/creatives/4b73fdc6-806e-46eb-a6b5-b42568bd2244/default.jpg?tr=w-300,cm-pad_resize'
        },

        {
            id: 3,
            image: 'https://images-static.nykaa.com/creatives/45ffe24c-d2c0-4edc-91fb-d86093804b79/default.jpg?tr=w-300,cm-pad_resize'
        },

        {
            id: 4,
            image: 'https://images-static.nykaa.com/creatives/f6c8ae13-2fe8-4c70-bbcf-76fd0a181b41/default.jpg?tr=w-300,cm-pad_resize'
        },

        {
            id: 5,
            image: 'https://images-static.nykaa.com/creatives/b170fce9-4ada-4662-96eb-52dd1c0e57ab/default.jpg?tr=w-300,cm-pad_resize'
        },

        {
            id: 6,
            image: 'https://images-static.nykaa.com/creatives/9b8a8978-e599-476e-9d1a-8f381ffcbf06/default.jpg?tr=w-300,cm-pad_resize'
        },
        {
            id: 7,
            image: 'https://images-static.nykaa.com/creatives/42ff0454-bf89-42f5-aa2b-5538ceb7fa05/default.jpg?tr=w-300,cm-pad_resize'
        },
        {
            id: 8,
            image: 'https://images-static.nykaa.com/creatives/17fc78e8-aae3-494d-ac43-f0e2022732e1/default.jpg?tr=w-300,cm-pad_resize'
        }
    ]
    return (
        <>
            <Text textAlign='center' fontSize={{ base: '16px', md: '24px', lg: '26px' }} fontWeight='650' letterSpacing={{ base: '2px' }} mt={{ base: '15px', md: '30px', lg: '7%' }}>BRANDS YOU WILL LOVE</Text>
            <SimpleGrid columns={[2, 2, 3, 4]}

                gap={4}>
                {BabyData.length > 0 && BabyData.map((elem) => {
                    return <Box key={elem.id}>
                        <Link to={"/hairproducts"}><Image width={{ base: '160px', lg: '280px' }} src={elem.image} m='auto' /></Link>
                    </Box>
                })}
            </SimpleGrid>
        </>
    )
}