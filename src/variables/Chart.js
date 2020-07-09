import React, {Component } from 'react';
import JSONdata from "../data.json";
import { Card } from "components/Card/Card.jsx";
import { LineChart } from 'react-chartkick'
import 'chart.js';

var labels= JSONdata.US_Week_time.xlabel;
var series= JSONdata.US_Week_time.series;
var legend_name=JSONdata.US_Week_time.series_label;

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {       
        var allData = [];
        legend_name.forEach(function(name, i){
          var dataset={};
          dataset["name"]=name;
          var data={};
          labels.forEach((label, j) => data[label] = series[i][j]);
          dataset["data"]=data;
          allData.push(dataset);
        });     

        var dataCollectTime=JSONdata.Date;
        
        return (
            <Card
            statsIcon="fa fa-history"
            id="chartHours"
            title="Weekly Cumulative Cases Tracking in US"
            category={"Updated by "+dataCollectTime}
            content={
              <div className="ct-chart">
                
                <LineChart data={allData} />
                <br></br>
              </div>
            }
          />
        );
    }
}
 
export default Chart;
