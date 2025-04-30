import React from 'react';
import { Users, BookOpen, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Texas Tech Hillel</h2>
          <div className="w-20 h-1 bg-red-700 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Texas Tech Hillel is the center for Jewish life on campus, providing a welcoming community 
              for students of all backgrounds. Our mission is to enrich the lives of Jewish students 
              so they may enrich the Jewish people and the world.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Founded over 100 years ago, we have been a home away from home for countless students, 
              providing them with opportunities to explore Jewish identity, culture, and traditions 
              while building meaningful connections with peers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  <Users className="h-10 w-10 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Community</h3>
                <p className="text-gray-600 text-center">Building connections and lifelong friendships</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  <BookOpen className="h-10 w-10 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Education</h3>
                <p className="text-gray-600 text-center">Exploring Jewish heritage, culture, and values</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  <Heart className="h-10 w-10 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Support</h3>
                <p className="text-gray-600 text-center">Providing a home away from home for students</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 overflow-hidden rounded-xl shadow-xl">
            <img 
              src="src\data\IsraelHillel.PNG" 
              alt="Students gathering at Hillel" 
              className="w-full h-auto object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-blue-50 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-800 mb-2">Community</h4>
              <p className="text-gray-700">Creating an inclusive environment where all feel welcome</p>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-800 mb-2">Leadership</h4>
              <p className="text-gray-700">Empowering students to lead and make a positive impact</p>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-800 mb-2">Tradition</h4>
              <p className="text-gray-700">Honoring Jewish traditions while embracing innovation</p>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-800 mb-2">Tikkun Olam</h4>
              <p className="text-gray-700">Commitment to repairing the world through service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};