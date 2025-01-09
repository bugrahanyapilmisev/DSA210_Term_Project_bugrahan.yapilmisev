# Analyzing Chess.com Activity and Its Correlation with Stress Levels

## Description
Sabancı University DSA210 Introduction to Data Science Course Fall 2024-2025 Term Project. This project analyzes my Chess.com activity and its potential correlation with my stress levels, hypothesizing that my chess activity frequency is influenced by academic stress.

## Table of Contents
- [Motivation](#motivation)  
- [Data Source](#data-source)  
- [Data Analysis](#data-analysis)  
- [Machine Learning](#machine-learning)  
- [Findings](#findings)  
- [Limitations and Future Work](#limitations-and-future-work)

## Motivation
Since 2019, I have been playing chess regularly on [Chess.com](https://www.chess.com/). After enrolling in this course and learning about the term project, I began wondering if there might be a connection between my chess-playing habits and my stress levels. Chess.com provides an ideal data source for this project as it is the sole platform I use for chess.

To analyze this, I:
- Compared changes in my Chess.com activity frequency with estimated stress levels (e.g., exam periods vs. holidays).
- Categorized academic stress levels based on university exams and assignment dates.

This study provides insights into my own stress management strategies and highlights the potential of chess as a stress-coping tool. I specifically estimate my stress level based on academic assignments (midterms, finals, crucial deadlines, etc.) and investigate whether playing chess is my self-stress coping mechanism for academic stress.

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
- **[Scipy](https://scipy.org/):** For statistical analysis.
- **[JSON](https://docs.python.org/3/library/json.html):** For saving and loading analysis results.
- **[Statsmodels](https://www.statsmodels.org/):** For additional statistical computations.
- **[Scikit-learn](https://scikit-learn.org/stable/):** For implementing machine learning models.

## Data Source
### 1. Chess.com Game Data
This dataset contains details about every game I've played on Chess.com, including:
- Player ratings, moves, timestamps, game results, and player roles (black or white), etc.

### 2. Academic Data
I compiled my exam dates and crucial deadlines from my Sabancı University email account to estimate stress levels:
- Stress levels are assumed to peak during the week leading up to exams and diminish during holidays.

## Data Analysis
The analysis consists of the following stages:
1. **Preprocessing:**
   - Data cleaning to handle missing values and outliers.
   - Normalization of chess activity and stress data for comparison.
2. **Visualization:**
   - Scatter plots and bar graphs to visualize trends in chess activity and stress levels.
   - Heatmaps to show correlations.
3. **Statistical Analysis:**
   - Correlation analysis to quantify the relationship between stress levels and chess activity.
   - Hypothesis testing using p-values to validate findings.

## Machine Learning
To enhance the analysis, I implemented machine learning models to predict chess activity based on academic stress levels. The following approaches were used:
1. **Linear Regression:**
   - Used to model the relationship between academic stress levels and chess activity frequency.
   - Performance was evaluated using Mean Squared Error (MSE) and R-squared (R²) values.

2. **Decision Tree Regression:**
   - Applied to capture non-linear relationships in the data.
   - Hyperparameters such as maximum depth were optimized for better accuracy.

3. **Support Vector Regression (SVR):**
   - Explored to assess its ability to model complex patterns in the dataset.
   - Grid search was performed for kernel and regularization parameter tuning.

4. **Evaluation Metrics:**
   - Models were compared based on their predictive accuracy and interpretability.
   - Visualizations of predicted vs. actual values provided insights into model performance.

## Findings
- Final Correlation: 0.09
- P-value: 0.01370
- Machine Learning Insights:
   - Linear Regression showed a moderate relationship, with an R² of 0.08.
   - Decision Tree Regression captured some non-linear patterns but tended to overfit the data.
   - SVR provided the most robust predictions but required significant computational resources.
- Conclusion: There is significant evidence that chess usage is related to workload, supporting the hypothesis that my chess-playing habits increase during periods of academic stress.

## Limitations and Future Work
### Limitations:
- The stress levels are estimated solely based on academic deadlines, which may not fully capture overall stress.
- The dataset is limited to my personal experience and may not generalize to others.
- External factors affecting chess activity (e.g., leisure time, mood) were not considered.
- Machine learning models were limited by the size and variability of the dataset.

### Future Work:
- Incorporate additional stress indicators such as sleep patterns or survey data.
- Expand the analysis to include other players' data to test for broader patterns.
- Investigate the potential of chess as a stress-coping tool across different demographics.
- Explore advanced machine learning models such as Random Forests or Neural Networks for improved predictions.

