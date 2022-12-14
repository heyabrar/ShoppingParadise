import * as types from './ActionTypes'

export const SkinDotKeyGetRequest = ( ) =>{
    return {
        type : types.GET_SKIN_PAGE_DOTKEY_REQUEST
    };
};

export const SkinDotKeyGetSuccess= (payload) =>{
    return {
        type : types.GET_SKIN_PAGE_DOTKEY_SUCCESS,
        payload,
    };
};

export const SkinDotKeyGetFailure = ( ) =>{
    return {
        type : types.GET_SKIN_PAGE_DOTKEY_FAILURE
    };
};

export const DotKeySingleGetRequest = ( ) =>{
    return{
        type : types.GET_DOTKEY_SINGLE_REQUEST
    }
}

export const DotKeySingleGetSuccess = (payload) =>{
    return{
        type : types.GET_DOTKEY_SINGLE_SUCCESS,
        payload,
    }
}

export const DotKeySingleGetFailure = ( ) =>{
    return{
        type : types.GET_DOTKEY_SINGLE_REQUEST
    }
}


export const SkinLorealGetRequest = ( ) =>{
    return {
        type : types.SKIN_LOREAL_PAGE_GET_REQUEST,
    }
}

export const SkinLorealGetSuccess = (payload) =>{
    return {
        type : types.SKIN_LOREAL_PAGE_GET_SUCCESS,
        payload,
    }
}

export const SkinLorealGetFailure = ( ) =>{
    return {
        type : types.SKIN_LOREAL_PAGE_GET_FAILURE
    }
}

export const SkinLorealGetSingleDataRequest= () =>{
    return {
        type : types.LOREAL_GET_SINGLE_DATA_REQUEST
    }
}

export const SkinLorealGetSingleDataSuccess= (payload) =>{
    return {
        type : types.LOREAL_GET_SINGLE_DATA_SUCCESS,
        payload,
    }
}

export const SkinLorealGetSingleDataFailure= ( ) =>{
    return {
        type : types.LOREAL_GET_SINGLE_DATA_FAILURE,
    }
}

export const EsteeGetProductsRequest = ( ) =>{
    return {
        type : types.GET_ESTEE_PAGE_DATA_REQUEST
    }
}

export const EsteeGetProductsSuccess= (payload) =>{
    return {
        type : types.GET_ESTEE_PAGE_DATA_SUCCESS,
        payload
    }
}

export const EsteeGetProductsFailure = ( ) =>{
    return {
        type : types.GET_ESTEE_PAGE_DATA_FAILURE
    }
}

export const EsteeGetSingleRequest = ( ) =>{
    return {
        type : types.GET_ESTEE_SINGLE_REQUEST
    }
}

export const EsteeGetSingleSuccess = (payload) =>{
    return {
        type : types.GET_ESTEE_SINGLE_SUCCESS,
        payload,
    }
}

export const EsteeGetSingleFailure= ( ) =>{
    return {
        type : types.GET_ESTEE_SINGLE_FAILURE
    }
}

export const RasGetProductsRequest = ( ) =>{
    return {
        type : types.GET_RAS_PAGE_DATA_REQUEST
    }
}

export const RasGetProductsSuccess = (payload) =>{
    return {
        type : types.GET_RAS_PAGE_DATA_SUCCESS,
        payload,
    }
}


export const RasGetProductsFailure = ( ) =>{
    return {
        type : types.GET_RAS_PAGE_DATA_FAILURE
    }
}

export const RasGetSingleProductRequest = ( ) =>{
    return {
        type : types.GET_RAS_SINGLE_REQUEST
    }
}

export const RasGetSingleProductSuccess = (payload) =>{
    return {
        type : types.GET_RAS_SINGLE_SUCCESS,
        payload
    }
}

export const RasGetSingleProductFailure = ( ) =>{
    return {
        type : types.GET_RAS_SINGLE_FAILURE
    }
}


export const HairProductsDataRequest = () =>{
    return{
        type: types.GET_HAIR_DATA_REQUEST
    }
}

export const HairProductsDataSuccess = (payload) =>{
    return{
        type: types.GET_HAIR_DATA_SUCCESS,
        payload
    }
}

export const HairProductsDataFailure = () =>{
    return{
        type: types.GET_HAIR_DATA_FAILURE
    }
}


export const MensGarnierPageRequest = ( ) =>{
    return {
        type : types.GET_MENS_GARNIER_PAGE_REQUEST
    }
}

export const MensGarnierPageSuccess = (payload) =>{
    return {
        type : types.GET_MENS_GARNIER_PAGE_SUCCESS,
        payload
    }
}

export const MensGarnierPageFailure = ( ) =>{
    return {
        type : types.GET_MENS_GARNIER_PAGE_FAILURE
    }
}


export const HairSingalProductsDataRequest = () =>{
    return{
        type: types.GET_SINGAL_HAIR_DATA_REQUEST
    }
}

export const HairSingalProductsDataSuccess = (payload) =>{
    return{
        type: types.GET_SINGAL_HAIR_DATA_SUCCESS,
        payload
    }
}

export const HairSingalProductsDataFailure = () =>{
    return{
        type: types.GET_SINGAL_HAIR_DATA_FAILURE
    }
}


export const MensGarnierSingleRequest = ( ) =>{
    return {
        type : types.GET_MENS_GARNIER_SINGLE_PAGE_REQUEST
    }
}

export const MensGarnierSingleSuccess = (payload) =>{
    return {
        type : types.GET_MENS_GARNIER_SINGLE_PAGE_SUCCESS,
        payload
    }
}

export const MensGarnierSingleFailure = ( ) =>{
    return {
        type : types.GET_MENS_GARNIER_SINGLE_PAGE_FAILURE
    }
}

export const AddToCartRequest = ( ) =>{
    return {
        type : types.ADD_TO_CART_REQUEST
    }
}

export const AddToCartSuccess= (payload) =>{
    return {
        type : types.ADD_TO_CART_SUCCESS,
        payload
    }
}

export const AddToCartFailure = ( ) =>{
    return {
        type : types.ADD_TO_CART_FAILURE
    }
}


export const FregranceProductsDataRequest = () =>{
    return{
        type: types.GET_FRAGANCE_DATA_REQUEST
    }
}

export const FregranceProductsDataSuccess = (payload) =>{
    return{
        type: types.GET_FRAGANCE_DATA_SUCCESS,
        payload
    }
}

export const FregranceProductsDataFailure = () =>{
    return{
        type: types.GET_FRAGANCE_DATA_FAILURE
    }
}

export const FregranceSingalProductsDataRequest = () =>{
    return{
        type: types.GET_SINGLE_FRAGRANCE_DATA_REQUEST
    }
}

export const FregranceSingalProductsDataSuccess = (payload) =>{
    return{
        type: types.GET_SINGLE_FRAGRANCE_DATA_SUCCESS,
        payload
    }
}

export const FregranceSingalProductsDataFailure = () =>{
    return{
        type: types.GET_SINGLE_FRAGRANCE_DATA_FAILURE
    }
}

export const ApplianceProductsRequest = ( ) =>{
    return {
        type : types.GET_APPLIANCE_DATA_REQUEST
    }
}

export const ApplianceProductsSuccess = (payload) =>{
    return {
        type : types.GET_APPLIANCE_DATA_SUCCESS,
        payload 
    }
}

export const ApplianceProductsFailure = ( ) =>{
    return {
        type : types.GET_APPLIANCE_DATA_FAILURE
    }
}

export const ApplianceSingleProductsRequest = ( ) =>{
    return {
        type : types.GET_SINGLE_APPLIANCE_DATA_REQUEST
    }
}

export const ApplianceSingleProductsSuccess = (payload) =>{
    return {
        type : types.GET_SINGLE_APPLIANCE_DATA_SUCCESS,
        payload 
    }
}

export const ApplianceSingleProductsFailure = ( ) =>{
    return {
        type : types.GET_SINGLE_APPLIANCE_DATA_FAILURE
    }
}


export const GetCheckoutRequest = ( ) =>{
    return {
        type : types.GET_CHECKOUT_REQUEST
    }
}

export const GetCheckoutSuccess = (payload) =>{
    return {
        type : types.GET_CHECKOUT_SUCCESS,
        payload 
    }
}

export const GetCheckoutFailure = ( ) =>{
    return {
        type : types.GET_CHECKOUT_FAILURE
    }
}