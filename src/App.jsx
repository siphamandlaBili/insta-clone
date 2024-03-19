
import { Alert, AlertIcon, AlertTitle, AlertDescription, Hide, } from '@chakra-ui/react'
import { Route,Routes } from 'react-router-dom'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,Button
} from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import './App.css'
import HomePage from './Components/HomePage'
import AuthPage from './Components/AuthPage'




function App() {
  return(
    <>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='auth' element={<AuthPage/>}/>
    </Routes>
</>
  )
}

export default App
