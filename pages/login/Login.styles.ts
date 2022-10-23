import styled from "styled-components"

export const Container = styled.div`
  background-image: url("/images/login_background.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 100px 50px;
  background-position: 50% 50%;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 18px 0;
  max-width: 616px;
  font-weight: 400;
  font-size: 100px;
  line-height: 117px;
  color: #000000;

  span {
    font-size: 20px;
    line-height: 23px;
    color: rgba(0, 0, 0, 0.59);
  }
`
