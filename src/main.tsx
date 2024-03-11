import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HotelbedsApp from './HotelbedsApp.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HotelbedsApp />
    </BrowserRouter>
  </React.StrictMode>,
)
