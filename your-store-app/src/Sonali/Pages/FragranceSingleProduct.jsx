import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleProductComponent from "../../Abrar/CustomComponents/SingleProductComponent";
import { FetchSingleFregranceData } from "../../Abrar/Fetch/Fetch";
import { FregranceProductsDataSuccess, FregranceSingalProductsDataSuccess } from "../../Redux/AppReducer/Action";

export default function FragranceSingleProduct (){
    const params = useParams();
    const {GetFsingle, isLoading, isError} = useSelector((s)=>{
        return{
            GetFsingle:s.MyReducer.GetFsingle,
            isLoading:s.MyReducer.isLoading,
            isError:s.MyReducer.isError
        }
    })
    console.log(FragranceSingleProduct)
    const dispatch = useDispatch();

    const handleSingleData = () =>{
        FetchSingleFregranceData(params.id)
        .then((res) => {
            console.log(res.data)
            dispatch(FregranceSingalProductsDataSuccess(res.data))
        })
    }

    useEffect(()=>{
        handleSingleData()
    },[params.id])
    return(<>

<SingleProductComponent data={GetFsingle} />
    </>)
}