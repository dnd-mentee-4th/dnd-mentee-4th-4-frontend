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
  menu = {
    ...menu,
    HOME: [{ id: 0, name: 'ALL', category: 'HOME' }],
  };
  return menu;
};

const getCategoryName = (categories, selectedCategory) => {
  const categoryInfo = categories.filter(
    (category) => category.id === selectedCategory,
  );
  return categoryInfo[0] ? categoryInfo[0].name : null;
};

const getSelectedBrandInfo = (menu, selectedBrand) => {
  const menuArr = [];
  Object.values(menu).map((value) => menuArr.push(...value));
  const _selectedBrandInfo = menuArr.filter(
    (brand) => brand.id === selectedBrand,
  );
  return _selectedBrandInfo[0];
};
export { makeMenu, getCategoryName, getSelectedBrandInfo };
