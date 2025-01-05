import React, { useState } from 'react'
import { MySQLDataType } from '../constant';




const AddNewColomn: React.FC = () => {
  const [columnName, setColumnName] = useState('');
  const [dataType, setDataType] = useState<MySQLDataType>(MySQLDataType.VARCHAR);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ columnName, dataType });
  }

  const handleCancel = () => {
    // Handle cancel logic here
    setColumnName('');
    setDataType(MySQLDataType.VARCHAR);
  }

  return (
    <div className="add-column-container">
      <div className="add-column-card">
        <h2>Add New Column</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="columnName">Column Name</label>
            <input
              type="text"
              id="columnName"
              value={columnName}
              onChange={(e) => setColumnName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dataType">Data Type</label>
            <select
              id="dataType"
              value={dataType}
              onChange={(e) => setDataType(e.target.value as MySQLDataType)}
            >
              {Object.values(MySQLDataType).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
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

export default AddNewColomn