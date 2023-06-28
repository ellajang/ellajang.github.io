import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PostItem from './PostItem'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import styled from '@emotion/styled'
/* import PauseIcon from '@mui/icons-material/Pause'; */

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

type SliderProps = {
  posts: PostType[]
}
const CustomSlider: React.FC<SliderProps> = ({ posts }) => {
  // 중복된 게시물을 제외하고 최근 6개의 게시물 선택
  const uniquePosts = posts
    .filter(
      (post, index, self) =>
        index === self.findIndex(p => p.title === post.title),
    )
    .slice(0, 6)

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <ArrowRightIcon />,
    prevArrow: <ArrowLeftIcon />,
  }

  return (
    <div>
      <StyledSlider {...settings}>
        {uniquePosts.map((post, index) => (
          <SlideWrapper key={index}>
            <PostItem
              title={post.title}
              date={post.date}
              categories={post.categories}
              summary={post.description}
              thumbnail={post.thumbnail}
              link={post.url}
            />
          </SlideWrapper>
        ))}
      </StyledSlider>
    </div>
  )
}

export default CustomSlider

const StyledSlider = styled(Slider)`
  width: 100%;
  .slick-list {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /*.slick-slide div {
  } 
  .slick-dots {
    .slick-active {
      button::before {
        color: #c1c1c1;
      }
    }
    button::before {
      color: #e9e9e9;
    }
  } */
`
const SlideWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 10px;
`
