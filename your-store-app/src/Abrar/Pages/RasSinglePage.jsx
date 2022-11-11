import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RasGetProductsFailure, RasGetSingleProductRequest, RasGetSingleProductSuccess } from "../../Redux/AppReducer/Action";
import Navbar from "../Components/Navbar";
import SingleProductComponent from "../CustomComponents/SingleProductComponent";
import { FetchRasSingleData } from "../Fetch/Fetch";

export default function RasSinglePage ( ) {
    const {RasSingleProduct,isLoading,isError} = useSelector((r)=>{
        return {
            RasSingleProduct : r.MyReducer.RasSingleProduct,
            isLoading : r.MyReducer.isLoading,
            isError : r.MyReducer.isError
        }
    });
    const Dispatch = useDispatch( );
    const Params = useParams( );

    const handleSingleData = ( ) =>{
        Dispatch(RasGetSingleProductRequest( ));
        FetchRasSingleData(Params.id).then((res)=>{
            Dispatch(RasGetSingleProductSuccess(res.data))
        })
        .catch((err)=> Dispatch(RasGetProductsFailure(err)))
    };

    useEffect(( ) =>{
        handleSingleData( );
    }, [Params.id])

    return (
        <>
        <Box bg='RGBA(0, 0, 0, 0.06)'>
        <SingleProductComponent data={RasSingleProduct} isLoading={isLoading} isError={isError}/>
        </Box>
        

        </>
    )
}