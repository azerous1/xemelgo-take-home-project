
import styled from 'styled-components/macro';

const StyledTable = styled.table`
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
    padding: var(--spacing-xs)  var(--spacing-lg);
    text-align: left;
    font-weight: 600;
    font-size: var(--fz-md);
  }

  .td {
    color: var(--black);
    padding: var(--spacing-md)  var(--spacing-lg);
    border-bottom: 1px solid var(--grey-highlight);
    text-align: left;
    font-weight: 500;
    font-size: var(--fz-md);
    cursor: pointer;
  }

  @media (max-width: 576px) {
    .th {
      padding: var(--spacing-xs)  var(--spacing-sm);
    }

  .td {
      padding: var(--spacing-xs)  var(--spacing-sm);
    }
  }
`
const tableHeaderFactory = (colNamesData: string[]) => {
  return colNamesData.map(colName => {
    return (
      <th className='th'>{colName}</th>
    )
  })
} 

const tableRowFactory = (rowData: any[]) => {
  return rowData.map(rowDataObj => {
    const cells = Object.keys(rowDataObj).map(key => {
      return <td className='td'>{rowDataObj[key]}</td>
    })

    return (
      <tr className='tr'>
        {cells}
      </tr>
    )
  })
} 
  
export { StyledTable, tableHeaderFactory, tableRowFactory }
