import React from 'react';
import Moment from 'react-moment';

const imgStye = {
  borderRadius: "50%",
  width: "250px",
  height: "250px"
};


const ProfileDetails = (props) => {
    return (
      <div>
        <div>
          {props.infoclean.avatar_url ?
            <img src={props.infoclean.avatar_url}
                 alt="Profile"
                 style={imgStye}/> : null }
        </div>
        <div>
          {props.infoclean.name ? <div><p>Name:</p><p>{props.infoclean.name}</p></div> : null }
        </div>
        <div>
          {props.infoclean.bio ? <div><p>Bio:</p><p>{props.infoclean.bio}</p></div> : null }
        </div>
        <div>
          {props.infoclean.created_at ? <div><p>Joined:</p><p>{
          <Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</p></div> : null }
        </div>
        <div>
          {props.infoclean.blog ? <div><p>Blog:</p><p><a href={
             props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
            : "http://" +  props.infoclean.blog } target="_blank">{props.infoclean.blog}</a></p></div> : null }
        </div>
        <div>
          {props.infoclean.location ? <div><p>Location:</p><p>{props.infoclean.location}</p></div> : null }
        </div>
        <div>
          {props.infoclean.company ? <div><p>Company:</p><p>{props.infoclean.company}</p></div> : null }
        </div>
        <div>
          {props.infoclean.public_repos ? <div><p>Public Repos:</p><p>{props.infoclean.public_repos}</p></div> : null }
        </div>
        <div>
          {props.infoclean.followers ? <div><p>Followers:</p><p>{props.infoclean.followers}</p></div> : null }
        </div>
        <div>
          {props.infoclean.following ? <div><p>Following:</p><p>{props.infoclean.following}</p></div> : null }
        </div>
        <div>
          {props.infoclean.html_url ? <div><p><a href={props.infoclean.html_url} target="_blank">View on GitHub</a></p></div> : null }
        </div>
        <div>
          {props.infoclean.login ? <div>{ <img src={"http://ghchart.rshah.org/"+props.infoclean.login} alt="Github chart" />
        }<br/><a href="https://ghchart.rshah.org/" target="_blank">Source for GitHub Chart API</a></div> : null }
        </div>
      </div>
    )

  };

export default ProfileDetails;
