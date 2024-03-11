import { Route, Routes } from "react-router-dom"
import { TransferPage } from "../pages/TransferPage"
import { AvailabilityPage, BookingPage } from "../pages"


export const TransferRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<TransferPage />} />
        <Route path="availability" element={<AvailabilityPage />} />
        <Route path="booking" element={<BookingPage />} />
    </Routes>
  )
}
