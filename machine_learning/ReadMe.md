# README

## Overview
This project explores the training and evaluation of various machine learning models for predictive tasks. It includes preprocessing data, applying models like XGBoost and recurrent neural networks (RNNs), and interpreting results using performance metrics such as Mean Squared Error (MSE), Mean Absolute Error (MAE), and R-squared (R²).

## Project Structure

- **Input Data**: Multidimensional data used for predictive modeling.
- **Data Preprocessing**: Transformation steps, including dimensionality reduction.
- **Models**:
  - XGBoost: A gradient boosting algorithm for structured data.
  - Recurrent Neural Networks (RNNs): Used for sequential data, including variations like BiLSTM and BiGRU.
- **Evaluation Metrics**:
  - Mean Squared Error (MSE): Average squared difference between predicted and actual values.
  - Mean Absolute Error (MAE): Average absolute difference between predicted and actual values.
  - R-squared (R²): Proportion of variance explained by the model.

## Key Steps

1. **Preprocessing**:
   - Original feature set reduced from 10 to 5 dimensions for the XGBoost model.
   - Adjustments to input dimensions for neural network models to ensure compatibility.

2. **Model Evaluation**:
   - **XGBoost**:
     - Test Set Evaluation: 
       - MSE: 58.8629
       - MAE: 6.8374
       - R²: -700.9546
     - Consistent single predictions (deterministic).

   - **RNN Variations**:
     - **BiLSTM (Main Model)**:
       - Test Set Evaluation:
         - MSE: 0.1233
         - MAE: 0.2858
         - R²: -0.2467
       - Monte Carlo Dropout Prediction (Single Input):
         - Predicted Chess Frequency (scaled): 0.5394
         - 95% CI: (0.5394, 0.5394).

     - **BiLSTM (Option A)**:
       - MSE: 0.0053
       - MAE: 0.0731
       - R²: -65152128.0000
       - Monte Carlo Dropout Mean Prediction (Scaled): 0.1872 (95% CI: 0.0581, 0.3163).
     
     - **BiGRU (Option B)**:
       - MSE: 0.1506
       - MAE: 0.3194
       - R²: -0.7129
       - Monte Carlo Dropout Mean Prediction (Scaled): 0.2263 (95% CI: 0.0784, 0.3742).

## Observations
- XGBoost provided suboptimal performance on the test set with negative R² values, suggesting issues with feature engineering or dataset suitability.
- Neural network models demonstrated better predictive capability in terms of lower MSE and MAE.
- Confidence intervals from Monte Carlo Dropout indicate the uncertainty in predictions.

## Warnings
- The notebook logs warnings indicating that models were compiled without metrics, which might affect validation outputs.

## Requirements
- Python (3.x)
- Libraries: TensorFlow, XGBoost, NumPy, Pandas, Matplotlib

## Usage
1. Clone the repository.
2. Ensure all dependencies are installed.
3. Run the notebook sequentially to preprocess data, train models, and evaluate results.

## Future Work
- Addressing issues causing high negative R² values for XGBoost.
- Further hyperparameter tuning and feature engineering.
- Expanding the dataset for improved generalization.

