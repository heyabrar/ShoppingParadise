import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slider from "../../Dibyanshu/Components/Slider/Slider";
import ShopBySkinConcern from "../Components/ShopBySkinConcern";
import ShopBySkinType from "../Components/ShopBySkinType";
import SkinLuxiIndulgies from "../Components/SkinLuxiIndulgies";
import SkinOnlyAtNykaa from "../Components/SkinOnlyAtNykaa";
import SkinShopByCategory from "../Components/SkinShopByCategory";
import SkinTopBanner from "../Components/SkinTopBanner";
import SkinTrendingNow from "../Components/SkinTrendingNow";
import { Box } from "@chakra-ui/react";

export default function SkinPage ( ) {
    
    return(
        <>
        <Navbar/>
        <Box mt={{base :'125px', md :'0'}}></Box>
        <Slider/>
        <SkinTopBanner/>    
        <SkinShopByCategory/>
        <ShopBySkinType/>
        <ShopBySkinConcern/>
        <SkinLuxiIndulgies/>
        <SkinOnlyAtNykaa/>
        <SkinTrendingNow/>
        <Footer/>
        </>
    )
}