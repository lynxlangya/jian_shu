import styled from 'styled-components';

/**首页 */
export const DetailWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 100px;
  background: #f9f9f9;
`;

/**中间内容 */
export const Content = styled.div`
  width: 1000px;
  margin: 10px auto;
  display: flex;
`;

/**文章内容部分 */
export const ContentInfo = styled.div`
  width: 735px;
  padding: 24px;
  background: #ffffff;
  border-radius: 4px;

  p {
    font-weight: 400;
    line-height: 1.8;
    color: #404040;
    margin-bottom: 20px;
  }
`;

/**标题 */
export const HeaderTitle = styled.div`
  line-height: 1.5;
  font-size: 30px;
  color: #333333;
  font-weight: 700;
  margin-bottom: 1rem;
`;

/**文章中用户信息 */
export const UserTitle = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  img {
    height: 100%;
    border-radius: 50%;
  }
`;
/**用户名 */
export const TitleInfo = styled.div`
  margin-left: 8px;
`;
export const UserName = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
`;
/**阅读信息及日期 */
export const ReadInfo = styled.div`
  color: #969696;
  font-size: 13px;
  span {
    margin-right: 10px;
  }
`;

/**右侧信息 */
export const UserInfo = styled.div`
  width: 265px;
  border-radius: 4px;
  margin-left: 10px;
`;

/**用户信息 */
export const UserMsg = styled.div`
  width: 100%;
  height: 270px;
  background: #ffffff;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**推荐阅读 */
export const Commend = styled.div`
  width: 100%;
  height: 350px;
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;