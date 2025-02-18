import express from 'express';
import { getPools, createPool, joinPool, approveJoinRequest } from '../controllers/poolController.js';

const router = express.Router();

router.get('/', getPools);
router.post('/', createPool);
router.post('/:id/join', joinPool);
router.patch('/requests/:id/approve', approveJoinRequest);

export default router;