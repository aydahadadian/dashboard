import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
 
  
const AreaChart = ({chartData}) => {

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
          },
          ticks:{
              color: '#ffffff',
          }
      },
      xAxes: {
          grid: {
              color: '#dddddd81',
          },
          ticks:{
              color: '#ffffff',
            
          }
      },
    }
   
  };
  
  const labels =  chartData.map((d)=>d.label);
  
  const data = {
    labels,
    datasets: [
      {
        fill: false,
        label: 'Mobile davices',
        data: chartData.map((d)=>d.data),
        borderColor: 'rgb(255, 255, 255)',
        
      },
    ],
  };
  return (
    <Line options={options} data={data} height="100%" />
  )
}

export default AreaChart