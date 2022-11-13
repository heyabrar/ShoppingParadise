import { Box, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../../Abrar/Components/Footer";
import Navbar from "../../Abrar/Components/Navbar";


export default function FragranceTopBanner ( ) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
     
      
    return (
        <>

<Text textAlign='center' fontSize={{base : '16px', md : '24px', lg : '26px'}} fontWeight='650' letterSpacing={{base  : '2px'}} mt={{base : '20px', md : '30px', lg: '5%'}}>Fragrance Collection - Perfumes, Body Mist and More (6246)</Text>
<Box width={{base : '100%', md : '100%', lg : '75%'}} m='auto' mt={{base : '20px', md : '30px', lg : '45px'}}>
          <Image src="https://images-static.nykaa.com/uploads/ef260bc6-3f6a-4955-a911-08a0fa91f6b7.jpg?tr=w-1200,cm-pad_resize"/>
        </Box>

        <Box width={{base : '100%', md : '100%', lg : '75%'}} m='auto' mt={{base : '20px', md : '30px', lg : '45px'}}>
          <Image src="https://images-static.nykaa.com/uploads/c5a878db-dd6e-4884-b37d-9af5787c5f9a.jpg?tr=w-1200,cm-pad_resize"/>
        </Box>

        <Box width={{base : '100%', md : '100%', lg : '75%'}} m='auto' mt={{base : '20px', md : '30px', lg : '45px'}}>
          <Image src="https://images-static.nykaa.com/uploads/3774d64e-7dd2-4289-916f-46a380b16010.jpg?tr=w-1200,cm-pad_resize"/>
        </Box>
       </>    
    )
}