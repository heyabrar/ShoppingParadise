import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function MensShopByConcern ( ) {
    const Shopby = [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/2bb534a6-bc93-42ed-b18f-a5030a28ba02.jpg?tr=w-200,cm-pad_resize',
            des : 'Acne'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/f54b76b8-98f2-4344-a758-dc5284dfcf52.png?tr=w-200,cm-pad_resize',
            des : 'Oily Skin'
        }, {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/3e73c881-e114-43ac-bed4-ad5e20f63088.png?tr=w-200,cm-pad_resize',
            des : 'Dry Skin'
        }, {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/e595716a-0342-4085-a39d-9f0cc5733d01.png?tr=w-200,cm-pad_resize',
            des : 'Dandruff'
        }, {
            id : 5,
            image : 'https://images-static.nykaa.com/uploads/e595716a-0342-4085-a39d-9f0cc5733d01.png?tr=w-200,cm-pad_resize',
            des : 'Hairfall'
        }, {
            id : 6,
            image : 'https://images-static.nykaa.com/uploads/175819c2-068d-4fa9-acab-6f90f28f84a0.jpg?tr=w-200,cm-pad_resize',
            des : 'Dry Hair'
        }
    ]

    const BudgetBuy = [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/2a74efb9-f482-42ab-aa66-f625b6d7c683.jpg?tr=w-240,cm-pad_resize',
            title : 'Facewash',
            price : '₹399'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/712932b9-fecb-4570-a6d7-576990366283.jpg?tr=w-240,cm-pad_resize',
            title : 'Whey Protiens',
            price : '₹1999'
        }, {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/eec97439-f38f-4352-bb1b-46e704ced4ea.jpg?tr=w-240,cm-pad_resize',
            title : 'Body Wash & Shower Gels    ',
            price : '₹299'
        }, {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/d738c9b4-9dcc-439f-8a6b-b557c54b2f73.jpg?tr=w-240,cm-pad_resize',
            title : 'Deodorants',
            price : '₹299'
        },
    ]
    return (
        <>
            <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '5%'}}>SHOP BY CONCERN</Text>
            <SimpleGrid columns={[3,4,3,6]} width={{base : '95%', md : '90%', lg : '90%'}} m='auto' rowGap={{base :'20px'}} mt={{base : '20px'}}>
                {Shopby.length > 0 && Shopby.map((e)=>{
                    return <Box textAlign='center'>
                        <Image m='auto' w={{base : '100px', md : '150px', lg :'180px'}} src={e.image} alt={e.des}/>
                        <Text fontSize={{base :'14px', md :'16px'}} fontWeight='600'>{e.des}</Text>
                    </Box>
                })}
            </SimpleGrid>

            <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '4%'}}>BUTGET BUY</Text>
            <SimpleGrid columns={[2,4,4,4]} width={{base : '95%', lg :'85%'}} m='auto'>
                {BudgetBuy.map((e)=>{
                    return <Box textAlign='center'>
                        <Image width={{base :'150px', lg :'220px'}} m='auto' src={e.image} alt={e.title}/> 
                        <Text fontSize={{base :'15px', lg :'16px'}} fontWeight='550'>{e.title}</Text>
                        <Text fontSize={{base : '14px'}} color='grey' fontWeight='550'>{e.price}</Text>
                    </Box>
                })}
            </SimpleGrid>

        </>
    )
}