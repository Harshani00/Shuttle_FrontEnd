
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import Buses from "./Pages/Buses"
import Drivers from "./Pages/Drivers"



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
      </Routes>
      </BrowserRouter>
    
    
     </div>
  );
}

export default App;


