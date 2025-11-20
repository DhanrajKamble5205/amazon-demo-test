import { test, expect } from '@playwright/test';

test('Post API Test', async function ({ request }) {
    const header = 'Content-Type: application/json';
    const datas = {
        "username": "admin",
        "password": "password123"
    }
    const req = await request.post('https://restful-booker.herokuapp.com/auth', { headers: { header }, data: datas });
    console.log(req.status())
    const responseData = await req.json();
    expect(responseData.token).not.toBeNull();
    console.log(responseData);
})  

test('Post API Call with BookingID', async function ({ request }) {
    const header = 'Content-Type: application/json';
    const bookingData = {
                "firstname": "Dhanraj",
                "lastname": "Kamble",
                "totalprice": 300,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2024-06-01",    
                    "checkout": "2024-06-10"
                }, 
    }
const req = await request.post('https://restful-booker.herokuapp.com/booking ', { headers: { header }, data:bookingData});
console.log(req.status());

const responseData = await req.json();
    console.log(responseData)

    expect(responseData.bookingid).not.toBeNull();
    expect(responseData.booking.firstname).toBe("Dhanraj");
    expect(responseData.booking.totalprice).toBe(300);
});