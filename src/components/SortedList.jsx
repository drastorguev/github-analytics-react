import React from 'react';

const SortedList = (props) => {
  return (
      <ul>
        {props.repitems.map((repitem) =>
          <div key={repitem.id}>
            {repitem.name} - {repitem.watchers_count} - {repitem.forks_count}
          </div>
        )}
      </ul>
    )
  };

export default SortedList;
