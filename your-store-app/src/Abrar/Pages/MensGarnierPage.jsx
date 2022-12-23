import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { MensGarnierPageFailure, MensGarnierPageRequest, MensGarnierPageSuccess } from "../../Redux/AppReducer/Action";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Pagination from "../CustomComponents/Pagination";
import ProductsListing from "../CustomComponents/ProductsListing";
import ProgressCompo from "../CustomComponents/Progress";
import Slideshow from "../CustomComponents/SlideShow";
import { FetchMensGarnierData } from "../Fetch/Fetch";
import { getCurrentPage } from "./SkinDotKeyPage";
const slideShow = [
    {
        id : 1,
        image : 'https://images-static.nykaa.com/uploads/0db47f2c-ee9a-4f5d-b85c-d66ef91ef5a9.jpg?tr=w-1200,cm-pad_resize',
    },
    {
        id : 2,
        image : 'https://images-static.nykaa.com/uploads/b302c84e-9956-4ea8-9b2e-87777cd04fd3.jpg?tr=w-1200,cm-pad_resize',
    },
    {
        id : 3,
        image : 'https://images-static.nykaa.com/uploads/240fff82-5fe7-41b6-a9a3-0138dff1d15d.jpg?tr=w-1200,cm-pad_resize',
    },
    {
        id : 4,
        image : 'https://images-static.nykaa.com/uploads/bf37412f-a6d1-46bc-a334-9eb78e33e010.jpg?tr=w-1200,cm-pad_resize',
    }
]
export default function MensGarnierPage ( ) {
    const {MensGarnierProducts,isLoading,isError} = useSelector((s)=>{
        return {
            MensGarnierProducts : s.MyReducer.MensGarnierProducts,
            isLoading : s.MyReducer.isLoading,
            isError : s.MyReducer.isError
        }
    });
    const Dispatch = useDispatch( );
    const [searchParams,setSearchParams] = useSearchParams( );
    const initalPage = getCurrentPage(searchParams.get('page'));
    const [page,setPage] = useState(initalPage);
    const [totalPage,setTotalPage] = useState(0);
    const count = MensGarnierProducts.length;

    const handleGetData = ( ) =>{
        Dispatch(MensGarnierPageRequest( ))
        FetchMensGarnierData(page,setTotalPage).then((res)=>{
            Dispatch(MensGarnierPageSuccess(res))
        })
        .catch((err)=> Dispatch(MensGarnierPageFailure(err)))
    }

    useEffect(( ) =>{
        handleGetData( );
    },[page])

    useEffect(( ) =>{
        setSearchParams({page})
    },[page])
    return (
        <>
            <Navbar/>
            <Box bg='RGBA(0, 0, 0, 0.06)'>
                    <Text textAlign='center' fontWeight='600' fontSize={{base : '16px', md : '18px' ,lg : '20px'}}>Garnier</Text>
                    <Slideshow data={slideShow}/>
                    <Flex width={{base : '95%', md : '90%', lg : '70%'}} direction={{base : 'column-reverse', md : 'row'}} m='auto' mt={{base : '15px'}} padding='30px'>
                            <Box  width={{base : '90%', md: '85%'}} margin='auto' textAlign='center' bg={{base : 'white', md : 'RGBA(0, 0, 0, 0.24)'}} padding='32px'>
                                    <Box w={{base : '100%', md: '80%'}} m='auto' fontSize={{base :'14px', md :'16px', lg : '25px'}} >
                                            <Text fontWeight='550' mt={{base : '10px'}} color='#2C5282'>This Just In: Garnier Skin Naturals Serum Masks</Text>
                                    </Box>

                                    <Box width={{base : '100%', md : '65%'}} m='auto'>
                                            <Text fontSize={{base : '12px', md : '14px', lg : '17px'}} mt={{base : '15px'}}>  
                                            Garnier Skin Naturals dropped the newest generation of tissue masks on our work desks and they were our ticket to heaven amidst chasing deadlines on hectic workdays.
                                            </Text>
                                    </Box> 
                            </Box>
            
                            <Box>
                                <Image width={{base : '200px', md : '265px', lg : '320px'}} h='100%' m='auto' src="https://www.nykaa.com/media/categoryInfo/art_banner_image/This-Just-In-Garnier-Skin-Naturals-Serum-Masks.jpg" alt="Garnier"/>
                            </Box>
                </Flex>

                {isLoading && <ProgressCompo/>}
                <Text>{isLoading && <ProgressCompo/>}</Text>
                <Text textAlign='center'>{isError && 'Something Went Wrong !!!'}</Text>

                <Text textAlign='center' fontWeight='600' fontSize={{base : '16px', md : '18px' ,lg : '25px'}}>All Products ({count})</Text>
                <ProductsListing data={MensGarnierProducts} direct='/mensgarnier'/>
                <Pagination current={page} onChange={(page)=>setPage(page)} limit={6} totalPage={totalPage}/>

                <Footer/>
            </Box>
        </>
    )
}