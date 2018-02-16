import React from 'react';

const RepoStats = (props) => {
    return (
      <div className="text-center">
        <br/>
        <p><b>Total Stars</b></p>
        <p>{props.totalwatchers}</p>
        <p><b>Total Forks</b></p>
        <p>{props.totalforks}</p>
      </div>
      )
  };

export default RepoStats;
