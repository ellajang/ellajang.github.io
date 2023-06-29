import React, { useRef } from 'react'
import PostItem from './PostItem'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Keyboard, Pagination } from 'swiper'
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
  const swiperRef = useRef<SwiperCore | null>(null)

  const handlePrevButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const handleNextButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }
  return (
    <SwiperOutline>
      <PrevButton
        className="swiper-button-prev"
        onClick={handlePrevButtonClick}
      />
      <NextButton
        className="swiper-button-next"
        onClick={handleNextButtonClick}
      />
      <SwiperContainer>
        {
          <Global
            styles={css`
              .swiper-button-next::after,
              .swiper-button-prev::after {
                display: none;
              }
              .swiper-pagination-bullet {
                background: #98aeb9;
              }
              .swiper-horizontal {
                padding: 4px;
              }
            `}
          />
        }
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          keyboard
          pagination={{
            clickable: true,
            type: 'bullets',
          }}
          modules={[Keyboard, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          touchEventsTarget="wrapper"
          onSwiper={swiper => (swiperRef.current = swiper)}
          breakpoints={{
            680: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
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
    </SwiperOutline>
  )
}

export default CustomSwiper

const SwiperContainer = styled.div`
  width: 100%;
  margin: 10px 20px 0 40px;
  overflow: visible;
  position: relative;
  @media (max-width: 768px) {
    transform: translateX(80px);
  }
  @media (min-width: 768px) {
    transform: translateX(195px);
  }
`

const SwiperSlideStyled = styled(SwiperSlide)`
  width: 100%;
  padding: 20px 0 50px 1px;
`
const SwiperOutline = styled.div`
  position: relative;
`
const PrevButton = styled.div`
  position: absolute;
  top: 50%;
  left: 170px;
  width: 38px;
  height: 38px;
  z-index: 6;
  cursor: pointer;
  background: url('prevArrow.png') no-repeat;
  background-size: 90% auto;
  background-position: center;
  @media (max-width: 768px) {
    left: 71px;
  }
`

const NextButton = styled.div`
  position: absolute;
  top: 50%;
  right: -200px;
  width: 35px;
  height: 35px;
  z-index: 10;
  cursor: pointer;
  transform: translateX(90%);
  background: url('nextArrow.png') no-repeat;
  background-size: 100% auto;
  background-position: center;
  @media (max-width: 768px) {
    right: -130px;
  }
`
