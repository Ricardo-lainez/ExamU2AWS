# Puzzle Application

This is a simple puzzle application that allows users to create, solve, and save puzzles. The application consists of a frontend built with HTML, CSS, and JavaScript, and a backend powered by Node.js and Express, with data stored in a MongoDB database.

## Project Structure

```
puzzle-app
├── client
│   ├── index.html       # Main HTML document for the frontend
│   ├── styles.css       # Styles for the application
│   └── app.js           # Frontend JavaScript code
├── server
│   ├── index.js         # Entry point for the backend application
│   ├── routes
│   │   └── puzzle.js    # Routes for puzzle functionality
│   ├── models
│   │   └── Puzzle.js    # Mongoose model for puzzles
│   └── config
│       └── db.js       # MongoDB connection configuration
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd puzzle-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up the MongoDB database and update the connection string in `server/config/db.js`.

### Running the Application

1. Start the backend server:
   ```
   node server/index.js
   ```

2. Open `client/index.html` in your web browser to access the application.

## Features

- Create and save puzzles
- Solve puzzles
- User-friendly interface

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.