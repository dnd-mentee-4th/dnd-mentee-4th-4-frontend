import React from 'react';
import {
  CardListContainer,
  CustomCard,
  CustomCardImg,
  CustomCardBody,
  CardContent,
  CardTitle,
  CardDuration,
  CardBrandInfo,
} from './styled/mobile';

const temp = Array(30).fill(1);
const tempCardContent = '지갑이 필요할땐 이구삼일';
const tempCardContent3 = '기간 : 2021.01.14 ~ 2021.01.28';

const MobileCardList = () => (
  <CardListContainer>
    {temp.map((_t, index) => (
      <CustomCard key={index}>
        <CustomCardImg src="http://placehold.it/475x122" alt="Card image cap" />
        <CustomCardBody>
          <CardContent>
            <CardTitle>{tempCardContent}</CardTitle>
            <CardDuration>{tempCardContent3}</CardDuration>
          </CardContent>
          <CardBrandInfo>스타일쉐어</CardBrandInfo>
        </CustomCardBody>
      </CustomCard>
    ))}
  </CardListContainer>
);

export default MobileCardList;
