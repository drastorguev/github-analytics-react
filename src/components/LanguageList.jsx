import React from 'react';

const LanguageList = (props) => {
  if (props.langslist) {
    return (
        <ul>
          {Object.entries(props.langslist).map(([key,value]) =>
            <li key={key}>
              {key} - {value}
            </li>
          )}
        </ul>
      )
  } else { return null;}
  };

export default LanguageList;

// const petList = Object.entries(fido).map(([key,value])=>{
//   return (
//       <div>{key} : {value.toString()}</div>
//   );
// })
//
//
// <ul>
//   {props.langslist.map((langsitem) =>
//     <li key={langsitem.id}>
//       {repitem.name} - {repitem.created_at}
//     </li>
//   )}
// </ul>
