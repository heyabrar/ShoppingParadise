// import FregranceProducts from "../Components/FregranceProducts";

import { Box } from "@chakra-ui/react";
import Footer from "../../Abrar/Components/Footer";
import Navbar from "../../Abrar/Components/Navbar";
import FragranceTopBanner from "../Components/FragranceTopBanner";
import FregranceProducts from "./FragranceProducts";

export default function Fragrance (){
    return(
        <>
        <Navbar/>
        <Box mt={{base :'125px', md :'0'}}></Box>
        <FragranceTopBanner/>
        <FregranceProducts/>
        <Footer/>
        </>
    )
}