import { expect, test } from '@playwright/test'

test('get candy details of a store', async ( {request})=> {
    const response = await request.get('http://localhost:3000/api/Candy?storeName=Target');
    const responseAsJson = await response.json();

    expect(response.ok()).toBeTruthy();
    expect(responseAsJson[0].Quantity).toStrictEqual(35);
})