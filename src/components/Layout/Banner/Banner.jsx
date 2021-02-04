import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const tempImageSrc = [
  'http://placehold.it/1280x320',
  'http://placehold.it/1280x321',
  'http://placehold.it/1280x322',
];

const BannerContainer = styled.div(
  css`
    .carousel .thumbs-wrapper {
      margin: 0 !important;
    }
  `,
);

const BannerImage = styled.img(
  tw`w-full`,
  css`
    height: 320px;
    margin-top: 50px;
  `,
);
const Banner = () => (
  <BannerContainer>
    <Carousel autoPlay infiniteLoop stopOnHover>
      {tempImageSrc.map((imageSrc) => (
        <BannerImage src={imageSrc} />
      ))}
    </Carousel>
  </BannerContainer>
);
export default Banner;
