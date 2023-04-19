import Profile from "../Components/Profile/Profile";
import SideBar from "../Components/SideBar/SideBar";
import "./Drivers.css";


export default function Dashboard() {
  return (
    <div>
      
      <Profile/>
      <SideBar/>

      <div className="drivers">Drivers</div>

      <div className="addbutton">
        <button class="button">ADD NEW DRIVERS</button>
      </div>
  
    </div>
  )
}