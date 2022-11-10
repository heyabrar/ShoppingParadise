import {Box, Image, SimpleGrid, Text} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
export default function SkinTopBanner ( ) {
    const BrandsToLoveObj = [
        {
        id : 1,
        image : 'https://images-static.nykaa.com/uploads/292255a7-5fa3-4ef0-b8aa-ddbae96fcc82.jpg?tr=w-300,cm-pad_resize',
        title : 'Bestseller Minis',
        price : 'Starting At ₹1350'
       },

       {
        id : 2,
        image : 'https://images-static.nykaa.com/uploads/eaaa89bc-fdb5-4ee7-9606-ce28368ae0ca.jpg?tr=w-300,cm-pad_resize',
        title : 'Upto 35% Off',
        price : 'On Entire Range'
       },

       {
        id : 3,
        image : 'https://images-static.nykaa.com/uploads/e56c6f82-f8ce-4339-a1f7-ac1d1a6da1c4.png?tr=w-300,cm-pad_resize',
        title : 'Flat 25% Off +',
        price : 'Get 5% Extra On Rs. 1799 & Above   '
       },

       {
        id : 4,
        image : 'https://images-static.nykaa.com/uploads/a32d4889-2e13-4494-8944-be1e1f2cfb1e.jpg?tr=w-300,cm-pad_resize',
        title : 'Upto 40% Off',
        price : 'On Entire Range'
       },

       {
        id : 5,
        image : 'https://images-static.nykaa.com/uploads/6302e35c-6413-45ef-93b1-e6354c26914e.jpg?tr=w-300,cm-pad_resize',
        title : 'Upto 30% Off',
        price : 'On Entire Range'
       },

       {
        id : 6,
        image : 'https://images-static.nykaa.com/uploads/c2a0354e-63b7-4c64-8902-12a976e3f1ee.jpg?tr=w-300,cm-pad_resize',
        title : 'Upto 20% Off',
        price : 'Extra 5% Off On ₹1099+'
       },

       {
        id : 7,
        image : 'https://images-static.nykaa.com/uploads/93cb7eea-a107-43e3-9f24-6dd639cc177f.jpg?tr=w-300,cm-pad_resize',
        title : 'Upto 35% Off',
        price : ''
       },

       {
        id : 8,
        image : 'https://images-static.nykaa.com/uploads/9d4141b7-71c6-4967-a466-508907786206.jpg?tr=w-300,cm-pad_resize',
        title : 'Upto 35% Off',
        price : 'On Entire Range'
       }
]
    return (
        <>
        <Box>
            <Image width='100%' src='https://images-static.nykaa.com/uploads/e6d3fa7e-cf4d-412f-8950-8993f9d1ef55.jpg?tr=w-1200,cm-pad_resize' alt='Top Banner'/>
        </Box>

        <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '5px', md : '10px'}}>BRANDS YOU WILL LOVE</Text>
        <SimpleGrid columns={[2,2,3,4]} width={{base : '95%', md : '95%'}} m='auto' rowGap={{base : '20px', md :'30px', lg: '35px'}} mt={{base: '15px', md: '20px'}}>
                {BrandsToLoveObj.length > 0 && BrandsToLoveObj.map((elem)=>{
                    return <Box width={{base : '95%'}} m='auto'  textAlign='center' key={elem.id}>
                        <Link  to={elem.id === 8 ? '/skindotkey' : elem.id === 4 ? '/skinloreal' : elem.id === 1 ? '/skinEstee' : '/skindotkey'}><Image width={{base : '150px', md : '150px', lg: '250px'}} m='auto' src={elem.image} alt={elem.title}/></Link>
                        <Text fontSize={{base: '14px', md: '15px', lg : '16px'}} fontWeight='600'>{elem.title}</Text>
                        <Text fontSize={{base : '12px', md : '14px'}}>{elem.price}</Text>
                    </Box>
                })}
        </SimpleGrid>
        </>
    )
}