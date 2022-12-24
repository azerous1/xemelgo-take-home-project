
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/DashBoard';
import Detail from './pages/Detail';
import GlobalStyle from './theme/GlobalStyle';
import { UserSelectOptionType } from './type/Type';
import { USERS } from './constants/Constants';

const App = () => {
  const initialUser = {
    label: USERS[0].name, 
    value: USERS[0].name,
    role: USERS[0].role,
  }

  const [user, setUser] = useState<UserSelectOptionType>(initialUser)
  
  return (
    <div className="App">
        <GlobalStyle />
        <MainLayout user={user} setUser={setUser}>
          <Routes>
            <Route index path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/:id' element={<Detail />}/>
            <Route path='*' element={<Navigate replace to='dashboard' />}/>
          </Routes>
        </MainLayout>
    </div>
  );
}

export default App;
