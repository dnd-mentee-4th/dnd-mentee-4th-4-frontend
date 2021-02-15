import React from 'react';
import {
  CardListContainer,
  CustomCard,
  CustomCardImg,
  CustomCardBody,
  CardContent,
  CardTitle,
  CardText,
  CardDuration,
  CardBrandInfo,
} from './styled/desktop';

const temp = Array(30).fill(1);
const tempCardContent = '지갑이 필요할땐 이구삼일';
const tempCardContent2 =
  '디자인도 예쁘고 가격 부담이 없는 갓성비 지갑 & 가방 브랜드 이구삼일';
const tempCardContent3 = '기간 : 2021.01.14 ~ 2021.01.28';

const CardList = () => (
  <CardListContainer>
    {temp.map((_t, index) => (
      <CustomCard key={index}>
        <CustomCardImg src="http://placehold.it/475x122" alt="Card image cap" />
        <CustomCardBody>
          <CardContent>
            <CardTitle>{tempCardContent}</CardTitle>
            <CardText>{tempCardContent2}</CardText>
            <CardDuration>{tempCardContent3}</CardDuration>
          </CardContent>
          <CardBrandInfo>스타일쉐어</CardBrandInfo>
        </CustomCardBody>
      </CustomCard>
    ))}
  </CardListContainer>
);

export default CardList;
