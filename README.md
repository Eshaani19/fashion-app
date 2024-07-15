# Fit Finder

## Introduction

Fashion Outfit Picker is a web application designed to help users choose outfits based on the occasion. By leveraging a curated machine learning model, the application categorizes images of clothes into categories such as casual, formal, and more. This allows users to save time and make informed decisions when selecting their outfits. Future versions aim to include features for managing and selecting outfits from the users' own closet.

## Features

- **Outfit Categorization**: Automatically categorizes clothes into different occasions (e.g., casual, formal).
- **User Authentication**: Sign up, login, and manage user profiles.
- **Outfit Recommendations**: Get outfit suggestions based on the occasion.
- **Future Feature**: Manage and select outfits from your own closet.

## Technology Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **react-toastify**: For notifications and alerts.

### Backend

- **Flask**: A lightweight WSGI web application framework.
- **SQLAlchemy**: An SQL toolkit and Object-Relational Mapping (ORM) library for Python.
- **SQLite**: A C library that provides a lightweight, disk-based database.

### Miscellaneous

- **CORS**: Configured using `flask_cors` to handle cross-origin requests.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fashion-outfit-picker.git
   cd fashion-outfit-picker
   ```

2. Set up the backend:

   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   flask run
   ```

3. Set up the frontend:

   ```bash
   cd frontend
   npm install
   npx vite
   ```

## Usage

1. Navigate to the frontend URL (usually `http://localhost:...`).
2. Sign up or log in to your account.
3. Choose an occasion and get outfit recommendations.

## Future Development

- **Closet Management**: Integrate functionality for users to manage and select outfits from their own closet.
- **Enhanced Recommendations**: Improve the recommendation algorithm using user feedback and preferences.
- **Mobile App**: Develop a mobile application for on-the-go outfit selection.
