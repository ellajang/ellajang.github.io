import React from 'react'

import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Header from 'components/Common/Header'

import PostHeadInfo from './PostHeadInfo'

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

type PostHeadProps = {
  thumbnail: IGatsbyImageData
  title: string
  date: string
  categories: string[]
}

const PostHead: React.FC<PostHeadProps> = ({
  title,
  date,
  categories,
  thumbnail,
}) => {
  return (
    <>
      <PostHeadWrapper>
        <Header />
        <BackgroundImage image={thumbnail} alt="thumbnail" />
        <PostHeadInfo title={title} date={date} categories={categories} />
      </PostHeadWrapper>
    </>
  )
}

export default PostHead

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 430px;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    height: 300px;
  }
`

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: 0;
  width: 100%;
  height: 100%;
  filter: brightness(0.25);
  @media (max-width: 768px) {
    height: 300px;
  }
`
