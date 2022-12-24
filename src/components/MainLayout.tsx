import styled from 'styled-components/macro';
import React from "react"
import { useNavigate } from 'react-router-dom';

const PUBLIC_URL = process.env.PUBLIC_URL

const StyledHeader = styled.header`
  background-color: var(--white);
  height: 80px;
  width: 100%;
  box-shadow: 10px -1px 5px 12px rgba(0,0,0,0.27);
  -webkit-box-shadow: 10px -1px 5px 12px rgba(0,0,0,0.27);
  -moz-box-shadow: 10px -1px 5px 12px rgba(0,0,0,0.27);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--spacing-xl);

  .logo {
    width: 50px;
    height: 50px
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
  children: React.ReactNode;
}

const MainLayout = ({ children } : MainLayoutProps) => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/dashboard')
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

  return (
    <Wrapper>
      <StyledHeader>
        <LogoWrapper onClick={handleLogoClick}>
          <img className='logo' src={`${PUBLIC_URL}/logo.jpg`} alt="xemelgo logo" />
          <h1 className='heading'>Item Dashboard</h1>
        </LogoWrapper>
        <h1 className='heading'>User Toggle</h1>
      </StyledHeader>
      <ContentWrapper>
        {children}
      </ContentWrapper>
      <StyledFooter>
        © Xemelgo 2022. Built by Yichi Zhang
      </StyledFooter>
    </Wrapper>
  )
}

export default MainLayout;
