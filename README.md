# Number Classification API

## Overview
This API used to classifies numbers based on their mathematical properties and provide a fun fact about the particular nuumber.

## Features
-Check if a number is ***prime***,***perfrect*** or ***Armstrong***.

-Identifies if the number is ***odd*** or ***even***.

-Calculate the ***digits sum***.

-Fetch a ***fun facts*** about the number from ****Numbers API****.

## Stack
**Framework**: NodeJs
**Language**: JavaScript
**Deployment**: Vercel

## Setup Instructions
### How to run locally
1. **Clone the repository**:
   git clone https://github.com/officiabreezy/Number-API.git
2. **Install dependencies**:
   npm install axios cors dotenv express nodemon
3. **Run the server**:
   node index.js
4. **Test the API**:
   Open a browser or postman and visit:
   http://localhost:4020/api/v1/classify-number?number=371
## API  Documentation
-**Base URL**:
https://number-api-zeta.vercel.app/

https://number-api-zeta.vercel.app/api/v1/classify-number?number=371

### **Classify a Number**
-**Endpoint**: `GET /api/v1/classify-number`

-**Query parameter**: `number` (integer)

-**Response Format**:
 ***200 OK***
 ```json
  {
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong","odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
  }
```
  ***400 Bad Request***
  ```json
    {
      "number":"invalid_input",
      "error": true
    }




