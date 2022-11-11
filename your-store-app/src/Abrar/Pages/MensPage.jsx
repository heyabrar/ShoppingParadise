import MensTopBrand from "../Components/MensTopBrand";
import Navbar from "../Components/Navbar";
import SlideShow from '../CustomComponents/SlideShow'
export default function MensPage ( ) {
    const Images =  [
        {
            id :1,
            image : 'https://images-static.nykaa.com/uploads/32fe6b48-b189-41eb-af0d-12d1edc08901.jpg?tr=w-1200,cm-pad_resize'
        },
        {
            id :2,
            image : 'https://images-static.nykaa.com/uploads/861b0948-8e08-42f9-98bf-529b37388b5d.jpg?tr=w-1200,cm-pad_resize'
        },
        {
            id :3,
            image : 'https://images-static.nykaa.com/uploads/be1eda0f-fd12-4830-91e0-ef92d7680c81.jpg?tr=w-1200,cm-pad_resize'
        },
        {
            id :4,
            image : 'https://images-static.nykaa.com/uploads/4b137c91-cd8b-4f15-8edd-bdeb97163970.jpg?tr=w-1200,cm-pad_resize'
        },
        {
            id :5,
            image : 'https://images-static.nykaa.com/uploads/1845d1c4-40a1-4b11-8501-5b54ce0e1303.jpg?tr=w-1200,cm-pad_resize'
        },
        {
            id :6,
            image : 'https://images-static.nykaa.com/uploads/c73b7deb-3151-4fe7-93f5-ed64592a6191.jpg?tr=w-1200,cm-pad_resize'
        }
    ]
    return (
        <>
        <Navbar/>
        <SlideShow data={Images}/>
        <MensTopBrand/>
        </>
    )
}