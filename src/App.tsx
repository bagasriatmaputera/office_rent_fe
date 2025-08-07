
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Browse from './pages/Browse'
import CityDetails from './pages/CityDetails'
import CheckBooking from './pages/CheckBooking'
import SuccessBooking from './pages/SuccessBooking'
import BookOffice from './pages/BookOffice'
import OfficeDetails from './pages/OfficeDetails'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/city/:slug" element={<CityDetails />} />
        <Route path="/officespace/:slug" element={<OfficeDetails />} />
        <Route path="/office/:slug/book" element={<BookOffice />} />
        <Route path="/success-booking" element={<SuccessBooking />} />
        <Route path="/check-booking" element={<CheckBooking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
