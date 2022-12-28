import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/DashBoard'
import Detail from './pages/Detail'
import GlobalStyle from './theme/GlobalStyle'
import { UserSelectOptionType } from './type/Type'
import { USERS } from './constants/Constants'
import { ItemEntry } from './type/Type'
import APIStore from './apistore/APIStore'
import LoadingSpinner from './components/LoadingSpinner'

const App = () => {
  const initialUser = {
    label: USERS[0].name,
    value: USERS[0].name,
    role: USERS[0].role
  }

  const [user, setUser] = useState<UserSelectOptionType>(initialUser)
  const [itemData, setItemData] = useState<ItemEntry[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchRowData = async () => {
    const apiStore = new APIStore()

      try {
        const data = await apiStore.getAllItems()
        setItemData(data)
        setIsLoading(false)
      } catch(error) {
        console.log(error)
      } 
    }

    fetchRowData()
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      <MainLayout user={user} setUser={setUser}>
        <Routes>
          <Route
            index
            path="/dashboard"
            element={
            isLoading ? <LoadingSpinner /> : <Dashboard itemData={itemData} />}
          />
          <Route
            path="/dashboard/:id"
            element={
              <Detail
                itemData={itemData}
                setItemData={setItemData}
                userName={user.label}
              />
            }
          />
          <Route path="*" element={<Navigate replace to="dashboard" />} />
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
