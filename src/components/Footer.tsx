import React from 'react';
import { Activity, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="h-8 w-8" />
              <span className="text-xl font-bold">Total Rehab</span>
            </div>
            <p className="text-gray-400">Leading rehabilitation center in Hyderabad with 9 branches across the city.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/therapies" className="text-gray-400 hover:text-white">Therapies</Link></li>
              <li><Link to="/branches" className="text-gray-400 hover:text-white">Branches</Link></li>
              <li><Link to="/staff" className="text-gray-400 hover:text-white">Our Staff</Link></li>
              <li><Link to="/appointment" className="text-gray-400 hover:text-white">Book Appointment</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Main Branch: Road No. 12, Banjara Hills</li>
              <li>Phone: +91 40 1234 5678</li>
              <li>Email: info@totalrehab.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Total Rehab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;