import styled from 'styled-components/macro'

interface StyledTableProps {
  colNames: string[]
  rowData: any[]
  tableHighlightAttrType: string
  currHighlightedValue: string | null
  setCurrHighlightedVal: React.Dispatch<React.SetStateAction<null>>
}

const StyledTable = ({
  colNames,
  rowData,
  tableHighlightAttrType,
  currHighlightedValue,
  setCurrHighlightedVal
}: StyledTableProps) => {
  const header = colNames.map((colName, key) => {
    return (
      <th className="th" key={`${colName}${key}`}>
        {colName}
      </th>
    )
  })

  const row = rowData.map((rowDataObj, key) => {
    const cells = Object.keys(rowDataObj).map((objKey, key) => {
      return (
        <td className="td" key={`${objKey}${key}`}>
          {rowDataObj[objKey]}
        </td>
      )
    })

    const handleClick = () => {
      if (currHighlightedValue !== rowDataObj[tableHighlightAttrType]) {
        setCurrHighlightedVal(rowDataObj[tableHighlightAttrType])
      } else {
        setCurrHighlightedVal(null)
      }
    }

    return (
      <tr
        className={`tr ${
          rowDataObj[tableHighlightAttrType] === currHighlightedValue
            ? 'active'
            : ''
        }`}
        onClick={handleClick}
        key={`${key}${Object.keys(rowDataObj)[0]}`}
      >
        {cells}
      </tr>
    )
  })

  return (
    <TableStyleWrapper cellSpacing="0">
      <thead className="table__header">
        <tr className="table__row">{header}</tr>
      </thead>
      <tbody>{row}</tbody>
    </TableStyleWrapper>
  )
}

const TableStyleWrapper = styled.table`
  border: 1px solid var(--grey-highlight);
  border-radius: var(--border-radius-subtle);
  width: 100%;

  .table__header {
    background-color: var(--blue);
    color: var(--white);
  }

  .table__row {
    height: 50px;
    width: 100%;
  }

  .th {
    padding: var(--spacing-xs) var(--spacing-lg);
    text-align: left;
    font-weight: 600;
    font-size: var(--fz-md);
  }

  .td {
    color: var(--black);
    padding: var(--spacing-md) var(--spacing-lg);
    border-bottom: 1px solid var(--grey-highlight);
    text-align: left;
    font-weight: 500;
    font-size: var(--fz-md);
    cursor: pointer;
  }

  .tr.active {
    background-color: var(--row-highlight);
  }

  @media (max-width: 576px) {
    .th {
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .td {
      padding: var(--spacing-xs) var(--spacing-sm);
    }
  }
`
export default StyledTable
