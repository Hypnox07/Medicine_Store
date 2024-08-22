import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      dispatch(loginSuccess(storedUser));
      navigate("/medicine-list");
    } else {
      setError('User not found or incorrect password.'); // Show error if credentials don't match
    }
  };

  return (
    <div className='bgLogin-image d-flex flex-column text-center justify-content-center align-items-center vh-100'>
      <h2 className='text-uppercase text-white shadow-lg mb-4'>Login</h2>
      <form onSubmit={handleLogin} className='login-form p-4 d-flex flex-column align-items-center justify-content-center shadow-custom'>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='d-flex flex-column w-100 align-items-center'>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className='mb-3 p-2 form-control' />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='mb-3 p-2 form-control' />
          <button type="submit" className='btn btn-primary w-100'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
