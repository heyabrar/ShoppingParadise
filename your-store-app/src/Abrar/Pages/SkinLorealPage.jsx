import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchLorealData } from "../Fetch/Fetch";
import {Box, Image, Text} from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import ProductsListing from "../CustomComponents/ProductsListing";
import Pagination from "../CustomComponents/Pagination";
import { useSearchParams } from "react-router-dom";
import { getCurrentPage } from "./SkinDotKeyPage";
import { useState } from "react";
import { SkinLorealGetFailure, SkinLorealGetRequest, SkinLorealGetSuccess } from "../../Redux/AppReducer/Action";
import ProgressCompo from "../CustomComponents/Progress";
import Footer from "../Components/Footer";

export default function SkinLorealPage ( ) {
    const {LorealProducts,isLoading,isError} = useSelector((s)=>{
        return {
            LorealProducts : s.MyReducer.LorealProducts,
            isLoading : s.MyReducer.isLoading,
            isError : s.MyReducer.isError
        }
    })
    const Dispatch= useDispatch( );
    const [searchParams,SetSearchParams] = useSearchParams( );
    const initalPage  = getCurrentPage(searchParams.get('page'));
    const [page,setPage]  = useState(initalPage);
    const [totalPage,setTotalPage] = useState(0)

    const handleLorealData = ( ) =>{
      Dispatch(SkinLorealGetRequest( ))
        FetchLorealData(page,setTotalPage).then((res)=>{
            Dispatch(SkinLorealGetSuccess(res))
        })
        .catch((err)=> Dispatch(SkinLorealGetFailure(err)))
    }

    useEffect(( ) =>{
        handleLorealData( );
    }, [page])

    useEffect(( ) =>{
        SetSearchParams({page})
    }, [page])
    return (
        <>
        <Navbar/>
        <Box bg='RGBA(0, 0, 0, 0.06)' padding={{base :'10px', md :'20px', lg :'30px'}}>
        <Text textAlign='center' fontWeight='600' fontSize={{base : '16px', md : '18px' ,lg : '20px'}}>L'Oreal Paris Skin (82)</Text>
        <Box width={{base: '95%', md : '90%', lg :'80%'}} m='auto' mt={{base : '10px'}} > 
            <Image w='100%' src='https://images-static.nykaa.com/uploads/7904c5bd-23f1-4ca6-9040-1c8b3059de8b.jpg?tr=w-1200,cm-pad_resize'/>
        </Box>

        <Text textAlign='center' fontWeight='600' fontSize={{base : '16px', md : '18px' ,lg : '25px'}} mt={{base : '10px', md :'15px', lg :'20px'}}>All Products</Text>
        {isLoading && <ProgressCompo/>}
       <Box mt='2%'><ProductsListing data={LorealProducts} direct='/skinloreal'/></Box>

       <Pagination current={page} onChange={(page) => setPage(page)} totalPage={totalPage} limit={6}/>
        </Box>
        <Footer/>
        </>
    )
}