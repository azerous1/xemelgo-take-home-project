import React, { useEffect } from "react"
import styled from 'styled-components/macro';
import { useNavigate, useParams } from "react-router-dom"
import StyledButtonOutlined from "../components/StyledButtonOutlined"
import LOCATION_ACTION_HISTORY_MOCK_DATA from "../mock-data/LocationAndHistoryData";
import { ACTION_HISTORY_TABLE_HEADER, LOCATION_HISTORY_TABLE_HEADER } from "../constant/const";
import { StyledTable, tableHeaderFactory, tableRowFactory } from "../components/StyledTable";
import ActionPanel from "../components/ActionPanel";
import StyledButton from "../components/StyledButton";
import StyledGrid from "../components/StyledGrid";
import PageHeadingTextWrapper from "../components/PageHeadingTextWrapper";


const Detail = () => {
  // const { id } = useParams()
  const navigate = useNavigate()

  // TODO: handle async data fetching
  useEffect(() => {

  })

  const handleClickBackToDashboard = () => {
    navigate('/dashboard')
  }

const locationHistoryTableHeader = tableHeaderFactory(LOCATION_HISTORY_TABLE_HEADER)
const locationHistoryTableRows = tableRowFactory(LOCATION_ACTION_HISTORY_MOCK_DATA.location)

const actionHistoryTableHeader = tableHeaderFactory(ACTION_HISTORY_TABLE_HEADER)
const actionHistoryTableRows = tableRowFactory(LOCATION_ACTION_HISTORY_MOCK_DATA.action)

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

  return (
    <>
      <PageHeadingTextWrapper>
        <h1 className='heading'>Item Detail</h1>
      </PageHeadingTextWrapper>

      <StyledGrid>
        <ActionPanel>
          <div className="heading__text__wrapper">
            <h1 className="panel__header__text">Item Name:</h1>
            <h1 className="item__name__text">Item 3</h1>
          </div>
          <div className="action__btn__wrapper">
            <StyledButton>
              Consume
            </StyledButton>
          </div>
          <div className="item__property__text__wrapper">
            <h2>Solution</h2>
            <p className='val__text'>Inventory</p >
          </div>
          <div className="item__property__text__wrapper">
            <h2>Current Location</h2>
            <p className='val__text'>Storage 1</p>
          </div>
        </ActionPanel>
        <div>
          <TableTitleWrapper>
            <h1 className='table__title'>Location History</h1>
            <span className='italic'>Last 6 locations</span>
          </TableTitleWrapper>
          <StyledTable cellSpacing="0">
              <thead className='table__header'>
                <tr className='table__row'>
                  {locationHistoryTableHeader}
                </tr>
              </thead>
              <tbody>
                {locationHistoryTableRows}
              </tbody>
            </StyledTable>
        
            <TableTitleWrapper>
              <h1 className='table__title'>Action History</h1>
              <span className='italic'>Last 6 actions</span>
            </TableTitleWrapper>
            <StyledTable cellSpacing="0">
              <thead className='table__header'>
                <tr className='table__row'>
                  {actionHistoryTableHeader}
                </tr>
              </thead>
              <tbody>
                {actionHistoryTableRows}
              </tbody>
            </StyledTable>
        </div>
      </StyledGrid>

      
      <BackBtnWrapper>
        <StyledButtonOutlined onClick={handleClickBackToDashboard}>
          Back
        </StyledButtonOutlined>
      </BackBtnWrapper>
    </>
  )
}

export default Detail
