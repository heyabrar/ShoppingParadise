import * as types from './ActionTypes'
const initalData = {
    DotKeyProducts : [],
    DotKeySingleProduct : [ ],
    HairProducts:[],
    LorealProducts : [ ],
    LorealSingleProduct : [ ],
    HairSingleProduct:[],
    EsteeProducts : [ ],
    EsteeSingleProduct : [ ],
    RasProducts : [ ],
    RasSingleProduct : [ ],
    MensGarnierProducts : [ ],
    MensGarnierSingleProduct : [ ],
    CartData : [ ],
    isLoading : false,
    isError : false,
    GetFragranceProducts:[],
    GetFsingle:[],
    ApplianceAllProducts : [ ],
    ApplianceSingleProducts : [ ],
    Checkout : [ ],
};

export default function MyReducer(state = initalData, action) {
    const { type, payload } = action;

    switch (type) {
        case types.GET_SKIN_PAGE_DOTKEY_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case types.GET_SKIN_PAGE_DOTKEY_SUCCESS: {
            return {
                ...state,
                DotKeyProducts: payload,
                isLoading: false,
                isError: false
            }
        }

        case types.GET_SKIN_PAGE_DOTKEY_FAILURE: {
            return {
                ...state,
                DotKeyProducts: [],
                isLoading: false,
                isError: true
            }
        }

        case types.GET_DOTKEY_SINGLE_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case types.GET_DOTKEY_SINGLE_SUCCESS: {
            return {
                ...state,
                DotKeySingleProduct: payload,
                isLoading: false,
                isError: false
            }
        }

        case types.GET_DOTKEY_SINGLE_FAILURE: {
            return {
                ...state,
                DotKeySingleProduct: [],
                isLoading: false,
                isError: true
            }
        }

        case types.SKIN_LOREAL_PAGE_GET_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case types.SKIN_LOREAL_PAGE_GET_SUCCESS: {
            return {
                ...state,
                LorealProducts: payload,
                isLoading: false,
                isError: false
            }
        }

        case types.SKIN_LOREAL_PAGE_GET_FAILURE: {
            return {
                ...state,
                LorealProducts: [],
                isLoading: false,
                isError: true
            }
        }

        case types.LOREAL_GET_SINGLE_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case types.LOREAL_GET_SINGLE_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                LorealSingleProduct: payload,
                isError: false
            }
        }

        case types.LOREAL_GET_SINGLE_DATA_FAILURE: {
            return {
                ...state,
                LorealSingleProduct: [],
                isLoading: false,
                isError: true
            }
        }

        case types.GET_ESTEE_PAGE_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case types.GET_ESTEE_PAGE_DATA_SUCCESS: {
            return {
                ...state,
                EsteeProducts: payload,
                isLoading: false,
                isError: false
            }
        }

        case types.GET_ESTEE_PAGE_DATA_FAILURE: {
            return {
                ...state,
                EsteeProducts: [],
                isLoading: false,
                isError: true
            }
        };

        case types.GET_ESTEE_SINGLE_REQUEST : {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case types.GET_ESTEE_SINGLE_SUCCESS : {
            return {
                ...state,
                EsteeSingleProduct : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_ESTEE_SINGLE_FAILURE : {
            return {
                ...state,
                EsteeSingleProduct : [ ],
                isLoading : false,
                isError : true
            }
        }

        case types.GET_RAS_PAGE_DATA_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_RAS_PAGE_DATA_SUCCESS: {
            return {
                ...state,
                RasProducts : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_RAS_PAGE_DATA_FAILURE : {
            return {
                ...state,
                RasProducts : [ ],
                isLoading : false,
                isError : true
            }
        }

        case types.GET_RAS_SINGLE_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_RAS_SINGLE_SUCCESS : {
            return {
                ...state,
                RasSingleProduct : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_RAS_SINGLE_FAILURE : {
            return {
                ...state,
                RasSingleProduct : [ ],
                isLoading : false,
                isError : true
            }
        }

        case types.GET_MENS_GARNIER_PAGE_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_MENS_GARNIER_PAGE_SUCCESS : {
            return {
                ...state,
                MensGarnierProducts : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_MENS_GARNIER_PAGE_FAILURE : {
            return {
                ...state,
                MensGarnierProducts : [ ],
                isLoading : false,
                isError : true
            }
        }

        case types.GET_MENS_GARNIER_SINGLE_PAGE_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_MENS_GARNIER_SINGLE_PAGE_SUCCESS : {
            return {
                ...state,
                MensGarnierSingleProduct : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_MENS_GARNIER_SINGLE_PAGE_FAILURE : {
            return {
                ...state,
                MensGarnierSingleProduct : [ ],
                isLoading : false,
                isError : true
            }
        }
        
        case types.ADD_TO_CART_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.ADD_TO_CART_SUCCESS : {
            return {
                ...state,
                CartData : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.ADD_TO_CART_FAILURE : {
            return {
                ...state,
                CartData : [ ],
                isLoading : false,
                isError : true
            }
        }

        case types.GET_SINGAL_HAIR_DATA_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case types.GET_SINGAL_HAIR_DATA_SUCCESS: {
            return {
                ...state,
                HairSingleProduct: payload,
                isLoading: false,
                isError: false
            }
        }

        case types.GET_SINGAL_HAIR_DATA_FAILURE: {
            return {
                ...state,
                HairSingleProduct: [],
                isLoading: false,
                isError: true
            }
        }

        case types.GET_HAIR_DATA_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }

        case types.GET_HAIR_DATA_SUCCESS:{
            return{
                ...state,
                HairProducts:payload,
                isLoading:false,
                isError:false
            }
        }

        case types.GET_HAIR_DATA_FAILURE:{
            return{
                ...state,
                HairProducts:[],
                isLoading:false,
                isError:true
            }
        }


        case types.GET_FRAGANCE_DATA_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }

        case types.GET_FRAGANCE_DATA_SUCCESS:{
            return{
                ...state,
                GetFragranceProducts:payload,
                isLoading:false,
                isError:false
            }
        }

        case types.GET_FRAGANCE_DATA_FAILURE:{
            return{
                ...state,
                GetFragranceProducts:[],
                isLoading:false,
                isError:true
            }
        }

        case types.GET_SINGLE_FRAGRANCE_DATA_REQUEST:{
            return{
                ...state,
                isLoading: true,
                isError: false
            }
        }


        case types.GET_SINGLE_FRAGRANCE_DATA_SUCCESS:{
            return{
                ...state,
                GetFsingle: payload,
                isLoading: false,
                isError: false
            }
        }

        case types.GET_SINGLE_FRAGRANCE_DATA_FAILURE:{
            return{
                ...state,
                GetFsingle: [],
                isLoading: false,
                isError: true
            }
        }


        case types.GET_APPLIANCE_DATA_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_APPLIANCE_DATA_SUCCESS : {
            return {
                ...state,
                ApplianceAllProducts : payload,
                isLoading : false,
                isError : false
            }
        }


        case types.GET_APPLIANCE_DATA_FAILURE : {
            return {
                ...state,
                ApplianceAllProducts : [ ],
                isLoading : false,
                isError : true
            }
        }

        case types.GET_SINGLE_APPLIANCE_DATA_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_SINGLE_APPLIANCE_DATA_SUCCESS: {
            return {
                ...state,
                ApplianceSingleProducts : payload,
                isLoading : false,
                isError : false
            }
        }

        case types.GET_SINGLE_APPLIANCE_DATA_FAILURE : {
            return {
                ...state,
                ApplianceSingleProducts : [ ],
                isLoading : false,
                isError : true
            }
        }

        case types.GET_CHECKOUT_REQUEST : {
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        }

        case types.GET_CHECKOUT_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                Checkout : payload,
                isError : false
            }
        }

        case types.GET_CHECKOUT_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                Checkout : [ ],
            }
        }

        
        default :
        return state 
    }
}