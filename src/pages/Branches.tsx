import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const branches = [
  {
    name: "Banjara Hills",
    address: "Road No. 12, Banjara Hills, Hyderabad",
    phone: "+91 40 1234 5678",
    timing: "9:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80",
    specialties: ["Physical Therapy", "Neurological Rehabilitation", "Speech Therapy"]
  },
  {
    name: "Jubilee Hills",
    address: "Plot 45, Jubilee Hills, Hyderabad",
    phone: "+91 40 2345 6789",
    timing: "8:00 AM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    specialties: ["Sports Rehabilitation", "Occupational Therapy"]
  },
  {
    name: "HITEC City",
    address: "Near Cyber Towers, HITEC City, Hyderabad",
    phone: "+91 40 3456 7890",
    timing: "7:00 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?auto=format&fit=crop&q=80",
    specialties: ["Physical Therapy", "Cardiac Rehabilitation"]
  },
  {
    name: "Gachibowli",
    address: "Financial District, Gachibowli, Hyderabad",
    phone: "+91 40 4567 8901",
    timing: "8:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    specialties: ["Sports Rehabilitation", "Physical Therapy"]
  },
  {
    name: "Kukatpally",
    address: "KPHB Colony, Kukatpally, Hyderabad",
    phone: "+91 40 5678 9012",
    timing: "9:00 AM - 7:00 PM",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80",
    specialties: ["Occupational Therapy", "Speech Therapy"]
  },
  {
    name: "Secunderabad",
    address: "Paradise Circle, Secunderabad",
    phone: "+91 40 6789 0123",
    timing: "8:30 AM - 8:30 PM",
    image: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?auto=format&fit=crop&q=80",
    specialties: ["Neurological Rehabilitation", "Physical Therapy"]
  },
  {
    name: "Madhapur",
    address: "Near Inorbit Mall, Madhapur, Hyderabad",
    phone: "+91 40 7890 1234",
    timing: "8:00 AM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80",
    specialties: ["Physical Therapy", "Sports Rehabilitation"]
  },
  {
    name: "Ameerpet",
    address: "Main Road, Ameerpet, Hyderabad",
    phone: "+91 40 8901 2345",
    timing: "9:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    specialties: ["Speech Therapy", "Occupational Therapy"]
  },
  {
    name: "Dilsukhnagar",
    address: "Main Road, Dilsukhnagar, Hyderabad",
    phone: "+91 40 9012 3456",
    timing: "8:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?auto=format&fit=crop&q=80",
    specialties: ["Physical Therapy", "Cardiac Rehabilitation"]
  }
];

const Branches = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Branches</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With 9 convenient locations across Hyderabad, we're always nearby to help you
            on your journey to recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={branch.image} 
                alt={branch.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{branch.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-teal-600 mt-1 mr-3" />
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-teal-600 mr-3" />
                    <p className="text-gray-600">{branch.phone}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-teal-600 mr-3" />
                    <p className="text-gray-600">{branch.timing}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Branches;