#!/usr/bin/env python
# coding: utf-8

import json
import pandas
import math
from datetime import date, timedelta
import requests

### Date in two different formats 
today = date.today()
    # mm-dd-y
date1 = today.strftime("%m-%d-%Y")
    # mm/dd/y
date2 = today.strftime("%m/%d/%Y")


### US Time series data

##  Confirmed Time Series
url_Confirmed = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'
US_Confirmed_time = pandas.read_csv(url_Confirmed, index_col='Country/Region')
rowData = US_Confirmed_time.loc[ ['US'] , :]
columnsData = rowData.iloc[ :, 3:]

Confirmed_time_series = columnsData.sum(axis = 0, skipna = True)

# Total Confirmed US : US_Total_Confirmed
US_Total_Confirmed = int(Confirmed_time_series[-1])

# Confirmed Monthly Series (Cumulative) : Confirmed_Monthly_Cumulative
Confirmed_Monthly_Cumulative = Confirmed_time_series[-30:]

month_label = list(Confirmed_Monthly_Cumulative.keys())
for index,date in enumerate(month_label):
    month_label[index] = date[:-3]

Confirmed_Monthly_Cumulative = list(Confirmed_Monthly_Cumulative)

# Confirmed Monthly Series (New Added) : Confirmed_Month_New_Added
temp = int(Confirmed_time_series[-31])

Confirmed_Month_New_Added = [0]*30

for index,value in enumerate(Confirmed_Monthly_Cumulative):
    if index ==0 :
        Confirmed_Month_New_Added[0] = value- temp
    else:
        Confirmed_Month_New_Added[index] = value - Confirmed_Monthly_Cumulative[index-1]


##  Deaths Time Series
url_Deaths = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv'
US_Deaths_time = pandas.read_csv(url_Deaths, index_col='Country/Region')
rowData = US_Deaths_time.loc[ ['US'] , :]
columnsData = rowData.iloc[ :, 3:]

Deaths_time_series = columnsData.sum(axis = 0, skipna = True)

# Total Deaths US : US_Total_Deaths
US_Total_Deaths = int(Deaths_time_series[-1])

# Deaths Monthly Series (Cumulative): Deaths_Monthly_Cumulative
Deaths_Monthly_Cumulative = list(Deaths_time_series[-30:])
    
# Deaths Monthly Series (New Added) : Deaths_Month_New_Added
temp = int(Deaths_time_series[-31])

Deaths_Month_New_Added = [0]*30

for index,value in enumerate(Deaths_Monthly_Cumulative):
    if index ==0 :
        Deaths_Month_New_Added[0] = value- temp
    else:
        Deaths_Month_New_Added[index] = value - Deaths_Monthly_Cumulative[index-1]


##  Recovered Time Series
url_Recovered = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv'
US_Recovered_time = pandas.read_csv(url_Recovered, index_col='Country/Region')
rowData = US_Recovered_time.loc[ ['US'] , :]
columnsData = rowData.iloc[ :, 3:]

Recovered_time_series = columnsData.sum(axis = 0, skipna = True)

# Total Deaths US : US_Total_Deaths
US_Total_Recovered = int(Recovered_time_series[-1])

# Recovered Monthly Series (Cumulative): Recovered_Monthly_Cumulative
Recovered_Monthly_Cumulative = list(Recovered_time_series[-30:])

# Recovered Monthly Series (New Added) : Recovered_Month_New_Added
temp = int(Recovered_time_series[-31])

Recovered_Month_New_Added = [0]*30

for index,value in enumerate(Recovered_Monthly_Cumulative):
    if index ==0 :
        Recovered_Month_New_Added[0] = value - temp
    else:
        Recovered_Month_New_Added[index] = value - Recovered_Monthly_Cumulative[index-1]



### Daily Report
csv_file_name = date1+'.csv'

par_url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/'
url = par_url + csv_file_name

request = requests.get(url)
if request.status_code == 200:
    pass
else:
    yesterday = today - timedelta(days=1)
    yest1 = yesterday.strftime("%m-%d-%Y")
    yest2 = yesterday.strftime("%m/%d/%y")
    csv_file_name = yest1 + '.csv'
    url = par_url + csv_file_name
    
Today_data = pandas.read_csv(url, index_col='Country_Region')  


## US Location for Comfirmed, Deaths, Recovered cases 

# US_location : all locations in US
# comfirmed_state_dic : US locations categoried by state

Today_US_Location = Today_data.loc[ ['US'] , ['Province_State','Admin2','Confirmed','Deaths', 'Recovered','Lat','Long_'] ]
US_location = Today_US_Location.to_dict('records')

valid_states =  ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


comfirmed_state_dic = {}

for index,province in enumerate(US_location):
    lat = province['Lat']
    lng = province['Long_']
    if math.isnan(float(lat)) or lat==0:
        lat = '-'
    if math.isnan(float(lng)) or lng==0:
        lng = '-'
    name = province['Province_State']
    if name not in valid_states:
        name = 'Unknown'
    State = name
    US_location[index]['State'] = State
    
    name = province['Admin2']
    if pandas.isna(name): 
        County = '-'
    else:
        County = name
    US_location[index]['County'] = County
    
 
    US_location[index]['center'] = {}
    US_location[index]['center']['lat'] = lat
    US_location[index]['center']['lng'] = lng
    del US_location[index]['Lat']
    del US_location[index]['Long_']
    del US_location[index]['Province_State']
    del US_location[index]['Admin2']
    
    if State not in comfirmed_state_dic.keys():
        comfirmed_state_dic[State] = []
        comfirmed_state_dic[State].append(US_location[index])
    else:
        comfirmed_state_dic[State].append(US_location[index])


## Global Location for Comfirmed, Deaths, Recovered cases 
# Global_location : all locations Globally 
# comfirmed_country_dic : Global locations categoried by country

Today_Global_data = pandas.read_csv(url)  
Today_Global_Location = Today_Global_data.loc[ :, ['Country_Region','Province_State','Admin2','Confirmed','Deaths', 'Recovered','Lat','Long_'] ]
Global_location = Today_Global_Location.to_dict('records')


comfirmed_country_dic = {}
for index,country in enumerate(Global_location):
    lat = country['Lat']
    lng = country['Long_']
    if math.isnan(float(lat)) or lat==0:
        lat = '-'
    if math.isnan(float(lng)) or lng==0 :
        lng = '-'
    Country = country['Country_Region']
    Global_location[index]['Country'] = Country
    name = country['Province_State']
    if  pandas.isna(name): 
        State = '-'
    else:
        State = name
    Global_location[index]['State'] = State
    
    name = country['Admin2']
    if pandas.isna(name): 
        County = '-'
    else:
        County = name
    Global_location[index]['County'] = County
    
    Global_location[index]['center'] = {}
    Global_location[index]['center']['lat'] = lat
    Global_location[index]['center']['lng'] = lng
    del Global_location[index]['Lat']
    del Global_location[index]['Long_']
    
    del Global_location[index]['Country_Region']
    del Global_location[index]['Province_State']
    del Global_location[index]['Admin2']

    
    if Country not in comfirmed_country_dic.keys():
        comfirmed_country_dic[Country] = {}
        comfirmed_country_dic[Country]['Confirmed'] = Global_location[index]['Confirmed']
        comfirmed_country_dic[Country]['Deaths'] = Global_location[index]['Deaths']
        comfirmed_country_dic[Country]['Recovered'] = Global_location[index]['Recovered']
    else:
        comfirmed_country_dic[Country]['Confirmed'] += Global_location[index]['Confirmed']
        comfirmed_country_dic[Country]['Deaths'] += Global_location[index]['Deaths']
        comfirmed_country_dic[Country]['Recovered'] += Global_location[index]['Recovered']


### Format and write data into json file

data = {}

data['Date'] = date1

data['Total_US_data'] = {}
data['Total_US_data']['US_Total_Confirmed'] = US_Total_Confirmed
data['Total_US_data']['US_Total_Deaths'] = US_Total_Deaths
data['Total_US_data']['US_Total_Recovered'] = US_Total_Recovered

data['US_Month_Cumulative'] = {}
data['US_Month_Cumulative']['xlabel'] = month_label
data['US_Month_Cumulative']['series_label']=['Confirmed','Deaths','Recovered']
data['US_Month_Cumulative']['series']=[]
data['US_Month_Cumulative']['series'].append(Confirmed_Monthly_Cumulative)
data['US_Month_Cumulative']['series'].append(Deaths_Monthly_Cumulative)
data['US_Month_Cumulative']['series'].append(Recovered_Monthly_Cumulative)

data['US_Month_New_add'] = {}
data['US_Month_New_add']['xlabel'] = month_label
data['US_Month_New_add']['series_label']=['Confirmed','Deaths','Recovered']
data['US_Month_New_add']['series']=[]
data['US_Month_New_add']['series'].append(Confirmed_Month_New_Added)
data['US_Month_New_add']['series'].append(Deaths_Month_New_Added)
data['US_Month_New_add']['series'].append(Recovered_Month_New_Added)

data['US_location'] = US_location

data['comfirmed_state_list'] = sorted(comfirmed_state_dic.keys())
data['comfirmed_state_dic'] = comfirmed_state_dic

data['Global_location'] = Global_location
data['comfirmed_country_list'] = sorted(comfirmed_country_dic.keys())
data['comfirmed_country_dic'] = comfirmed_country_dic

with open('./src/data.json', 'w') as outfile:
    json.dump(data, outfile,indent=4)

