import styled from "styled-components"
import { Layout as BaseLayout, Input as BaseInput } from "antd"

import { StylesHeader, StylesMenuItem } from "./Layout.interface"

export const Layout = styled(BaseLayout)`
  height: 100%;
  width: 100%;
`

export const Logo = styled.div`
  position: relative;
  max-width: 158px;
  max-height: 72px;
  width: 100%;
  height: 100%;
`

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 157%;
  letter-spacing: 0.1px;
  color: rgba(0, 0, 0, 0.87);
`

export const Header = styled(BaseLayout.Header)<StylesHeader>`
  position: relative;
  width: 100%;
  height: 74px;
  padding: 0;
  background: #ffffff;
  box-shadow: ${({ withSidebar }) =>
    !withSidebar
      ? "-3px 8px 19px 3px rgba(0, 0, 0, 0.25)"
      : "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12);"};
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${User} {
    margin-right: ${({ withSidebar }) => (!withSidebar ? "65px" : "24px")};
  }
`

export const Main = styled(Layout.Content)`
  background-color: #fff;
`

export const Aside = styled(Layout.Sider)`
  background-color: #fff;
  box-shadow: 0 0 0 1px #e0e0e0;
`

export const Menu = styled.div`
  margin-top: 10px;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 1px 0;
`

export const MenuItem = styled.div<StylesMenuItem>`
  cursor: pointer;
  width: 100%;
  padding: 8px 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: ${({ isMainPage }) => isMainPage && "24px"};
  background: ${({ isActive }) =>
    isActive ? "rgba(25, 118, 210, 0.08)" : "transparent"};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(25, 118, 210, 0.08);
  }
`

export const Input = styled(BaseInput)`
  margin-left: 20px;
  max-width: 250px;
  border: 0;
  box-shadow: none;
`
