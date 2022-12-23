import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {SkinLorealGetSingleDataFailure, SkinLorealGetSingleDataRequest, SkinLorealGetSingleDataSuccess } from "../../Redux/AppReducer/Action";
import SingleProductComponent from "../CustomComponents/SingleProductComponent";
import { FetchSingleLorealData } from "../Fetch/Fetch";

export default function LorealSinglePage ( ) {
    const Params = useParams( );
    const {LorealSingleProduct,isLoading,isError} = useSelector((s)=>{
        return {
            LorealSingleProduct : s.MyReducer.LorealSingleProduct,
            isLoading : s.MyReducer.isLoading,
            isError : s.MyReducer.isError
        }
    })

    const Dispatch = useDispatch( );

    const handleSingleData = ( ) =>{
        Dispatch(SkinLorealGetSingleDataRequest())
        FetchSingleLorealData(Params.id).then((res)=>{
            Dispatch(SkinLorealGetSingleDataSuccess(res.data))
        })
        .catch((err)=> Dispatch(SkinLorealGetSingleDataFailure(err)))
    }

    useEffect(( ) =>{
        handleSingleData( );
    }, [Params.id])

    return (
        <>
        <Box bg='RGBA(0, 0, 0, 0.06)'>
                <SingleProductComponent data={LorealSingleProduct} isLoading={isLoading} />
        </Box>

        </>
    )
}