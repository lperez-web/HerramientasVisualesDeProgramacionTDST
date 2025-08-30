import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BasicTypes } from './components/BasicTypes'
import { ContadorClicks } from './components/ContadorClicks'
import { ProductoDetalles } from './components/ProductoDetalles'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BasicTypes/>
    <ContadorClicks />
     <ProductoDetalles />
    </>
  )
}

export default App
