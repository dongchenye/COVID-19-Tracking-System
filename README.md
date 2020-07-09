# COVID-19 Tracking System
### Try it out on AWS
http://covid-19-tracking-system.s3-website.us-east-2.amazonaws.com
### Presentation Video Demo
https://youtu.be/Su30Dw8q3pM

[![Watch the video](https://img.youtube.com/vi/Su30Dw8q3pM/maxresdefault.jpg)](https://youtu.be/Su30Dw8q3pM)
## Winner of 2020 UTA Open Data Day Hackathon
https://devpost.com/software/covid-19-tracking-system

#### Authors
+ Dongchen Ye - [LinkedIn](https://www.linkedin.com/in/dongchenye/) - [GitHub](https://github.com/dongchenye).

+ Dongqing Ye - [LinkedIn](https://www.linkedin.com/in/dongqingye/) - [GitHub](https://github.com/dongqingye7).

<img src="https://covid-19-tracking-system.s3.us-east-2.amazonaws.com/images/Dashboard.png" width="700" >


## Table of Contents

[What is *COVID-19 Tracking System*?](#intro)    
[Why is this important?](#importance)    
[*COVID-19 Tracking System* System Design](#SystemDesign)    
[*COVID-19 Tracking System* Web Page Structure](#WebPageStructure)    
[1.   Dashboard](#Dashboard)    
[2.   Global Map](#Global_Map)    
[3.   State Cases](#State_Cases)    
[4.   Travel Advice](#Travel_Advice)    
[5.   WHO Daily Report](#WHO_Daily_Report)    
[6.   About COVID 19](#About_COVID_19)    

## <a name="intro"></a>What is *COVID-19 Tracking System*?

This project is a web application that aims to visualize and track reported cases of coronavirus disease COVID-19 in real time and provides the general public, exspecially for travelers, with disease guidance and important travel advices. 

It includes following features:

+ Case in US monthly Analysis 
+ Global Map for confirmed case location
+ State cases details (categorizing by State)
+ Travel Advice (categorizing by Country)
+ WHO Daily Reports (categorizing by date)
+ About COVID-19 

This projects uses open data source from [Centers for Disease Control and Prevention(CDC)](https://www.cdc.gov/coronavirus/2019-nCoV/summary.html), [Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE)](https://github.com/CSSEGISandData/COVID-19), and [Word Health Organization(WHO)](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports). Whenever the system starts running, it will fetch the real-time data from these open data source and update accordingly. The data including the location and number of confirmed COVID-19 cases, deaths, and recoveries will be updated everyday.


## <a name="importance"></a>Why is this important?


In December 2019, an outbreak of respiratory disease caused by a novel (new) coronavirus that was first detected in China and which has now been detected in almost 90 locations internationally, including in the United States. 

In response to this ongoing public health emergency, we developed this project to provide a user-friendly tool to track the outbreak as it unfolds. The real-time information analysis reveals the rapid spreading of the disease which will certainly have a great impact on the public’s “movement“. 

It is important to ensure easy accessibility of such information for both domestic and international travelers for decision making. We believe our effort in building the COVID-19 Tracking System makes this information accessible and crucial to help people stay aware and prevent, well in advance, from suffering health problems during the earliest stages of the outbreak.

## <a name="SystemDesign"></a>*COVID-19 Tracking System* System Design

![Image of System design](https://covid-19-tracking-system.s3.us-east-2.amazonaws.com/images/System_design.png)

## <a name="WebPageStructure"></a>*COVID-19 Tracking System* Web Page Structure

<img src="https://covid-19-tracking-system.s3.us-east-2.amazonaws.com/images/Web_Page_Structure.png" width="700" >

### <a name="Dashboard"></a> Dashboard
This "Dashboard" page aims to provide an overview of COVID-19 outbreak in US. 

The data is updated daily.

<img src="https://covid-19-tracking-system.s3.us-east-2.amazonaws.com/images/Dashboard.png" width="700" >

It shows the following informations:
+ Total number of Confirmed Cases(US)
+ Total number of Deaths Cases(US)
+ Total number of Recovered Cases(US)

+ Monthly Cumulative Cases Tracking (line chart)
    + Confirmed
    + Deaths
    + Recovered

+ Monthly New Reported Cases Tracking (bar chart)
    + Confirmed
    + Deaths
    + Recovered

### <a name="Global_Map"></a> Global Map
This "Global Map" page aims to provide a visiualized overview of the locations Globally that have confirmed cases. 

The data is updated daily.

<img src="https://covid-19-tracking-system.s3.us-east-2.amazonaws.com/images/Global_Map.png" width="700" >


### <a name="State_Cases"></a> State Cases
This "State Cases" page aims to provide a table with detailed information for cases categorized by State/County. 

User can sort the rows based on the attribute selected.

The data is updated daily.

<img src="https://covid-19-tracking-system.s3.us-east-2.amazonaws.com/images/State_Cases.png" width="700" >

Each rows includes following information:
+ State
+ County
+ Confirmed
+ Deaths
+ Recovered

### <a name="Travel_Advice"></a> Travel Advice

This "Travel Advice" page aims to provide the crucial travel information or travelers and travel related industries. 

This includes information of the countries with different risk assessment level for COVID-19 according to Centers for Disease Control and Prevention(CDC), and it also provides links to the CDS Travel Information. 

The data is updated daily.

<img src="https://covid-19-tracking-system.s3.us-east-2.amazonaws.com/images/Travel_Advice.png" width="700" >

### <a name="WHO_Daily_Report"></a> WHO Daily Report
This "WHO Daily Report" page aims to provide daily updated Situation reports from Word Health Organization(WHO). Users can select the date from the calendar on the right to view the corresponding WHO report. 

<img src="https://covid-19-tracking-system.s3.us-east-2.amazonaws.com/images/WHO_Daily_Report.png" width="700" >

### <a name="About_COVID_19"></a> About COVID-19
This "About COVID-19" page aims to provide the general information about Coronavirus Disease 2019 (COVID-19) according to Centers for Disease Control and Prevention(CDC). 

<img src="https://covid-19-tracking-system.s3.us-east-2.amazonaws.com/images/About_COVID_19.png" width="700" >

It shows the following informations:
+ What is a Conronavirus (COVID-19)?
+ Source and spread of virus.
