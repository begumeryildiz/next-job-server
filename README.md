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

## API Endpoints

### Auth endpoints

| HTML Verb | Path              | Request Headers             | Request body                                                           | Description       |
|-----------|-------------------|-----------------------------|------------------------------------------------------------------------|-------------------|
| POST      | /api/auth/signup  | –                           | { useranem: String, email: String, password: String, userType:String } | Create an account |
| POST	     | /api/auth/login	  | –                           | { username: String, password: String                                   |  Login            |
| GET	      | /api/auth/verify	 | Authorization: Bearer <jwt> |                                                                        | Verify jwt        |


### Canditates

| HTTP verb | Path                         | Request Headers	            | Request body                                                                                                                                                                            | Description               |
|-----------|------------------------------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| POST	     | /api/candidates              | Authorization: Bearer <jwt> | { firstName: String,  lastName: String, role: String, email: String,  phone: Number, location: String, about: String,  skills: String, image: String, linkedin: String, owner: String } | Create new candidates     |
| POST      | /api/upload                  | Authorization: Bearer <jwt> | –	                                                                                                                                                                                      | Upload profile image      |
| GET       | /api/projects                | –	                          | –	                                                                                                                                                                                      | Get all candidates        |
| GET       | /api/candidates/:candidateId | Authorization: Bearer <jwt>          | –                                                                                                                                                                                       | Get candidate details     |
| PUT       | /api/candidates/:candidateId | Authorization: Bearer <jwt> | { firstName: String,  lastName: String, role: String, email: String,  phone: Number, location: String, about: String,  skills: String, image: String, linkedin: String, owner: String } | Update a candidate        |
| GET       | /api/myprofile               | Authorization: Bearer <jwt> | { firstName: String,  lastName: String, role: String, email: String,  phone: Number, location: String, about: String,  skills: String, image: String, linkedin: String, owner: String } | Get the candidate profile |
| DELETE	   | /api/candidates/:candidateId | Authorization: Bearer <jwt> | –	                                                                                                                                                                                      | Delete a candidate        |

### Companies

| HTTP verb | Path                      | Request Headers	            | Request body                                                                        | Description             |
|-----------|---------------------------|-----------------------------|-------------------------------------------------------------------------------------|-------------------------|
| POST	     | /api/companies            | Authorization: Bearer <jwt> | { name: String,  jobs: Array, description: String, address: String, owner: String } | Create new company      |
| GET       | /api/companies            | –	                          | –	                                                                                  | Get all companies       |
| GET       | /api/companies/:companyId | Authorization: Bearer <jwt> | –                                                                                   | Get company details     |
| PUT       | /api/companies/:companyId | Authorization: Bearer <jwt> | { name: String,  jobs: Array, description: String, address: String, owner: String } | Update a company        |
| GET       | /api/mycompnay            | Authorization: Bearer <jwt> | { name: String,  jobs: Array, description: String, address: String, owner: String } | Get the company profile |
| DELETE	   | /api/companies/:companyId | Authorization: Bearer <jwt> | –	                                                                                  | Delete a company        |

### Jobs

| HTTP verb | Path             | Request Headers	            | Request body                                                                                                              | Description     |
|-----------|------------------|-----------------------------|---------------------------------------------------------------------------------------------------------------------------|-----------------|
| POST	     | /api/jobs        | Authorization: Bearer <jwt> | { title: String,  company: String, description: String, skills: String, level: String, owner: String, applicants: Array } | Create new job  |
| GET       | /api/jobs        | –	                          | –	                                                                                                                        | Get all jobs    |
| GET       | /api/jobs/:jobId | Authorization: Bearer <jwt> | –                                                                                                                         | Get job details |
| PUT       | /api/jobs/:jobId | Authorization: Bearer <jwt> | { title: String,  company: String, description: String, skills: String, level: String, owner: String, applicants: Array } | Update a job    |
| DELETE	   | /api/jobs/:jobId | Authorization: Bearer <jwt> | –	                                                                                                                        | Delete a job    |
| GET       | /api/seacrhjob   | –	                          | –	                                                                                                                        | Search jobs     |


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



