import React, { useState } from 'react';

export default function PropertyCard({
  id = 1,
  title = "Luxury Villa Estate",
  address = "123 Oceanview Drive, Malibu, CA",
  price = 2450000,
  bedrooms = 4,
  bathrooms = 3,
  sqft = 3500,
  image = null,
  badge = "Featured",
  isNew = false
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Property images based on ID
  const propertyImages = {
    1: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    2: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    3: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    4: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    5: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    6: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
  };

  const propertyImage = image || propertyImages[id] || propertyImages[1];

  return (
    <div
      className="card-premium group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={propertyImage}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
            }`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {badge && (
            <span className="badge badge-gold">
              {badge}
            </span>
          )}
          {isNew && (
            <span className="badge badge-new">
              New
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isFavorite
              ? 'bg-red-500 text-white'
              : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'
            }`}
        >
          <svg
            className="w-5 h-5"
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4">
          <p className="text-2xl font-bold text-white">
            {formatPrice(price)}
          </p>
        </div>

        {/* Virtual Tour Button */}
        <div className={`absolute bottom-4 right-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/20 backdrop-blur-md text-white text-sm hover:bg-white/30 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Virtual Tour
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Address */}
        <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-accent-500 transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-slate-400 mb-4">
          <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="text-sm truncate">{address}</span>
        </div>

        {/* Divider */}
        <div className="divider mb-4" />

        {/* Property Details */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-slate-400 mb-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-white">{bedrooms}</p>
            <p className="text-xs text-slate-500">Beds</p>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="flex items-center justify-center gap-1 text-slate-400 mb-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-white">{bathrooms}</p>
            <p className="text-xs text-slate-500">Baths</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-slate-400 mb-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-white">{sqft.toLocaleString()}</p>
            <p className="text-xs text-slate-500">Sq Ft</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full btn-secondary group-hover:border-accent-500 group-hover:text-accent-500">
          View Details
        </button>
      </div>
    </div>
  );
}
