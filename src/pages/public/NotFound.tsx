import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            But don't worry, your karate journey continues!
          </p>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button asChild className="bg-red-600 hover:bg-red-700">
            <Link to="/" className="flex items-center">
              <Home className="h-4 w-4 mr-2" />
              Go to Homepage
            </Link>
          </Button>
          
          <Button asChild variant="outline">
            <Link to="/about" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Learn About Us
            </Link>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            "The ultimate aim of karate lies not in victory or defeat, but in the perfection of the character of its participants."
          </p>
          <p className="text-gray-400 text-xs mt-2">- Gichin Funakoshi</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;