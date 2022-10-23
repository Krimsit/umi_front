import { FC } from "react"
import { useRouter } from "next/router"
import NextLink from "next/link"

import { FormValues } from "./LoginForm.interface"

import {
  Container,
  Form,
  Title,
  Input,
  Field,
  Checkbox,
  FormFields,
  FormControls,
  Button,
  Link
} from "./LoginForm.styles"

const LoginForm: FC = () => {
  const router = useRouter()

  const onFinish = (values: unknown) => {
    const _values = values as FormValues

    router.push("/courses")
  }

  return (
    <Container>
      <Title>Вход</Title>
      <Form onFinish={onFinish}>
        <FormFields>
          <Field name='login'>
            <Input placeholder='Логин' />
          </Field>
          <Field name='password'>
            <Input type='password' placeholder='Пароль' />
          </Field>
        </FormFields>
        <FormControls>
          <Field name='remember' valuePropName='checked'>
            <Checkbox>Запомнить пароль</Checkbox>
          </Field>
          <Button htmlType='submit' type='primary'>
            Войти
          </Button>
          <Button htmlType='button'>Регистрация</Button>
          <NextLink href='#'>
            <Link>Востановить доступ</Link>
          </NextLink>
        </FormControls>
      </Form>
    </Container>
  )
}

export default LoginForm
