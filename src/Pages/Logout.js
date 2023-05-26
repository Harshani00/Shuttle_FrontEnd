import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Logout.css";

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    
    // Navigate to the login page
    navigate('/Login');
  };

  return (
    <div className="logout-page">
      <div className="center-container">
        <img src="./Images/logo1.png" alt="" className='logo'  />
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;

