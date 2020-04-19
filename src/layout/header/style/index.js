/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝Header通用样式文件
 * @copyright 🤝2020 尽人事, 行王道
 */
import styled from 'styled-components';
import logoPic from '../../../statics/img/logo.png';


/**header样式 */
export const HeaderWrapper = styled.div`
  position: relative;
  height: 57px;
  border-bottom: 1px solid #f0f0f0;
`;

/**
 * @func 生成一个a标签
 * @desc 📝 默认点击跳转到首页
 */
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 57px;
  background: url(${logoPic});
  background-size: contain;
`;

/**Nav */
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto; 
`;

/**链接 */
export const NavItem = styled.div`
  line-height: 57px;
  padding: 0 15px;
  font-size: 16px;
  color: #333333;
  &.left {
    float: left;
  }
  &.active {
    color: #ea6f5a;
  }
  &.right {
    float: right;
    color: #969696;
  }
`;

/**搜索区 */
export const SearchWapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    &.focused {
      background: #777777;
      color: #ffffff;
    }
  }
`;
/**热门搜索 */
export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 220px;
  padding: 0 20px;
  background: #ffffff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;
/**热门搜索标题 */
export const SearchInfoTitle = styled.div`
  margin: 15px auto;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
/**换一批 */
export const SearchSwitch = styled.span`
  float: right;
  font-size: 12px;
  cursor: pointer;

  .spin {
    display: block;
    float: left;
    font-size: 11px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;
/**热门分类 */
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  font-size: 12px;
  padding: 0 5px;
  margin: 0 6px 15px 0;
  line-height: 20px;
  border: 1px solid #dddddd;
  color: #787878;
  border-radius: 3px;
`;

/**搜索框 */
export const NavSearch = styled.input.attrs({
  placeholder: '搜索...'
})`
  width: 240px;
  height: 38px;
  padding: 0 35px 0 25px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eeeeee;
  font-size: 14px;
  color: #777777;
  &::placeholder {
    color: #999999;
  }
  &.focused {
    width: 320px;
  }
  ${'' /* 鼠标进入 */}
  &.slide-enter {
    transition: all 0.5s ease-out;
  }
  &.slide-enter-active {
    width: 320px;
  }
  ${'' /* 鼠标移除 */}
  &.slide-exit {
    transition: all 0.5s ease-out;
  }
  &.slide-exit-active {
    width: 240px;
  }
`;

/**右侧操作区 */
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 57px;
`;

/**注册及写文章按钮 */
export const Button = styled.div`
  float: left;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.registered {
    color: #ec6149;
  }
  &.wirte {
    background: #ec6149;
    color: #ffffff;
  }
`;