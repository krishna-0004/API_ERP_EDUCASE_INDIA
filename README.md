# School Management Backend API

A production-grade School Management Backend API built using Node.js, Express.js, MySQL, and Sequelize ORM.

This project was developed as part of an internship assignment with a strong focus on scalable backend architecture, security, validation, clean code practices, and production-ready API design.

---

# Live API

## Base URL

```bash
https://api-erp-educase-india.onrender.com
```

## Health Check

```http
GET /api/health
```

---

# Tech Stack

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Zod Validation
- Winston Logger
- Helmet
- HPP
- Morgan
- Compression
- Express Rate Limit

---

# Features

## Core Features

- Add new schools
- List schools sorted by nearest distance
- Haversine distance calculation
- RESTful API architecture
- Structured API responses

---

## Backend Architecture

- MVC Architecture
- Service Layer
- Repository Layer
- Modular folder structure
- Centralized constants
- Reusable middleware
- Async handler pattern

---

## Security Features

- Helmet security headers
- Rate limiting
- HTTP parameter pollution protection
- CORS protection
- SQL injection prevention through Sequelize ORM
- Request size limiting

---

## Validation & Error Handling

- Zod schema validation
- Centralized error middleware
- Production-safe error responses
- Structured validation responses

---

## Production Optimizations

- Connection pooling
- Composite database indexing
- DECIMAL precision for geo coordinates
- Optimized repository queries
- Compression middleware
- Graceful server shutdown
- Centralized logging system

---

# Folder Structure

```txt
project-root/
│
├── configs/
├── constants/
├── controllers/
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── validations/
│
├── logs/
├── app.mjs
├── server.mjs
├── package.json
├── .env.example
└── README.md
```

---

# Database Schema

## schools Table

| Column | Type |
|---|---|
| id | INTEGER |
| name | STRING(100) |
| address | STRING(255) |
| latitude | DECIMAL(10,7) |
| longitude | DECIMAL(10,7) |
| createdAt | TIMESTAMP |
| updatedAt | TIMESTAMP |

---

# Composite Indexing

Optimized database indexing is implemented for geographical coordinate queries.

```js
indexes: [
    {
        name: "idx_school_coordinates",
        fields: ["latitude", "longitude"],
    },
]
```

---

# API Endpoints

# 1. Health Check

## Endpoint

```http
GET /api/health
```

## Response

```json
{
  "success": true,
  "message": "Server is running successfully"
}
```

---

# 2. Add School

## Endpoint

```http
POST /api/schools/addSchool
```

## Request Body

```json
{
  "name": "ABC School",
  "address": "Mumbai",
  "latitude": 19.0760,
  "longitude": 72.8777
}
```

## Success Response

```json
{
  "success": true,
  "message": "School created successfully",
  "data": {
    "id": 1,
    "name": "ABC School",
    "address": "Mumbai",
    "latitude": 19.0760,
    "longitude": 72.8777
  }
}
```

---

# 3. List Schools

Returns schools sorted by nearest geographical distance using the Haversine Formula.

## Endpoint

```http
GET /api/schools/listSchools?latitude=19.0760&longitude=72.8777
```

## Success Response

```json
{
  "success": true,
  "message": "Schools fetched successfully",
  "data": [
    {
      "id": 1,
      "name": "ABC School",
      "address": "Mumbai",
      "latitude": 19.0760,
      "longitude": 72.8777,
      "distanceInKm": 0
    }
  ]
}
```

---

# Validation Rules

## Latitude

- Required
- Must be between -90 and 90

## Longitude

- Required
- Must be between -180 and 180

## Name

- Required
- Minimum 2 characters
- Maximum 100 characters

## Address

- Required
- Minimum 2 characters
- Maximum 255 characters

---

# Environment Variables

Create a `.env` file in the root directory.

## Example

```env
PORT=4000

NODE_ENV=development

DATABASE_URL=mysql://username:password@localhost:3306/school_management

```

---

# Local Setup Instructions

# 1. Clone Repository

```bash
git clone https://github.com/krishna-0004/API_ERP_EDUCASE_INDIA.git
```

---

# 2. Install Dependencies

```bash
npm install
```

---

# 3. Configure Environment Variables

Create `.env` file using `.env.example`

---

# 4. Start Development Server

```bash
npm run dev
```

---

# 5. Start Production Server

```bash
npm start
```

---

# API Testing

## Example cURL

### Add School

```bash
curl --location 'http://localhost:4000/api/schools/addSchool' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Mumbai Public School",
    "address": "Mumbai",
    "latitude": 19.0760,
    "longitude": 72.8777
}'
```

---

### List Schools

```bash
curl --location 'http://localhost:4000/api/schools/listSchools?latitude=19.0760&longitude=72.8777'
```

---

# Deployment

The project is deployed on Render.

## Live Deployment

```bash
https://api-erp-educase-india.onrender.com
```

---

# Postman Collection

Import the Postman collection from:

```txt
postman/School-Management-Backend-API.postman_collection.json
```

---

# Production Engineering Practices Implemented

- Clean architecture
- Production middleware stack
- Secure API design
- Centralized error handling
- Structured logging
- Validation abstraction
- Optimized database querying
- Scalable folder structure
- Environment-based configuration
- Production-safe error responses

---

# Future Improvements

- Swagger/OpenAPI Documentation
- JWT Authentication
- Redis Caching
- Docker Support
- CI/CD Pipelines
- Automated Testing
- Role-Based Access Control
- GeoSpatial Database Queries

---

# Author

Krishna Kedari Kadukar

---


