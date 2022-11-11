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