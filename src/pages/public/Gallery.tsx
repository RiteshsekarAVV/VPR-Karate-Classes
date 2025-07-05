import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: "https://images.pexels.com/photos/7045567/pexels-photo-7045567.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Group Training Session",
      description: "Students practicing kata in synchronized formation"
    },
    {
      url: "https://images.pexels.com/photos/7045573/pexels-photo-7045573.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Master Demonstration",
      description: "Master VPR demonstrating advanced techniques"
    },
    {
      url: "https://images.pexels.com/photos/7045568/pexels-photo-7045568.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Belt Ceremony",
      description: "Students receiving their new belt ranks"
    },
    {
      url: "https://images.pexels.com/photos/7045570/pexels-photo-7045570.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Youth Training",
      description: "Young students learning basic techniques"
    },
    {
      url: "https://images.pexels.com/photos/7045571/pexels-photo-7045571.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Sparring Practice",
      description: "Controlled sparring between advanced students"
    },
    {
      url: "https://images.pexels.com/photos/7045569/pexels-photo-7045569.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Dojo Interior",
      description: "Our traditional training space"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our dojo, training sessions, and the vibrant community 
            of martial artists at VPR Karate Classes.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            
            {/* Overlay with title and description */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {images[currentIndex].title}
              </h3>
              <p className="text-gray-200">
                {images[currentIndex].description}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-red-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentIndex 
                  ? 'ring-4 ring-red-600 ring-opacity-50' 
                  : 'hover:opacity-80'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
              <div className="text-gray-600">Years of Memories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Students Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600">Belt Ceremonies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;