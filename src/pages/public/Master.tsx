import React from 'react';
import { Award, Clock, Users, Star } from 'lucide-react';

const Master: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the Master
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from a dedicated martial arts master with decades of experience 
            and a passion for teaching traditional karate.
          </p>
        </div>

        {/* Main Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/7045573/pexels-photo-7045573.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Master practicing karate"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Master VPR</h2>
            <p className="text-gray-600 mb-4">
              With over 25 years of experience in traditional karate, Master VPR has dedicated 
              his life to the study and teaching of martial arts. He began his journey as a 
              young student and has since achieved the rank of 7th Dan Black Belt.
            </p>
            <p className="text-gray-600 mb-4">
              Master VPR has trained under some of the most respected karate masters in the world, 
              studying various styles including Shotokan, Kyokushin, and Goju-Ryu. His teaching 
              philosophy emphasizes the development of both physical technique and mental discipline.
            </p>
            <p className="text-gray-600 mb-6">
              He has competed in national and international tournaments, earning numerous 
              championships and recognition for his exceptional skill and dedication to the art.
            </p>

            {/* Achievements Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">7th Dan</div>
                <div className="text-sm text-gray-600">Black Belt</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">Championships</div>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="bg-gray-50 rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Qualifications & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Instructor</h3>
              <p className="text-gray-600">
                Licensed by the International Karate Organization with teaching credentials.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">25+ Years</h3>
              <p className="text-gray-600">
                Extensive experience in teaching students of all ages and skill levels.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tournament Judge</h3>
              <p className="text-gray-600">
                Certified judge for regional and national karate competitions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Master Trainer</h3>
              <p className="text-gray-600">
                Trains and certifies new karate instructors in traditional methods.
              </p>
            </div>
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Teaching Philosophy</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-600">
            <blockquote className="text-xl text-gray-700 italic">
              "Karate is not about winning or losing, but about the journey of self-discovery 
              and continuous improvement. Every student has the potential to achieve greatness 
              through dedication, respect, and perseverance. My role is to guide them on this 
              path while preserving the sacred traditions of our art."
            </blockquote>
            <cite className="text-red-600 font-semibold mt-4 block">- Master VPR</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;