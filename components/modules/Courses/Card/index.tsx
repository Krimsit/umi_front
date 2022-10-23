import { FC } from "react"
import NextLink from "next/link"
import NextImage from "next/image"

import { CardProps } from "./Card.interface"

import {
  Container,
  Image,
  Content,
  Title,
  Description,
  Progress
} from "./Card.styles"

const Card: FC<CardProps> = ({ teacher, lesson, progress, description }) => {
  return (
    <Container>
      <Image>
        <NextImage
          src='/images/courses/not_image.png'
          alt=''
          layout='fill'
          objectFit='cover'
        />
      </Image>
      <Content>
        <NextLink href='#'>
          <Title>
            <span>{teacher}</span>
            <div />
            <span>{lesson}</span>
          </Title>
        </NextLink>
        <Description>{description}</Description>
        <Progress type='circle' percent={progress} strokeColor='#1976D2' />
      </Content>
    </Container>
  )
}

export default Card
