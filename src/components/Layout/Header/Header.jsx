import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import ColorContext from '../../../context/ColorContext';

import { Logo, HeaderTools } from '../../../constants/headerItem';

const HeaderWrapper = styled.div(tw`block fixed w-full z-50`);

const HeaderContainer = styled.div(
  tw`flex items-center justify-between pt-40 text-white`,
  css`
    background-color: #303030;
    height: 50px;
    padding: 0 12.5%;
  `,
);

const ImageContainer = styled.img(tw`items-center clickable w-5 h-5`, css``);

const ToolImageContainer = styled(ImageContainer)(tw`px-5`);
const ToolBar = styled.div(tw`flex items-center justify-end`);

const SearchBoxContainer = styled.div(
  tw`flex justify-end w-48 h-7 mx-5 clickable border-solid border-2 rounded-2xl items-center`,
  css`
    border-color: #646464;
  `,
);

const Header = () => {
  const { theme, setTheme } = useContext(ColorContext);

  const temp = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <ImageContainer src={Logo} />
        <ToolBar>
          {Object.entries(HeaderTools).map(([key, value]) => {
            if (key === 'Search')
              return (
                <SearchBoxContainer key={key}>
                  <ToolImageContainer src={value} />
                </SearchBoxContainer>
              );
            return <ToolImageContainer key={key} src={value} />;
          })}
          <button type="button" onClick={temp}>
            Click
          </button>
        </ToolBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
