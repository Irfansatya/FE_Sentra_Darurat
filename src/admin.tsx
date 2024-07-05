import type { Component } from 'solid-js';
import AgGridSolid from 'ag-grid-solid';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Admin: Component = () => {
  const columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  const rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];

  const defaultColDef = {
    flex: 1,
  };

  return (
    <div class="ag-theme-alpine" style={{ height: '500px', width: '100%' }}>
      <AgGridSolid
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default Admin;
