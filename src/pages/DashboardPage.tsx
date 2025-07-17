import { Col, Row } from 'antd'
import StatsCard from '../components/dashboard/StatsCard'
import RecentActivities from '../components/dashboard/RecentActivities'
import { useGetProjectsQuery } from '../api/projectApi'

const DashboardPage = () => {
  const { data: projects } = useGetProjectsQuery()

  const stats = [
    {
      title: 'Total Projects',
      value: projects?.length || 0,
      icon: '📊',
      color: 'bg-blue-100',
    },
    {
      title: 'Active Projects',
      value: projects?.filter(p => p.status === 'IN_PROGRESS').length || 0,
      icon: '🚧',
      color: 'bg-green-100',
    },
    {
      title: 'Completed Projects',
      value: projects?.filter(p => p.status === 'COMPLETED').length || 0,
      icon: '✅',
      color: 'bg-purple-100',
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Row gutter={16}>
        {stats.map((stat, index) => (
          <Col span={8} key={index}>
            <StatsCard {...stat} />
          </Col>
        ))}
      </Row>
      <RecentActivities />
    </div>
  )
}

export default DashboardPage