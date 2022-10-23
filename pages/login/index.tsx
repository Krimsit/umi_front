import type { NextPage } from "next"

import PageLayout from "../../components/layout"
import { LoginForm } from "../../components/modules/Login"

import { Container, Content, Title } from "./Login.styles"

const Login: NextPage = () => {
  return (
    <PageLayout title='Авторизация'>
      <Container>
        <Content>
          <Title>
            Добро пожаловать
            <span>Платформа дистанционного образования</span>
          </Title>
          <LoginForm />
        </Content>
      </Container>
    </PageLayout>
  )
}

export default Login
