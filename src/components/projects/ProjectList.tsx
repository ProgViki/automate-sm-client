import { Table, Tag, Button, Space, Popconfirm, message } from 'antd'
import { useGetProjectsQuery } from '../../api/projectApi'
import { Project, ProjectStatus } from '../../types/projectTypes'
import { Link } from 'react-router-dom'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'

const statusColors: Record<ProjectStatus, string> = {
  DRAFT: 'blue',
  PENDING: 'orange',
  IN_PROGRESS: 'green',
  COMPLETED: 'purple',
  CANCELLED: 'red',
}

const ProjectList = () => {
  const { data: projects, isLoading, error } = useGetProjectsQuery()

  const columns = [
    {
      title: 'Project Code',
      dataIndex: 'projectCode',
      key: 'projectCode',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'projectType',
      key: 'projectType',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: ProjectStatus) => (
        <Tag color={statusColors[status]}>{status}</Tag>
      ),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Project) => (
        <Space size="middle">
          <Link to={`/projects/${record.id}`}>
            <Button icon={<EyeOutlined />} size="small" />
          </Link>
          <Link to={`/projects/${record.id}/edit`}>
            <Button icon={<EditOutlined />} size="small" />
          </Link>
          <Popconfirm
            title="Are you sure to delete this project?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} size="small" danger />
          </Popconfirm>
        </Space>
      ),
    },
  ]

  const handleDelete = (id: string) => {
    // Implement delete functionality
    message.success('Project deleted successfully')
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <Link to="/projects/new">
          <Button type="primary">Create Project</Button>
        </Link>
      </div>
      <Table
        columns={columns}
        dataSource={projects || []}
        rowKey="id"
        loading={isLoading}
      />
    </div>
  )
}

export default ProjectList