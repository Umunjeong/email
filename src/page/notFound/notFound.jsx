import React from "react";
import {
  Wrapper,
  NotFoundBox,
  Span1,
  Span2,
} from "../notFound/notFound.style.js";

export const NotFound = () => {
  return (
    <Wrapper>
      <NotFoundBox>
        <Span1>404! NOT FOUND</Span1>
        <Span2>이 홈페이지는 이메일 확인만을 위한 페이지 입니다.</Span2>
        <Span2>로그인 페이지로 돌아가 로그인을 진행하여 주세요</Span2>
      </NotFoundBox>
    </Wrapper>
  );
};
