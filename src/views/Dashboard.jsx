/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { StatsCard } from "components/StatsCard/StatsCard.jsx";

import Bar from '../variables/Bar.js';
import JSONdata from "../data.json";
import ApexChart from '../variables/LineChart.js';
import { USMap } from "components/MapComponent/USMap.js";

class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    var dataCollectTime=JSONdata.Date;
    var Comfirmed=JSONdata.Total_US_data.US_Total_Confirmed;
    var Deaths=JSONdata.Total_US_data.US_Total_Deaths;
    var Recovered=JSONdata.Total_US_data.US_Total_Recovered;

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-user text-danger" />}
                statsText="Confirmed"
                statsValue={Comfirmed}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText={"Updated by "+dataCollectTime}
              />
            </Col>
            <Col lg={4} sm={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-delete-user text-secondary" />}
                statsText="Deaths"
                statsValue={Deaths}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText={"Updated by "+dataCollectTime}
              />
            </Col>
            <Col lg={4} sm={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-check text-success" />}
                statsText="Recovered"
                statsValue={Recovered}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText={"Updated by "+dataCollectTime}
              />
            </Col>
          </Row>
          <Row style={{paddingBottom: "20px"}}>
            <Col md={12}>
              <ApexChart />
            </Col>
          </Row>
          <Row style={{paddingBottom: "20px"}}>
            <Col md={12}>
              <Bar />
            </Col>
          </Row>
          <Row style={{paddingBottom: "20px"}}>
            <Col md={12}>
                <USMap />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
