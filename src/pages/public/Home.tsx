import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Shield, Users, Award, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master the Art of Karate
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join VPR Karate Classes and embark on a journey of self-discipline, 
              physical fitness, and mental strength under expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Link to="/join">Start Your Journey</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose VPR Karate Classes?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of traditional karate techniques and modern training methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Training</h3>
              <p className="text-gray-600">
                Learn from certified masters with years of experience in traditional karate.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">All Ages Welcome</h3>
              <p className="text-gray-600">
                Classes designed for children, teenagers, and adults of all skill levels.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Belt Progression</h3>
              <p className="text-gray-600">
                Structured curriculum with clear progression through belt ranks.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Multiple class times throughout the week to fit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Begin Your Karate Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their lives through martial arts.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <Link to="/join">Join Our Classes Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;