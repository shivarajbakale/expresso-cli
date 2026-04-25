import { Router } from 'express';
import * as todoController from '../controllers/todo.controller.js';

const router = Router();

router.get('/', todoController.getAll);
router.post('/', todoController.create);
router.patch('/:id', todoController.update);

export default router;
