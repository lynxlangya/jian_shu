import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import {
  DetailWrapper,
  Content,
  ContentInfo,
  HeaderTitle,
  UserInfo,
  UserTitle,
  TitleInfo,
  UserName,
  ReadInfo,
  UserMsg,
  Commend
} from './style'


class Detail extends PureComponent {

  componentDidMount() {
    const dataId = this.props.match.params.id
    this.props.getDetailData(dataId)
  }

  /**字符串转化 */
  handleStr(str) {
    if (str !== undefined) {
      let regStr = str.replace(/\n/g, "<br />")
      return regStr
    } 
  }

  render() {
    console.log(this.props.match.params);
    const { contentInfo } = this.props
    return (
      <>
        <DetailWrapper>
          <Content>
            <ContentInfo>
              <HeaderTitle>{contentInfo.get('title')}</HeaderTitle>
              <UserTitle>
                <img src={contentInfo.get('imgUrl')} alt="" />
                <TitleInfo>
                  <UserName>{contentInfo.get('username')}</UserName>
                  <ReadInfo>
                    <span>{contentInfo.get('dateTime')}</span>
                    <span>字数 {contentInfo.get('wordCount')}</span>
                    <span>阅读 {contentInfo.get('readCount')}</span>
                  </ReadInfo>
                </TitleInfo>
              </UserTitle>
              <p dangerouslySetInnerHTML={{ __html: this.handleStr(contentInfo.get('content')) }} />
            </ContentInfo>
            <UserInfo>
              <UserMsg>User Message</UserMsg>
              <Commend>Commend</Commend>
            </UserInfo>
          </Content>
        </DetailWrapper>
      </>
    )
  }
}

const mapState = (state) => ({
  contentInfo: state.getIn(['detail', 'data'])
})

const mapDispatch = (dispatch) => ({
  getDetailData(dataId) {
    dispatch(actionCreators.getDetailData(dataId))
  }
})

export default connect(mapState, mapDispatch)(withRouter(Detail))