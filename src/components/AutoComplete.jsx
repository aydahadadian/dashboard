import { TextField } from '@material-ui/core';
import { Autocomplete } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getCityNamesData } from '../api/cityNamesApi';


const AutoComplete = ({value,setValue,label}) => {

    const [citiesData, setCitiesData] = useState([]);
    const [inputValue, setInputValue] = useState("");

  
  useEffect(() => {

    const delay = setTimeout(() => {
        getCityNamesData(inputValue)
        .then((data)=> {
       
          setCitiesData(data);
       
        })
      }, 3000);
  
      return () => {
        clearTimeout(delay)
      }
 

 }, [inputValue])


  return (
    
          <Autocomplete
          disablePortal
          id="combo-box-demo"
          color='#fff'
          options={citiesData}
          sx={{ width: 300 }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
    
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
    
          getOptionLabel={(option) => option.name || "" }
          renderInput={(params) => <TextField {...params} label={label} sx={{backgroundColor:"#fff"}} />}
  />


  )
}

export default AutoComplete