
# Code Habit - Coding Dashboard

**Code Habit** is an interactive coding dashboard designed to track and visualize a developer's progress, habits, and coding challenges. The application integrates with popular coding platforms (e.g., GitHub, LeetCode) to fetch user profiles, solve coding challenges, and provide real-time visualizations such as heatmaps and progress charts.

## Features

- **User Profile Integration**: Sync your coding profiles from various platforms like GitHub, LeetCode, and more.
- **Habit Tracking**: Track your coding consistency and maintain streaks to build productive habits.
- **Heatmap Visualization**: Visualize your coding activity and progress over time with color-coded heatmaps.
- **Level-based Challenges**: Participate in coding challenges categorized by difficulty to improve your skills.
- **Analytics Dashboard**: View detailed statistics about your coding activities, achievements, and progress.
- **Responsive UI**: Fully responsive design to work seamlessly across devices.
  
## Tech Stack

- **Frontend**: React.js, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, MongoDB Atlas
- **Authentication**: Passport.js / JWT
- **Deployment**: Heroku (Backend), Netlify/Vercel (Frontend)
  
## Installation

Clone the repository and navigate into the project folder:

```bash
git clone https://github.com/your-username/code-habit.git
cd code-habit
```

### Backend Setup

1. Install dependencies:
    ```bash
    npm install
    ```
2. Set up your `.env` file with the required environment variables like MongoDB URI, JWT secret, etc.
3. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend server:
    ```bash
    npm start
    ```

## Usage

Once both the frontend and backend servers are running, you can access the application in your browser at `http://localhost:3000`.

- **Sign up / Login** to start integrating your coding profiles.
- **Track your coding habits** and challenge yourself to solve more problems.
- View your **progress in the heatmap** and dashboard.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by coding habit tracking tools.
- Thanks to the community for their contributions to open-source libraries and frameworks.
