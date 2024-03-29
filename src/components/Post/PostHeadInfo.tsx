import React from 'react'

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'

export type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}

const PostHeadInfo: React.FC<PostHeadInfoProps> = ({
  title,
  date,
  categories,
}) => {
  const goBackPage = () => {
    if (typeof window !== 'undefined') {
      window.history.back()
    }
  }

  return (
    <>
      <PostHeadInfoWrapper>
        <ArrowCircleLeftIconDisplay>
          <ArrowCircleLeftIcon
            onClick={goBackPage}
            sx={{ fontSize: 45, color: 'white' }}
          />
        </ArrowCircleLeftIconDisplay>
        <Title>{title}</Title>
        <AllGrid>
          <Grid color="white" container spacing={-130}>
            <div>{categories.join(' / ')}</div>
          </Grid>
          <Grid color="white">
            <div>{date}</div>
          </Grid>
        </AllGrid>
      </PostHeadInfoWrapper>
    </>
  )
}

export default PostHeadInfo

const Title = styled.div`
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: 120px;
  max-width: 1180px;
  padding: 0px 0px 20px 470px;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 39px;
  font-weight: 800;
  color: white;
  @media (max-width: 1168px) {
    font-size: 30px;
    margin-top: 80px;
    padding: 0px 0px 20px 0px;
  }
`

const ArrowCircleLeftIconDisplay = styled.div`
  cursor: pointer;
  padding: 120px 0px 0px 470px;
  @media (max-width: 1168px) {
    font-size: 30px;
    margin-top: 80px;
    padding: 0px 0px 0px 0px;
  }
`
const AllGrid = styled.div`
  display: flex;
  padding: 0px 0px 0px 150px;
  justify-content: space-evenly;
  @media (max-width: 1168px) {
    font-size: 11px;
    padding: 0px 20px 0px 0px;
    display: flex;
    justify-content: space-between;
  }
`
const PostHeadInfoWrapper = styled.div`
  padding: 0px 150px 0px 0px;
  place-items: center;
  position: relative;
  z-index: 1;
  @media (max-width: 1168px) {
    font-size: 11px;
    margin-top: 20px;
    padding: 0px 0px 0px 20px;
  }
`
