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

1. Compose a GET request for the API endpoint api/Candy?storeName=Target to fetch candy details from the store. Verify the HttpStatusCode is 200 and ensure that the Quantity is 35. Refer to the [video](https://youtu.be/P9s8ENoN80M) for guidance on writing the test

Practice test : Now, create another test with Kroger as input and verify whether the HttpStatusCode is 404 or not and whether the response body contains the storename or not

