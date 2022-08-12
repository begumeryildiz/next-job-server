# Next Job REST API

## About
Next Job is a platform that brings together experts who are looking for a job in the field of tech, and companies and startups around the world looking for a colleague.

REST API for a project management app.

- This repo implements the backend REST API (built in Express + MongoDB).
- A repository for with the frontend (React App) can be found here: https://github.com/begumeryildiz/next-job-client
- Used four different models: user, candidate, company, job.
- Token-based authorization
- Implemented all CRUD actions on models.

## Instructions
To run in your computer, follow these steps:

- Need to install dependencies `npm install`
- Need to run the application `npm run dev`
- Need to create `.env` file with these variables:
  - `PORT=5005`
  - `TOKEN_SECRET=ilovepizza`
  - `ORIGIN=http://localhost:3000`
  - `CLOUDINARY_NAME="YOUR CLOUDINARY NAME"`
  - `CLOUDINARY_KEY="YOUR CLOUDINARY KEY"`
  - `CLOUDINARY_SECRET="YOUR CLOUDINARY SECRET"`

  ## Tecnologies And Tools
- ExpressJS
- NodeJS
- MongoDB Atlas
- Mongoose
- Javascript
- Bycrpt
- Cloudinary
- Bootstrap
- CSS3

## Demo
A demo of the REST API can be found here: https://next-job-app.herokuapp.com/api/



