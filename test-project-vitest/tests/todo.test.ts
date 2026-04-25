import request from 'supertest';
import app from '../src/app.js';
import { describe, it, expect } from 'vitest';

describe('GET /todos', () => {
  it('should return 200 status', async () => {
    const res = await request(app).get('/todos');
    expect(res.status).toBe(200);
  });
});
