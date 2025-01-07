import dotenv from "dotenv";
dotenv.config();

import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER!;

const client = new Twilio(accountSid, authToken);

export async function sendConfirmationSms(to: string, message: string): Promise<void> {
    try {
        await client.messages.create({
            body: message,
            from: twilioPhone,
            to,
        });
        console.log(`SMS enviado para ${to}`);
    } catch (error) {
        console.error("Erro ao enviar SMS:", error);
        throw new Error("Falha no envio do SMS");
    }
}
