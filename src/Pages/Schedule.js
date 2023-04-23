import Profile from "../Components/Profile/Profile";
import SideBar from "../Components/SideBar/SideBar";
import "./Schedule.css";
import React, { useState } from 'react';


const ScheduleData = [
  { schid: "001", busno: "John Smith", drivername: "123456789V", startdate: "0712345678",enddate:"10-03-2023",days:"5",departure:"7.30 AM",arrival:"8.00AM"},
  { schid: "002", busno: "Jane Doe", nic: "987654321V", tele: "0776543210" },
  { schid: "003", busno: "Bob Johnson", nic: "456789123V", tele: "0765432109" },
];


const Table = () => {
  const [data, setData] = useState(ScheduleData);
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddNewSchedule = () => {
    const newSchedule = { schid: '', busid: '', drivername: '', startdate: '',enddate:'',days:'',departure:'',arrival:''};
    setData(prevData => [...prevData, newSchedule]);
    setEditingIndex(data.length); 
  };
  
  
    

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setEditingIndex(null);
  };

  const handleSave = (index, newData) => {
    const updatedData = [...data];
    updatedData[index] = newData;
    setData(updatedData);
  };
  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(
    (d) =>
      d.schid.toString().includes(searchTerm.toLocaleLowerCase()) ||
      d.busno.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.drivername.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.startdate.toString().includes(searchTerm.toLowerCase())||
      d.enddate.toString().includes(searchTerm.toLowerCase()) ||
      d.days.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.departure.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.arrival.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className=" search-container">
      <input type="text" className="search" placeholder="Search..." onChange={handleSearch} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Sch ID</th>
            <th>Bus No</th>
            <th>Driver Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Days</th>
            <th>Depature</th>
            <th>Arrival</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((d, index) =>
            index === editingIndex ? (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={d.driverid}
                    onChange={(event) =>
                      handleSave(index, { ...d, schid: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.drivername}
                    onChange={(event) =>
                      handleSave(index, { ...d, busno: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.nic}
                    onChange={(event) =>
                      handleSave(index, { ...d, drivername: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.tele}
                    onChange={(event) =>
                      handleSave(index, { ...d, startdate: event.target.value })
                    }
                  />
                </td>

                <td>
                  <input
                    type="text"
                    value={d.driverid}
                    onChange={(event) =>
                      handleSave(index, { ...d, enddate: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.drivername}
                    onChange={(event) =>
                      handleSave(index, { ...d, days: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.nic}
                    onChange={(event) =>
                      handleSave(index, { ...d, departure: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.tele}
                    onChange={(event) =>
                      handleSave(index, { ...d, arrival: event.target.value })
                    }
                  />
                </td>
                <td>
                <button onClick={() => handleSave(index, d)}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td>{d.schid}</td>
                <td>{d.busno}</td>
                <td>{d.drivername}</td>
                <td>{d.startdate}</td>
                <td>{d.enddate}</td>
                <td>{d.days}</td>
                <td>{d.departure}</td>
                <td>{d.arrival}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <button className="button1" onClick={() => handleAddNewSchedule()}>
        ADD NEW SCHEDULE
        </button>
    </div>
  );
};


export default function Dashboard() {
  
  

  return (
    <div>
      <Profile />
      <SideBar />
      <div className="schedule">Schedule</div>
      
      <Table />
    </div>
  );
}
