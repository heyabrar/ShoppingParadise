import { GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import StaticCarousel from "../CustomComponents/StaticCarousel"

export default function MensTopBrand ( ) {
    const MensBrand = [
        {
          image: "https://images-static.nykaa.com/uploads/3dcee8da-32b6-45ed-b23a-afbe3cc12372.jpg?tr=w-240,cm-pad_resize",
          title: "Up To 30% OFF",
          description: "Pamper the #Gentleman InYou",
          id : 1,
        },
        {
          image: "https://images-static.nykaa.com/uploads/c7510dea-2e70-41c0-8f0d-2692023ccee8.jpg?tr=w-240,cm-pad_resize",
          title: "Starting at ₹500+",
          description: "Affordable Skincare Backed by Science",
          id : 2,
        },
        {
          image: "https://images-static.nykaa.com/uploads/71ad38a7-b8be-4944-8267-e4d9fcab4c6e.jpg?tr=w-240,cm-pad_resize",
          title: "Up To 30% OFF",
          description: "On Garnier Men's Bestsellers",
          id : 3,
        },
        {
          image: "https://images-static.nykaa.com/uploads/655b09ff-0773-4a29-91e3-74261319c2e6.jpg?tr=w-240,cm-pad_resize",
          title: "Up To 30% OFF",
          description: "India’s First Caffeinated Brand",
          id : 4,
        },
        {
          image: "https://images-static.nykaa.com/uploads/70086ae0-f6f0-4655-b42b-a55c03a2d618.jpg?tr=w-240,cm-pad_resize",
          title: "Up To 10% OFF",
          description: "On Hair Care Regime",
          id : 5,
        },
        {
          image: "https://images-static.nykaa.com/uploads/b728b001-545c-4b89-a5a3-abda6eac7a74.jpg?tr=w-240,cm-pad_resize",
          title: "Up To 50% OFF",
          description: "Stay Dandruff Free",
          id : 6,
        },
        {
          image: "https://images-static.nykaa.com/uploads/1874dfb0-c8ea-4252-a2d7-92b9fbcda338.jpg?tr=w-240,cm-pad_resize",
          title: "Up To 40% OFF",
          description: "Rediscover The Art of Shaving",
          id : 7,
        },
        {
          image: "https://images-static.nykaa.com/uploads/32cb6a66-69c9-45a0-a71e-baeb25c24294.jpg?tr=w-240,cm-pad_resize",
          title: "Up To 20% OFF",
          description: "Leading Whey Protein",
          id : 8,
        },
        {
          image: "https://images-static.nykaa.com/uploads/ebdbc8fc-e829-48f9-a84d-831cc14cabbd.jpeg?tr=w-240,cm-pad_resize",
          title: "Up To 20% OFF",
          description: "Shop Men's Fragrance, Body Care & More",
          id : 9,
        },
        {
          image: "https://images-static.nykaa.com/uploads/b469a486-abbb-47bf-b9b7-38df266f16ee.jpg?tr=w-240,cm-pad_resize",
          title: "Up To 45% OFF",
          description: "Fuel Your Workouts with MuscleBlaze",
          id : 10,
        },
        {
          image: "https://images-static.nykaa.com/uploads/08a0f6d2-3aa4-421e-888e-9919be849d47.jpg?tr=w-240,cm-pad_resize",
          title: "Up To 40% OFF",
          description: "Unleash the #HairyMusculinity",
          id : 11,
        },
        {
          image: "https://images-static.nykaa.com/uploads/117cef9d-edb1-4cbe-b267-5ae384b29257.jpg?tr=w-240,cm-pad_resize",
          title: "Up To 30% OFF",
          description: "Ustraa Hai Toh Swag Hai!",
          id : 12,
        }
      ]

      const TopCate = [
        {
          id : 1,
          image : 'https://images-static.nykaa.com/uploads/c4ebdb12-7b5c-456f-a64a-cb05cad5ebea.png?tr=w-200,cm-pad_resize'
        },
        {
          id : 2,
          image : 'https://images-static.nykaa.com/uploads/bfcae510-6cb7-4367-8633-58756fc3387d.png?tr=w-200,cm-pad_resize'
        },
        {
          id : 3,
          image : 'https://images-static.nykaa.com/uploads/5cb290f6-40c9-45b1-9f1a-27e13055cec6.png?tr=w-200,cm-pad_resize'
        },
        {
          id : 4,
          image : 'https://images-static.nykaa.com/uploads/5cb290f6-40c9-45b1-9f1a-27e13055cec6.png?tr=w-200,cm-pad_resize'
        },
        {
          id : 5,
          image : 'https://images-static.nykaa.com/uploads/0fcc7efb-ec2c-494f-aae1-95691760d0a7.png?tr=w-200,cm-pad_resize'
        },
        {
          id : 6,
          image : 'https://images-static.nykaa.com/uploads/1d0bb453-0408-4c40-96da-2d4b586b747f.png?tr=w-200,cm-pad_resize'
        }
      ]
    return (
        <>
            <SimpleGrid columns={[3,4,3,4]}  w={{base : '95%', md :'90%' ,lg : '80%'}} m='auto' mt={{base : '20px', lg: '30px'}} rowGap={{base :'15px', lg :'30px'}}> 
                {MensBrand.length > 0 && MensBrand.map((e)=>{
                    return <GridItem  textAlign='center'>
                       <Link to={e.id === 3 ? '/mensgarnier' : '/'}><Image w={{base :'100px',md : '150px' , lg: '200px'}} m='auto' src={e.image} alt={e.description}/></Link> 
                        <Text fontSize={{base : '12px', lg: '14px'}} fontWeight='580' mt='5px'>{e.title}</Text>
                        <Text fontSize={{base  :'12px', lg : '15px'}} color='gray' fontWeight='550'>{e.description}</Text>
                    </GridItem>
                })}
            </SimpleGrid>

            <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '5%'}}>TOP CATEGORIES</Text>
            <StaticCarousel data={TopCate}/>
        </>
    )
}