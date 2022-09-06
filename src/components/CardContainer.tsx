import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { Equalizer, PersonAdd, Store, Weekend } from "@mui/icons-material";
import SingleCard from "./SingleCard";

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
      padding:'20px'
  
      },
      content: {
        color:'rgb(52, 71, 103)',
      },
      dividerCustomize:{
        margin: '10px 0px',
        opacity: '0.25',
        backgroundImage: "linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0)) !important"
      
      }

    });




const CardContainer : React.FC = () => {
   
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
    
    
] as const ;


    return (
      <div className={classes.container}>

     {cardsData.map((item,index)=>
     <SingleCard key={index} item={item}/>
        )}
        </div>
  )
}

export default CardContainer