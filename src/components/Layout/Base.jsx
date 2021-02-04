import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Header from './Header';
import Banner from './Banner';
import Sidebar from './Sidebar';
import FavoriteBar from './FavoriteBar';

const Wrapper = styled.div(tw`relative w-full truncate`);

const Base = () => (
  <Wrapper>
    <Header />
    <Banner />
    <Sidebar />
    <FavoriteBar />
  </Wrapper>
);

export default Base;
