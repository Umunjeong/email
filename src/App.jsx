import { useState, useEffect } from "react";
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
import { supabase } from "./db/supabase";

function Email() {
  const [currentEmail, setCurrentEmail] = useState(""); // 상태로 이메일 관리
  const queryParams = new URLSearchParams(window.location.search);
  const accessToken = queryParams.get("access_token");

  const handleVerification = async () => {
    if (!accessToken) {
      alert("토큰이 존재하지 않습니다. 이메일 링크를 확인해주세요.");
      return;
    }

    try {
      // Supabase에서 인증 요청
      const { data, error } = await supabase.auth.setAuth(accessToken);

      if (error) {
        alert(`인증 실패: ${error.message}`);
        return;
      }

      const user = data.user;
      setCurrentEmail(user.email);

      // 이메일 인증 처리
      const { error: verificationError } = await supabase.auth.verifyOtp({
        type: "signup",
        token: accessToken,
      });

      if (verificationError) {
        alert(`인증 실패: ${verificationError.message}`);
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

        <SpenBox>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;현재 이메일:{" "}
            <strong>{currentEmail}</strong>
            <br />
            회원가입의 마지막 단계입니다. 아래 버튼을 클릭하여
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            회원가입을 완료해 주세요.
          </span>
        </SpenBox>

        <ButtonBox onClick={() => handleVerification()}>
          <Submit_Button>
            <span>인증하기</span>
          </Submit_Button>
        </ButtonBox>
      </Email_From_Box>
    </Dev>
  );
}

export default Email;
