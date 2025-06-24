import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star,
  Shield,
  MessageCircle,
  Heart,
  ChevronDown,
  Calendar,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const JobBoard: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    location: '',
    salary: '',
    type: '',
    category: ''
  });

  const isEmployer = user?.role === 'employer';

  // Mock data - in real app, this would come from API
  const jobs = [
    {
      id: 1,
      title: 'House Cleaning Service',
      employer: 'Rashida Ahmed',
      location: 'Gulshan, Dhaka',
      salary: '৳8,000-10,000/month',
      type: 'Full-time',
      category: 'Cleaning',
      posted: '2 days ago',
      applications: 12,
      description: 'Looking for reliable house cleaner for 3-bedroom apartment. Must have experience and references.',
      requirements: ['2+ years experience', 'References required', 'Flexible schedule'],
      verified: true,
      urgent: false
    },
    {
      id: 2,
      title: 'Baby Care & Nanny',
      employer: 'Mohammad Rahman',
      location: 'Dhanmondi, Dhaka',
      salary: '৳15,000-20,000/month',
      type: 'Full-time',
      category: 'Childcare',
      posted: '1 day ago',
      applications: 8,
      description: 'Seeking experienced nanny for 6-month-old baby. Must be patient and loving.',
      requirements: ['Experience with infants', 'First aid knowledge', 'Live-in preferred'],
      verified: true,
      urgent: true
    },
    {
      id: 3,
      title: 'Elderly Care Companion',
      employer: 'Fatima Khan',
      location: 'Uttara, Dhaka',
      salary: '৳12,000-15,000/month',
      type: 'Part-time',
      category: 'Elderly Care',
      posted: '3 days ago',
      applications: 5,
      description: 'Need compassionate caregiver for elderly parent. Medical knowledge preferred.',
      requirements: ['Patient personality', 'Medical knowledge preferred', 'Day shift only'],
      verified: true,
      urgent: false
    }
  ];

  const workers = [
    {
      id: 1,
      name: 'Fatima Khan',
      specialties: ['House Cleaning', 'Laundry'],
      location: 'Gulshan, Dhaka',
      experience: '5 years',
      rating: 4.9,
      reviews: 42,
      hourlyRate: '৳200-300/hour',
      availability: 'Available Now',
      verified: true,
      avatar: 'https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      description: 'Experienced house cleaner with excellent references. Reliable and trustworthy.',
      skills: ['Deep cleaning', 'Laundry', 'Ironing', 'Organization']
    },
    {
      id: 2,
      name: 'Rashida Begum',
      specialties: ['Baby Care', 'Childcare'],
      location: 'Dhanmondi, Dhaka',
      experience: '8 years',
      rating: 4.8,
      reviews: 38,
      hourlyRate: '৳400-500/hour',
      availability: 'Available from next week',
      verified: true,
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      description: 'Loving nanny with extensive experience caring for infants and toddlers.',
      skills: ['Infant care', 'First aid', 'Cooking', 'Educational activities']
    },
    {
      id: 3,
      name: 'Nasreen Ahmed',
      specialties: ['Elderly Care', 'Cooking'],
      location: 'Uttara, Dhaka',
      experience: '6 years',
      rating: 4.7,
      reviews: 29,
      hourlyRate: '৳300-400/hour',
      availability: 'Available Now',
      verified: true,
      avatar: 'https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      description: 'Compassionate caregiver specializing in elderly care with medical knowledge.',
      skills: ['Elderly care', 'Medication management', 'Cooking', 'Companionship']
    }
  ];

  const categories = ['All', 'Cleaning', 'Childcare', 'Elderly Care', 'Cooking', 'Garden'];
  const locations = ['All Locations', 'Gulshan', 'Dhanmondi', 'Uttara', 'Banani', 'Mirpur'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {isEmployer ? 'Find Trusted Workers' : 'Find Jobs'}
          </h1>
          <p className="text-gray-600 mt-2">
            {isEmployer 
              ? 'Browse verified domestic workers and hire the perfect fit for your needs' 
              : 'Discover opportunities and apply to jobs that match your skills'
            }
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={isEmployer ? "Search workers by name or skill..." : "Search jobs by title or location..."}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <div className="relative">
                <button
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {filterOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-4">Filter Options</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Location
                          </label>
                          <select
                            value={selectedFilters.location}
                            onChange={(e) => setSelectedFilters(prev => ({ ...prev, location: e.target.value }))}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          >
                            {locations.map(location => (
                              <option key={location} value={location}>{location}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                          </label>
                          <select
                            value={selectedFilters.category}
                            onChange={(e) => setSelectedFilters(prev => ({ ...prev, category: e.target.value }))}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          >
                            {categories.map(category => (
                              <option key={category} value={category}>{category}</option>
                            ))}
                          </select>
                        </div>

                        {!isEmployer && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Job Type
                            </label>
                            <select
                              value={selectedFilters.type}
                              onChange={(e) => setSelectedFilters(prev => ({ ...prev, type: e.target.value }))}
                              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            >
                              <option value="">All Types</option>
                              <option value="Full-time">Full-time</option>
                              <option value="Part-time">Part-time</option>
                              <option value="Contract">Contract</option>
                            </select>
                          </div>
                        )}

                        <div className="pt-4 flex justify-between">
                          <button
                            onClick={() => setSelectedFilters({ location: '', salary: '', type: '', category: '' })}
                            className="text-gray-600 hover:text-gray-800"
                          >
                            Clear All
                          </button>
                          <button
                            onClick={() => setFilterOpen(false)}
                            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                          >
                            Apply Filters
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button className="px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {isEmployer ? (
            // Worker Cards for Employers
            <div className="grid gap-6">
              {workers.map((worker) => (
                <div key={worker.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={worker.avatar}
                        alt={worker.name}
                        className="h-20 w-20 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{worker.name}</h3>
                          {worker.verified && (
                            <Shield className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">{worker.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {worker.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {worker.experience}
                          </span>
                          <span className="flex items-center">
                            <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                            {worker.rating} ({worker.reviews} reviews)
                          </span>
                          <span className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {worker.hourlyRate}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {worker.specialties.map((specialty, index) => (
                            <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                              {specialty}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {worker.skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-64 flex flex-col space-y-3">
                      <div className="text-center lg:text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          worker.availability === 'Available Now' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {worker.availability}
                        </span>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Link
                          to={`/profile/${worker.id}`}
                          className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-center"
                        >
                          View Profile
                        </Link>
                        <Link
                          to={`/messages?worker=${worker.id}`}
                          className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span>Message</span>
                        </Link>
                        <button className="flex items-center justify-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                          <Heart className="h-4 w-4" />
                          <span>Save</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Job Cards for Workers
            <div className="grid gap-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                            {job.verified && (
                              <Shield className="h-5 w-5 text-green-500" />
                            )}
                            {job.urgent && (
                              <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                                Urgent
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-3">{job.description}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
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
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {job.applications} applications
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          {job.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.requirements.map((req, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {req}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm text-gray-600">
                        Posted by <span className="font-medium">{job.employer}</span>
                      </p>
                    </div>
                    
                    <div className="lg:w-48 flex flex-col space-y-3">
                      <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                        Apply Now
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        View Details
                      </button>
                      <button className="flex items-center justify-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                        <Heart className="h-4 w-4" />
                        <span>Save Job</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
            Load More Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;