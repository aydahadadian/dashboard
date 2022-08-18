import { AppBar, Box, Container, FormControl, FormHelperText, FormLabel, Icon, IconButton, InputLabel, ListItemIcon, Menu, MenuItem,OutlinedInput,TextField,Typography } from "@mui/material";
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import cookies from 'js-cookie'
import i18next from "i18next";
import Cookies from "js-cookie";
import {Home,AccountCircle, Notifications,Settings} from "@mui/icons-material";


// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));

const Navbar = () => {

    const { t } = useTranslation();

    const currentLanguageCode = Cookies.get('i18next') || 'en';
  
  
    const [language, setLanguage] = useState('')
  
   
  
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

      console.log(language)
  return (
    <Box  sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}} color="GrayText">


        <Box  sx={{flexDirection:"column"}}>
        <Box sx={{display:'flex',flexWrap:'wrap',gap:1,alignItems:'center'}}>
            <Home /> / 
        
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
        
        <TextField id="outlined-basic" label={t('search')} variant="outlined" size="small" />
         :
         <OutlinedInput placeholder={t('search')} size="small" />
        
      }
        
       
        <ListItemIcon
            size="large"
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
      {/* <FormHelperText >English</FormHelperText> */}
     
    </FormControl>

        </Box>
       

  
{/* <h2>{t('welcome_message')}</h2> */}


    
  
            </Box>
  )
}

export default Navbar