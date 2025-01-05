import React from 'react'

interface IDatabase{
  title:string;
  id:number;
}

interface IDataBaseList{
  list:IDatabase[];
}

const DatabaseList:React.FC<IDataBaseList> = ({list}) => {
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

export default DatabaseList