import Footer from "../../Abrar/Components/Footer";
import Navbar from "../../Abrar/Components/Navbar";
import MomBaby from "../../Dibyanshu/Components/Navbar/NavComponent/MomBaby";
import MomBabyByCategory from "../Components/MomBabyCategory";
import MomBabyLast from "../Components/MomBabyLat";
import MomBabayTop from "../Components/MomBabyTop";
import MomBabyTrending from "../Components/MomBabyTrending";
import MomBrandsLov from "../Components/MomBransLov";
import Mombrands from "../Components/MomsBrand";

export default function MomAndBabyPage() {
    return (
        <>
            <Navbar />
            <MomBabayTop />
            {/* <MomBaby/> */}
            <MomBabyTrending />
            <MomBrandsLov />
            <MomBabyByCategory />
            <Mombrands />
            <MomBabyLast />
            <Footer />
        </>
    )
}