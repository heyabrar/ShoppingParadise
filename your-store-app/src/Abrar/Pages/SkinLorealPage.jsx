import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SkinDotKeyGetSuccess } from "../../Redux/SkinPageReducer/Action";
import { FetchLorealData } from "../Fetch/Fetch";

export default function SkinLorealPage ( ) {
    // const {DotKeyProducts,isLoading,isError}  = useSelector((store)=> {
    //     return {
    //         DotKeyProducts : store.SkinDotKeyReducer.DotKeyProducts,
    //         isLoading : store.SkinDotKeyReducer.isLoading,
    //         isError : store.SkinDotKeyReducer.isError
    //     }
    // });
    // const Dispatch = useDispatch( );

    // const handleFetchData = ( ) =>{
    //     FetchLorealData( ).then((res)=>{
    //         Dispatch(SkinDotKeyGetSuccess(res.data))
    //     })
    // }

    // useEffect(( ) =>{
    //     handleFetchData( );
    // }, [ ])
    // console.log(DotKeyProducts)

    return (
        <>
        </>
    )
}