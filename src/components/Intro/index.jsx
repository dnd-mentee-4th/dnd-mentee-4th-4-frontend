import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'react-router-dom';
// const CardLoop = keyframes`
// from {
//   transform: translate(0%);

// }

// to {

//   transform: translate(-100%);
// }
// `;

const CardWrapper = styled.div(
  tw`w-full`,
  css`
    white-space: nowrap;
    overflow: hidden;
  `,
);

const BackgroundCard = styled.div(
  tw`

  bg-gray-50
  rounded-2xl
  shadow-lg
  text-3xl
  `,
  css`
    width: 300px;
    height: 150px;
    display: inline-block;
    text-align: center;
    line-height: 150px;
    box-sizing: border-box;
    margin: 30px 10px;
  `,
);

const IntroPage = styled.div(
  css`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 5;

    color: white;
  `,
);
const Intromessage = styled.div(
  css`
    font-size: large;
    font-weight: bold;
    margin-top: 50%;
    margin-bottom: 5%;
    text-align: center;
    line-height: 150%;
  `,
  tw`
  sm:text-3xl
  
  md:mt-80
  lg:mt-48
  lg:text-5xl
  lg:leading-normal
  
`,
);

const Submessage = styled.div(
  css`
    text-align: center;
    font-size: smaller;
    margin: 0 8%;
    line-height: 150%;
  `,

  tw`
  sm:text-lg
  md:mx-9
  lg:text-2xl
 
  
`,
);

const LoginButton = styled.button(
  css`
    width: 40%;
    height: 30px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    background-color: #06ffd2;
    outline: none;
  `,
  tw`
  sm:w-28
  sm:h-10
  sm:text-lg
  `,
);

const Mainbutton = styled.div(
  css`
    font-size: smaller;
  `,
  tw`
    md:text-lg
  `,
);

function Intro() {
  const subBtn = {
    display: 'flex',
    marginTop: '5%',
  };
  const home = {
    flex: '1',
    textAlign: 'right',
    marginRight: '5%',
    marginTop: '7px',
  };
  const login = {
    flex: '1',
  };

  return (
    <>
      <IntroPage>
        <div className="IntroWrapper">
          <Intromessage>
            현명한 소비자를 위한
            <br />
            여행자들의 똑똑한 쇼핑 공간
          </Intromessage>
          <Submessage>
            2021년부터 <strong>쫌,싸</strong> 와 함께 기획전을 둘러보고 남들보다
            싸게 구매하고 자랑하자!
          </Submessage>
          <div className="subBtn" style={subBtn}>
            <div className="home" style={home}>
              <Link
                to="/"
                style={{
                  color: 'inherit',
                  textDecoration: 'inherit',
                }}
              >
                <Mainbutton> 둘러보기</Mainbutton>
              </Link>
            </div>
            <div style={login}>
              <Link to="/modal">
                <LoginButton>로그인</LoginButton>
              </Link>
            </div>
          </div>
        </div>
      </IntroPage>
      <CardWrapper>
        {[...Array(10).keys()].map(() => (
          <BackgroundCard>card</BackgroundCard>
        ))}
      </CardWrapper>
      <CardWrapper>
        {[...Array(10).keys()].map(() => (
          <BackgroundCard>card</BackgroundCard>
        ))}
      </CardWrapper>
      <CardWrapper>
        {[...Array(10).keys()].map(() => (
          <BackgroundCard>card</BackgroundCard>
        ))}
      </CardWrapper>
    </>
  );
}

export default Intro;
