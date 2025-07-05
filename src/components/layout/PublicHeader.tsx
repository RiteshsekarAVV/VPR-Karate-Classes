import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '../ui/Button';

const PublicHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Meet the Master', path: '/master' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Details', path: '/details' },
    { name: 'Login', path: '/login' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">VPR Karate Classes</h1>
              <p className="text-xs text-gray-500">Excellence in Martial Arts</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  isActive(item.path)
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link to="/join">Join Now</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-red-600 ${
                    isActive(item.path) ? 'text-red-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-red-600 hover:bg-red-700 w-fit">
                <Link to="/join" onClick={() => setIsMenuOpen(false)}>
                  Join Now
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default PublicHeader;