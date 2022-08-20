import { Grid } from "@mui/material";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";


export default function App() {
  return (
    <Grid container flexWrap="nowrap">

  <Sidebar />
  <Dashboard />

    
    </Grid>

  )
}
