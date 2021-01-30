import React from 'react';
import styled from 'styled-components';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import tw from 'twin.macro';

const CardListContainer = styled.div(
  tw`flex flex-wrap my-20 mx-16 items-center justify-center`,
);

const temp = Array(10).fill(1);

const CustomCard = styled(Card)(tw`flex m-4 flex-col bg-gray-50 rounded-xl`);
const CustomCardImg = styled(CardImg)(tw`w-full`);
const CustomCardBody = styled(CardBody)(tw`m-4`);
const CardList = () => (
  <CardListContainer>
    {temp.map((t, index) => (
      <CustomCard key={index}>
        <CustomCardImg
          top
          src="https://reactstrap.github.io/assets/318x180.svg"
          alt="Card image cap"
        />
        <CustomCardBody>
          <CardTitle tag="h5">Card Title</CardTitle>
          <CardText>
            This is a wider card with supporting text...
          </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CustomCardBody>
      </CustomCard>
    ))}
  </CardListContainer>
);

export default CardList;
