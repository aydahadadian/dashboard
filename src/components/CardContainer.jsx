import { Box,Card,CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Equalizer, PersonAdd, Store, Weekend } from "@mui/icons-material";


  const useStyles = makeStyles ({

    container : {
       display:'flex',
       flexWrap:'wrap',
       width:'100%',
  
    },
    wrapper: {
        marginTop: 40,
        borderRadius: "15px",
        transition: '0.3s',
        boxShadow: 'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(26 26 26 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem',
        flexGrow:'1',
        width:'20%',
        margin:'10px',
        height:'20vh',
        position: 'relative',
        background: '#ffffff',
        overflow:'initial',
        display:'flex',
        flexDirection:'column',
        // alignItems:'center',
        // justifyContent:'flex-end',
        padding:'10px 0'
  
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
      padding:'20px'
  
      },
      content: {
        color:'rgb(52, 71, 103)',
      },

    });



const CardContainer = () => {
   
  const classes = useStyles();
  const {t} = useTranslation();


   const cardsData = [

    {
        title:t('card-title-1'),
        details:t('card-detail-1'),
        number:'281',
        icon:<Weekend />,
        bg:'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
    },
    {
        title:t('card-title-2'),
        details:t('card-detail-2'),
        number:'2,300',
        icon:<Equalizer />,
        bg:'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
    },
    {
        title:t('card-title-3'),
        details:t('card-detail-3'),
        number:'34k',
        icon:<Store />,
        bg:'linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))',
    },
    {
        title:t('card-title-4'),
        details:t('card-detail-4'),
        number:'+91',
        icon:<PersonAdd />,
        bg:'linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))',
    },
    
    
]


    return (
      <div className={classes.container}>

     {cardsData.map((item,index)=>
      <Card key={index} className={classes.wrapper}>
        <Box
        className={classes.HeaderContainer}
        component='div'
        sx={{background:item.bg}}
      >
        {item.icon}
      </Box>

      <CardContent className={classes.content}>
        <Box textAlign="right">
        <Typography>{item.title}</Typography>
        <Typography variant="h5" component='span'><b>{item.number}</b></Typography>
        </Box>
        <Box textAlign="left" pt='30px'>
        <Typography variant="body2" component='p'>
        {item.details}
        </Typography>
        </Box>
      </CardContent>
      
        </Card>
        )}
        </div>
  )
}

export default CardContainer