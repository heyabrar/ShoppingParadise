import { Box, Image, Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCartFailure, AddToCartRequest, AddToCartSuccess } from "../../Redux/AppReducer/Action";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import CartListing from "../CustomComponents/CartListing";
import ProductsListing from "../CustomComponents/ProductsListing";
import ProgressCompo from "../CustomComponents/Progress";
import { DeleteFromCart, FetchCartData } from "../Fetch/Fetch";

export default function CartPage ( ) {
    const {CartData,isLoading,isError} = useSelector((store)=>{
        return {
            CartData : store.MyReducer.CartData,
            isLoading : store.MyReducer.isLoading,
            isError : store.MyReducer.isError
        }
    })
    const count = CartData.length;
    const Toast = useToast( );

    const Dispatch = useDispatch( );

    const handleCartData = ( ) =>{
        Dispatch(AddToCartRequest( ))
        FetchCartData().then((res)=>{
            Dispatch(AddToCartSuccess(res.data))
        })
        .catch((err)=> Dispatch(AddToCartFailure(err)))
    }

    useEffect(( )=>{
        handleCartData( );
    }, [ ]);

    const handleDeleteFromCart = (id) =>{
        DeleteFromCart(id).then((res)=>{
            handleCartData( );
            Toast({position : 'bottom', render: ( )  => (<Box p={5} bg='#fc2779' color='white' borderRadius='10px' fontWeight='600'>Deleted From Cart</Box>)})
        })
    }
    return (
        <>
        <Navbar/>
        <Text textAlign='center' fontWeight='600' fontSize={{base : '16px', md : '18px' ,lg : '20px'}}>All Products {count}</Text>
        {isLoading && <ProgressCompo/>}
        <CartListing data={CartData} handleDeleteFromCart={handleDeleteFromCart}/>
        <Footer/>
        </>
    )
}