import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import LoginTools from '../../constants/loginItem';
// const fadeIn = keyframes`
//   from {
//     opacity: 0
//   }
//   to {
//     opacity: 1
//   }
// `;

const ModalBackground = styled.div(
  tw` 
    fixed
    top-0
    left-0
    bottom-0
    right-0
    bg-black
    bg-opacity-50 
    z-20
    outline-none
    `,
);

const ModalContent = styled.div(
  tw`
  absolute
  w-9/12
  h-72
  top-0
  
  bg-white
  z-30
  outline-none
  rounded-2xl
  text-2xl
  font-bold
  font-sans	
  shadow-lg
 
 
  sm:w-6/12
  sm:mt-40
  lg:w-2/5
 
  md:h-72
`,

  css`
    right: 12%;
    margin-top: 10rem;

    @media (min-width: 768px) {
      right: 25%;
    }
    @media (min-width: 1024px) {
      height: 28rem;
      right: 30%;
    }
  `,
);

const LoginText = styled.div(
  css`
    text-align: center;
    padding-top: 5%;
    color: black;
    font-size: medium;
  `,
  tw`
  sm:text-2xl
  
  `,
);

const DeleteButton = styled.img(
  css`
    width: 5%;
    height: 5%;
    margin-left: 90%;
    cursor: pointer;
  `,
  tw`
  z-40
  pt-2
  pr-2
  md:pt-6
  md:pr-6
  `,
);

const KaKaoLoginButton = styled.img(
  css`
    width: 30px;
    height: 30px;
    padding: 5%;
    @media (min-width: 1024px) {
      width: 60px;
      height: 60px;
    }
  `,
);

const NonMeberButton = styled.img(
  css`
    padding: 6%;
    width: 20px;
    height: 20px;
    @media (min-width: 1024px) {
      width: 40px;
      height: 40px;
    }
  `,
);
const LoginWrapper = styled.div(
  css`
    margin-top: 40px;
    @media (min-width: 768px) {
      margin-top: 30px;
    }
    @media (min-width: 1024px) {
      margin-top: 30px;
    }
  `,
);
const Imagewrapper = styled.div(
  tw`
  sm: my-32
  md:text-lg
  
 
 
`,
  css`
    width: 80%;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: black;
    margin: 5% auto 5% auto;
    cursor: pointer;
    font-size: x-small;
    border-radius: 10px;
    background-color: ${(props) => (props.color ? 'black' : '#f9e000')};
    color: ${(props) => (props.color ? 'white' : 'black')};
    @media (min-width: 1024px) {
      height: 120px;
    }
    @media (max-width: 400px) {
      width: 90%;
    }
  `,
);

// const Imagewrapper = styled.div`
//
//   background-color: ${(props) =>
//     props.primary &&
//     css`
//     #f9e000
//       ;
//     `};
//   color: ${(props) =>
//     props.primary &&
//     css`
//       black;
//         ;
//       `};
// `;

function LoginModal({ displayHandler }) {
  return (
    <>
      <ModalBackground onClick={displayHandler} />
      <ModalContent>
        <DeleteButton onClick={displayHandler} src={LoginTools.delete} />
        <LoginText>로그인</LoginText>
        <LoginWrapper>
          <Imagewrapper>
            <KaKaoLoginButton src={LoginTools.kakao} />
            카카오 계정으로 로그인하기
          </Imagewrapper>
          <Imagewrapper color>
            <NonMeberButton src={LoginTools.logo} />
            비회원으로 사이트 이용하기
          </Imagewrapper>
        </LoginWrapper>
      </ModalContent>
    </>
  );
}
export default LoginModal;
