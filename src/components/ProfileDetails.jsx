import React from 'react';

const imgStye = {
  borderRadius: "50%",
  width: "300px",
  height: "300px"
};


const ProfileDetails = (props) => {
    return (
      <div>
        <div>
          <img src={props.infoclean.avatar_url} alt="Profile Picture" style={imgStye}/>
        </div>
        <div>
          {props.infoclean.name}
        </div>
        <div>
          {props.infoclean.bio}
        </div>
        <div>
          {props.infoclean.blog}
        </div>
        <div>
          {props.infoclean.location}
        </div>

        <div>
          {props.infoclean.created_at}
        </div>
      </div>
    )
  };

export default ProfileDetails;
