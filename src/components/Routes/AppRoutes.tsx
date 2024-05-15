import { ClientsPage, HomePage, NewClientPage, OffersPage } from '@/pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/clients' element={<ClientsPage />} />
        <Route path='/clients/new' element={<NewClientPage />} />
        <Route path='/offers' element={<OffersPage />} />
        <Route path='/offers/promotions' element={<div>promociones</div>} />
        <Route path='/offers/calendar' element={<div>calendario</div>} />
        <Route path='/offers/events' element={<div>eventos</div>} />
        <Route path='/offers/others' element={<div>otros</div>} />
      </Routes>
    </BrowserRouter>
  )
}