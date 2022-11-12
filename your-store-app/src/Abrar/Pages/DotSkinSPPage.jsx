import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { DotKeySingleGetFailure, DotKeySingleGetRequest, DotKeySingleGetSuccess } from "../../Redux/AppReducer/Action";
import SingleProductComponent from "../CustomComponents/SingleProductComponent";
import SpinnerCompo from "../CustomComponents/Spinner";
import { FetchSingleDotKeyPage } from "../Fetch/Fetch";

export default function DotKeySingleProductPage ( ) {
    const Params = useParams( );
    const {DotKeySingleProduct,isLoading,isError}  = useSelector((s)=>{
        return {
            DotKeySingleProduct : s.MyReducer.DotKeySingleProduct,
            isLoading : s.MyReducer.isLoading,
            isError : s.MyReducer.isError
        }
    });

    const Dispatch = useDispatch( );
    const handleSingleData = ( ) =>{
        Dispatch(DotKeySingleGetRequest( ));
        FetchSingleDotKeyPage(Params.id).then((res)=>{
           Dispatch(DotKeySingleGetSuccess(res.data));
        })
        .catch((err)=> Dispatch(DotKeySingleGetFailure(err)))
    }

    useEffect(( ) =>{
        handleSingleData( );
    }, [Params.id])

    return (
        <>
        <Box bg='RGBA(0, 0, 0, 0.06)'>
        <SingleProductComponent data={DotKeySingleProduct} isLoading={isLoading}/>
        </Box>
        </>
    )
}