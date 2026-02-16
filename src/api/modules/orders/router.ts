import { Router } from "express";
import type { Request, Response } from 'express';

const router = Router();

router.get('/ok', (req: Request, res: Response) => {
    res.send('ok')
})

export default router;