import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { useNavigate, useParams } from 'react-router-dom'
import StyledButtonOutlined from '../components/StyledButtonOutlined'
import {
  ACTION_HISTORY_TABLE_HEADER,
  LOCATION_HISTORY_TABLE_HEADER
} from '../constants/Constants'
import StyledTable from '../components/StyledTable'
import ActionPanel from '../components/ActionPanel'
import StyledButton from '../components/StyledButton'
import StyledGrid from '../components/StyledGrid'
import PageHeadingTextWrapper from '../components/PageHeadingTextWrapper'
import LocationSelect from '../components/LocationSelect'
import {
  ActionHistoryTableRow,
  ItemEntry,
  LocationHistoryTableRow,
  LocationSelectOptionType
} from '../type/Type'
import APIStore from '../apistore/APIStore'
import {
  formatActionHistoryRow,
  formatLocationHistoryRow,
  getActionType,
  getLocationSelectPrompt
} from '../utils/Utils'
import LoadingSpinner from '../components/LoadingSpinner'

interface DetailPageProps {
  itemData: ItemEntry[]
  setItemData: React.Dispatch<React.SetStateAction<ItemEntry[]>>
  userName: string
}

const TableTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;

    .table__title {
      color: var(--black);
      font-size: var(--fz-lg);
    }

    .italic {
      color: var(--grey);
      font-style: italic;
      font-size: var(--fz-sm);
      margin-left: var(--spacing-xs);
    }
  `

  const BackBtnWrapper = styled.div`
    margin: var(--spacing-xl) 0;
`

const Detail = ({ itemData, setItemData, userName }: DetailPageProps) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const currItem = itemData.find((x: ItemEntry) => x._id === id) as ItemEntry

  const [currLocationHighlighted, setCurrLocationHighlighted] = useState(null)
  const [currActionHighlighted, setCurrActionHighlighted] = useState(null)
  const [selectedLocation, setSelectedLocation] =
    useState<LocationSelectOptionType>(null)
  const [locationHistory, setLocationHistory] = useState<
    LocationHistoryTableRow[]
  >([])
  const [actionHistory, setActionHistory] = useState<ActionHistoryTableRow[]>(
    []
  )

  useEffect(() => {
    console.log('here')
    if (!itemData || !currItem) {
      navigate('/dashboard')
    }
  })

  useEffect(() => {
    
    const apiStore = new APIStore()
    const fetchLocationAndActionHistory = async () => {
      const locationHistoryRes = await apiStore.getLocationHistory(
        currItem.locationHistory
      )
      console.log(locationHistoryRes)
      const formatedLocationHistoryData =
        formatLocationHistoryRow(locationHistoryRes)
      setLocationHistory(formatedLocationHistoryData)

      const actionHistoryRes = await apiStore.getActionHistory(
        currItem.actionHistory
      )
      const formattedActionHistory = formatActionHistoryRow(actionHistoryRes)
      setActionHistory(formattedActionHistory)
    }
    if (currItem) {
      fetchLocationAndActionHistory()
    }
  }, [currItem])

  const handleClickBackToDashboard = () => {
    navigate('/dashboard')
  }


  const handleActionButtonClick = async () => {
    const apiStore = new APIStore()
    if (currItem) {
      await apiStore.insertActionHistory(currItem._id, userName, getActionType(currItem.itemSolutionType))
      const updatedItemData = await apiStore.getAllItems()
      console.log('new item data: ', updatedItemData)
      setItemData(updatedItemData)
    }
  }

  return (
    <>
      {(!itemData || !currItem ) ? <LoadingSpinner /> : 
      <>
      <PageHeadingTextWrapper>
        <h1 className="heading">Item Detail</h1>
      </PageHeadingTextWrapper>

      <StyledGrid>
        <ActionPanel>
          <div className="heading__text__wrapper">
            <h1 className="panel__header__text">Item Name:</h1>
            <h1 className="item__name__text">{currItem.itemName}</h1>
          </div>
          <div className="action__btn__wrapper">
            <StyledButton onClick={handleActionButtonClick}>
              {getActionType(currItem.itemSolutionType)}
            </StyledButton>
          </div>
          <div className="item__property__text__wrapper">
            <h2>Solution</h2>
            <p className="val__text">{currItem.itemSolutionType}</p>
          </div>
          <div className="item__property__text__wrapper">
            <h2>Location</h2>
            <p className="val__text">{currItem.location}</p>
          </div>

          <p>{getLocationSelectPrompt(currItem.itemSolutionType)}</p>
          <LocationSelect
            location={selectedLocation}
            setLocation={setSelectedLocation}
            itemId={currItem._id}
            setItemData={setItemData}
          />
        </ActionPanel>

        <div>
          <TableTitleWrapper>
            <h1 className="table__title">Location History</h1>
            <span className="italic">Last 6 locations</span>
          </TableTitleWrapper>

          <StyledTable
            colNames={LOCATION_HISTORY_TABLE_HEADER}
            rowData={locationHistory}
            tableHighlightAttrType={'location'}
            currHighlightedValue={currLocationHighlighted}
            setCurrHighlightedVal={setCurrLocationHighlighted}
          />

          <TableTitleWrapper>
            <h1 className="table__title">Action History</h1>
            <span className="italic">Last 6 actions</span>
          </TableTitleWrapper>

          <StyledTable
            colNames={ACTION_HISTORY_TABLE_HEADER}
            rowData={actionHistory}
            tableHighlightAttrType={'userName'}
            currHighlightedValue={currActionHighlighted}
            setCurrHighlightedVal={setCurrActionHighlighted}
          />
        </div>
      </StyledGrid>

      <BackBtnWrapper>
        <StyledButtonOutlined onClick={handleClickBackToDashboard}>
          Back
        </StyledButtonOutlined>
      </BackBtnWrapper>
      </>
      }
    </>
  )
}

export default Detail
