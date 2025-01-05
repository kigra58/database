import React, { useState } from 'react'


const AddNewTable: React.FC = () => {
  const [tableName, setTableName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ tableName });
  }

  const handleCancel = () => {
    // Handle cancel logic here
    setTableName('');
  }

  return (
    <div className="add-table-container">
      <div className="add-table-card">
        <h2>Add New Table</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="tableName">Table Name</label>
            <input
              type="text"
              id="tableName"
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
            />
          </div>
          <div className="button-group">
            <button type="submit" className="save-button">Save</button>
            <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNewTable