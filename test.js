const request = require('supertest');
const app = require('./server'); // import the server

describe('Server Test Suite', () => {
    it('should respond with Method Not Allowed for non-POST /auth', async () => {
        const res = await request(app).get('/auth');
        expect(res.statusCode).toEqual(405);
        expect(res.text).toBe('Method Not Allowed');
    });

    it('should respond with Method Not Allowed for non-GET /.well-known/jwks.json', async () => {
        const res = await request(app).post('/.well-known/jwks.json');
        expect(res.statusCode).toEqual(405);
        expect(res.text).toBe('Method Not Allowed');
    });

    it('should respond with JSON for GET /.well-known/jwks.json', async () => {
        const res = await request(app).get('/.well-known/jwks.json');
        expect(res.statusCode).toEqual(200);
        expect(res.headers['content-type']).toEqual(expect.stringContaining('json'));
    });

    it('should respond with Internal Server Error for POST /auth without body', async () => {
        const res = await request(app).post('/auth');
        expect(res.statusCode).toEqual(500);
        expect(res.text).toBe('Internal Server Error');
    });

    it('should respond with Internal Server Error for POST /register without body', async () => {
        const res = await request(app).post('/register');
        expect(res.statusCode).toEqual(500);
        expect(res.text).toBe('Internal Server Error');
    });
});