import { GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { Box } from "@mui/system"

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
    return (
        <>
            <SimpleGrid columns={[3,4,4,5]}>
                {MensBrand.length > 0 && MensBrand.map((e)=>{
                    return <GridItem >
                        <Image src={e.image} alt={e.description}/>
                        <Text>{e.title}</Text>
                        <Text>{e.description}</Text>
                    </GridItem>
                })}
            </SimpleGrid>

        </>
    )
}