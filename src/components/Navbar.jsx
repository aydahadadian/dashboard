import {  Box, FormControl, Icon, InputLabel, ListItemIcon, MenuItem,OutlinedInput,TextField,Typography } from "@mui/material";
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import i18next from "i18next";
import Cookies from "js-cookie";
import {Home,AccountCircle, Notifications,Settings} from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  wrapper : {
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    position:"fixed",
    minWidth: "75vw",
    maxWidth: "75vw",
    borderRadius:'5px',
    padding:'7px 5px 20px',
    color:blueGrey[800],
    zIndex:99
  },
  activeNav : {
    backgroundColor:'#f9f9f9f7'
  }
  
}));




const Navbar = () => {
 
    const classes = useStyles();
    const { t } = useTranslation();

    const currentLanguageCode = Cookies.get('i18next') || 'en';
  
  
    const [language, setLanguage] = useState('');
    const [isScrolled,setIsScrolled]=useState(false);

    window.onscroll=()=>{

        setIsScrolled(window.pageYOffset==0 ? false : true);
    }
  
   
  
    const handleClick = (event: SelectChangeEvent) =>{
      setLanguage(event.target.value)
      i18next.changeLanguage(event.target.value)
  
    }
  
    useEffect(() => {
  
      const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
      
      document.body.dir = currentLanguage.dir || 'ltr';
     
      document.title = t('app_title')

    }, [language, t])
  
    useEffect(() => {
      
      setLanguage(currentLanguageCode)
    }, [])
  

    const languages = [
        {
          code: 'fa',
          name: 'Persian',
          country_code: 'fa',
          dir:'rtl',
          flag:'../assets/images/icons/icons8-iran-32.png'
        },
        {
          code: 'en',
          name: 'English',
          country_code: 'gb',
          flag:'../assets/images/icons/icons8-usa-32.png',
        },
     
      ]

    
  return (
    <Box height="13vh">
      <Box className={`${classes.wrapper} ${isScrolled === true && classes.activeNav}`}>


        <Box  sx={{flexDirection:"column"}} >

        <Box sx={{display:'flex',flexWrap:'wrap',gap:1,alignItems:'center'}} color="#7e7e7e">
            <Home fontSize=".9rem" /> / 
        
            <Typography
            variant="h6"
          fontSize=".9rem"
          fontWeight='300'
          >{t('dashboard')}</Typography>
            </Box>

        <Typography
            variant="h6"
            fontSize='.9rem'
            fontWeight='700'
          >
           {t('dashboard')}
            </Typography>

        </Box>


        <Box display='flex' alignItems='center'>
        
        {currentLanguageCode === 'en' ?
        
        <TextField id="outlined-basic" label={t('search')} variant="outlined" size="small"  />
         :
         <OutlinedInput placeholder={t('search')} size="small" />
        
      }
        
        <ListItemIcon
            size="small"
            edge="end"
            color="inherit"
            aria-label="open drawer"
            sx={{ m: 2 }}
          >
         <Icon>
         <AccountCircle />
         </Icon>
           
     <Icon sx={{marginX:"7px"}} >
     <Settings  />

     </Icon>
        <Icon>
        <Notifications />

        </Icon>
            
         
          </ListItemIcon>

          <FormControl>
          <InputLabel sx={{fontSize:'.9rem'}}>{t('language')}</InputLabel>
      
      <Select
        size="small"
        label={t('language')}
        value={language}
        onChange={handleClick}
      >
 
                  {languages.map((lng)=>

                  <MenuItem key={lng.code} value={lng.code} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <img src={lng.flag} width="20px" />
                     
                    </MenuItem>
        
                      )}

      </Select>


        </FormControl>
        </Box>
       

    
        </Box>
            </Box>
  )
}

export default Navbar