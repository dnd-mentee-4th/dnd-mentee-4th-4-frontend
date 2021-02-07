import React, { useState } from 'react';
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
  css`
    display: ${(props) => (props.display ? 'block' : 'none')};
  `,
);

const Clickbtn = styled.img(
  css`
    width: 5%;
    height: 5%;
    float: right;
    cursor: pointer;
  `,
  tw`
  z-40
  pt-6
  pr-6
  `,
);

const ModalContent = styled.div(
  tw`
    
    relative
    mt-32
    mx-auto
    bg-white
    z-30
    outline-none
    rounded-2xl
    text-2xl
    font-bold
    font-sans	
    shadow-lg
  `,
  css`
    display: ${(props) => (props.display ? 'block' : 'none')};

    width: 30%;
    height: 400px;
  `,
);

function LoginModal() {
  const [display, setdisplay] = useState(true);
  const LoginModalHandler = () => {
    setdisplay(!display);
  };
  const loginText = {
    textAlign: 'center',
    paddingTop: '15%',
    color: 'black',
  };

  return (
    <>
      <div>홈화면</div>

      <ModalBackground display={display} onClick={LoginModalHandler} />
      <ModalContent display={display}>
        <Clickbtn onClick={LoginModalHandler} src={LoginTools.delete} />
        <div className="login-text" style={loginText}>
          로그인
        </div>
      </ModalContent>
    </>
  );
}
export default LoginModal;
