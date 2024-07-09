import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier

# Load product data from CSV
products_df = pd.read_csv('data/products.csv')

# Dummy function for generating recommendations
def get_recommendations(preferences):
    # For demonstration, return a subset of products based on some dummy logic
    filtered_products = products_df.sample(3).to_dict(orient='records')
    return {'recommendations': filtered_products}
