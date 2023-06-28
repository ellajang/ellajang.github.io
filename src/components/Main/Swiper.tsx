import React from 'react'
import PostItem from './PostItem'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

SwiperCore.use([Autoplay, Navigation])

type PostType = {
  title: string
  description: string
  url: string
  date: string
  categories: string[]
  thumbnail: {
    publicURL: string
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

type SwiperProps = {
  posts: PostType[]
}
const CustomSwiper: React.FC<SwiperProps> = ({ posts }) => {
  return (
    <SwiperContainer>
      {/* <Global
        styles={css`
          .swiper-button-prev {
            position: absolute;
            top: 50%;
            left: 1px;
            width: 10px;
            height: 40px;
            z-index: 10;
            cursor: pointer;
          }
          .swiper-button-next {
            position: absolute;
            top: 50%;
            right: 1px;
            width: 17px;
            height: 40px;
            z-index: 10;
            cursor: pointer;
            transform: translateX(100%);
          }
        `}
      /> */}
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {posts.map((post, index) => (
          <SwiperSlideStyled key={index}>
            <PostItem
              title={post.title}
              date={post.date}
              categories={post.categories}
              summary={post.description}
              thumbnail={post.thumbnail}
              link={post.url}
            />
          </SwiperSlideStyled>
        ))}
      </Swiper>
    </SwiperContainer>
  )
}

export default CustomSwiper

const SwiperContainer = styled.div`
  width: 100%;
  margin: 10px 0 0 65px;
  overflow: visible;
  position: relative;
`

const SwiperSlideStyled = styled(SwiperSlide)`
  width: 100%;
  padding: 20px 0 20px 0;
`
