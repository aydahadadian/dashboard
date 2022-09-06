import React from 'react'
import { Box,Card,CardContent, Divider, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { cardModel } from '../models/models';

export interface StyleProps {
    bg:string
}
const useStyles = makeStyles<Theme,StyleProps> (theme=>({

   
    wrapper: {
        marginTop: 40,
        borderRadius: "15px",
        transition: '0.3s',
        boxShadow: 'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(26 26 26 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem',
        flexGrow:1,
        width:'20%',
        margin:'10px',
        height:'20vh',
        position: 'relative',
        background: '#ffffff',
        overflow:'initial',
        display:'flex',
        flexDirection:'column',
  
      },
      HeaderContainer: {
      color:'#fff',
      boxShadow:'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(26 26 26 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem',
      position:'absolute',
      bottom:'65%',
      left:"20px",
      borderRadius:'10px',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      padding:'20px',
      background:({bg})=>bg
  
      },
      content: {
        color:'rgb(52, 71, 103)',
      },
      dividerCustomize:{
        margin: '10px 0px',
        opacity: '0.25',
        backgroundImage: "linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0)) !important"
      
      }

}));


    interface Props {
        item:cardModel
    
      }

const SingleCard : React.FC<Props> = ({item}) => {


  const props = {bg:item.bg} as const;
  const classes = useStyles(props);

  return (
    <Card className={classes.wrapper}>
    <Box
    className={classes.HeaderContainer}
    component='div'
    
  
  >
    {item.icon}
  </Box>

  <CardContent className={classes.content}>
    <Box textAlign="right">
    <Typography>{item.title}</Typography>
    <Typography variant="h5" component='span'><b>{item.number}</b></Typography>
    </Box>
    <Divider variant="middle" className={classes.dividerCustomize} />
    <Box textAlign="left">
    <Typography variant="body2" component='p'>
    {item.details}
    </Typography>
    </Box>
  </CardContent>
  
    </Card>
  )
}

export default SingleCard