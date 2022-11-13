// import FregranceProducts from "../Components/FregranceProducts";

import Footer from "../../Abrar/Components/Footer";
import Navbar from "../../Abrar/Components/Navbar";
import FragranceTopBanner from "../Components/FragranceTopBanner";
import FregranceProducts from "./FragranceProducts";

export default function Fragrance (){
    return(
        <>
        <Navbar/>
        <FragranceTopBanner/>
        <FregranceProducts/>
        <Footer/>
        </>
    )
}