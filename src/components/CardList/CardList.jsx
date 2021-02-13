/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Card, CardImg, CardBody } from 'reactstrap';
import tw from 'twin.macro';

import MenuContext from '../../context/MenuContext';

const temp = Array(30).fill(1);
const tempCardContent = '지갑이 필요할땐 이구삼일';
const tempCardContent2 =
  '디자인도 예쁘고 가격 부담이 없는 갓성비 지갑 & 가방 브랜드 이구삼일';
const tempCardContent3 = '기간 : 2021.01.14 ~ 2021.01.28';

const CardListContainer = styled.div(tw`flow-root my-20 mx-16 items-center`);
const CustomCard = styled(Card)(
  tw`flex m-8 flex-row rounded-xl overflow-hidden border border-solid`,
  css`
    border-color: ${(props) => props.theme.card_border};
  `,
);
const CustomCardImg = styled(CardImg)(
  tw`w-3/5`,
  css`
  `,
);
const CustomCardBody = styled(CardBody)(
  tw`w-2/5`,
  css`
    background-color: ${(props) => props.theme.card_bg};
  `,
);

const CardContent = styled.div(
  tw`px-10 pt-10 mb-6 truncate`,
  css`
    white-space: break-spaces;
  `,
);
const CardTitle = styled.p(
  tw`pb-4 font-bold`,
  css`
    font-size: 22px;
    color: ${(props) => props.theme.contrast_text};
  `,
);
const CardText = styled.p(
  tw``,
  css`
    font-size: 16px;
  `,
);
const CardDuration = styled.p(
  tw`mt-4`,
  css`
    font-size: 16px;
    color: ${(props) => props.theme.contrast_text};
  `,
);
const CardBrandInfo = styled.div(
  tw`font-bold bg-black text-center py-4`,
  css`
    font-size: 20px;
    color: ${(props) => props.theme.white};
  `,
);
const CardList = () => {
  const { selectedCategory, selectedBrand } = useContext(MenuContext);
  return (
    <CardListContainer>
      {temp.map((t, index) => (
        <CustomCard key={index}>
          <CustomCardImg
            src="http://placehold.it/475x122"
            alt="Card image cap"
          />
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
};

export default CardList;
