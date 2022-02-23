import request from 'supertest'
import express from 'express';
import router, { ERoutes } from './apiRouter';
import { OK } from 'http-status-codes';

jest.mock('@services/products');

const app = express();
app.use('/', router);

describe('API routes', () => {
  it('responds to get request to /', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(OK);
    expect(res.text).toBe('Welcome to ProductAPI!');
  });

  it('responds to get request to /api', async () => {
    const res = await request(app).get(ERoutes.API);
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(OK);
    expect(res.text).toBe('Welcome to ProductAPI!');
  });

  it('responds to get request to /api/products', async () => {
    const res = await request(app).get(ERoutes.Products);
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(OK);
    expect(res.type).toBe('application/json');
  });

  it('responds to get request to /api/products/:id', async () => {
    const res = await request(app).get(ERoutes.Product);
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(OK);
    expect(res.type).toBe('application/json');
  });
});
