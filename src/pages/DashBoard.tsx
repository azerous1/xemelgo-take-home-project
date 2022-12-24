
import { useNavigate } from "react-router-dom"
import StyledTable from "../components/StyledTable"
import MOCK_DATA from "../mock-data/ItemData"
import { DASHBOARD_TABLE_COLS } from "../constants/Constants"
import StyledLink from "../components/StyledLink"
import PageHeadingTextWrapper from "../components/PageHeadingTextWrapper"
import { useState } from "react"
import { insertKey } from "../utils/Utils"

interface rowDataProps {
    id?: number,
    itemName: string,
    solution: string,
    location: string,
}

const DashBoard = () => {

  const navigate = useNavigate()
  const [currHighlightedVal, setCurrHighlightedVal] = useState(null)

  const rowData = MOCK_DATA.map(itemObj => {
    const handleNavigation = ()=> {
      navigate(`/dashboard/${itemObj.id}`)
    }

    const actionComponent = 
      <StyledLink onClick={handleNavigation}>
        See Details
      </StyledLink>

    const copy : rowDataProps = {...itemObj}
    delete copy.id

    const updatedRow = insertKey('action', actionComponent, copy, 3)

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
