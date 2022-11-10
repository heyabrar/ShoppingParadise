import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function SkinDotKeyProducts ({data}) {
    return (
        <>
        <SimpleGrid columns={[2,3,3,3]} width={{base : '95%', md : '90%'}} m='auto' rowGap={{base : '10px', md: '25px', lg: '25px'}}>
            {data.map((e)=>{
                return <Box key={e.id} width={{base : '95%', lg : '80%'}} margin='auto' h={{base : '220px', md : '280px', lg :'350px'}} padding='10px' bg='white' shadow='sm' borderRadius='2px'>
                    <Flex fontSize={{base : '10px', md : '12px', lg : '16px'}} fontWeight='550' gap={{base : '15px'}} h={{base : '20px'}}>
                    <Text color='#fc2779' marginLeft='10px'>{e.featuredTag}</Text>
                    <Text color='green'>{e.featuredTag2}</Text>
                    </Flex>
                    <Image width={{base : '85px' , md : '120px', lg : '200px'}} m='auto' src={e.image || e.images} h={{base : '85px', md : '120px', lg :'200px'}} mt='10px'/>
                    <Text fontSize={{base : '12px', md  :'14px'}} fontWeight='520' w={{base : '95%', lg : '80%'}}  m='auto' textAlign='center' h={{base : '55px', md : '70px'}} mt={{base : '5px'}} >{e.title}</Text>
                    <Flex fontSize={{base : '10px', md: '12px', lg : '14px'}} width={{base : '95%'}} margin='auto' justifyContent='center' gap={{base : '10px'}} mt={{base : '5px'}}>
                    <Text textDecoration='line-through' color='gray'>{'MRP: '+e.actualPrice}</Text>
                    <Text fontWeight='620'>{'MRP: '+e.price}</Text>
                    <Text color='green' fontWeight='620'>{e.discount}</Text>
                    </Flex>
                    <Text>{e['css-i6xqbh']}</Text>
                </Box>
            })}
        </SimpleGrid>
        </>
    )
}