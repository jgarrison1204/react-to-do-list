import React from 'react';

function ListItem(props) {
  return (
    <li className='list-group-item col-md-6 offset-md-3 justify-end reset'>
      <span className='offset'>{props.item.item}</span>
    </li>
  )
}

export default ListItem;