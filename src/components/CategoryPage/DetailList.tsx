import styled from '@emotion/styled'
import { Tabs, Tab } from '@mui/material'
import { Link } from 'gatsby'
import { FunctionComponent } from 'react'

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

interface CustomTabProps extends React.ComponentPropsWithoutRef<typeof Tab> {
  to: string
  component: React.ElementType
}

const CustomTab: React.FC<CustomTabProps> = props => <Tab {...props} />

const DetailList: FunctionComponent<DetailListProps> = ({
  basePath,
  selectedDetailCategory,
  detailCategoryList,
  categoriesMap,
}) => {
  const labelFromValue = (value: string) => {
    const found = categoriesMap.find(category => category.value === value)
    return found ? found.label : value
  }
  return (
    <TabContainer>
      <StyledTabs value={selectedDetailCategory}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {Object.entries(detailCategoryList).map(([name, count]) => (
            <TabStyle
              component={Link}
              to={name === 'All' ? `/${basePath}` : `/${basePath}/${name}`}
              label={`${labelFromValue(name)}(${count})`}
              value={name}
              selected={name === selectedDetailCategory}
              key={name}
            />
          ))}
        </div>
      </StyledTabs>
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
  height: 260px;
  position: fixed;
  z-index: 1;
  font-size: 30px;
  background-color: white;
  margin: 10px 0 0 34px;
  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    font-size: 20px;
    margin: 10px 0px 0px 10px;
  }
`
const TabStyle = styled(CustomTab)<{ selected: boolean }>`
  font-size: 18px;
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  position: relative;
  &::after {
    content: '';
    display: ${props => (props.selected ? 'block' : 'none')};
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #000;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const StyledTabs = styled(Tabs)`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;
  & .Mui-selected {
    color: #000;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    justify-content: center;
    font-size: 12px;
    margin-right: -1px;
    margin-left: 2px;
  }
`
const Divider = styled.div`
  border-top: 0.1px solid #c3c7cc;
  width: calc(100% - 85px);
  margin: 20px 0 0 -5px;
  @media (max-width: 768px) {
    width: calc(100% - 80px);
    margin: 20px 0px 0px 0px;
  }
`
