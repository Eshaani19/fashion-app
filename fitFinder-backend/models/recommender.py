import os
import cv2
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC

import os
import cv2
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC

# Function to load and preprocess image 
def load_and_preprocess_image(image_path):
    # Read the image
    img = cv2.imread(image_path)
    # Resize the image to a fixed size
    img = cv2.resize(img, (224, 224))  
    # Convert image to RGB format
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    # Normalize pixel values
    img = img.astype('float32') / 255.0
    # Extract features
    # uses the flattened image as a basic feature
    features = img.flatten()

    return features

def train_model():
    # Organize and preprocess file paths
    image_data = []
    for filename in os.listdir("/Users/eshaaniarvind/Desktop/image-data/images"):
        if not os.path.isfile(os.path.join("/Users/eshaaniarvind/Desktop/image-data/images", filename)) or filename.startswith('.'):
            continue
        # Split filename to get description and category
        parts = filename.split("-")
        #print(parts)
        description = parts[0]
        #print(description)
        category = parts[1].split(".")[0]  # Remove extension
        #print(category)
        image_path = os.path.join("/Users/eshaaniarvind/Desktop/image-data/images", filename)
        image_data.append((image_path, category))

    #print(f"Found {len(image_data)} images.")

    # Split data into training and testing sets
    X = [data[0] for data in image_data]  # Extract image paths
    y = [data[1] for data in image_data]  # Extract categories

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)  # Split with 20% for testing

    #print(f"Training set size: {len(X_train)}")
    #print(f"Testing set size: {len(X_test)}")

    # Train the SVM model
    model = SVC(kernel='linear') 

    # Train the model on preprocessed features
    X_train_features = [load_and_preprocess_image(path) for path in X_train]
    model.fit(X_train_features, y_train)

    # Evaluate the model performance on test set
    '''X_test_features = [load_and_preprocess_image(path) for path in X_test]
    predictions = model.predict(X_test_features)
    accuracy = model.score(X_test_features, y_test)
    print(f"Model Accuracy: {accuracy}")'''

    return model

# Function to get recommendations based on category
def get_recommendations(category, model):
    products_df = pd.read_csv('data/products.csv')
    recommended_products = products_df[products_df['category'] == category]
    return recommended_products.to_dict(orient='records')

# Train the model (do this once and save the model if needed)
model = train_model()

# Use the trained model for outfit categorization
def categorize_outfit(outfit_image):
    features = load_and_preprocess_image(outfit_image)
    category = model.predict([features])[0]
    return category
