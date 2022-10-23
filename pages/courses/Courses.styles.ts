import styled from "styled-components"
import { Dropdown } from "antd"

export const Container = styled.div`
  padding: 34px 13px 0;
  max-height: 100%;
  height: 100%;
  overflow: hidden;
`

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #000000;
`

export const Button = styled(Dropdown.Button).attrs(() => ({
  trigger: ["click"]
}))`
  button {
    border: 1px solid rgba(25, 118, 210, 0.5);
    color: #1976d2;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.4px;

    &:hover,
    &:focus,
    &:focus-visible {
      box-shadow: none;
      color: #1976d2;
      border-color: rgba(25, 118, 210, 0.5);
    }

    &:nth-child(1) {
      border-bottom-left-radius: 4px;
      border-top-left-radius: 4px;
    }

    &:nth-child(2) {
      border-bottom-right-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
`

export const CardWrapper = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 43px 27px;
  height: 100%;
  max-height: 90%;
  padding: 1px 5px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ebebeb;
    border-radius: 5px;
  }
`
