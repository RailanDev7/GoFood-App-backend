import { Vonage } from "@vonage/server-sdk";
import dotenv from 'dotenv';
dotenv.config();

const vonage = new Vonage({
   apiKey: process.env.API_KEY as string,
   apiSecret: process.env.API_SECRET as string,
})

export async function sendSMS(telefone: string): Promise<void> {
  try {
    const code: string = Math.floor(
      1000 + Math.random() * 9000
    ).toString();

    const from: string = "GoFood";
    const to: string = telefone;
    const text: string = `GoFood código: ${code}. Válido nos próximos 15 minutos.`;

    const response = await vonage.sms.send({
      to,
      from,
      text,
    });

    console.log("Mensagem enviada com sucesso:", response);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao enviar SMS:", error.message);
    } else {
      console.error("Erro desconhecido:", error);
    }
  }
}