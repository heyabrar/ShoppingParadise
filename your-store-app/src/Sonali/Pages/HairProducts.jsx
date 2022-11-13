import Navbar from "../../Abrar/Components/Navbar"
import ProgressCompo from "../../Abrar/CustomComponents/Progress"
import {useDispatch, useSelector} from "react-redux";
import { FetchHairData } from "../../Abrar/Fetch/Fetch";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCurrentPage } from "../../Abrar/Pages/SkinDotKeyPage";
import { HairProductsDataFailure, HairProductsDataRequest, HairProductsDataSuccess } from "../../Redux/AppReducer/Action";
import ProductsListing from "../../Abrar/CustomComponents/ProductsListing";
import Pagination from "../../Abrar/CustomComponents/Pagination";

export default function HairProducts (){
    const {HairProducts, isLoading, isError} = useSelector((s)=>{
        return{
            HairProducts:s.MyReducer.HairProducts,
            isLoading:s.MyReducer.isLoading,
            isError:s.MyReducer.isError
        }
    })
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const initialPage = getCurrentPage(searchParams.get("page")) 
    const [page, setPage] = useState(initialPage)
    const [totalPage, setTotalPage] = useState(0)

    const handleGetData = ()=>{
        dispatch(HairProductsDataRequest())
        FetchHairData(page,setTotalPage).then((res)=>{
            // console.log(res)
            dispatch(HairProductsDataSuccess(res))
        })
        .catch((err)=>{
            dispatch(HairProductsDataFailure(err))
        })
    }
    useEffect(()=>{
        handleGetData()
    },[page]);

    useEffect(()=>{
        setSearchParams({page})
    },[page])
    return (
        <>
   
   <Navbar/>
   <ProductsListing data={HairProducts} direct="/hairproducts"/>
   <Pagination current={page} onChange={(page)=>setPage(page)} limit={6} totalPage={totalPage}/>
     
        
        </>
    )
}