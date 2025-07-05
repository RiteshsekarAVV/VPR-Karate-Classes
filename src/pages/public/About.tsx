import React from 'react';
import { Shield, Target, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About VPR Karate Classes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded on the principles of discipline, respect, and excellence, VPR Karate Classes 
            has been shaping martial artists for over a decade.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/7045567/pexels-photo-7045567.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Karate training session"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              VPR Karate Classes was established with a vision to provide authentic karate training 
              that combines traditional techniques with modern teaching methods. Our dojo has become 
              a sanctuary for students seeking physical fitness, mental discipline, and spiritual growth.
            </p>
            <p className="text-gray-600 mb-4">
              We believe that karate is not just about fighting techniques, but about building character, 
              developing self-confidence, and creating a strong foundation for life. Our comprehensive 
              curriculum is designed to benefit students of all ages and abilities.
            </p>
            <p className="text-gray-600">
              With a focus on safety, respect, and continuous improvement, we have trained hundreds 
              of students who have gone on to achieve their personal goals both in martial arts 
              and in their daily lives.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Discipline</h3>
              <p className="text-gray-600">
                Building self-control and mental strength through consistent practice and dedication.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Striving for perfection in technique, form, and personal development.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Respect</h3>
              <p className="text-gray-600">
                Honoring our instructors, fellow students, and the traditions of martial arts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Building lasting friendships and supporting each other's growth journey.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            To provide exceptional karate instruction that develops physical fitness, mental discipline, 
            and strong character in our students, while preserving the rich traditions of martial arts 
            and fostering a supportive community environment where everyone can achieve their full potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;