import React from 'react';
import {Box, Card, CardContent, makeStyles,Typography,Divider, Theme } from '@material-ui/core';
import {AccessTime} from '@mui/icons-material';
import { boxModel, chartModel } from '../models/models';
import BarChart from './BarChart';
import AreaChart from './AreaChart';



export interface StyleProps {
    bg:any
}

const useStyles = makeStyles<Theme,StyleProps> (theme=>({

    container: {
        marginTop: 40,
        borderRadius: "15px",
        transition: '0.3s',
        boxShadow: 'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(26 26 26 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem',
        flex:1,
        margin:'10px',
        height:'50vh',
        position: 'relative',
        background: '#ffffff',
        overflow:'initial',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-end',
        padding:'0 15px'
  
      },
      HeaderContainer: {
       width:'70%',
       height:'200px',
       boxShadow:'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(26 26 26 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem',
       transform:"scaleX(1.2)",
      position:'absolute',
      bottom:'40%',
      borderRadius:'10px',
      display:'flex',
      alignItems:'center',
      padding:'10px',
      overflow:'hidden',
      background:({bg})=>bg
  
      },
      content: {
        width:'100%',
        color:'rgb(52, 71, 103)'
      },
      cardFooter:{
        marginTop:'10px',
        boxShadow: '0 -8px 8px -12px #131313',
        display:'flex',
        alignItems:'center',
  
      },
       dividerCustomize:{
          margin: '10px 0px',
          opacity: '0.25',
          backgroundImage: "linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0)) !important"
        
        }
    }));



    interface Props {

        data: chartModel,
        cardData :boxModel[]

      }

const SingleChart : React.FC<Props> = ({data,cardData}) => {
   
    const currentData = cardData.find((d)=>d.id === data.id);
    const props = {bg:currentData?.bg};

    const classes = useStyles(props);


  return (
    <Card className={classes.container}>
    <Box
      className={classes.HeaderContainer}
      component='div'
    //   sx={{background:currentData.bg}}
    >
{data.type === 'area' ?  <AreaChart chartData={data.dataLabels}/>
: <BarChart chartData={data.dataLabels} />

}
  
    </Box>
    <CardContent className={classes.content}>
    <Typography variant="h6" component="span" color="inherit">
            
                <b>{currentData?.title}</b></Typography>
                <Typography variant="body2" component="span" display='block'>
           
            {currentData?.desc}</Typography>
            <Divider variant="middle" className={classes.dividerCustomize} />
            <div className={classes.cardFooter}>
              <AccessTime sx={{px:1,fontSize:'1rem'}}/>
            <Typography variant="body2" component="span">{currentData?.details}</Typography>
            </div>
            


      </CardContent>
      

      </Card>
  )
}

export default SingleChart