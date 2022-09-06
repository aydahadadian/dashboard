
import { useTranslation } from 'react-i18next';
import React from 'react';
import { chartData } from '../data';
import SingleChart from './SingleChart';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles ({

  container : {
     display:'flex',
     flexWrap:'wrap',
     width:'100%',

  }
})



 

const ChartContainer : React.FC  = () => {

    const classes = useStyles();
    const {t} =useTranslation();

    const cardData = [
      {
        id:1,
        title:t('chart-title-1'),
        desc:t('chart-desc-1-3'),
        details:t('chart-detail-1'),
        bg:'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
      },
      {
        id:2,
        title:t('chart-title-2'),
        desc:t('chart-desc-2'),
        details:t('chart-detail-2'),
        bg:'linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))',
        
      },
      {
        id:3,
        title:t('chart-title-3'),
        desc:t('chart-desc-1-3'),
        details:t('chart-detail-3'),
        bg:'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
        
      }
    ]

   
  return (


    <div className={classes.container}>
    {chartData.map((data,index)=>
     <SingleChart
      key={index} 
      data={data}
      cardData={cardData}
      />
    
    )}
  

   </div>

  
  )
}

export default ChartContainer