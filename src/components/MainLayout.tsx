import styled from 'styled-components/macro'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserSelect from './UserSelect'
import { UserSelectOptionType } from '../type/Type'

const PUBLIC_URL = process.env.PUBLIC_URL

const StyledHeader = styled.header`
  background-color: var(--white);
  height: 80px;
  width: 100%;
  box-shadow: -2px 4px 5px 0px rgba(0,0,0,0.22);
  -webkit-box-shadow: -2px 4px 5px 0px rgba(0,0,0,0.22);
  -moz-box-shadow: -2px 4px 5px 0px rgba(0,0,0,0.22);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--spacing-xl);

  .logo {
    width: 50px;
    height: 50px;
  }

  .heading {
    font-size: var(--fz-xxl);
    padding-left: var(--spacing-sm);
  }

  @media (max-width: 576px) {
    .heading {
      font-size: var(--fz-lg);
    }
  }
`

const StyledFooter = styled.header`
  background-color: var(--dark-blue);
  color: var(--white);
  font-size: var(--fz-md);
  min-height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-xl);
  margin-top: auto;
`

interface MainLayoutProps {
  user: UserSelectOptionType
  setUser: React.Dispatch<React.SetStateAction<UserSelectOptionType>>
  children: React.ReactNode
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: var(--site-max-width);
  padding: 0 var(--spacing-xl);
  margin: var(--spacing-lg) var(--spacing-xl);

  @media (max-width: 576px) {
    max-width: 80vw;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const UserSelectOptionWrapper = styled.div`
  width: 200px;
`

const MainLayout = ({ user, setUser, children }: MainLayoutProps) => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/dashboard')
  }

  const selectEle = (
    <UserSelectOptionWrapper>
      <UserSelect user={user} setUser={setUser} />
    </UserSelectOptionWrapper>
  )

  return (
    <Wrapper>
      <StyledHeader>
        <LogoWrapper onClick={handleLogoClick}>
          <img
            className="logo"
            src={`${PUBLIC_URL}/logo.jpg`}
            alt="xemelgo logo"
          />
          <h1 className="heading">Dashboard</h1>
        </LogoWrapper>
        {selectEle}
      </StyledHeader>

      <ContentWrapper>{children}</ContentWrapper>
      <StyledFooter>© Xemelgo 2022. Built by Yichi Zhang</StyledFooter>
    </Wrapper>
  )
}

export default MainLayout
