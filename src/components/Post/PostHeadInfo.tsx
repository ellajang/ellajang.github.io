import React, { FunctionComponent } from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'

export type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
}

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = ({
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
    <PostHeadInfoWrapper>
      <ArrowCircleLeftIconDisplay>
        <ArrowCircleLeftIcon
          onClick={goBackPage}
          sx={{ fontSize: 45, color: 'white' }}
        />
      </ArrowCircleLeftIconDisplay>
      <Title>{title}</Title>
      <AllGrid container spacing={0}>
        <Grid color="white" container spacing={-130}>
          <div>{categories.join(' / ')}</div>
        </Grid>
        <Grid color="white">
          <div>{date}</div>
        </Grid>
      </AllGrid>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo

const Title = styled.div`
  overflow: hidden;
  overflow-wrap: break-word;
  margin-top: 130px;
  padding: 0px 0px 20px 470px;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 800;
  color: white;
`

const ArrowCircleLeftIconDisplay = styled.div`
  cursor: pointer;
  padding: 90px 0px 0px 470px;
`
const AllGrid = styled(Grid)`
  justify-content: center;
`
const PostHeadInfoWrapper = styled.div`
  place-items: center;
`
