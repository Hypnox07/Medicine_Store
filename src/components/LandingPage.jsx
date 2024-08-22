import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/landingPage.css'

const LandingPage = () => {
const navigate = useNavigate();

const handleGetStarted = () => {
navigate('/signup');
};

return (
<>
    <div className='bg-image text-white d-flex align-items-center justify-content-center flex-column mt-0 '>
       
        <div>
        <h1>Welcome to the Medical Store Management System</h1>
        </div>
        <div> 
        <button onClick={handleGetStarted} className='bg-info rounded-2 border border-0'>Get Started</button>
        </div>
        

        
       
    </div>
</>
);
};

export default LandingPage;