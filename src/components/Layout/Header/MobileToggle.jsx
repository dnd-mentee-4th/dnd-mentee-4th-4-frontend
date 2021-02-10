import React, { useState, useContext } from 'react';
import { Collapse } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import { iconToggle, Logo, iconX } from '../../../constants/headerItem';
import MenuContext from '../../../context/MenuContext';

import {
  MobileSidebarWrapper,
  MobileToggleContainer,
  ToggleImageContainer,
  MobileSidebar,
  MobileHeaderContainer,
  MobileLogoContainer,
  MobileCloseContainer,
  MobileHR,
  MobileUserContainer,
  MobileUserContent,
  MobileLogoutButton,
  MobileStyledPanelHeader,
  MobileStyledPanelContent,
} from './mobileStyled';

const tempUserContent1 = '이진수님,';
const tempUserContent2 = '쫌.싸에 오신 걸 환영합니다.';
const LogoutContent = '로그아웃';

const MobileToggle = () => {
  const {
    categories,
    menu,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
  } = useContext(MenuContext);

  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  return (
    <>
      <MobileToggleContainer>
        <ToggleImageContainer
          src={iconToggle}
          onClick={() => {
            openMenu();
          }}
        />
      </MobileToggleContainer>
      {open && (
        <MobileSidebarWrapper>
          <MobileSidebar>
            <MobileHeaderContainer>
              <MobileLogoContainer src={Logo} />
              <MobileCloseContainer
                src={iconX}
                onClick={() => {
                  closeMenu();
                }}
              />
            </MobileHeaderContainer>
            <MobileHR />
            <MobileUserContainer>
              <MobileUserContent>{tempUserContent1}</MobileUserContent>
              <MobileUserContent>{tempUserContent2}</MobileUserContent>
              <MobileLogoutButton>{LogoutContent}</MobileLogoutButton>
            </MobileUserContainer>
            <MobileHR />
            <Collapse
              accordion
              expandIconPosition="right"
              onChange={(eventId) =>
                setSelectedCategory(Number.parseInt(eventId, 10))}
            >
              {Object.entries(categories).map((categoryArr) => {
                const category = categoryArr[1];
                const categotyName = category.name;
                const categotyId = category.id;
                return (
                  <MobileStyledPanelHeader
                    header={categotyName}
                    key={categotyId}
                    selected={selectedCategory === categotyId}
                    extra={genExtra()}
                  >
                    {menu[categotyName] &&
                      menu[categotyName].map((brand) => (
                        <MobileStyledPanelContent
                          key={brand.id}
                          onClick={() => setSelectedBrand(brand.id)}
                          selected={selectedBrand === brand.id}
                        >
                          {brand.name}
                        </MobileStyledPanelContent>
                      ))}
                  </MobileStyledPanelHeader>
                );
              })}
            </Collapse>
          </MobileSidebar>
        </MobileSidebarWrapper>
      )}
    </>
  );
};

export default MobileToggle;
