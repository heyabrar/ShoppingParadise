import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function HairTrending () {

    const TrendData = [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/6396eadc-56c9-4734-b96d-34e991317083.png?tr=w-600,cm-pad_resize'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/d764d1ab-63ac-41f5-896e-ed59c64b85fc.jpg?tr=w-600,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/d40f6cb6-41b2-4a36-97d0-5ff6ecb6e944.jpg?tr=w-600,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/f8be5a5a-16ea-4dda-ac4a-7a182b0546ff.jpg?tr=w-600,cm-pad_resize'
        }
    ]
    return (
        <>
         <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '5%'}}>TRENDING NOW</Text>
        <SimpleGrid width={{base : '95%', md : '90%'}} columns={[2,2,2,2]} m='auto' rowGap={{base : '20px'}} mt={{base : '15px'}}>
            {TrendData.length > 0 && TrendData.map((elem)=>{
                return <Box key={elem.id}>
                    <Image m='auto' width={{base : '180px', md :  '270px', lg :  '650px'}} src={elem.image}/>
                </Box>
            })}
        </SimpleGrid>

        <Box width={{base : '90%', md : '75%', lg : '75%'}} m='auto' mt={{base : '20px', md : '30px', lg : '45px'}}>
          <Image src="https://images-static.nykaa.com/uploads/976b64ec-d272-4e3a-9ec4-66abe68fa7cb.png?tr=w-1200,cm-pad_resize"/>
        </Box>
        </>
    )
}