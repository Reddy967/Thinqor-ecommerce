import React from 'react';
import axios from 'axios';
import scanner from '../assets/scanner.png';
import { useEffect } from 'react';

const PaymentGateway = ({ orderId, handlePaymentSuccess }) => {
  const LoadRazorpay = async () => {

    useEffect(() => {
      const fetchOrderDetails = async () => {
        try {
          const response = await axios.get('/api/order-details/${orderId}');
          const orderDetails = response.data;
        } catch (error) {
          console.error('Error fetching order details:', error.message);
        }
      };
  
      fetchOrderDetails();
    }, [orderId]);

   

    const options = {
      key: 'rzp_test_zDJEXKwSRiwauu', // Replace with your Razorpay key

      handler: handlePaymentSuccess,
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9876543210',
      },
    };

    const handlePaymentSuccess = async (paymentId) => {
      try {
        await axios.post('/api/verify-payment/${orderId}', {
          payment_id: paymentId,
        });
      } catch (error) {
        console.error('Error verifying payment:', error.message);
      }
    };
  


    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <div>
      <div>
      <img src={scanner}></img>
      </div>
      <button onClick={LoadRazorpay}>Proceed to Payment</button>
    </div>
  );
};

export default PaymentGateway;