import React, {Component } from 'react';
import JSONdata from "../data.json";
import Chart from "react-apexcharts";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';

var labels= JSONdata.US_Month_New_add.xlabel;
var series= JSONdata.US_Month_New_add.series;  
var dataCollectTime=JSONdata.Date;
var legend_name=JSONdata.US_Month_New_add.series_label;
var allData = [];
legend_name.forEach(function(name, i){
  var dataset={};
  dataset["name"]=name;
  var data=series[i]
  dataset["data"]=data;
  allData.push(dataset);
});  


class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          series: allData,
          options: {
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: true
              },
              zoom: {
                enabled: true
              }
            },
            colors: ['#1E90FF', '#B22222', '#FFA500'],
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }],
            plotOptions: {
              bar: {
                horizontal: false,
                
              },
            },
            xaxis: {
              type: 'datetime',
              categories: labels
            },
            legend: {
              position: 'right',
              offsetY: 40
            },
            fill: {
              opacity: 1
            }
          },
        
        
        };
    }
    render() { 

        return (
          <Card>
            <CardHeader style={{fontSize: 14}}
              title={<h3 style={{ fontWeight: "inherit"}}>New Reported Cases in US</h3>}
              subheader={<p className="category">{"Updated by "+dataCollectTime}</p>}
            />
            <CardContent>
              <Container maxWidth="md">
                    <br></br>
                  <Chart options={this.state.options} series={this.state.series} type="bar" width="100%" />
                    <br></br>
                </Container>
              </CardContent>
            </Card>
        );
    }
}
 
export default Bar;

