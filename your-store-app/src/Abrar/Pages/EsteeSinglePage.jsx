import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { EsteeGetSingleFailure, EsteeGetSingleRequest, EsteeGetSingleSuccess } from "../../Redux/AppReducer/Action";
import SingleProductComponent from "../CustomComponents/SingleProductComponent";
import { FetchEsteeSingleData } from "../Fetch/Fetch";

export default function EsteeSinglePage (  ){
    const Params = useParams( );
    const {EsteeSingleProduct,isLoading,isError} = useSelector((s)=>{
        return {
            EsteeSingleProduct : s.MyReducer.EsteeSingleProduct,
            isLoading : s.MyReducer.isLoading,
            isError : s.MyReducer.isError
        }
    });
    const Dispatch = useDispatch( ) ;

    const handleSingleData = ( ) =>{
        Dispatch(EsteeGetSingleRequest( ))
        FetchEsteeSingleData(Params.id).then((res)=>{
            Dispatch(EsteeGetSingleSuccess(res.data))
        })
        .catch((err)=> Dispatch(EsteeGetSingleFailure(err)))
    }

    useEffect(( ) =>{
    handleSingleData( );
    }, [Params.id])
    return (
        <>
        <SingleProductComponent data={EsteeSingleProduct} isLoading={isLoading} isError={isError}/>
        </>
    )
}