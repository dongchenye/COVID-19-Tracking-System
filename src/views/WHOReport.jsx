import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import DatePicker from 'react-date-picker';
import Moment from 'moment';
import Iframe from 'react-iframe'

class WHOReport extends Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        year: new Date().getFullYear(),
        month: new Date().getMonth()+1,
        day: new Date().getDate(),
        numPages: null,
        pageNumber: 1,
      }
    }
  
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  onChange = date => this.setState({
    date: date,
    year: date.getFullYear(),
    month: date.getMonth()+1,
    day: date.getDate()
  })
    
  render() {
    Moment.locale('en');
    var str=Moment(this.state.date).format('YYYYMMDD');
    var d1=this.state.date;
    var d2=new Date("2020/01/21");
    var diffTime=Math.abs(d1-d2);
    var diffDay=Math.ceil(diffTime/(1000*60*60*24))+1;
    var url="https://www.who.int/docs/default-source/coronaviruse/situation-reports/"+str+"-sitrep-"+diffDay+"-covid-19.pdf";
    if(diffDay<=23 && diffDay>8){
      url="https://www.who.int/docs/default-source/coronaviruse/situation-reports/"+str+"-sitrep-"+diffDay+"-ncov.pdf";
    }else if(diffDay<=8){
      url="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports";
    }
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={9}>
              <Card
                content={
                  <div>
                    <Iframe url={url} width="100%" height="1000px" position="relative"/>
                  </div>
                }
              />
            </Col>
            <Col md={3}>
              <label>Please select the date:<br></br>
                <DatePicker
                  onChange = {this.onChange}
                  value={this.state.date}
                />
              </label>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default WHOReport;
