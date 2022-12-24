import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MomBabyTrending() {
    const ShopByCatData = [
        {
            id: 1,
            image: 'https://images-static.nykaa.com/uploads/81eb77e6-fbca-448f-8f02-b2a87530adab.jpg?tr=w-300,cm-pad_resize'
        },
        {
            id: 2,
            image: 'https://images-static.nykaa.com/uploads/f08b5caf-bfa6-4675-ae79-c322efdf0cac.jpg?tr=w-300,cm-pad_resize'
        },
        {
            id: 3,
            image: 'https://images-static.nykaa.com/uploads/a9ef6d58-2943-42a9-bbab-de717ddad829.jpg?tr=w-300,cm-pad_resize'
        },
        {
            id: 4,
            image: 'https://images-static.nykaa.com/uploads/9a9138d6-f9b2-43b5-bb73-debc6d6ae710.jpg?tr=w-300,cm-pad_resize'
        },
        {
            id: 5,
            image: 'https://images-static.nykaa.com/uploads/8b07667a-8322-485b-9f7a-d9a7e3258f73.jpg?tr=w-300,cm-pad_resize'
        },
        {
            id: 6,
            image: 'https://images-static.nykaa.com/uploads/fd002884-8297-4f90-8912-543bd7203fb8.jpg?tr=w-300,cm-pad_resize'
        },

    ]
    return (
        <>
            <Box mt={{ base: '10px', md: '25px' }}>
                <Text textAlign='center' fontSize={{ base: '16px', md: '24px', lg: '26px' }} fontWeight='650' letterSpacing={{ base: '2px' }} mt={{ base: '5px', md: '30px', lg: '7%' }}>WHAT MOMS ARE LOVING RIGHT NOW</Text>
                <SimpleGrid columns={[2, 2, 3]} width={{ base: '95%', lg: '90%' }} m='auto' rowGap={{ base: '20px', md: '30px', lg: '35px' }} mt={{ base: '10px', md: '25px' }} gap={3}>
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