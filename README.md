# playwright-api-testing

## Installing and Running an Express Server

### Prerequisites
Before you begin, make sure you have the following prerequisites installed on your system:

- Node.js: Express.js is built on top of Node.js, so you'll need Node.js to run Express applications. You can download and install node from this [link](https://nodejs.org/en/download)


### Installation
1. Clone the repository
2. Navigate to api-server directory from terminal
3. Run `npm init -y` to install necessary packages
4. Start the Express server by running the following command `node app.js`

## Running playwright tests

1. Navigate to candy-api-tests directory
2. Run `npm init -y` to install necessary packages
3. Run `npx playwright test` to run the necessary tests   


# Lesson 1 - GET

1. Write a get request `api/Candy?storeName=Target` to retrieve the candy details from store and validate HttpStatusCode and Quantity is 35.
2. Look at this [video](https://youtu.be/P9s8ENoN80M) how to write the test

Practice test : Now, create another test with Kroger as input and verify whether the HttpStatusCode is 404 or not.

