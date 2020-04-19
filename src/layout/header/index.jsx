/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝Header 组件
 * @copyright 🤝2020 尽人事, 行王道
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWapper,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchSwitch,
  SearchInfoItem
} from './style';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../views/login/store'

class Header extends Component {
  /**
   * @func 判断热门搜索是否显示
   * @desc 📝传入值取自搜索框变化 focused
   */
  getListArea() {
    const { focused, mouseIn, list, page, totalPage, handleMounseEnter, handleonMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMounseEnter}
          onMouseLeave={handleonMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>换一批
            </SearchSwitch>
          </SearchInfoTitle>
          <div>
            {pageList}
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        {/* 中间按钮 */}
        <Nav>
          <NavItem className='left active'><i className="iconfont">&#xe643;</i> 首页</NavItem>
          <NavItem className='left'><i className="iconfont">&#xe61a;</i> 下载App</NavItem>
          {
            login
            ? <NavItem className='right' onClick={logout}>退出</NavItem>
            : <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
          }
          <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWapper>
            <CSSTransition
              in={focused}
              timeout={500}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe623;</i>
            {/* 热门搜索 */}
            {this.getListArea(focused)}
          </SearchWapper>
        </Nav>
        {/* 右侧操作 */}
        <Addition>
          <Button className="registered">注册</Button>
          <Button className="wirte"><i className="iconfont">&#xe6e5;</i> 写文章</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

/**store数据转化为props */
const mapStateToProps = (state) => {
  return {
    /**get 方法获取immutable数据 */
    focused: state.getIn(['header', 'focused']),
    /**等同于下面写法: */
    // focused: state.get('header').get('focused')
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login'])
  }
}

/**dispatch数据转化为props */
const mapDispatchToProps = (dispatch) => {
  return {
    /**退出登录 */
    logout () {
      dispatch(loginActionCreators.logout())
    },
    /**鼠标移入 */
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getSearchList())
      dispatch(actionCreators.inputFocus())
    },
    /**鼠标移除 */
    handleInputBlur() {
      dispatch(actionCreators.inputBlur())
    },
    /**鼠标进入热门搜索 */
    handleMounseEnter() {
      dispatch(actionCreators.mounseEnter())
    },
    /**鼠标离开热门搜索 */
    handleonMouseLeave() {
      dispatch(actionCreators.handleonMouseLeave())
    },
    /**换一批 */
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      if (page < totalPage) dispatch(actionCreators.handleChangePage(page + 1))
      else dispatch(actionCreators.handleChangePage(1))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
