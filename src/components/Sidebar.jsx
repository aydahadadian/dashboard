import { AccountCircle, Assignment, BackupTable, Dashboard, FormatTextdirectionRToL, Login, Notifications, ReceiptLong } from "@mui/icons-material";
import {Grid,List,ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography} from "@mui/material";


import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";



const useStyles = makeStyles(theme => ({
  wrapper: {
    background: "linear-gradient(195deg,rgb(66, 66, 74),rgb(25, 25, 25))",
    borderRadius:10,
    height:'90vh',
    // margin:'0 10px',
    padding: '1rem',
    position:'fixed',
  
  },
  item: {
   
    borderRadius:'5px',
    minWidth: '16vw',
    marginBottom:'5px',
   
    '&:hover': {
      backgroundColor: "#91919178",
      
  },
  }
}));



const Sidebar = () => {

  const classes = useStyles();
  const { t } = useTranslation();


  const items = [
   { 
    label:t('dashboard'),
    icon:<Dashboard />,
    active:true
   },
   { 
    label:t('tables'),
    icon:<BackupTable />,
    active:false
   },
   { 
    label:t('biling'),
    icon:<ReceiptLong />,
    active:false
   },
   { 
    label:'Rtl',
    icon:<FormatTextdirectionRToL />,
    active:false
   },
   { 
    label:t('notifications'),
    icon:<Notifications />,
    active:false
   },
   { 
    label:t('profile'),
    icon:<AccountCircle />,
    active:false
   },
   { 
    label:t('sign-in'),
    icon:<Login />,
    active:false
   },
   { 
    label:t('sign-up'),
    icon:<Assignment />,
    active:false
   },

  ];
    
    

  return (

    <Grid item xs={2.5}  color="whitesmoke" sx={{position:'relative'}} >
      <div className={classes.wrapper}>

      <Toolbar>
        <Typography variant="body1" fontWeight="700" textAlign="center">

        Material Dashboard
        </Typography>
       
        </Toolbar>
 
      <List sx={{boxShadow: '0 -8px 8px -12px #ffffff',pt:2}}>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding className={classes.item} 
                    sx={ item.active === true && {backgroundColor:"#2979ff"}}>
            
            <ListItemButton >
              <ListItemIcon sx={{color:"whitesmoke",minWidth:'36px'}}>

            {item.icon}
         
              </ListItemIcon>
              <ListItemText primary={item.label}  primaryTypographyProps={{fontSize:'.9rem'}} />
            </ListItemButton>
          </ListItem>
        ))}
  
        
      </List>
      </div>

    </Grid>
  )
}

export default Sidebar