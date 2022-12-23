import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Slideshow from "../CustomComponents/SlideShow";
import {useDispatch, useSelector} from 'react-redux'
import { FetchEsteeData } from "../Fetch/Fetch";
import { EsteeGetProductsFailure, EsteeGetProductsRequest, EsteeGetProductsSuccess } from "../../Redux/AppReducer/Action";
import { useEffect } from "react";
import ProductsListing from "../CustomComponents/ProductsListing";
import { useSearchParams } from "react-router-dom";
import { getCurrentPage } from "./SkinDotKeyPage";
import { useState } from "react";
import Pagination from "../CustomComponents/Pagination";
import ProgressCompo from "../CustomComponents/Progress";

const Images = [
    {
        id : 1,
        image : 'https://images-static.nykaa.com/uploads/3ee35b77-624e-449a-9092-caa1a6e91172.jpg?tr=w-1200,cm-pad_resize'
    },
    {
        id : 2,
        image : 'https://images-static.nykaa.com/uploads/caaa1ff9-9a39-474e-a741-8a308869b40e.jpg?tr=w-1200,cm-pad_resize'
    },
    {
        id : 3,
        image : 'https://images-static.nykaa.com/uploads/c7b0e22b-b0d8-478c-b0f4-5c7e613dec68.jpg?tr=w-1200,cm-pad_resize'
    }
]

export default function SkinEsteePage ( ) {
    const {EsteeProducts,isLoading,isError} = useSelector((s)=>{
        return {
            EsteeProducts : s.MyReducer.EsteeProducts,
            isLoading : s.MyReducer.isLoading,
            isError : s.MyReducer.isError
        }
    });
    const Dispatch = useDispatch( );
    const [searchParams,setSearchParams] = useSearchParams( );
    const initalPage = getCurrentPage(searchParams.get('page'))
    const [page,setPage] = useState(initalPage);
    const [totalPage,setTotalPage] = useState(0);
    const count = EsteeProducts.length;

    const handleData = ( ) =>{
        Dispatch(EsteeGetProductsRequest( ));
        FetchEsteeData(page,setTotalPage).then((res)=>{
            Dispatch(EsteeGetProductsSuccess(res))
        })
        .catch((err)=> Dispatch(EsteeGetProductsFailure(err)))
    }

    useEffect(( ) =>{
        handleData( );
    }, [page]);

    useEffect(( ) =>{
        setSearchParams({page})
    },[page])
    return (
        <>
        <Navbar/>
        <Box bg='RGBA(0, 0, 0, 0.06)'>
            <Text textAlign='center' fontWeight='600' fontSize={{base : '16px', md : '18px' ,lg : '24px'}}>Estee Lauder Collection</Text>
            <Slideshow data={Images}/>

            <Flex width={{base : '100%', md : '90%', lg : '70%'}}  direction={{base : 'column-reverse', md : 'row'}} m='auto' mt={{base : '15px'}} padding='20px'>
                    <Box  width={{base : '100%', md: '85%'}} margin='auto' textAlign='center' bg={{base : 'white', md : 'RGBA(0, 0, 0, 0.24)'}} padding='20px'>
                        <Box w={{base : '100%', md: '80%'}} m='auto' fontSize={{base :'14px', md :'16px', lg : '25px'}} >
                                <Text fontWeight='550' mt={{base : '10px'}} color='#2C5282'>We Tried The Estee Lauder Advanced Night Repair For 15 Days — And These Are Our Honest Thoughts</Text>
                        </Box>

                        <Box width={{base : '100%', md : '65%'}} m='auto'>
                                <Text fontSize={{base : '12px', md : '14px', lg : '17px'}} mt={{base : '15px'}}>  
                                        In order to understand what this wonder product is all about, our BB team decided to go ahead and try the
                                        Estee Lauder ANR for 15 days straight as part of their night-time regimen
                                </Text>
                        </Box> 
                    </Box>
                    
                    <Box>
                            <Image width={{base : '250px', md : '265px', lg : '320px'}} h='100%' m='auto' src="https://www.nykaa.com/media/categoryInfo/art_banner_image/WE_TRIED_THE_ESTEE_LAUDER_ADVANCED_NIGHT_REPAIR_FOR_15_DAYS_AND_THESE_ARE_OUR_HONEST_THOUGHTS_CB.jpg" alt="EsteeLAuder"/>
                    </Box>
            </Flex>

            <Text textAlign='center' fontWeight='600' fontSize={{base : '16px', md : '18px' ,lg : '25px'}}>All Products ({count})</Text>
            {isLoading && <ProgressCompo/>}
            <Text>{isError && <ProgressCompo/>} </Text>
            <Text textAlign='center'>{isError && 'Something Went Wrong !!!!!'} </Text>
            <Box mt='2%'>
                    <ProductsListing data={EsteeProducts} direct='/skinEsteeLauder'/>
            </Box>

            <Pagination current={page}  onChange={(page)=> setPage(page)} totalPage={totalPage} limit={6}/>
        </Box>
        </>
    )
}