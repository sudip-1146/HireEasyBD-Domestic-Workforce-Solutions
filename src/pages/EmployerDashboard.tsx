import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Star, 
  MessageCircle, 
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EmployerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Active Jobs', value: '3', icon: Users, color: 'bg-blue-500' },
    { label: 'Applications', value: '12', icon: MessageCircle, color: 'bg-green-500' },
    { label: 'Hired Workers', value: '5', icon: CheckCircle, color: 'bg-teal-500' },
    { label: 'This Month', value: '৳8,500', icon: Calendar, color: 'bg-purple-500' }
  ];

  const recentJobs = [
    {
      id: 1,
      title: 'House Cleaning - Gulshan',
      type: 'Cleaning',
      posted: '2 days ago',
      applications: 8,
      status: 'Active',
      location: 'Gulshan, Dhaka'
    },
    {
      id: 2,
      title: 'Baby Care - Dhanmondi',
      type: 'Childcare',
      posted: '1 week ago',
      applications: 15,
      status: 'In Progress',
      location: 'Dhanmondi, Dhaka'
    },
    {
      id: 3,
      title: 'Elderly Care - Uttara',
      type: 'Elderly Care',
      posted: '3 days ago',
      applications: 5,
      status: 'Active',
      location: 'Uttara, Dhaka'
    }
  ];

  const hiredWorkers = [
    {
      id: 1,
      name: 'Fatima Khan',
      service: 'House Cleaning',
      rating: 4.9,
      startDate: '2024-01-15',
      avatar: 'https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Rashida Begum',
      service: 'Baby Care',
      rating: 4.8,
      startDate: '2024-01-20',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      status: 'Active'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Employer Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your jobs and hired workers</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-full`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/jobs/post"
              className="flex items-center justify-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
              <span>Post New Job</span>
            </Link>
            <Link
              to="/jobs"
              className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Search className="h-5 w-5" />
              <span>Browse Workers</span>
            </Link>
            <Link
              to="/messages"
              className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>View Messages</span>
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'jobs', label: 'My Jobs' },
              { id: 'workers', label: 'Hired Workers' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Fatima Khan</span> accepted your house cleaning job
                  </p>
                  <span className="text-xs text-gray-500 ml-auto">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <p className="text-sm text-gray-700">
                    New message from <span className="font-medium">Rashida Begum</span>
                  </p>
                  <span className="text-xs text-gray-500 ml-auto">4 hours ago</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <Users className="h-5 w-5 text-purple-600" />
                  <p className="text-sm text-gray-700">
                    5 new applications for your elderly care job
                  </p>
                  <span className="text-xs text-gray-500 ml-auto">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jobs' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">My Posted Jobs</h3>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {recentJobs.map((job) => (
                <div key={job.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{job.title}</h4>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.posted}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {job.applications} applications
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {job.status}
                      </span>
                      <button className="text-teal-600 hover:text-teal-700 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'workers' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Hired Workers</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {hiredWorkers.map((worker) => (
                <div key={worker.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={worker.avatar}
                        alt={worker.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{worker.name}</h4>
                        <p className="text-sm text-gray-600">{worker.service}</p>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{worker.rating}</span>
                          <span className="text-sm text-gray-400 ml-2">Since {worker.startDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        {worker.status}
                      </span>
                      <Link
                        to={`/messages?user=${worker.id}`}
                        className="flex items-center space-x-1 text-teal-600 hover:text-teal-700 font-medium"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Message</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerDashboard;