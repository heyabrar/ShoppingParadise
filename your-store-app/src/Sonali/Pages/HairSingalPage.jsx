import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import SingleProductComponent from "../../Abrar/CustomComponents/SingleProductComponent";
import { FetchSingleHairData } from "../../Abrar/Fetch/Fetch";
import { HairSingalProductsDataSuccess } from "../../Redux/AppReducer/Action";

export default function HairSinglePage() {
    const params = useParams();
    const { HairSingleProduct, isLoading, isError } = useSelector((s) => {
        return {
            HairSingleProduct: s.MyReducer.HairSingleProduct,
            isLoading: s.MyReducer.isLoading,
            isError: s.MyReducer.isError
        }
    })
    console.log(HairSingleProduct)
    const dispatch = useDispatch();

    const handleSingleData = () => {
        FetchSingleHairData(params.id)
            .then((res) => {
                console.log(res.data)
                dispatch(HairSingalProductsDataSuccess(res.data))
            })
    }

    useEffect(() => {
        handleSingleData()
    }, [params.id])
    return (
        <>
            <SingleProductComponent data={HairSingleProduct} />
        </>
    )
}