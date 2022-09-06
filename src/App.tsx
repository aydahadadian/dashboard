import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";


export default function App() {


  
  return (
    <Grid container flexWrap="nowrap">

  <Sidebar />
  <Dashboard />

    
    </Grid>

  )
}
