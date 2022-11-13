import { Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { ApplianceProductsFailure, ApplianceProductsRequest, ApplianceProductsSuccess } from '../../Redux/AppReducer/Action';
import Pagination from '../CustomComponents/Pagination';
import ProductsListing from '../CustomComponents/ProductsListing';
import ProgressCompo from '../CustomComponents/Progress';
import { FetchApplianceData } from '../Fetch/Fetch';
import { getCurrentPage } from '../Pages/SkinDotKeyPage';
export default function ApplianceProducts ( ) {

    const {ApplianceAllProducts,isLoading,isError} = useSelector((s)=>{
        return {
            ApplianceAllProducts : s.MyReducer.ApplianceAllProducts,
            isLoading : s.MyReducer.isLoading,
            isError : s.MyReducer.isError
        }
    })
    const Dispatch = useDispatch( ) ;
    const [searchParams,SetSearchParams] = useSearchParams( );
    const initalPage  = getCurrentPage(searchParams.get('page'));
    const [page,setPage]  = useState(initalPage);
    const [totalPage,setTotalPage] = useState(0);
    const count = ApplianceAllProducts.length;

    const handleData = ( ) =>  {
        Dispatch(ApplianceProductsRequest( ))
        FetchApplianceData(page,setTotalPage).then((res)=>{
            Dispatch(ApplianceProductsSuccess(res))
        })
        .catch((err)=> {
            Dispatch(ApplianceProductsFailure(err))
        })
    }

    useEffect(( ) =>{
        handleData( );
    }, [page])

    useEffect(( ) =>{
        SetSearchParams({page})
    },[page])
    return (
        <>
          <Text textAlign='center' fontWeight='600' fontSize={{base : '16px', md : '18px' ,lg : '25px'}} mt={{base : '10px', md :'15px', lg :'20px'}}>All Products ({count})</Text>
          {isLoading && <ProgressCompo/>}
       <Box mt='2%'><ProductsListing data={ApplianceAllProducts} direct='/appliance'/></Box>

       <Pagination current={page} onChange={(page)=> setPage(page)} limit={6} totalPage={totalPage}/>
        </>
    )
}