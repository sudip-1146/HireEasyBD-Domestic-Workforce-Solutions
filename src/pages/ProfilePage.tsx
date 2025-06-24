import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  Star, 
  Shield, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Calendar,
  Award,
  Phone,
  Mail,
  DollarSign,
  CheckCircle,
  Heart
} from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data - in real app, this would come from API based on ID
  const profile = {
    id: '1',
    name: 'Fatima Khan',
    avatar: 'https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
    rating: 4.9,
    reviews: 42,
    location: 'Gulshan, Dhaka',
    experience: '5 years',
    joinDate: 'January 2019',
    verified: true,
    available: true,
    hourlyRate: '৳200-300/hour',
    monthlyRate: '৳8,000-12,000/month',
    specialties: ['House Cleaning', 'Laundry', 'Organization'],
    languages: ['Bengali', 'English', 'Hindi'],
    description: 'Experienced and reliable domestic worker with over 5 years of experience in house cleaning and maintenance. I take pride in my work and ensure every home I work in is spotless and organized. I am trustworthy, punctual, and always communicate clearly with my clients.',
    skills: [
      'Deep cleaning',
      'Laundry & ironing',
      'Kitchen cleaning',
      'Bathroom cleaning',
      'Organization',
      'Window cleaning',
      'Floor care',
      'Furniture care'
    ],
    services: [
      {
        name: 'Regular House Cleaning',
        description: 'Weekly or bi-weekly comprehensive house cleaning service',
        price: '৳800-1200 per session'
      },
      {
        name: 'Deep Cleaning',
        description: 'Thorough cleaning for special occasions or move-in/out',
        price: '৳1500-2500 per session'
      },
      {
        name: 'Laundry Service',
        description: 'Washing, drying, and ironing clothes',
        price: '৳300-500 per load'
      }
    ],
    availability: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: '10:00 AM - 3:00 PM',
      sunday: 'Not Available'
    },
    reviews: [
      {
        id: 1,
        client: 'Rashida Ahmed',
        rating: 5,
        date: '2024-01-15',
        comment: 'Fatima is absolutely wonderful! She is thorough, reliable, and very professional. My house has never been cleaner. Highly recommend!',
        avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
      },
      {
        id: 2,
        client: 'Mohammad Rahman',
        rating: 5,
        date: '2024-01-10',
        comment: 'Very professional and trustworthy. Fatima goes above and beyond to ensure everything is perfect. Great communication too!',
        avatar: 'https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
      },
      {
        id: 3,
        client: 'Sarah Khan',
        rating: 4,
        date: '2024-01-05',
        comment: 'Good work overall. Very punctual and the house was clean. Would hire again.',
        avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
      }
    ],
    badges: [
      { name: 'Verified Identity', icon: Shield, color: 'text-green-600' },
      { name: 'Background Checked', icon: CheckCircle, color: 'text-blue-600' },
      { name: 'Top Rated', icon: Star, color: 'text-yellow-600' },
      { name: '5+ Years Experience', icon: Award, color: 'text-purple-600' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex flex-col items-center lg:items-start">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-32 w-32 rounded-full object-cover mb-4"
              />
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                {profile.verified && (
                  <Shield className="h-6 w-6 text-green-500" />
                )}
              </div>
              <div className="flex items-center space-x-1 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(profile.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">{profile.rating}</span>
                <span className="text-gray-600">({profile.reviews} reviews)</span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {profile.location}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {profile.experience}
                </span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Since {profile.joinDate}
                </span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  profile.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {profile.available ? 'Available Now' : 'Not Available'}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {profile.hourlyRate}
                </span>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{profile.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.specialties.map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.languages.map((language, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-64">
              <div className="space-y-3">
                <button className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Contact Now</span>
                </button>
                <button className="w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule Interview</span>
                </button>
                <button className="w-full text-gray-600 hover:text-red-600 transition-colors flex items-center justify-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>Save Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills & Expertise</h2>
              <div className="grid grid-cols-2 gap-3">
                {profile.skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Services Offered</h2>
              <div className="space-y-4">
                {profile.services.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{service.name}</h3>
                      <span className="text-teal-600 font-semibold">{service.price}</span>
                    </div>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Client Reviews</h2>
              <div className="space-y-6">
                {profile.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-start space-x-4">
                      <img
                        src={review.avatar}
                        alt={review.client}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{review.client}</h4>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Verifications & Badges</h3>
              <div className="space-y-3">
                {profile.badges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <Icon className={`h-5 w-5 ${badge.color}`} />
                      <span className="text-sm font-medium text-gray-700">{badge.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Availability</h3>
              <div className="space-y-2">
                {Object.entries(profile.availability).map(([day, time]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700 capitalize">{day}</span>
                    <span className={`${time === 'Not Available' ? 'text-red-600' : 'text-gray-600'}`}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Hourly Rate</span>
                  <span className="font-medium text-gray-900">{profile.hourlyRate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Monthly Rate</span>
                  <span className="font-medium text-gray-900">{profile.monthlyRate}</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">+880 1XXX-XXXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Available after contact</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Contact details will be shared after initial communication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;