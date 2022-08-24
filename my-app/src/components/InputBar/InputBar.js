import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import {useNavigate}  from "react-router-dom";
import * as api from '../../api/index.js';

import "./inputBar.css";



export default function FullWidthTextField() {

    const navigate = useNavigate();

    const [testCase, setTestCase] = useState(
        {title: "", description: "", requirement: "ST functional", status: "Open", run: "No Run", assignee: "Yair D" });

    const onAddClick = () => {
        api.saveNewTestCase(testCase);
        navigate("/testCases");
    }

    const onClearClick = () => {
        navigate("/testCases");
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        setTestCase(prevValue => {
        return {
            ...prevValue,
            [name]: value
        };
        });
    }

  return (
    <div>
        <div className = "UpperBar">
            <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
                New Test Cases
            </Typography>

            <Tooltip title="Add">
                <IconButton onClick={onAddClick}>
                    <AddIcon />
                </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
                  <IconButton onClick={onClearClick}>
                     <ClearIcon />
                 </IconButton>
            </Tooltip>

        </div>
        <div>
             <Box className = "Box" sx={{width: 1600, maxWidth: '100%',}}>
                <TextField onChange={onChange} name="title" className = "TextField" fullWidth label="Name" id="Name" variant="outlined"/>
                <TextField onChange={onChange} name="description" className = "TextField" fullWidth label="Description" id="Description" />
            </Box>
        </div>
    </div>
  );
}