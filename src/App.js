import React from "react";
import DataTable from "./components/TableComponents/DataTable";
import Suite from "./components/TableComponents/Suite";
import LeftNavBar from './components/LeftNavBar/LeftNavBar'
import InputBar from './components/InputBar/InputBar'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './styles/common.css';
import TestCases from "./components/TableComponents/TestCases";


function App() {
  return (
    <div className="App">
    <div className="Upper">
    <Router>
    <LeftNavBar />
         <Routes>
          <Route exact path="/" element={<DataTable />} />
          <Route path="/suite" element={<Suite />} />
          <Route path="/testcases" element={<TestCases/>} />
          <Route path="/inputBar" element={<InputBar/>} />
        </Routes>
       </Router>
    </div>
    </div>
  );
}

export default App;
