import React, { FunctionComponent, useContext, useState } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { ThemeContext } from 'hooks/useTheme'

export type DetailListProps = {
  basePath: string
  selectedDetailCategory: string
  detailCategoryList: {
    [key: string]: number
  }
  categoriesMap: {
    value: string
    label: string
  }[]
}

interface CustomTabProps {
  to: string
  label: string
  selected: boolean
  theme: string
  onClick: () => void
}

const CustomTab: FunctionComponent<CustomTabProps> = ({
  to,
  label,
  selected,
  theme,
  onClick,
}) => {
  return (
    <TabStyle to={to} selected={selected} onClick={onClick} theme={theme}>
      {label}
    </TabStyle>
  )
}

const DetailList: FunctionComponent<DetailListProps> = ({
  basePath,
  selectedDetailCategory,
  detailCategoryList,
  categoriesMap,
}) => {
  const [selectedTab, setSelectedTab] = useState(selectedDetailCategory)

  const handleTabClick = (value: string) => {
    setSelectedTab(value)
  }

  const labelFromValue = (value: string) => {
    const found = categoriesMap.find(category => category.value === value)
    return found ? found.label : value
  }
  const { theme } = useContext(ThemeContext)
  return (
    <TabContainer theme={theme}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {Object.entries(detailCategoryList).map(([name, count]) => (
          <CustomTab
            to={name === 'All' ? `/${basePath}` : `/${basePath}/${name}`}
            label={`${labelFromValue(name)}(${count})`}
            selected={name === selectedTab}
            onClick={() => handleTabClick(name)}
            key={name}
            theme={theme}
          />
        ))}
      </div>
      <Divider />
    </TabContainer>
  )
}

export default DetailList

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 230px;
  position: fixed;
  z-index: 1;
  font-size: 30px;
  background-color: ${props =>
    props.theme === 'light' ? '#f7fafc' : '#030d11ca'};
  color: ${props => (props.theme === 'light' ? '#0b1118' : '#f7fafc')};
  margin: 10px 0 0 0px;
  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    font-size: 20px;
    margin: 20px 0px 0px 0px;
  }
`

const TabStyle = styled(Link)<{ selected: boolean; theme: string }>`
  font-size: 18px;
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  position: relative;
  margin: 0px 30px 10px 43px;
  &::after {
    content: '';
    display: ${({ selected }) => (selected ? 'block' : 'none')};
    position: absolute;
    top: 30px;
    transform: translateX(-4%);
    height: 3px;
    width: 110%;
    background-color: ${props =>
      props.theme === 'light' ? '#000' : '#f7fafc'};
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const Divider = styled.div`
  border-top: 0.1px solid #c3c7cc;
  width: calc(100% - 80px);
  margin: 27px 0 -12px 40px;
  @media (max-width: 768px) {
    width: calc(100% - 80px);
    margin: 20px 0px 0px 20px;
  }
`
