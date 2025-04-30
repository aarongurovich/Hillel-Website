import React, { useState } from 'react';
import { galleryData } from '../data/galleryData';
import { X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-red-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Take a look at the vibrant community and memorable moments from our events and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
              onClick={() => openModal(item.url)}
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover"
                style={{ aspectRatio: index === 0 ? '2/2' : '1/1' }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-transparent border-2 border-red-700 text-red-700 rounded-md hover:bg-red-700 hover:text-white transition-colors font-medium">
            View All Photos
          </button>
        </div>

        {/* Image modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white focus:outline-none"
              aria-label="Close modal"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged gallery photo"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};