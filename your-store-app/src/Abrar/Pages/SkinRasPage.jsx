import { Box, Text, Toast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Slideshow from "../CustomComponents/SlideShow";
import ProductsListing from "../CustomComponents/ProductsListing";
import { FetchRasPageData } from "../Fetch/Fetch";
import { RasGetProductsFailure, RasGetProductsRequest, RasGetProductsSuccess } from "../../Redux/AppReducer/Action";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCurrentPage } from "./SkinDotKeyPage";
import Pagination from "../CustomComponents/Pagination";
import ProgressCompo from "../CustomComponents/Progress";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Images = [
    {
        id : 1,
        image : 'https://images-static.nykaa.com/uploads/bb42be57-c3bf-496e-8f05-41d90699c3ad.jpg?tr=w-1200,cm-pad_resize'
    },

    {
        id : 2,
        image : 'https://images-static.nykaa.com/uploads/49699bf2-4247-4d89-be7d-27ea16fd5b43.jpg?tr=w-1200,cm-pad_resize'
    },

    {
        id : 3,
        image : 'https://images-static.nykaa.com/uploads/0b7e2e2f-8f5f-437c-8977-cfa775548efd.jpg?tr=w-1200,cm-pad_resize'
    }
]

export default function SkinRasPage ( ) {
    const {RasProducts,isLoading,isError} = useSelector((e)=>{
        return {
            RasProducts : e.MyReducer.RasProducts,
            isLoading : e.MyReducer.isLoading,
            isError : e.MyReducer.isError
        }
    })

    const Dispatch = useDispatch( );
    const [searchParams,setSearchParams] = useSearchParams( );
    const initalPage = getCurrentPage(searchParams.get('page'));
    const [page,setPage] = useState(initalPage);
    const [totalPage,setTotalPage] = useState(0);

    const handleFetchData = ( ) =>{
        Dispatch(RasGetProductsRequest( ))
        FetchRasPageData(page,setTotalPage).then((res)=>{
            Dispatch(RasGetProductsSuccess(res))
        })
        .catch((err)=> Dispatch(RasGetProductsFailure(err)))
    }

    useEffect(( ) =>{
        handleFetchData( );
    }, [page])

    useEffect(( ) =>{
        setSearchParams({page})
    }, [page])

    return (
        <>
        <Navbar/>
        <Box bg='RGBA(0, 0, 0, 0.06)'>
        <Text textAlign='center' fontWeight='600' fontSize={{base : '16px', md : '18px' ,lg : '20px'}} >Dot & Key (80)</Text>

        <Slideshow data={Images}/>

        <Text textAlign='center' fontWeight='600' fontSize={{base : '16px', md : '18px' ,lg : '25px'}} mt='20px'>All Products</Text>

        <Text textAlign='center' fontSize='35px' fontWeight='700'>{isLoading && <ProgressCompo/>}</Text>
        <Text textAlign='center' fontSize='35px' fontWeight='700'>{isError && <ProgressCompo/>}</Text>
        <Text textAlign='center' fontSize='35px' fontWeight='700'>{isError && 'Something Went Wrong'}</Text>
        <Box mt='2%'>
        <ProductsListing data={RasProducts} direct='/skinras'/>
        </Box>

        <Pagination current={page} onChange={(page)=>setPage(page)} totalPage={totalPage} limit={5}/>
        </Box>

        <Footer/>
        </>
    )
}