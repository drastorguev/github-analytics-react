import React from 'react';
import Moment from 'react-moment';

import { Panel } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

const SortedList = (props) => {
  if (props.repitems) {
    return (
        <div>
          {props.repitems.map((repitem, index) =>
              <Panel bsStyle="info" key={repitem.id}>
                <Panel.Heading>
                    <Row className="show-grid">
                      <Col xs={12} md={9}>
                        <Panel.Title componentClass="h5">
                        <a href={repitem.html_url} target="_blank">{index + 1}) {repitem.name}</a>
                        </Panel.Title>
                      </Col>
                      <Col xs={12} md={3}>
                        Started <Moment from={new Date()}>{repitem.created_at}</Moment>
                      </Col>
                    </Row>

                </Panel.Heading>
                <Panel.Body>
                  <div>
                    <b>Description: </b>{repitem.description}
                  </div>
                  <div>
                    <b>Language: </b>{repitem.language}<b>  Watchers: </b>{repitem.watchers_count}<b>  Forks: </b>{repitem.forks_count}
                  </div>
                </Panel.Body>
              </Panel>
          )}
        </div>
      )
  } else { return null;}
  };

export default SortedList;
