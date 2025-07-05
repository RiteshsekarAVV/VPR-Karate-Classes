import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Textarea } from '../../components/ui/Textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { toast } from 'sonner';
import { UserPlus, Phone, MessageSquare, User } from 'lucide-react';

const JoinNow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    try {
      await addDoc(collection(db, 'joinRequests'), {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        status: 'pending',
        createdAt: serverTimestamp()
      });

      toast.success('Your request has been submitted successfully! We will contact you soon.');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting join request:', error);
      toast.error('Failed to submit your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Classes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards mastering karate. Fill out the form below and we'll 
            contact you to discuss your goals and schedule a trial class.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Join Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <UserPlus className="h-6 w-6 text-red-600 mr-2" />
                Join Request Form
              </CardTitle>
              <CardDescription>
                Fill out your details and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your experience level, goals, or any questions you have..."
                      className="pl-10 resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-red-600 hover:bg-red-700 h-12"
                >
                  {isLoading ? (
                    <LoadingSpinner size="sm" className="mr-2" />
                  ) : null}
                  {isLoading ? 'Submitting...' : 'Submit Join Request'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* What to Expect */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-red-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">We'll Contact You</h3>
                      <p className="text-gray-600 text-sm">
                        Our team will reach out within 24 hours to discuss your goals and answer any questions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-red-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Schedule Trial Class</h3>
                      <p className="text-gray-600 text-sm">
                        We'll schedule a free trial class at a time that works for you.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-red-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Begin Your Journey</h3>
                      <p className="text-gray-600 text-sm">
                        After your trial, you can enroll and start your martial arts journey with us.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Why Choose VPR Karate?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Expert instruction with 25+ years experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Classes for all ages and skill levels
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Traditional techniques with modern training
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Supportive and welcoming community
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Flexible scheduling options
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;