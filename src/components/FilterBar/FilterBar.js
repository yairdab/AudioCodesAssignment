import React, {useState} from 'react';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export default function FilterBar() {
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const [filterLabel, setFilterLabel] = useState("Filter by");

  const onOpen = () => {
    setFilterLabel("Choose A filter");
  };

  const onClose = () => {
    setFilterLabel("Filter by");
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">
          {filterLabel}
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedFilter}
          label="Filter"
          onChange={handleChange}
          onOpen={onOpen}
          onClose={onClose}
        >
          <MenuItem value="Requirment">Requirment</MenuItem>
          <MenuItem value="Assignee">Assignee</MenuItem>
          <MenuItem value="Run">Run</MenuItem>
          <MenuItem value="Status">Status</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

