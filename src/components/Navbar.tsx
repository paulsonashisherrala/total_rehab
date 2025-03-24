import React from 'react';
import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Activity className="h-8 w-8" />
            <span className="text-xl font-bold">Total Rehab</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-teal-200">Home</Link>
            <Link to="/therapies" className="hover:text-teal-200">Therapies</Link>
            <Link to="/branches" className="hover:text-teal-200">Branches</Link>
            <Link to="/staff" className="hover:text-teal-200">Our Staff</Link>
            <Link to="/contact" className="hover:text-teal-200">Contact</Link>
            <Link to="/appointment" className="bg-white text-teal-600 px-4 py-2 rounded-md hover:bg-teal-100">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;