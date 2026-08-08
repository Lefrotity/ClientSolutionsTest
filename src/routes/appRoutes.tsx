import { Navigate, Routes, Route } from 'react-router'
import { ROUTES } from './routes'
import App from '../App'
import MainLayout from '../layouts/main'

// Page is on every route because we don't really need more than that
// it has ho sense to create separate page for each route for passing the test task
const Page = (
  <MainLayout>
    <App />
  </MainLayout>
)

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={Page}>
        <Route index element={<Navigate to={ROUTES.TRENDS} replace />} />

        <Route path={ROUTES.TRENDS} element={Page} />
        <Route path={ROUTES.TASKS} element={Page} />
        <Route path={ROUTES.TICKETS} element={Page} />
        <Route path={ROUTES.PAYMENTS} element={Page} />
        <Route path={ROUTES.SHOP} element={Page} />
        <Route path={ROUTES.REPORTS} element={Page} />
        <Route path={ROUTES.TENDER} element={Page} />
        <Route path={ROUTES.SETTINGS} element={Page} />
        <Route path={ROUTES.KNOWLEDGE_BASE} element={Page} />

        <Route path='/clients' element={Page}>
          <Route index element={<Navigate to={ROUTES.CLIENTS.LIST} replace />} />
          <Route path={ROUTES.CLIENTS.LIST} element={Page} />
          <Route path={ROUTES.CLIENTS.REVIEWS} element={Page} />
          <Route path={ROUTES.CLIENTS.NOTIFICATIONS} element={Page} />
        </Route>

        <Route path='/inventory' element={Page}>
          <Route index element={<Navigate to={ROUTES.INVENTORY.PRODUCTS} replace />} />
          <Route path={ROUTES.INVENTORY.PRODUCTS} element={Page} />
          <Route path={ROUTES.INVENTORY.ORDERS} element={Page} />
          <Route path={ROUTES.INVENTORY.SUPPLIES} element={Page} />
        </Route>

        <Route path='*' element={Page} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
