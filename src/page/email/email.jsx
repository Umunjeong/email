import {
  Wrapper,
  EmailFromBox,
  LogoBox,
  LogoImg,
  SpenBox,
  ButtonBox,
  SubmitButton,
} from "./email.style";

import Img_umunjeong_Black_Logo from "../../assets/img/Img_umunjeong_Black_Logo.png";
import React from "react";

export function Email() {
  const handleRedirect = () => {
    window.location.href = "https://umunjeong.netlify.app/";
  };

  return (
    <Wrapper>
      <EmailFromBox>
        <LogoBox>
          <LogoImg src={Img_umunjeong_Black_Logo} />
        </LogoBox>

        <SpenBox>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;환영합니다! 회원가입의 모든 절차가
            완료되었습니다.
            <br />
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;로그인으로
            돌아가서 다시 로그인하여 주세요
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>우문정에 오신것을 환영합니다!</b>
          </span>
        </SpenBox>

        <ButtonBox>
          <SubmitButton onClick={handleRedirect}>
            <span>우문정 바로가기</span>
          </SubmitButton>
        </ButtonBox>
      </EmailFromBox>
    </Wrapper>
  );
}
