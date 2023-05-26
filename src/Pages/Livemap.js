import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import "./Livemap.css"
import Sidebar from '../Components/SideBar/SideBar';
import Profile from '../Components/Profile/Profile';

function Map() {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  
  useEffect(() => {
    const loader = new Loader({
      apiKey: 'AIzaSyBDs-1qXDH-ZUtTsEEJxZldmMd94r2kpog',
      version: 'weekly',
    });
    
    loader.load().then(() => {
      const options = {
        center: { lat: 6.821617, lng: 80.041594 },
        zoom: 13,
      };
      
      const map = new window.google.maps.Map(mapRef.current, options);
      
      const markerOptions = {
        position: { lat: 6.8388, lng: 79.9766 },
        map: map,
        title: 'Current Location',
        icon: {
          url: './Images/busicon.png', // Replace with the path to your bus icon image
          scaledSize: new window.google.maps.Size(32, 32), // Adjust the size of the icon as needed
        },
      };
      
      new window.google.maps.Marker(markerOptions);
      
      setMap(map);
    });
  }, []);
  
  return (
    <div className="LiveMap-container">
      <div className="LiveMap-map" ref={mapRef}></div>
      <div className="LiveMap-sidebar">
        <div className='tittle'>LiveMap</div>
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
}

export default Map;