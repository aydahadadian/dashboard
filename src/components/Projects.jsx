import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,LinearProgress,Box, Typography, IconButton,Menu, MenuItem, Icon } from '@material-ui/core';
import { Avatar, AvatarGroup, Paper } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import {MoreVert,Check } from '@mui/icons-material';
import { useState } from 'react';
import { grey } from '@material-ui/core/colors';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  container: {
    margin: '10px',
    flex:'2',
    boxShadow: 'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(26 26 26 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem',
    marginTop: '40px',
    transition: '0.3s',
    padding:'1rem 0',
    borderRadius:'15px',
    backgroundColor:"#fff",
    },
  header: {
   display:'flex',
   justifyContent:'space-between',
   alignItems:'center',
   padding:'1rem',
   backgroundColor:"#fff",

    },
    colorPrimary: {
    backgroundColor: '#ececec',
    height:'8px',
    borderRadius:'10px',
    minWidth: '100px',
  
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#3c73e9",
      
  },
  },
    colorSecondary: {
    backgroundColor: '#ececec',
    height:'8px',
    borderRadius:'10px',
    minWidth: '100px',
  
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#53af50",
      
  },

  },
  root: {
   
    "& .MuiTableCell-root": {
      textAlign: "inherit",
  },
  }

    }))
const Projects = ({data}) => {

    const classes = useStyles();
    const {t}=useTranslation();

    const [anchorElNav, setAnchorElNav] = useState('');
  
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
  return (
    <Box className={classes.container}>
    <Box className={classes.header} sx={{color:'#575757'}}>

<Box>

  <Typography><b>{t('projects')}</b></Typography>
  <Box sx={{display:'flex',alignItems:'center'}}>
    <Icon>
    <Check sx={{color:'#0082ce'}}/>
    </Icon>
   <Typography variant='body2'>
    <b>30 done</b> this month</Typography> 
    </Box>

</Box>
          <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            <MoreVert />
          </IconButton>
          <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              
            >
            
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography>Action</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography>Action 2</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography>Action 3</Typography>
                </MenuItem>
            
              </Menu>
        </Box>
    <TableContainer>
      <Table sx={{ minWidth: "45vh" }} aria-label="simple table" className={classes.root}>
    
        <TableHead>
          <TableRow>
            <TableCell align='inherit'><Typography variant='body2' >{t('table-1')}</Typography></TableCell>
            <TableCell align='inherit'><Typography variant='body2'>{t('table-2')}</Typography></TableCell>
            <TableCell align='inherit'><Typography variant='body2'>{t('table-3')}</Typography></TableCell>
            <TableCell align='inherit'><Typography variant='body2'>{t('table-4')}</Typography></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box display='flex' alignItems='center'>
                <img src={row.companiesImg} width="35px" />
               <Typography variant='body2' ><b>{row.companies}</b></Typography> 
                 
               </Box>
              </TableCell>
              <TableCell align='inherit'>
              <AvatarGroup max={4} sx={{flexDirection:'row!important'}}>
                {row.members.map((member,index)=>
                <Avatar key={index} alt='member' src={member.img}  sx={{ width: 24, height: 24 }}/>
                
                )}
  
              </AvatarGroup>
              
              </TableCell>
              <TableCell>${row.budget}</TableCell>
              <TableCell>

              <LinearProgress className={row.rate >= 90 ? classes.colorSecondary : classes.colorPrimary} variant="determinate" value={row.rate}  />
   
              </TableCell>
              
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  )
}

export default Projects