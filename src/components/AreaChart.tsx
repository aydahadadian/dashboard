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
  
  interface Props {

    chartData: {label:string,data:number}[]
  }
  
const AreaChart : React.FC<Props> = ({chartData}) => {

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
              stepSize:400,
      
          },
        
          
        
      },
      xAxes: {
          grid: {
              display:false
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
        borderColor: 'rgba(255, 255, 255, 0.822)',
        backgroundColor: 'rgba(255, 255, 255, 0.822)',
        tension: 0,
        pointRadius: 3,
        borderWidth: 4,

        
      },
    ],
  };
  return (
    <Line options={options} data={data} height="65%" width="100%" />
     
    )
}

export default AreaChart