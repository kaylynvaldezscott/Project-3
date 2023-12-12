# Project-3
**Submitted by** Alyshia Kiczma, Kaylyn Valdez-Scott, Nasir Qadri, and Arshdeep Khurana **Date:** 12-DEC-2023 **Project Title:** Project 3 - Explore NYC, Mapping Landmarks & Airbnb Lodgings Around the City.

Purpose of project 3 is to tell a story using data visualizations. 

We began by webscraping this Wikipedia page, "https://en.wikipedia.org/wiki/List_of_National_Historic_Landmarks_in_New_York_City", that gave a list of historical landmarks around New York City. To see we scraping data, visit file labeled "project 3 Wikipedia Web Scrape-with class work.ipynb". From scraping this data, we created a dataframe containing Landmark Name, geographical location (latitude & longitude), the County, and a description of each Landmark. This dataset has 116 rows. From here, we exported this dataframe into a CSV file. 

<img width="1419" alt="Screenshot 2023-12-05 at 7 13 49 PM" src="https://github.com/kaylynvaldezscott/Project-3/assets/141589524/d6e3f7b2-f9ff-4b6c-82b1-e6304641f15c">

<img width="1159" alt="Screenshot 2023-12-06 at 2 59 06 PM" src="https://github.com/kaylynvaldezscott/Project-3/assets/141589524/7897cdfe-b30d-43f0-8c20-e27ea13036ff">



Next, we began creating visualizations to map our previous Airbnb data from Project 1, and the new webscraped wikipedia landmarks. To see code for JavaScript mapping, visit file labeled "logic.js". On this map, the user is able to select what they would like to see with a layer menu. They can select seeing the Airbnb's in NYC, or the major landmarks that have descriptions available. The difference in map is also visible by the varying colour in markers.  



Lastly, we deployed these visualizations through Python Flask to see them on a live website (visit file labeled "index.html"). On this website, there is a dropdown menu allowing the user to choose their desired map. 

Additionally, a visualization waws created using the chart.js dictionary

![image](https://github.com/kaylynvaldezscott/Project-3/assets/142273069/ccee22b0-e7d1-4334-9f00-76e9b6235749)



