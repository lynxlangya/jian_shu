/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝header reducers存放
 * @copyright 🤝2020 尽人事, 行王道
 */
import { actionTypes } from './index';
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  page: 1,
  totalPage: 1,
  mouseIn: false,
  list: [],
})

/**
 * reducers 导出一个纯函数
 * ?使用原始 state 方法, 需要手动保持 state 不被修改. 存在风险
 * !immutable 对象的 set 方法, 会结合之前的 immutable 对象的值和设置的值. 返回一个全新的对象
 */
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_FOCUS:
      return state.set('focused', true)
    case actionTypes.INPUT_BLUR:
      return state.set('focused', false)
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.MOUNSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}