import { Router } from 'express';
import { usersControllers } from '../controllers/users.controllers';

const usersRoutes = Router();

const { index, show, store } = usersControllers;

usersRoutes.get('/', index);
usersRoutes.get('/:id', show);
usersRoutes.post('/', store);

export { usersRoutes };