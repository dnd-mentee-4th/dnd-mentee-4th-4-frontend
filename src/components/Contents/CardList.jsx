import React, { useContext } from 'react';
import MenuContext from '../../context/MenuContext';

import {} from '../../lib/Util';
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

const DURATION = '기간 :';
const NONDURATION = '홈페이지 참조';

const checkDuration = (startAt, endAt) => {
  if (startAt && endAt) {
    return `${DURATION} ${startAt} ~ ${endAt}`;
  }
  return NONDURATION;
};

const CardList = (props) => {
  const { selectedBrandInfo } = props;
  const { promotions } = useContext(MenuContext);
  return (
    <CardListContainer>
      {promotions &&
        promotions.data &&
        promotions.data.map((promotion) => {
          const {
            id,
            description,
            startAt,
            endAt,
            image,
            title,
            url,
          } = promotion;

          const duration = checkDuration(startAt, endAt);

          return (
            <CustomCard key={id}>
              <CustomCardImg
                src={image}
                alt="Card image cap"
                onClick={() => window.open(url, '_blank')}
              />
              <CustomCardBody>
                <CardContent>
                  <CardTitle>{title}</CardTitle>
                  <CardText>{description}</CardText>
                  <CardDuration>{duration}</CardDuration>
                </CardContent>
                <CardBrandInfo>{selectedBrandInfo.name}</CardBrandInfo>
              </CustomCardBody>
            </CustomCard>
          );
        })}
    </CardListContainer>
  );
};

export default CardList;
