import { MenuItemProps } from "./Layout.interface"

export const menu: MenuItemProps[] = [
  {
    title: "Главная",
    id: "/",
    isMainPage: true
  },
  {
    title: "Курсы",
    id: "/courses"
  },
  {
    title: "Рассписание",
    id: "/schedule"
  },
  {
    title: "Статистика",
    id: "/statistics"
  },
  {
    title: "Личный кабинет",
    id: "/account"
  },
  {
    title: "Мессенджер",
    id: "/chats"
  },
  {
    title: "Настройки",
    id: "/settings"
  }
]
