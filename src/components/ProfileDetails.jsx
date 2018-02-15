import React from 'react';
import Moment from 'react-moment';

import { Row, Col } from 'react-bootstrap';

const imgStye = {
  borderRadius: "50%",
  width: "250px",
  height: "250px"
};


const ProfileDetails = (props) => {
    return (
        <Row className="show-grid">
          <Col xs={12} md={4} className="text-center">
            <div>
              {props.infoclean.avatar_url ?
                <img src={props.infoclean.avatar_url}
                     alt="Profile"
                     style={imgStye}/> : null }
            </div>
            <br/>
            <div>
              {props.infoclean.html_url ? <div><p><a className="btn btn-info" href={props.infoclean.html_url} target="_blank">View on GitHub</a></p></div> : null }
            </div>
          </Col>
          <Col xs={12} md={8}>
            <Col xs={12} md={8}>
              <div>
                {props.infoclean.name ? <div><p><b>Name: </b> {props.infoclean.name}</p></div> : null }
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div>
                {props.infoclean.created_at ? <div><p><b>Joined: </b>{
                <Moment from={new Date()}>{props.infoclean.created_at}</Moment>}</p></div> : null }
              </div>
            </Col>
            <Col xs={12}>
              <div>
                {props.infoclean.bio ? <div><p><b>Bio:  </b>{props.infoclean.bio}</p></div> : null }
              </div>
            </Col>
            <Col xs={12}>
              <div>
                {props.infoclean.blog ? <div><p><b>Blog: </b><a href={
                   props.infoclean.blog.search("http") !== -1 ? props.infoclean.blog
                  : "http://" +  props.infoclean.blog } target="_blank">{props.infoclean.blog}</a></p></div> : null }
              </div>
            </Col>
            <Col xs={12}>
              <div>
                {props.infoclean.location ? <div><p><b>Location: </b>{props.infoclean.location}</p></div> : null }
              </div>
            </Col>
            <Col xs={12}>
              <div>
                {props.infoclean.company ? <div><p><b>Company: </b>{props.infoclean.company}</p></div> : null }
              </div>
            </Col>
            <Col xs={4} className="text-center">
              <div>
                {props.infoclean.public_repos ? <div><p><b>Repos:</b></p><p>{props.infoclean.public_repos}</p></div> : null }
              </div>
            </Col>
            <Col xs={4} className="text-center">
              <div>
                {props.infoclean.followers ? <div><p><b>Followers: </b></p><p>{props.infoclean.followers}</p></div> : null }
              </div>
            </Col>
            <Col xs={4} className="text-center">
              <div>
                {props.infoclean.following ? <div><p><b>Following: </b></p><p>{props.infoclean.following}</p></div> : null }
              </div>
            </Col>
            <Col xs={12} className="text-center">
              <div>
                {props.infoclean.login ? <div>{ <img src={"http://ghchart.rshah.org/"+props.infoclean.login} alt="Github chart" style={{ maxWidth: '100%', maxHeight: '100%'}}/>
              }<br/><a href="https://ghchart.rshah.org/" target="_blank">Source for GitHub Chart API</a></div> : null }
              </div>
            </Col>
          </Col>
        </Row>
    )

  };

export default ProfileDetails;
