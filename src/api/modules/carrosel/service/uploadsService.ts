import * as bcrypt from 'bcrypt';
import { prisma } from "../../../../lib/prisma.js"
import { brotliCompress } from 'node:zlib';
const saltRounds = 12
export async function registerService(nome: string, email: string, telefone: string) {

    
   
    const dados = await  prisma.user.create({
        data: {
            nome: nome,
            email: email,
            telefone: telefone
        }
    })
    return dados
}