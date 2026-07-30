// src/pages/OtpVerify.js
import React, { useState } from 'react';
import axios from 'axios';

function OtpVerify() {
  const [otp, setOtp] = useState('');
  const userId = localStorage.getItem('userId');

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/verify-otp', { otp, userId });
      if (res.data.success) {
        alert('OTP Verified! Authentication complete.');
      } else {
        alert('OTP Verification failed.');
      }
    } catch (err) {
      alert('Error verifying OTP');
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <form onSubmit={handleOtpSubmit}>
        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default OtpVerify;
