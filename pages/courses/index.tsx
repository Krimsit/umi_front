import type { NextPage } from "next"
import { DownOutlined } from "@ant-design/icons"
import { v4 as uuid } from "uuid"
import { Menu } from "antd"

import PageLayout from "../../components/layout"
import { Card } from "../../components/modules/Courses"

import { Container, Head, Title, Button, CardWrapper } from "./Courses.styles"

import { data } from "../../components/modules/Courses/data"

const Courses: NextPage = () => {
  return (
    <PageLayout title='Главная' withSidebar>
      <Container>
        <Head>
          <Title>Курсы</Title>
          <Button
            icon={<DownOutlined />}
            overlay={
              <Menu
                items={[
                  {
                    label: "Здесь доступные курсы)",
                    key: "1"
                  }
                ]}
              />
            }>
            Активные курсы
          </Button>
        </Head>
        {!!data?.cards?.length && (
          <CardWrapper>
            {data.cards.map((item) => (
              <Card key={`course_${uuid()}`} {...item} />
            ))}
          </CardWrapper>
        )}
      </Container>
    </PageLayout>
  )
}

export default Courses
