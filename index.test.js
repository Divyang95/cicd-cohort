const app = require('./index'); 
const request = require('supertest');


describe("Express App", () => {
    it("GET / returns Hello World", async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World');
    });

    it("GET /:id returns Hello World with id", async () => {
        const response = await request(app).get('/123');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World 123');
    }); 
})
