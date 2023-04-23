
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import Buses from "./Pages/Buses"
import Drivers from "./Pages/Drivers"
import Livemap from "./Pages/Livemap"
import Schedule from "./Pages/Schedule";
//import AddDriverForm from "./Components/Forms/AddDriverForm"









function App() {
  return (
    
    <div className ="App">
      <BrowserRouter>
<Routes>
  <Route index element={<Login/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/Dashboard" element={<Dashboard/>}/>
  <Route path="/Buses" element={<Buses/>}/>
  <Route path="/Drivers" element={<Drivers/>}/>
  <Route path="/Livemap" element={<Livemap/>}/>
  <Route path="/Schedule" element={<Schedule/>}/>
  
  
 
</Routes>
</BrowserRouter>
 
   
   
     </div>
  );
}

export default App;


//<Route path="/AddDriverForm" element={<AddDriverForm/>}/>
     

