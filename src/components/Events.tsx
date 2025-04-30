import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { eventData } from '../data/eventData';

export const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join us for a variety of exciting events, from Shabbat dinners to holiday celebrations,
            social gatherings, and educational programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventData.map((event, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div 
                className="h-48 overflow-hidden relative"
                style={{
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">{event.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-red-700 mr-2" />
                  <span className="text-gray-700">{event.date}</span>
                </div>
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 text-red-700 mr-2" />
                  <span className="text-gray-700">{event.time}</span>
                </div>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-red-700 mr-2" />
                  <span className="text-gray-700">{event.location}</span>
                </div>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <button className="w-full py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors">
                  RSVP Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-transparent border-2 border-red-700 text-red-700 rounded-md hover:bg-red-700 hover:text-white transition-colors font-medium">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};