import React from 'react';

const LanguageList = (props) => {
  if (props.langslist) {
    {
      var totalcount =  Object.entries(props.langslist).map(([key,eachitem]) =>
        (eachitem.count)).reduce((pv, cv) => pv+cv, 0 ) }
    return (
        <div>
          {
            Object.entries(props.langslist).map(([key,eachitem]) =>
              <div key={key}>
                {eachitem.lang} - {Math.round(100*eachitem.count / totalcount)}%
              </div> ) }
        </div>
      )
  } else { return null;}
  };

export default LanguageList;
