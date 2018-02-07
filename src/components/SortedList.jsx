import React from 'react';
import Moment from 'react-moment';

const SortedList = (props) => {
  if (props.repitems) {
    return (
        <ul>
          {props.repitems.map((repitem) =>
            <li key={repitem.id}>
              <div>
                <div>
                  <a href={repitem.html_url} target="_blank">{repitem.name}</a> || Started <Moment from={new Date()}>{repitem.created_at}</Moment>
                </div>
                <div>
                  <i>{repitem.description}</i>
                </div>
                <div>
                 Language: {repitem.language} || Watchers: {repitem.watchers_count} || Forks: {repitem.forks_count}
                </div>
              </div>
            </li>
          )}
        </ul>
      )
  } else { return null;}
  };

export default SortedList;
