import {test, expect} from '@playwright/test'
// use command to run API: npx playwright test demoBlazeApi.spec.js
// to check result: npx playwright show-report

test('First API Test', async ({request})=> { // request is instance of APIRequestContext
    
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    const responseBody = await response.body()
    //get the response as a Json body
    const responseJson = await response.json();
    const responseHeader = response.headers();
    const respheaderArray = response.headersArray();
    const responseStatus = response.status();
    const responseStatusText = response.statusText()

    expect(responseStatus).toBe(200);
    expect(responseStatusText).toBe('OK');
    console.log(responseStatusText);

// Validate the reposense body content
    expect(responseJson).toHaveProperty('id', 1);
    expect(responseJson).toHaveProperty('userId',1);
    // Make sure you have to use Json body to validate the text content
    expect(responseJson.body).toContain("quia et suscipit"); // partial text match
});
