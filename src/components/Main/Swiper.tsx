import React, { useContext, useRef } from 'react'

import { IGatsbyImageData } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Keyboard, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { ThemeContext } from 'hooks/useTheme'

import PostItem from './PostItem'
import prevArrow from '../../types/prevArrow.png'
import nextArrow from '../../types/nextArrow.png'
import nextArrowDark from '../../types/rightDark.png'
import prevArrowDark from '../../types/leftDark.png'

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
  const theme = useContext(ThemeContext)
  return (
    <SwiperOutline>
      <PrevButton
        className="swiper-button-prev"
        onClick={handlePrevButtonClick}
        theme={theme}
      />
      <NextButton
        className="swiper-button-next"
        onClick={handleNextButtonClick}
        theme={theme}
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
            320: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            700: {
              slidesPerView: 3,
            },
            1300: {
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
  margin: 30px auto;
  overflow: visible;
  position: relative;
  justify-content: center;
  display: flex;
  align-items: center;
  transform: translateX(50px);
  @media (max-width: 768px) {
    transform: translateX(40px);
    margin: 10px auto;
  }
`

const SwiperSlideStyled = styled(SwiperSlide)`
  width: 100%;
  padding: 0 0 50px 0;
`
const SwiperOutline = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

const PrevButton = styled('div')(() => {
  const theme = useContext(ThemeContext)
  return {
    position: 'absolute',
    top: '50%',
    left: '-20px',
    width: '38px',
    height: '38px',
    zIndex: '6',
    cursor: 'pointer',
    background:
      theme.theme === 'light' ? `url(${prevArrow})` : `url(${prevArrowDark})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '90%',
    backgroundPosition: 'center',
    ' @media (max-width: 1300px)': {
      left: '10px',
    },
    ' @media (max-width: 768px)': {
      left: '11px',
      width: '28px',
      height: '28px',
    },
  }
})

const NextButton = styled('div')(() => {
  const theme = useContext(ThemeContext)
  return {
    position: 'absolute',
    top: '50%',
    right: '-25px',
    width: '35px',
    height: '35px',
    zIndex: '10',
    cursor: 'pointer',
    transform: 'translateX(90%)',
    background:
      theme.theme === 'light' ? `url(${nextArrow})` : `url(${nextArrowDark})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    ' @media (max-width: 1300px)': {
      right: '-40px',
    },
    ' @media (max-width: 1600px)': {
      right: '-70px',
    },
    ' @media (max-width: 768px)': {
      right: '-33px',
      width: '25px',
      height: '25px',
    },
  }
})
