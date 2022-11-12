import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { MensGarnierSingleFailure, MensGarnierSingleRequest, MensGarnierSingleSuccess } from "../../Redux/AppReducer/Action";
import Navbar from "../Components/Navbar";
import { FetchMensGarnierSingleData } from "../Fetch/Fetch";
import SingleProductComponent from '../CustomComponents/SingleProductComponent'
import Footer from "../Components/Footer";

export default function MensGarnierSinglePage ( ) {
    const Parmas = useParams( );
    const {MensGarnierSingleProduct, isLoading,isError} = useSelector((store)=>{
        return {
            MensGarnierSingleProduct : store.MyReducer.MensGarnierSingleProduct,
            isLoading : store.MyReducer.isLoading,
            isError : store.MyReducer.isError
        }
    })
    const Dispatch = useDispatch( );

    const handleSingleData = ( ) =>{
        Dispatch(MensGarnierSingleRequest( ))
        FetchMensGarnierSingleData(Parmas.id).then((res)=>{
            Dispatch(MensGarnierSingleSuccess(res.data))
        })
        .catch((err=> Dispatch(MensGarnierSingleFailure(err))))
    }

    useEffect(( ) =>{
        handleSingleData( );
    }, [Parmas.id])
    return (
        <> 
        <Box bg='RGBA(0, 0, 0, 0.06)'>
            <SingleProductComponent data={MensGarnierSingleProduct} isLoading={isLoading} isError={isError}/>
        </Box>
        </>
    )
}