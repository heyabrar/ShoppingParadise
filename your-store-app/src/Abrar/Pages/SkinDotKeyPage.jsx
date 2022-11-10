import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Slideshow from "../CustomComponents/SlideShow";
import {useDispatch, useSelector} from 'react-redux'
import { FetchDotKeyData } from "../Fetch/Fetch";
import { useEffect } from "react";
import { SkinDotKeyGetFailure, SkinDotKeyGetRequest, SkinDotKeyGetSuccess } from "../../Redux/SkinPageReducer/Action";
import SkinDotKeyProducts from "../Components/SkinDotKeyProducts";
const SlideShowBanner = [
    {
        id :1, 
        image : 'https://images-static.nykaa.com/uploads/052c17f5-1e72-41c3-9118-16febfd7f2a2.jpg?tr=w-1200,cm-pad_resize'
    },
    {
        id : 2,
        image : 'https://images-static.nykaa.com/uploads/6cb18ba8-ae19-4977-b0a6-668fddde68ba.jpg?tr=w-1200,cm-pad_resize'
    },
    {
        id : 3,
        image : 'https://images-static.nykaa.com/uploads/152d7cfb-db5e-4bfb-b677-2407a99ede4b.jpg?tr=w-1200,cm-pad_resize'
    }
]
export default function SkinDotKeyPage ( ) {

    const {DotKeyProducts,isLoading,isError}  = useSelector((store)=> {
        return {
            DotKeyProducts : store.SkinDotKeyReducer.DotKeyProducts,
            isLoading : store.SkinDotKeyReducer.isLoading,
            isError : store.SkinDotKeyReducer.isError
        }
    });

    const Dispatch = useDispatch( );

    const handleFetchData = ( ) =>{
        Dispatch(SkinDotKeyGetRequest( ))
        FetchDotKeyData( ).then((res)=>{
            Dispatch(SkinDotKeyGetSuccess(res.data));
        })
        .catch((err)=> Dispatch(SkinDotKeyGetFailure(err)))
    }

    useEffect(( ) =>{
        handleFetchData( );
    }, [ ]);
    return (
        <>
        <Text textAlign='center' fontWeight='600' fontSize={{base : '16px', md : '18px' ,lg : '20px'}}>Dot & Key (80)</Text>
        <Slideshow data={SlideShowBanner}/>


        <Flex width={{base : '95%', md : '90%', lg : '70%'}}  direction={{base : 'column-reverse', md : 'row'}} m='auto' mt={{base : '15px'}} padding='20px'>
            <Box  width={{base : '90%', md: '85%'}} margin='auto' textAlign='center' bg={{base : 'white', md : 'RGBA(0, 0, 0, 0.24)'}}>
                <Box w={{base : '100%', md: '80%'}} m='auto' fontSize={{base :'14px', md :'16px', lg : '25px'}} >
                <Text fontWeight='550' mt={{base : '10px'}} color='#2C5282'>“If You Believe In Your Product (And Yourself) Your Dream Will Come True”— Dot & Key Co-Founder, Anisha Agarwal Saraf</Text>
                </Box>

                <Box width={{base : '100%', md : '65%'}} m='auto'>
                <Text fontSize={{base : '12px', md : '14px', lg : '17px'}} mt={{base : '15px'}}>  
                     We are celebrating Anisha Agarwal Saraf and her journey. She reveals the inspiration behind the brand, her beauty inspiration,
                     her personal favourites from her line, and her advice for budding entrepreneurs.
                </Text>
                </Box> 
            </Box>
            
            <Box>
                <Image width={{base : '250px', md : '265px', lg : '320px'}} h='100%' m='auto' src="https://www.nykaa.com/media/categoryInfo/art_banner_image/IFYOUB_4.JPG" alt="Anisha Agrwal"/>
            </Box>
        </Flex>

        <Text textAlign='center' fontWeight='600' fontSize={{base : '16px', md : '18px' ,lg : '25px'}}>All Products</Text>

        <Text textAlign='center' fontSize='35px' fontWeight='700'>{isLoading && 'LOADING.............'}</Text>

        <SkinDotKeyProducts data={DotKeyProducts}/>
        </>
    )
}