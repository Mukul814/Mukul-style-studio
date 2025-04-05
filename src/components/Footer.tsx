import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              Welcome to Mukul's Style Studio, where we blend traditional Indian beauty practices with modern styling techniques. Experience the best in hair care and wellness services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 900-352-4743</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>mukulchauhan814@gmail.com</span>
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Gandhi Street, New Delhi</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-orange-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Mukul's Style Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;