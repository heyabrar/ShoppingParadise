import { Box, Image } from "@chakra-ui/react";
import Slider from "../../Dibyanshu/Components/Slider/Slider";
import Footer from "../Components/Footer";
import HomeTopBrands from "../Components/HomeTopBrands";
import Navbar from "../Components/Navbar";
import Slideshow from "../CustomComponents/SlideShow";
import StaticCarousel from "../CustomComponents/StaticCarousel";

export default function HomePage ( ){
    const homeSlideShow  = [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/cdd453f7-c08a-4a1d-b5fd-e1b884993929.jpg?tr=w-1200,cm-pad_resize'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/26616e43-bc7e-4f3b-a57a-19ab0c8baca3.jpg?tr=w-1200,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/34cee91a-300e-4b05-84b4-f22e9ff7dc08.jpg?tr=w-1200,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/aabe5aa4-4f40-4593-beaf-85481d47b204.jpg?tr=w-1200,cm-pad_resize'
        },
        {
            id : 5,
            image : 'https://images-static.nykaa.com/uploads/105c526d-4689-4643-a33a-5c4ea6650d59.jpg?tr=w-1200,cm-pad_resize'
        }
    ]
    return(
        <>
        <Navbar/>
        <Slideshow data={homeSlideShow}/>

        <Box width={{base : '90%', lg: '95%'}} m='auto' mt='20px'>
            <Image w='100%' m='auto' src="https://images-static.nykaa.com/uploads/3787128a-d099-482a-8d92-cef013554343.gif?tr=w-1200,cm-pad_resize"/>
        </Box>
        
        <Box width={{base : '80%', lg: '70%'}} m='auto' mt={{base : '20px', lg :'30px'}}>
            <Image m='auto' src="https://images-static.nykaa.com/uploads/a47a4ec4-140c-4035-8b85-629db661a638.jpg?tr=w-1200,cm-pad_resize"/>
        </Box>
        {/* <Slider/> */}
        <HomeTopBrands/>
        
        <Footer/>
        </>
    )
}