
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  


const BarChart = ({chartData}) => {

   const options = {
    responsive: true,
    plugins: {
      legend: {
        
        display:false
      },
    },
    
    scales: {
      yAxes:{
          grid: {
              color: '#dddddd81',
              borderDash:[4,6]
          },
          ticks:{
              color: '#ffffff',
              stepSize:20,
          }
      },
      xAxes: {
          grid: {
              color: '#dddddd81',
              borderDash:[4,6]
          },
          ticks:{
              color: '#ffffff',
              fontSize: 12,
          }
      },
    }
   
  };
  
  const labels = chartData.map((d)=>d.label);
  

   const data = {
    labels,
    datasets: [
      {
        label: 'Mobile davices',
        data:chartData.map((d)=>d.data),
        backgroundColor: 'rgb(252, 252, 252)',
        borderWidth: 8,
        borderColor:'transparent',
    
      },
    
    ],
  };
  return (
    <Bar options={options} data={data} height="80%" width="100%" />

  )
}

export default BarChart