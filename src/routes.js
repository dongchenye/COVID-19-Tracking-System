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
import Dashboard from "views/Dashboard.jsx";
import WHOReport from "views/WHOReport.jsx";
import TableList from "views/TableList.jsx";
import AboutVirus from "views/AboutVirus.jsx";
import Maps from "views/Maps.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "US Map",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/whoreport",
    name: "WHO Daily Report",
    icon: "pe-7s-note",
    component: WHOReport,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/aboutvirus",
    name: "About Virus",
    icon: "pe-7s-news-paper",
    component: AboutVirus,
    layout: "/admin"
  }
];

export default dashboardRoutes;
