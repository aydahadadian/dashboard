import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getWeatherData } from "./api/weatherApi";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";


export default function App() {
const[weatherData, setWeatherData] = useState([]);

  // useEffect(() => {


  //    getWeatherData(51.4215,35.6944)
  //       .then((data)=> {
       
  //         setWeatherData(data[0]);
  //         console.log("heoooo");
  //       })
       

  // }, [])


  
  return (
    <Grid container flexWrap="nowrap">

  <Sidebar />
  <Dashboard />

    
    </Grid>

  )
}
