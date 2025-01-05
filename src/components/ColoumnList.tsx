import React from 'react'
import './ColoumnList.css'

interface IColoumn {
  title: string;
  id: number;
  datatype: string;
}

interface IColoumnList {
  list: IColoumn[];
}

const ColoumnList: React.FC<IColoumnList> = ({ list }) => {
  return (
    <table className="fancy-table">
      <thead>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Data Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((coloumn, index) => (
          <tr key={coloumn.id}>
            <td>{index + 1}</td>
            <td>{coloumn.title}</td>
            <td>{coloumn.datatype}</td>
            <td>
              <button className="action-btn">
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M3 6l3 18h12l3-18h-18zm16.5 2l-1.5 14h-10l-1.5-14h13zm-7.5-6h-2v2h2v-2zm-4 0h-2v2h2v-2zm8 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/></svg>
              </button>
              <button className="action-btn">
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M3 6l3 18h12l3-18h-18zm16.5 2l-1.5 14h-10l-1.5-14h13zm-7.5-6h-2v2h2v-2zm-4 0h-2v2h2v-2zm8 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/></svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ColoumnList