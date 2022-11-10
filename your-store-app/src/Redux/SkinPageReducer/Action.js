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