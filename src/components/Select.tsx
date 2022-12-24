
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Select from 'react-select'
import { USERS_NAME } from '../constants/Constants'
import ValueType from "react-select";

const UserSelect = () => {
    const UserSelectOptionWrapper = styled.div`
        display: flex;
        flex-direction: column;
        text-align: left;
        line-height: var(--spacing-sm);

        .role {
            color: var(--grey-highlight)
        }
  `
    const [selectedOption, setSelectedOption] = useState(null);

    const options = USERS_NAME.map(name => {
        return {
            value: name,
            label: name
        }
    })
    
    // const handleSelectChange = (newOption: ValueType<{ value: string; label: string; } | null>) => {
    //     setSelectedOption(newOption)
    //     console.log(selectedOption)
    // }

    return <Select 
        defaultValue={selectedOption}
        options={options} 
        isMulti={false}/>
}


export default UserSelect
