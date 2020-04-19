import { fromJS } from 'immutable';
import { actionTypes } from './index'

const defaultState = fromJS({
  /**热门区域 */
  topicList: [],
  /**文章列表 */
  articleList: [],
  /**列表页数 */
  pageNum: 0,
  /**推荐区域 */
  recommendList: [],
  /**返回顶部按钮展示 */
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME_LIST:
      return getHomeList(state, action)
    case actionTypes.CREATE_MORE_LIST:
      return createMoreList(state, action)
    case actionTypes.TOGGLE_TOP_SHOW:
      return toggleTopShow(state, action)
    default:
      return state
  }
}


/**获取文章列表 */
const getHomeList = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}
/**加载更多列表数据 */
const createMoreList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    pageNum: action.nextPage
  })
}
/**返回顶部按钮展示/隐藏 */
const toggleTopShow = (state, action) => {
  return state.set('showScroll', action.show)
}