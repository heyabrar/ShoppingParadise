import Footer from "../../Abrar/Components/Footer";
import Navbar from "../../Abrar/Components/Navbar";
import HairBrand from "../Components/HairBrands";
import HairCarosal from "../Components/HairCarosal";
import HairCancern from "../Components/HairConcern";
import HairTrending from "../Components/HairTrending";
import HairLuxe from "../Components/Luxe";
import ShopByCategory from "../Components/ShopByCategory";
import ShopByHairType from "../Components/ShopByHairType";

export default function HairPage ()  {
   return(
    <>
    <Navbar/>
    <HairCarosal/>
     <HairCancern/>
     <HairBrand/>
     <ShopByCategory/>
     <ShopByHairType/>
     <HairLuxe/>
     <HairTrending/>
     <Footer/>
    </>
    
   )
}