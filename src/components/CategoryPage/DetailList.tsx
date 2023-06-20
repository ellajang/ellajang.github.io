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
      <Tabs value={selectedDetailCategory}>
        {Object.entries(detailCategoryList).map(([name, count]) => (
          <TabStyle
            component={Link}
            to={name === 'All' ? `/${basePath}` : `/${basePath}/${name}`}
            label={`${name}(${count})`}
            value={name}
            key={name}
          />
        ))}
      </Tabs>
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
  margin-left: 40px;
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    margin-left: 9px;
    font-size: 20px;
  }
`
const TabStyle = styled(CustomTab)`
  font-size: 18px;
  margin-right: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-right: -14px;
  }
`
