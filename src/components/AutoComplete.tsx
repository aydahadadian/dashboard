import { TextField } from '@material-ui/core';
import { Autocomplete } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getCityNamesData } from '../api/cityNamesApi';
import { valueModel } from '../models/models';


interface Props {
  value:valueModel | null;
  setValue: React.Dispatch<React.SetStateAction<valueModel | null>>;
  label:string;
}
const AutoComplete : React.FC<Props> = ({value,setValue,label}) => {

    const [citiesData, setCitiesData] = useState([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

  
  useEffect(() => {

    setLoading(true)

    const delay = setTimeout(() => {
        getCityNamesData(inputValue)
        .then((data)=> {
       
          setCitiesData(data);
          setLoading(false)
       
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
          sx={{ width: 300 }}
          options={citiesData !== undefined ? citiesData : []}
          loading={loading}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
    
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          
          isOptionEqualToValue={(option, value) => option.name === value.name}
          getOptionLabel={(option) => option.name || "" }
          renderInput={(params) => <TextField {...params} label={label}  />}
  />


  )
}

export default AutoComplete