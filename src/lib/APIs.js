import axios from 'axios';

const baseApiURL =
  'https://zzomsa.tk';

const getBrand = async () => {
  try {
    const brands = await axios.get(`${baseApiURL}/api/brands`);
    return brands.data;
  } catch (e) {
    return null;
  }
};

const getCategory = async () => {
  try {
    const categories = await axios.get(`${baseApiURL}/api/categories`);
    return categories.data;
  } catch (e) {
    return null;
  }
};

const postLoginInfo = async (profileId, profileNickName) => {
  const profile = {
    profile_id: profileId.toString(),
    nickname: profileNickName
  }
  try {
    return await axios.post(`${baseApiURL}/login`,profile);
  } catch (e) {
    return null;
  }
}


const getPromotions = async (brandId) => {

  try {
    return await axios.get(`${baseApiURL}/api/promotions/${brandId}`);
  } catch (e) {
    return null;
  }
}

export { getBrand, getCategory, postLoginInfo, getPromotions };
