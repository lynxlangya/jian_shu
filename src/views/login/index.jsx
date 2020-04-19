import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store';
import { LoginWrapper, Title, LoginInfo, UserInput, PwInput, Button } from './style'

class Login extends PureComponent {
  render() {
    const { login } = this.props
    if (login) {
      return <Redirect to='/' />
    } else if (!login) {
      return (
        <LoginWrapper>
          <Title>登录</Title>
          <LoginInfo>
            <UserInput ref={input => this.account = input} placeholder="手机号或邮箱" />
            <PwInput ref={input => this.password = input} placeholder="密码" type="password" />
            <Button onClick={() => { this.props.handleLogin(this.account, this.password) }}>登录</Button>
          </LoginInfo>
        </LoginWrapper>
      )
    }
  }
}

const mapDispatch = (dispatch) => ({
  handleLogin(account, password) {
    dispatch(actionCreators.handleLogin(account.value, password.value))
  }
})

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
})

export default connect(mapState, mapDispatch)(Login);