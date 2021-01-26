import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const HeaderContainer = styled.div(
  tw`flex justify-between items-center`,
  css`
    margin: 1.5rem 12.5% 0 12.5%;
  `,
);
// const Logo = styled.div(tw`flex items-center justify-between`);
const PrimaryMenu = styled.div(tw`flex items-center justify-between`);
const SecondaryMenu = styled.div(tw`flex items-center justify-between`);

const MenuWrapper = styled.div(tw`mr-12`);
const Menu = styled.div(
  css`
    font-size: 28px;
  `,
);

// const LOGO = ['LOGO'];
const MENU = ['LOGO','Clothes', 'Beauty', 'Food', 'Appliance', 'Commerce'];
const TOOL = ['A', 'B', 'C'];

const Header = () => (
  <HeaderContainer>
    <PrimaryMenu>
      {MENU.map((menu, index) => (
        <MenuWrapper key={index}>
          <Menu>{menu}</Menu>
        </MenuWrapper>
      ))}
    </PrimaryMenu>
    <SecondaryMenu>
      {TOOL.map((tool, index) => (
        <MenuWrapper key={index}>
          <Menu>{tool}</Menu>
        </MenuWrapper>
      ))}
    </SecondaryMenu>
  </HeaderContainer>
);

export default Header;
