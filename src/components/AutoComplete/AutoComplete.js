import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function AutoComplete(props) {
  const {label} = props
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      freeSolo
      options={top100Films}
      sx={{ width:250, '.MuiAutocomplete-input': {padding: '0.5px 4px 7.5px 5px'}}}
      
      renderInput={(params) => 
      <TextField {...params} label={label} 
      InputProps={{
        ...params.InputProps,
        endAdornment:<KeyboardArrowDownIcon sx={{color:'#bfbfbf'}}/>
      }}

      />}
     
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
];
