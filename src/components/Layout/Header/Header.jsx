import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'react-router-dom';

import ColorContext from '../../../context/ColorContext';
import MenuContext from '../../../context/MenuContext';

import {
  Logo,
  DesktopHeaderTools,
  MobileHeaderTools,
  Moon,
  Sun,
} from '../../../constants/headerItem';
import MobileToggle from './MobileToggle';

const HeaderWrapper = styled.div(tw`block fixed w-full z-50`);
const HeaderContainer = styled.div(
  tw`flex items-center text-white md:(justify-between) justify-end`,
  css`
    background-color: #303030;
    height: 50px;
    @media (min-width: 768px) {
      padding: 0 12.5%;
    }
    @media (max-width: 767px) {
      padding: 0 5%;
    }
  `,
);

const ImageContainer = styled.img(tw`items-center clickable w-5 h-5`);
const LogoContainer = styled.img(
  tw`items-center clickable w-8 h-8 md:(relative left-auto) absolute left-2/4 transform -translate-x-2/4`,
);

const ToolImageContainer = styled(ImageContainer)(tw`md:(px-5) px-3 z-10`);
const ToolBar = styled.div(tw`flex items-center justify-end`);

const SearchBoxContainer = styled.div(
  tw`md:(flex justify-end w-48 h-7 mx-5 clickable border-solid border-2 rounded-2xl pt-0) pt-1 items-center`,
  css`
    border-color: #646464;
  `,
);

const StyledLink = styled(Link)(tw`flex items-center`);

const MobileToolbarContainer = styled.div(
  tw`md:(hidden) flex items-center justify-end`,
);
const DeskTopToolbarContainer = styled.div(
  tw`md:(flex items-center justify-end) hidden`,
);

const Header = () => {
  const { theme, setTheme } = useContext(ColorContext);
  const { setSelectedCategory, setSelectedBrand } = useContext(MenuContext);

  const handleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <HeaderWrapper>
      <MobileToggle />
      <HeaderContainer>
        <StyledLink to="/ALL">
          <LogoContainer
            src={Logo}
            onClick={() => {
              setSelectedCategory(0);
              setSelectedBrand(0);
            }}
          />
        </StyledLink>
        <ToolBar>
          <DeskTopToolbarContainer>
            <SearchBoxContainer key="Search">
              <ToolImageContainer src={DesktopHeaderTools.Search} />
            </SearchBoxContainer>
            <ToolImageContainer key="MyPage" src={DesktopHeaderTools.MyPage} />
          </DeskTopToolbarContainer>

          <MobileToolbarContainer>
            <ToolImageContainer key="Search" src={MobileHeaderTools.Search} />
            <StyledLink to="/mobile/favorite">
              <ToolImageContainer key="Heart" src={MobileHeaderTools.Heart} />
            </StyledLink>
          </MobileToolbarContainer>

          {theme === 'light' ? (
            <ToolImageContainer src={Moon} onClick={handleTheme} />
          ) : (
            <ToolImageContainer src={Sun} onClick={handleTheme} />
          )}
        </ToolBar>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
