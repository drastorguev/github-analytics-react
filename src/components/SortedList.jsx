import React from 'react';

const SortedList = (props) => {
  return (
      <ul>
        {props.repitems.map((repitem) =>
          <li key={repitem.id}>
            {repitem.name} - {repitem.watchers_count} - {repitem.forks_count}
          </li>
        )}
      </ul>
    )
  };

export default SortedList;
