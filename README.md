# Quiz App

This is a serverless quiz application built using AWS Lambda, API Gateway, and DynamoDB on the backend, and React, Tailwind CSS, Axios, and Ant Design on the frontend. The application allows users to take quizzes and administrators to manage quiz questions and view messages from the contact us page.

## Features

- User Features:
  - Take quizzes and view results.
  - User authentication and authorization.
  - Cache system using IndexDB, which expires after 12 hours.

- Admin Features:
  - CRUD operations on quiz questions using DynamoDB.
  - View and manage messages from the contact us page.

## Technology Stack

- Backend:
  - AWS Lambda: Serverless compute service for running the application's backend logic.
  - API Gateway: Service for creating and managing RESTful APIs.
  - DynamoDB: Fully managed NoSQL database for storing quiz questions.
  - IndexDB: Browser-based storage for caching quiz data.

- Frontend:
  - React: JavaScript library for building user interfaces.
  - Tailwind CSS: Utility-first CSS framework for styling the application.
  - Axios: HTTP client for making API requests to the backend.
  - Ant Design: UI component library for building a modern and responsive UI.

## Deployment

1. Clone the repository:

git clone https://github.com/your-username/quiz-app.git

markdown
Copy code

2. Backend Setup:
- Set up the necessary AWS services (Lambda, API Gateway, DynamoDB).
- Configure the backend code with your AWS credentials and service endpoints.

3. Frontend Setup:
- Install dependencies:

  ```
  cd frontend
  npm install
  ```

- Configure the frontend code with your backend API endpoint.

4. Start the frontend development server:

npm start

markdown
Copy code

5. Access the application at [http://localhost:3000](http://localhost:3000).

