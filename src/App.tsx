
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Browse from './pages/Browse'
import CityDetails from './pages/CityDetails'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/city/:slug" element={<CityDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
