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

//import { supabase } from "../../supabaseClient";

function Email() {
  const queryParams = new URLSearchParams(window.location.search);
  const currentEmail = queryParams.get("email") || "unknown@example.com";
  const accessToken = queryParams.get("access_token");

  const handleVerification = async () => {
    if (!accessToken) {
      alert("토큰이 존재하지 않습니다. 이메일 링크를 확인해주세요.");
      return;
    }

    try {
      const { error } = await supabase.auth.verifyOtp({
        type: "signup",
        token: accessToken,
      });

      if (error) {
        alert(`인증 실패: ${error.message}`);
      } else {
        alert("이메일 인증이 성공적으로 완료되었습니다.");
      }
    } catch (err) {
      console.error("인증 요청 중 오류 발생:", err);
      alert("인증 요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <Dev>
      <Email_From_Box>
        <LogoBox>
          <LogoImg src={Logo} />
        </LogoBox>

        {/* 설명 */}
        <SpenBox>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;현재 이메일:{" "}
            <strong>{currentEmail}</strong>
            <br />
            이 이메일로 회원가입 요청이 있어 이 이메일이 발송되었습니다.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;요청을 한 적이
            없는 경우 무시하여 주시기 바랍니다.
          </span>
        </SpenBox>

        {/* 인증 버튼 */}
        <ButtonBox onClick={handleVerification}>
          <Submit_Button>
            <span>인증하기</span>
          </Submit_Button>
        </ButtonBox>
      </Email_From_Box>
    </Dev>
  );
}

export default Email;
