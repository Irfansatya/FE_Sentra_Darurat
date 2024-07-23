import { Component, createSignal } from 'solid-js';
import AgGridSolid from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import styles from './admin.module.css';

const Admin: Component = () => {
  let gridApi;
  let gridColumnApi;
  const [editingUser, setEditingUser] = createSignal(null);
  const [rowData, setRowData] = createSignal([]);
  const [userToDelete, setUserToDelete] = createSignal(null);
  const [showDeletePopup, setShowDeletePopup] = createSignal(false);

  const columnDefs = [
    { headerName: "Nama Lengkap", field: "name", sortable: true, filter: true },
    { headerName: "Email", field: "email", sortable: true, filter: true },
    { headerName: "Password", field: "password", sortable: true, filter: true },
    { headerName: "No Telp", field: "phone", sortable: true, filter: true },
    { headerName: "Role", field: "role", sortable: true, filter: true },
    {
      headerName: "Actions",
      field: "actions",
      cellRenderer: (params) => {
        const handleEditButtonClick = () => {
          handleEdit(params.data);
        };

        const handleDeleteButtonClick = () => {
          handleDelete(params.data);
        };

        return (
          <div>
            <button
              onClick={handleEditButtonClick}
              class={styles.editButton}
            >
              Edit
            </button>
            <button
              onClick={handleDeleteButtonClick}
              class={styles.deleteButton}
            >
              Hapus
            </button>
          </div>
        );
      },
    },
  ];

  const defaultColDef = {
    flex: 1,
    minWidth: 100,
    filter: true,
    sortable: true,
  };

  const onGridReady = params => {
    gridApi = params.api;
    gridColumnApi = params.columnApi;

    // Ambil data dari localStorage
    const userData = localStorage.getItem('users');
    if (userData) {
      const rowData = JSON.parse(userData);
      setRowData(rowData);
      gridApi.setRowData(rowData);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (user) => {
    setUserToDelete(user);
    setShowDeletePopup(true);
  };

  const confirmDelete = () => {
    const updatedUsers = rowData().filter(u => u.email !== userToDelete().email);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setRowData(updatedUsers);
    gridApi.setRowData(updatedUsers);
    setShowDeletePopup(false);
    setUserToDelete(null);
  };

  const closeDeletePopup = () => {
    setShowDeletePopup(false);
    setUserToDelete(null);
  };

  const handleSave = () => {
    const updatedUsers = rowData().map(user => user.email === editingUser().email ? editingUser() : user);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setRowData(updatedUsers);
    gridApi.setRowData(updatedUsers);
    setEditingUser(null);
  };

  const closePopup = () => {
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
      {editingUser() && (
        <div class={styles.popup}>
          <div class={styles.popupContent}>
            <h2>Edit User</h2>
            <div class={styles.editForm}>
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
              <label>
                Role:
                <select
                  value={editingUser().role}
                  onInput={(e) => setEditingUser({ ...editingUser(), role: e.target.value })}
                >
                  <option value="Pengguna">Pengguna</option>
                  <option value="Admin">Admin</option>
                </select>
              </label>
              <button onClick={handleSave}>Save</button>
              <button onClick={closePopup} class={styles.closeButton}>Close</button>
            </div>
          </div>
        </div>
      )}
      {showDeletePopup() && (
        <div class={styles.popup}>
          <div class={styles.popupContent}>
            <h2>Konfirmasi Hapus</h2>
            <p>Apakah anda yakin menghapus Akun ini?</p>
            <div class={styles.popupActions}>
              <button
                onClick={confirmDelete}
                class={styles.confirmButton}
              >
                Konfirmasi
              </button>
              <button
                onClick={closeDeletePopup}
                class={styles.closeButton}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
