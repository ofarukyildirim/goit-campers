import { lazy } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import MainLayout from './layouts/MainLayout'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'))
const CamperDetailsPage = lazy(() => import('./pages/CamperDetailsPage/CamperDetailsPage'))

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CamperDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    <Toaster position="top-right" />
  </>
)

export default App
