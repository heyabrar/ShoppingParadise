import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function SkinTrendingNow ( ) {

    const MapIt = [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/70b46a4c-deff-478e-b0fd-836877e46591.png?tr=w-600,cm-pad_resize'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/9ca4f436-9fc8-4584-a7b8-d64b95724e5c.png?tr=w-600,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/77c24e83-7a20-4a6a-a5c1-f4a2e19354a0.png?tr=w-600,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/d7f3b045-6ecd-49eb-bdb1-5df9c37638e7.png?tr=w-600,cm-pad_resize'
        }
    ]
    return (
        <>
         <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '5%'}}>TRENDING NOW</Text>
        <SimpleGrid width={{base : '95%', md : '90%'}} columns={[2,2,2,2]} m='auto' rowGap={{base : '20px'}} mt={{base : '15px'}}>
            {MapIt.length > 0 && MapIt.map((elem)=>{
                return <Box key={elem.id}>
                    <Image m='auto' width={{base : '180px', md :  '270px', lg :  '650px'}} src={elem.image}/>
                </Box>
            })}
        </SimpleGrid>

        <Box width={{base : '90%', md : '75%', lg : '75%'}} m='auto' mt={{base : '20px', md : '30px', lg : '45px'}}>
            <Image src="https://images-static.nykaa.com/uploads/95ea0697-646b-43a6-8690-2a4d9546d452.png?tr=w-1200,cm-pad_resize"/>
        </Box>
        </>
    )
}