# DSA210_Term_Project

## Description
Sabanci University CS210 Introduction to Data Science Course Fall 2023-2024 Term Project. This project will be an analysis of my own <a href="https://https://www.chess.com/" target="_blank">Chess.com</a> usage and its correlation with my overstress level.

## Table of Contents
**[Motivation](#motivation)**  

**[Tools](#tools)**  

**[Data Source](#data-source)**  


# Motivation
# My Chess.com Usage Data Analysis
Since 2019, I have been playing chess regularly on chess.com. After enrolling in this course and learning about the term project, I wondered if there might be a connection between the frequency of my chess playing and my stress levels. Since chess.com is the only platform where I play chess, I can easily access the data related to my games.

With this in mind, I plan to analyze the changes in my chess activity frequency on chess.com and my stress levels from the day I started university to the present. To evaluate variations in my stress levels, I will consider the academic intensity of my university life. So I hypothesize that I generally experience higher stress levels during exam periods and lower levels during holidays.

By the end of my project, I want to uncover whether there is a meaningful relationship between these two variables. This study could provide valuable insights into how I cope with stress.

### Tools

[Visulat Studio Code](https://code.visualstudio.com): Used for coding and documentation.  

[Pandas](https://pandas.pydata.org/): Used for data cleaning, filtering, and structuring.  

[Matplotlib](https://matplotlib.org/) and [Seaborn](https://seaborn.pydata.org/): Supplementary for visualizations if needed.  

[Numpy](https://numpy.org/): Used for mathematical operations.  

[Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/): Used for Parsing static HTML data and extracting the desired information.

[Request](https://requests.readthedocs.io/en/latest/): Used for retrieving static data from websites.

[Selenium](https://www.selenium.dev/): Used for extracting data from dynamic websites like Chess.com.

[Conda](https://anaconda.org/anaconda/conda): Used for creating virtual environments on Python on vs code to prevent conflicts.

[Chess.com API](https://www.chess.com/club/chess-com-developer-community): Used for extracting chess.com data automatically.

## Data Source

I have one main source of data:

-   Data that is directly exported from Chess.com as a personal [data request](https://www.chess.com/games/archive).
  
    a-) This dataset contains information about every game I have played in chess.com. For example, it contains ratings of players, movements, time info,            results, which player plays as black or white, etc. 


In addition to this data source, to estimate my stress level I have collected all my exam dates. I have found these dates in my Sabancı University email account.


