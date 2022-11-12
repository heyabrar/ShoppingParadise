import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react"
import StaticCarousel from "../CustomComponents/StaticCarousel"

export default function BrandsYouCantMiss ( ) {
    const Brand1 = [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/6d02128d-6fd4-47ef-af1e-25329b1fbe6d.jpg?tr=w-300,cm-pad_resize'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/a070b011-59c3-4880-a847-5ffc9a11715b.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/722765a7-7a6e-473b-a459-c543810644e7.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/97fedc75-0d2b-4b48-b280-d991f9c09c6a.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 5,
            image : 'https://images-static.nykaa.com/uploads/e99031c5-dbce-4f28-b48a-9da6b9a6e143.png?tr=w-200,cm-pad_resize'
        },
        {
            id : 6,
            image : 'https://images-static.nykaa.com/uploads/a163aea3-10ac-4e61-93c0-545ed3256bad.jpg?tr=w-200,cm-pad_resize'
        }
    ]

    const Brand2 = [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/23951d99-e2f3-48e2-ac05-49d88e4d52f1.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/6e7f9033-73a1-43d3-a96b-e85a77a4dd2e.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/59725246-fd77-47c2-96c2-ec831b2d3059.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/42da7e84-29ee-4bd5-9496-16b52e53f9eb.jpg?tr=w-200,cm-pad_resize'
        },  {
            id : 5,
            image : 'https://images-static.nykaa.com/uploads/175bed37-8a33-4a75-bd02-2c03b654e9a1.jpg?tr=w-200,cm-pad_resize'
        },
        {
            id : 6,
            image : 'https://images-static.nykaa.com/uploads/d743c0a8-ad1c-47fa-af04-6e04fae16248.jpg?tr=w-200,cm-pad_resize'
        }
    ]

    const Influeners = [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/e6a9f44b-a549-4c78-85e1-7428916706f4.jpg?tr=w-240,cm-pad_resize',
            des : 'The Cister C0`s'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/b4186528-2d22-4619-b7c0-ac2fd5ef6317.jpg?tr=w-240,cm-pad_resize',
            des : 'Gia Kashyaps'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/d280aeca-f662-4b26-9c0c-ca649bb658b2.jpg?tr=w-240,cm-pad_resize',
            des : 'Muskan Chanchlani'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/9c88131e-b0c2-4d62-8295-8dad1801b17a.jpg?tr=w-240,cm-pad_resize',
            des : 'Shantanu'
        }
    ]
    return(
        <>
         <Text textAlign='center' fontSize={{base : '18px', md: '20px', lg: '26px'}} mt='2%' fontWeight='550' letterSpacing='2px'>BRANDS YOU CANT MISS</Text>
         <StaticCarousel data={Brand1} laptop={6} tab={5} mobile={4} redirect='/hair'/>

         <Box mt='50px'>
         <StaticCarousel data={Brand2} laptop={6} tab={5} mobile={4} redirect='/skinloreal'/>
         </Box>

         <Text textAlign='center' fontSize={{base : '18px', md: '20px', lg: '26px'}} mt='5%' fontWeight='550' letterSpacing='2px'>Influencer's Festive Favourites</Text>

         <SimpleGrid width={{base  : '95%', md :'90%', lg : '80%'}} m='auto' columns={[2,2,4,4]}>
            {Influeners.map((elem)=>{
                return <Box textAlign='center'>
                    <Image width={{base : '200px', md : '250px'}} m='auto' src={elem.image} />
                    <Text>{elem.des}</Text>
                </Box>
            })}
         </SimpleGrid>


         <Box width={{base : '90%', md : '75%', lg : '75%'}} m='auto' mt={{base : '20px', md : '30px', lg : '45px'}}>
          <Image src="https://images-static.nykaa.com/uploads/3df85e95-5d80-46b7-a8fb-75fd485c35ba.jpg?tr=w-1200,cm-pad_resize"/>
        </Box>  

        </>
    )
}