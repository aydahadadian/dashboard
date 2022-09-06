import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,LinearProgress,Box, Typography, IconButton,Menu, MenuItem, Icon, Tooltip } from '@material-ui/core';
import { Avatar, AvatarGroup } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import {MoreVert,Check } from '@mui/icons-material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { tableModel } from '../models/models';

const useStyle = makeStyles ({
  container: {
    margin: '10px',
    flex:'2',
    boxShadow: 'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(26 26 26 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem',
    marginTop: '40px',
    transition: '0.3s',
    paddingTop:'1rem',
    borderRadius:'15px',
    backgroundColor:"#fff",
    overflow:'hidden'
    },
  header: {
   display:'flex',
   justifyContent:'space-between',
   alignItems:'center',
   padding:'1rem',
   backgroundColor:"#fff",

    },
    avatarContainerCustomize: {
     
      "& .MuiAvatar-root:last-child":{
        marginLeft:"-6px!important"
      },

    },
    avatarCustomize: {
      width: '22px!important',
      height: '22px!important',
      cursor:'pointer',
      zIndex:1,
      '&:hover':{
        zIndex:2
      }
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
    minWidth: "45vh",
    "& .MuiTableCell-root": {
      textAlign: "inherit",
  },
  }

    });

   
    interface Props {
      data:tableModel[]
    }

const Projects : React.FC<Props> = ({data}) => {

    const classes = useStyle();
    const {t}=useTranslation();

    const [anchorElNav, setAnchorElNav] = useState<any>('');
  
  
    const handleOpenNavMenu = (e: React.FormEvent) => {
      setAnchorElNav(e.currentTarget);
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
      <Table aria-label="simple table" className={classes.root}>
    
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
            <TableRow key={row.id} >
              <TableCell component="th" scope="row">
                <Box display='flex' alignItems='center'>
                <img alt="" src={row.companiesImg} width="35px" />
               <Typography variant='body2' ><b>{row.companies}</b></Typography> 
                 
               </Box>
              </TableCell>
              <TableCell align='inherit'>
              <AvatarGroup className={classes.avatarContainerCustomize} sx={{flexDirection:'row'}}>
                {row.members.map((member,index)=>
                <Tooltip key={index} title={member.name} arrow> 
                <Avatar 
                className={classes.avatarCustomize}
                alt='member' 
                src={member.img} />
                </Tooltip>
                
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