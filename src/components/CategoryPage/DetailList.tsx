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

const DetailList: FunctionComponent<DetailListProps> = ({
  basePath,
  selectedDetailCategory,
  detailCategoryList,
}) => {
  return (
    <TabContainer>
      <Tabs value={selectedDetailCategory}>
        {Object.entries(detailCategoryList).map(([name, count]) => (
          <Tab
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
  height: 25vh;
`
