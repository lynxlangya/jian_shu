import { fromJS } from 'immutable';
import { actionTypes } from './index'

const defaultState = fromJS({
  login: false,
})

export default (state = defaultState, action) => {
  switch (action.type) {
  case actionTypes.HANDLE_LOGIN:
    return state.set('login', action.value)
  case actionTypes.HANDLE_LOGOUT:
    return state.set('login', action.value)
    default:
      return state
  }
}
