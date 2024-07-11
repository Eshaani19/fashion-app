from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import pandas as pd
from models.recommender import get_recommendations
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)  # Handle Cross-Origin Resource Sharing (CORS)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data/users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

# Routes for signup, login, recommendations, and product data
@app.route('/users/signup', methods=['POST'])
def sign_up():
    data = request.json
    if 'username' not in data or 'password' not in data:
        return jsonify({'error': 'Username and password are required'}), 400
    
    existing_user = User.query.filter_by(username=data['username']).first()
    if existing_user:
        return jsonify({'error': 'Username already exists'}), 400
    
    hashed_password = generate_password_hash(data['password'])
    new_user = User(username=data['username'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'})

@app.route('/users/login', methods=['POST'])
def login():
    data = request.json
    if 'username' not in data or 'password' not in data:
        return jsonify({'error': 'Username and password are required'}), 400
    
    user = User.query.filter_by(username=data['username']).first()
    if user and check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Login successful'})
    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    user_preferences = data.get('preferences')
    recommendations = get_recommendations(user_preferences)
    return jsonify(recommendations)

@app.route('/data/products', methods=['GET'])
def get_products():
    products_df = pd.read_csv('data/products.csv')
    return products_df.to_json(orient='records')

if __name__ == '__main__':
    # Create the database and the database table
    with app.app_context():
        db.create_all()
    print("Database and tables initialized")
    app.run(debug=True)
