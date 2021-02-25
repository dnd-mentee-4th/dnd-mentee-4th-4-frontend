import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import KaKaoLogin from 'react-kakao-login';

import { postLoginInfo } from '../../../lib/APIs';
import LoginContext from '../../../context/LoginContext';

const KAKAO_TOKEN = '9030c74246944b49373d6baa1f446d7e';
const LOGIN_TEXT = '로그인';
const KAKAO_BUTTON = '카카오 계정으로 로그인하기';
const NONLOGIN_BUTTON = '비회원으로 사이트 이용하기';

const ModalBackground = styled.div(
  tw` fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 z-50 outline-none`,
);

const ModalContent = styled.div(
  tw` left-2/4 transform -translate-x-2/4 py-6 absolute bg-white z-100 outline-none rounded-md text-xl font-bold
  sm:mt-40 md:(px-6)`,
  css`
    margin-top: 10rem;
  `,
);

const LoginText = styled.div(
  tw` sm:text-2xl text-black text-center`,
  css`
    font-size: medium;
    @media (min-width: 768) {
      padding-top: 5%;
    }
  `,
);

const LoginWrapper = styled.div(
  tw`mx-4`,
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
  tw` flex items-center justify-center w-full clickable sm: my-32 `,
  css`
    height: 50px;
    margin: 5% auto;
    border-radius: 10px;
    font-size: 16px;
    background-color: ${(props) =>
      props.color === 'true' ? 'black' : '#f9e000'};
    color: ${(props) => (props.color === 'true' ? 'white' : 'black')};
    @media (min-width: 1024px) {
      height: 60px;
    }
    @media (max-width: 400px) {
      width: 90%;
      font-size: 14px;
    }
  `,
);

const KaKaoBtn = styled(KaKaoLogin)(
  tw`font-bold p-0 clickable overflow-hidden`,
  css`
    border-radius: 10px !important;
    background-color: #f9e000 !important;
    font-family: 'Lato';
    outline: none;
    @media (max-width: 400px) {
      font-size: 14px !important;
    }
  `,
);

const LoginModal = (props) => {
  const { displayHandler } = props;
  const { setIsLogged, setProfileNickName, setProfileId } = useContext(
    LoginContext,
  );

  return (
    <>
      <ModalBackground onClick={displayHandler} />
      <ModalContent>
        <LoginText>{LOGIN_TEXT}</LoginText>
        <LoginWrapper>
          <Imagewrapper>
            <KaKaoBtn
              token={KAKAO_TOKEN}
              onSuccess={async (res) => {
                displayHandler();
                setIsLogged(true);
                setProfileNickName(res.profile.properties.nickname);
                setProfileId(res.profile.id);
                await postLoginInfo(
                  res.profile.id,
                  res.profile.properties.nickname,
                );
              }}
            >
              {KAKAO_BUTTON}
            </KaKaoBtn>
          </Imagewrapper>
          <Imagewrapper color="true" onClick={displayHandler}>
            {NONLOGIN_BUTTON}
          </Imagewrapper>
        </LoginWrapper>
      </ModalContent>
    </>
  );
};
export default LoginModal;
