import React from 'react';
import { Clock, MapPin, Phone, Mail, Calendar, DollarSign } from 'lucide-react';

const Details: React.FC = () => {
  const schedules = [
    {
      day: 'Monday',
      sessions: [
        { time: '5:00 PM - 6:00 PM', level: 'Beginners (Kids)', age: '5-12 years' },
        { time: '6:30 PM - 7:30 PM', level: 'Intermediate', age: '13+ years' },
        { time: '8:00 PM - 9:00 PM', level: 'Advanced', age: 'Adults' }
      ]
    },
    {
      day: 'Tuesday',
      sessions: [
        { time: '5:00 PM - 6:00 PM', level: 'Beginners (Kids)', age: '5-12 years' },
        { time: '6:30 PM - 7:30 PM', level: 'Intermediate', age: '13+ years' }
      ]
    },
    {
      day: 'Wednesday',
      sessions: [
        { time: '5:00 PM - 6:00 PM', level: 'Beginners (Kids)', age: '5-12 years' },
        { time: '6:30 PM - 7:30 PM', level: 'Intermediate', age: '13+ years' },
        { time: '8:00 PM - 9:00 PM', level: 'Advanced', age: 'Adults' }
      ]
    },
    {
      day: 'Thursday',
      sessions: [
        { time: '5:00 PM - 6:00 PM', level: 'Beginners (Kids)', age: '5-12 years' },
        { time: '6:30 PM - 7:30 PM', level: 'Intermediate', age: '13+ years' }
      ]
    },
    {
      day: 'Friday',
      sessions: [
        { time: '5:00 PM - 6:00 PM', level: 'Beginners (Kids)', age: '5-12 years' },
        { time: '6:30 PM - 7:30 PM', level: 'Intermediate', age: '13+ years' },
        { time: '8:00 PM - 9:00 PM', level: 'Advanced', age: 'Adults' }
      ]
    },
    {
      day: 'Saturday',
      sessions: [
        { time: '9:00 AM - 10:00 AM', level: 'All Levels', age: 'Kids & Adults' },
        { time: '10:30 AM - 11:30 AM', level: 'Advanced Training', age: 'Black Belts' }
      ]
    }
  ];

  const fees = [
    { category: 'Monthly Fee (Kids)', price: '$80', description: 'Ages 5-12, All beginner classes' },
    { category: 'Monthly Fee (Adults)', price: '$100', description: 'Ages 13+, All level classes' },
    { category: 'Registration Fee', price: '$50', description: 'One-time fee for new students' },
    { category: 'Uniform (Gi)', price: '$45', description: 'Traditional karate uniform' },
    { category: 'Belt Testing', price: '$25', description: 'Per belt advancement test' }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Class Details
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our classes, schedules, fees, and location.
          </p>
        </div>

        {/* Schedule Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Calendar className="h-8 w-8 text-red-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Class Schedule</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedules.map((schedule, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {schedule.day}
                </h3>
                <div className="space-y-3">
                  {schedule.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="border-l-4 border-red-600 pl-4">
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Clock className="h-4 w-4 mr-1" />
                        {session.time}
                      </div>
                      <div className="font-semibold text-gray-900">{session.level}</div>
                      <div className="text-sm text-gray-500">{session.age}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fees Section */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <DollarSign className="h-8 w-8 text-red-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Fees & Pricing</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {fees.map((fee, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                        {fee.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-2xl font-bold text-red-600">
                        {fee.price}
                      </td>
                      <td className="px-6 py-4 text-gray-500">
                        {fee.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location */}
          <div>
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Location</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">VPR Karate Classes Dojo</h3>
              <p className="text-gray-600 mb-4">
                123 Martial Arts Street<br />
                Karate District, KD 12345<br />
                United States
              </p>
              
              <a
                href="https://maps.google.com/?q=123+Martial+Arts+Street,+Karate+District,+KD+12345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                <MapPin className="h-4 w-4 mr-2" />
                View on Google Maps
              </a>
              
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Directions</h4>
                <p className="text-sm text-gray-600">
                  Located in the heart of the Karate District, our dojo is easily accessible by public 
                  transportation and has ample parking available. Look for the building with the red 
                  VPR Karate Classes sign.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center mb-6">
              <Phone className="h-8 w-8 text-red-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">(555) 123-KRATE</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@vprkarate.com</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-red-600 mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Office Hours</div>
                    <div className="text-gray-600">
                      Monday - Friday: 4:00 PM - 9:30 PM<br />
                      Saturday: 8:30 AM - 12:00 PM<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-red-600 mb-2">Have Questions?</h4>
                <p className="text-sm text-gray-600">
                  Feel free to call or email us with any questions about our classes, schedules, 
                  or to schedule a trial lesson. We're here to help you start your karate journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;