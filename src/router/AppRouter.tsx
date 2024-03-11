import { Route, Routes } from "react-router-dom"
import { TransferRoutes } from "../transfer/routes/TransferRoutes"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<TransferRoutes />} />
    </Routes>
  )
}
