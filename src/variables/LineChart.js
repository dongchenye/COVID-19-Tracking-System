import React from 'react';
import JSONdata from "../data.json";
import Chart from "react-apexcharts";
import Card from "@material-ui/core/Card";
import Container from '@material-ui/core/Container';
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader';

var labels= JSONdata.US_Month_Cumulative.xlabel;
var series= JSONdata.US_Month_Cumulative.series;
var legend_name=JSONdata.US_Month_Cumulative.series_label;
var dataCollectTime=JSONdata.Date;
var allData = [];
legend_name.forEach(function(name, i){
  var dataset={};
  dataset["name"]=name;
  var data=series[i]
  dataset["data"]=data;
  allData.push(dataset);
}); 

class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: allData,
        options: {
          chart: {
            width: '100%',
            height: '100%',
            type: 'line',
            dropShadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 0.2,
            },
            toolbar: {
              show: true
            }
          },
          colors: ['#1E90FF', '#B22222', '#FFA500'],
          dataLabels: {
            enabled: false,
          },
          title: {
            text: '',
            align: 'left'
          },
          // stroke: {
          //   curve: 'smooth'
          // },
          grid: {
            borderColor: '#e7e7e9',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            size: 1
          },
          xaxis: {
            categories: labels,
            title: {
              text: 'Day'
            }
          },
          yaxis: {
            title: {
              text: 'Number of Cases'
            }
          },
          legend: {
              position: 'right',
              offsetY: 40
          },
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
        },
      
      
      };
    }

  

    render() {
        console.log(allData)
      return (
          <Card>
            <CardHeader style={{fontSize: 14}}
              title={<h3 style={{ fontWeight: "inherit"}}>Cumulative Cases in US</h3>}
              subheader={<p className="category">{"Updated by "+dataCollectTime}</p>}
            />
            <CardContent>
              <Container maxWidth="md">
                    <br></br>
                    <Chart
                      options={this.state.options}
                      series={this.state.series}
                      type="line"
                      width="100%"
                    />
                    <br></br>
              </Container>
            </CardContent>
          </Card>
      );
    }
  }
  export default ApexChart;