import React from 'react';

interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
        <span className="text-white text-4xl font-bold">{property.image}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{property.name}</h3>
        <p className="text-gray-600 mb-4">{property.location}</p>
        <p className="text-2xl font-bold text-primary mb-4">{property.price}</p>
        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b">
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">{property.beds}</p>
            <p className="text-sm text-gray-600">Bedrooms</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">{property.baths}</p>
            <p className="text-sm text-gray-600">Bathrooms</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-gray-800">{property.sqft}</p>
            <p className="text-sm text-gray-600">Sq Ft</p>
          </div>
        </div>
        <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition font-semibold">
          View Details
        </button>
      </div>
    </div>
  );
}
