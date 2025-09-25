import React from 'react';
import { BookOpen, Users, Coffee, Award, Globe, Heart } from 'lucide-react';

export const StudentLife: React.FC = () => {
  const instagramUrl = 'https://www.instagram.com/ttuhillel/';

  return (
    <section id="student-life" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Life</h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the vibrant Jewish community at Texas Tech and find meaningful ways to connect,
            learn, and grow during your college years.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Texas Tech Hillel offers numerous opportunities for students to get involved,
              build leadership skills, and create lasting memories. Whether you're interested
              in social events, cultural programs, or community service, there's something for everyone.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <Users className="h-6 w-6 text-red-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Student Board</h4>
                  <p className="text-gray-600">Lead initiatives and shape the future of Hillel</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <Coffee className="h-6 w-6 text-red-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Coffee Chats</h4>
                  <p className="text-gray-600">Connect with peers and build friendships</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <BookOpen className="h-6 w-6 text-red-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Learning Groups</h4>
                  <p className="text-gray-600">Explore Jewish texts and traditions</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <Heart className="h-6 w-6 text-red-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Social Action</h4>
                  <p className="text-gray-600">Make a difference through community service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <img
              src="\hillelresearch.jpg"
              alt="Students at Texas Tech Hillel"
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-blue-800 text-white p-6 rounded-lg shadow-lg hidden sm:block">
              <p className="text-xl font-semibold">20+</p>
              <p>Active Students</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 shadow-sm mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Programs & Initiatives</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">Leadership Development</h4>
              <p className="text-gray-600 text-center">
                Build essential skills through workshops, retreats, and hands-on experience planning events
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <Globe className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">Birthright Israel</h4>
              <p className="text-gray-600 text-center">
                Join fellow students on a life-changing trip to Israel to explore your heritage
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2 text-center">Peer Network</h4>
              <p className="text-gray-600 text-center">
                Connect with mentors who can help you navigate campus life and Jewish identity
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors font-medium"
            >
              Join a Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};