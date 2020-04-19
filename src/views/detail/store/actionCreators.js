import { actionTypes } from './index'
import axios from 'axios';

export const getDetailData = (dataId) => {
  return (dispatch) => {
    axios.get('/api/detailData.json?' + dataId).then(res => {
      const data = res.data.data
      dispatch(changeDetailData(data))
    })
  }
}
/**
 * @func 获取详情页数据
 * @desc 📝
 */
const changeDetailData = (data) => ({
  type: actionTypes.GET_CONTENT_LIST,
  data: {...data}
})