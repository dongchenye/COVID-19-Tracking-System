import React, { Component } from "react";
import {
    Row,
    Col,
  } from "react-bootstrap";
import Card from "components/Card/Card.jsx";

class TravelAdvice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Row>
            <Col md={12} style={{paddingLeft: "2"}}>
            
                <Card
                content={
                  <div>
                    <div className="typo-line">
                        <div className="card-header h4 bg-danger"><b>Widespread sustained (ongoing) transmission and restrictions on entry to the United States</b></div>
                        <p>CDC recommends that travelers avoid all nonessential travel to the following destinations. Entry of foreign nationals from these destinations has been suspended.</p>
                        <ul>
                        <li>China (<a href="https://wwwnc.cdc.gov/travel/notices/watch/novel-coronavirus-china">Level 3 Travel Health Notice</a>)</li>
                        <li>Iran (<a href="https://wwwnc.cdc.gov/travel/notices/watch/coronavirus-iran">Level 3 Travel Health Notice</a>)</li>
                        </ul>
                    </div>

                    <div className="typo-line">
                        <div className="card-header h4 bg-warning"><b>Widespread sustained (ongoing) transmission</b></div>
                            <div className="card-body ">
                                <p>CDC recommends that travelers avoid all nonessential travel to the following destinations:</p>
                            <ul>
                                <li>South Korea (<a href="https://wwwnc.cdc.gov/travel/notices/alert/coronavirus-south-korea">Level 3 Travel Health Notice</a>)</li>
                                <li>Italy (<a href="https://wwwnc.cdc.gov/travel/notices/watch/coronavirus-italy">Level 3 Travel Health Notice</a>)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="typo-line">
                        <div className="card-header h4 bg-info"><b>Sustained (ongoing) community transmission</b></div>
                            <div className="card-body ">
                                <p>CDC recommends that older adults or those who have chronic medical conditions consider postponing travel to the following destinations:</p>
                            <ul>
                               <li>Japan (<a href="https://wwwnc.cdc.gov/travel/notices/watch/coronavirus-japan">Level 2 Travel Health Notice</a>)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="typo-line">
                        <div className="card-header h4 bg-success"><b>Risk of limited community transmission</b></div>
                            <div className="card-body ">
                                <p>Travelers should practice usual precautions at the following destination:</p>
                            <ul>
                            <li>Hong Kong (<a href="https://wwwnc.cdc.gov/travel/notices/watch/coronavirus-hong-kong">Level 1 Travel Health Notice</a>)</li>                            </ul>
                        </div>
                    </div>

                    <div className="typo-line">
                      
                      <p className="text-muted">
                      Content source: <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/index.html">Centers for Disease Control and Prevention (CDC)</a>
                      </p>
                    </div>

                  </div>
                }
              />
          </Col>
        </Row>
        <div className="row ">
          <div className="col-md-12">
            <div className="row-fluid">
              <div className="vc_empty_space col-12 pt-3 pb-1">
                <span className="vc_empty_space_inner"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelAdvice;
