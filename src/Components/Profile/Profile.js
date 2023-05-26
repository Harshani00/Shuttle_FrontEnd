import React, { useState } from 'react';
import './Profile.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProfileClick = () => {
    navigate('/AdminProfile');
  };

  const handleNotificationClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <div>
        <NotificationsNoneIcon
          className={`NotificationsNoneIcon ${showSidebar ? 'active' : ''}`}
          onClick={handleNotificationClick}
        />
      </div>
      <div className='name'>John Doe</div>
      <div className={`dropdownmenu ${showSidebar ? 'active' : ''}`}>
        <div className='dropdown-header' onClick={toggleDropdown}>
          <ArrowDropDownIcon className={`ArrowDropDownIcon ${showSidebar ? 'active' : ''}`} />
        </div>
        {isOpen && (
          <div className='dropdown-items'>
            <button className='dropdown-item' onClick={handleProfileClick}>
              Profile
            </button>
          </div>
        )}
      </div>
      {showSidebar && (
        <div className='sidebar'>
          <div className='sidebar-title'>You don't have any notifications</div>
          <div className='sidebar-content'>Please check back later</div>
        </div>
      )}
    </div>
  );
}
