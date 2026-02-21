import prisma from "../../../utils/prisma.client.js";

export async function modelCarrel() {
    const dados = await prisma.carrosel_Img.findMany();
    console.log(dados);
}

modelCarrel();