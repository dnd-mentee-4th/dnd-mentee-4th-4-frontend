/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import axios from 'axios';

const baseApiURL = 'https://temp/api/';

const getBrand = async () => {
  try {
    return await brandTemp;
    // return await axios.get(`${baseApiURL}/brands`);
  } catch (e) {
    return null;
  }
};

const getCategory = async () => {
  try {
    return await categoryTemp;
    // return await axios.get(`${baseApiURL}/categories`);
  } catch (e) {
    return null;
  }
};


const brandTemp = [
  {
    id: 1,
    name: '쿠팡',
    category: 'Commerce',
  },
  {
    id: 2,
    name: '티몬',
    category: 'Commerce',
  },
  {
    id: 3,
    name: '위메프',
    category: 'Commerce',
  },
  {
    id: 4,
    name: 'SSG',
    category: 'Commerce',
  },
  {
    id: 5,
    name: '11번가',
    category: 'Commerce',
  },
  {
    id: 6,
    name: 'G마켓',
    category: 'Commerce',
  },
  {
    id: 7,
    name: '샤오미',
    category: 'APPLIANCE',
  },
  {
    id: 8,
    name: 'LG베스트샵',
    category: 'APPLIANCE',
  },
  {
    id: 9,
    name: '삼성디지털프라자',
    category: 'APPLIANCE',
  },
  {
    id: 10,
    name: '하이마트',
    category: 'APPLIANCE',
  },
  {
    id: 11,
    name: '본죽',
    category: 'FOOD',
  },
  {
    id: 12,
    name: '엽기떡볶이',
    category: 'FOOD',
  },
  {
    id: 13,
    name: '트레이더스',
    category: 'FOOD',
  },
  {
    id: 14,
    name: '피자헛',
    category: 'FOOD',
  },
  {
    id: 15,
    name: '롯데리아',
    category: 'FOOD',
  },
  {
    id: 16,
    name: '베스킨라빈스',
    category: 'FOOD',
  },
  {
    id: 17,
    name: '올리브영',
    category: 'BEAUTY',
  },
  {
    id: 18,
    name: '롭스',
    category: 'BEAUTY',
  },
  {
    id: 19,
    name: '랄라블라',
    category: 'BEAUTY',
  },
  {
    id: 20,
    name: '이니스프리',
    category: 'BEAUTY',
  },
  {
    id: 21,
    name: '아리따움',
    category: 'BEAUTY',
  },
  {
    id: 22,
    name: '에뛰드하우스',
    category: 'BEAUTY',
  },
  {
    id: 23,
    name: '무신사',
    category: 'CLOTHES',
  },
];

const categoryTemp = [
  {
    id: 1,
    name: 'Commerce',
  },
  {
    id: 2,
    name: 'CLOTHES',
  },
  {
    id: 3,
    name: 'BEAUTY',
  },
  {
    id: 4,
    name: 'FOOD',
  },
  {
    id: 5,
    name: 'APPLIANCE',
  },
];

export { getBrand, getCategory };
