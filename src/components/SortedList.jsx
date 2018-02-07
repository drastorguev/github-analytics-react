import React from 'react';

const SortedList = (props) => {
  if (props.repitems) {
    return (
        <ul>
          {props.repitems.map((repitem) =>
            <li key={repitem.id}>
              {repitem.name} - {repitem.watchers_count} - {repitem.forks_count}
            </li>
          )}
        </ul>
      )
  } else { return null;}
  };

export default SortedList;
