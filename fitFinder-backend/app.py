from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import pandas as pd
from models.recommender import get_recommendations
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Handle Cross-Origin Resource Sharing (CORS)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data/users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

@app.route('/users/signup', methods=['POST'])
def sign_up():
    data = request.json
    new_user = User(username=data['username'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'})

@app.route('/users/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()
    if user and user.password == data['password']:
        return jsonify({'message': 'Login successful'})
    return jsonify({'message': 'Invalid credentials'})

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
    app.run(debug=True)
