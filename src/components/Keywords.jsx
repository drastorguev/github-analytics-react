import React from 'react';

const Keywords = (props) => {
  if (props.keywords) {
    return (
        <div>
          {
              props.keywords.map((keyword, index) =>
               // Only do this if items have no stable IDs
               <div key={index}>
                 {keyword}
               </div>
             )
          }
        </div>
      )
  } else { return null;}
  };

export default Keywords;
