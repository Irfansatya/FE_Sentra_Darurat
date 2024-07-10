import { Component, createSignal } from 'solid-js';
import AgGridSolid from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import styles from './admin.module.css';

const Admin: Component = () => {
  const [gridApi, setGridApi] = createSignal(null);
  const [gridColumnApi, setGridColumnApi] = createSignal(null);
  const [editingUser, setEditingUser] = createSignal(null);
  const [rowData, setRowData] = createSignal([]);

  const columnDefs = [
    { headerName: "Nama Lengkap", field: "name", sortable: true, filter: true },
    { headerName: "Email", field: "email", sortable: true, filter: true },
    { headerName: "Password", field: "password", sortable: true, filter: true },
    { headerName: "No Telp", field: "phone", sortable: true, filter: true },
  ];

  const defaultColDef = {
    flex: 1,
    minWidth: 100,
    filter: true,
    sortable: true,
  };

  const onGridReady = params => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    // Ambil data dari localStorage
    const userData = localStorage.getItem('users');
    if (userData) {
      const data = JSON.parse(userData);
      setRowData(data);
      params.api.setRowData(data);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSave = () => {
    const updatedUsers = rowData().map(user => user.email === editingUser().email ? editingUser() : user);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setRowData(updatedUsers);
    gridApi().setRowData(updatedUsers);
    setEditingUser(null);
  };

  return (
    <div class={`${styles.container} ag-theme-alpine`}>
      <h1 class={styles.title}>Admin Dashboard</h1>
      <div style={{ height: '400px', width: '100%' }}>
        <AgGridSolid
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={rowData()}
          onGridReady={onGridReady}
        />
      </div>
      <div class={styles.editButtonContainer}>
        <button onClick={() => handleEdit(rowData()[0])}>Edit</button>
      </div>
      {editingUser() && (
        <div class={styles.editForm}>
          <h2>Edit User</h2>
          <label>
            Nama Lengkap:
            <input
              type="text"
              value={editingUser().name}
              onInput={(e) => setEditingUser({ ...editingUser(), name: e.target.value })}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={editingUser().email}
              onInput={(e) => setEditingUser({ ...editingUser(), email: e.target.value })}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={editingUser().password}
              onInput={(e) => setEditingUser({ ...editingUser(), password: e.target.value })}
            />
          </label>
          <label>
            No Telp:
            <input
              type="tel"
              value={editingUser().phone}
              onInput={(e) => setEditingUser({ ...editingUser(), phone: e.target.value })}
            />
          </label>
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Admin;