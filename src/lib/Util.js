/* eslint-disable import/prefer-default-export */
const makeMenu = (categories, brands) => {
  let menu = {};
  categories.map((category) => {
    const brandArray = brands.filter(
      (brand) => brand.category === category.name,
    );
    menu = {
      ...menu,
      [category.name]: brandArray,
    };
    return null;
  });

  return menu;
};

export { makeMenu };
