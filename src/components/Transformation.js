 'use client';

import React from 'react';

const defaultImages = [
  '/images/transformation 1.jpeg',
  '/images/transformation 2.jpeg',
  '/images/transformation 3.jpeg'
];

const Transformation = ({ images = defaultImages }) => {
  return (
    <section id="transformation" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Transformations</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Before & after photos from clients I've coached. Click an image to open full size.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="bg-gray-900/40 rounded-lg overflow-hidden shadow-md">
              <a href={src} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt={`Transformation ${idx + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="p-4 text-gray-300">
                <div className="text-sm">Client {idx + 1}</div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Transformation;
