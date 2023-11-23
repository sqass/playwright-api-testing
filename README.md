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

1. Compose a GET request for the API endpoint `api/Candy?storeName=Target` to fetch candy details from the store. Verify the HttpStatusCode is 200 and ensure that the Quantity is 35. Refer to the [video](https://youtu.be/P9s8ENoN80M) for guidance on writing the test

### Practice Tests :
1. Now, create another test with Kroger as input and verify whether the HttpStatusCode is 404 or not and whether the response body contains the storename or not
<details>
    <summary>Click to reveal answer</summary>

```js
        test('When no candy details present in store', async ( {request})=> {
            const response = await request.get('http://localhost:3000/api/Candy?storeName=Kroger');
            const responseAsJson = await response.json();

            await expect(response.status()).toBe(404);
            expect(responseAsJson.error).toContain('Kroger');
        })
```
</details>


# Lesson 2 - POST

Create a POST request for the API endpoint `/api/candy` , with below requestBody to create a new candy entry details for a store. Verify the HttpStatusCode is 201. Refer to this [video](https://youtu.be/3YkNIYBjWSg) for guidance on writing the test

```json
{
    "Name": "Snickers",
    "Company": "Wrigley Company",
    "Store": "Target",
    "Quantity" : 10
}
```

### Practice Tests
 
1. Create a assertion to validate Whether the Quantity is `10` or not from the output response
<details>
<summary>Click to reveal answer</summary>
```js
    expect(responseAsJson.Quantity).toEqual(10);
```    
</details>

2. Create a assertion to validate whether the value of Name is `Snickers` or not
<details>
<summary>Click to reveal answer</summary>
```js
        expect(responseAsJson.Name).toEqual("Snickers");
```
</details>

3. Create a test to validate 400 status when one of the input details is passed invalid/emtpy

<details>
    <summary>Click to reveal answer</summary>

```js
       test('Validate error status when Quantity is missing from request Body', async ( {request})=> {
            const requestBody = {
                "Name": "Snickers",
                "Company": "Wrigley Company",
                "Store": "Target"
            }

            const response = await request.post('http://localhost:3000/api/Candy', { data: requestBody});
            const responseAsJson = await response.json();

            await expect(response.status()).toBe(400);
            expect(responseAsJson.error).toContain('Invalid candy data. Please provide Name, Company, Quantity and Store.');
      })
```
</details>



# Lesson 3 - PUT

Create a PUT request for the API endpoint `/api/candy` , with below requestBody to update the quantity of candy for a store. Verify the HttpStatusCode is 200 and new quantity value from output. Refer to this [video](https://youtu.be/Gy8Gbw_yWOM) for guidance on writing the test

```json
{
    "Name": "Snickers",
    "Company": "Mars, Incorporated",
    "Quantity": 50,
    "Store": "Target"
}
```

### Practice Tests
 
1. Create a test case with the provided request body, and ensure that the HTTP status code is 404 when candy details are not found in the specified store. Additionally, validate the error message in the response output.
```json
{
     "Name": "Hershey",
     "Company": "Hershey llc",
     "Quantity": 50,
     "Store": "Target"
}
```

<details>
<summary>Click to reveal answer</summary>
```js
    test('update quantity when candy details are not found in store', async ( {request})=> {
    const requestBody = {
        "Name": "Hershey",
        "Company": "Hershey llc",
        "Quantity": 50,
        "Store": "Target"
    }

    const response = await request.put('http://localhost:3000/api/Candy', { data: requestBody});
    const responseAsJson = await response.json();

    await expect(response.status()).toBe(404);
    expect(responseAsJson.error).toContain("Candy 'Hershey' not found.");
})
```    
</details>


