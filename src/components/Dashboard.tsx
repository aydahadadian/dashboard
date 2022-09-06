import { Grid } from '@mui/material';
import Navbar from './Navbar';
import { makeStyles } from "@material-ui/core/styles";

import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Weather from './Weather';
import CardContainer from './CardContainer';
import ChartContainer from './ChartContainer';
import Projects from './Projects';
import { TableData } from '../data';
import OverviewSidebar from './OverviewSidebar';

const useStyle = makeStyles ({

  container : {
     display:'flex',
     flexWrap:'wrap',
     width:'100%',

  }
})

const Dashboard = () => {
 

  const classes = useStyle();
  const { t } = useTranslation();
  
  return (
    <Grid item xs={9.5} px={1}>
      
    <Navbar />
    <Weather />
    <CardContainer />
    <ChartContainer />


     <div className={classes.container}>
      <Projects  data={TableData} />
      <OverviewSidebar />
     </div>
   
    
<footer>

<Box display="flex" justifyContent="space-between" color='#37474f' p='1rem'>
        
        <Box>
          @2022
          </Box>

          <Box sx={{display:'flex',justifyContent:'space-between',minWidth:'250px'}}>
          
            <Typography variant='body1' component='span' >{t('footer-license')}</Typography>
            <Typography variant='body1' component='span'>{t('footer-blog')}</Typography>
            <Typography variant='body1' component='span'>{t('about-us')}</Typography>
        
        </Box>
          </Box>
      </footer> 
    </Grid>
  
  )
}

export default Dashboard