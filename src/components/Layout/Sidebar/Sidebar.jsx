import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Collapse } from 'antd';
import tw from 'twin.macro';

import MenuContext from '../../../context/MenuContext';

const { Panel } = Collapse;

const SidebarWrapper = styled.div(tw``, css``);

const SidebarContainer = styled.div(
  tw`hidden md:(h-screen block w-1/4 pt-10 z-10 border-solid border-r float-left)`,
  css`
    border-color: ${(props) => props.theme.vertical_border};
  `,
);

const StyledPanelHeader = styled(Panel)(
  tw`font-bold clickable py-2`,
  css`
    .ant-collapse-header {
      width: 1px;
      font-size: 28px;
      @media (min-width: 1280px) {
        margin: 0 auto;
      }
      @media (min-width: 824px) and (max-width: 1279px) {
        margin: 0 4rem;
      }
      margin: 0 1rem;
      outline: none;
      &:hover {
        color: ${(props) => props.theme.contrast_text};
      }
    }
    .ant-collapse-content {
      width: 1px;
      @media (min-width: 1280px) {
        margin: 0 auto;
      }
      @media (min-width: 824px) and (max-width: 1279px) {
        margin: 0 4rem;
      }
      margin: 0 1rem;
    }
    .ant-motion-collapse {
      transition: height 0.3s ease;
      overflow: hidden;
    }
    .ant-collapse-content-hidden {
      display: none;
    }
  `,
);

const StyledPanelContent = styled.p(
  tw`font-semibold clickable py-3`,
  css`
    font-size: 22px;
    &:hover {
      color: ${(props) => props.theme.contrast_text};
    }
  `,
);

const Sidebar = () => {
  const { categories, menu } = useContext(MenuContext);
  return (
    <SidebarWrapper>
      <SidebarContainer>
        {categories && menu && (
          <Collapse ghost accordion>
            {Object.entries(categories).map((categoryArr) => {
              const category = categoryArr[1];
              const categotyName = category.name;
              const categotyId = category.id;
              return (
                <StyledPanelHeader
                  header={categotyName}
                  key={categotyId}
                  showArrow={false}
                >
                  {menu[categotyName] &&
                    menu[categotyName].map((brand) => (
                      <StyledPanelContent key={brand.id}>
                        {brand.name}
                      </StyledPanelContent>
                    ))}
                </StyledPanelHeader>
              );
            })}
          </Collapse>
        )}
      </SidebarContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;
