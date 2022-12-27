import { useNavigate } from 'react-router-dom'
import StyledTable from '../components/StyledTable'
import { DASHBOARD_TABLE_COLS } from '../constants/Constants'
import StyledLink from '../components/StyledLink'
import PageHeadingTextWrapper from '../components/PageHeadingTextWrapper'
import { useState } from 'react'
import { insertKey } from '../utils/Utils'
import { ItemEntry } from '../type/Type'

interface DashBoardProps {
  itemData: ItemEntry[]
}

const DashBoard = ({ itemData }: DashBoardProps) => {
  const navigate = useNavigate()
  const [currHighlightedVal, setCurrHighlightedVal] = useState(null)

  const rowData = itemData.map((itemObj) => {
    const handleNavigation = () => {
      navigate(`/dashboard/${itemObj._id}`)
    }

    const actionComponent = (
      <StyledLink onClick={handleNavigation}>See Details</StyledLink>
    )

    const rowDataObj = {
      itemName: itemObj.itemName,
      solution: itemObj.itemSolutionType,
      location: itemObj.location
    }

    const updatedRow = insertKey('action', actionComponent, rowDataObj, 3)

    return updatedRow
  })

  return (
    <>
      <PageHeadingTextWrapper>
        <h1 className="heading">Item Table</h1>
      </PageHeadingTextWrapper>

      <StyledTable
        colNames={DASHBOARD_TABLE_COLS}
        rowData={rowData}
        tableHighlightAttrType={'solution'}
        currHighlightedValue={currHighlightedVal}
        setCurrHighlightedVal={setCurrHighlightedVal}
      />
    </>
  )
}

export default DashBoard
