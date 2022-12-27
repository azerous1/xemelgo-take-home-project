type UserSelectOptionType = {
  label: string
  value: string
  role: string
}

type LocationSelectOptionType = {
  label: string
  value: string
} | null

type ItemEntry = {
  _id: string
  itemName: string
  itemSolutionType: string
  location: string
  locationHistory: string[]
  actionHistory: string[]
  __v: number
}

type LocationHistoryEntry = {
  _id: string
  location: string
  createdAt: string
  updatedAt: string
  __v: number
}

type ActionHistoryEntry = {
  _id: string
  userName: string
  action: string
  createdAt: string
  updatedAt: string
  __v: number
}

type LocationHistoryTableRow = {
  location: string
  timestamp: string
}

type ActionHistoryTableRow = {
  userName: string
  actionName: string
  timestamp: string
}

export type {
  UserSelectOptionType,
  LocationSelectOptionType,
  ItemEntry,
  LocationHistoryEntry,
  ActionHistoryEntry,
  LocationHistoryTableRow,
  ActionHistoryTableRow
}
