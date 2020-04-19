/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝创建action
 * @copyright 🤝2020 尽人事, 行王道
 */
import { actionTypes } from './index';
import axios from 'axios';
import { fromJS } from 'immutable'

export const inputFocus = () => ({
  type: actionTypes.INPUT_FOCUS
})

export const inputBlur = () => ({
  type: actionTypes.INPUT_BLUR
})

export const mounseEnter = () => ({
  type: actionTypes.MOUNSE_ENTER
})

export const handleonMouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const handleChangePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})

/**派发请求 */
export const getSearchList = () => {
  return (dispatch) => {
    axios.get('/api/searchList.json').then(res => {
      const data = res.data
      dispatch(changeList(data.data))
    }).catch((e) => {
      console.log(e)
    })
  }
}

/**不用导出 */
const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})