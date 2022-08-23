import * as React from "react";

import "./LeftNavBar.css";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import {useNavigate}  from "react-router-dom";
import { Icon } from "@iconify/react";


export default function LeftNavBar() {
  const navigate = useNavigate();

  const onSuiteClick = () => {
    navigate("/suite");
  }

  const onTestCasesClick = () => {
    navigate("/testcases");
  }

  const onAddIconClick = () => {
    navigate("/inputBar");
  }

  return (
    <Paper className="Paper">
      <MenuList>
        <MenuItem>
        <img className="Icon" src="/Mask-Group-Vision-logo.png" alt="image" />
        </MenuItem>
        <MenuItem onClick={onAddIconClick}>
        <img className="Icon" src="/User.png" alt="image" />
        </MenuItem>
        <Divider sx={{ background: '#863654' , width: 50, margin: 'auto'}}/>
        <MenuItem onClick={onTestCasesClick}>
        <Icon icon="system-uicons:create" className="Icon" />
        </MenuItem>
        <MenuItem onClick={onSuiteClick}>
        <img className="Icon" src="/Vector.png" alt="image" />
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
