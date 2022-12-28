import React from 'react'
import Select from 'react-select'
import APIStore from '../apistore/APIStore'
import { STORAGE_LOCATIONS_NAME } from '../constants/Constants'
import { LocationSelectOptionType } from '../type/Type'
import { ItemEntry } from '../type/Type'

interface LocationSelectProps {
  location: LocationSelectOptionType
  itemId: string
  setLocation: React.Dispatch<React.SetStateAction<LocationSelectOptionType>>
  setItemData: React.Dispatch<React.SetStateAction<ItemEntry[]>>
  userName: string
  actionName: string
}

const LocationSelect = ({
  location,
  setItemData,
  setLocation,
  itemId,
  userName,
  actionName
}: LocationSelectProps) => {
  const apiStore = new APIStore()

  const options = STORAGE_LOCATIONS_NAME.map((name) => {
    return {
      label: name,
      value: name
    }
  })

  const handleSelectChange = async (
    newLocation: LocationSelectOptionType | null
  ) => {
    if (newLocation) {
      await apiStore.insertLocationHistory(itemId, newLocation.value)
      await apiStore.insertActionHistory(itemId, userName, actionName)
      const updatedItemData = await apiStore.getAllItems()
      setItemData(updatedItemData)
      setLocation(newLocation)
    }
  }

  return (
    <Select
      placeholder={'Select Location'}
      value={location}
      onChange={handleSelectChange}
      options={options}
      isMulti={false}
    />
  )
}

export default LocationSelect
