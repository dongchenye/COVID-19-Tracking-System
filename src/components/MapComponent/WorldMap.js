import JSONdata from "../../data.json";
import React, { Component } from "react";
// import { Card } from "components/Card/Card.jsx";
import Map from "./Map.js";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader';

var Global_location = JSONdata.Global_location;
var date=JSONdata.Date;
export class USMap extends Component {
  render() {
    const coords = { lat: 38.9637, lng: 35.2433 };
    return (
      <Card>
        <CardHeader style={{fontSize: 14}}
          title={<h3 style={{fontFamily: "sans-serif", fontWeight: "inherit"}}>Global Confirmed Cases</h3>}
          subheader={<p className="category">{"Updated by "+date}</p>}
        />
        <CardContent>
          <div id="googleMap" style={{ width: "100%", height: "80vh" }}>
            <Map
              center={coords}
              zoom={2}
              places={Global_location}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCD66iXvfQg8hp7BPTdsXxIgG1S_6EK998"
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: `100%` }} />}
            ></Map>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default USMap;
