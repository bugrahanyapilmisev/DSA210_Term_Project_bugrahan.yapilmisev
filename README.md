# Analyzing Chess.com Activity and Its Correlation with Stress Levels

## Description
Sabancı University CS210 Introduction to Data Science Course Fall 2023-2024 Term Project. This project analyzes my Chess.com activity and its potential correlation with my stress levels, hypothesizing that chess activity frequency is influenced by academic stress.

## Table of Contents
- [Motivation](#motivation)  
- [Tools](#tools)  
- [Data Source](#data-source)  
- [Goals](#goals)  

## Motivation
Since 2019, I have been playing chess regularly on [Chess.com](https://www.chess.com/). After enrolling in this course and learning about the term project, I began wondering if there might be a connection between my chess-playing habits and my stress levels. Chess.com provides an ideal data source for this project as it is the sole platform I use for chess.

To analyze this, I will:
- Compare changes in my Chess.com activity frequency against estimated stress levels (e.g., exam periods vs. holidays).
- Categorize academic intensity based on university exam schedules.
  
This study may not only provide insights into my own stress management strategies but could also highlight the potential of chess as a stress-coping tool.
Also, I will estimate my stress level only based on academic assignments (midterm, finals, crucial deadlines, etc.).So, I will try to find out whether playing chess is my self-stress coping mechanism for my academic stress level.

## Tools
- **[Visual Studio Code](https://code.visualstudio.com):** For coding and documentation.
- **[Pandas](https://pandas.pydata.org/):** For data cleaning, filtering, and structuring.
- **[Matplotlib](https://matplotlib.org/) and [Seaborn](https://seaborn.pydata.org/):** For data visualization (e.g., plotting trends or correlations).
- **[Numpy](https://numpy.org/):** For mathematical operations.
- **[Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/):** For parsing HTML data.
- **[Request](https://requests.readthedocs.io/en/latest/):** For retrieving static data from websites.
- **[Selenium](https://www.selenium.dev/):** For scraping dynamic websites (if needed).
- **[Conda](https://anaconda.org/anaconda/conda):** For creating virtual environments.
- **[Chess.com API](https://www.chess.com/club/chess-com-developer-community):** For fetching game data programmatically.

## Data Source
### 1. Chess.com Game Data
This dataset contains details about every game I've played on Chess.com, including:
- Player ratings, moves, timestamps, game results, and player roles (black or white).

### 2. Academic Data
I have compiled my exam dates from my Sabancı University email account to estimate stress levels:
- Stress levels are assumed to peak during the week leading up to exams and diminish during holidays.

## Goals
1. **Visualizations:** Create visual representations of chess activity trends and stress levels.
2. **Statistical Analysis:** Measure correlations between stress levels and chess activity frequency.
3. **Insights:** Provide actionable conclusions regarding the relationship between chess-playing habits and stress.
