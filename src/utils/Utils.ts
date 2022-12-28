import { MONTH_ABBREVIATIONS } from '../constants/Constants'
import {
  ActionHistoryEntry,
  ActionHistoryTableRow,
  LocationHistoryEntry,
  LocationHistoryTableRow
} from '../type/Type'

export function insertKey(key: string, value: any, obj: any, idx: number) {
  if (idx === Object.keys(obj).length) {
    const copy = { ...obj }
    copy[key] = value
    return copy
  }

  const res = Object.keys(obj).reduce((ac: any, a, i) => {
    if (i === idx) ac[key] = value
    ac[a] = obj[a]
    return ac
  }, {})

  return res
}

export function formatLocationHistoryRow(
  locationHistoryData: LocationHistoryEntry[]
): LocationHistoryTableRow[] {
  return locationHistoryData.map((entry) => {
    return {
      location: entry.location,
      timestamp: formatTimestamp(entry.createdAt)
    }
  })
}

export function formatActionHistoryRow(
  actionHistory: ActionHistoryEntry[]
): ActionHistoryTableRow[] {
  return actionHistory.map((entry) => {
    return {
      userName: entry.userName,
      actionName: entry.action,
      timestamp: formatTimestamp(entry.createdAt)
    }
  })
}

export function formatTimestamp(timestamp: string) {
  const date = new Date(timestamp)
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  let minutesStr = minutes < 10 ? '0'+ minutes : minutes;
  const month = MONTH_ABBREVIATIONS[date.getMonth()]
  const day = date.getDate()
  let strTime = hours + ':' + minutesStr + ' ' + ampm + ' ' + month + ' ' + day;


  return strTime
}

export function getActionType(solutionType: string) {
  switch (solutionType) {
    case 'Asset':
      // code block
      return 'Missing'
    case 'Inventory':
      // code block
      return 'Consumed'
    case 'WO':
      return 'Complete'
  }
  return ''
}

export function getLocationSelectPrompt(solutionType: string) {
  switch (solutionType) {
    case 'Asset':
      // code block
      return 'Move to:'
    case 'Inventory':
      // code block
      return 'Scanned at:'
    case 'WO':
      return 'Received at:'
  }
  return ''
}
