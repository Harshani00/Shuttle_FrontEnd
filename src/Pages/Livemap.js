import React from 'react'
import Profile from '../Components/Profile/Profile'
import Sidebar from '../Components/SideBar/SideBar'
import "./Livemap.css"


export default function Livemap() {
  return (
    <div>
      <Sidebar/>
      <Profile/>


      <p className='livemap'>LiveMap</p>
    </div>
  )
}
