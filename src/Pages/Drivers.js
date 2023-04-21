import Profile from "../Components/Profile/Profile";
import SideBar from "../Components/SideBar/SideBar";
import React from "react";
import "./Drivers.css";

const driversData = [
  { name: "John Smith", age: 25 },
  { name: "Jane Doe", age: 30 },
  { name: "Bob Johnson", age: 40 },
];

const Table = () => {
  const [data, setData] = React.useState(driversData);
  const [editingIndex, setEditingIndex] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleAdd = () => {
    const newData = [...data, { name: "", age: "" }];
    setData(newData);
    setEditingIndex(newData.length - 1);
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

  const handleSave = (index, updatedData) => {
    const newData = [...data];
    newData[index] = updatedData;
    setData(newData);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(
    (d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.age.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>Driver ID</th>
            <th>Driver Name</th>
            <th>NIC</th>
            <th>Tel No</th>
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
                      handleSave(index, { ...d, driverid: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.drivername}
                    onChange={(event) =>
                      handleSave(index, { ...d, drivername: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.nic}
                    onChange={(event) =>
                      handleSave(index, { ...d, nic: event.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={d.tele}
                    onChange={(event) =>
                      handleSave(index, { ...d, tele: event.target.value })
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
                <td>{d.driverid}</td>
                <td>{d.drivername}</td>
                <td>{d.nic}</td>
                <td>{d.tele}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div>
      <Profile />
      <SideBar />

      <div className="drivers">Drivers</div>

      <div className="addbutton">
        <button className="button">ADD NEW DRIVERS</button>
      </div>

      <Table />
    </div>
  );
}