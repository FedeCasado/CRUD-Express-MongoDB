import { Router } from 'express';
import { renderTask, createTask, editTask, updateTask, deletedTask, taskToggleDone } from '../controllers/task.controller'
const router = Router();

router.get('/', renderTask);
router.post('/task/add', createTask);
router.get('/edit/:id', editTask);

router.post('/edit/:id', updateTask);

router.get('/delete/:id', deletedTask);

router.get('/toggleDone/:id', taskToggleDone);

export default router;