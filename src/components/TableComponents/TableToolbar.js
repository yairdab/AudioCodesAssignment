import React, {useState} from 'react';
import FilterBar from '../FilterBar/FilterBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { alpha } from '@mui/material/styles';
import {useNavigate}  from "react-router-dom";
import * as api from '../../api/index.js';
import AlertDialog from '../AlertDialog/AlertDialog';

export default function TableToolbar(props) {
    const { numSelected, isTestCases, selected, getData, data, setRows, resetData } = props;
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [ isFilteredOpen, setIsFilteredOpen ] = useState(false);

    const headline = isTestCases ? "Test Cases" : "Suite";

    const changeFilteredOpenState = () => {
      setIsFilteredOpen(!isFilteredOpen);
    }

    const onClearClick = () => {
      setIsFilteredOpen(false);
      resetData();
    }

    const onDeleteClick = () => {
      setDeleteOpen(true);
      console.log(deleteOpen)
    }

    const deleteData = () => {
      isTestCases ? api.deleteTestCases(selected).then(() => getData()) : api.deleteSuites(selected).then(() => getData());
    }

    const generateFilterComponent = () => {
      return !isFilteredOpen ? 
         (<Tooltip title="Filter list">
         <IconButton onClick={changeFilteredOpenState}>
           <FilterListIcon />
         </IconButton>
       </Tooltip>) 
       :
       (
     <Tooltip>
      <FilterBar data={data} setRows={setRows}/>
     </Tooltip>
     );
    }
  
    const navigate = useNavigate();

    const addTitle = numSelected > 0 ? "Add to Suite": "New";

    const saveSuit = async () => {
      try {
        api.saveNewSuites(selected);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    const onClick = () => {
      if(numSelected > 0) { //we want to add to suite
        saveSuit();
      }
      else { //create new test case
        navigate("/inputBar");
      }
    }
  
    return (
      <div>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {headline}
          </Typography>
        )}
              
        {isFilteredOpen && <Tooltip>
       <IconButton onClick={onClearClick}>
         <ClearIcon />
     </IconButton>
     </Tooltip>}
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton onClick={onDeleteClick}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : generateFilterComponent()}
        {isTestCases && <Tooltip title={addTitle}>
            <IconButton onClick={onClick}>
              <AddIcon />
            </IconButton>
          </Tooltip>}
      </Toolbar>
      <AlertDialog deleteData={deleteData} deleteOpen={deleteOpen} setDeleteOpen={setDeleteOpen}/>
      </div>
    );
  };