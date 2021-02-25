import { Router } from 'express';
import { app } from './app';

const router = Router();

router.get('/', (req, res) => {
    res.send({ message: 'Encurtador de Url' });
});

export { router };