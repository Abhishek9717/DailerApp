import {FETCH_LIST_BEGIN,FETCH_LIST_SUCCESS,FETCH_LIST_FAILURE } from './types'

export const fetchListBegin = () => ({
  type: FETCH_LIST_BEGIN
});

export const fetchListSuccess = list => ({
  type: FETCH_LIST_SUCCESS,
  payload: list 
});

export const fetchListFailure = error => ({
  type: FETCH_LIST_FAILURE,
  payload: error
});

export const fetchList = () => {
 return async dispatch => {
   dispatch(fetchListBegin());
    try{
      let res = await fetch('http://www.mocky.io/v2/5c41920e0f0000543fe7b889');
      let json = await res.json();
      dispatch(fetchListSuccess(json.dataList));
    }catch(error){
      dispatch(fetchListFailure(error));
    }
 }
}



