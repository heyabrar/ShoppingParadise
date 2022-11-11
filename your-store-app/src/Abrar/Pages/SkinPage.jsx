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
import { Link } from "react-router-dom";

export default function SkinPage ( ) {
    
    return(
        <>
        <Link to='/adminside'>Admin Side</Link>
        <Navbar/>
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