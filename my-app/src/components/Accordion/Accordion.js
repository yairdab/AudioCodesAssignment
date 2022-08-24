import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Accordion() {
  return (
    <div>
      <Accordion sx={{width: 200}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{width: 200}}
        >
          <Typography >Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Box component="form" sx={{'& > :not(style)': { m: 1, width: '200' },}} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>

