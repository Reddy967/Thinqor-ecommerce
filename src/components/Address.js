import React from "react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../Styles/address.css";
import axios from "axios";

const Address = () =>{
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phonenumber, setPhonenumber] = useState('');
  const [Streetnumber, setStreetnumber] = useState('');
  const [State, setState] = useState('');
  const [City, setCity] = useState('');
  const [Pincode, setPincode] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddressSubmit = async () => {
    try {
      const addressResponse = await fetch('http://127.0.0.1:8000/api/address/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({Name, Email, Phonenumber, Streetnumber, State, City, Pincode }),
      });

      if (addressResponse.ok) {
        const addressData = await addressResponse.json();
        console.log('Address stored successfully:', addressData);
       
        if (selectedProduct) {
          try {
            const orderResponse = await fetch('http://127.0.0.1:8000/api/order-create/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                product_id: selectedProduct.id,
                address_id: addressData.id,
              }),
            });
  
            if (orderResponse.ok) {
              const orderData = await orderResponse.json();
            console.log('Order created successfully:', orderData);
            navigate('/PaymentGateway');
          } else {
            console.error('Error creating order:', orderResponse.status);
          }
        } catch (error) {
          console.error('An error occurred while creating order:', error);
        }
      }
    } else {
      console.error('Error storing address:', addressResponse.status);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

  return (
    <div>
      {(product &&
        <div className="product">
          <h3>Product Details</h3>
          <img src={product.image} alt={product.name} style={{ width: '200px' }} />
          <p style={{color:'orange'}}>{product.name}</p>
          <p style={{color:'orange'}}>Rs {product.price}</p><p>including taxes</p>
        </div>
      )}
      <form>
      <div className="contact-us-container">
      <h1 style={{color:'orange'}}>Fill Your shipping Address Properly</h1>
      <div className="contact-form">
        <label><b>Name</b></label><br/>
        <input type="text" name="Name" value={Name} onChange={(e) => setName(e.target.value)} />
        <label><b>Email</b></label><br/>
        <input type="email" name="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
        <label><b>PhoneNumber</b></label><br/>
        <input type="text" name="Phonenumber" value={Phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
        <label><b>StreetNumber</b></label>
        <input type="text" name="Streetnumber" value={Streetnumber} onChange={(e) => setStreetnumber(e.target.value)} />
        <label><b>City or Village</b></label>
        <input type="text" name="City" value={City} onChange={(e) => setCity(e.target.value)} />
        <label><b>State</b></label>
        <input type="text" name="State" value={State} onChange={(e) => setState(e.target.value)} />
        <label><b>Pincode</b></label>
        <input type="text" name="Pincode" value={Pincode} onChange={(e) => setPincode(e.target.value)} />
        <button onClick={handleAddressSubmit}>Submit And Proceed</button>
      </div>
    </div>
      </form>
    </div>
  );
}
export default Address;