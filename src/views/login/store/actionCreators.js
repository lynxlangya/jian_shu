/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝首页
 * @copyright 🤝2020 尽人事, 行王道
 */
import { actionTypes } from './index';
import axios from 'axios';


const changeLogin = () => ({
  type: actionTypes.HANDLE_LOGIN,
  value: true
})

export const handleLogin = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then(res => {
      const data = res.data.status
      if (data) {
        dispatch(changeLogin())
      } else {
        alert('登录失败')
      }
    })
  }
}

const changeLogout = () => ({
  type: actionTypes.HANDLE_LOGOUT,
  value: false
})
export const logout = () => {
  return (dispatch) => {
    dispatch(changeLogout())
  }
}
