/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝首页
 * @copyright 🤝2020 尽人事, 行王道
 */
import { actionTypes } from './index';
import axios from 'axios';
import { fromJS } from 'immutable'

/**
 * @func 获取首页数据
 * @desc 📝  
 */
export const getHomeList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then(res => {
      const data = res.data.data
      dispatch(changeHomeData(data))
    })
  }
}

const changeHomeData = (data) => ({
  type: actionTypes.GET_HOME_LIST,
  ...data
})

/**
 * @func 获取更多数据
 * @desc 📝
 */
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/moreList.json?page=' + page).then(res => {
      const data = res.data.data
      dispatch(createMoreList(data, page + 1))
    })
  }
}

const createMoreList = (data, nextPage) => ({
  type: actionTypes.CREATE_MORE_LIST,
  list: fromJS(data),
  nextPage
})

/**
 * @func 判断返回顶部按钮是否展示
 * @desc 📝
 */
export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_TOP_SHOW,
  show
})