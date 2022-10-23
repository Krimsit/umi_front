import styled from "styled-components"
import {
  Form as BaseForm,
  Input as BaseInput,
  Checkbox as BaseCheckbox,
  Button as BaseButton
} from "antd"

export const Container = styled.div`
  width: 395px;
  height: 490px;
  background: #ffffff;
  box-shadow: 1px 2px 22px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  padding: 38px 25px 25px;
`

export const Title = styled.p`
  font-weight: 400;
  font-size: 50px;
  line-height: 59px;
  color: #000000;
  margin-bottom: 39px;
`

export const Form = styled(BaseForm)``

export const Input = styled(BaseInput)`
  padding: 5px 0;
  color: #000000;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);

  &::placeholder {
    color: rgba(0, 0, 0, 0.6);
  }

  &:focus,
  &:focus-visible,
  &:hover {
    border: 0;
    border-bottom: 1px solid #000000;
    box-shadow: none;
  }
`

export const Checkbox = styled(BaseCheckbox)`
  margin-top: -20px;

  .ant-checkbox {
    top: 0.3em;
    border-radius: 3px;
    border: 1px #666666 solid;

    .ant-checkbox-input:focus + .ant-checkbox-inner,
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner {
      border-color: #000;
    }

    .ant-checkbox-inner {
      border-color: #000;
    }
  }

  .ant-checkbox-checked {
    &::after,
    &:hover {
      border-color: #000;
    }

    .ant-checkbox-inner {
      background-color: transparent;
      border-color: #000;

      &::after {
        border-color: #000;
      }
    }
  }
`

export const Field = styled(Form.Item)`
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 0;
`

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px 0;
`

export const FormControls = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled(BaseButton)`
  width: 100%;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14),
    0px 1px 5px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background: #e0e0e0;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
  margin-top: 10px;
  text-transform: uppercase;

  &:hover {
    border-color: transparent;
    background-color: #e0e0e0;
    color: rgba(0, 0, 0, 0.87);
  }

  &.ant-btn-primary {
    margin-top: 45px;
    height: 46px;
    background: #1976d2;
    color: #fff;

    &:hover {
      border-color: transparent;
      background-color: #1976d2;
    }
  }
`

export const Link = styled.a`
  margin-top: 15px;
  font-weight: 500;
  font-size: 13px;
  line-height: 15px;
  color: #226cca;
`
