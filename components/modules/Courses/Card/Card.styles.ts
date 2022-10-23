import styled from "styled-components"
import { Progress as BaseProgress } from "antd"

export const Container = styled.div`
  width: 100%;
  height: 310px;
  background: #ffffff;
  box-shadow: 0 0 0 1px #e0e0e0;
  border-radius: 4px;
`

export const Image = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`

export const Content = styled.div`
  padding: 16px;
  display: grid;
  grid-template-areas: "title progress" "description progress";
  grid-template-columns: auto 67px;
  grid-template-rows: 50% 50%;
`

export const Title = styled.a`
  grid-area: title;
  display: flex;
  align-items: center;
  gap: 0 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 157%;
  letter-spacing: 0.1px;
  color: #1976d2;

  div {
    width: 4px;
    height: 4px;
    background-color: #1976d2;
    border-radius: 100%;
  }
`

export const Description = styled.p`
  grid-area: description;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);
`

export const Progress = styled(BaseProgress)`
  grid-area: progress;
  width: 100%;
  height: 67px;

  .ant-progress-inner {
    width: 100% !important;
    height: 100% !important;
  }

  .ant-progress-text {
    font-weight: 400;
    font-size: 12px;
    line-height: 166%;
    letter-spacing: 0.4px;
    color: rgba(0, 0, 0, 0.6);
  }
`
