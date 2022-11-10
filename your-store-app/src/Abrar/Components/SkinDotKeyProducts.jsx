import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function SkinDotKeyProducts ({data}) {
    return (
        <>
        <SimpleGrid columns={[2,3,3,4]} border='1px solid red' width={{base : '95%', md : '90%'}} m='auto'>
            {data.map((e)=>{
                return <Box border='1px solid red' key={e['css-1j33oxj']}>
                    <Text>{e['custom-tag']}</Text>
                    <Image m='auto' src={e['css-11gn9r6 src']}/>
                    <Text>{e['css-xrzmfa']}</Text>
                    <Text>{'MRP: '+ e['css-111z9ua']}</Text>
                    <Text>{e['css-i6xqbh']}</Text>
                </Box>
            })}
        </SimpleGrid>

        </>
    )
}