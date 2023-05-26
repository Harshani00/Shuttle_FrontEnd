import React, { useState } from 'react';
import './Notifications.css';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  const handleAddNotification = () => {
    const newNotification = {
      id: Date.now(),
      message: 'Bus has arrived to your location!',
    };

    setNotifications([...notifications, newNotification]);
  };

  const handleRemoveNotification = (id) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    );
    setNotifications(updatedNotifications);
  };

  return (
    <div>
      <button className="notification-button" onClick={handleAddNotification}>
        You have New Notifications!
      </button>
      {notifications.length > 0 ? (
        <div>
          <h2>Notifications:</h2>
          {notifications.map((notification) => (
            <div key={notification.id} className="card">
              <p>{notification.message}</p>
              <button onClick={() => handleRemoveNotification(notification.id)}>
                Dismiss
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No notifications yet.</p>
      )}
    </div>
  );
};

export default NotificationPage;
