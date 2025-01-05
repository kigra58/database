import React from 'react'


interface ITable{
    title:string;
    id:number;
  }
  
  interface ITableList{
    list:ITable[];
  }

const TableList:React.FC<ITableList> = ({list}) => {
  return (
    <div>
    {list &&
      list.length > 0 &&
      list.map((item) => {
        return (
          <div className="card" key={item.id}>
            <h2 className="card-title">{item?.title ?? "-"}</h2>
            {/* <p>Card content goes here.</p> */}
          </div>
        );
      })}
  </div>
  )
}

export default TableList