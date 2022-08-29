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
    margin:'5px 10px',
    boxShadow:'0px 6px 22px -12px #000000c9',
      
    '&::before':{
      content:'""',
      position: 'absolute',
      top:0,
      left:0,
      width:'100%',
      height: '100%',
      background: "linear-gradient(180deg,rgb(255, 255, 255),rgb(25, 25, 25))",
      opacity: '0.2',
      zIndex:1,
    }
  
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
 
}));

const Weather = () => {

  const classes = useStyles();
  const { t } = useTranslation();

    const[value, setValue] = useState("");
    const[weatherData, setWeatherData] = useState([]);
    const[location, setLocation] = useState({});

    
    useEffect(() => {
   
      
        getWeatherData(location.longitude,location.latitude)
        .then((data)=> {
           data !== undefined &&
          setWeatherData(data[0]);

        })


  }, [location])
       

useEffect(() => {
  
  if(value?.longitude) {
   setLocation({latitude:value.latitude,longitude:value.longitude,city:value.city,country:value.country})
  }else{
    setLocation({latitude:35.7219,longitude:51.3347,city:'Tehran',country:'Iran'})
  } 
}, [value])

console.log(value)

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

           <Box className={classes.mainContent} sx={{direction: "ltr"}}>
            
            <Typography variant='h2' component='p' sx={{direction: "ltr"}}>{weatherData.temp}℃</Typography>
            <div className={classes.weatherContent}>
            <Typography variant='h4' component='div'  >{weatherData.weather.description} </Typography>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${weatherData.weather.icon}.png`}
              alt="Weather"
              width='36px'
            />
              </div> 
           
           
            <Typography variant='body1' component='p'  >{location.country} / {location.city}</Typography>

              
            </Box>

           }

        <AutoComplete value={value} setValue={setValue}  label={t('weather-input')} />
    
        </Box>
          
          
              
    </Card>

    
  )
}

export default Weather