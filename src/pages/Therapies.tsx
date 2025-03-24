import React from 'react';
import { Activity, Brain, Heart, MessageSquare, Stethoscope, Dumbbell } from 'lucide-react';

const therapies = [
  {
    icon: Stethoscope,
    title: "Physical Therapy",
    description: "Our physical therapy services help patients recover from injuries, surgeries, and chronic conditions. We focus on improving mobility, strength, and function through personalized exercise programs and manual therapy techniques.",
    treatments: ["Joint Mobilization", "Therapeutic Exercise", "Sports Rehabilitation", "Post-Surgery Recovery"]
  },
  {
    icon: Brain,
    title: "Neurological Rehabilitation",
    description: "Specialized therapy for patients with neurological conditions such as stroke, brain injury, or spinal cord injuries. We work to improve balance, coordination, and daily living activities.",
    treatments: ["Balance Training", "Gait Training", "Cognitive Rehabilitation", "Neuromuscular Re-education"]
  },
  {
    icon: MessageSquare,
    title: "Speech Therapy",
    description: "Comprehensive speech and language therapy for both children and adults. We treat communication disorders, swallowing difficulties, and voice problems.",
    treatments: ["Articulation Therapy", "Language Intervention", "Swallowing Therapy", "Voice Therapy"]
  },
  {
    icon: Activity,
    title: "Occupational Therapy",
    description: "Helping patients regain independence in daily activities through targeted interventions and adaptive techniques. Perfect for both pediatric and adult patients.",
    treatments: ["Daily Living Skills", "Hand Therapy", "Pediatric Development", "Ergonomic Training"]
  },
  {
    icon: Heart,
    title: "Cardiac Rehabilitation",
    description: "Specialized programs for heart patients focusing on safe exercise progression, lifestyle modification, and risk factor management.",
    treatments: ["Monitored Exercise", "Heart Health Education", "Lifestyle Counseling", "Risk Management"]
  },
  {
    icon: Dumbbell,
    title: "Sports Rehabilitation",
    description: "Get back in the game with our sports-specific rehabilitation programs. We work with athletes of all levels to ensure a safe and effective return to sport.",
    treatments: ["Sport-Specific Training", "Injury Prevention", "Performance Enhancement", "Return-to-Play Programs"]
  }
];

const Therapies = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Therapy Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive rehabilitation services tailored to your specific needs,
            delivered by our team of experienced healthcare professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapies.map((therapy, index) => {
            const Icon = therapy.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{therapy.title}</h3>
                  <p className="text-gray-600 mb-6">{therapy.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Treatments:</h4>
                    <ul className="space-y-2">
                      {therapy.treatments.map((treatment, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-teal-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help Choosing the Right Therapy?</h2>
            <p className="text-gray-600 mb-6">
              Our expert team can help you determine the most appropriate treatment plan for your condition.
              Schedule a consultation today.
            </p>
            <button 
              onClick={() => window.location.href = '/appointment'}
              className="bg-teal-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-teal-700 transition duration-300"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapies;