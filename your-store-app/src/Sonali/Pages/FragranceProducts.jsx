import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../Abrar/CustomComponents/Pagination";
import ProductsListing from "../../Abrar/CustomComponents/ProductsListing";
import { FetchFregrenceData } from "../../Abrar/Fetch/Fetch";
import { getCurrentPage } from "../../Abrar/Pages/SkinDotKeyPage";
import { FregranceProductsDataFailure, FregranceProductsDataRequest, FregranceProductsDataSuccess } from "../../Redux/AppReducer/Action";

export default function FregranceProducts (){
    const {GetFragranceProducts, isLoading, isError} = useSelector((s)=>{
        return{
            GetFragranceProducts:s.MyReducer.GetFragranceProducts,
            isLoading:s.MyReducer.isLoading,
            isError:s.MyReducer.isError
        }
    })
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const initialPage = getCurrentPage(searchParams.get("page")) 
    const [page, setPage] = useState(initialPage)
    const [totalPage, setTotalPage] = useState(0);
    const count = GetFragranceProducts.length;

    const handleGetData = ()=>{
        dispatch(FregranceProductsDataRequest())
        FetchFregrenceData(page,setTotalPage).then((res)=>{
            // console.log(res)
            dispatch(FregranceProductsDataSuccess(res))
        })
        .catch((err)=>{
            dispatch(FregranceProductsDataFailure(err))
        })
    }
    useEffect(()=>{
        handleGetData()
    },[page]);

    useEffect(()=>{
        setSearchParams({page})
    },[page])
    return(
        <>
        <Text textAlign='center' fontWeight='600' fontSize={{base : '16px', md : '18px' ,lg : '25px'}} mt='40px'>All Products ({count})</Text>
        <ProductsListing data={GetFragranceProducts} direct="/fragrance"/>
        <Pagination current={page} onChange={(page)=> setPage(page)} limit={6} totalPage={totalPage}/>
        </>
    )
}