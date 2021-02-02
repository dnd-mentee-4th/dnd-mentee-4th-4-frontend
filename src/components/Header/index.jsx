import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import tw from 'twin.macro';

import { LOGO, CATEGORY, TOOL, SUB_CATEGORY } from '../../constants/menu';


const slideDown = keyframes`
  from { height: 0; }
  to { height: auto } // 265px
`;

const HeaderContainer = styled.div(
  tw`flex justify-between items-center`,
  css`
    margin: 1.5rem 12.5% 0 12.5%;
  `,
);

const HeaderBorder = styled.hr(tw`border-b border-gray-50 border-opacity-25`);
const Category = styled.div(tw`flex items-center justify-between`);
const ToolBar = styled.div(tw`flex items-center justify-between`);

const MenuWrapper = styled.div(tw`mr-20 clickable`);
const Menu = styled.div(
  tw`hover:border-b-2 hover:border-black`,
  css`
    font-size: 28px;
  `,
);

const SubCategoryContainer = styled.div(
  tw`
    text-gray-300 overflow-hidden flex flex-col bg-white rounded-xl
    absolute
  `,
  css`
    /* animation: ${slideDown} 0.5s ease; */
    width: 220px;
    height: 250px;
  `,
);

const SubCategory = styled.div(
  tw`
    clickable mt-4 ml-4
    hover:text-black last:mb-2
  `,
  css`
    font-size: 20px;
  `,
);

const Header = () => {
  const [openSubCategory, setOpenSubCategory] = useState(false);

  const toggleSubPane = () => {
    setOpenSubCategory((prev) => !prev);
  };

  const renderSubCategory = (menu) => {
    const subCategory = SUB_CATEGORY[menu];
    return (
      openSubCategory && (
        <SubCategoryContainer>
          {subCategory.map((sub, index) => (
            <SubCategory key={`${menu}_${sub}_${index}`}>
              {`${sub}`}
            </SubCategory>
          ))}
        </SubCategoryContainer>
      )
    );
  };
  return (
    <>
      <HeaderContainer>
        {LOGO}
        <Category>
          {CATEGORY.map((menu, index) => (
            <MenuWrapper
              key={index}
              onMouseEnter={() => toggleSubPane(menu)}
              onMouseLeave={() => toggleSubPane(menu)}
            >
              <Menu>{menu}</Menu>
              {renderSubCategory(menu)}
            </MenuWrapper>
          ))}
        </Category>
        <ToolBar>
          {TOOL.map((tool, index) => (
            <MenuWrapper key={index}>
              <Menu>{tool}</Menu>
            </MenuWrapper>
          ))}
        </ToolBar>
      </HeaderContainer>
      <HeaderBorder />
    </>
  );
};

export default Header;
