import Profile from "../Components/Profile/Profile";
import SideBar from "../Components/SideBar/SideBar";
import "./Buses.css";


export default function Dashboard() {
  return (
    <div>
      
      <Profile/>
      <SideBar/>

      <div className="buses">Buses</div>

      <div className="addbutton">
        <button class="button">ADD NEW BUSES</button>
      </div>
  
    </div>
  )
}
