import { fromJS } from 'immutable';
import { actionTypes } from './index'

const defaultState = fromJS({
  data: {}
})

export default (state = defaultState, action) => {
  switch (action.type) {
  case actionTypes.GET_CONTENT_LIST:
    return state.merge({
      data: fromJS({...action.data})
    })
    default:
      return state
  }
}
