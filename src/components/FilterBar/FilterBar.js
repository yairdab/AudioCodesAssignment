import React, {useState} from 'react';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextFieldComp from '../TextField/TextFieldComp';

const filtersOptions = [
  "Requirement",
  "Assignee",
  "Run",
  "Status"
]

const requirmentRows = [
    "starts with",
    "equals to"
];


export default function FilterBar(props) {
  const { data, setRows } = props;
  const [selectedMainFilter, setSelectedMainFilter] = useState("");
  const [selectedSecondaryFilter, setSelectedSecondaryFilter] = useState("")
  const [options, setOptions] = useState(filtersOptions);
  const [open, setOpen] = useState(false);
  const [filterLabel, setFilterLabel] = useState("Filter by");


  const onClick = (event) => {
    const value = event.target.innerText;

    if(filtersOptions.includes(event.target.innerText)) {
      setSelectedMainFilter(value);
      onMainFilterClick(value);
    }
    else {
      setSelectedSecondaryFilter(value);
      onSecondaryFilterClick(value);
      findFilteredResults(selectedMainFilter, value);
    }
  };

  const findFilteredResults = (type, value) => {
      let newData = data.filter(row => row[type.toLowerCase()] === value);
      setRows(newData);
  }

  const getListOfItems = (type) => {
    let items;
    switch(type) {
      case "Assignee" : items = data.map(item => item.assignee);  break;
      case "Run":  items = data.map(item => item.run);  break;
      case "Status" : items = data.map(item => item.status);  break;
      case "Requirement": items = requirmentRows; break;
      default: items = [];
    }
    
    return removeDuplicates(items);
  }

  const removeDuplicates = (arr) => {
    return arr.filter(function(item, pos) {
      return arr.indexOf(item) === pos;
    });
  }

  const onOpen = () => {
    setOpen(true);
    setFilterLabel("Choose A filter");
  };

  const onClose = (event) => {
    setFilterLabel("Filter by");
    //pressed from outside the dropdown
    if(event.target.value === undefined) {
      setOpen(false);
      setOptions(filtersOptions);
    }
  };

  const onMainFilterClick = (type) => {
    console.log(type);
    let optionsData = getListOfItems(type);
    console.log(optionsData)
    setOptions(optionsData);
  }

  const onSecondaryFilterClick = () => {
    if(selectedMainFilter !== "Requirement") {
      setOpen(false);
    }
    setOptions(filtersOptions); //reset the options
  }

  const onRequirementFilterChange = (type, value) => {
    if(value === "") {
      setRows(data);
      return;
    }

    if(type === "starts with") {
      var regex = new RegExp("^" + value, "i");
      setRows(data.filter(item => regex.test(item.requirement)));
    }
    else {
      setRows(data.filter(item => item.requirement.toLowerCase() === value.toLowerCase()));
    }
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">
          {filterLabel}
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Filter"
          value=""
          open={open}
          onOpen={onOpen}
          onClose={onClose}
        >
            {options.map((val) => {
              if(val !== "starts with" && val !== "equals to") {
                return (<MenuItem name={val} onClick={onClick} value={val}>{val}</MenuItem>)
              }
              else {
                return (
                  <TextFieldComp label={val} onRequirementFilterChange={onRequirementFilterChange}/>
                )
              }
            }
          )}
         
        </Select>
      </FormControl>
    </div>
  );
}

