import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import LoginTools from '../../constants/loginItem';

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
  w-8/12
  h-56
  top-0
  
  bg-white
  z-30
  outline-none
  rounded-md
  text-xl
  font-bold
  font-sans	
  shadow-lg
 
 
  sm:w-6/12
  sm:mt-40
  lg:w-2/6
 
  md:h-72
`,

  css`
    right: 15%;
    margin-top: 10rem;

    @media (min-width: 768px) {
      right: 25%;
    }
    @media (min-width: 1024px) {
      height: 20rem;
      right: 35%;
    }
  `,
);

const LoginText = styled.div(
  css`
    text-align: center;

    color: black;
    font-size: medium;
    @media (min-width: 768) {
      padding-top: 5%;
    }
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
    padding: 0 2%;

    @media (min-width: 1024px) {
      width: 50px;
      height: 50px;
    }
  `,
);

const NonMeberButton = styled.img(
  css`
    padding: 0 5%;

    width: 20px;
    height: 20px;
    @media (min-width: 1024px) {
      width: 30px;
      height: 30px;
    }
  `,
);
const LoginWrapper = styled.div(
  css`
    margin-top: 0px;
    @media (min-width: 768px) {
      margin-top: 30px;
    }
    @media (min-width: 1024px) {
      margin-top: 40px;
    }
  `,
);
const Imagewrapper = styled.div(
  tw`
  sm: my-32
  md:text-base
  
 
 
`,
  css`
    width: 82%;
    height: 50px;
    display: flex;

    align-items: center;
    justify-content: center;
    background-color: black;
    margin: 5% auto 5% auto;
    text-align: center;
    cursor: pointer;
    font-size: x-small;
    border-radius: 10px;
    background-color: ${(props) =>
      props.color === 'true' ? 'black' : '#f9e000'};
    color: ${(props) => (props.color === 'true' ? 'white' : 'black')};
    @media (min-width: 1024px) {
      height: 60px;
    }
    @media (max-width: 400px) {
      width: 90%;
    }
  `,
);

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
          <Imagewrapper color="true" onClick={displayHandler}>
            <NonMeberButton src={LoginTools.logo} />
            비회원으로 사이트 이용하기
          </Imagewrapper>
        </LoginWrapper>
      </ModalContent>
    </>
  );
}
export default LoginModal;
