
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/DashBoard';
import Detail from './pages/Detail';
import GlobalStyle from './theme/GlobalStyle';

const App = () => {
  return (
    <div className="App">
        <GlobalStyle />
        <MainLayout>
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
