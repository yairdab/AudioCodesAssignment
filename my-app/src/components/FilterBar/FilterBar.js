import React, {useState} from 'react';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
    console.log("Inside handle change")
    const value = event.target.innerText;
    console.log(event.target.innerText);
    console.log("The mainFilter is: " + selectedMainFilter);
    console.log("The secondaryFilter is: " + selectedSecondaryFilter);

    if(filtersOptions.includes(event.target.innerText)) {
      console.log("Inside handleChange, setSelectedMainFilter")
      setSelectedMainFilter(value);
      onMainFilterClick(value);
    }
    else {
      console.log("Inside handleChange, setSelectedSecondaryFilter")
      setSelectedSecondaryFilter(value);
      onSecondaryFilterClick(value);
      findFilteredResults(selectedMainFilter, value);
    }
  };

  const findFilteredResults = (type, value) => {
    console.log("findFilteredResults");
    console.log(type);
    console.log(value);
    console.log(data)
      let newData = data.filter(row => row[type.toLowerCase()] === value);
      setRows(newData);
  }

  const getListOfItems = (type) => {
    console.log(type);
    let items;
    switch(type) {
      case "Assignee" : items = data.map(item => item.assignee);  break;
      case "Run":  items = data.map(item => item.run);  break;
      case "Status" : items = data.map(item => item.status);  break;
      case "Requirement": console.log("here"); items = requirmentRows; break;
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
    console.log(event.target.value);
    console.log("OnClose")
    setFilterLabel("Filter by");
    //pressed from outside the dropdown
    if(event.target.value === undefined) {
      setOpen(false);
      setOptions(filtersOptions);
    }
    console.log(selectedMainFilter);
    console.log(selectedSecondaryFilter);
  };

  const onMainFilterClick = (type) => {
    console.log("inside onMainFilterClick ");
    console.log(type);
    let optionsData = getListOfItems(type);
    console.log(optionsData)
    setOptions(optionsData);
  }

  const onSecondaryFilterClick = () => {
    console.log("inside onseconday ");
    setOpen(false);
    console.log("returning back to filtersOptions");
    setOptions(filtersOptions); //reset the options
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
          open={open}
          onOpen={onOpen}
          onClose={onClose}
        >
            {options.map((val) => (
            <MenuItem name={val} onClick={onClick} value={val}>{val}</MenuItem>
          ))}
         
        </Select>
      </FormControl>
    </div>
  );
}

