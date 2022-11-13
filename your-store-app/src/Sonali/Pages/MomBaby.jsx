import Footer from "../../Abrar/Components/Footer";
import Navbar from "../../Abrar/Components/Navbar";
import MomBaby from "../../Dibyanshu/Components/Navbar/NavComponent/MomBaby";
import MomBabyByCategory from "../Components/MomBabyCategory";
import MomBabyLast from "../Components/MomBabyLat";
import MomBabayTop from "../Components/MomBabyTop";

export default function MomAndBaby(){
    return(
        <>
        <Navbar/>
        <MomBabayTop/>
        <MomBaby/>
        <MomBabyByCategory/>
        <MomBabyLast/>
        <Footer/>
        </>
    )
}