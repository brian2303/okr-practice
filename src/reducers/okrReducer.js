import * as actions from '../actions/okrActions';

export const initialState = {
  loading: false,
  hasErrors: false,
  okr: {
    userId: '',
    title: '',
    objective: '',
    responName: '',
    responEmail: '',
    vertical: '',
    description: '',
    krs: []
  }
}

export default function okrReducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOADING:
      return { ...state, loading: true }
    case actions.UPDATE_OKR_DATA:
      return { ...state, okr: { ...state.okr, ...action.payload } }
    case actions.CREATE:
      return { ...state, ...action.payload, loading: false, hasErrors: false }
    case actions.LOADED_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}