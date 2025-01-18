import {
  Dev,
  Email_From_Box,
  LogoBox,
  LogoImg,
  SpenBox,
  ButtonBox,
  Submit_Button,
} from "./App";

import Logo from "./assets/img/Img_umunjeong-Black_Logo.png";

function App() {
  return (
    <Dev>
      <Email_From_Box>
        <LogoBox>
          <LogoImg src={Logo}></LogoImg>
        </LogoBox>
        <SpenBox>
          <span>
            이 이메일로 회원가입 요청이 있어 이 이메일이 발송되었습니다.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;요청을 한적이
            없는경우 무시하여 주시기 바랍니다.
          </span>
        </SpenBox>
        <ButtonBox>
          <Submit_Button>
            <span>인증하기</span>
          </Submit_Button>
        </ButtonBox>
      </Email_From_Box>
    </Dev>
  );
}

export default App;
