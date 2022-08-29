import {Box, Card, CardContent, CardHeader, makeStyles,Typography,Divider } from '@material-ui/core';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import {AccessTime} from '@mui/icons-material'
import { useTranslation } from 'react-i18next';


const useStyles = makeStyles(() => ({
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

const ChartContainer = ({data}) => {

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

   const currentData=cardData.find((d)=> d.id === data.id)
  return (
    <Card className={classes.container}>
      <Box
        className={classes.HeaderContainer}
        component='div'
        sx={{background:currentData.bg}}
      >
  {data.type === 'area' ?  <AreaChart chartData={data.dataLabels}/>
  : <BarChart chartData={data.dataLabels} />
  
  }
    
      </Box>
      <CardContent className={classes.content}>
              <Typography varient="h6" component='span' color="inherit" fontWeight='900' ><b>{currentData.title}</b></Typography>
              <Typography varient="body2" component="span" display='block'>{currentData.desc}</Typography>
              <Divider light="true" variant="middle" className={classes.dividerCustomize} />
              <div className={classes.cardFooter}>
                <AccessTime fontSize='1rem' sx={{px:1}}/>
              <Typography variant="body2" component="span">{currentData.details}</Typography>
              </div>
              


        </CardContent>
        

        </Card>
  )
}

export default ChartContainer