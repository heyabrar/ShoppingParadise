import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function AdminBrandsPage ( ) {
    const Brands = [
        {
            id : 1, 
            title : 'Estee Lauder (estee)',
            image : 'https://images-static.nykaa.com/uploads/292255a7-5fa3-4ef0-b8aa-ddbae96fcc82.jpg?tr=w-300,cm-pad_resize'
        },

        {
            id : 2, 
            title : 'Skin Ras (skinras)',
            image : 'https://images-static.nykaa.com/uploads/e56c6f82-f8ce-4339-a1f7-ac1d1a6da1c4.png?tr=w-300,cm-pad_resize'
        },

        {
            id : 3, 
            title : 'L`Oreal Paris (loreal)',
            image : 'https://images-static.nykaa.com/uploads/a32d4889-2e13-4494-8944-be1e1f2cfb1e.jpg?tr=w-300,cm-pad_resize'
        },

        {
            id : 4, 
            title : 'Dot Key (dotkey)',
            image : 'https://images-static.nykaa.com/uploads/9d4141b7-71c6-4967-a466-508907786206.jpg?tr=w-300,cm-pad_resize'
        },

        {
            id : 5, 
            title : 'Garnier (garnier)',
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWC7Wgsboj8qhZ5nR4mv5DCtLzxmxsxffryg&usqp=CAU'
        }
    ]
    return (
        <>
        <Text textAlign='center' fontSize={{base  :'16px', md : '20px' ,lg  :'30px'}} color='#fc2779' fontWeight='550'>OUR BRANDS</Text>
        <SimpleGrid columns={[2,3,3,3]} width={{base  :'95%', md :'90%'}} m='auto' rowGap={{base : '20px', md :'40px'}} mt='20px'>
            {Brands.map((elem)=>{
                return <Box key={elem.id} textAlign='center'>
                    <Image margin='auto' width={{base : '100px', md : '150px'}} src={elem.image} alt={elem.title} borderRadius='50%'/>
                    <Text fontWeight={'550'}>{elem.title}</Text>
                </Box>
            })}

        </SimpleGrid>
        </>
    )
}