import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'


function List({items, RemoveItem, editItem}) {
  return (
    <div className='list-component'>
      {items.map((item)=>{
        const {id,title} = item
        return(
          <div className="main-list" key={id}>
            <div className="list">
              <p>{title}</p>
            </div>

            <div className="small-buttons">
              <FaEdit className='small-1' onClick={()=>editItem(id)}/>
              <FaTrash className='small-2' onClick={()=>RemoveItem(id)}/>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List
