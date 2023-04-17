import React, { useState, useMemo } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import GridExample from './components/GridExample';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import './App.css';

function App() {
   
  
  
  



  return (
    <div className="ag-theme-alpine" style={{height: 600}}>
           
      <GridExample></GridExample>
       </div>
  );
}

export default App;
