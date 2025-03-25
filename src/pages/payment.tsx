import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
  const { appointmentId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock appointment data - in a real app, this would come from your database
  const appointmentDetails = {
    therapy: 'Physical Therapy',
    date: '2025-03-26',
    time: '10:00 AM',
    price: 120.00
  };

  const handlePayment = async () => {
    setLoading(true);
    setError('');

    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
      
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      // In a real application, this would make a call to your backend to create a Stripe session
      // For now, we'll just show a success message
      setTimeout(() => {
        setLoading(false);
        alert('Payment successful! You will receive a confirmation email shortly.');
        navigate('/');
      }, 2000);

    } catch (err) {
      setError('Payment failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Payment Details</h1>
          
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Appointment Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-medium">{appointmentDetails.therapy}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{appointmentDetails.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">{appointmentDetails.time}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-4">
                <span>Total Amount:</span>
                <span>${appointmentDetails.price.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6">
              {error}
            </div>
          )}

          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Your payment is secure and encrypted. You will receive a confirmation email after successful payment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
