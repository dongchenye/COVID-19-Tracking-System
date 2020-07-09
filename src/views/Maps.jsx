import WorldMap from 'components/MapComponent/WorldMap.js'
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Maps extends Component {
  state = {  }
  render() { 
    return (
      <Row style={{paddingTop: "20px", paddingBottom: "20px"}}>
        <Col md={12}>
          <WorldMap />
        </Col>

      </Row>
      
    );
  }
}
 
export default Maps;