import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;

  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

/**专题部分样式 */
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 0 4px;
  margin: 0 0 10px 18px;
  cursor: pointer;

  img {
    display: block;
    float: left;
    height: 24px;
    margin: 4px 2px 4px 0;
  }
`;

/**文章列表 */
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;

  img {
    width: 125px;
    display: block;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;
/**文章内容 */
export const ListInfo = styled.div`
  width: 500px;
  float: left;

  .title {
    line-height: 1.5;
    font-size: 18px;
    font-weight: bold;
    color: #333333;
    cursor: pointer !important;
  }

  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999999;
    margin-right: 10px;
    max-height: 55px;
    overflow: hidden;
  }
`;

/**加载更多 */
export const LoadMore = styled.div`
  border-radius: 20px;
  background-color: #a5a5a5;
  height: 40px;
  line-height: 1.5;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  box-sizing: border-box;
  cursor: pointer;
`;

/**推荐区域 */
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 100%;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

/**返回顶部 */
export const BackTop = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  line-hieght: 50px;
  text-align: center;
  display: block;
  border: 1px solid #dcdcdc;

  span {
    margin-top: 18px;
    display: block;
  }
`;