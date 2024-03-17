
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
import AuthPage from './AuthPage'




function App() {
  return(
    <>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='auth' element={<AuthPage/>}/>
    </Routes>
    <Spinner />
    <Alert status='success'>
      <AlertIcon />
      {/* <AlertTitle>Your browser is outdated!</AlertTitle> */}
      <AlertDescription>succsesfully added your api</AlertDescription>
    </Alert>
    
    <Popover>
  <PopoverTrigger>
    <Button>Trigger</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>
</>
  )
}

export default App
