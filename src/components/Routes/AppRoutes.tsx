import { ClientsPage, HomePage, NewClientPage } from '@/pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/clients' element={<ClientsPage />} />
        <Route path='/clients/new' element={<NewClientPage />} />
      </Routes>
    </BrowserRouter>
  )
}