import { FC } from "react"
import Image from "next/image"
import Head from "next/head"
import { useRouter } from "next/router"
import { v4 as uuid } from "uuid"
import { SearchOutlined } from "@ant-design/icons"

import { UserIcon } from "../icons"

import { LayoutProps } from "./Layout.interface"

import {
  Layout,
  Header,
  Logo,
  User,
  Aside,
  Main,
  Menu,
  MenuItem,
  Input
} from "./Layout.styles"

import { menu } from "./data"

const PageLayout: FC<LayoutProps> = ({ children, withSidebar, title }) => {
  const router = useRouter()

  const handleChangePage = (id: string): Promise<boolean> =>
    router.push(`/${id}`)

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {!withSidebar ? (
        <Layout>
          <Header withSidebar={false}>
            <Logo>
              <Image
                src='/images/logo.png'
                alt='Logo'
                layout='fill'
                objectFit='contain'
              />
            </Logo>
            <User>
              Вход в систему не выполнен
              <UserIcon />
            </User>
          </Header>
          <Main>{children}</Main>
        </Layout>
      ) : (
        <Layout hasSider>
          <Aside width={257}>
            <Logo>
              <Image
                src='/images/logo.png'
                alt='Logo'
                layout='fill'
                objectFit='contain'
              />
            </Logo>
            <Menu>
              {menu.map((item) => (
                <MenuItem
                  key={`menu_item_${uuid()}`}
                  isMainPage={item.isMainPage}
                  isActive={router.asPath === item.id}
                  onClick={() => handleChangePage(item.id)}>
                  {item.title}
                </MenuItem>
              ))}
            </Menu>
          </Aside>
          <Layout>
            <Header withSidebar>
              <Input
                size='large'
                placeholder='Поиск...'
                prefix={<SearchOutlined />}
              />
              <User>
                Зайцев Артем Альбертович
                <UserIcon type='withBG' />
              </User>
            </Header>
            <Main>{children}</Main>
          </Layout>
        </Layout>
      )}
    </>
  )
}

export default PageLayout
