import { Request, Response } from 'express';
import * as todoService from '../services/todo.service.js';

export const getAll = async (_req: Request, res: Response) => {
  try {
    const todos = await todoService.getAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const todo = await todoService.create(title);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo' });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const todo = await todoService.update(Number(id), { title, completed });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
};
