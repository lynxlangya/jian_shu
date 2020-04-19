import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from './components/List'
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer'
import { actionCreators } from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends PureComponent {
  /**获取数据 */
  componentDidMount() {
    this.props.changeHomeData()
    /**绑定事件 */
    this.bindEvents()
  }

  /**事件销毁 */
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  /**回到顶部按钮 */
  handleScrollTop() {
    let timer = null
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
      var oTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (oTop > 0) {
        document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
        timer = requestAnimationFrame(fn);
      } else {
        cancelAnimationFrame(timer);
      }
    });
  }

  render() {
    const { showScroll } = this.props
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4928/6e9aa1978a269f34cccf0a8971e168ad47b79262.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          showScroll ? <BackTop onClick={this.handleScrollTop}><span>⬆</span></BackTop> : null
        }
      </HomeWrapper>
    )
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeList())
  },
  /**返回顶部按钮 */
  changeScrollTopShow(e) {
    let scrollTopNum = document.documentElement.scrollTop
    if (scrollTopNum > 600) dispatch(actionCreators.toggleTopShow(true))
    else dispatch(actionCreators.toggleTopShow(false))
  }
})

export default connect(mapState, mapDispatch)(Home);