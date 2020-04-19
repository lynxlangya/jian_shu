import styled from 'styled-components';

export const LoginWrapper = styled.div`
  width: 400px;
  margin: 60px auto;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #ea6f5a;
  margin-bottom: 32px;
`;

/**登录 */
export const LoginInfo = styled.div`
  width: 300px;
  margin: auto;
`;

/**用户名 */
const UserLocal = styled.input`
  width: 250px;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
`;
export const UserInput = UserLocal;

/**密码 */
const PwLocal = styled.input`
  width: 250px;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
`;
export const PwInput = PwLocal;

const BtnLocal = styled.button`
  background: #3194d0;
  margin: 20px auto;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  outline: none;
  display: block;
  clear: both;
  cursor: pointer;
`;
/**登录按钮 */
export const Button = BtnLocal;