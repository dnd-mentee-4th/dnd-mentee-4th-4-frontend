import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Button, Collapse } from 'antd';

const { Panel } = Collapse;

const MobileToggleContainer = styled.div(
  tw`md:(hidden) transform -translate-y-1/2 top-1/2 left-px absolute z-20`,
  css`
    padding-left: 5%;
  `,
);
const ToggleImageContainer = styled.img(tw`items-center clickable w-5 h-5`);

const ImageContainer = styled.img(tw`clickable w-7 h-7`);

const MobileSidebarWrapper = styled.div(
  tw`md:(hidden) fixed h-full w-full z-20`,
  css`
    background-color: rgba(0, 0, 0, 0.8);
  `,
);

const MobileSidebar = styled.div(
  tw`h-full w-3/5 float-left z-20 md:(hidden)`,
  css`
    background-color: ${(props) => props.theme.background};
  `,
);

const MobileHeaderContainer = styled.div(
  tw`flex items-center px-10 text-white justify-between md:(hidden)`,
  css`
    background-color: #303030;
    height: 58px;
  `,
);

const MobileLogoContainer = styled.img(tw`items-center clickable w-8 h-8`);
const MobileCloseContainer = styled(ImageContainer)(tw`items-center`);
const MobileHR = styled.hr(
  tw`border-none mx-0 mb-2 mt-0 w-full`,
  css`
    background-color: ${(props) => props.theme.mobile_hr};
    height: 2px;
  `,
);

const MobileUserContainer = styled.div(
  tw`m-6`,
  css`
    font-size: 18px;
    color: ${(props) => props.theme.contrast_text};
  `,
);
const MobileUserContent = styled.p(tw`my-2`);
const MobileLogoutButton = styled(Button)(
  tw`mt-2 mb-4 border-none rounded-2xl float-right`,
  css`
    height: 25px;
    color: ${(props) => props.theme.button_text};
    background-color: ${(props) => props.theme.button_background};
  `,
);

const MobileStyledPanelHeader = styled(Panel)(
  tw`font-bold clickable py-4 pl-4 border-solid border-b`,
  css`
    border-color: ${(props) => props.theme.mobile_hr};

    .ant-collapse-header {
      width: 1px;
      font-size: 20px;
      outline: none;
      color: ${(props) => props.selected && props.theme.contrast_text};
    }
    .ant-collapse-content {
      width: 1px;
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

const MobileStyledPanelContent = styled.p(
  tw`font-semibold clickable py-3`,
  css`
    font-size: 14px;
    color: ${(props) => props.selected && props.theme.contrast_text};
  `,
);

export {
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
};
