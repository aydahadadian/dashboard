import { Box, Card, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { getWeatherData } from '../api/weatherApi';
import AutoComplete from './AutoComplete';


const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    minWidth: 300,
    minHeight: 200,
  
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    width: '95%',
    height:'100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  weatherContent: {
    display: 'flex',
    alignItems:'center',
  },
  subContent: {
    position: 'relative',
    color:'#fff',
    display:'flex',
    gap:'40px',
    width:'100%',
    height: '5vh',
    background: "linear-gradient(195deg,rgb(66, 66, 74),rgb(25, 25, 25))",
    alignItems: 'center',
    padding: '6px 32px',
    
  },
}));

const Weather = () => {

  const classes = useStyles();
  const { t } = useTranslation();

    const [value, setValue] = useState({});
    const[weatherData, setWeatherData] = useState([]);

    const defaultValue={"id":57751,"city":"Tehran","name":"Tehran","latitude": 35.7,"longitude": 51.416666666};
  
    useEffect(() => {


   
       if (value !== null){
        getWeatherData(value.longitude,value.latitude)
        .then((data)=> {

          setWeatherData(data[0]);

        })
        
       }


  }, [value])
       

 useEffect(() => {
  setValue(defaultValue)
 }, [])
 



  console.log(weatherData)

  return (
    <Card sx={{ maxWidth: 330 }} className={classes.card} color="#fff">
      <CardMedia
        component="img"
        height="200"
        image="../assets/images/billy-huynh-v9bnfMCyKbg-unsplash.jpg"
        alt="Weather"
        sx={{objectFit:'cover'}}

      />

<Box py={2} px={2} className={classes.content}>
          
         
           {weatherData?.length !== 0 &&

           <Box className={classes.mainContent}>
            
            <Typography variant='h1' component='p' >{weatherData.temp}℃</Typography>
            <div className={classes.weatherContent}>
            <Typography variant='h4' component='div'  >{weatherData.weather.description} </Typography>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${weatherData.weather.icon}.png`}
              alt="Weather"
              width='36px'
            />
              </div> 
           
           
            <Typography variant='body1' component='p'  >{weatherData.timezone}</Typography>

              
            </Box>

           }

        <AutoComplete value={value} setValue={setValue}  label={t('weather-input')} />
    
        </Box>
          
           <Box className={classes.subContent}>
            
            <Typography variant='h6' component='p' >{weatherData?.city_name}</Typography>
            <Typography variant='h6' component='p' color='inherit' sx={{marginLeft:'10px'}}>{weatherData?.ob_time}</Typography>
            {weatherData?.length !== 0 && <Typography variant='h6' component='span' >{t('weather-wind-speed')} :{weatherData?.wind_spd}</Typography>}
            {weatherData?.length !== 0 && <Typography variant='h6' component='span' >{t('Sunrise')} :{weatherData?.sunrise}</Typography>}
           
               
            </Box>
              
    </Card>

    
  )
}

export default Weather