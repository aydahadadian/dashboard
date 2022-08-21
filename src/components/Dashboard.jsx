import { Grid } from '@mui/material';
import Navbar from './Navbar';
import Weather from './Weather';

const Dashboard = () => {
  return (
    <Grid item xs={9.5} px={1}>
      
    <Navbar />
    <Weather />

    </Grid>
  
  )
}

export default Dashboard