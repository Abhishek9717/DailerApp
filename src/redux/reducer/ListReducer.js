import {
    FETCH_LIST_BEGIN, 
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILURE
} from '../actions/types'

const initialState = {
    items: [],
    loading: false,
    error: null
}

export default ListReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_LIST_BEGIN:
            return{
                ...state,
                loading:true,
                error:null
            };
        case FETCH_LIST_SUCCESS:
            return{
                ...state,
                loading:false,
                items:action.payload
            };
        case FETCH_LIST_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
                items: []
            };
        default:
            return state;
    }
}