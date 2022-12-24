
import React from 'react';
import Select, {
  } from "react-select"
import { STORAGE_LOCATIONS_NAME } from '../constants/Constants'
import { LocationSelectOptionType } from '../type/Type';

interface LocationSelectProps {
    location: LocationSelectOptionType,
    setLocation: React.Dispatch<React.SetStateAction<LocationSelectOptionType>>
}

const LocationSelect = ({location, setLocation} : LocationSelectProps) => {

    const options = STORAGE_LOCATIONS_NAME.map(name => {
        return {
            label: name,
            value: name
        }
    })

    const handleSelectChange = (newLocation: LocationSelectOptionType | null) => {
        if (newLocation) {
            setLocation(newLocation)
        }
    }

    return <Select 
        placeholder={"Select Location"}
        value={location}
        onChange={handleSelectChange}
        options={options} 
        isMulti={false}/>
}


export default LocationSelect
