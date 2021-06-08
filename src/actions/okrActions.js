import axios from 'axios';
const URL = 'http://localhost:8080'

export const CREATE = 'CREATE'
export const LOADING = 'LOADING'
export const LOADED_FAILURE = 'LOADED_FAILURE'
export const LOADED_SUCCESS = 'LOADED_SUCCESS'
export const UPDATE_OKR_DATA = 'UPDATE_OKR_DATA'

export const loading = () => ({ type: LOADING })

export const failure = () => ({ type: LOADED_FAILURE })

export const updateOkr = (data) => {
  return async dispatch => {
    dispatch(({ type: UPDATE_OKR_DATA, payload: data }))
  }
}

export const success = payload => ({
  type: LOADED_SUCCESS,
  payload
});

export function postOKR(okr) {
  return async dispatch => {
    dispatch(loading())
    try {
      axios.post(`${URL}/okr`, okr)
    } catch (error) {
      dispatch(failure())
    }
  }
}
