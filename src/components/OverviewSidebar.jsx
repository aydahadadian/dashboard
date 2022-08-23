import { makeStyles } from "@material-ui/core/styles";
import {Box, Icon, Typography} from "@material-ui/core";
import { Notifications,Inventory,ShoppingCart,CreditCard,VpnKey,ArrowUpward } from "@mui/icons-material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab"
import { useTranslation } from "react-i18next";
const useStyles = makeStyles(() => ({
  container: {
      flex:'1',
      margin:'10px',
      display:'flex',
      flexDirection:'column',
      marginTop: 40,
      borderRadius: "15px",
      transition: '0.3s',
      boxShadow: 'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(26 26 26 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem',
      background: '#ffffff',
      maxWidth: '43vh',
      padding:'25px 15px',
      '& svg':{
        fontSize:'.95rem'
      }

    },
  }))
const OverviewSidebar = () => {
  const classes = useStyles();
  const {t} = useTranslation();

  const data = [
    {
      bg:'#53af50',
      icon:<Notifications />,
      title:t('overview-step-1'),
      date:'22 DEC 7:20 PM',
    },
    {
      bg:'#e74132',
      icon:<Inventory />,
      title:t('overview-step-2'),
      date:'21 DEC 11 PM',
    },
    {
      bg:'#3c73e9',
      icon:<ShoppingCart />,
      title:t('overview-step-3'),
      date:'21 DEC 9:34 PM',
    },
    {
      bg:'#ec8a23',
      icon:<CreditCard />,
      title:t('overview-step-4-5'),
      date:'20 DEC 2:20 AM',
    },
    {
      bg:'#e62e62',
      icon:<VpnKey />,
      title:t('overview-step-4-5'),
      date:'18 DEC 4:54 AM',
    },
  ]
  return (
    <Box className={classes.container}>

<Box sx={{color:'#575757'}}>


  <Typography><b>{t('overview-title')}</b></Typography>
  <Box sx={{display:'flex',alignItems:'center'}}>
    <Icon>
    <ArrowUpward sx={{color:'#0ca514'}}/>
    </Icon>
   <Typography variant='body2'>
    <b>24%</b> {t('overview-desc')}</Typography> 
    </Box>


</Box>
      <Box>
        
      <Timeline>

        {data.map((item,index)=>
         
         <TimelineItem key={index} sx={{ "&::before": {
          display: 'none'
       }}}>
         <TimelineSeparator>
         <TimelineDot sx={{backgroundColor:item.bg}}>
            {item.icon}
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent sx={{ py: '12px', px: 2,textAlign:"inherit" }} >
           <Typography variant="body2" component="span" display="block">
             {item.title}
           </Typography>
           <Typography variant="body2" component="span" display="block">
            {item.date}
            </Typography>
         </TimelineContent>
       </TimelineItem>
        
        )}
    
      
    </Timeline>
      </Box>
    </Box>
  )
}

export default OverviewSidebar