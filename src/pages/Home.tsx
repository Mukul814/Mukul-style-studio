import React from 'react';
import { ArrowRight, Scissors, Clock, Star, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Mukul's Style Studio
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Experience the perfect blend of traditional Indian beauty treatments and modern styling techniques. Let us help you discover your true beauty.
            </p>
            <Link
              to="/appointment"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
            >
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600">
              Experience the finest in Indian beauty and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-orange-100">
              <Scissors className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Styling</h3>
              <p className="text-gray-600">
                Traditional Indian techniques combined with modern styling expertise
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-orange-100">
              <Clock className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Convenient Booking</h3>
              <p className="text-gray-600">
                Easy online appointment scheduling with flexible timing
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-orange-100">
              <Star className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Experience</h3>
              <p className="text-gray-600">
                Luxurious salon experience with personalized attention
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for a Traditional Makeover?
          </h2>
          <p className="text-xl text-white mb-8">
            Book your appointment today and experience authentic Indian beauty treatments
          </p>
          <Link
            to="/appointment"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50"
          >
            Book Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;