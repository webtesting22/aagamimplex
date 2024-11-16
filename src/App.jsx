import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MegaNavigation from './Components/OtherComponents/Navigation/MegaNavigation'
import AAGAMHome from './Components/MainComponent/HomePage/AAGAMHomePage'
import HomePageProducts from './Components/MainComponent/ProductsHomePage/HomePageProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MegaNavigation />
      <AAGAMHome/>
      <HomePageProducts/>
    </>
  )
}

export default App
