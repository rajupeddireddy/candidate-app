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
      
      options={top100Films}
      sx={{ width:250, mb:1,
       }}
  
      endAdornment={<KeyboardArrowDownIcon/>}
      renderInput={(params) => 
      <TextField {...params} label={label} 
     
      />}
     
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
];
