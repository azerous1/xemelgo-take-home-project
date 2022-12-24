import { useNavigate } from "react-router-dom"
import { StyledTable, tableHeaderFactory } from "../components/StyledTable"
import MOCK_DATA from "../mock-data/ItemData"
import { DASHBOARD_TABLE_COLS } from "../constant/const"
import StyledLink from "../components/StyledLink"
import PageHeadingTextWrapper from "../components/PageHeadingTextWrapper"

const DashBoard = () => {

  const navigate = useNavigate()

  const tableCols = tableHeaderFactory(DASHBOARD_TABLE_COLS)

  const tableRows = MOCK_DATA.map(itemObj => {
    const handleNavigation = ()=> {
      navigate(`/dashboard/${itemObj.id}`)
    }
    
    return (
      <tr className='tr'>
        <td className='td'>{itemObj.itemName}</td>
        <td className='td'>{itemObj.solution}</td>
        <td className='td'>{itemObj.location}</td>
        <td className='td'>
          <StyledLink onClick={handleNavigation}>
            See Details
          </StyledLink>
        </td>
      </tr>
    )
  })

  return (
    <>
      <PageHeadingTextWrapper>
        <h1 className="heading">Item Table</h1>
      </PageHeadingTextWrapper>
      <StyledTable cellSpacing="0">
        <thead className='table__header'>
          <tr className='table__row'>
            {tableCols}
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </StyledTable>
    </>
  )
}

export default DashBoard
