import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  MessageCircle, 
  Calendar,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  CheckCircle,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Jobs Applied', value: '15', icon: Briefcase, color: 'bg-blue-500' },
    { label: 'Active Jobs', value: '3', icon: CheckCircle, color: 'bg-green-500' },
    { label: 'This Month', value: '৳12,500', icon: DollarSign, color: 'bg-teal-500' },
    { label: 'Profile Views', value: '48', icon: Eye, color: 'bg-purple-500' }
  ];

  const availableJobs = [
    {
      id: 1,
      title: 'House Cleaning - Gulshan',
      employer: 'Rashida Ahmed',
      location: 'Gulshan, Dhaka',
      salary: '৳8,000-10,000/month',
      posted: '2 days ago',
      type: 'Full-time',
      requirements: ['Experience required', 'References needed'],
      description: 'Looking for a reliable house cleaner for a 3-bedroom apartment.'
    },
    {
      id: 2,
      title: 'Baby Care - Dhanmondi',
      employer: 'Mohammad Rahman',
      location: 'Dhanmondi, Dhaka',
      salary: '৳15,000-20,000/month',
      posted: '1 day ago',
      type: 'Full-time',
      requirements: ['Experience with infants', 'First aid knowledge'],
      description: 'Seeking experienced nanny for 6-month-old baby.'
    },
    {
      id: 3,
      title: 'Elderly Care - Uttara',
      employer: 'Fatima Khan',
      location: 'Uttara, Dhaka',
      salary: '৳12,000-15,000/month',
      posted: '3 days ago',
      type: 'Part-time',
      requirements: ['Patient personality', 'Medical knowledge preferred'],
      description: 'Need compassionate caregiver for elderly parent.'
    }
  ];

  const appliedJobs = [
    {
      id: 1,
      title: 'House Cleaning - Banani',
      employer: 'Sarah Ahmed',
      appliedDate: '2024-01-20',
      status: 'Under Review',
      salary: '৳8,500/month'
    },
    {
      id: 2,
      title: 'Cooking - Mirpur',
      employer: 'Abdul Rahman',
      appliedDate: '2024-01-18',
      status: 'Interview Scheduled',
      salary: '৳10,000/month'
    },
    {
      id: 3,
      title: 'Elderly Care - Bashundhara',
      employer: 'Nasreen Begum',
      appliedDate: '2024-01-15',
      status: 'Rejected',
      salary: '৳13,000/month'
    }
  ];

  const activeJobs = [
    {
      id: 1,
      title: 'House Cleaning - Gulshan',
      employer: 'Rashida Ahmed',
      startDate: '2024-01-10',
      nextSchedule: 'Tomorrow, 9:00 AM',
      salary: '৳9,000/month',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Baby Care - Dhanmondi',
      employer: 'Mohammad Rahman',
      startDate: '2024-01-05',
      nextSchedule: 'Today, 8:00 AM',
      salary: '৳18,000/month',
      rating: 4.9
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Worker Dashboard</h1>
          <p className="text-gray-600 mt-2">Find jobs and manage your work schedule</p>
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
              to="/jobs"
              className="flex items-center justify-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              <Search className="h-5 w-5" />
              <span>Find Jobs</span>
            </Link>
            <Link
              to="/profile"
              className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Star className="h-5 w-5" />
              <span>Update Profile</span>
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
              { id: 'available', label: 'Available Jobs' },
              { id: 'applied', label: 'Applied Jobs' },
              { id: 'active', label: 'Active Jobs' }
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
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-sm text-gray-700">
                    You were hired for <span className="font-medium">House Cleaning job in Gulshan</span>
                  </p>
                  <span className="text-xs text-gray-500 ml-auto">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  <p className="text-sm text-gray-700">
                    New message from <span className="font-medium">Rashida Ahmed</span>
                  </p>
                  <span className="text-xs text-gray-500 ml-auto">4 hours ago</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <Calendar className="h-5 w-5 text-yellow-600" />
                  <p className="text-sm text-gray-700">
                    Upcoming job: <span className="font-medium">Baby Care - Tomorrow 8:00 AM</span>
                  </p>
                  <span className="text-xs text-gray-500 ml-auto">1 day ago</span>
                </div>
              </div>
            </div>

            {/* Next Schedule */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Schedule</h3>
              <div className="bg-teal-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Baby Care - Dhanmondi</h4>
                    <p className="text-sm text-gray-600 mt-1">Mohammad Rahman • Today, 8:00 AM</p>
                  </div>
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'available' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Available Jobs</h3>
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
                {availableJobs.map((job) => (
                  <div key={job.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{job.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{job.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.posted}
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {job.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="ml-6 flex flex-col space-y-2">
                        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                          Apply Now
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'applied' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Applied Jobs</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {appliedJobs.map((job) => (
                <div key={job.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{job.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">by {job.employer}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span>Applied: {job.appliedDate}</span>
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        job.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                        job.status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800' :
                        'bg-red-100 text-red-800'
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

        {activeTab === 'active' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Active Jobs</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {activeJobs.map((job) => (
                <div key={job.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{job.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">by {job.employer}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span>Started: {job.startDate}</span>
                        <span>{job.salary}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span>{job.rating}</span>
                        </div>
                      </div>
                      <div className="mt-2 text-sm">
                        <span className="text-teal-600 font-medium">Next: {job.nextSchedule}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Link
                        to={`/messages?employer=${job.employer}`}
                        className="flex items-center space-x-1 text-teal-600 hover:text-teal-700 font-medium"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Message</span>
                      </Link>
                      <button className="text-gray-600 hover:text-gray-700 font-medium">
                        View Details
                      </button>
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

export default WorkerDashboard;