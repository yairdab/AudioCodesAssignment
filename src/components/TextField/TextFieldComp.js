import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFieldComp(props) {
  const {label, onRequirementFilterChange} = props;

  const handleOnChange = (event) => {  
    console.log("here");
    console.log(event.target.name);
    console.log(event.target.value);
    onRequirementFilterChange(event.target.name, event.target.value);
  }

  return (
<div>
          <Typography>
          <Box component="form" sx={{'& > :not(style)': { m: 1, width: '200' },}} noValidate autoComplete="off">
      <TextField name={label} onChange={handleOnChange} id="standard-basic" label={label} variant="standard" />
    </Box>
          </Typography>
    </div>
    );
}