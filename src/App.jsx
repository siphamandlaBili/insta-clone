import { Route,Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage'
import AuthPage from './Components/AuthPage'
import PageLayout from './Layout/pageLayouts/PageLayout'
import ProfilePage from './Components/ProfilePage'

function App() {
  return(
    <PageLayout>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/auth' element={<AuthPage/>}/>
    <Route path='/:uid/profile' element={<ProfilePage/>}/>
    </Routes>
    </PageLayout>
  )
}

export default App
