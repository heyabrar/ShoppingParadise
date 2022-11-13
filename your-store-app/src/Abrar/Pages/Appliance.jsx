import ApplianceProducts from "../Components/ApplianceProducts";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Slideshow from "../CustomComponents/SlideShow";

export default function AppliancePage ( ) {
    const data = [
        {
            id : 1,
            image : 'https://images-static.nykaa.com/uploads/6da5f167-2fd9-4f88-bc8b-dd17c013ca98.jpg?tr=w-1200,cm-pad_resize'
        },
        {
            id : 2,
            image : 'https://images-static.nykaa.com/uploads/d3661216-7ecc-405e-8be0-edc8e13d0a97.jpg?tr=w-1200,cm-pad_resize'
        },
        {
            id : 3,
            image : 'https://images-static.nykaa.com/uploads/e5c2f7ba-1736-47cc-95e5-065c6b07fc12.jpg?tr=w-1200,cm-pad_resize'
        },
        {
            id : 4,
            image : 'https://images-static.nykaa.com/uploads/1e0764ff-053f-466a-82fb-8f88ac4dc606.jpg?tr=w-1200,cm-pad_resize'
        }

    ]
    return (
        <>
        <Navbar/>
        <Slideshow data={data}/>
        <ApplianceProducts/>
        <Footer/>
        </>
    )
}