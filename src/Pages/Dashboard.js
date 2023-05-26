import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Profile from "../Components/Profile/Profile";
import SideBar from "../Components/SideBar/SideBar";
import "./Dashboard.css";
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';

export default function Dashboard() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Generate sample data for the chart
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const data1 = [50, 35, 30, 47, 40];
    const data2 = [30, 25, 40, 32, 45];

    // Destroy previous chart instance if it exists
    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    // Get the chart canvas element
    const ctx = document.getElementById('reportChart');

    // Create the line chart
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'No.of Students - BusNo:NC 2567',
            data: data1,
            backgroundColor: 'rgba(5, 255, 40, 0.25)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'No.of Students - BusNo:ND 2858',
            data: data2,
            backgroundColor: 'rgba(255, 0, 0, 0.25)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'No. of Students Who Used Shuttle',
              font: {
                weight: 'bold'
              }
            }
          },
          x: {
            title: {
              display: true,
              text: 'Week Days',
              font: {
                weight: 'bold'
              }
            }
          }
        },
      },
    });
  }, []);

  return (
    <div>
      <SideBar/>
      <Profile/>
      
      <div className="Dashboard">DashBoard</div>

      <div className="container">
        <div className="column">
          Buses <br></br>
          4
          <DirectionsBusIcon className="DirectionsBusIcon"/>
        </div>

        <div className="column">
          Drivers<br></br>
          3
          <PersonOutlineIcon className="PersonOutlineIcon"/>
        </div>

        <div className="column">
          Schedule <br></br>
          3
          <CalendarMonthSharpIcon className="CalendarMonthSharpIcon"/>
        </div>
      </div>

      <div className="reports">Reports</div>
      
      <div className="chart-container">
        <canvas id="reportChart"></canvas>
      </div>
      
      <div className="AvailableSeats">
        <div className="Seats">Seat Availability</div>
        <img src="./Images/seat.png" alt="" className="img"/>
        <div className="availability">
          40 <br></br>
          Seats Available
        </div>
      </div>
    </div>
  )
}
