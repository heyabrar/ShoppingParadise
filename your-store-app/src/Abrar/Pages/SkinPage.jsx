import ShopBySkinConcern from "../Components/ShopBySkinConcern";
import ShopBySkinType from "../Components/ShopBySkinType";
import SkinLuxiIndulgies from "../Components/SkinLuxiIndulgies";
import SkinOnlyAtNykaa from "../Components/SkinOnlyAtNykaa";
import SkinShopByCategory from "../Components/SkinShopByCategory";
import SkinTopBanner from "../Components/SkinTopBanner";

export default function SkinPage ( ) {
    
    return(
        <>
        <SkinTopBanner/>    
        <SkinShopByCategory/>
        <ShopBySkinType/>
        <ShopBySkinConcern/>
        <SkinLuxiIndulgies/>
        <SkinOnlyAtNykaa/>
        </>
    )
}