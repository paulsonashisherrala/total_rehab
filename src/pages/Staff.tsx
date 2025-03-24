import React from 'react';

const staff = [
  {
    name: "Dr. Priya Sharma",
    role: "Senior Physical Therapist",
    specialization: "Sports Rehabilitation",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    education: "DPT, Sports Rehabilitation Specialist",
    description: "Dr. Sharma specializes in sports injuries and has worked with several professional athletes."
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Neurological Rehabilitation Specialist",
    specialization: "Stroke Rehabilitation",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    education: "MPT, Neuro Rehabilitation",
    description: "Expert in treating stroke patients and neurological conditions."
  },
  {
    name: "Dr. Sarah Ahmed",
    role: "Speech Therapist",
    specialization: "Pediatric Speech Therapy",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
    education: "M.Sc. Speech Therapy",
    description: "Specializes in helping children overcome speech and language disorders."
  },
  {
    name: "Dr. Karthik Reddy",
    role: "Occupational Therapist",
    specialization: "Hand Therapy",
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    education: "MOT, Certified Hand Therapist",
    description: "Expert in treating hand injuries and upper extremity conditions."
  },
  {
    name: "Dr. Meera Patel",
    role: "Cardiac Rehabilitation Specialist",
    specialization: "Cardiac Rehab",
    experience: "14+ years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
    education: "DPT, Cardiac Rehabilitation Certified",
    description: "Specialized in helping patients recover from cardiac conditions."
  },
  {
    name: "Dr. Arjun Singh",
    role: "Sports Physiotherapist",
    specialization: "Athletic Rehabilitation",
    experience: "11+ years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    education: "MPT, Sports Medicine",
    description: "Works with athletes for injury prevention and rehabilitation."
  }
];

const Staff = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our highly qualified and experienced healthcare professionals dedicated
            to helping you achieve optimal recovery and wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staff.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-4">{member.role}</p>
                
                <div className="space-y-3 text-gray-600">
                  <div>
                    <span className="font-semibold">Specialization:</span> {member.specialization}
                  </div>
                  <div>
                    <span className="font-semibold">Experience:</span> {member.experience}
                  </div>
                  <div>
                    <span className="font-semibold">Education:</span> {member.education}
                  </div>
                  <p className="mt-4">{member.description}</p>
                </div>

                <button 
                  onClick={() => window.location.href = '/appointment'}
                  className="mt-6 w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;