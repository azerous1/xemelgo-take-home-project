import React from 'react'
import styled from 'styled-components/macro'
import Select from 'react-select'
import { USERS } from '../constants/Constants'
import { UserSelectOptionType } from '../type/Type'

interface UserSelectProps {
  user: UserSelectOptionType
  setUser: React.Dispatch<React.SetStateAction<UserSelectOptionType>>
}

const UserSelect = ({ user, setUser }: UserSelectProps) => {
  const UserSelectOptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 0;

    .role {
      color: var(--grey);
      font-size: var(--fz-xs);
      margin-top: var(--spacing-xxs);
    }
  `

  const options = USERS.map((userObj) => {
    return {
      label: userObj.name,
      value: userObj.name,
      role: userObj.role
    }
  })

  const formatOptionLabel = ({ label, role }: UserSelectOptionType) => (
    <UserSelectOptionWrapper>
      <p>{label}</p>
      <p className="role">{role}</p>
    </UserSelectOptionWrapper>
  )

  const handleSelectChange = (newUser: UserSelectOptionType | null) => {
    if (newUser) {
      setUser(newUser)
    }
  }

  return (
    <Select
      placeholder={'Select User'}
      value={user}
      onChange={handleSelectChange}
      formatOptionLabel={formatOptionLabel}
      options={options}
      isMulti={false}
    />
  )
}

export default UserSelect
