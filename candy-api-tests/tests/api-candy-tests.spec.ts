import { expect, test } from '@playwright/test'

test('get candy details of a store', async ( {request})=> {
    const response = await request.get('http://localhost:3000/api/Candy?storeName=Target');
    const responseAsJson = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(responseAsJson[0].Quantity).toStrictEqual(35);
})


test('create new candy details in the store', async ( {request})=> {
    const requestBody = {
        "Name": "Snickers",
        "Company": "Wrigley Company",
        "Store": "Target",
        "Quantity" : 10
    }

    const response = await request.post('http://localhost:3000/api/Candy', { data: requestBody});
    const responseAsJson = await response.json();

    await expect(response.status()).toBe(201);
})


test('update quantity of candy in a given store', async ( {request})=> {
    const requestBody = {
        "Name": "Snickers",
        "Company": "Mars, Incorporated",
        "Quantity": 50,
        "Store": "Target"
    }

    const response = await request.put('http://localhost:3000/api/Candy', { data: requestBody});
    const responseAsJson = await response.json();

    await expect(response.status()).toBe(200);
    expect(responseAsJson.Quantity).toStrictEqual(50);
})
