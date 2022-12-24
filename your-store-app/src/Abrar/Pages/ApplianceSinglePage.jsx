import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { ApplianceSingleProductsFailure, ApplianceSingleProductsRequest, ApplianceSingleProductsSuccess, DotKeySingleGetFailure, DotKeySingleGetRequest, DotKeySingleGetSuccess } from "../../Redux/AppReducer/Action";
import SingleProductComponent from "../CustomComponents/SingleProductComponent";
import SpinnerCompo from "../CustomComponents/Spinner";
import { FetchSingleApplianceData} from "../Fetch/Fetch";

export default function ApplianceSinglePage ( ) {
    const Params = useParams( );
    const {ApplianceSingleProducts,isLoading,isError}  = useSelector((s)=>{
        return {
            ApplianceSingleProducts : s.MyReducer.ApplianceSingleProducts,
            isLoading : s.MyReducer.isLoading,
            isError : s.MyReducer.isError
        }
    });

    const Dispatch = useDispatch( );
    const handleSingleData = ( ) =>{
        Dispatch(ApplianceSingleProductsRequest( ));
        FetchSingleApplianceData(Params.id).then((res)=>{
           Dispatch(ApplianceSingleProductsSuccess(res.data));
        })
        .catch((err)=> Dispatch(ApplianceSingleProductsFailure(err)))
    }

    useEffect(( ) =>{
        handleSingleData( );
    }, [Params.id])

    return (
        <>
        <Box bg='RGBA(0, 0, 0, 0.06)'>
                <SingleProductComponent data={ApplianceSingleProducts} isLoading={isLoading}/>
        </Box>
        </>
    )
}