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
}) => {
  return (
    <TabContainer>
      <StyledTabs value={selectedDetailCategory}>
        {Object.entries(detailCategoryList).map(([name, count]) => (
          <TabStyle
            component={Link}
            to={name === 'All' ? `/${basePath}` : `/${basePath}/${name}`}
            label={`${name}(${count})`}
            value={name}
            key={name}
          />
        ))}
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
  top: 10;
  background-color: white;
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    margin-left: 9px;
    font-size: 20px;
    top: 10;
  }
`
const TabStyle = styled(CustomTab)`
  font-size: 18px;
  margin-left: 40px;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-right: -14px;
    margin-left: 1px;
  }
`
const StyledTabs = styled(Tabs)`
  @media (max-width: 768px) {
    .MuiTabs-indicator {
      height: 1.5px;
      max-width: 10%;
      margin-left: 20px;
    }
  }
`
const Divider = styled.div`
  border-top: 0.1px solid #c3c7cc;
  width: calc(100% - 80px);
  margin-left: 40px;
  margin-top: 25px;
  @media (max-width: 768px) {
    width: calc(100% - 80px);
    margin-left: 40px;
    margin-top: 10px;
  }
`
