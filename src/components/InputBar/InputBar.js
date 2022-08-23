import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import FilterListIcon from '@mui/icons-material/FilterList';


import "./inputBar.css";



export default function FullWidthTextField() {
  return (
    <div>
        <div className = "UpperBar">
            <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
                New Test Cases
            </Typography>

            <Tooltip title="Add">
                <IconButton>
                    <AddIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
                  <IconButton>
                     <ClearIcon />
                 </IconButton>
            </Tooltip>

        </div>
        <div>
             <Box className = "Box" sx={{width: 1600, maxWidth: '100%',}}>
                 <TextField className = "TextField" fullWidth label="Name" id="Name" variant="outlined"/>
                <TextField className = "TextField" fullWidth label="Description" id="Description" />
            </Box>
        </div>
    </div>
  );
}