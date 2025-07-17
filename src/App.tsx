import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import ProjectsPage from './pages/ProjectsPage'
import SurveysPage from './pages/SurveysPage'
import JobOrdersPage from './pages/JobOrdersPage'
import InventoryPage from './pages/InventoryPage'
import ProtectedRoute from './components/common/ProtectedRoute'
import Layout from './components/common/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="projects/new" element={<ProjectForm />} />
          <Route path="surveys" element={<SurveysPage />} />
          <Route path="job-orders" element={<JobOrdersPage />} />
          <Route path="inventory" element={<InventoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App