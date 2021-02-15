import React, { useState, useEffect, createContext } from 'react';
import * as API from '../lib/APIs';
import { makeMenu } from '../lib/Util';

const MenuContext = createContext();

const categorynitialState = [{ id: 0, name: 'HOME' }];

const MenuProvider = ({ children }) => {
  const [categories, setCategories] = useState(categorynitialState);
  const [menu, setMenu] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState(0);

  const value = {
    categories,
    menu,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
  };

  useEffect(() => {
    const getMenu = async () => {
      let _categories = await API.getCategory();
      const _brands = await API.getBrand();

      _categories = [...categories, ..._categories];
      setCategories(_categories);
      setMenu(makeMenu(_categories, _brands));
    };
    getMenu();
  }, []);

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export default MenuContext;

export { MenuProvider };
