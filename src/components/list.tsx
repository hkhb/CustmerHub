import React from 'react';
import "./list.css"
import { format } from 'date-fns';
import { DemoData } from './main.tsx'
  
  const List : React.FC< DemoData > = ({name, mail, createdAt, updatedAt}) => {
    const displayDate = format(updatedAt ? updatedAt : createdAt, 'yyyy-MM-dd HH:mm');

    return(
      <div className="card" >
        <div className="customer-name-field">
          <h2 className="customer-name">{name}</h2>
        </div>
        <div>
          <p className='mail'>{mail}</p>
        </div>
        <div>
          <p className="show-date">
            {displayDate}
          </p>
        </div>
      </div>
    )
}
export default List;
