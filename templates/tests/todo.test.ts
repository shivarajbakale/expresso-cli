import { describe, it, expect, vi, beforeEach } from 'vitest';
import request from 'supertest';

// Mock the todo service before importing app
vi.mock('../src/services/todo.service.js', () => ({
  getAll: vi.fn().mockResolvedValue([]),
  create: vi.fn().mockResolvedValue({ id: 1, title: 'Test', completed: false }),
  update: vi.fn().mockResolvedValue({ id: 1, title: 'Updated', completed: true }),
}));

import app from '../src/app.js';
import * as todoService from '../src/services/todo.service.js';

describe('GET /todos', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return 200 status', async () => {
    const res = await request(app).get('/todos');
    expect(res.status).toBe(200);
    expect(todoService.getAll).toHaveBeenCalled();
  });
});
