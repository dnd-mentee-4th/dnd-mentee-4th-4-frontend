import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import { iconToggle, Logo, iconX } from '../../../constants/headerItem';

const MobileToggleWrapper = styled.div(
  tw`md:(hidden) fixed h-full w-full z-20`,
  css`
    background-color: rgba(0, 0, 0, 0.8);
  `,
);
const MobileToggleContainer = styled.div(
  tw`md:(hidden) transform -translate-y-1/2 top-1/2 left-px absolute z-20`,
  css`
    padding-left: 5%;
  `,
);

const ImageContainer = styled.img(tw`clickable w-7 h-7`);

const MobileMenu = styled.div(
  tw`h-full w-3/5 float-left z-20 md:(hidden)`,
  css`
    background-color: ${(props) => props.theme.background};
  `,
);

const MobileHeaderContainer = styled.div(
  tw`flex items-center px-10 text-white justify-between md:(hidden)`,
  css`
    background-color: #303030;
    height: 50px;
  `,
);

const MobileLogoContainer = styled.img(tw`items-center clickable w-8 h-8`);
const MobileCloseContainer = styled(ImageContainer)(tw`items-center`);

const MobileToggle = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <MobileToggleContainer>
        <ImageContainer
          src={iconToggle}
          onClick={() => {
            openMenu();
          }}
        />
      </MobileToggleContainer>
      {open && (
        <MobileToggleWrapper>
          <MobileMenu>
            <MobileHeaderContainer>
              <MobileLogoContainer src={Logo} />
              <MobileCloseContainer
                src={iconX}
                onClick={() => {
                  closeMenu();
                }}
              />
            </MobileHeaderContainer>
          </MobileMenu>
        </MobileToggleWrapper>
      )}
    </>
  );
};

export default MobileToggle;
