import styled from "styled-components";

export const Dev = styled.div`
  background-color: #3f3f3f;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Email_From_Box = styled.div`
  background-color: white;
  width: 60vw;
  height: 64vh;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const LogoBox = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 8px solid black;
`;

export const LogoImg = styled.img`
  width: 40%;
  height: 40%;
`;

export const SpenBox = styled.div`
  width: 90%;
  height: 44%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  > span {
    font-size: 160%;
  }
`;

export const ButtonBox = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Submit_Button = styled.div`
  width: 80%;
  height: 74%;
  background-color: black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  > span {
    font-size: x-large;
    font-weight: bold;
    color: white;
  }
`;
