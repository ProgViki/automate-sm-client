import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { useAppSelector } from '../../app/hooks'
import { selectCurrentUser } from '../../features/auth/authSlice'

const { Content } = Layout

const AppLayout = () => {
  const user = useAppSelector(selectCurrentUser)

  return (
    <Layout className="min-h-screen">
      <Sidebar />
      <Layout>
        <Header user={user} />
        <Content className="p-4 bg-gray-50">
          <div className="bg-white p-6 rounded-lg shadow">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout