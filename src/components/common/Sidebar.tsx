import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import {
  DashboardOutlined,
  ProjectOutlined,
  FileSearchOutlined,
  ToolOutlined,
  DatabaseOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { useAppDispatch } from '../../app/hooks'
import { logout } from '../../features/auth/authSlice'

const Sidebar = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()

  const items = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: '/projects',
      icon: <ProjectOutlined />,
      label: <Link to="/projects">Projects</Link>,
    },
    {
      key: '/surveys',
      icon: <FileSearchOutlined />,
      label: <Link to="/surveys">Surveys</Link>,
    },
    {
      key: '/job-orders',
      icon: <ToolOutlined />,
      label: <Link to="/job-orders">Job Orders</Link>,
    },
    {
      key: '/inventory',
      icon: <DatabaseOutlined />,
      label: <Link to="/inventory">Inventory</Link>,
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: () => dispatch(logout()),
    },
  ]

  return (
    <div className="w-64 border-r border-gray-200 bg-white">
      <div className="p-4 h-16 border-b border-gray-200 flex items-center">
        <h1 className="text-xl font-semibold">Telco Service</h1>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={items}
        className="border-r-0"
      />
    </div>
  )
}

export default Sidebar