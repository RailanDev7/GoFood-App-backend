import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config(); // importantíssimo

const prisma = new PrismaClient();
export default prisma;