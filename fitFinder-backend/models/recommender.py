import pandas as pd
import numpy as np
import requests
from sklearn.ensemble import RandomForestClassifier

# Load product data from CSV
products_df = pd.read_csv('data/products.csv')

# Dummy function for generating text descriptions
#def generate_text_description(product_name):
    #return f"This is a {product_name}, perfect for any occasion."

# H&M API setup
HM_API_URL = "https://hmapi.azurewebsites.net/index.php/dames/jurk" 

def fetch_hm_recommendations(occasion):
    response = requests.get(f"{HM_API_URL}?occasion={occasion}")
    if response.status_code == 200:
        return response.json()  # Adjust according to the actual API response format
    else:
        return []

def categorize_outfits(outfits, preferences):
    # Gemini API setup
    gemini_api_url = "https://generativelanguage.googleapis.com"
    gemini_api_key = ""
    
    payload = {
        "preferences": preferences,
        "outfits": outfits
    }
    headers = {
        "Authorization": f"Bearer {gemini_api_key}",
        "Content-Type": "application/json"
    }
    
    response = requests.post(gemini_api_url, json=payload, headers=headers)
    
    if response.status_code == 200:
        return response.json().get('categorized_outfits', [])
    else:
        return []
    
def get_recommendations(preferences):
    occasion = preferences.get('occasion', 'casual')
    outfits = fetch_hm_recommendations(occasion)
    
    if outfits:
        categorized_outfits = categorize_outfits(outfits, preferences)
        return {'recommendations': categorized_outfits}
    else:
        # Fall back to some dummy data if H&M API fails
        return {'recommendations': products_df.sample(3).to_dict(orient='records')}
