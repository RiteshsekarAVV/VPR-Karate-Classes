import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, UserCheck, Clock, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const attendanceData = [
    { month: 'Jan', attendance: 85 },
    { month: 'Feb', attendance: 90 },
    { month: 'Mar', attendance: 88 },
    { month: 'Apr', attendance: 92 },
    { month: 'May', attendance: 87 },
    { month: 'Jun', attendance: 94 },
  ];

  const beltDistribution = [
    { name: 'White Belt', value: 45, color: '#ffffff' },
    { name: 'Yellow Belt', value: 30, color: '#fbbf24' },
    { name: 'Orange Belt', value: 20, color: '#f97316' },
    { name: 'Green Belt', value: 15, color: '#22c55e' },
    { name: 'Brown Belt', value: 8, color: '#92400e' },
    { name: 'Black Belt', value: 5, color: '#1f2937' },
  ];

  const stats = [
    {
      title: 'Total Students',
      value: '123',
      change: '+12%',
      changeType: 'increase',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Average Attendance',
      value: '89%',
      change: '+5%',
      changeType: 'increase',
      icon: UserCheck,
      color: 'bg-green-500'
    },
    {
      title: 'Active Classes',
      value: '18',
      change: '+2',
      changeType: 'increase',
      icon: Clock,
      color: 'bg-purple-500'
    },
    {
      title: 'Join Requests',
      value: '7',
      change: '+3',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's an overview of your karate classes.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-xs ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Attendance</CardTitle>
            <CardDescription>Average attendance percentage by month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="attendance" fill="#dc2626" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Belt Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Belt Distribution</CardTitle>
            <CardDescription>Current distribution of belt ranks</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={beltDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {beltDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="#000" strokeWidth={1} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest activities in your dojo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">New student John Doe joined the beginner class</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Belt testing scheduled for next Saturday</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Monthly attendance report generated</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">3 new join requests received</p>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;