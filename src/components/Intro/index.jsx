import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

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

function Intro() {
  const Intromessage = {
    fontSize: 'xx-large',
    fontWeight: 'bold',
    marginTop: '18%',
    marginBottom: '5%',
    textAlign: 'center',
  };
  const subBtn = {
    display: 'flex',
    marginTop: '5%',
  };
  const home = {
    flex: '1',
    textAlign: 'right',
    marginRight: '5%',
    marginTop: '7px',
    textDecoration: 'none',
  };
  const login = {
    flex: '1',
  };

  const loginbtn = {
    width: '13%',
    height: '35px',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer ',
    backgroundColor: '#06FFD2',
    outline: 'none',
  };
  return (
    <>
      <IntroPage>
        <div className="IntroWrapper">
          <div className="mainTitle" style={Intromessage}>
            현명한 소비자를 위한
            <br />
            여행자들의 똑똑한 쇼핑 공간
          </div>
          <div className="subTitle" style={{ textAlign: 'center' }}>
            2021년부터 <strong>쫌,싸</strong> 와 함께 기획전을 둘러보고 남들보다
            싸게 구매하고 자랑하자!
          </div>
          <div className="subBtn" style={subBtn}>
            <div className="home" style={home}>
              <Link
                to="/main"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                둘러보기
              </Link>
            </div>
            <div style={login}>
              <Link to="/modal">
                <button type="button" style={loginbtn}>
                  로그인
                </button>
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
