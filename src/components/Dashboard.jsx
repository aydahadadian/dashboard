import { Grid } from '@mui/material';
import ChartContainer from './ChartContainer';
import Navbar from './Navbar';
import Weather from './Weather';
import { makeStyles } from "@material-ui/core/styles";
import { cards, chartData, TabelData } from '../data';
import CardContainer from './CardContainer';
import Projects from './Projects';
import OverviewSidebar from './OverviewSidebar';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

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
      
 
     <div className={classes.container}>
      {chartData.map((data,index)=>
       <ChartContainer key={index} data={data} />
      
      )}
    

     </div>

     <div className={classes.container}>
      <Projects data={TabelData} />
      <OverviewSidebar />
     </div>
    
<footer>

<Box display="flex" justifyContent="space-between" color='#37474f' p='1rem'>
        
        <Box>
          @2022
          </Box>

          <Box sx={{display:'flex',gap:'3rem'}}>
          
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