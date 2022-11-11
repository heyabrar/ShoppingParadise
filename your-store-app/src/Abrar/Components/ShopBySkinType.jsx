import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ShopBySkinType ( ) {
    const ShopBySkinData = [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/8c8a865f-8215-48fe-ba71-d49143f278fc.png?tr=w-300,cm-pad_resize'
        },

        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/768efc26-207a-4960-8e1f-05479a95fc04.jpg?tr=w-300,cm-pad_resize'
        },

        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/e063daf9-da76-4038-945b-eb8b6a244a6a.jpg?tr=w-300,cm-pad_resize'
        },

        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/f2cd325a-b4ff-46c7-ab80-42a15c0940d7.jpg?tr=w-300,cm-pad_resize'
        }
    ]
    return (
        <>
        <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '15px', md : '30px', lg : '7%'}}>SHOP BY SKIN TYPE</Text>
        <SimpleGrid columns={[2,2,4,4]} width={{base :'95%', md : '90%'}} m='auto' mt={{base :'15px'}} rowGap={{base : '20px'}}>
            {ShopBySkinData.length > 0 && ShopBySkinData.map((elem)=>{
                return <Box key={elem.id}>
                  <Link to='/skinEstee'><Image width={{base : '160px', lg : '280px'}} src={elem.image} m='auto'/></Link>
                </Box>
            })}
        </SimpleGrid>
        </>
    )
}