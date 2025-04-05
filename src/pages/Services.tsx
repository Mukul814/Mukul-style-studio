import React from 'react';
import { Scissors, Clock, Calendar, CreditCard, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="h-12 w-12 text-orange-600" />,
      title: 'Traditional Indian Haircut',
      price: '₹499',
      description: 'Expert haircut with traditional Indian head massage.',
      duration: '45 mins'
    },
    {
      icon: <Sparkles className="h-12 w-12 text-orange-600" />,
      title: 'Mehendi & Hair Color',
      price: 'from ₹999',
      description: 'Natural henna treatments and modern hair coloring.',
      duration: '120 mins'
    },
    {
      icon: <Heart className="h-12 w-12 text-orange-600" />,
      title: 'Ayurvedic Massage',
      price: '₹799',
      description: 'Traditional ayurvedic massage with natural oils.',
      duration: '60 mins'
    }
  ];

  return (
    <div>
      <section className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of traditional Indian beauty treatments and modern styling at Mukul's Style Studio.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-orange-100"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center text-orange-600 font-semibold">
                  <span>{service.price}</span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration}
                  </span>
                </div>
                <Link
                  to="/appointment"
                  className="mt-4 block text-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Booking Process</h2>
            <p className="mt-4 text-xl text-gray-600">
              Simple steps to schedule your appointment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Choose Date & Time</h3>
              <p className="text-gray-600 mt-2">Select your preferred appointment slot</p>
            </div>
            <div>
              <Scissors className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Select Services</h3>
              <p className="text-gray-600 mt-2">Pick your desired treatments</p>
            </div>
            <div>
              <CreditCard className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Secure Payment</h3>
              <p className="text-gray-600 mt-2">Pay securely online or in person</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;