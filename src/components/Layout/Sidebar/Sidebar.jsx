import React, { useContext } from 'react';
import { Collapse } from 'antd';

import MenuContext from '../../../context/MenuContext';
import {
  SidebarContainer,
  StyledPanelHeader,
  StyledPanelContent,
} from './styled';

const Sidebar = () => {
  const {
    categories,
    menu,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
  } = useContext(MenuContext);

  return (
    <SidebarContainer>
      {categories && menu && (
        <Collapse
          ghost
          accordion
          onChange={(eventId) =>
            setSelectedCategory(Number.parseInt(eventId, 10))}
        >
          {Object.entries(categories).map((categoryArr) => {
            const category = categoryArr[1];
            const categotyName = category.name;
            const categotyId = category.id;
            return (
              <StyledPanelHeader
                header={categotyName}
                key={categotyId}
                selected={selectedCategory === categotyId}
                showArrow={false}
              >
                {menu[categotyName] &&
                  menu[categotyName].map((brand) => (
                    <StyledPanelContent
                      key={brand.id}
                      onClick={() => setSelectedBrand(brand.id)}
                      selected={selectedBrand === brand.id}
                    >
                      {brand.name}
                    </StyledPanelContent>
                  ))}
              </StyledPanelHeader>
            );
          })}
        </Collapse>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
