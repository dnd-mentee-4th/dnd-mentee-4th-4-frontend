import axios from 'axios';

const baseApiURL =
  'https://zzomsa.tk/api';

const getBrand = async () => {
  try {
    const brands = await axios.get(`${baseApiURL}/brands`);
    return brands.data;
  } catch (e) {
    return null;
  }
};

const getCategory = async () => {
  try {
    const categories = await axios.get(`${baseApiURL}/categories`);
    return categories.data;
  } catch (e) {
    return null;
  }
};

// const getLoginInfo = async () => {
//   try {
//     const loginInfo = await axios.get(`${baseApiURL}/auth/kakao`);
//     return loginInfo;
//   } catch (e) {
//     return null;
//   }
// }

export { getBrand, getCategory };
