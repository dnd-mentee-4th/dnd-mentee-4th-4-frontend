import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

const FAVORITEHEADER = 'FAVORITE';
const FavoriteBarContainer = styled.div(
  tw`hidden md:(block float-right w-1/4 h-screen pt-10 z-10 border-solid border-l text-center)`,
  css`border-color: ${(props) => props.theme.vertical_border};`
);

const FavoriteBarHeader = styled.div(
  tw`font-bold clickable`,
  css`
    font-size: 28px;
  `,
);

const FavoriteBar = () => (
  <FavoriteBarContainer>
    <FavoriteBarHeader>{FAVORITEHEADER}</FavoriteBarHeader>
  </FavoriteBarContainer>
);

export default FavoriteBar;
