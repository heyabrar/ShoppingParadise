import * as types from './ActionTypes'
const initalData = {
    DotKeyProducts : [],
    isLoading : false,
    isError : false
};

export default function SkinDotKeyReducer (state=initalData,action) {
    const {type,payload} = action;

    switch(type){
        case types.GET_SKIN_PAGE_DOTKEY_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_SKIN_PAGE_DOTKEY_SUCCESS : {
            return {
                ...state,
                DotKeyProducts : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_SKIN_PAGE_DOTKEY_FAILURE : {
            return {
                ...state,
                DotKeyProducts : [ ],
                isLoading : false,
                isError : true
            }
        }
        default :
        return state 
    }

    
    
}