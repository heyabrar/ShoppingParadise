import { Box, Image, Text } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import StaticCarousel from "../CustomComponents/StaticCarousel";


export default function SkinOnlyAtNykaa ( ) {
      const images =  [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/e07800a3-c92e-4d83-b115-10703a6fcd8f.jpg?tr=w-600,cm-pad_resize'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/c73a6867-93ac-4922-b284-3fcc8d021906.jpg?tr=w-600,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/0a4c683f-ef6b-4d94-9795-c20381b8858c.jpg?tr=w-600,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/99439dff-ab0b-471b-be8e-e1893afcae04.jpeg?tr=w-600,cm-pad_resize'
        }
      ]

    return (
        <>
         <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '7%'}}>ONLY AT NYKAA</Text>
         <StaticCarousel data={images} redirect='/skinras' laptop={3} tab={2} mobile={3}/>

        <Box width={{base : '90%', md : '75%', lg : '75%'}} m='auto' mt={{base : '20px', md : '30px', lg : '45px'}}>
          <Image src="https://images-static.nykaa.com/uploads/3df85e95-5d80-46b7-a8fb-75fd485c35ba.jpg?tr=w-1200,cm-pad_resize"/>
        </Box>
        </>
    )
}

