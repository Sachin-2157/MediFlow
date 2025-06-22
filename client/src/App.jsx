import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { AppRoutes } from './routes'
import viteLogo from '/vite.svg'
import './App.css'
// import Button from ""
import { Button } from '@/components/ui/button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <BrowserRouter> */}
        <>
          <h1 className="text-3xl font-bold underline">
            <Button>Development Mode!</Button>
            
          </h1>
        </>
        <AppRoutes />
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
