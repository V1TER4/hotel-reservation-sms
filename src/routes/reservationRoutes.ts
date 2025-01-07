import express from "express";
import { sendConfirmationSms } from "../smsService";

const router = express.Router();

router.post('/confirm', async (req, res) => {
    const { phone, reservationId } = req.body;

    if (!phone || !reservationId) res.status(400).json({ error: "Phone e reservationId são obrigatórios" });

    const message = `Sua reserva ID ${reservationId} foi confirmada. Obrigado por escolher nosso hotel!`;

    try {
        await sendConfirmationSms(phone, message);
        res.status(200).json({ message: "SMS enviado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao enviar SMS" });
    }
});

export default router;
