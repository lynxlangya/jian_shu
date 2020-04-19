/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝整合Reducers
 * @copyright 🤝2020 尽人事, 行王道
 * @description reducers 如果存放过多的数据, 会导致代码无法维护. 因此拆分为多个进而合并
 * !redux-immutable: 提供的数据本身就是 immutable 类型, 保持数据一致.调用时使用get()
 */
import { combineReducers } from 'redux-immutable'
import { reducer as headerReducers } from '../layout/header/store';
import { reducer as homeReducer } from '../views/home/store';
import { reducer as detailReducer } from '../views/detail/store'
import { reducer as loginReducer } from '../views/login/store'

/** combineReducers: 整合reducer */
const reducer = combineReducers({
  header: headerReducers,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
})

export default reducer
