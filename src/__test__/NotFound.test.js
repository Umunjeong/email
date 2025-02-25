//라우터 돔 7버전 작동 안함 => 경고 발생 => future={{ v7_startTransition: true, v7_relativeSplatPath: true }} 추가하면 경고
//jsx사용하는 모든 파일에서 React를 받아와야 함
//babel.config.js과 jest.config.cjs를 만들어야함
//여러 라이브러리 설치해야함
import React from "react";
import "@testing-library/jest-dom"; // test돔 사용
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NotFound } from "../page/notFound/notFound.jsx";

describe("NotFound Page", () => {
  it("should render NotFound page when navigating to /qwer", () => {
    render(
      <MemoryRouter
        initialEntries={["/qwer"]}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <NotFound />
      </MemoryRouter>
    );
  });

  it("should render '이 홈페이지는 이메일 확인만을 위한 페이지 입니다.' text", () => {
    render(
      <MemoryRouter
        initialEntries={["/qwer"]}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <NotFound />
      </MemoryRouter>
    );
    // "이 홈페이지는 이메일 확인만을 위한 페이지 입니다." 텍스트가 있는지 확인
    expect(
      screen.getByText("이 홈페이지는 이메일 확인만을 위한 페이지 입니다.")
    ).toBeInTheDocument();
  });

  it("should render '로그인 페이지로 돌아가 로그인을 진행하여 주세요' text", () => {
    render(
      <MemoryRouter
        initialEntries={["/qwer"]}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <NotFound />
      </MemoryRouter>
    );
    // "로그인 페이지로 돌아가 로그인을 진행하여 주세요" 텍스트가 있는지 확인
    expect(
      screen.getByText("로그인 페이지로 돌아가 로그인을 진행하여 주세요")
    ).toBeInTheDocument();
  });
});
