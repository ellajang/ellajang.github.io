import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/Common/GlobalStyle'
import { Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'

const NotFoundPage: FunctionComponent = function () {
  return (
    <NotFoundPageWrapper>
      <GlobalStyle />
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: 200 }} color="disabled" />
      <NotFoundText>404</NotFoundText>

      <NotFoundDescription>
        <DescriptionColor>찾을 수 없는 페이지</DescriptionColor>
        입니다. <br />
        다른 콘텐츠를 보러 가보시겠어요?
      </NotFoundDescription>
      <br />
      <Button href="/" variant="outlined" size="large" startIcon={<HomeIcon />}>
        메인으로
      </Button>
    </NotFoundPageWrapper>
  )
}

export default NotFoundPage

const NotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const NotFoundText = styled.div`
  font-size: 110px;
  font-weight: 740;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  @media (max-width: 768px) {
    font-size: 100px;
  }
`

const DescriptionColor = styled.span`
  font-size: 25px;
  text-align: center;
  color: #1976d2;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const NotFoundDescription = styled.span`
  font-size: 25px;
  text-align: center;
  line-height: 1.3;
  font-weight: 350;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`
