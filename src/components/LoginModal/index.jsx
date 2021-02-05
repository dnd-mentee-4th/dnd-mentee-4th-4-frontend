import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

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

const Clickbtn = styled.button``;

const ModalContent = styled.div(
  tw`
    
    relative
    my-0
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
    top: 20%;
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
    paddingTop: '10%',
  };

  return (
    <>
      <div>홈화면</div>

      <ModalBackground display={display} onClick={LoginModalHandler}>
        <ModalContent display={display}>
          <Clickbtn onClick={LoginModalHandler}>닫기</Clickbtn>
          <div className="login-text" style={loginText}>
            로그인
          </div>
        </ModalContent>
      </ModalBackground>
    </>
  );
}
export default LoginModal;