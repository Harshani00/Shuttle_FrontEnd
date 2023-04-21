import React, { useState } from 'react';
import "./Profile.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
       <div>
        <NotificationsNoneIcon className='NotificationsNoneIcon'/>
      </div>
      <div className='name'>John Doe</div>
    <div className='dropdownmenu'>
     
      
      <div className='dropdown-header' onClick={toggleDropdown}>
        <ArrowDropDownIcon className='ArrowDropDownIcon'/>
      </div>
      {isOpen && (
        <div className='dropdown-items'>
          <div className='dropdown-item'>Profile</div>
         
        </div>
      )}
    </div>
    
    </div>
  );
}
