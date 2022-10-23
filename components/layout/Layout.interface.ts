import { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
  withSidebar?: boolean
  title?: string
}

export interface MenuItemProps {
  title: string
  id: string
  isMainPage?: boolean
}

export interface StylesHeader {
  withSidebar: boolean
}

export interface StylesMenuItem {
  isMainPage?: boolean
  isActive?: boolean
}
