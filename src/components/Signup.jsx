import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import '../css/Signup.css'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }
    const user = { username, email, password };
    // Save the user to localStorage (or send a request to the backend)
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(loginSuccess(user));
    navigate('/login'); // Redirect to login page after signup
  };

  return (
    <div className='bgSignup-image d-flex flex-column text-center justify-content-center align-items-center vh-100'>
      <h2 className='text-uppercase text-white shadow-lg mb-4'>Signup</h2>
      <form onSubmit={handleSignup} className='signup-form p-4 d-flex flex-column align-items-center justify-content-center shadow-custom'>
        {error && <p style={{ color: 'black' }}>{error}</p>}
        <div className='d-flex flex-column w-100 align-items-center'>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className='mb-3 p-2 form-control' />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" className='mb-3 p-2 form-control' />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className='mb-3 p-2 form-control' />
          <button type="submit" className='btn btn-danger w-100'>Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
