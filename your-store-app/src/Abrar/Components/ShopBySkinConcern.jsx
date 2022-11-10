import {Text } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import StaticCarousel from "../CustomComponents/StaticCarousel";


export default function ShopBySkinConcern ( ) {
 
      const images =  [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/050a6ccb-288c-42c5-a32b-d7ed71f777a6.jpg?tr=w-400,cm-pad_resize'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/f901fb3b-707a-4de8-a81b-d1c24997606e.jpg?tr=w-400,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/2ae6668a-5e4d-4b13-a2bd-29f8e5aa8f2a.jpg?tr=w-400,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/eca5dd45-8c78-475f-9f32-bf56253d02ae.jpg?tr=w-400,cm-pad_resize'
        },
        {
            id : 5,
            image : 'https://images-static.nykaa.com/uploads/eca5dd45-8c78-475f-9f32-bf56253d02ae.jpg?tr=w-400,cm-pad_resize'
        },
         {
            id : 7,
            image : 'https://images-static.nykaa.com/uploads/4a101340-2025-46ba-8d73-ffb84e83c146.jpg?tr=w-400,cm-pad_resize'
        },
      ]
    return (
        <>
         <Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '7%'}}>SHOP BY SKIN CONCERN</Text>
         <StaticCarousel data={images}/>
        </>
    )
}

