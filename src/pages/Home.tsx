import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Phone, Users } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Your Journey to Recovery Starts Here</h1>
            <p className="text-xl mb-8">Leading rehabilitation center in Hyderabad with 9 branches, offering comprehensive therapy services and expert care.</p>
            <Link 
              to="/appointment" 
              className="bg-teal-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-teal-700 transition duration-300"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">9 Locations</h3>
              <p>Conveniently located across Hyderabad</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Staff</h3>
              <p>Qualified and experienced therapists</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Timing</h3>
              <p>Morning to evening appointments</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p>Always here to help you</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Therapy Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Physical Therapy",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
                description: "Comprehensive physical rehabilitation services"
              },
              {
                title: "Occupational Therapy",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
                description: "Help with daily living activities"
              },
              {
                title: "Speech Therapy",
                image: "https://images.unsplash.com/photo-1576091160291-31957e79d8c8?auto=format&fit=crop&q=80",
                description: "Communication and swallowing disorders treatment"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to="/therapies" 
                    className="text-teal-600 font-semibold hover:text-teal-700"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;